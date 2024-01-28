import React,{ useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../store/global';
import Header from '../../../components/Header';
import MainContainer from '../../../components/MainContainer';
import {FaqGetPosts} from '../../../api/faq';
import {
    FaqWrapper,
    FaqContent,
    FaqAnswer,
    Answer,
    Arrow,
} from '../styled';

const arrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 6 9">
                    <g fill="none" fill-rule="evenodd">
                        <g fill="#888888" fill-rule="nonzero">
                            <g>
                                <g>
                                    <path d="M69.92 11.515l-.4-.43c-.054-.056-.116-.085-.185-.085-.07 0-.131.029-.184.086L66 14.462l-3.15-3.376c-.054-.057-.115-.086-.185-.086-.07 0-.13.029-.184.086l-.4.43c-.054.057-.081.123-.081.197 0 .075.027.14.08.198l3.736 4.003c.053.057.115.086.184.086.07 0 .13-.029.184-.086l3.736-4.003c.053-.058.08-.123.08-.198 0-.074-.027-.14-.08-.198z" transform="translate(-319 -504) translate(20 492) translate(236 3) rotate(-90 66 13.5)"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>

const Faq = () => {
    const Dispatch = useDispatch();

    const [faq, set_faq] = useState('');
    const [service, set_service] = useState(0);

    const Toggle = (key) => {
        if(service != key){
            set_service(key);
        } else {
            set_service(0);
        }
    }


    useEffect(() => {
        if(!faq){
            Dispatch(SetLoading(1));

            FaqGetPosts()
            .then((response) => {
                if(response.data.code == "200"){
                    Dispatch(SetLoading(0));
                    set_faq(response.data.body.posts);
                    console.log(response.data.body.posts);
                    console.log('aaaa');                
                }
            })
            .catch((error) => console.log(error))
        }
    })

    return (
        <MainContainer>
            <Header title="자주 묻는 질문" onBack to="/#/" onHome/>
            <FaqWrapper>
                {faq ? faq.map((item, key) => {
                    return (
                        <>
                            <FaqContent onClick={(e) => Toggle(key+1)} isopen={service == key+1}>
                                <h1>{item.cate_name ? item.cate_name : ''}</h1>
                                <h2>{item.title ? item.title : ''}</h2>
                                <Arrow isopen={service == key+1}>
                                    {arrowIcon}
                                </Arrow>
                            </FaqContent>
                            <FaqAnswer isopen={service == key+1}>
                                <Answer dangerouslySetInnerHTML={{
                                    __html: item.content ? item.content : ''
                                }} />
                            </FaqAnswer>
                        </>
                    )
                }) : (<p><br/>아직 자주묻는 질문이 없습니다.</p>)}
            </FaqWrapper>
        </MainContainer>
    );
};

export default Faq;