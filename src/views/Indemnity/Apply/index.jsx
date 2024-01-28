import React, {useEffect, useState} from 'react';
import Header from '../../../components/Header';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import InputBind from '../../../components/InputBind';
import InputGroup from '../../../components/InputGroup';
import Label from '../../../components/Label';
import PrivacyPopup from '../../../components/Popup/components/PrivacyPopup';
import {Link, useParams} from 'react-router-dom';
import MainContainer from '../../../components/MainContainer';
import BankConfirmPopup from './Popup/BankConfirmPopup/index';
import CancelPopup from './Popup/CancelPopup/index';
import Joi from 'joi-browser';
import Bank from '../../../components/Bank';
import {IndemnityInsertPost, IndemnityAccountAuth} from '../../../api/indemnity';
import {ObituaryGetPost,} from '../../../api/obituary';
import {GetBank} from '../../../api/bank';

import {
    Wrapper,
    Exp,
    InputBank,
    Arrow,
    BankList,
} from './styled';

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

const arrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 6 9">
                    <g fill="none" fill-rule="evenodd">
                        <g fill="#888888" fill-rule="nonzero">
                            <g>
                                <g>
                                    <path d="M69.92 11.515l-.4-.43c-.054-.056-.116-.085-.185-.085-.07 0-.131.029-.184.086L66 14.462l-3.15-3.376c-.054-.057-.115-.086-.185-.086-.07 0-.13.029-.184.086l-.4.43c-.054.057-.081.123-.081.197 0 .075.027.14.08.198l3.736 4.003c.053.057.115.086.184.086.07 0 .13-.029.184-.086l3.736-4.003c.053-.058.08-.123.08-.198 0-.074-.027-.14-.08-.198z" transform="translate(-319 -504) translate(20 492) translate(236 3) rotate(-90 66 13.5)"/>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>

