import React, {useState, useEffect, useRef} from 'react';
import {Link, useLocation} from 'react-router-dom';
import {
    HomeHeaderWrapper,
    HeaderSection,
    HeaderImg,
    SearchToggle,
    SearchWrapper,
    EmptyBox,
    SearchBar,
    Overlay,
    HamBurger,
    SideMenu,
    SideWrapper,
    TopMenu,
    Content,
} from '../styled';
import {GetMe} from '../../../api/user';
import {useDispatch, useSelector} from 'react-redux';
import {SetLoading} from '../../../store/global';
import {SetUserData} from '../../../store/global';


const searchIcon = (<svg xmlns="share.svg" width="18" height="18" viewBox="0 0 18 18"><path d="M15.502 9.491h-.794l-.276.274C15.407 10.902 16 12.376 16 13.991c0 3.59-2.91 6.5-6.5 6.5s-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5c1.615 0 3.088.592 4.225 1.566l.276-.274v-.792L18.999 3l1.491 1.491-4.988 5zm-6.002 0c-2.486 0-4.5 2.014-4.5 4.5 0 2.485 2.014 4.5 4.5 4.5 2.485 0 4.5-2.015 4.5-4.5 0-2.486-2.015-4.5-4.5-4.5z" transform="translate(-289 -42) translate(286 39) matrix(1 0 0 -1 0 23.491)"/></svg>);
const hambugerIcon = (<svg xmlns="share.svg" width="18" height="18" viewBox="0 0 18 18"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" transform="translate(-323 -46) translate(320 40)"/></svg>)
const HomeHeader = (props) => {
    const params = useLocation();
    const Dispatch = useDispatch();
    const inputEl = useRef(null);
    const [menu_open, on_menu_open] = useState(0);
    const [search_open, on_search_open] = useState(0);
    const [search_input, update_search_input] = useState('');
    const [user, set_user] = useState('');





    const ToggleMenu = () => {
        if(!menu_open) {
            on_menu_open(1);
        } else {
            on_menu_open(0);
        }
    }
    const ToggleSearch = () => {
        if(!search_open) {
            on_search_open(1);
            inputEl.current.focus();
        } else {
            on_search_open(0);
        }
    }
    const HandleSearch = (e) => {
        update_search_input(e.target.value);
        if (e.key === 'Enter') {
            window.location.href='/search/'+e.target.value;
        }
    }

    const [hide, setHide] = useState(false);
    const [pageY, setPageY] = useState(0);
    const documentRef = useRef(document);

    const handleScroll = () => {
        const { pageYOffset } = window;
        // const deltaY = pageYOffset - pageY;
        const hide = pageYOffset > 30    && pageY < pageYOffset;
      
        if(!menu_open){
            setHide(hide);
            setPageY(pageYOffset);
        } else {
            setPageY(0);
        }
    }

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

        documentRef.current.addEventListener('scroll', handleScroll);
        return () => documentRef.current.removeEventListener('scroll', handleScroll);

        
    });

    const {obituary_count, latest_obituary_ID} = useSelector(state=>state.global.user_data);

    const {YepumAPI} = window;
    let lastPressed = (new Date()).getTime()-5000;
    window.onBackPressed = e => {
    let currentTime = (new Date()).getTime();
        if (currentTime - lastPressed < 1000) {
            YepumAPI.exit();
        } else {
            lastPressed = currentTime;
            YepumAPI.toast('한번 더 누르면 종료됩니다.');
        }
        return true;
    }
    
    return (
        <>
            <HomeHeaderWrapper>
                <HeaderSection className={(hide ? 'hide' : '') + ( (pageY < 30) ? ' top' : '' )}>
                    <HeaderImg>
                        <img src={process.env.PUBLIC_URL + '/img/mainlogo.png'} alt="" />
                    </HeaderImg>
                    <HamBurger onClick={ToggleMenu} isopen={menu_open} type={props.menu}>
                        <div>
                            <i className="l"/>                    
                            <i className="s"/>                    
                            <i className="l"/>     
                        </div>       
                    </HamBurger>
                    <SearchToggle>
                        <Link to={"/search"}>
                            <img src={process.env.PUBLIC_URL + '/search.png'} alt="" />
                        </Link>
                    </SearchToggle>
                    <SideMenu isopen={menu_open}>
                        <SideWrapper>
                            <EmptyBox>
                                <TopMenu>
                                    {user.user_name ? (<h1>반갑습니다. {user.user_name}님</h1>) : ''}
                                </TopMenu>
                            </EmptyBox>
                            <Content>
                                <Link to="/search">
                                    <h2>부고 찾기</h2>
                                </Link>
                                    <div />
                                <Link to="/obituary/make">
                                    <h2>부고장 작성</h2>
                                </Link>
                                <Link to="/obituary/list">
                                    <h2>나의 부고장</h2>
                                </Link>
                                <Link 
                                    to={user.obituary_count == 1 ? "/obituary/"+user.latest_obituary_ID+"/indemnity/account" : "/obituary/list" }>
                                    <h2>부의금 서비스</h2>
                                </Link>
                                    <div />
                                <Link to="/shop">
                                    <h2>화환 보내기</h2>
                                </Link>
                                <Link to="/mypage/wreath">
                                    <h2>부의 내역</h2>
                                </Link>
                                <Link to="/mypage/stamp">
                                    <h2>나의 스탬프</h2> 
                                </Link>
                                    <div />
                                <Link to="/story/">
                                    <h2>스토리</h2>
                                </Link>
                                <Link to="/question/faq">
                                    <h2>자주 묻는 질문</h2>
                                </Link>
                                <Link to="/question/qna">
                                    <h2>1:1 문의</h2>
                                </Link>
                                <a href="http://pf.kakao.com/_MxoyBK/chat" target="_blank">
                                    <h2>카카오채널 톡</h2>
                                </a>
                            </Content>
                        </SideWrapper>
                    </SideMenu>
                </HeaderSection>
            </HomeHeaderWrapper>
            <SearchWrapper>
                {/* <SearchBar searchopen={search_open}> 
                    <input className="search__input" searchopen={search_open}  onKeyPress={(e) => HandleSearch(e)} type="text" placeholder="Search" ref={inputEl}/>
                    <div className="close" onClick={ToggleSearch}>
                        <div></div>
                        <div></div>
                    </div>
                </SearchBar>
                <Overlay searchopen={search_open} onClick={ToggleSearch}>
                </Overlay> */}
            </SearchWrapper>
        </>
    );
};

export default HomeHeader;