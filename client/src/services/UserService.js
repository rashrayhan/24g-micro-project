import axios from 'axios';

const url = 'api/users/';

class UserService{
  //Get all Users
  static getUsers(){
    return new Promise(async(resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(data.map(users => ({...users})));
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default UserService;