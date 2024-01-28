import React from 'react';
import {
    WreathContent,
    WreatchContentList,
    WreatchContentLists,
    WreatchContentListd,
    Wreatch,
} from '../styled';

const Filters = (props) => {
    return (
        <WreathContent>
                {props.active_tab==1 && (
                    <WreatchContentList items="4">
                        <li className={(props.filter.price_range == 1) ? 'active' : ''}>
                            <a href="#" data-id="1" onClick={(e) => props.UpdateFilter('price_range', 1)}>
                                <p>10만원 이하</p>
                            </a>
                        </li>
                        <li className={(props.filter.price_range == 2) ? 'active' : ''}>
                            <a href="#" data-id="2" onClick={(e) => props.UpdateFilter('price_range', 2)}>
                                <p>10만원 대</p>
                            </a>
                        </li>
                        <li className={(props.filter.price_range == 3) ? 'active' : ''}>
                            <a href="#" data-id="3" onClick={(e) => props.UpdateFilter('price_range', 3)}>
                                <p>20만원 대</p>
                            </a>
                        </li>
                        <li className={(props.filter.price_range == 4) ? 'active' : ''}>
                            <a href="#" data-id="4" onClick={(e) => props.UpdateFilter('price_range', 4)}>
                                <p>20만원 이상</p>
                            </a>
                        </li>
                    </WreatchContentList>
                )}
                {props.active_tab==2 && (
                    <WreatchContentLists items="6">
                        <li className={(props.filter.relation == 31) ? 'active' : ''}>
                            <a href="#" data-id="31" onClick={(e) => props.UpdateFilter('relation', 31)}>
                                <p>직장내</p>
                            </a>
                        </li>
                        <li className={(props.filter.relation == 32) ? 'active' : ''}>
                            <a href="#" data-id="32" onClick={(e) => props.UpdateFilter('relation', 32)}>
                                <p>동문회</p>
                            </a>
                        </li>
                        <li className={(props.filter.relation == 33) ? 'active' : ''}>
                            <a href="#" data-id="33" onClick={(e) => props.UpdateFilter('relation', 33)}>
                                <p>귀한분에게</p>
                            </a>
                        </li>
                        <li className={(props.filter.relation == 34) ? 'active' : ''}>
                            <a href="#" data-id="34" onClick={(e) => props.UpdateFilter('relation', 34)}>
                                <p>스승님께</p>
                            </a>
                        </li>
                        <li className={(props.filter.relation == 35) ? 'active' : ''}>
                            <a href="#" data-id="35" onClick={(e) => props.UpdateFilter('relation', 35)}>
                                <p>친지분에게</p>
                            </a>
                        </li>
                        <li className={(props.filter.relation == 36) ? 'active' : ''}>
                            <a href="#" data-id="36" onClick={(e) => props.UpdateFilter('relation', 36)}>
                                <p>친구분에게</p>
                            </a>
                        </li>
                    </WreatchContentLists>
                )}
                {props.active_tab==3 && (
                    <WreatchContentListd items="10">
                        <li className={(props.filter.category == 37) ? 'active' : ''}>
                            <a href="#" data-id="37" onClick={(e) => props.UpdateFilter('category', 37)}>
                                <p>3단화환</p>
                            </a>
                        </li>
                        <li className={(props.filter.category == 38) ? 'active' : ''}>
                            <a href="#" data-id="38" onClick={(e) => props.UpdateFilter('category', 38)}>
                                <p>4단화환</p>
                            </a>
                        </li>
                        <li className={(props.filter.category == 39) ? 'active' : ''}>
                            <a href="#" data-id="39" onClick={(e) => props.UpdateFilter('category', 39)}>
                                <p>5단화환</p>
                            </a>
                        </li>
                        <li className={(props.filter.category == 40) ? 'active' : ''}>
                            <a href="#" data-id="40" onClick={(e) => props.UpdateFilter('category', 40)}>
                                <p>스텐드</p>
                            </a>
                        </li>
                        <li className={(props.filter.category == 41) ? 'active' : ''}>
                            <a href="#" data-id="41" onClick={(e) => props.UpdateFilter('category', 41)}>
                                <p>영정바구니</p>
                            </a>
                        </li>
                        <li className={(props.filter.category == 42) ? 'active' : ''}>
                            <a href="#" data-id="42" onClick={(e) => props.UpdateFilter('category', 42)}>
                                <p>서양란</p>
                            </a>
                        </li>
                        <li className={(props.filter.category == 44) ? 'active' : ''}>
                            <a href="#" data-id="44" onClick={(e) => props.UpdateFilter('category', 44)}>
                                <p>쌀화환</p>
                            </a>
                        </li>
                        <li className={(props.filter.category == 45) ? 'active' : ''}>
                            <a href="#" data-id="45" onClick={(e) => props.UpdateFilter('category', 45)}>
                                <p>후다지</p>
                            </a>
                        </li>
                        <li className={(props.filter.category == 46) ? 'active' : ''}>
                            <a href="#" data-id="46" onClick={(e) => props.UpdateFilter('category', 46)}>
                                <p>오브제</p>
                            </a>
                        </li>
                        <li className={(props.filter.category == 43) ? 'active' : ''}>
                            <a href="#" data-id="43" onClick={(e) => props.UpdateFilter('category', 43)}>
                                <p>옥화</p>
                            </a>
                        </li>
                    </WreatchContentListd>
                )}
        </WreathContent>
    );
};

export default Filters;