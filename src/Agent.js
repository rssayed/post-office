import axios from 'axios'

export const API = 'localhost:5000';

export const fetchData = async query => {
    const url = `${API}/search?query=${query}`;

    return await axios.get(url);
};