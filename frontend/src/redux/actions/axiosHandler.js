import axios from "axios";


const url = (process.env.NODE_ENV !== 'production')
  ? 'http://localhost:5000'
  : 'https://rlu-shop-mern.herokuapp.com';

const instance = axios.create({
    baseURL: url
  });

export default instance;
