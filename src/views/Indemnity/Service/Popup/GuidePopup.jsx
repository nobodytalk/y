import React, {useState, useRef} from 'react';
import Popup from '../../../../components/Popup';
import Input from '../../../../components/Input';
import ButtonGroup from '../../../../components/ButtonGroup';
import Button from '../../../../components/Button';
import Joi from 'joi-browser';
import { 
    GuideWrapper,
    Guide,
    GuideButton,
    InputBox,
    Icon,
    Notion,
    CheckBox,
    } from './styled';
import {IndemnitySMSPost} from '../../../../api/indemnity';

const xicon = <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19">
<g fill="none" fill-rule="evenodd">
    <g>
        <g>
            <g>
                <g transform="translate(-260 -318) translate(30 190) translate(40 115) translate(190 13)">
                    <circle cx="9.409" cy="9.409" r="9.409" fill="#888"/>
                    <path fill="#FFF" d="M7.31 6.57l2.005 2.005L11.32 6.57c.316-.316.829-.316 1.145 0 .316.316.316.829 0 1.145L10.46 9.72l2.005 2.005c.316.316.316.829 0 1.145-.316.316-.829.316-1.145 0l-2.005-2.005L7.31 12.87c-.316.316-.829.316-1.145 0-.316-.316-.316-.829 0-1.145L8.17 9.72 6.165 7.715c-.316-.316-.316-.829 0-1.145.316-.316.829-.316 1.145 0z"/>
                </g>
            </g>
        </g>
    </g>
</g>
</svg>
const checkIcon = (<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27">
<g fill="none" fill-rule="evenodd">
    <g>
        <g>
            <g transform="translate(-35 -97) translate(20 80) translate(15 17)">
                <circle cx="13.5" cy="13.5" r="13" fill="#FFF" stroke="#CFCFCF"/>
                <path fill="#CFCFCF" fill-rule="nonzero" d="M11.546 18c-.163 0-.327-.062-.451-.185l-3.908-3.868c-.25-.247-.25-.647 0-.893.25-.247.653-.247.902 0l3.457 3.421 7.365-7.29c.25-.247.652-.247.902 0s.25.646 0 .893l-7.816 7.737c-.124.123-.288.185-.451.185z"/>
            </g>
        </g>
    </g>
</g>
</svg>)

const GuidePopup = (props) => {
    const [check_ok, set_check_ok] = useState(0);
    const [phone, set_phone] = useState('');

    const DoSend = (type,e) => {
        const schema = {
            check_ok: Joi.boolean()
                .required()
                .error(() => ({message: '수신 동의를 해주세요.'})),
            phone: Joi.string()
                .required()
                .error(()=> ({message: '휴대폰번호를 확인해주세요.'}))
        }
        const {error} = Joi.validate({
            check_ok: check_ok,
            phone: phone,
        }, schema);

        if(error) {
            alert(error.details[0].message);
        } else {
            IndemnitySMSPost({
                type: type == 1 ? 'sms' : 'kakao',
                indemnity_ID: props.show,
                phone: phone
            }).then(res => {
                if(res.data.code == '200') {
                    alert('전송이 완료되었습니다.');
                } else {
                    alert('전송 실패!');
                }
                props.onClose(e);
            }).catch(err=>alert('서버 오류!'));
        }
    }
    const handleRemove = (e) => {
        e.preventDefault();
        set_phone('');
    }

    return (
        <Popup show={props.show} onClose={props.onClose} padding="45px 0px 100px 0px">
            <GuideWrapper>
                <Guide>
                    <h1>
                        부의금 계좌를 안내 받을<br />
                        휴대번호를 입력해주세요.
                    </h1>
                </Guide>
                <InputBox>
                    <Input type="textbox" placeholder="-없이 입력하세요." value={phone} onChange={(e)=>set_phone(e.target.value)}/>
                    <Icon onClick={handleRemove}> 
                        {xicon}
                    </Icon>
                </InputBox>
                <Notion>
                    <h1>부의금 서비스 정보 수신 동의</h1>
                    <h1>(SMS, 카카오톡 알림톡)</h1>
                </Notion>
                <CheckBox>
                    <Input type='checkbutton' id="1" onChange={(e) => set_check_ok(e.target.checked)}>
                        <div>
                            {checkIcon}
                        </div>
                    </Input>
                </CheckBox>
                <GuideButton>
                    <ButtonGroup position="bottom">
                        <Button type="primary" onClick={(e)=>DoSend(1,e)} width="50%" color="#fff">
                            <p>
                                <img src={process.env.PUBLIC_URL + "/img/messengimg1.png"} alt="" />
                                문자메시지
                            </p>
                        </Button>
                        <Button type="default" width="50%" color="#111" bgColor="#fced1f" onClick={(e)=>DoSend(2,e)}>
                            <p>
                                <img src={process.env.PUBLIC_URL + "/img/kakaoimg1.png"} alt="" />
                                카카오톡
                            </p>
                        </Button>
                    </ButtonGroup>
                </GuideButton>
            </GuideWrapper>
        </Popup>
    );
};

export default GuidePopup;