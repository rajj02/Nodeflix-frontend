import React,{useEffect, useState} from 'react'
import videoService from '../services/VideoService'
const Home = () => {
    const [allVideos, setAllVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await videoService.getAllVideos();  
                setAllVideos(response);           
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

    }, []);

    console.log(allVideos); 
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {
      allVideos.length !== 0 && allVideos.map((item, index) => (
        <div key={index} className="rounded-md video-container">
          <video controls width="100%" poster={item.thumbnail} height="100%" className="rounded-lg">
            <source src={item.videoFile} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
           <div >
              <p className="text-white">{item.title} : {item.description}</p>
           </div>
        </div>
      ))
    }
  </div>
  )
}

export default Home
