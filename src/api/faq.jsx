import axios from './defaultClient';

const nameSpace = 'ep/v1/faq';

export const FaqGetPosts = async (args) => {
    return await axios.get( nameSpace + '/', {  // get - faq 리스트

    })
}