import axios from './defaultClient';

const nameSpace = 'ep/v1/story';

export const StoryGetPosts = async (args) => {
    return await axios.get( nameSpace + '/', {  // get - story 리스트

    })
}