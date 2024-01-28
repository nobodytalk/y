import axios from './defaultClient';

const nameSpace = 'ep/v1/page';

export const PrivacyGetPost = async (args) => {
    return await axios.get( nameSpace + '/2906', {  // get - 개인정보취급방침

    })
}

export const ServiceGetPost = async (args) => {
    return await axios.get( nameSpace + '/2912', {  // get - 이용약관

    })
}

export const FinancialGetPost = async (args) => {
    return await axios.get( nameSpace + '/2917', {  // get - 전자금융거래 이용약관

    })
}