import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {SetLoading, SetConfirm} from '../../../store/global'
import Header from '../../../components/Header';
import MainContainer from '../../../components/MainContainer';
import Button from '../../../components/Button';
import ButtonGroup from '../../../components/ButtonGroup';
import AddPopup from './Popup/AddPopup';
import {IndemnityGetPosts, IndemnityDeletePost, IndemnityGetPost} from '../../../api/indemnity';
import {ObituaryGetPost} from '../../../api/obituary';
import {
    AccountTitleWrapper,
    AccountTitle,
    AccountWrapper,
    AccountContentWrappper,
    AccountContent,
    AccountPlusContent,
    AccountPlus,
} from './styled';


const Account = () => {
    const Dispatch = useDispatch();

    const [AddPopup_isshow,show_AddPopup] = useState(0);
    const showAddPopup = (e) => {
        e.preventDefault();
        if(AddPopup_isshow) {
            show_AddPopup(0);
        } else {
            show_AddPopup(1);
        }
    }

    const params = useParams();
    const [account, set_account] = useState('');
    const [obi_item, set_obi_item] = useState(0);
    const [current_obi_item, set_current_obi_item] = useState(0);
    const [indemnity_delete, set_indemnity_delete] = useState('');


    useEffect(() => {
        if(params.obituary_ID != current_obi_item) {
            Dispatch(SetLoading(1));
            ObituaryGetPost({
                obituary_ID: params.obituary_ID
            })
            .then((response) =>{
                if(response.data.code == "200"){
                    set_obi_item(response.data.body);
                    set_current_obi_item(response.data.body.ID);
                    Dispatch(SetLoading(0));
                    if(!account){
                        IndemnityGetPosts({
                            obituary_ID: params.obituary_ID,
                        })
                        .then((response) => {
                            if(response.data.code == "200"){
                                set_account(response.data.body.posts);
                                console.log(response.data.body);
                            }
                        })
                        .catch((error) => console.log(error))
                    }
                }
            })
            
            .catch((error) => console.log(error))
        }
        console.log(account);
    })

    const Delete = (e) => {
        Dispatch(SetLoading(1));
        IndemnityDeletePost({
            indemnity_ID: e.target.dataset.id
        })
        .then(response => {
            if(response.data.code == '200'){
                console.log(e.target.dataset.id)
                window.location.reload()
            }
            Dispatch(SetLoading(0));
        })
        .catch(err=>console.log(err));
    }
    const Delete_confirm = (e) => {
        console.log(e.target.dataset.id);
        Dispatch(SetConfirm({
            title: '정말 삭제하시겠습니까?',
            onClose: '',
            button:[
                {title: '취소'},
                {title: '확인', onClick:Delete, id:e.target.dataset.id},
            ]
        }));
        
    }
  

    const directLoad = (e) => {
        window.location.href='/obituary/'+params.obituary_ID+'/indemnity/accountadd';
    }

    return (
        <MainContainer>
            <Header onHome onBack to="/obituary/list" background="#24243a" color="white" title="부의금 서비스 관리" border="rgba(242, 242, 242, 0.1)"/>
            <AccountTitleWrapper>
                <AccountTitle>
                    <h1>{obi_item.death_date ? obi_item.death_date + ' 별세': ''}</h1>
                    <h2>{obi_item.deceased ? obi_item.deceased : ''}</h2>
                </AccountTitle>
            </AccountTitleWrapper>
            {account ? account.map((item, key) => (
                <AccountWrapper>
                    <AccountContentWrappper>
                        <AccountContent>
                            <h1>{item.mourner_name ? item.mourner_name : ''}<h2>님의 부의금 계좌</h2></h1>
                            <strong>{item.bank ? item.bank : ''}</strong><small>{item.account_number ? item.account_number : ''}</small>
                        </AccountContent>
                        <ButtonGroup>
                            <Button type="default" bgColor="#f7f7f7" to="#">
                                <div onClick={Delete_confirm} data-id={item.indemnity_ID}>삭제</div>
                            </Button>
                            <Button type="default" bgColor="#f7f7f7" to={'/obituary/'+params.obituary_ID+'/indemnity/accountcorrection/'+item.indemnity_ID}>수정</Button>
                        </ButtonGroup>
                    </AccountContentWrappper>
                </AccountWrapper>
            )) : ''}

            <AccountPlusContent>
                <AccountPlus onClick={false ? showAddPopup : directLoad}>
                    <img src={process.env.PUBLIC_URL + '/img/Accountimg1.png'} alt="" />
                    <p>{"부의금 " + (obi_item.indemnity_count ? '계좌 추가' : '서비스 신청')}</p>
                </AccountPlus>
            </AccountPlusContent>
            <AddPopup show={AddPopup_isshow} onClose={showAddPopup}/>
        </MainContainer>
    );
};

export default Account;