import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from './views/Home';
import Login from './views/Auth/Login';
import JoinComplete from './views/Auth/JoinComplete';
import Loading from './views/Auth/Login/Loading';
import Confirm from './components/Confirm';
import PhoneAuth from './views/Auth/PhoneAuth';
import AuthCallback from './views/Auth/AuthCallback';
import AppleCallback from './views/Auth/AppleCallback';
import NaverCallback from './views/Auth/NaverCallback';
import PolicyService from './views/Auth/Policy/ServicePolicy';
import PolicyPrivacy from './views/Auth/Policy/PrivacyPolicy';
import InitTmp from './views/Obituary/InitTmp';
import Make from './views/Obituary/Make/index';
import FrontInitTmp from './views/Obituary/Front/InitTmp';
import FrontMake from './views/Obituary/Front/Make/index';
import SearchPlace from './views/Obituary/Make/SearchPlace';
import Complete from './views/Obituary/Make/Complete';
import List from './views/Obituary/List';
import Details from './views/Obituary/Details';
import MessageList from './views/Obituary/Details/components/MessageList';
import MessageSingle from './views/Obituary/Details/components/MessageSingle';
import MessageWrite from './views/Obituary/Details/components/MessageWrite';
import IndemnityGuide from './views/Indemnity/Guide';
import IndemnityApply from './views/Indemnity/Apply';
import IndemnityComplete from './views/Indemnity/Apply/Complete';
import IndemnityAccount from './views/Indemnity/Account';
import AccountAdd from './views/Indemnity/Account/components/AccountAdd';
import AccountPayment from './views/Indemnity/Account/components/AccountPayment';
import AccountPaymentCallback from './views/Indemnity/Account/AccountPaymentCallback';
import AddComplete from './views/Indemnity/Account/components/AddComplete';
import AccountService from './views/Indemnity/Service/';
import AccountCorrection from './views/Indemnity/Account/components/AccountCorrection';
import CorrectionComplete from './views/Indemnity/Account/components/CorrectionComplete';
import PrivacyCollection from './views/Indemnity/Account/Policy/PrivacyCollection';
import Mypage from './views/Mypage';
import Stamp from './views/Mypage/components/Stamp';
import Wreath from './views/Mypage/components/Wreath';
import Search from './views/Mypage/components/Search';
import ReturnMessage from './views/Mypage/components/ReturnMessage';
import Loop from './views/Shop/Loop';
import ShopSearchPlace from './views/Shop/ShopSearchPlace';
import Single from './views/Shop/Single';
import Order from './views/Shop/Order';
import PaymentCallback from './views/Shop/Order/PaymentCallback';
import RibbonExample from './views/Shop/Order/components/RibbonExample';
import OrderComplete from './views/Shop/Order/components/OrderComplete';
import OrderDetail from './views/Shop/Order/components/OrderDetail';
import Qna from './views/Question/compontent/Qna';
import QnaComplete from './views/Question/compontent/QnaComplete';
import Faq from './views/Question/compontent/Faq';
import AuthContainer from './components/AuthContainer';
import Bank from './components/Bank';
import HomeService from './views/Home/components/HomeService';
import HomePrivacy from './views/Home/components/HomePrivacy';
import ScrollToTop from './components/ScrollTop/ScrollToTop';
import { useSelector } from 'react-redux';
import Story from './views/Question/compontent/Story';

