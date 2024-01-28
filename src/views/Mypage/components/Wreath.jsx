import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SetLoading} from '../../../store/global';
import Header from '../../../components/Header';
import {Tab} from '../../../components/Tab';
import WreathGet from './WreathGet';
import WreathPost from './WreathPost';
import MainContainer from '../../../components/MainContainer';
import {Link} from 'react-router-dom';
import {OrderGetOrders} from '../../../api/order';
import {
    WreathWrapper,
    WreathTitle,
    WreathTab,
} from '../styled';

const Wreath = () => {
    const Dispatch = useDispatch();
    const {sent_flower_count, received_flower_count} = useSelector(state=>state.global.user_data);
    const [active_tab, set_active_tab] = useState(1);
    const [current_tab, set_current_tab] = useState(-1);
    const ChangeTab = (e) => {
        e.preventDefault();
        set_active_tab(e.target.dataset.id)
    }

    const [get_item, set_get_item] = useState(0);

    useEffect(() => {
        // Dispatch(SetLoading(1));
        if(current_tab != active_tab) {
            OrderGetOrders({
                type: active_tab - 1
            })
            .then((response) => {
                // Dispatch(SetLoading(0));
                if(response.data.code == '200') {
                    set_get_item(response.data.body.orders);
                } else {
                    set_get_item(0);
                }
            })
            .catch(err=>console.log(err));
            set_current_tab(active_tab);
        }
    });

    return (
        <MainContainer>
            <Header hamburger title="부의 내역" background="white" onBack to="/#/" onHome />
            <WreathWrapper>
                <WreathTitle>
                    <h1>위로의 마음을 전달한</h1>
                    <h1>화환을 확인하세요.</h1>
                </WreathTitle>
                <WreathTab>
                    <Tab>
                        <li className={(active_tab == 1) ? 'active' : ''}><Link to={"/mypage/wreath/"} data-id="1" onClick={ChangeTab}>보낸화환 {sent_flower_count && sent_flower_count}</Link></li>
                        <li className={(active_tab == 2) ? 'active' : ''}><Link to={"/mypage/wreath/?tab=2"} data-id="2" onClick={ChangeTab}>받은화환 {received_flower_count && received_flower_count}</Link></li>
                    </Tab>
                </WreathTab>
            </WreathWrapper>
            {(active_tab == 1 ) ? (<WreathPost items={get_item} />) : ''}
            {(active_tab == 2 ) ? (<WreathGet items={get_item} />) : ''}
        </MainContainer>
    );
};

export default Wreath;