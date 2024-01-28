import React, { useState, useEffect } from 'react';
import MainContainer from '../../../../components/MainContainer';
import Header from '../../../../components/Header';
import {Wrapper, Content} from './styled';
import { ServiceGetPost } from '../../../../api/page';

const ServicePolicy = () => {

    const [page_item, set_page_item] = useState("");
    useEffect(() => {
        if(!page_item){
            ServiceGetPost({})
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
        <MainContainer>
            <Wrapper>
                <Header title={page_item.post_title ? page_item.post_title : '서비스 이용약관'} onClose to="/auth" bordercolor="#f2f2f2"/>
                {/* {page_item.post_content ? page_item_post_content : ''} */}
                    <Content dangerouslySetInnerHTML={{
                                __html: page_item.post_content
                        }}>
                    </Content>
            </Wrapper>
        </MainContainer>
    );
};

export default ServicePolicy;