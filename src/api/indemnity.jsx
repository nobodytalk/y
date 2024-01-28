import axios from './defaultClient';


const nameSpace = 'ep/v1/indemnity';

export const IndemnityInsertPost = async (args) => { // post - 부의금 작성
    return await axios.post( nameSpace + '/',{
        obituary_ID: args.obituary_ID,
        mourner_KEY: args.mourner_KEY,
        birth_1: args.birth_1,
        birth_2: args.birth_2,
        account_name: args.account_name,
        bank: args.bank,
        account_number: args.account_number,
        payment_key: args.payment_key
    })
}

export const IndemnityGetPost = async (args) => { // get - 부의금 싱글
    return await axios.get( nameSpace + '/'+args.indemnity_ID,{})
}

export const IndemnityGetPosts = async (args) => {  // get - 부의금 리스트
    return await axios.get( nameSpace + '/',{
        params:{
            obituary_ID: args.obituary_ID
        }
    })
}

export const IndemnityUpdatePost = async (args) => {  // update - 부의금 수정

    return await axios.patch( nameSpace + '/' + args.indemnity_ID,{
        obituary_ID: args.obituary_ID,
        mourner_KEY: args.mourner_KEY,
        birth_1: args.birth_1,
        birth_2: args.birth_2,
        account_name: args.account_name,
        bank: args.bank,
        account_number: args.account_number
    })
}

export const IndemnityDeletePost = async (args) => {  // delete - 부의금 삭제
    return await axios.delete( nameSpace + '/' + args.indemnity_ID, {})
}

export const IndemnityAccountAuth = async (args) => {  // post - 계좌 실명 확인
    return await axios.post( nameSpace + '/account_auth/', {
        birth_1: args.birth_1,
        birth_2: args.birth_2,
        account_name: args.account_name,
        bank: args.bank,
        account_number: args.account_number,
    })
}

export const IndemnityPaymentCallback = async (args) => {
    return await axios.post( nameSpace + '/payment_callback/', {
        imp_uid: args.imp_uid,
        merchant_uid: args.merchant_uid
    })
}

export const IndemnitySMSPost = async (args) => {
    return await axios.post (nameSpace + '/send/', {
        type: args.type,
        indemnity_ID: args.indemnity_ID,
        phone: args.phone
    })
}