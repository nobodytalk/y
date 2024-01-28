import React, { useState, useEffect } from 'react';
import Header from '../../Header';
import Popup from '../../Popup';
import { PrivacyGetPost } from '../../../api/page';
import {
    PrivacyWrapper,
    Privacy,
    Title,
    Content,
    Wrapper,
} from './styled';

const PrivacyPopup = (props) => {
    const [page_item, set_page_item] = useState("");
    useEffect(() => {
        if(!page_item){
            PrivacyGetPost({})
            .then(response => {
                if(response.data.code == 200){
                    set_page_item(response.data.body);
                }
            })
            .catch(error => console.log(error));
        } 
        console.log(page_item);
    });
    return(
        <Popup padding="20px 10px" show={props.show} onClose={props.onClose}>
            <PrivacyWrapper>
                <Wrapper>
                    <Privacy>
                        {props.show && (<Header title={page_item.post_title ? page_item.post_title : '개인정보 처리방침'} onClose onClick={props.onClose} bordercolor="#f2f2f2"/>)}
                        <Content dangerouslySetInnerHTML={{
                                __html: page_item.post_content
                        }}>
                    </Content>
                    </Privacy>
                </Wrapper>
            </PrivacyWrapper>
        </Popup>
    )
}

export default PrivacyPopup;