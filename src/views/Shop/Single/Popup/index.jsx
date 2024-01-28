import React from 'react';
import Popup from '../../../../components/Popup';
import {ItemBox,
    Title,
    ShareButton,
    Logo} from './styled';

const SharePopup =   (props) => {
    let link = `https://app.yepum.co.kr/front/shop/detail/`+props.product_item.ID+`/0/`;
    let content = `위로의 따뜻한 마음을\n근조화환에 담아 고인에게 대한 예를 갖추어 빈소로 보내드립니다.\n\n애도하는 마음을 예를 다한 근조화환으로 상주분께 위로의 마음을 전해보세요.`;
    const {Kakao} = window;
    const SendLink = (e) => {
        e.preventDefault();
        Kakao.Link.sendDefault({
            objectType: 'text',
            text:
            content,
            buttonTitle:'화환 상품 보기',
            link: {
              mobileWebUrl:
                link,
              webUrl:
                link,
            },
          });
    }
    return (
        <Popup show={props.show} onClose={props.onClose} position='bottom'>
            <Title>공유하기</Title>
            <ItemBox>
                <ShareButton>
                    <a href="#" onClick={SendLink}>
                        <Logo className="kakao" />
                        <span>카카오톡</span>
                    </a>
                </ShareButton>
                <ShareButton>
                    <a href={"sms:?&body=" + (content+ `\n[화환 상품 보기]\n`+link).replace(/(\n|\r\n)/g, "%0a")}>
                        <Logo className="message" />
                        <span>문자메시지</span>
                    </a>
                </ShareButton>
            </ItemBox>
        </Popup>
    );
};

export default SharePopup;