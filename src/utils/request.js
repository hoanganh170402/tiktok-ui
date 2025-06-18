import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

const get = async (path, params = {}) => {
    const response = await request.get(path, params)
    return response.data
};

export { get };
export default request;
