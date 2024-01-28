import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SetLoading } from '../../../../../store/global';
import Popup from '../../../../../components/Popup';
import { ItemBox, ShareButton, Logo } from './styled';
import { ObituaryGetPost } from '../../../../../api/obituary';

const SharePopup = props => {
  const [obi_item, set_obi_item] = useState({ ID: '' });
  const [obi_item_ID, set_obi_item_ID] = useState(-1);
  const { Kakao } = window;
  const [mourner, setMourner] = useState('');
  const Dispatch = useDispatch();
  useEffect(() => {
    if (props.show) {
      if (props.show != obi_item.ID) {
        Dispatch(SetLoading(1));
        ObituaryGetPost({ obituary_ID: props.show })
          .then(res => {
            if (res.data.code == '200') {
              set_obi_item(res.data.body);
              set_obi_item_ID(res.data.body.ID);
              let name = '';
              res.data.body.mourner?.map((i, k) => {
                if (res.data.body.mourner?.length == k + 1) {
                  name = name + i.name;
                } else {
                  name = name + i.name + ', ';
                }
              });
              setMourner(name);
              Kakao.Link.createDefaultButton({
                container: '#kakao-link-btn',
                objectType: 'text',
                text:
                  `[訃告]\n故 ` +
                  (res.data.body ? res.data.body.deceased + '님이' : '') +
                  ` 별세 하셨기에 아래와 같이 부고를 전해드립니다\n\n[부고 확인]\nhttps://app.yepum.co.kr/front/obituary/` +
                  res.data.body.ID +
                  `\n\n황망한 마음에 일일이 연락 드리지 못함을 널리 혜량해 주시길 바랍니다\n\n상주 ` +
                  (res.data.body.mourner?.length == 1
                    ? res.data.body.mourner[0].name
                    : name),
                buttonTitle: '부고 확인',
                link: {
                  mobileWebUrl:
                    'https://app.yepum.co.kr/front/obituary/' +
                    res.data.body.ID,
                  webUrl:
                    'https://app.yepum.co.kr/front/obituary/' +
                    res.data.body.ID,
                },
              });
            }
            Dispatch(SetLoading(0));
          })
          .catch(err => console.log(err));
      }
    }
  });
  return (
    <Popup
      show={props.show}
      onClose={props.onClose}
      position="bottom"
      padding="20px"
      onCloseButton
    >
      부고를 보내실 수단을 선택해주세요.
      <ItemBox>
        <ShareButton>
          <a id="kakao-link-btn">
            <Logo className="kakao" />
            <span>카카오톡</span>
          </a>
        </ShareButton>
        <ShareButton>
          <a
            href={
              'sms://?&body=' +
              (
                `[訃告]\n故 ` +
                (obi_item ? obi_item.deceased + '님이' : '') +
                ` 별세 하셨기에 아래와 같이 부고를 전해드립니다.\n\n부고 확인\nhttps://app.yepum.co.kr/front/obituary/` +
                (obi_item.ID ? obi_item.ID : '') +
                `\n\n황망한 마음에 일일이 연락 드리지 못함을 널리 혜량해 주시길 바랍니다\n\n상주 ` +
                (obi_item.mourner?.length == 1
                  ? obi_item.mourner[0].name
                  : mourner)
              ).replace(/(\n|\r\n)/g, '%0a')
            }
          >
            <Logo className="message" />
            <span>문자메세지</span>
          </a>
        </ShareButton>
      </ItemBox>
    </Popup>
  );
};

export default SharePopup;
