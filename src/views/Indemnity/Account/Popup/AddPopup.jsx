import React, {useEffect, useState} from 'react';
import Popup from '../../../../components/Popup';
import {
    AddPopupWrapper,
    AddPopupContent,
} from './styled';

import {IndemnityGetPosts} from '../../../../api/indemnity';
import {useParams} from 'react-router-dom';
import ButtonGroup from '../../../../components/ButtonGroup';
import Button from '../../../../components/Button';

const AddPopup = (props) => {
    

    const params = useParams();
    const [obi_add, set_obi_add] = useState('');

    useEffect(() => {
        if(!obi_add) {
            IndemnityGetPosts({
                obituary_ID: params.obituary_ID
            })
            .then((response) => {
                if(response.data.code == '200'){
                }
            })
            .catch((error) => console.log(error))
        }
    })

    return (
        <Popup show={props.show} onClose={props.onClose} padding="20px 0px 80px 0px;">
            <AddPopupWrapper>
                <AddPopupContent>
                    <img src={process.env.PUBLIC_URL + '/img/addpopupimg1.png'} alt="" />
                    <h1>
                        다른 상주님의 부의금 계좌<br />
                        추가개설은 결제가 필요합니다.
                    </h1>
                    <p>
                        계좌 도용을 방지하기 위한<br />
                        유료서비스로 부의금계좌 정책은 <br />
                        투명하게 관리/운영되고 있습니다.
                    </p>
                    <span>※계좌인증 (40원) + 시스템유지보수</span>
                    <ButtonGroup position="bottom">
                        <Button type="default" width="30%" onClick={props.onClose}>취소</Button>
                        <Button type="primary" width="70%" to={"/obituary/"+params.obituary_ID+"/indemnity/accountadd/1"}>부의금계좌추가</Button>
                    </ButtonGroup>
                </AddPopupContent>
            </AddPopupWrapper>
        </Popup>
    );
};

export default AddPopup;