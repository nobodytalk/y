import React from 'react';
import Input from '../../../components/Input';
import InputBind from '../../../components/InputBind';
import InputGroup from '../../../components/InputGroup';

const MessageNormal = () => {
    return (
        <>
            <Input 
                type="textarea"
                width="100%"
                height="330px"
                padding="20px 20px"
                value={``}
            />
        </>
    );
};

export default MessageNormal;