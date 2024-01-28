import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../store/global';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import {ObituaryGetPosts} from '../../../api/obituary';
import ImprintPopup from '../../Obituary/List/Popup/Imprint/Imprint'
import {
    Wrapper,
    Container,
    SearchBar,
    STT,
    SearchButton,
    SearchResult,
    List,
    ListRow,
    NullPage
} from '../styled';

const SearchPlace = () => {
    const Dispatch = useDispatch();

    const [search_input, set_search_input] = useState('');
    const [obi_search, set_obi_search] = useState(0);
    const [obi_count, set_obi_count] = useState(0);

    var today = new Date();
    const date = today.getFullYear() + ("00" + (today.getMonth() + 1)).slice(-2) + ("00" + today.getDate()).slice(-2) + ("00" + today.getHours()).slice(-2) + ("00" + today.getMinutes()).slice(-2) ;

    useEffect(() => {
        
    })

    const DoSearch = () => {
        Dispatch(SetLoading(1));
        ObituaryGetPosts({
            keyword: search_input,
            author_ID: 0
        })
        .then((response) => {
            if(response.data.code == "200") {
                set_obi_search(response.data.body.posts);
                set_obi_count(response.data.body.count);

            } else{
                set_obi_search('');
                set_obi_count('0');
            }

            Dispatch(SetLoading(0));
        })
        .catch((error) => console.log(error))
    }

    const [Imprint_isshow,show_Imprint] = useState(0);
    const showImprint = (e) => {
        e.preventDefault();
        if(Imprint_isshow) {
            show_Imprint(0);
        } else {
            show_Imprint(e.target.dataset.id);
        }
    }
    //onClick={(e) => window.location='/obituary/'+item.ID}

    return (
        <MainContainer>
            <Wrapper>
                <Header title='부고 검색' onBack to='/#/' />
                <Container>
                    <SearchBar>
                        {/* <STT><img src={process.env.PUBLIC_URL + '/icon-mic.svg'} /></STT> */}
                        <input type="textbox" onChange={(e) => set_search_input(e.target.value)} onKeyPress={e => e.key === 'Enter' && DoSearch(e) } placeholder="부고를 검색하세요."/>
                        <SearchButton onClick={DoSearch}><img src={process.env.PUBLIC_URL + '/icon-search.svg'} /></SearchButton>
                    </SearchBar>
                </Container>
                <SearchResult>
                    총 <strong>{obi_count}건</strong>의 검색결과가 있습니다.
                </SearchResult>
                <List>
                    {obi_search ? 
                        <table>
                            <thead>
                                <tr>
                                    <th>상주명</th>
                                    <th>고인명</th>
                                    <th>장례식장</th>
                                    <th>호실</th>
                                    <th>발인</th>
                                    <th>비고</th>
                                </tr>
                            </thead>
                        </table>
                    : ''}
                    {obi_search ? obi_search.map((item, key) => {
                        return (
                            <ListRow>
                                {/* {(item.borne_out_date ? (item.borne_out_date.replace(/[^0-9]/g,'')) : 'ㅁ') + ' > ' + date } */}
                                <table>
                                {/* <tbody data-id={item.ID} onClick={item.borne_out_date && item.borne_out_date.replace(/[^0-9]/g,'') > date ? (e) => window.location='/obituary/'+item.ID : showImprint}> */}
                                    <tbody data-id={item.ID} onClick={(e) => window.location='/obituary/'+item.ID}>
                                        <tr>
                                            <td>{item.mourner ? item.mourner : ''}</td>
                                            <td>{item.deceased ? item.deceased : ''}</td>
                                            <td>{item.funeral_name ? item.funeral_name : ''}</td>
                                            <td>{item.funeral_home ? item.funeral_home : ''}</td>
                                            <td>{item.borne_out_date ? item.borne_out_date.slice(-11, 10) : ''}</td>
                                            <td>{item.borne_out_date && item.borne_out_date.replace(/[^0-9]/g,'') > date ? 
                                            '상중' : '발인'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                {/* <ImprintPopup show={Imprint_isshow == item.ID} onClose={showImprint} potato={(e) => window.location='/obituary/'+item.ID}/> */}
                            </ListRow>
                        )
                    }) : 
                        <NullPage>
                            <img src={process.env.PUBLIC_URL + '/exclamation.png'} />
                            <p>조회 결과가 없습니다.</p>
                        </NullPage>
                    }
                </List>
            </Wrapper>
        </MainContainer>
    );
};

export default SearchPlace;