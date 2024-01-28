import React, { useState, useEffect, useRef } from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../../store/global';
import Header from '../../../../components/Header';
import MainContainer from '../../../../components/MainContainer';
import {Link, useParams} from 'react-router-dom';
import { Row, Col } from '../../../../components/Grid';
import { ObituaryGetComments } from '../../../../api/obituary';
import Slider from "react-slick";
import {
    MessageListWrapper,
    MessageListTitleWrapper,
    MessageListTitle,
    MessageListContent,
    ListContent,
    ListShortcuts,
    MessageSlickLayerPopup,
    MessageSlickWrap,
    Messagesettings,
    MessageSingleTitleWrapper,
    MessageSingleTitle,
    SingleContent,
    MessageSingleContent,
    MessageSingleWrapper,
    SingleContentWrapper,
} from '../styled'; 

const MessageList = (props) => {
    const Dispatch = useDispatch();
    const slide_obj = useRef(0);
    const params = useParams();
    const [comments, set_comments] = useState("");
    const [comments_total, set_comments_total] = useState("");
    const [MessageSlick, set_MessageSlick] = useState(0);

    const ToggleSlick = (e) => {
        if(!MessageSlick) {
            set_MessageSlick(1);
            if(e.currentTarget.dataset.initial) {
                slide_obj.current.slickGoTo(e.currentTarget.dataset.initial);
            }
        } else {
            set_MessageSlick(0);
        }
    }

    useEffect(() => {
        if(!comments) {
            Dispatch(SetLoading(1));
            ObituaryGetComments({
                obituary_ID: params.obituary_ID
            })
            .then((response) => {
                if(response.status == 200) {
                    set_comments(response.data.body.comments);
                    set_comments_total(response.data.body);
                    console.log(response.data.body);
                    Dispatch(SetLoading(0));
                }
            })
            .catch((err) => console.log(err));
        }
    },[comments]);
    const isfront = window.location.pathname.slice(1,6);

    return (
        <MainContainer>
            <Header onHome={isfront == 'front' ? 0 : 1} onBack to={(isfront == 'front' ? '/front' : '')+"/obituary/"+params.obituary_ID} background="#24243a" color="white" title="조문 메시지" border="rgba(242, 242, 242, 0.1)"/>
            <MessageListWrapper>
                <MessageListTitleWrapper>
                    <MessageListTitle>
                        <h1>조문객이 남긴 메시지</h1>
                        <p>{comments_total.total ? comments_total.total : '0'}</p><span> 건</span>
                    </MessageListTitle>
                </MessageListTitleWrapper>
                <MessageListContent>
                    {comments ? comments.map((item, key) => {
                        return (
                            <Link onClick={ToggleSlick} data-initial={key}>
                                <ListContent>
                                    <Row>
                                        <Col flex="1">
                                            <img src={process.env.PUBLIC_URL + '/img/messageimg2.png'} alt="" />
                                        </Col>
                                        <Col flex="3">
                                            <h2>{item.content ? item.content : ''}</h2>
                                            <p>from. {item.comment_author_name ? item.comment_author_name.replace('(주)예품 임직원','예품 임직원') : ''}</p>
                                            <span>{item.comment_date ? item.comment_date : ''}</span>
                                        </Col>
                                    </Row>
                                </ListContent>
                            </Link>  
                        )
                    }) : ''}
                </MessageListContent>
                <ListShortcuts>
                    <Link to ={(isfront == 'front' ? '/front' : '')+"/obituary/"+params.obituary_ID+"/messagewrite/"}>
                        <img src={process.env.PUBLIC_URL + '/img/messageimg3.png'} alt="" />
                    </Link>
                </ListShortcuts>
            </MessageListWrapper>
            <MessageSlickLayerPopup isopen={MessageSlick}>
                {MessageSlick && (<Header onBack onClick={ToggleSlick} background="#24243a" color="white" title="조문 메시지" border="rgba(242, 242, 242, 0.1)"/>)}
                <MessageSingleWrapper>
                    <MessageSlickWrap>
                        <Slider {...Messagesettings} ref={slider => (slide_obj.current = slider)}>
                            {comments ? comments.map((item,key) => (
                                <>
                                    <MessageSingleTitleWrapper>
                                        <MessageSingleTitle>
                                            <strong>조문객이 남긴 메시지 <small>{comments_total.total ? comments_total.total : '0'}</small> 건 중</strong>
                                            <p>{key + 1} 번째 메시지</p>
                                        </MessageSingleTitle>
                                    </MessageSingleTitleWrapper>
                                    <SingleContentWrapper url="/img/messageimg1.png">
                                        <MessageSingleContent >
                                            <SingleContent>
                                                <p>{item.content ? item.content : ''}</p>
                                                <p>from. {item.comment_author_name ? item.comment_author_name.replace('(주)예품 임직원','예품 임직원') : ''}</p>
                                                <span>{item.comment_date ? item.comment_date.slice(0, 10) : ''}</span>
                                            </SingleContent>
                                        </MessageSingleContent>
                                    </SingleContentWrapper>
                                </>
                            )) : ''}
                        </Slider>
                    </MessageSlickWrap>
                </MessageSingleWrapper>
            </MessageSlickLayerPopup>
        </MainContainer>
    );
};

export default MessageList;