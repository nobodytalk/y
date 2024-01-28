import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Header from '../../../components/Header';
import MainContainer from '../../../components/MainContainer';
import { MessageTab } from '../../../components/Tab';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import ReturnPopup from '../popup/ReturnPopup';
import { useLocation, useParams, Link } from 'react-router-dom';
import { produce } from 'immer';
import { MessageWrpaeer, MessageTitle, MessageButton } from '../styled';

const ReturnMessage = () => {
  let { search } = useLocation();
  const userData = useSelector(state => state.global.user_data);
  const params = useParams();
  const query = new URLSearchParams(search);
  const [messages, set_messages] = useState([]);
  const [active_tab, set_active_tab] = useState(
    query.get('tab') ? query.get('tab') : 1
  );
  const obituary_ID = query.get('obituary_ID') ? query.get('obituary_ID') : '';
  const { Kakao } = window;
  // const ChangeTab = (e) => {
  //     e.preventDefault();
  //     set_active_tab(e.target.dataset.id)
  //     set_message(messages[e.target.dataset.id-1]);
  //     // message_box.current.html = messages[e.target.dataset.id-1];
  //     console.log( message_box );
  // }

  const current = new Date();
  const date = `${current.getMonth() + 1}월 ${current.getDate()}일`;

  useEffect(() => {
    console.log(123);

    if (!messages.length && userData) {
      const draft = [
        `큰 슬픔으로 경황이 없던 저에게\n많은 위로를 주시고\n힘든 자리에 함께 해주셔서 감사합니다.\n\n덕분에 크나큰 위안이 되었고\n무사히 장례를 치렀습니다.\n\n이제야 마음을 추스르고\n일상으로 조금씩 돌아가려 합니다.\n\n앞으로 어려움이 생기시면\n언제든 연락바랍니다.\n보답할 기회로 생각하고\n성심을 다하겠습니다.\n\n${date}\n` +
          userData.user_name +
          ` 배상`,
        `큰 슬픔으로 경황이 없던 저에게\n많은 위로를 주시고\n힘든 자리에 함께 해주셔서 감사합니다.\n\n덕분에 크나큰 위안이 되었고\n무사히 장례를 치렀습니다.\n\n이제야 마음을 추스르고\n일상으로 조금씩 돌아가려 합니다.\n\n앞으로 어려움이 생기시면\n언제든 연락바랍니다.\n보답할 기회로 생각하고\n성심을 다하겠습니다.\n\n${date}\n` +
          userData.user_name +
          ` 배상`,
        `감사 인사 드립니다.\n\n이번 저희 OOO상사시에\n공사다망 하심에도 불구하고\n조의와 위로 덕분에\n무사히 상례를 마치게 도와주신데\n대하여 진심으로 감사드립니다.\n\n마땅히 찾아 뵙고 인사 드리는 것이\n도리이오니 황망 중이라\n서면으로 인사 드리게 됨을\n해량해주시기 바랍니다.\n\n항상 건승하시고 만복이 깃드시길\n기원합니다.\n\nn${date}\n` +
          userData.user_name +
          `배상`,
      ];
      const init = Array.from(draft);
      set_messages(init);
    }

    if (params.mourner_name) {
      if (!messages.length) {
        const init = produce(messages, draft => {
          draft.push(
            `큰 슬픔으로 경황이 없던 저에게\n많은 위로를 주시고\n힘든 자리에 함께 해주셔서 감사합니다.\n\n덕분에 크나큰 위안이 되었고\n무사히 장례를 치렀습니다.\n\n이제야 마음을 추스르고\n일상으로 조금씩 돌아가려 합니다.\n\n앞으로 어려움이 생기시면\n언제든 연락바랍니다.\n보답할 기회로 생각하고\n성심을 다하겠습니다.\n\n${date}\n` +
              params.mourner_name +
              ` 배상`
          );
          draft.push(
            `큰 슬픔으로 경황이 없던 저에게\n많은 위로를 주시고\n힘든 자리에 함께 해주셔서 감사합니다.\n\n덕분에 크나큰 위안이 되었고\n무사히 장례를 치렀습니다.\n\n이제야 마음을 추스르고\n일상으로 조금씩 돌아가려 합니다.\n\n앞으로 어려움이 생기시면\n언제든 연락바랍니다.\n보답할 기회로 생각하고\n성심을 다하겠습니다.\n\n${date}\n` +
              params.mourner_name +
              ` 배상`
          );
          draft.push(
            `감사 인사 드립니다.\n\n이번 저희 OOO상사시에\n공사다망 하심에도 불구하고\n조의와 위로 덕분에\n무사히 상례를 마치게 도와주신데\n대하여 진심으로 감사드립니다.\n\n마땅히 찾아 뵙고 인사 드리는 것이\n도리이오니 황망 중이라\n서면으로 인사 드리게 됨을\n해량해주시기 바랍니다.\n\n항상 건승하시고 만복이 깃드시길\n기원합니다.\n\nn${date}\n` +
              params.mourner_name +
              `배상`
          );
        });
        set_messages(init);
      }
    }

    if (messages.length) {
      Kakao.Link.cleanup();
      Kakao.Link.createDefaultButton({
        container: '#kakao-link-btn',
        objectType: 'text',
        text: messages[active_tab - 1],
        link: {
          mobileWebUrl: obituary_ID
            ? 'https://app.yepum.co.kr/front/obituary/' + obituary_ID
            : 'https://app.yepum.co.kr/',
          webUrl: obituary_ID
            ? 'https://app.yepum.co.kr/front/obituary/' + obituary_ID
            : 'https://app.yepum.co.kr/',
        },
      });
    }
  }, [userData, messages, active_tab, params.mourner_name]);
  const [ReturnPopup_isshow, show_ReturnPopup] = useState(1);
  const showReturnPopup = e => {
    e.preventDefault();
    if (ReturnPopup_isshow) {
      show_ReturnPopup(0);
    } else {
      show_ReturnPopup(1);
    }
  };

  return (
    <MainContainer>
      <Header
        title="답례 메시지 작성"
        onClose={params.mourner_name ? '' : true}
        to="/mypage/wreath"
        onHome={params.mourner_name ? '' : true}
      />
      <MessageWrpaeer>
        <MessageTitle>
          <h1>조의를 표한 조문객분들께</h1>
          {obituary_ID}
          <h1>감사 인사를 보내세요.</h1>
        </MessageTitle>
        <MessageTab>
          <li className={active_tab == 1 ? 'active' : ''}>
            <a href={'?tab=1'} data-id="1">
              일반
            </a>
          </li>
          <li className={active_tab == 2 ? 'active' : ''}>
            <a href={'?tab=2'} data-id="2">
              감사
            </a>
          </li>
          <li className={active_tab == 3 ? 'active' : ''}>
            <a href={'?tab=3'} data-id="3">
              정중
            </a>
          </li>
        </MessageTab>
        <Input
          type="textarea"
          width="100%"
          height="420px"
          padding="20px"
          value={messages.length ? messages[active_tab - 1] : ''}
          onChange={e => {
            const newMessage = produce(messages, draft => {
              draft[active_tab - 1] = e.target.value;
            });
            set_messages(newMessage);
          }}
        />
        {/* {(active_tab == 1 ) ? (
                    <Input 
                    type="textarea"
                    width="100%"
                    height="330px"
                    padding="20px"
                    value={`큰 슬픔으로 경황이 없던 저에게\n많은 위로를 주시고\n힘든 자리에 함께 해주셔서 감사합니다.\n\n덕분에 크나큰 위안이 되었고\n무사히 장례를 치렀습니다.\n\n이제야 마음을 추스르고\n일상으로 조금씩 돌아가려 합니다.\n\n앞으로 어려움이 생기시면\n언제든 연락바랍니다.\n보답할 기회로 생각하고\n성심을 다하겠습니다.\n\n${date}\n$홍상주$ 배상`}/>
                ) : ''}
                {(active_tab == 2 ) ? (<MessageThank />) : ''}
                {(active_tab == 3 ) ? (<MessageCourtesy />) : ''} */}
      </MessageWrpaeer>
      <MessageButton>
        <ButtonGroup position="bottom">
          <Button
            type="primary"
            width="50%"
            color="#fff"
            target={'_blank'}
            href={
              `sms://?&body=` +
              (messages.length
                ? messages[active_tab - 1].replace(/(\n|\r\n)/g, '%0a')
                : '')
            }
          >
            <p>
              <img
                src={process.env.PUBLIC_URL + '/img/messengimg1.png'}
                alt=""
              />
              문자메시지
            </p>
          </Button>
          <Button
            type="default"
            id="kakao-link-btn"
            width="50%"
            color="#111"
            bgColor="#fced1f"
          >
            <p>
              <img src={process.env.PUBLIC_URL + '/img/kakaoimg1.png'} alt="" />
              카카오톡
            </p>
          </Button>
        </ButtonGroup>
      </MessageButton>
      <ReturnPopup show={ReturnPopup_isshow} onClose={showReturnPopup} />
    </MainContainer>
  );
};

export default ReturnMessage;
