
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '2506f68337msh7a931838f6ce063p12a5e6jsn77f06801a155',
		'x-rapidapi-host': 'shazam.p.rapidapi.com'
	}
};



export class API{
    // Popüler şarkıları alan fonk
  async  getPopular(){
//         const url = 'https://shazam.p.rapidapi.com/search?term=Neffex';

//         const response=await fetch(url,options)
       
//        const data= await response.json()
//      const formattedData=data.tracks.hits.map((item)=>item.track)
//   return formattedData

//! Api yukarda bize 5 adet veri getiriyor bunu zenginleştirelim

const data1=await this.searchMusic("neffex")
const data2=await this.searchMusic("eminem")
const data3=await this.searchMusic("manga")
// const data=data1.concat(data2)
return [...data1,...data2,...data3]
}


    // Aratılan şarkıları veren fonk
  async  searchMusic(query){
        const url = `https://shazam.p.rapidapi.com/search?term=${query}`;

       const res= await fetch(url,options)

       const data=await res.json()
      const formattedData= data.tracks.hits.map((item)=>item.track)

      return formattedData
       
    }
}