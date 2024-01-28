import React, {useState} from 'react';
import StampPopup from '../popup/StampPopup';
import {
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

const StampContent = () => {
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
        <>
            <StampContentWrapper>
                <StbWrapper>
                    <StampTopWrapper>
                        <TopTitle>
                            <h1>화환을 5개 보내면 선물을 드립니다!</h1>
                        </TopTitle>
                        <TopContent>
                            <ul>
                                <li><p>1</p></li>
                                <li><p>2</p></li>
                                <li><p>3</p></li>
                                <li><p>4</p></li>
                                <li><p>5</p></li>
                            </ul>
                        </TopContent>
                        <TopNotice onClick={showStampPopup}>
                            <p>5개 쾅! 따듯한 선물 받기</p>
                        </TopNotice>
                    </StampTopWrapper>
                    <StampBottomWrapper>
                        <BottomTitle>
                            <h1>화환을 10개 보내면 선물을 드립니다!</h1>
                        </BottomTitle>
                        <BottomContent>
                            <ul>
                                <li><p>1</p></li>
                                <li><p>2</p></li>
                                <li><p>3</p></li>
                                <li><p>4</p></li>
                                <li><p>5</p></li>
                            </ul>
                        </BottomContent>
                        <BottomNotice onClick={showStampPopup}>
                            <p>10개 쾅! 따듯한 선물 받기</p>
                        </BottomNotice>
                    </StampBottomWrapper>
                </StbWrapper>
            </StampContentWrapper>
            <StampPopup show={StampPopup_isshow} onClose={showStampPopup} />
        </>
    );
};

export default StampContent;