import { allVideosUrl } from "../constants/constant";

export class VideoService{

    constructor(){

    }

    async getAllVideos()
    {
       try{
         const response = await fetch(allVideosUrl,{
            method:'GET'
         })
         if(response.ok)
         {
            const allVideos = await response.json();
            console.log(allVideos.data[0].videoFile);
            return allVideos.data; 
         }
       }catch(err){
          console.log("video not found",err)
       }
    }
}

const videoService = new VideoService();

export default videoService;