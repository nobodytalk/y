import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import StampContent from './StampContent';
import MainContainer from '../../../components/MainContainer';
import StampPopup from '../popup/StampPopup';
import { StampGetStamp,
    StampSend } from '../../../api/stamp';
import {StampWrapper,
    StampTitle,
    StampTitleContent,
    StampImg,
    StampTitleSubContent,
    Notice,
    StampContentWrapper,
    StbWrapper,
    StampTopWrapper,
    TopTitle,
    TopContent,
    TopNotice,
    StampBottomWrapper,
    BottomTitle,
    BottomContent,
    BottomNotice,
} from '../styled';





const Stamp = () => {

    const [stamp_count, set_stamp_count] = useState(0);

    useEffect(() => {
        if(!stamp_count){
            load_stamps();
        }
    })

    const load_stamps = () => {
        StampGetStamp({
        })
        .then((response) => {
            if(response.data.code == "200"){
                set_stamp_count(response.data.body.stamp_count);
                console.log(response.data.body);
            }
        })
        .catch((error) => console.log(error))
    }

    const Submit = (e) => {
        StampSend({
            send_type: e.currentTarget.dataset.id
        })
        .then((response) => {
            if(response.data.code == "200"){
                console.log('선물 발송!')
                show_StampPopup(1);
                load_stamps();
            } else {
                alert(response.data.body.message);
            }
        })
        .catch((error) => console.log("서버 오류가 발생하였습니다."))
    }

    const [StampPopup_isshow,show_StampPopup] = useState(0);
    const showStampPopup = (e) => {
        e.preventDefault();
        if(StampPopup_isshow) {
            show_StampPopup(0);
        } else {
            show_StampPopup(1);
        }
    }



    return (
        <MainContainer>
            <Header onBack to='/#/' onHome title="화환 스탬프" background="#24243a" border="rgba(242, 242, 242, 0.1);" color="white" />      
            <StampWrapper>
                <StampTitle>
                    <strong>화환을 구매하면<br/>
                    <small>스탬프가 적립</small>되요!</strong>
                </StampTitle>
                <StampTitleContent url="/img/StampImg2.png">
                    <StampImg>
                        <img src={process.env.PUBLIC_URL + '/img/StampImg1.png'} alt="" />
                    </StampImg>
                </StampTitleContent>
                <StampTitleSubContent>
                    <p>∙ 화환 1개당 1개의 스탬프를 적립해 드립니다.</p>
                    <p>∙ 유효기간은 발행일 포함 3년 입니다.</p>
                    <p>∙ 스탬프 상품은 변동 될 수 있습니다.</p>
                </StampTitleSubContent>
                <Notice>
                    <p>따듯한 스탬프 <span>{stamp_count ? stamp_count : 0}</span>개 있어요.</p>
                </Notice>
            </StampWrapper>
            <StampContentWrapper>
                <StbWrapper>
                    <StampTopWrapper>
                        <TopTitle>
                            <h1>화환을 5개 보내면 선물을 드립니다!</h1>
                        </TopTitle>
                        <TopContent count={stamp_count ? stamp_count : ''}>
                            <ul>
                                <li>
                                    <div>
                                        <p>1</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>2</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>3</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>4</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>5</p>
                                    </div>
                                </li>
                            </ul>
                        </TopContent>
                        <TopNotice onClick={stamp_count ? (stamp_count >= 5 ? Submit : '') : '' } count={stamp_count ? stamp_count : 0} data-id="5">
                            <p>5개 쾅! 따듯한 선물 받기</p>
                        </TopNotice>
                    </StampTopWrapper>
                    <StampBottomWrapper>
                        <BottomTitle>
                            <h1>화환을 10개 보내면 선물을 드립니다!</h1>
                        </BottomTitle>
                        <BottomContent count={stamp_count ? stamp_count - 5 : ''}>
                            <ul>
                                <li>
                                    <div>
                                        <p>1</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>2</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>3</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>4</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <p>5</p>
                                    </div>
                                </li>
                            </ul>
                        </BottomContent>
                        <BottomNotice onClick={stamp_count != 10 ? '' : Submit}  count={stamp_count ? stamp_count - 5 : ''} data-id="10">
                            <p>10개 쾅! 따듯한 선물 받기</p>
                        </BottomNotice>
                    </StampBottomWrapper>
                </StbWrapper>
            </StampContentWrapper>
            <StampPopup show={StampPopup_isshow} onClose={showStampPopup} />
        </MainContainer>
    );
};

export default Stamp;