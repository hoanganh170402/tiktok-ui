import * as request from '~/utils/httpRequest';

const search = async (q, type = 'less') => {
    try {
        const result = await request.get(`users/search`, {
            params: {
                q,
                type,
            },
        });
        return result.data;
    } catch (error) {
        console.log('Failed to fetch search results:', error);
    }
};

export { search };
