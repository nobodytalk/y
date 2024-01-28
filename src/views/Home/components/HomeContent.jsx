import React, {useState, useEffect} from 'react';
import {Row, Col} from '../../../components/Grid';
import {Link, useParams} from 'react-router-dom';
import {GetMe} from '../../../api/user';
import {HomeContentWrapper,
        ContentTitle,
        ContentList} from '../styled';

const HomeContent = () => {
    const params = useParams();
    const [user, set_user] = useState('');

    useEffect(() => {
        if(!user) {
            GetMe()
            .then(response => {
                if(response.data.code == 200){
                    set_user(response.data.body);
                } 
            })
            .catch(error => console.log(error));
        }
    });
    return (
        <HomeContentWrapper>
            <ContentTitle>
                <h2>예품 서비스</h2>
                <ContentList>
                        <Link to={"/search"}>
                            <Row>
                                <Col>
                                    <div className="border">
                                        {/* <img src={process.env.PUBLIC_URL + '/img/contentimg1.png'} alt="" /> */}
                                    </div>
                                </Col>
                                <Col flex="3">
                                    <h3>부고 찾기</h3>
                                    <p>찾으시려는 지인의 부고를 검색하세요.</p>
                                </Col>
                            </Row>
                        </Link>
                        <Link to={"/mypage/wreath"}>
                            <Row>
                                <Col>
                                    <div className="border">
                                        {/* <img src={process.env.PUBLIC_URL + '/img/contentimg4.png'} alt="" /> */}
                                    </div>
                                </Col>
                                <Col flex="3">
                                    <h3>부의 내역</h3>
                                    <p>화환 보내고 화환을 받은 내역</p>
                                </Col>
                            </Row>
                        </Link>
                        <Link to={user.obituary_count == 1 ? "/obituary/"+user.latest_obituary_ID+"/indemnity/account" : "/obituary/list" }>
                            <Row>
                                <Col>
                                    <div className="border">
                                        {/* <img src={process.env.PUBLIC_URL + '/img/contentimg2.png'} alt="" /> */}
                                    </div>
                                </Col>
                                <Col flex="3">
                                    <h3>부의금 서비스</h3>
                                    <p>부의금 계좌 알림 서비스</p>
                                </Col>
                            </Row>
                        </Link>
                        <Link to={"/mypage/stamp"}>
                            <Row>
                                <Col>
                                    <div className="border">
                                        {/* <img src={process.env.PUBLIC_URL + '/img/contentimg3.png'} alt="" /> */}
                                    </div>
                                </Col>
                                <Col flex="3">
                                    <h3>화환스탬프</h3>
                                    <p>화환으로 마음을 보내고 받은 스탬프 확인</p>
                                </Col>
                            </Row>
                        </Link>
                        <a href="http://pf.kakao.com/_MxoyBK/chat" target="_blank">
                            <Row>
                                <Col>
                                    <div className="border">
                                        {/* <img src={process.env.PUBLIC_URL + '/img/contentimg5.png'} alt="" /> */}
                                    </div>
                                </Col>
                                <Col flex="3">
                                    <h3>카카오플러스친구 상담</h3>
                                    <p>카카오톡 상담 서비스</p>
                                </Col>
                            </Row>
                        </a>
                </ContentList>
            </ContentTitle>
        </HomeContentWrapper>
    );
};

export default HomeContent;