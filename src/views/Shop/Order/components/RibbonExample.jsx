import React from 'react';
import MainContainer from '.././../../../components/MainContainer';
import Header from '../../../../components/Header';
import Input from '../../../../components/Input';
import {RibbonExampleWrapper,
        RibbonWrapper,
        RibbonShape,
        Ribbon,
        RibbonSender,
        RibbonContent,
        RibbonColor,
        RibbonSending,} from '../styled';
import HomeFooter from '../../../Home/components/HomeFooter';

const RibbonExample = () => {
    return (
        <>
            <MainContainer>
                <Header title="리본 미리보기" onBack onCancel to='/order/' background="white"/>
                <RibbonExampleWrapper>   
                    <RibbonWrapper>
                        <RibbonShape>
                            <Ribbon url="/img/RibbonImg1.png" />
                            <RibbonSender>
                                <p>∙ (주) 이지프레스 대표이사 허정탁</p>
                                <p>∙ (주) 이지프레스 임직원</p>
                            </RibbonSender>
                        </RibbonShape>
                    </RibbonWrapper>
                    <RibbonContent>
                        <RibbonColor>
                            <h1>색상</h1>
                            <Input type="radiobutton" width="50%" name="color" background="#fff" value="흰색" id="1" />
                            <Input type="radiobutton" width="50%" name="color" background="#fff" value="검정색 (+5000원)" id="2" />
                        </RibbonColor>
                        <RibbonSending>
                            <h1>보내는이</h1>
                            <Input type="radiobutton" width="33.33%" name="sending" background="#fff" value="회사" id="3" />
                            <Input type="radiobutton" width="33.33%" name="sending" background="#fff" value="모임" id="4" />
                            <Input type="radiobutton" width="33.33%" name="sending" background="#fff" value="개인" id="5" />
                        </RibbonSending>
                    </RibbonContent>
                </RibbonExampleWrapper>
            </MainContainer>
        </>
    )
};

export default RibbonExample;