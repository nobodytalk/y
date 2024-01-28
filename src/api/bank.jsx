import axios from './defaultClient';

const nameSpace = 'ep/v1/bank';

export const GetBank = async (args) => {
    return await axios.get( nameSpace + '/',{
        
    })
}