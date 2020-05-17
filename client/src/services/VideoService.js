import axios from 'axios';

const url = 'http://localhost:4600/api/videos/';

class VideoService{
  //Get Videos
  static getVideos(){
    return new Promise(async(resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data.map(videos => ({...videos})));
      } catch (error) {
        reject(error)
      }
    })
  }
  //Get Video by ID
  static getVideo(id){
    return new Promise(async(resolve, reject) => {
      try {
        const res = await axios.get(`${url}${id}`);
        const data = res.data;
        resolve(data);
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default VideoService;