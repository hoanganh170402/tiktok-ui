import * as request from '~/utils/httpRequest';

const getSuggested = async ({ page, perPage }) => {
    try {
        const result = await request.get('users/suggested', {
            params: {
                page,
                per_page: perPage,
            },
        });
        return result.data;
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
};

export { getSuggested };
