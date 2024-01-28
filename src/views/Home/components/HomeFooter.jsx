import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ServicePolicy from '../components/Popup/ServicePolicy';
import PrivacyPolicy from '../components/Popup/PrivacyPolicy';
import {
    HomeFooterWrapper,
    FooterContent,
    FooterSub,
    FooterSubWrapper,
    Arrow,
    FooterAnswer,
    Answer,
        } from '../styled';

const arrowIcon = <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 6 9">
        <g fill="none" fill-rule="evenodd">
            <g fill="#fff" fill-rule="nonzero">
                <g>
                    <g>
                        <path d="M69.92 11.515l-.4-.43c-.054-.056-.116-.085-.185-.085-.07 0-.131.029-.184.086L66 14.462l-3.15-3.376c-.054-.057-.115-.086-.185-.086-.07 0-.13.029-.184.086l-.4.43c-.054.057-.081.123-.081.197 0 .075.027.14.08.198l3.736 4.003c.053.057.115.086.184.086.07 0 .13-.029.184-.086l3.736-4.003c.053-.058.08-.123.08-.198 0-.074-.027-.14-.08-.198z" transform="translate(-319 -504) translate(20 492) translate(236 3) rotate(-90 66 13.5)"/>
                    </g>
                </g>
            </g>
        </g>
    </svg>

const HomeFooter = () => {

    const [footerToggle, doFooterToggle] = useState(0);

    const [ServicePolicy_isshow,show_ServicePolicy] = useState(0);
    const showServicePolicy = (e) => {
        if(ServicePolicy_isshow) {
            show_ServicePolicy(0);
        } else {
            show_ServicePolicy(1);
        }
    }

    const [PrivacyPolicy_isshow,show_PrivacyPolicy] = useState(0);
    const showPrivacyPolicy = (e) => {
        if(PrivacyPolicy_isshow) {
            show_PrivacyPolicy(0);
        } else {
            show_PrivacyPolicy(1);
        }
    }



    return (
        <HomeFooterWrapper>
            <FooterContent>
                <a onClick={showServicePolicy}>
                    <p>서비스이용약관</p>
                </a>
                <div />
                <a onClick={showPrivacyPolicy}>
                    <p>개인정보처리방침</p>
                </a>
            </FooterContent>
            <FooterSubWrapper>
                <FooterSub onClick={()=>doFooterToggle(!footerToggle)}>
                    <p>사업자정보
                        <Arrow toggled={footerToggle}>
                            {arrowIcon}
                        </Arrow>
                    </p>
                </FooterSub>
                <FooterAnswer style={{display: footerToggle ? 'block' : 'none'}}>
                    <Answer>
                        <p>서울시 영등포구 여의대방로 43나길 6 인우빌딩</p>
                        <p>대표번호 : 1544-3554</p>
                        <p>대표이사 : 한선화 ㅣ 사업자번호 403-94-14250</p>
                        <p>통신판매업 2020-서울영등포-3597호</p>
                    </Answer>
                </FooterAnswer>
                <p><span>Copyright© 예품 2020 All Right Reserved</span></p>
            </FooterSubWrapper>
            <ServicePolicy show={ServicePolicy_isshow} onClose={showServicePolicy} />
            <PrivacyPolicy show={PrivacyPolicy_isshow} onClose={showPrivacyPolicy} />
        </HomeFooterWrapper>
    );
};

export default HomeFooter;