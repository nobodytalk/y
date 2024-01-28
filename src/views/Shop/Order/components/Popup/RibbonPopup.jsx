import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Popup from '../../../../../components/Popup';
import Input from '../../../../../components/Input';
import {useParams} from 'react-router-dom';
import { 
    Ribbon, 
    RibbonColor, 
    RibbonContent, 
    RibbonExampleWrapper,
    RibbonSender, 
    RibbonShape, 
    RibbonWrapper,
    RibbonSending,
} from './styled';
import Header from '../../../../../components/Header';
import {OrderGetOrder} from '../../../../../api/order';


const RibbonPopup = (props) => {

    const params = useParams();
    const [ribbon_option, set_ribbon_option] = useState('');
    const [ribbon_list, set_ribbon_list] = useState('');
    const [ribbon_color, set_ribbon_color] = useState('w');
    const [ribbon_sending, set_ribbon_sending] = useState('a');
    
    const sending_msg = {
        'a': (
            <>
                <p>∙(주) OOOO 대표이사 OOO</p>
                <p>∙(주)OOOO 임직원</p>
            </>
        ),
        'b': (
            <>
                <p>∙OOOO 초등학교 OO회 동창</p>
                <p>∙OOO 동호회 회원</p>
            </>
        ),
        'c': (
            <>
                <p>∙OOO 홍길동</p>
            </>
        ),
    }

    const PopupWrapper = styled.div`
        a{
            z-index: 200;
        }
    `;

    return (
        <PopupWrapper>
            <Popup show={props.show} padding="20px 0px" onClose={props.onClose} onCloseButton width="90%">
                <Header title="리본 미리보기" />
                <RibbonExampleWrapper>
                        <RibbonWrapper>
                            <RibbonShape>
                                <Ribbon url={"/ribbon_"+ribbon_color+"_"+ribbon_sending+".png"}/>
                                <RibbonSender>
                                    {sending_msg[ribbon_sending]}
                                </RibbonSender>
                            </RibbonShape>
                        </RibbonWrapper>
                    <RibbonContent>
                        <RibbonColor>
                            <h1>색상</h1>
                            <Input type="radiobutton" width="50%" name="color" background="#fff" title="흰색" value="w" id="w" onChange={e=>set_ribbon_color(e.currentTarget.value)} />
                            <Input type="radiobutton" width="50%" name="color" background="#fff" title="검정색 (+5000원)" value="b" id="b" onChange={e=>set_ribbon_color(e.currentTarget.value)} />
                        </RibbonColor>
                        <RibbonSending>
                            <h1>보내는이</h1>
                            <Input type="radiobutton" width="33.33%" name="sending" background="#fff" title="회사" value="a" id="a_" onChange={e=>set_ribbon_sending(e.currentTarget.value)}  />
                            <Input type="radiobutton" width="33.33%" name="sending" background="#fff" title="모임" value="b" id="b_" onChange={e=>set_ribbon_sending(e.currentTarget.value)}  />
                            <Input type="radiobutton" width="33.33%" name="sending" background="#fff" title="개인" value="c" id="c_" onChange={e=>set_ribbon_sending(e.currentTarget.value)}  />
                        </RibbonSending>
                    </RibbonContent>
                </RibbonExampleWrapper>
            </Popup>
        </PopupWrapper>
    );
};

export default RibbonPopup;