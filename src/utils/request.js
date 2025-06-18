import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

const get = async (path, params = {}) => {
    const respone = await request.get(path, params);
    return respone.data;
};

export { get };
export default request;
