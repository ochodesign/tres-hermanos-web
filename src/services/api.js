import axios from 'axios';
import config from '../config/config';

const api = axios.create({
    baseURL: config.apiURL,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const sendContactForm = async (data) => {
    try {
        const response = await api.post('/contacto.php', data);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Network Error');
    }
};

export default api;
