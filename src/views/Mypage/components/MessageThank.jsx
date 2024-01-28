import React from 'react';
import Input from '../../../components/Input';
import InputBind from '../../../components/InputBind';
import InputGroup from '../../../components/InputGroup';

const MessageThank = () => {
    return (
        <>
            <Input 
                type="textarea"
                width="100%"
                height="330px"
                padding="20px"
                value={`큰 슬픔으로 경황이 없던 저에게\n많은 위로를 주시고\n힘든 자리에 함께 해주셔서 감사합니다.\n\n덕분에 크나큰 위안이 되었고\n무사히 장례를 치렀습니다.\n\n이제야 마음을 추스르고\n일상으로 조금씩 돌아가려 합니다.\n\n앞으로 어려움이 생기시면\n언제든 연락바랍니다.\n보답할 기회로 생각하고\n성심을 다하겠습니다.\n\n10월 27일\n홍상주 배상`}/>
        </>
    );
};

export default MessageThank;