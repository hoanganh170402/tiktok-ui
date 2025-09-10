import * as request from '~/utils/httpRequest';

const getVideos = async (type, page) => {
    try {
        const result = await request.get(`videos`, {
            params: {
                type,
                page,
            },
        });
        return result.data;
    } catch (error) {
        console.log('Failed to fetch search results:', error);
        return []; // fallback an toàn
    }
};

export { getVideos };
