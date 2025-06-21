import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const get = async (path, params = {}) => {
    const respone = await request.get(path, params);
    return respone.data;
};

export { get };
export default request;
