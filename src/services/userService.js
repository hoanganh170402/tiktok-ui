import * as request from '~/utils/httpRequest';

const getSuggest = async ({ page, perPage}) => {
    try {
        const result = await request.get(`users/suggested`, {
            params: {
                page,
                per_page: perPage
            },
        });
        return result;
    } catch (error) {
        console.log('Failed to fetch search results:', error);
    }
};

export { getSuggest };
