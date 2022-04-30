import axios from 'axios';

const API = axios.create({baseUrl: "https://ftnearby.herokuapp.com/"});

export default API;
