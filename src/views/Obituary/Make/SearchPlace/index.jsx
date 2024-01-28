import React, { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../../store/global';
import Header from '../../../../components/Header';
import Input from '../../../../components/Input';
import MainContainer from '../../../../components/MainContainer';
import {FuneralGetPosts} from '../../../../api/funeral';
import {Wrapper,
    Container,
    SearchBar,
    STT,
    SearchButton,
    SearchResult,
    List,
    ListRow,
    NullPage
} from './styled';



const SearchPlace = (props) => {
    const Dispatch = useDispatch();
    
    const [keyword_input, set_keyword_input] = useState('')
    const [funeral_list, set_funeral_list] = useState('');
    const [funeral_count, set_funeral_count] = useState(0);
    const [funeral_page, set_funeral_page] = useState(0);

    const DoSearch = (e) => {
        if(!keyword_input) {
            alert('검색어를 입력해주세요.');
        } else {
            Dispatch(SetLoading(1));
            FuneralGetPosts({
                keyword: keyword_input,
                posts_per_page: 50,
                page: 0
            })
            .then((response) => {
                if(response.data.code == "200") {
                    set_funeral_list(response.data.body.posts);
                    set_funeral_count(response.data.body.count);
                    console.log(response.data.body.posts);
                } else {
                    set_funeral_list('');
                    set_funeral_count(0);
                }
                Dispatch(SetLoading(0));
            })
            .catch((error) => console.log(error))
        }
    }
    const DoSelect = e => {
        props.set_funeral_ID(e.currentTarget.dataset.id);
        props.set_funeral_title(e.currentTarget.dataset.title);
        props.onClose(e);
    }
    useEffect(() => {
    })

    return (
        <Wrapper show={props.show}>
            <MainContainer>
                {props.show && (<Header title='장례식장 검색' onBack onClick={props.onClose} />)}
                    <Container>
                        <SearchBar>
                            {/* <STT><img src={process.env.PUBLIC_URL + '/icon-mic.svg'} /></STT> */}
                            <input type="textbox" onChange={(e)=>set_keyword_input(e.target.value)} onKeyPress={e => e.key === 'Enter' && DoSearch(e) } placeholder="장례식장을 검색하세요."/>
                            <SearchButton onClick={DoSearch}><img src={process.env.PUBLIC_URL + '/icon-search.svg'} /></SearchButton>
                        </SearchBar>
                    </Container>
                    <SearchResult>
                        총 <strong>{funeral_count}건</strong>의 검색결과가  있습니다.
                    </SearchResult>
                    <List>
                        {funeral_list ? funeral_list.map((item, key) => {
                            return (
                                <ListRow onClick={DoSelect} data-id={item.funeral_ID} data-title={item.post_title}>
                                    <strong>
                                        {item.post_title}
                                    </strong>
                                    <p>
                                        {item.address}
                                    </p>
                                </ListRow>
                            )
                        }) : 
                            <NullPage>
                                <img src={process.env.PUBLIC_URL + '/exclamation.png'} />
                                <p>조회 결과가 없습니다.</p>
                            </NullPage>
                        }
                    </List>
            </MainContainer>
        </Wrapper>
    );
};

export default SearchPlace;