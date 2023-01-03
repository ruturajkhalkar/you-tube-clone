import axios from "axios";

 export const Base_url = 'https://youtube-v31.p.rapidapi.com';

 const options = {
  
  params: {part: 'snippet', videoId: 'M7FIvfx5J10',maxResults: 50,},
  headers: {
    'X-RapidAPI-Key': '5799748b04msh61c614149f236eap1e00e2jsn1074881f0305',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};;
  export const fetchFromAPI = async (url)=>{
       const {data} = await axios.get(`${Base_url}/${url}`,options);

     return data;  
  }