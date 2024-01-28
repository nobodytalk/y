import React, {useState, useEffect, useRef} from 'react';
import styled from 'styled-components';
import Header from '../../../components/Header';
import MainContainer from '../../../components/MainContainer';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import ServicePopup from '../Service/Popup/ServicePopup';
import GuidePopup from './Popup/GuidePopup';
import {useParams} from 'react-router-dom';
import {copyToClipboard} from 'react-copy-to-clipboard';
import {Clipboard} from 'react-clipboard.js';
import {
    ServiceWrapper,
    ServiceTitle,
    ServiceContentWrapper,
    ServiceContent,
    Service,
    } from './styled';
import { IndemnityGetPosts} from '../../../api/indemnity';

const AccountService = () => {
    
    const params = useParams();
    const [indemnity_list, Set_indemnity_list] = useState(0);
    const [copyAccount, setCopyAccount] = useState('');

    const copy_input = useRef('');
    
        
    const [ServicePopup_isshow, show_ServicePopup] = useState(0);
    const showServicePopup = (e) => {
        e.preventDefault();
        if(ServicePopup_isshow) {
            show_ServicePopup(0);
        } else {
            show_ServicePopup(1);
        }
    }
    const [GuidePopup_isshow, show_GuidePopup] = useState(0);
    const showGuidePopup = (e) => {
        e.preventDefault();
        if(GuidePopup_isshow) {
            show_GuidePopup(0);
        } else {
            show_GuidePopup(e.currentTarget.dataset.id);
        }
    }

    const CopyAccount = (e) => {
        setCopyAccount(e.target.dataset.value);
        copy_input.current.value = e.target.dataset.value;
        copy_input.current.select();
        document.execCommand('copy');
        e.target.focus();
        alert('계좌번호 복사가 완료되었습니다.')
        console.log(e.target.dataset);
    }

    useEffect(() => {
        if(!indemnity_list){
            IndemnityGetPosts({
                obituary_ID: params.obituary_ID,
            })    
            .then((response) => {
                if(response.data.code == '200'){
                    Set_indemnity_list(response.data.body.posts)
                    console.log(response.data.body.posts);
                }
            })
            .catch((error) => console.log(error))
        }
    })

    const isfront = window.location.pathname.slice(1,6);
    
    return (
        <MainContainer>
            <Header onBack onHome={isfront == 'front' ? 0 : 1} to={(isfront == 'front' ? '/front' : '')+"/obituary/"+params.obituary_ID}  background="#24243a" color="white" title="부의금 서비스" border="rgba(242, 242, 242, 0.1)"/>
            <ServiceWrapper>
                <ServiceTitle>
                    <h1>마음을 전하는</h1>
                    <h1>부의금 계좌를 안내합니다.</h1>
                    <p onClick={showServicePopup}>
                        부의금 계좌 안내
                        <img src={process.env.PUBLIC_URL + '/img/serviceimg1.png'} alt="" />
                    </p>
                </ServiceTitle>
            </ServiceWrapper>
            <Hidden>
                <input type="text" ref={copy_input} name="copy_account" value={copyAccount}/>
            </Hidden>
            {indemnity_list ? indemnity_list.map((item,key) => (
            <ServiceContentWrapper>
                <ServiceContent>
                    <Service>
                        <>
                            <h1>{item.mourner_name ? item.mourner_name : ''}<h2>님의 부의금 계좌</h2></h1>
                            
                            <strong>{item.bank ? item.bank : ''}</strong>
                            
                            <small>{item.account_number ? item.account_number: ''}</small>
                        </>
                    </Service>
                    <ButtonGroup>
                        <Button type="primary" to="#" bgColor="#f7f7f7" color="#111" onClick={CopyAccount} data_value={item.account_number ? item.account_number+ ' '+item.bank+' '+item.account_name : ''}>
                            계좌 복사
                        </Button>
                        <Button type="primary" to="#" bgColor="#f7f7f7" color="#e1a770" data_id={item.indemnity_ID} onClick={showGuidePopup}>안내 받기</Button>
                    </ButtonGroup>
                </ServiceContent>
            </ServiceContentWrapper>
            )) : ''}
            <ServicePopup show={ServicePopup_isshow} onClose={showServicePopup} />
            <GuidePopup show={GuidePopup_isshow} onClose={showGuidePopup} />
        </MainContainer>
    );
};
const Hidden = styled.div`position:absolute;left:-1000px;`;
export default AccountService;