const IndemnityApply = (props) => {
    
    const params = useParams();
    const [errorMsg, SetErrorMsg] = useState('');
    const [readOnly, setreadOnly] = useState(0);
    const [checkbox, set_checkbox] = useState('');

    const [mourner_KEY, set_mourner_KEY] = useState('');
    const [birth_1, set_birth_1] = useState('');
    const [birth_2, set_birth_2] = useState('');
    const [account_name, set_account_name] = useState('');
    const [account_number, set_account_number] = useState('');
    const [payment_key, set_payment_key] = useState('');
    const [bank_toggle, set_bank_toggle] = useState(0);
    const [bank_name, set_bank_name] = useState('');
    const [bank_code, set_bank_code] = useState(0);
    const [need_payment, set_need_payment] = useState('');

    const [mourner_name, set_mourner_name] = useState('');
    const [bank_list, set_bank_list] = useState('');


    const [PrivacyPopup_isshow, show_PrivacyPopup] = useState(0);
    const showPrivacyPopup = (e) => {
        e.preventDefault();
        if(PrivacyPopup_isshow) {
            show_PrivacyPopup(0);
        } else {
            show_PrivacyPopup(1);
        }
    }

    const [BankConfirmPopup_isshow,show_BankConfirmPopup] = useState(0);
    const showBankConfirmPopup = (e) => {
        e.preventDefault();
        if(BankConfirmPopup_isshow) {
            show_BankConfirmPopup(0);
        } else {
            show_BankConfirmPopup(1);
        }
    }
    
    const [CancelPopup_isshow,show_CancelPopup] = useState(0);
    const showCancelPopup = (e) => {
        e.preventDefault();
        if(CancelPopup_isshow) {
            show_CancelPopup(0);
        } else {
            show_CancelPopup(1);
        }
    }

    const setBirth1TextLength = e => {
        if (e.target.value.length === 7) return;
        set_birth_1(e.target.value);
        
    }
    const setBirth2TextLength = e => {
        if (e.target.value.length === 2) return;
        set_birth_2(e.target.value);
    }

    useEffect(() => {
        if(!mourner_name){
            ObituaryGetPost({
                obituary_ID: params.obituary_ID
            })
            .then((response) => {
                if(response.data.code == '200') {
                    set_mourner_name(response.data.body.mourner);
                    set_mourner_KEY(0);
                    console.log(mourner_name);
                }
            })
            
            .catch((error) => console.log(error))
        }
        console.log(mourner_name);
    })
    
    useEffect(() => {
        if(!bank_list){
            GetBank({
                
            })
            .then((response) => {
                if(response.data.code == '200') {
                    set_bank_list(response.data.body.bank_list);
                    console.log(bank_list);
                }
            })
            .catch((error) => console.log(error))
        }
        console.log(bank_list);
    })

    


    const onSubmit = (e) => {
        const schema ={
            birth_1: Joi.string()
                .required()
                .min(6)
                .error(() => ({message: '주민번호 앞자리를 입력해주세요.'})),
            birth_2: Joi.string()
                .required()
                .min(1)
                .error(() => ({message: '주민번호 뒷자리를 입력해주세요.'})),
            checkbox: Joi.bool()
                .required()
                .error(() => ({message: '개인정보 동의를 선택해주세요.'})),
            account_name: Joi.string()
                .required()
                .error(() => ({message: '예금주명을 입력해주세요.'})),
            bank: Joi.string()
                .required()
                .error(() => ({message: '은행을 선택해주세요.'})),
            account_number: Joi.string()
                .required()
                .error(() => ({message: '계좌번호를 입력해주세요.'})),
        }
        const {error, value} = Joi.validate({
            birth_1: birth_1,
            birth_2: birth_2,
            checkbox: checkbox,
            bank: bank_code,
            account_name: account_name,
            account_number: account_number,
        }, schema);

        if(error){
            alert(error.details[0].message);
            console.log(error);
        } IndemnityAccountAuth({
            birth_1: birth_1,
            birth_2: birth_2,
            bank: bank_code,
            account_name: account_name,
            account_number: account_number,
        })
        .then((response) => {
            if(response.data.code == '200'){
                alert('인증완료');
            } 
        })
        .catch((error) => console.log(error))
    }

    const Submit = (e) => {
        const schema ={
            birth_1: Joi.string()
                .required()
                .min(6)
                .error(() => ({message: '주민번호를 확인해주세요.'})),
            birth_2: Joi.string()
                .required()
                .min(1)
                .error(() => ({message: '주민번호를 확인해주세요.'})),
            checkbox: Joi.bool()
                .required()
                .error(() => ({message: '개인정보 동의를 선택해주세요.'})),
            account_name: Joi.string()
                .required()
                .error(() => ({message: '예금주명을 입력해주세요.'})),
            bank: Joi.string()
                .required()
                .error(() => ({message: '은행을 선택해주세요.'})),
            account_number: Joi.string()
                .required()
                .error(() => ({message: '계좌번호를 확인해주세요.'})),
        }
        const {error, value} = Joi.validate({
            birth_1: birth_1,
            birth_2: birth_2,
            checkbox: checkbox,
            bank: bank_code,
            account_name: account_name,
            account_number: account_number,
        }, schema);

        if(error){
            alert(error.details[0].message);
            console.log(error);
        }

        IndemnityInsertPost ({
            obituary_ID: params.obituary_ID,
            mourner_KEY: mourner_KEY,
            birth_1: birth_1,
            birth_2: birth_2,
            account_name: account_name,
            bank: bank_code,
            account_number: account_number,
            payment_key: payment_key
        })
        .then((response) => {
            if(response.data.code == '200') {
                set_need_payment(response.data.body);
                window.location.href='/obituary/'+params.obituary_ID+'/indemnity/apply/complete';
            }
        })
        .catch((error) => console.log(error))
    }

    const Toggle = () => {
        if(!bank_toggle){
            set_bank_toggle(1);
        } else {
            set_bank_toggle(0);
        }
    }

    const bank_select = (e) => {
        set_bank_name(e.currentTarget.dataset.name);
        set_bank_code(e.currentTarget.dataset.code);
        set_bank_toggle(0);
    }

    return (
        <MainContainer>
            <Header title="부의금 서비스 신청" onBack to={"/obituary/list"} background="white"/>
                <Wrapper>
                    <InputGroup bottom="20px">
                        <InputBind>
                            <Label>상주명</Label>
                            <Input type='select' placeholder='선택해주세요' onChange={(e) => set_mourner_KEY(e.target.value)}>
                                {mourner_name ? mourner_name.map((item,key) => (
                                    <option>{item.name}</option>
                                )) : ''}
                            </Input>
                        </InputBind>
                        <InputBind>
                        <Label>주민번호</Label>
                            <Input type='number' value={birth_1} placeholder='앞 6자리' width='37.5%' onChange={setBirth1TextLength}/>
                            <Input type='number' value={birth_2} width='10%' placeholder="•" onChange={setBirth2TextLength}/>
                            <span className='placeholder'>• • • • • •</span>
                        </InputBind>
                    </InputGroup>
                    <InputGroup bottom="54px">
                        <InputBind>
                            <Input type='checkbutton' id="1" value="개인정보 수집 및 이용동의" width="80%" onChange={(e) => set_checkbox(e.target.checked)}>
                                {checkIcon}
                            </Input>
                            
                        </InputBind>
                    </InputGroup>
                    <InputGroup bottom="15px">
                        <InputBind>
                            <Label>예금주</Label>
                            <Input type="textbox" placeholder="상주명과 동일" onChange={(e) => set_account_name(e.target.value)}/>
                        </InputBind>
                        <InputBind>
                            <Label>은행</Label>
                            <InputBank onClick={Toggle} isopen={bank_toggle}>
                                <label>{bank_name}</label>
                                <p></p>
                                <Arrow isopen={bank_toggle}>
                                    {arrowIcon}
                                </Arrow>
                            </InputBank>
                        </InputBind>
                        <InputBind>
                            <BankList isopen={bank_toggle}>
                                {bank_list ? bank_list.map((item,key) => (
                                    <Bank onClick={bank_select} items={item}/>
                                )) : ''}
                            </BankList>
                        </InputBind>
                        <InputBind>
                            <Label>계좌번호</Label>
                            <Input type="number" placeholder="- 없이 입력" width="50%" onChange={(e) => set_account_number(e.target.value)} readOnly={readOnly}/>
                            <button onClick={onSubmit}>인증</button> 
                        </InputBind>
                    </InputGroup>
                    <Exp onClick={showCancelPopup}><p>※ <span>예금주는 상주정보와 동일</span>해야 등록이 가능합니다.</p></Exp>
                </Wrapper>
            <ButtonGroup position="bottom">
                <Button type="primary" onClick={Submit}>확인</Button>
            </ButtonGroup>
           
            <BankConfirmPopup show={BankConfirmPopup_isshow} onClose={showBankConfirmPopup} />
            <CancelPopup show={CancelPopup_isshow} onClose={showCancelPopup} />
           
        </MainContainer>
    );
};

export default IndemnityApply;