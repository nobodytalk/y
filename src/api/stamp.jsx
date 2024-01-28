import axios from './defaultClient';

const nameSpace = 'ep/v1/stamp';

export const StampGetStamp = async (args) => {
    return await axios.get( nameSpace + '/', {} );
}

export const StampSend = async (args) => {
    return await axios.post( nameSpace + '/send', {  // post - 스탬프 선물받기
        send_type: args.send_type
    })
}