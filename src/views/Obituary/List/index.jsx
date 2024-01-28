import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {SetConfirm} from '../../../store/global';
import Header from '../../../components/Header';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import MainContainer from '../../../components/MainContainer';
import Popup from '../../../components/Popup/';
import ImprintPopup from './Popup/Imprint/Imprint';
import {Link, useParams} from 'react-router-dom';
import SharePopup from './Popup/Share/SharePopup';
import ExpirationPopup from './Popup/Expiration';
import {SetLoading} from '../../../store/global';
import {ObituaryGetPosts,
    ObituaryDeletePost
} from '../../../api/obituary';
import {
    ObituaryListWrapper,
    ObituaryList,
    ObiList,
    ObituaryContent,
    EmptyWrapper,
    ListPopupTitle,
    ListButton,
} from './styled';

const listIcon = <svg xmlns="http://www.w3.org/2000/svg" width="4" height="18" viewBox="0 0 4 18">
                    <g fill="none" fill-rule="evenodd">
                        <g fill="#9E9E9E" fill-rule="nonzero">
                            <g>
                                <g>
                                    <g transform="translate(-316 -99) translate(0 49) translate(20 27) translate(296 23)">
                                        <circle cx="2.34" cy="9.5" r="1.5"/>
                                        <circle cx="2.34" cy="16.5" r="1.5"/>
                                        <circle cx="2.34" cy="1.5" r="1.5"/>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>

const List = (props) => {
    const Dispatch = useDispatch();
    const params = useParams();
    const [obituarys, set_obituarys] = useState('');

    const [ImprintPopup_isshow, show_ImprintPopup] = useState(0);
    const showImprintPopup = (e) => {
        e.preventDefault();
        if(ImprintPopup_isshow) {
            show_ImprintPopup(0);
        } else{
            show_ImprintPopup(e.target.dataset.id);
        }
    }

    const [ListPopup_isshow,show_ListPopup] = useState(0);
    const showListPopup = (e) => {
        e.preventDefault();
        if(ListPopup_isshow) {
            show_ListPopup(0);
        } else {
            show_ListPopup(e.target.dataset.id);
        }
    }
    
    useEffect(() => {
        if(!obituarys){
            Dispatch(SetLoading(1));
            ObituaryGetPosts({
                keyword:'',
            })
            .then((response) =>{
                if(response.data.code == "200"){
                    set_obituarys(response.data.body.posts);
                    console.log(response.data.body);
                }
                Dispatch(SetLoading(0));
            })
            .catch((error) => {
                console.log(error);
                // Dispatch(SetLoading(0));
            })
        }
        console.log(obituarys);
    },[obituarys]);

    const delete_obi = (e) => {
        console.log(e.target.dataset.id);
        Dispatch(SetConfirm({
            title: '부고를 삭제하시겠습니까?',
            onClose: '',
            button:[
                {title: '취소'},
                {title: '확인', onClick:delete_obi_confirm, id:e.target.dataset.id},
            ]
        }));
        
    }
    const delete_obi_confirm = (e) => {
        Dispatch(SetLoading(1));
        ObituaryDeletePost({
            obituary_ID: e.target.dataset.id
        })
        .then((response) => {
            if(response.data.code == "200"){
                console.log('삭제 완료');
                window.location.reload();
            }
            Dispatch(SetLoading(0));
        })
        .catch((error) => console.log(error));
    }
  
    const [SharePopup_isshow,show_SharePopup] = useState(0);
    const showSharePopup = (e) => {
        e.preventDefault();
        if(e.target.dataset.id) {
            if(SharePopup_isshow == e.target.dataset.id) {
                show_SharePopup(0);
            } else {
                show_SharePopup(e.target.dataset.id);
            }
        } else {
            show_SharePopup(0);
        }
    }

    const [ExpirationPopup_isshow,show_ExpirationPopup] = useState(0);
    const showExpirationPopup = (e) => {
        e.preventDefault();
        if(ExpirationPopup_isshow) {
            show_ExpirationPopup(0);
        } else {
            show_ExpirationPopup(1);
        }
    }
    
    return (
        <>
            <MainContainer>
                <Header onHome hamburger title='부의금 서비스' background="white" onBack to='/#/'/>
                <ObituaryListWrapper>
                    {obituarys ? obituarys.map((obi_item, key) => (<>
                        <ObituaryList>
                            <ObituaryContent>
                                <ObiList onClick={showListPopup} data-id={obi_item.ID}>
                                    {listIcon}
                                </ObiList>
                                <Link to={"/mypage/obituary/"+obi_item.ID}>
                                    <h1>{obi_item.death_date}</h1>
                                    <strong>{obi_item.deceased}</strong>
                                    <p>상주</p><span>{obi_item.mourner}</span> <br />
                                    <p>빈소</p><span>{obi_item.funeral_name} {obi_item.funeral_home}</span>
                                    <p>발인 {obi_item.borne_out_date}</p>
                                </Link>
                            </ObituaryContent>
                            <ButtonGroup>
                                <Button type="default" onClick={showSharePopup} data_id={obi_item.ID}>부고 보내기</Button>
                                {obi_item.indemnity_count ? (
                                    <Button type="primary" to={"/obituary/"+obi_item.ID+"/indemnity/account"}>부의금 서비스 관리</Button>
                                ) : (
                                    <Button type="primary" to={"/obituary/"+obi_item.ID+"/indemnity/apply"}>부의금 서비스 신청</Button>
                                )}
                            </ButtonGroup>
                        </ObituaryList>
                        <Popup position="bottom" show={ListPopup_isshow == obi_item.ID} onClose={showListPopup} onCloseButton padding="36px 0 10px 0">
                            <ListPopupTitle>부고관리</ListPopupTitle>
                            <ListButton>
                                <ButtonGroup>
                                    <Button type="bottom" data_id={obi_item.ID} onClick={delete_obi}>삭제</Button>
                                    <Button type="bottom" to={'/obituary/make/' + ListPopup_isshow} data-id={obi_item.ID}>
                                        <div>수정</div>
                                    </Button>
                                </ButtonGroup>
                            </ListButton>
                        </Popup>
                        </>
                    )) : (
                        <EmptyWrapper>
                            <img src={process.env.PUBLIC_URL + '/obituary_empty.png'} />
                            <p>등록된 부고가 없습니다.</p>
                            <Button size="medium" width="150px" type="primary" borderRadius="6px" to="/obituary/make">직접 부고 등록하기</Button>
                        </EmptyWrapper>
                    )}
                </ObituaryListWrapper>
                <SharePopup show={SharePopup_isshow} onClose={showSharePopup} /> 
                <ExpirationPopup show={ExpirationPopup_isshow} onClose={showExpirationPopup} /> 
                <ImprintPopup show={ImprintPopup_isshow} onClose={showImprintPopup} /> 
            </MainContainer>
        </>
    );
};

export default List;