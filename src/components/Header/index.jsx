import React, {useState, useEffect, useRef} from 'react';
// import debug from 'debug';

import debug from 'react-debug';

import {Link, useLocation} from 'react-router-dom';
import {
    HeaderWrapper,
    TitleStyle,
    LeftArea,
    RightArea,
    HamBurger,
    SideMenu,
    SideWrapper,
    TopMenu,
    Content,
    } from './styled';

const shareIcon = (<svg xmlns="share.svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14.739 12.453c-1.167 0-2.21.532-2.903 1.366l-4.507-2.558c.14-.395.218-.819.218-1.26 0-.442-.078-.866-.218-1.26l4.506-2.56c.693.834 1.737 1.366 2.903 1.366 2.08 0 3.773-1.693 3.773-3.774C18.511 1.693 16.82 0 14.74 0c-2.081 0-3.774 1.693-3.774 3.773 0 .442.077.866.217 1.26l-4.506 2.56c-.692-.834-1.736-1.366-2.902-1.366C1.693 6.227 0 7.92 0 10s1.693 3.773 3.774 3.773c1.166 0 2.21-.532 2.902-1.365l4.506 2.558c-.14.395-.217.819-.217 1.26 0 2.081 1.693 3.774 3.773 3.774s3.773-1.693 3.773-3.773-1.692-3.774-3.772-3.774zm0-11.133c1.352 0 2.452 1.1 2.452 2.453 0 1.353-1.1 2.454-2.452 2.454-1.353 0-2.453-1.1-2.453-2.454 0-1.352 1.1-2.453 2.453-2.453zM3.774 12.453c-1.353 0-2.454-1.1-2.454-2.453 0-1.352 1.101-2.453 2.454-2.453 1.352 0 2.452 1.1 2.452 2.453 0 1.353-1.1 2.453-2.452 2.453zm10.965 6.227c-1.353 0-2.453-1.1-2.453-2.453 0-1.353 1.1-2.454 2.453-2.454 1.352 0 2.452 1.101 2.452 2.454 0 1.352-1.1 2.453-2.452 2.453z" transform="translate(-321 -14) translate(321 14)"/></svg>);
const closeIcon = (<svg xmlns="close.svg" width="21" height="21" viewBox="0 0 18 18"><path d="M13 5c.364 0 .659.295.659.659l-.001 7.682h7.683c.364 0 .659.295.659.659 0 .364-.295.659-.659.659l-7.683-.001v7.683c0 .364-.294.659-.658.659-.364 0-.659-.295-.659-.659v-7.683H4.659C4.295 14.659 4 14.365 4 14c0-.364.295-.659.659-.659h7.682V5.659c0-.364.295-.659.659-.659z" transform="translate(-29 -18) translate(23 11) rotate(45 13 14)"/></svg>)
const backIcon = (<svg xmlns="back.svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.555.449c.293.293.293.768 0 1.06L2.765 8.3 20.25 8.3c.414 0 .75.336.75.75s-.336.75-.75.75H2.814l6.741 6.74c.293.293.293.768 0 1.061-.293.293-.767.293-1.06 0l-8.01-8.01c-.156-.155-.229-.361-.22-.564-.01-.204.063-.412.22-.568L8.494.45c.293-.293.767-.293 1.06 0z" transform="translate(-20 -15) translate(20 11) translate(0 4) translate(0 1)"/></svg>)
const carbon_homeIcon = (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.459 1.66059C12.3259 1.55684 12.162 1.50049 11.9933 1.50049C11.8245 1.50049 11.6606 1.55684 11.5275 1.66059L0.75 10.0643L1.68225 11.2433L3 10.2158V19.5001C3.00079 19.8977 3.15908 20.2787 3.44022 20.5599C3.72135 20.841 4.10242 20.9993 4.5 21.0001H19.5C19.8976 20.9993 20.2787 20.841 20.5598 20.5599C20.8409 20.2787 20.9992 19.8977 21 19.5001V10.2226L22.3177 11.2501L23.25 10.0711L12.459 1.66059ZM13.5 19.5001H10.5V13.5001H13.5V19.5001ZM15 19.5001V13.5001C14.9996 13.1024 14.8414 12.7211 14.5602 12.4399C14.279 12.1587 13.8977 12.0005 13.5 12.0001H10.5C10.1023 12.0005 9.721 12.1587 9.43978 12.4399C9.15856 12.7211 9.0004 13.1024 9 13.5001V19.5001H4.5V9.04659L12 3.20409L19.5 9.05409V19.5001H15Z" fill="#111111"/></svg>)

const Header = (props) => {

    // window.onBackPressed = (e) => {
    //     // 구현내용
    //     // if(props.to)
    //     debug("some logs");

    //         window.location.href='/';
    //     e.preventDefault();
    //     alert(YepumAPI);
    //     앱종료
    //     YepumAPI.exit();
    //     이전페이지로 이동 (라우터)
    //     YepumAPI.goBack();
    //   }

    const {YepumAPI} = window;

    window.onBackPressed = (e) => {
        if (!props.to) {
            props.onClick([]);
        } else {
            YepumAPI.loadURL(props.to);
        }
        // alert(url);
        // YepumAPI.loadURL("");
        return 1;
    }

    const [menu_open, on_menu_open] = useState(0);
    const ToggleMenu = () => {
        if(!menu_open) {
            on_menu_open(1);
        } else {
            on_menu_open(0);
        }
    }

    // useEffect(() => {
    //     window.scrollTo(0,0);
    // })
    return ( 
        <HeaderWrapper border={props.border} background={props.background} type={props.type}>
            <LeftArea color={props.color} hamburger={props.hamburger} type={props.type}>
                {props.onBack ? (<Link to={props.to} onClick={props.onClick} className={'icon-Back'}>{backIcon}<span>뒤로</span></Link>) : ''}
            </LeftArea>
            <TitleStyle type={props.type} color={props.color} className={props.obiClassName}>
                {props.title}
            </TitleStyle>
            <RightArea color={props.color} onClick={props.onClick} type={props.type}>
                {props.onHome ? (<Link to={"/#"} className={'carbon_home'}>{carbon_homeIcon}</Link>) : ''}
                {props.onClose ? (<Link to={props.to} className={'icon-close'}>{closeIcon}</Link>) : ''}
                {props.onShare ? (<a href="/#" onClick={props.onShare} className={'icon-share'}>{shareIcon}</a>) : ''}
            </RightArea>
        </HeaderWrapper>
    );
};

export default Header;