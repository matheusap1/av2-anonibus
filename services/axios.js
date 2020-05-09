import axios from 'axios';
const api = axios.create({
 baseURL: 'https://us-central1-av2-anonibus.cloudfunctions.net',
});
export default api;