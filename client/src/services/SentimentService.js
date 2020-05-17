import axios from 'axios';

const url = 'api/sentiments/';

class SentimentService{
  //Get Likes for a video
  static getLikes(id){
    return new Promise(async(resolve, reject) => {
      try {
        const res = await axios.get(`${url}getlikes/${id}`);
        const data = res.data;
        resolve(data);
      } catch (error) {
        reject(error)
      }
    })
  }

  //Get Dislikes for a video
  static getDislikes(id){
    return new Promise(async(resolve, reject) => {
      try {
        const res = await axios.get(`${url}getdislikes/${id}`);
        const data = res.data;
        resolve(data);
      } catch (error) {
        reject(error)
      }
    })
  }
  // Like a video
  static likeAVideo(id){
      try {
          return axios.post(`${url}savelike`, {
            "videoId": id
          })
      } catch (error) {
          return error;
      }
  }
  // disLike a video
  static dislikeAVideo(id){
    try {
        return axios.post(`${url}savedisike`, {
          "videoId": id
        })
    } catch (error) {
        return error;
    }
  }

}

export default SentimentService;