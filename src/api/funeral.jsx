import axios from './defaultClient';

const nameSpace = 'ep/v1/funeral';

export const FuneralGetPosts = async (args) => {
    return await axios.get( nameSpace + '/', {  // get - 장례식장 리스트
        params: {
            keyword: args.keyword,
            posts_per_page: args.posts_per_page,
            page: args.page
        }
    })
}

export const FuneralGetPost = async (args) => {
    return await axios.get( nameSpace + '/' + args.funeral_ID, { 
        params: {
            is_order: args.is_order ? args.is_order : ''
        }
    }) // get - 장례식장 싱글
    
}

