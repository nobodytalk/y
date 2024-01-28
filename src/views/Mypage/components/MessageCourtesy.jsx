import React from 'react';
import Input from '../../../components/Input';
import InputBind from '../../../components/InputBind';
import InputGroup from '../../../components/InputGroup';

const MessageCourtesy = () => {
    return (
        <>
            <Input
                type="textarea"
                width="100%"
                height="330px"
                padding="20px"
                value={`감사 인사 드립니다.\n\n이번 저희 OOO상사시에\n공사다망 하심에도 불구하고\n조의와 위로 덕분에\n무사히 상례를 마치게 도와주신데\n대하여 진심으로 감사드립니다.\n\n마땅히 찾아 뵙고 인사 드리는 것이\n도리이오니 황망 중이라\n서면으로 인사 드리게 됨을\n해량해주시기 바랍니다.\n\n항상 건승하시고 만복이 깃드시길\n기원합니다.\n\n10월27일\n홍상주배상`}/>
        </>
    );
};

export default MessageCourtesy;