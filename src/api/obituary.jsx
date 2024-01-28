import axios from './defaultClient';

const nameSpace = 'ep/v1/obituary';

export const ObituaryInit = async args => {
  return await axios.post(nameSpace + '/tmp/', {
    // tmp
  });
};

export const ObituaryInsertPost = async args => {
  return await axios.post(nameSpace + '/', {
    // 부고 작성
    user_name: args.user_name,
    user_phone: args.user_phone,
    sms_auth_code: args.sms_auth_code,
    obituary_ID: args.obituary_ID,
    deceased: args.deceased,
    age: args.age,
    death_date: args.death_date,
    borne_out_date: args.borne_out_date,
    borne_in_date: args.borne_in_date,
    burial_plot: args.burial_plot,
    funeral_ID: args.funeral_ID,
    funeral_home: args.funeral_home,
    partnerCode: args.partnerCode,
    mourner: args.mourner,
    memo: args.memo,
  });
};

export const ObituaryGetPost = async args => {
  // get- 싱글
  return await axios.get(nameSpace + '/' + args.obituary_ID, {});
};

export const ObituaryGetPosts = async args => {
  // get- 부고리스트
  return await axios.get(nameSpace + '/', {
    params: {
      keyword: args.keyword,
      author_ID: args.author_ID,
    },
  });
};

export const ObituaryUpdatePost = async args => {
  return await axios.update(nameSpace + '/', {
    // update - 수정
    obituary_ID: args.obituary_ID,
    deceased: args.deceased,
    age: args.age,
    death_date: args.death_date,
    borne_out_date: args.borne_out_date,
    borne_in_date: args.borne_in_date,
    burial_plot: args.burial_plot,
    funeral_ID: args.funeral_ID,
    funeral_home: args.funeral_home,
    mourner: {
      KEY: args.KEY,
      relation: args.relation,
      name: args.name,
      phone: args.phone,
    },
    gallery: {
      attachment_ID: args.attachment_ID, // <- 대괄호 ?
    },
  });
};

export const ObituaryDeletePost = async args => {
  return await axios.delete(nameSpace + '/' + args.obituary_ID, {
    // delete - 삭제
  });
};

export const ObituaryUploadGalleryImages = async (args, obituary_ID) => {
  // post - 추모갤러리 이미지 업로드
  return await axios.post(nameSpace + '/gallery/' + obituary_ID, args, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
};

export const ObituaryGetGallery = async args => {
  // get - 이미지 리스트
  return await axios.get(nameSpace + '/gallery', {
    params: {
      obituary_ID: args.obituary_ID,
      posts_per_page: args.posts_per_page,
      page: args.page,
    },
  });
};

export const ObituaryDeleteGalleryImage = async args => {
  // delete - 이미지 삭제
  return await axios.delete(nameSpace + '/gallery', {
    params: {
      attachment_ID: args.attachment_ID,
    },
  });
};

export const ObituaryGetComments = async args => {
  // get - 코멘트 리스트 (조문메세지)
  return await axios.get(nameSpace + '/comment', {
    params: {
      obituary_ID: args.obituary_ID,
    },
  });
};

export const ObituaryInsertComments = async args => {
  // post - 코멘트 작성
  return await axios.post(nameSpace + '/comment', {
    obituary_ID: args.obituary_ID,
    comment_content: args.comment_content,
    comment_author_name: args.comment_author_name,
  });
};

export const ObituaryDeleteComments = async args => {
  // delete - 코멘트 삭제
  return await axios.delete(nameSpace + '/comment', {
    // comment -> :obituary_ID 변경 ?
    params: {
      comment_ID: args.comment_ID,
    },
  });
};

export const ObituaryGetTotal = async args => {
  // get - 부고 총 개수
  return await axios.get(nameSpace + '/total', {});
};
