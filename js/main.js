import { API } from "./api.js";
import { UI } from "./ui.js";

const api=new API()
const ui=new UI()

//Sayfa yüklendiği anı izle ve fonk çalışır

document.addEventListener("DOMContentLoaded",async ()=>{
  // renderlama öncesi loader render et

 ui.renderLoader()

//apiye atılan istekle gelen verileri renderla
   api.getPopular()
   .then((data)=>ui.renderCards(data))
   .catch((err)=>{
    console.log(err);
    
   })
  
   
})



// Form gönderildiğinde bunu izle ve bir fonk çalıştır
ui.form.addEventListener("submit",(e)=>{
    e.preventDefault()
    // form gönderildiğnde input içindeki değere eriş
    const query=e.target[0].value

    //Aratılan kelimenin başında ve sonunda bulunan boşlukları kaldır ve query yoksa uyarı ver

    if(!query.trim()){
       return alert("Lütfen geçerli bir isim giriniz")
        
    }

    ui.renderLoader()

    //Title güncelle
    ui.upDateTitle(query)

  api.searchMusic(query)
  .then((data)=>ui.renderCards(data))
  .catch((err)=>alert(err));
    
})

// liste kısmındaki play ikonuna tıklayınca arayüzü bu şarkı verilerine göre renderla

ui.list.addEventListener("click",(e)=>{
    if(e.target.className=="play"){
        const card=e.target.closest(".card")

        const data=card.dataset;
        // Player kısmını render et
        ui.renderPlayer(data)
    }
    
})
