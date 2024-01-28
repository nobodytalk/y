import React, { useState, useRef, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import {SetLoading} from '../../../store/global';
import {Link, useParams} from 'react-router-dom';
import MainContainer from '../../../components/MainContainer';
import Header from '../../../components/Header';
import ButtonGroup from '../../../components/ButtonGroup';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import InputBind from '../../../components/InputBind';
import InputGroup from '../../../components/InputGroup';
import Label from '../../../components/Label';
import AgeConfirmPopup from './Popup/AgeConfirmPopup';
import ConfirmPopup from './Popup/ConfirmPopup';
import SearchPlace from './SearchPlace';
import Joi from 'joi-browser';
import DatetimePicker, { parseDate, formatDate, formatDateString, setLocale } from 'react-datetimepicker-syaku';
import locale from 'flatpickr/dist/l10n/ko';
import 'flatpickr/dist/flatpickr.min.css'
import AddMourner, {MournerInput} from './AddButton';
import {Obituary,
    ObituaryGetPost,
    ObituaryInsertPost,
    ObituaryUploadGalleryImages,
    ObituaryDeleteGalleryImage,
    ObituaryGetGallery
} from '../../../api/obituary';
import {Wrapper,
    InputBox,    
    Title,
    SubTitle,
    GallerySubTitle,
    ButtonStyle,
    Gallery,
    GalleryGrid,
    Card,
    AddButton,
    CloseButton,
    Count,
    PlusIcon,
    DateTimeWrapper,
    DateTimeValue,
    Counter,
    MemoTitle

} from './styled';


const Make = (props) => {
    const Dispatch = useDispatch();

    var today = new Date();
    var tomorrow = new Date(); 
    tomorrow.setDate(tomorrow.getDate() + 2);

    const date = today.getFullYear() + "-" + ("00" + (today.getMonth() + 1)).slice(-2) + "-" + ("00" + today.getDate()).slice(-2) + " " + ("00" + today.getHours()).slice(-2) + ":" + ("00" + today.getMinutes()).slice(-2) ;
    const dates = tomorrow.getFullYear() + "-" + ("00" + (tomorrow.getMonth() + 1)).slice(-2) + "-" + ("00" + tomorrow.getDate()).slice(-2) + " " + ("00" + tomorrow.getHours()).slice(-2) + ":" + ("00" + tomorrow.getMinutes()).slice(-2) ;

    const dateInt = date.replace(/[^0-9]/g,'');   // 문자열에서 숫자만 추출
    const datesInt = dates.replace(/[^0-9]/g,'');
   

    const a = today.getTime();
    const b = tomorrow.getTime();

    const params = useParams();
    const [obi_item, set_obi_item] = useState(0);

    const [post_gallery, set_post_gallery] = useState('');
    const [post_gallery_count, set_post_gallery_count] = useState(0);

    const [mourner, set_mourner] = useState(0);
    const [death_date, set_death_date] = useState({value: date, detetime: date});             // 임종 일시
    const [borne_in_date, set_borne_in_date] = useState({value: dates, datetime: date});    // 발인 일시
    const [borne_out_date, set_borne_out_date] = useState({value: dates, datetime: date});    // 발인 일시

    const [AgeConfirmPopup_isshow, show_AgeConfirmPopup] = useState(0);
    const [ConfirmPopup_isshow, show_ConfirmPopup] = useState(0);
    const [search_place, show_search_place] = useState(0);
    const [errorMsg, SetErrorMsg] = useState('');
    const [deceased, set_deceased] = useState('');
    const [age, set_age] = useState('');
    const [burial_plot, set_burial_plot] = useState('');
    const [funeral_ID, set_funeral_ID] = useState('');
    const [funeral_title, set_funeral_title] = useState('');
    const [funeral_home, set_funeral_home] = useState('');
    const [revise_obi, set_revise_obi] = useState('');
    const [textLength, set_textLength] = useState(0);
    const [select, set_select] = useState('');
    const [readonly, set_readonly] = useState('');
    const [memo, set_memo] = useState('');


    const showAgeConfirmPopup = (e) => {
        if(AgeConfirmPopup_isshow) {
            show_AgeConfirmPopup(0);
        } else {
            show_AgeConfirmPopup(1);
        }
    }

    const showConfirmPopup = (e) => {
        if(ConfirmPopup_isshow) {
            show_ConfirmPopup(0);
        } else {
            show_ConfirmPopup(1);
        }
    }

    const showSearchLayerPopup = (e) => {
        if(search_place) {
            show_search_place(0);
        } else {
            show_search_place(1);
        }
    }
    const resetTextLength = (e) => {
        set_textLength(e.target.value.length);
        set_memo(e.target.value);
    }

    const SelectMessage = (e) => {
        set_select(e.target.value);
        console.log(e.target.value);
        if(!(e.target.value)){
            set_readonly(0);
        } else {
            set_readonly(1);
        }
    }

    const Submit = (e) => {
        // console.log(mourner);
        const schema ={
            deceased: Joi.string()
                .required()
                .error(() => ({message: '고인의 성함을 입력해주세요.'})),
            age: Joi.string()
                .required()
                .error(() => ({message: '나이를 입력해주세요.'})),
            death_date: Joi.string()
                .required()
                .error(() => ({message: '임종일시를 입력해주세요.'})),
            borne_out_date: Joi.string()
                .required()
                .error(() => ({message: '발인일시를 입력해주세요.'})),
            borne_in_date: Joi.string()
                .required()
                .error(() => ({message: '입관일시를 입력해주세요.'})),
            burial_plot: Joi.string()
                .required()
                .error(() => ({message: '장지명을 입력해주세요.'})),
            funeral_ID: Joi.string()
                .required()
                .error(() => ({message: '장례식장명을 선택해주세요.'})),
            funeral_home: Joi.string()
                .required()
                .error(() => ({message: '빈소 선택해주세요.'})),
            mourner_name: Joi.string()
                .required()
                .error(() => ({message: '상주명을 입력해주세요.'})),
        }
        const {error, value} = Joi.validate({
            deceased: deceased,
            age: age,
            death_date: death_date.value,
            burial_plot: burial_plot,
            borne_out_date: borne_out_date.value,
            borne_in_date: borne_in_date.value,
            funeral_ID: funeral_ID,
            funeral_home: funeral_home,
            mourner_name: mourner[0] ? mourner[0].name : '' 
        }, schema);

        if(error){
            alert(error.details[0].message);
            console.log(error);
        } else { 
            ObituaryInsertPost ({
                obituary_ID: params.tmp_obituary_ID,
                deceased: deceased,
                age: age,
                death_date: death_date.value,
                borne_out_date: borne_out_date.value,
                borne_in_date: borne_in_date.value,
                burial_plot: burial_plot,
                funeral_ID: funeral_ID,
                funeral_home: funeral_home,
                mourner: mourner,
                memo: memo
            })
            .then((response) => {
                if(response.data.code == '200') {
                    window.location.href='/obituary/complete/'+params.tmp_obituary_ID;
                }
            })
            .catch((error) => console.log(error))
        }
    }

    const EditSubmit = (e) => {
        // console.log(mourner);
        const schema ={
            deceased: Joi.string()
                .required()
                .error(() => ({message: '고인의 성함을 입력해주세요.'})),
            age: Joi.string()
                .required()
                .error(() => ({message: '나이를 입력해주세요.'})),
            death_date: Joi.string()
                .required()
                .error(() => ({message: '임종일시를 입력해주세요.'})),
            borne_out_date: Joi.string()
                .required()
                .error(() => ({message: '발인일시를 입력해주세요.'})),
            borne_in_date: Joi.string()
                .required()
                .error(() => ({message: '입관일시를 입력해주세요.'})),
            burial_plot: Joi.string()
                .required()
                .error(() => ({message: '장지명을 입력해주세요.'})),
            funeral_ID: Joi.string()
                .required()
                .error(() => ({message: '장례식장명을 선택해주세요.'})),
            funeral_home: Joi.string()
                .required()
                .error(() => ({message: '빈소 선택해주세요.'})),
            mourner_name: Joi.string()
                .required()
                .error(() => ({message: '상주명을 입력해주세요.'})),
        }
        const {error, value} = Joi.validate({
            deceased: deceased,
            age: age,
            death_date: death_date.value,
            burial_plot: burial_plot,
            borne_out_date: borne_out_date.value,
            borne_in_date: borne_in_date.value,
            funeral_ID: funeral_ID,
            funeral_home: funeral_home,
            mourner_name: mourner[0] ? mourner[0].name : '' 
        }, schema);

        if(error){
            alert(error.details[0].message);
            console.log(error);
        } else { 
            ObituaryInsertPost ({
                obituary_ID: params.tmp_obituary_ID,
                deceased: deceased,
                age: age,
                death_date: death_date.value,
                borne_out_date: borne_out_date.value,
                borne_in_date: borne_in_date.value,
                burial_plot: burial_plot,
                funeral_ID: funeral_ID,
                funeral_home: funeral_home,
                mourner: mourner,
                momo: memo
            })
            .then((response) => {
                if(response.data.code == '200') {
                    alert('부고가 수정되었습니다.');
                    window.location.href='/obituary/list';
                }
            })
            .catch((error) => console.log(error))
        }
    }

    const UploadGallery = (e) => {
        const fd = new FormData();
        //FormData에 key, value 추가하기
        // console.log(e.target.files);
        Array.from(e.target.files).map((file, key) => {
            fd.append('image_array[]', file);
        })
        
        Dispatch(SetLoading(1));
        ObituaryUploadGalleryImages(fd, params.tmp_obituary_ID)
        .then((response) => {
            if(response.data.code == "200"){
                LoadGallery();
            }
        })
        .catch((error) => console.log(error))
    }

    const LoadGallery = () => {
        Dispatch(SetLoading(1));
        ObituaryGetGallery({
            obituary_ID: params.tmp_obituary_ID,
            posts_per_page: 20,
            page: 0
        })
        .then(response => {
            if(response.data.code == '200'){
                set_post_gallery(response.data.body.gallery);
                set_post_gallery_count(response.data.body.total);
                Dispatch(SetLoading(0));
            }
        })
        .catch(err => console.log(err))
    }

    const DeleteGalleryItem = (e) => {
        console.log(e.target.dataset.id);
        Dispatch(SetLoading(1));
        if(e.target.dataset.id) {
            ObituaryDeleteGalleryImage({
                attachment_ID: e.target.dataset.id
            })
            .then(response => {
                if(response.data.code == "200"){
                    LoadGallery();
                }
            })
            .catch(err => console.log(err));
        }
    }

    useEffect(() => {
        if(!post_gallery) {
            LoadGallery();
        }
        if(!obi_item) {
            ObituaryGetPost({ obituary_ID: params.tmp_obituary_ID })
            .then(response => {
                if(response.data.code == '200') {
                    set_obi_item(response.data.body);
                    set_mourner(response.data.body.mourner ? response.data.body.mourner : [{
                        relation: '',
                        name: '',
                        phone: ''
                    }]);
                    if(response.data.body.death_date)
                        set_death_date({value: response.data.body.death_date});
                    
                    if(response.data.body.borne_out_date)
                        set_borne_out_date({value:response.data.body.borne_out_date});

                    if(response.data.body.borne_in_date)
                        set_borne_in_date({value:response.data.body.borne_in_date});
                    set_deceased(response.data.body.deceased);
                    set_age(response.data.body.age);
                    set_burial_plot(response.data.body.burial_plot);
                    set_funeral_ID(response.data.body.funeral_ID);
                    set_funeral_title(response.data.body.funeral_name);
                    set_funeral_home(response.data.body.funeral_home);
                    set_memo(response.data.body.memo);
                }
            })
            .catch(err => console.log(err));
        }
    })

    return (
        <MainContainer>
            <Wrapper>
                <Header onHome title={"부고장 "+(obi_item ? (obi_item.deceased ? '수정' : '작성') : '작성')} onBack to="/" background="#fff"/>
                <InputBox>
                    <Title>
                        고인 정보
                    </Title>
                    <small>*표시는 필수</small>
                    <InputGroup bottom="5px">
                        <InputBind>
                            <Label>고인명</Label>
                            <Input type="textbox" name="deceased" placeholder="고인의 성함을 입력해주세요." value={deceased} onChange={(e) => set_deceased(e.target.value)}/>
                        </InputBind>
                        <InputBind>
                            <Label>나이</Label>
                            <Input type="number" placeholder="선택 입력" value={age} onChange={(e) => set_age(e.target.value)}/>
                        </InputBind>
                    </InputGroup>
                    <InputGroup bottom="5px">
                        <InputBind>
                            <Label>임종일시</Label>
                            <DateTimeWrapper>
                                <DateTimeValue>
                                    {death_date ? death_date.value: ''}
                                </DateTimeValue>
                                <DatetimePicker onChange={(datetime, value) => set_death_date({value: value, datetime: datetime})} 
                                    defaultDate={death_date.datetime}
                                    isDefaultValue
                                    type="datetime"/>
                            </DateTimeWrapper>
                        </InputBind>
                        <InputBind>
                            <Label>입관일시</Label>
                            <DateTimeWrapper>
                                <DateTimeValue>
                                   {borne_in_date ? borne_in_date.value: ''}
                                </DateTimeValue>
                                <DatetimePicker onChange={(datetime, value) => set_borne_in_date({value: value, datetime: datetime})} 
                                    defaultDate={borne_in_date.datetime}
                                    type="datetime"/>
                            </DateTimeWrapper>
                        </InputBind>
                        <InputBind>
                            <Label>발인일시</Label>
                            <DateTimeWrapper>
                                <DateTimeValue>
                                   {borne_out_date ? borne_out_date.value: ''}
                                </DateTimeValue>
                                <DatetimePicker onChange={(datetime, value) => set_borne_out_date({value: value, datetime: datetime})} 
                                    defaultDate={borne_out_date.datetime}
                                    type="datetime"/>
                            </DateTimeWrapper>
                        </InputBind>
                    </InputGroup>
                    <InputGroup>
                        <InputBind>
                            <Label>장지명</Label>
                            <Input type="textbox" placeholder="장지를 입력하세요." value={burial_plot} onChange={(e) => set_burial_plot(e.target.value)}/>
                        </InputBind>
                    </InputGroup>
                </InputBox>
                <InputBox>
                    <Title>장례식장</Title>
                    <InputGroup>
                        <InputBind>
                            <Label>장례식장명</Label>
                            <Input type="textbox" placeholder="선택 입력" value={funeral_title} onClick={showSearchLayerPopup} readOnly={'readonly'}/>
                        </InputBind>
                        <InputBind>
                            <Label>빈소</Label>
                            <Input type="textbox" placeholder="선택 입력" value={funeral_home} onChange={(e) => set_funeral_home(e.target.value)}/>
                        </InputBind>
                    </InputGroup>
                </InputBox>
                <InputBox>
                    <Title className="includeSub">상주정보</Title>
                    <SubTitle>-등록된 상주는 부의금서비스를 이용하실 수 있습니다.</SubTitle>
                    {mourner ? (<AddMourner mourner={mourner} set_mourner={set_mourner}/>) : ''}
                    
                </InputBox>
                <InputBox>
                    <Title className="includeSub">추모갤러리</Title>
                    <GallerySubTitle>
                        ∙고인의 행복했던 사진을 추모객들과 함께  볼 수 있는 공간 입니다.
                    </GallerySubTitle>
                    <GallerySubTitle>
                        ∙고인과 함께했던 잊지 못할 추억을 나눠보세요.
                    </GallerySubTitle>
                    <Gallery>
                        <GalleryGrid>
                            <input id="add" type="file" name="upload[]" onChange={UploadGallery} multiple/>
                            <AddButton for="add" className="addButton">
                                <Count>
                                    <span>{post_gallery_count}</span> / 10
                                </Count>
                            </AddButton>
                        </GalleryGrid>
                        {post_gallery ? post_gallery.map((gallery_item, key) => (
                            <GalleryGrid>
                                <Card url={gallery_item.thumb_image_url}>
                                    <CloseButton onClick={DeleteGalleryItem} data-id={gallery_item.attachment_ID}/>
                                </Card>
                            </GalleryGrid>
                        )) : ''}
                    </Gallery>
                </InputBox>
                <InputBox>
                    <MemoTitle>
                        메모
                    </MemoTitle>
                    <InputGroup bottom="30px">
                        <InputBind>
                            <Input type='textarea' value={memo} onChange={resetTextLength} width="100%" height="180px" padding="16px 0 32px 0" placeholder='메모를 입력해주세요.' maxLength="200" readOnly={readonly}/>
                            <Counter>{textLength} / 200</Counter>
                        </InputBind>
                    </InputGroup>
                </InputBox>
            </Wrapper>
            <ButtonGroup position="bottom">
                <Button type="primary" onClick={(obi_item ? (obi_item.deceased ? EditSubmit : Submit) : Submit)}>
                    {(obi_item ? (obi_item.deceased ? '수정완료' : '만들기') : '만들기')}
                </Button>
            </ButtonGroup>
            <SearchPlace show={search_place} onClose={showSearchLayerPopup} set_funeral_title={set_funeral_title} set_funeral_ID={set_funeral_ID} />
            <AgeConfirmPopup show={AgeConfirmPopup_isshow} onClose={showAgeConfirmPopup} />
            <ConfirmPopup show={ConfirmPopup_isshow} onClose={showConfirmPopup} />
        </MainContainer>
    );
};

export default Make;