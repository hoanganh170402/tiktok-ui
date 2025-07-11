import * as request from '~/utils/httpRequest';

const getVideos = async ({ type = 'for-you', page = 1 }) => {
    try {
        const result = await request.get('users/suggested', {
            params: {
                type,
                page,
            },
        });
        return result.data;
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
};

export { getVideos };
