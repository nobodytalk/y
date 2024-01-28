import axios from './defaultClient';

const nameSpace = 'ep/v1/auth';

export const SignUp = async (args) => {
    return await axios.post( nameSpace + '/',{
        user_name: args.user_name,
        user_birth_1: args.user_birth_1,
        user_birth_2: args.user_birth_2,
        user_phone_company: args.user_phone_company,
        user_phone: args.user_phone,
        sms_auth_code: args.sms_auth_code,
        sns_auth: args.sns_auth
        // {
        //     // type : args.type,
        //     // user_email : args.user_email,
        //     // token: args.token
        // }
    })
}

export const smsAuth = async (args) => {
    return await axios.post( nameSpace + '/sms/',{
        user_name: args.user_name,
        user_phone: args.user_phone,
    })
}
export const smsSignUp = async (args) => {
    return await axios.post( nameSpace + '/signup/sms',{
        user_name: args.user_name,
        user_phone: args.user_phone,
        sms_auth_code: args.sms_auth_code,
    })
}

export const SnsAuth = async (args) => {
    return await axios.post( nameSpace + '/sns',{
        id: args.id,
        type : args.type
    })
}


export const isLogind = async () =>{
    return await axios.post('jwt-auth/v1/token/validate');
}