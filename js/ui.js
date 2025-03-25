export class UI{
    //Kurucu metot
    constructor(){
        this.form=document.querySelector("form")
        this.list=document.querySelector(".list")
        this.title=document.querySelector("#title")
        this.player=document.querySelector(".player")
}


//Yazı Title düzenleyen func

sliceText(text){
    if(text.length>15){
        return text.slice(0,15)+"..."
    }else{
        return text
    }
}



//Şarkıları render eden fonk 
        renderCards(songs){
           this.list.innerHTML=""
            
            songs.forEach((song)=>{
                //Bir tane div oluştur
                const card=document.createElement("div")

                //Oluşturulan bu lemana "card klası ekle"

                card.className="card"
                //card elemanına şarkı ile ilgili değerleri ata
                card.dataset.title=song.title
                card.dataset.subtitle=song.subtitle
                card.dataset.img=song.images.coverarthq
                card.dataset.mp3=song.hub.actions[1].uri

                card.innerHTML=`   <figure>
                  <img src="${song.images.coverarthq}" alt="">
                  <div class="play">
                    <i class="bi bi-play-fill" ></i>
                  </div>
                </figure>
                <div class="card-info">
                  <h4>${this.sliceText(song.title)}</h4>
                  <h4>${song.subtitle}</h4>
                </div>`

                // Oluşturulan bu HTML yi arayüze aktar

                this.list.appendChild(card)

            })
        }

        //Loader render eden fonksiyon

        renderLoader(){
            this.list.innerHTML=` 
<div class="loader">
  <div class="cell d-0"></div>
  <div class="cell d-1"></div>
  <div class="cell d-2"></div>

  <div class="cell d-1"></div>
  <div class="cell d-2"></div>
  
  
  <div class="cell d-2"></div>
  <div class="cell d-3"></div>
  
  
  <div class="cell d-3"></div>
  <div class="cell d-4"></div>
  
  
</div>`
        }

        // title güncelleyen fonk

        upDateTitle(text){
            this.title.textContent=text+" "+"için sonuçlar :"
        }
        // Animasyon ayarlaması yapan fonk

        toggleAnimation(){
         const image=this.player.querySelector(".info img")
         image.classList.toggle("animate")
        }

        //Player kısmını dinamik şekilde renderlayacak funk

        renderPlayer(song){
        this.player.innerHTML=`<div class="info">
        <img src="${song.img} " alt="">
        <div>
          <h5>${song.title} </h5>
          <p>${song.subtitle} </p>
        </div>
      </div>
      <audio src="${song.mp3} " controls autoplay muted
      ></audio>
      <div class="icons">
        <i class="bi bi-music-note-list"></i>
        <i class="bi bi-boombox"></i>
        <i class="bi bi-pc-display"></i>
      </div>`

      //Şarkı oynatılıyorsa img ye animasyon ekle döndür durdurulursa kaldır


      //audio ya eriş 
      const audio=this.player.querySelector("audio")
      //audio elemanının oynatılma ve durdurulma olaylarını izle

      audio.addEventListener("play",()=>{
        this.toggleAnimation()
        
      })

      audio.addEventListener("pause",()=>{
        this.toggleAnimation()
        
      })
        }
}