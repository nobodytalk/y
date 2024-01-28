import React,{ useState, useEffect } from 'react';
import HomeHeader from './components/HomeHeader';
import HomeSlider from './components/HomeSlider';
import HomeContent from './components/HomeContent';
import HomeFooter from './components/HomeFooter';
import {ObituaryGetTotal} from '../../api/obituary';
import {HomeWrapper,
        HomeTitle,
        } from './styled';
        
const Home = () => {

    const [obi_total, set_obi_total] = useState("");
    useEffect(() => {
        if(!obi_total) {
            ObituaryGetTotal()
            .then(response => {
                if(response.data.code == 200){
                    set_obi_total(response.data.body.count);
                } 
            })
            .catch(error => console.log(error));
        }
    });

    return (
        <HomeWrapper>
            <HomeHeader />
            <HomeTitle>
                <h1><small>예</small>를 다하여</h1>
                <h1><small>품격</small>을 높여드립니다.</h1>
                <p><span>{obi_total ? obi_total : ''}건</span>의 부고를 알려드립니다.</p>
            </HomeTitle>
            <HomeSlider />
            <HomeContent />
            <HomeFooter />
        </HomeWrapper>
    );
};

export default Home;