import React, { useEffect } from 'react';
import Button from '../../../components/Button';
import ButtonGroup from '../../../components/ButtonGroup';
import { 
    JoinContent, 
    JoinWrapper 
} from './styled';

const JoinComplete = () => {

     function go_url(){
        window.location.href="/#"
     }

    useEffect(() => {
        setTimeout(go_url, 3000)
    })

    return (
        <>
            <JoinWrapper>
                <JoinContent>
                    <h1>
                        멀리 떨어져 있어도,<br />
                        시간이 없어도,
                    </h1>
                    <h1>
                        소중한 분께
                    </h1>
                    <h2>
                        예를 다하여<br />
                        마음을 전해보세요.
                    </h2>
                </JoinContent>
                {/* <ButtonGroup position="bottom">
                    <Button type="primary" bgColor="#fff" color="#111" to="/#">가입 완료</Button>
                </ButtonGroup> */}
            </JoinWrapper>
        </>
    );
};

export default JoinComplete;