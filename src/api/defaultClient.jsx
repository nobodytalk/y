import axios from 'axios';

// const jwt_token = "your-top-secret-key";

axios.defaults.withCredentials = true;

const localToken = localStorage.getItem('user_token');

if(localToken) {
    axios.defaults.headers.common = {'Authorization': `Bearer ${localToken}`}
}
// axios.defaults.headers.common = {'Content-Type': 'multipart/form-data'};

const baseURL = (() => {
  return 'https://wp.yepum.co.kr/wp-json/';
})();

const defaultClient = axios.create({
  baseURL,
  // jwt_token,
  withCredentials: true,
});


export default defaultClient;