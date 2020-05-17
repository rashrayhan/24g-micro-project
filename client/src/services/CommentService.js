import axios from 'axios';

const url = 'api/comments/';

class CommentService{
  //Get Comment for a video
  static getComments(id){
    return new Promise(async(resolve, reject) => {
      try {
        const res = await axios.get(`${url}${id}`);
        const data = res.data;
        resolve(data.map(comments => ({...comments})));
      } catch (error) {
        reject(error)
      }
    })
  }
  //Post Comments for a video
    static insertComment(id, comment){
        try {
            return axios.post(url, {
                    "commentTo": id,
                    "content": comment
            })
        } catch (error) {
           return error;
        }
    }
}

export default CommentService;