function App() {
  // console.log(window.location);
  const isLoading = useSelector(state => state.global.loading);
  const ConfirmData = useSelector(state => state.global.confirm);
  const { obituary_count, latest_obituary_ID } = useSelector(
    state => state.global.user_data
  );
  console.log('app.js');
  return (
    <>
      <Helmet>
        <title>예품</title>
      </Helmet>
      <ScrollToTop />
      {/* {window.location.protocol+'//'+window.location.host} */}
      <Switch>
        <Route exact={true} path="/login" component={Login} />
        <Route exact={true} path="/joincomplete" component={JoinComplete} />
        {/* <Route exact={true} path="/loading" component={Loading}/> */}
        <Route exact={true} path="/auth" component={PhoneAuth} />
        <Route
          exact={true}
          path="/auth/:platform/:sns_id"
          component={PhoneAuth}
        />
        <Route exact={true} path="/naver_callback" component={NaverCallback} />
        <Route
          exact={true}
          path="/apple_callback/:sns_id"
          component={AppleCallback}
        />
        <Route exact={true} path="/auth_callback" component={AuthCallback} />
        <Route exact={true} path="/policy/service" component={PolicyService} />
        <Route exact={true} path="/policy/privacy" component={PolicyPrivacy} />
        {/* 회원제 페이지들 */}

        {/* 비 회원제 페이지들 */}

        {/* 부고 공유하기 링크 */}

        <Route
          exact={true}
          path="/front/obituary/make"
          component={FrontInitTmp}
        />
        <Route
          exact={true}
          path="/front/obituary/make/:tmp_obituary_ID"
          component={FrontMake}
        />

        <Route
          exact={true}
          path="/front/obituary/:obituary_ID"
          component={Details}
        />
        <Route
          exact={true}
          path="/front/obituary/:obituary_ID/messagelist"
          component={MessageList}
        />
        <Route
          exact={true}
          path="/front/obituary/:obituary_ID/messagesingle"
          component={MessageSingle}
        />
        <Route
          exact={true}
          path="/front/obituary/:obituary_ID/messagewrite"
          component={MessageWrite}
        />

        <Route
          exact={true}
          path="/front/obituary/:obituary_ID/indemnity"
          component={AccountService}
        />

        <Route
          exact={true}
          path="/front/shop/obituary/:obituary_ID"
          component={Loop}
        />
        <Route
          exact={true}
          path="/front/shop/detail/:product_ID/:funeral_ID/:obituary_ID"
          component={Single}
        />
        <Route
          exact={true}
          path="/front/order/:product_ID/:funeral_ID/:obituary_ID"
          component={Order}
        />

        {/* 화환 공유하기 링크 */}

        <Route exact={true} path="/front/shop" component={Loop} />
        <Route
          exact={true}
          path="/front/shop/funeral/:funeral_ID"
          component={Loop}
        />
        <Route
          exact={true}
          path="/front/shop/funeral"
          component={ShopSearchPlace}
        />
        <Route
          exact={true}
          path="/front/shop/funeral/search/:product_ID"
          component={ShopSearchPlace}
        />
        <Route
          exact={true}
          path="/front/shop/detail/:product_ID/:funeral_ID"
          component={Single}
        />
        <Route
          exact={true}
          path="/front/order/:product_ID/:funeral_ID"
          component={Order}
        />

        <Route
          exact={true}
          path="/complete/:order_ID"
          component={OrderComplete}
        />
        <Route
          exact={true}
          path="/front/order/:order_ID"
          component={OrderDetail}
        />

        <Route
          exact={true}
          path="/payment/callback"
          component={PaymentCallback}
        />

        {/* 답례인사 보내기 */}
        <Route
          exact={true}
          path="/front/returnmessage/:mourner_name"
          component={ReturnMessage}
        />

        {/* 비 회원제 페이지들 */}

        <AuthContainer>
          <Switch>
            <Route exact={true} path="/" component={Home} />

            <Route exact={true} path="/obituary/make" component={InitTmp} />
            <Route
              exact={true}
              path="/obituary/make/:tmp_obituary_ID"
              component={Make}
            />

            <Route
              exact={true}
              path="/obituary/search"
              component={SearchPlace}
            />
            <Route
              exact={true}
              path="/obituary/complete/:obituary_ID"
              component={Complete}
            />
            <Route exact={true} path="/obituary/list" component={List} />
            <Route
              exact={true}
              path="/obituary/:obituary_ID"
              component={Details}
            />
            <Route
              exact={true}
              path="/mypage/obituary/:obituary_ID"
              component={Details}
            />
            <Route
              exact={true}
              path="/obituary/:obituary_ID/messagelist"
              component={MessageList}
            />
            <Route
              exact={true}
              path="/obituary/:obituary_ID/messagesingle"
              component={MessageSingle}
            />
            <Route
              exact={true}
              path="/obituary/:obituary_ID/messagewrite"
              component={MessageWrite}
            />
          </Switch>

          <Route exact={true} path="/bank" component={Bank} />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/"
            component={AccountService}
          />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/guide"
            component={IndemnityGuide}
          />
          {/* 없어져도 되는 라우터 */}
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/apply"
            component={AccountAdd}
          />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/apply/complete"
            component={IndemnityComplete}
          />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/account"
            component={IndemnityAccount}
          />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/accountadd"
            component={AccountAdd}
          />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/accountadd/:is_payment"
            component={AccountAdd}
          />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/accountpayment/:indemnity_ID"
            component={AccountPayment}
          />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/addcomplete"
            component={AddComplete}
          />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/accountcorrection/:indemnity_ID"
            component={AccountCorrection}
          />
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/correctioncomplete"
            component={CorrectionComplete}
          />
          <Route
            exact={true}
            path="/account_payment/callback"
            component={AccountPaymentCallback}
          />
          {/* Todo : 레이어팝업 필요 */}
          <Route
            exact={true}
            path="/obituary/:obituary_ID/indemnity/privacy/collection"
            component={PrivacyCollection}
          />

          <Route exact={true} path="/mypage" component={Mypage} />
          <Route
            exact={true}
            path="/mypage/returnmessage/:order_ID"
            component={ReturnMessage}
          />
          <Route exact={true} path="/mypage/stamp" component={Stamp} />
          <Route exact={true} path="/mypage/wreath/" component={Wreath} />
          <Route
            exacy={true}
            path="/home/policy/service"
            component={HomeService}
          />
          <Route
            exacy={true}
            path="/home/policy/privacy"
            component={HomePrivacy}
          />
          <Route exact={true} path="/search" component={Search} />

          <Route exact={true} path="/shop" component={Loop} />
          <Route
            exact={true}
            path="/shop/funeral/:funeral_ID"
            component={Loop}
          />
          <Route
            exact={true}
            path="/shop/funeral"
            component={ShopSearchPlace}
          />
          <Route
            exact={true}
            path="/shop/funeral/search/:product_ID"
            component={ShopSearchPlace}
          />
          <Route
            exact={true}
            path="/shop/obituary/:obituary_ID"
            component={Loop}
          />
          <Route
            exact={true}
            path="/shop/detail/:product_ID/:funeral_ID"
            component={Single}
          />
          <Route
            exact={true}
            path="/shop/detail/:product_ID/:funeral_ID/:obituary_ID"
            component={Single}
          />

          <Route
            exact={true}
            path="/order/:product_ID/:funeral_ID"
            component={Order}
          />
          <Route
            exact={true}
            path="/order/:product_ID/:funeral_ID/:obituary_ID"
            component={Order}
          />
          <Route
            exact={true}
            path="/mypage/order/:order_ID"
            component={OrderDetail}
          />
          <Route exact={true} path="/question/qna" component={Qna} />
          <Route exact={true} path="/qna/complete" component={QnaComplete} />
          <Route exact={true} path="/story" component={Story} />
          <Route exact={true} path="/question/faq" component={Faq} />
        </AuthContainer>
      </Switch>
      {isLoading ? <Loading /> : ''}
      {ConfirmData ? <Confirm data={ConfirmData} /> : ''}
    </>
  );
}

export default App;
