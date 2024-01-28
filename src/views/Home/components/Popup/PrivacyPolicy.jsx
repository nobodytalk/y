import React, { useState, useEffect } from 'react';
import MainContainer from '../../../../components/MainContainer';
import Header from '../../../../components/Header';
import { PrivacyGetPost } from '../../../../api/page';
import {PopupWrapper,
    Wrapper,
    Content
} from './styled';

const PrivacyPolicy = (props) => {

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

    return (
        <PopupWrapper show={props.show} onClose={props.onClose}>
            <MainContainer>
                <Wrapper>
                    {props.show && (<Header title={page_item.post_title ? page_item.post_title : '개인정보 처리방침'} onBack onClick={props.onClose} bordercolor="#f2f2f2"/>)}
                    <Content dangerouslySetInnerHTML={{
                                __html: page_item.post_content
                        }}>
                    </Content>
                </Wrapper>
            </MainContainer>
        </PopupWrapper>
    );
};

export default PrivacyPolicy; 
