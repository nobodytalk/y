import React from 'react';
import {Link} from 'react-router-dom';
import {WreathListWrapper,
        ListContent,
        } from '../styled';

const WreathList = () => {
    return (
        <WreathListWrapper>
            <ListContent>
                <Link to={"/shop/single/"}>
                    <img src={process.env.PUBLIC_URL + '/img/shopimg3.png'} alt="" />  
                    <h1>3단 근조화한 1호</h1>
                    <p>100,000</p>
                    <strong><small>20%</small> 80,000<span>원</span></strong>
                </Link>
            </ListContent>
            <ListContent>
                <Link to={"/shop/single/"}>
                    <img src={process.env.PUBLIC_URL + '/img/shopimg3.png'} alt="" />  
                    <h1>3단 근조화한 1호</h1>
                    <p>100,000</p>
                    <strong><small>20%</small> 80,000<span>원</span></strong>
                </Link>
            </ListContent>
            <ListContent>
                <Link to={"/shop/single/"}>
                    <img src={process.env.PUBLIC_URL + '/img/shopimg3.png'} alt="" />  
                    <h1>3단 근조화한 1호</h1>
                    <p>100,000</p>
                    <strong><small>20%</small> 80,000<span>원</span></strong>
                </Link>
            </ListContent>
            <ListContent>
                <Link to={"/shop/single/"}>
                    <img src={process.env.PUBLIC_URL + '/img/shopimg3.png'} alt="" />  
                    <h1>3단 근조화한 1호</h1>
                    <p>100,000</p>
                    <strong><small>20%</small> 80,000<span>원</span></strong>
                </Link>
            </ListContent>
            <ListContent>
                <Link to={"/shop/single/"}>
                    <img src={process.env.PUBLIC_URL + '/img/shopimg3.png'} alt="" />  
                    <h1>3단 근조화한 1호</h1>
                    <p>100,000</p>
                    <strong><small>20%</small> 80,000<span>원</span></strong>
                </Link>
            </ListContent>
        </WreathListWrapper>
    );
};

export default WreathList;