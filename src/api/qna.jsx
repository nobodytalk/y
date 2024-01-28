import axios from './defaultClient';

const nameSpace = 'ep/v1/qna';

export const QnaInsertPost = async (args) => {
    return await axios.post( nameSpace + '/', {  // get - qna 문의하기

    })
}