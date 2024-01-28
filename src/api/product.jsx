import axios from './defaultClient';

const nameSpace = 'ep/v1/flower';

export const ProductGetPosts = async (args) => {
    return await axios.get( nameSpace + '/', {  // get - 화환 리스트
        params:{
            price_range: args.price_range,
            relation: args.relation,
            category: args.category,
            funeral_ID: args.funeral_ID,
            obituary_ID: args.obituary_ID,
            posts_per_page: args.posts_per_page,
            paged: args.paged
        }
    })
}

export const ProductGetPost = async (args) => {
    return await axios.get( nameSpace + '/'+args.product_ID, {})
}

export const ProductGetFlowerSlider = async (args) => {
    return await axios.get( nameSpace + '/slider/', {})
}

