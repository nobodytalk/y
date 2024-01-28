import axios from './defaultClient';

const nameSpace = 'ep/v1/user';

export const GetMe = async (args) => {
    return await axios.get( nameSpace + '/me',{})
}

