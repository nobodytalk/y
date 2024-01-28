import React from 'react';
import Header from '../../../../components/Header';
import MainContainer from '../../../../components/MainContainer';
import {Link} from 'react-router-dom';
import Slider from "react-slick";
import {MessageSingleWrapper,
        MessageSingleTitleWrapper,
        MessageSingleTitle,
        MessageSingleContent,
        SingleContent,
        SingleShortcuts,
        MessageSlickWrap,
        Messagesettings
} from '../styled';

const MessageSingle = () => {
    const isfront = window.location.pathname.slice(1,6);
    return (
        <MainContainer>
            <Header onHome={isfront == 'front' ? 0 : 1} onBack to={(isfront == 'front' ? '/front' : '')+"/obituary/details/messagelist"} background="#24243a" color="white" title="조문 메시지" border="rgba(242, 242, 242, 0.1)"/>
            <MessageSingleWrapper>
                {/* <MessageSingleTitleWrapper>
                    <MessageSingleTitle>
                        <h1>페이지슬라이더 들어가야함</h1>
                        <strong>조문객이 남긴 메시지 <small>23</small>건 중</strong>
                        <p>첫번째 메시지</p>
                    </MessageSingleTitle>
                </MessageSingleTitleWrapper>
                <MessageSingleContent url="/img/messageimg1.png">
                    <SingleContent>
                        <p>부득이한 사정으로</p>
                        <p>조문치 못하여 죄송하오며,</p>
                        <p>삼가 고인의 명복을 빕니다.</p>
                        <p>from. (주) 예품 임직원</p>
                        <span>2020.08.23</span>
                    </SingleContent>
                </MessageSingleContent>
                <SingleShortcuts>
                    <Link to ="/obituary/details/messagewrite/">
                        <img src={process.env.PUBLIC_URL + '/img/messageimg3.png'} alt="" />
                    </Link>
                </SingleShortcuts> */}

                <MessageSlickWrap>
                    <Slider {...Messagesettings} >
                        <>
                            <MessageSingleTitleWrapper>
                                <MessageSingleTitle>
                                    <strong>조문객이 남긴 메시지 <small>23</small>건 중</strong>
                                    <p>첫번째 메시지</p>
                                </MessageSingleTitle>
                            </MessageSingleTitleWrapper>
                            <MessageSingleContent url="/img/messageimg1.png">
                                <SingleContent>
                                    <p>부득이한 사정으로</p>
                                    <p>조문치 못하여 죄송하오며,</p>
                                    <p>삼가 고인의 명복을 빕니다.</p>
                                    <p>from. (주) 예품 임직원</p>
                                    <span>2020.08.23</span>
                                </SingleContent>
                            </MessageSingleContent>
                        </>
                        <>
                            <MessageSingleTitleWrapper>
                                <MessageSingleTitle>
                                    <strong>조문객이 남긴 메시지 <small>23</small>건 중</strong>
                                    <p>두번째 메시지</p>
                                </MessageSingleTitle>
                            </MessageSingleTitleWrapper>
                            <MessageSingleContent url="/img/messageimg1.png">
                                <SingleContent>
                                    <p>부득이한 사정으로</p>
                                    <p>조문치 못하여 죄송하오며,</p>
                                    <p>삼가 고인의 명복을 빕니다.</p>
                                    <p>from. (주) 예품 임직원</p>
                                    <span>2020.08.23</span>
                                </SingleContent>
                            </MessageSingleContent>
                        </>
                        <>
                            <MessageSingleTitleWrapper>
                                <MessageSingleTitle>
                                    <strong>조문객이 남긴 메시지 <small>23</small>건 중</strong>
                                    <p>세번째 메시지</p>
                                </MessageSingleTitle>
                            </MessageSingleTitleWrapper>
                            <MessageSingleContent url="/img/messageimg1.png">
                                <SingleContent>
                                    <p>부득이한 사정으로</p>
                                    <p>조문치 못하여 죄송하오며,</p>
                                    <p>삼가 고인의 명복을 빕니다.</p>
                                    <p>from. (주) 예품 임직원</p>
                                    <span>2020.08.23</span>
                                </SingleContent>
                            </MessageSingleContent>
                        </>
                        <>
                            <MessageSingleTitleWrapper>
                                <MessageSingleTitle>
                                    <strong>조문객이 남긴 메시지 <small>23</small>건 중</strong>
                                    <p>네번째 메시지</p>
                                </MessageSingleTitle>
                            </MessageSingleTitleWrapper>
                            <MessageSingleContent url="/img/messageimg1.png">
                                <SingleContent>
                                    <p>부득이한 사정으로</p>
                                    <p>조문치 못하여 죄송하오며,</p>
                                    <p>삼가 고인의 명복을 빕니다.</p>
                                    <p>from. (주) 예품 임직원</p>
                                    <span>2020.08.23</span>
                                </SingleContent>
                            </MessageSingleContent>
                        </>
                        <>
                            <MessageSingleTitleWrapper>
                                <MessageSingleTitle>
                                    <strong>조문객이 남긴 메시지 <small>23</small>건 중</strong>
                                    <p>다섯번째 메시지</p>
                                </MessageSingleTitle>
                            </MessageSingleTitleWrapper>
                            <MessageSingleContent url="/img/messageimg1.png">
                                <SingleContent>
                                    <p>부득이한 사정으로</p>
                                    <p>조문치 못하여 죄송하오며,</p>
                                    <p>삼가 고인의 명복을 빕니다.</p>
                                    <p>from. (주) 예품 임직원</p>
                                    <span>2020.08.23</span>
                                </SingleContent>
                            </MessageSingleContent>
                        </>
                    </Slider>
                </MessageSlickWrap>

            </MessageSingleWrapper>
        </MainContainer>
    );
};

export default MessageSingle;