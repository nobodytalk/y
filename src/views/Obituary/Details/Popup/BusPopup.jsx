import React, { useState, useEffect}  from 'react';
import Popup from '../../../../components/Popup';
import {Tab} from '../../../../components/Tab';
import {Link} from 'react-router-dom';
import SubwayListPopup from './SubwayListPopup';
import BusListPopup from './BusListPopup';
import {
    BusWrapper,
    BusTitle,
    BusContent,
    BusTab,
} from './styled';


const phoneIcon = 
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
        <g fill="none" fill-rule="evenodd">
            <g fill="#D8D8D8" fill-rule="nonzero">
                <g>
                    <g>
                        <path d="M15.198 11.564c-.613 0-1.214-.096-1.783-.284-.28-.095-.623-.008-.793.167l-1.125.849c-1.303-.696-2.107-1.5-2.793-2.793l.824-1.096c.214-.213.29-.526.198-.819-.189-.572-.285-1.173-.285-1.786 0-.442-.36-.802-.802-.802H6.802C6.36 5 6 5.36 6 5.802 6 10.874 10.126 15 15.198 15c.442 0 .802-.36.802-.802v-1.832c0-.442-.36-.802-.802-.802z" transform="translate(-133 -211) translate(70 144) translate(57 62)"/>
                    </g>
                </g>
            </g>
        </g>
    </svg>



const BusPopup = (props) => {

    const [active_tab, set_active_tab] = useState(1);
    const ChangeTab = (e) => {
        e.preventDefault();
        set_active_tab(e.target.dataset.id)
    }

    const CopyAccount = (e) => {
        document.execCommand('copy');
        e.target.focus();
        alert('주소가 복사가 완료되었습니다.')
    }

    return (
        <Popup show={props.show} onCloseButton={props.onClose} onClose={props.onClose} padding="12px" borderRadius="12px">
            <BusWrapper>
                <BusTitle>
                    <h1>대중 교통</h1>
                </BusTitle>
                <BusContent>
                    <h2>{props.items.post_title ? props.items.post_title : ''}</h2>
                    <p onClick={CopyAccount} >{props.items.address ? props.items.address : ''}</p>
                    <a href={"tel:"+props.items.tel}><span>{phoneIcon}{props.items.tel ? props.items.tel : ''}</span></a>
                </BusContent>
                <BusTab>
                    <Tab>
                        <li className={(active_tab == 1) ? 'active' : ''}><Link to={"/"} data-id="1" onClick={ChangeTab}>지하철</Link></li>
                        <li className={(active_tab == 2) ? 'active' : ''}><Link to={"/"} data-id="2" onClick={ChangeTab}>버스</Link></li>
                    </Tab>
                </BusTab>
            </BusWrapper>
            {(active_tab == 1 ) ? (<SubwayListPopup items={props.details && props.details.subway}/>) : ''}
            {(active_tab == 2 ) ? (<BusListPopup items={props.details && props.details.bus}/>) : ''}
        </Popup>
    );
};

export default BusPopup;