import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { SetLoading } from '../../../store/global';
import Header from '../../../components/Header';
import Button from '../../../components/Button';
import ButtonGroup from '../../../components/ButtonGroup';
import MainContainer from '../../../components/MainContainer';
import { Link, useParams, useHistory } from 'react-router-dom';
import { Row, Col } from '../../../components/Grid';
import Slider from 'react-slick';
import BusPopup from './Popup/BusPopup';
import ParkingPopup from './Popup/ParkingPopup';
import NevPopup from './Popup/NevPopup';
import SharePopup from './Popup/SharePopup';
import IndemNullPopup from './Popup/IndemNullPopup';
import { produce } from 'immer';
import {
	DetailsTitle,
	DetailsWrapper,
	DetailsContent,
	MapWrapper,
	MapView,
	MapTitle,
	Map,
	MapContent,
	MapSubContent,
	GalleryWrapper,
	Gallery,
	GalleryTitle,
	GalleryContent,
	GalleryList,
	GallerySlickWrapper,
	Card,
	SlickWrap,
	settings,
	MessageWrapper,
	Message,
	MessageTitle,
	MessageContent,
	MessageSubContent,
	UserWrapper,
	UserTitle,
	UserContent,
	DetailsFooter,
	FooterButton,
	MapLocation,
	GalleryListWrapper,
	Hidden,
	ObiLogo,
	MemoWrapper,
	MemoTitle,
	MemoNotice,
	Wrapeer,
} from './styled';

import {
	ObituaryGetPost,
	ObituaryGetGallery,
	ObituaryGetComments,
} from '../../../api/obituary';
import { FuneralGetPost } from '../../../api/funeral';
import { GetMe } from '../../../api/user';
import KakaoMap from './components/Map/KakaoMap';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

// const SlickWrap = styled.div`
//     .slick-slide{
//         display: inline-block;
//     }
// `;

const Details = (props) => {
	const Dispatch = useDispatch();
	const History = useHistory();
	const slide_obj = useRef(0);
	const copy_input = useRef(0);
	const params = useParams();
	const [gallery, set_gallery] = useState(0);
	const [gallery_total, set_gallery_total] = useState(0);
	const [obi_item, set_obi_item] = useState(0);
	const [obi_mourner, set_obi_mourner] = useState(0);
	const [obi_mourners, set_obi_mourners] = useState(0);

	const [funeral_item, set_funeral_item] = useState(0);
	const [funeral_details, set_funeral_details] = useState(0);
	const [funeral_parking, set_funeral_parking] = useState(0);
	const [comments, set_comments] = useState('');
	const [total, set_total] = useState(0);

	const main_slide_obj = useRef(0);
	const [slidePlay, setSlidePlay] = useState(false);
	const [slickSettings, setSlickSettings] = useState({
		dots: false,
		infinite: true,
		fade: true,
		speed: 1000,
		autoplaySpeed: 3500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false, // 기본 꺼짐
		arrows: false,
		responsive: [
			{
				breakpoint: 770,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	const doSlideShow = (e) => {
		setSlidePlay(true);

		const newSettings = produce(slickSettings, (draft) => {
			draft.autoplay = true;
		});
		setSlickSettings(newSettings);

		main_slide_obj.current.slickPlay();
	};

	const [current_obi_item, set_current_obi_item] = useState(0);

	var today = new Date();
	const date =
		today.getFullYear() +
		('00' + (today.getMonth() + 1)).slice(-2) +
		('00' + today.getDate()).slice(-2) +
		('00' + today.getHours()).slice(-2) +
		('00' + today.getMinutes()).slice(-2);

	const [IndemnityPopup_isshow, show_IndemnityPopup] = useState(0);
	const showIndemnityPopup = (e) => {
		e.preventDefault();
		if (IndemnityPopup_isshow) {
			show_IndemnityPopup(0);
		} else {
			show_IndemnityPopup(1);
		}
	};

	const [BusPopup_isshow, show_BusPopup] = useState(0);
	const showBusPopup = (e) => {
		e.preventDefault();
		if (BusPopup_isshow) {
			show_BusPopup(0);
		} else {
			show_BusPopup(1);
		}
	};

	const [ParkingPopup_isshow, show_ParkingPopup] = useState(0);
	const showParkingPopup = (e) => {
		e.preventDefault();
		if (ParkingPopup_isshow) {
			show_ParkingPopup(0);
		} else {
			show_ParkingPopup(1);
		}
	};

	const [NevPopup_isshow, show_NevPopup] = useState(0);
	const showNevPopup = (e) => {
		e.preventDefault();
		if (NevPopup_isshow) {
			show_NevPopup(0);
		} else {
			show_NevPopup(1);
		}
	};

	const [SharePopup_isshow, show_SharePopup] = useState(0);
	const showSharePopup = (e) => {
		e.preventDefault();
		if (e.target.dataset.id) {
			if (SharePopup_isshow == e.target.dataset.id) {
				show_SharePopup(0);
			} else {
				show_SharePopup(e.target.dataset.id);
			}
		} else {
			show_SharePopup(0);
		}
	};

	const [GallerySlick, show_GallerySlick] = useState(0);
	const ToggleGallery = (e) => {
		if (!GallerySlick) {
			show_GallerySlick(1);
			if (e.currentTarget.dataset.initial) {
				slide_obj.current.slickGoTo(e.currentTarget.dataset.initial);
			}
		} else {
			show_GallerySlick(0);
		}
	};

	const [IndemNullPopup_isshow, show_IndemNullPopup] = useState(0);
	const showIndemNullPopup = (e) => {
		e.preventDefault();
		if (IndemNullPopup_isshow) {
			show_IndemNullPopup(0);
		} else {
			show_IndemNullPopup(1);
		}
	};

	const CopyAccount = (e) => {
		copy_input.current.select();
		document.execCommand('copy');
		e.target.focus();
		alert('주소가 복사가 완료되었습니다.');
	};

	const [me_item, set_me_item] = useState('');

	useEffect(() => {
		if (!me_item) {
			GetMe().then((response) => {
				if (response.data.code == '200') {
					set_me_item(response.data.body);
				}
			});
		}
	});

	useEffect(() => {
		if (params.obituary_ID != current_obi_item) {
			Dispatch(SetLoading(1));
			ObituaryGetPost({
				obituary_ID: params.obituary_ID,
			})
				.then((response) => {
					if (response.data.code == '200') {
						set_obi_item(response.data.body);
						set_obi_mourner(response.data.body.mourner);
						set_current_obi_item(response.data.body.ID);
						if (response.data.body.is_borne_out) {
							alert('해당 부고는 발인되었습니다.');
						}
						FuneralGetPost({
							funeral_ID: response.data.body.funeral_ID,
						})
							.then((response) => {
								if (response.data.code == '200') {
									set_funeral_item(response.data.body);
									set_funeral_details(response.data.body.details);
									set_funeral_parking(response.data.body.details.parking);
									Dispatch(SetLoading(0));
								}
							})
							.catch((error) => console.log(error));
					}
				})
				.catch((error) => console.log(error));
		}

		if (!gallery) {
			ObituaryGetGallery({
				obituary_ID: params.obituary_ID,
				posts_per_page: 50,
				page: 0,
			})
				.then((response) => {
					if (response.data.code == '200') {
						set_gallery(response.data.body.gallery);
						set_gallery_total(response.data.body);
						console.log(response.data.body.gallery);
					}
				})
				.catch((error) => console.log(error));
		}
		if (!comments) {
			ObituaryGetComments({
				obituary_ID: params.obituary_ID,
			})
				.then((response) => {
					if (response.status == 200) {
						set_comments(response.data.body.comments);
						set_total(response.data.body);
						console.log(response.data.body);
					}
				})
				.catch((err) => console.log(err));
		}
	}, [current_obi_item]);

	const obi_relation = obi_mourner
		? obi_mourner.map((item, key) => item.relation)
		: '';
	let reduce_relation = obi_relation
		? obi_relation.reduce((a, b) => {
				if (a.indexOf(b) < 0) a.push(b);
				return a;
		  }, [])
		: '';

	const isfront = window.location.pathname.slice(1, 6);
	const ismypage = window.location.pathname.slice(1, 7);

	return (
		<>
			<Helmet>
				<title>예품 부고장</title>
				<meta property="og:title" content="예품 부고장" />
				<meta
					property="og:url"
					content={'https://app.yepum.co.kr/obituary/' + params.obituary_ID}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:image"
					content="https://app.yepum.co.kr/obituary_og_image_.png"
				/>
				<meta
					property="og:description"
					content="상주와 장례정보를 확인해세요."
				/>
			</Helmet>
			<MainContainer>
				<Wrapeer>
					{/* <Header hamburger title={funeral_item.post_title ? funeral_item.post_title : ''}  onBack onClick={()=> History.goBack()} background="#24243a" color="white" border="rgba(242, 242, 242, 0.1)"/> */}
					{/* <Header onHome={isfront == 'front' ? 0 : 1} onBack={isfront == 'front' ? 0 : 1} title={funeral_item.post_title ? funeral_item.post_title : ''} to={me_item.obituary_count ? "/obituary/list/" : '/'} background="#24243a" color="white" border="rgba(242, 242, 242, 0.1)"/> */}
					<Header
						obiClassName="obituary-header"
						type="secondary"
						onHome={isfront == 'front' ? 0 : 1}
						onBack={isfront == 'front' ? 0 : 1}
						title={funeral_item.post_title ? funeral_item.post_title : ''}
						to={
							ismypage == 'mypage'
								? me_item.obituary_count
									? '/obituary/list/'
									: '/'
								: '/search'
						}
						background="#24243a"
						color="white"
						border="rgba(242, 242, 242, 0.1)"
					/>
					<DetailsTitle>
						<img
							className="aa"
							src={process.env.PUBLIC_URL + '/logo.png'}
							alt=""
						/>
						<h1>
							故<strong>{obi_item.deceased ? obi_item.deceased : ''}</strong>
							님의 <br />
							추모관
						</h1>
						<p>
							<span>향년 {obi_item.age ? obi_item.age + '세' : ''}</span>
							<br />
							{obi_item.death_date_text
								? obi_item.death_date_text + ' 별세'
								: ''}
						</p>
					</DetailsTitle>
					{gallery_total.total ? (
						<GalleryWrapper>
							<Gallery>
								{/* <GalleryTitle>
                                <h1>예품 추모관</h1>
                            </GalleryTitle> */}
								<GalleryContent total={gallery_total.total - 3}>
									<GalleryListWrapper>
										<SlickWrap>
											<Slider
												{...slickSettings}
												ref={(slider) => (main_slide_obj.current = slider)}
											>
												{gallery
													? gallery.map((item, key) => {
															return (
																<GalleryList
																	url={item.image_url ? item.image_url : ''}
																	onClick={ToggleGallery}
																	data-initial={key}
																/>
															);
													  })
													: ''}
											</Slider>
										</SlickWrap>
										{!slidePlay ? (
											<a href="javascript:;" onClick={doSlideShow} class="play">
												<i></i>
											</a>
										) : (
											''
										)}
									</GalleryListWrapper>
								</GalleryContent>
								{/*                             
                            <GalleryContent total={gallery_total.total - 3}>
                                <GalleryListWrapper>
                                    {gallery ? gallery.slice(0,3).map((item, key) => {
                                        return (
                                                <GalleryList url={item.thumb_image_url ? item.thumb_image_url : ''} onClick={ToggleGallery} data-initial={key}/>
                                        )
                                    }) : ''}
                                </GalleryListWrapper>
                            </GalleryContent> */}
							</Gallery>
						</GalleryWrapper>
					) : (
						''
					)}
					<DetailsWrapper>
						<DetailsContent>
							<h2>상주정보</h2>
							{reduce_relation
								? reduce_relation.map((item, key) => {
										var com = 0;
										return (
											<Row>
												<Col flex="1">
													<p>{item ? item : ''}</p>
												</Col>
												<Col flex="3">
													<span className="mourner">
														{item
															? obi_mourner.map((name_item, key) => {
																	return item == name_item.relation ? (
																		<>
																			{(com++ ? ' , ' : '') + name_item.name}
																			{name_item.phone ? (
																				<a href={'tel:' + name_item.phone}>
																					<i></i>
																				</a>
																			) : null}
																		</>
																	) : (
																		''
																	);
															  })
															: ''}
													</span>
												</Col>
											</Row>
										);
								  })
								: ''}
							<div className="border"></div>
							<Row>
								<Col flex="1">
									<p>빈소</p>
								</Col>
								<Col flex="3">
									<span>
										{obi_item.funeral_home ? obi_item.funeral_home : ''}
									</span>
								</Col>
							</Row>
							<Row>
								<Col flex="1">
									<p>입관</p>
								</Col>
								<Col flex="3">
									<span>
										{obi_item.borne_in_date ? obi_item.borne_in_date_text : ''}
									</span>
								</Col>
							</Row>
							<Row>
								<Col flex="1">
									<p>발인</p>
								</Col>
								<Col flex="3">
									<span>
										{obi_item.borne_out_date
											? obi_item.borne_out_date_text
											: ''}
									</span>
								</Col>
							</Row>
							<Row>
								<Col flex="1">
									<p>장지</p>
								</Col>
								<Col flex="3">
									<span>
										{obi_item.burial_plot ? obi_item.burial_plot : ''}
									</span>
								</Col>
							</Row>
						</DetailsContent>
					</DetailsWrapper>
					<MapWrapper>
						<MapView>
							<MapTitle>
								<h1>오시는길</h1>
							</MapTitle>
							<MapLocation>
								<a
									target="_blank"
									href={
										'https://map.kakao.com/link/to/' +
										encodeURI(funeral_item.post_title) +
										',' +
										funeral_item.y +
										',' +
										funeral_item.x
									}
								></a>
								{funeral_item.y ? (
									<KakaoMap
										lat={funeral_item.y ? funeral_item.y : ''}
										lng={funeral_item.x ? funeral_item.x : ''}
									/>
								) : (
									''
								)}
							</MapLocation>
							<MapContent>
								<p onClick={CopyAccount}>
									<img
										src={process.env.PUBLIC_URL + '/img/detailsimg1.png'}
										alt=""
									/>
									{funeral_item.address ? funeral_item.address : ''}
									{funeral_item.address ? (
										<Hidden>
											<input
												type="text"
												ref={copy_input}
												name="copy_account"
												value={funeral_item.address}
											/>
										</Hidden>
									) : (
										''
									)}
								</p>
							</MapContent>
							<MapSubContent>
								<div onClick={showBusPopup}>
									<img
										src={process.env.PUBLIC_URL + '/img/detailsimg2.png'}
										alt=""
									/>
									<p>대중교통</p>
								</div>
								<div onClick={showParkingPopup}>
									<img
										src={process.env.PUBLIC_URL + '/img/detailsimg3.png'}
										alt=""
									/>
									<p>주차안내</p>
								</div>
								<div onClick={showNevPopup}>
									<img
										src={process.env.PUBLIC_URL + '/img/detailsimg4.png'}
										alt=""
									/>
									<p>네비게이션</p>
								</div>
							</MapSubContent>
						</MapView>
					</MapWrapper>
					<MessageWrapper>
						<Message>
							<MessageTitle>
								<h1>조문메시지</h1>{' '}
								<span>{total.total ? total.total : '0'}</span>
								<Link
									to={
										(isfront == 'front' ? '/front' : '') +
										'/obituary/' +
										params.obituary_ID +
										'/messagewrite/'
									}
								>
									<img
										src={process.env.PUBLIC_URL + '/img/detailsimg5.png'}
										alt=""
									/>
								</Link>
							</MessageTitle>
							{comments ? (
								comments.slice(0, 3).map((item, key) => {
									return (
										<MessageContent>
											<div>
												<h2>
													{item.comment_author_name
														? item.comment_author_name.replace(
																'(주)예품 임직원',
																'예품 임직원'
														  )
														: ''}
												</h2>
												<span>
													{item.comment_date ? item.comment_date : ''}
												</span>
												{/* <h2>{item.comment_author_name ? item.comment_author_name : ''}</h2><span>{item.comment_date ? item.comment_date : ''}</span> */}
												<p>{item.content ? item.content : ''}</p>
											</div>
										</MessageContent>
									);
								})
							) : (
								<p>조문메시지가 아직 없습니다.</p>
							)}
							{comments ? (
								<Link
									to={
										(isfront == 'front' ? '/front' : '') +
										'/obituary/' +
										params.obituary_ID +
										'/messagelist/'
									}
								>
									<MessageSubContent>
										<h3>조문 메시지 모두 보기</h3>
									</MessageSubContent>
								</Link>
							) : (
								''
							)}
						</Message>
					</MessageWrapper>
					{obi_item.flower_order_list && obi_item.flower_order_list.length ? (
						<UserWrapper>
							<UserTitle>
								<h1>근조화환 보내신분</h1>
							</UserTitle>
							<UserContent>
								{obi_item.flower_order_list.map((order_item) => (
									<div>
										<img
											src={
												order_item.profile_image ? order_item.profile_image : ''
											}
											alt=""
										/>
										<h2>
											{order_item.display_name ? order_item.display_name : ''}
										</h2>
									</div>
								))}
							</UserContent>
						</UserWrapper>
					) : (
						''
					)}
					{obi_item.memo ? (
						<MemoWrapper>
							<MemoTitle>
								<h1>남기신 메모</h1>
							</MemoTitle>
							<MemoNotice>{obi_item.memo}</MemoNotice>
						</MemoWrapper>
					) : (
						''
					)}
					<DetailsFooter>
						{obi_item ? (
							!obi_item.is_borne_out ? (
								<FooterButton>
									<ButtonGroup>
										<Button
											type="secondary"
											size="medium"
											width="31.33%"
											borderColor="#d2d2d2"
											bgColor="#fff"
											borderRadius="6px"
											onClick={
												obi_item.indemnity_count
													? (e) =>
															(window.location.href =
																(isfront == 'front' ? '/front' : '') +
																'/obituary/' +
																params.obituary_ID +
																'/indemnity')
													: showIndemNullPopup
											}
										>
											부의금
										</Button>
										<Button
											type="secondary"
											size="medium"
											width="31.33%"
											borderColor="#d2d2d2"
											bgColor="#fff"
											borderRadius="6px"
											to={
												(isfront == 'front' ? '/front' : '') +
												'/shop/obituary/' +
												params.obituary_ID
											}
										>
											화환보내기
										</Button>
										<Button
											onClick={showSharePopup}
											data_id={obi_item.ID}
											size="medium"
											width="31.33%"
											borderColor="#d2d2d2"
											bgColor="#fff"
											borderRadius="6px"
										>
											부고알리기
										</Button>
									</ButtonGroup>
								</FooterButton>
							) : (
								''
							)
						) : (
							''
						)}
					</DetailsFooter>
					<GallerySlickWrapper isopen={GallerySlick}>
						{GallerySlick && (
							<Header
								onBack
								onClick={ToggleGallery}
								color="#fff"
								title="예품 추모관"
								background="#000"
								border="rgba(242, 242, 242, 0.1)"
							/>
						)}
						<SlickWrap>
							<Slider
								{...settings}
								ref={(slider) => (slide_obj.current = slider)}
							>
								{gallery
									? gallery.map((item, key) => (
											<Card url={item.image_url ? item.image_url : ''} />
									  ))
									: ''}
							</Slider>
						</SlickWrap>
					</GallerySlickWrapper>
					<BusPopup
						details={funeral_details}
						show={BusPopup_isshow}
						onClose={showBusPopup}
						items={funeral_item}
						items_detail={funeral_details}
					/>
					<ParkingPopup
						show={ParkingPopup_isshow}
						onClose={showParkingPopup}
						items={funeral_item}
						items_detail={funeral_details}
						items_parking={funeral_parking}
					/>
					<NevPopup
						show={NevPopup_isshow}
						onClose={showNevPopup}
						items={funeral_item}
						items_detail={funeral_details}
					/>
					<SharePopup show={SharePopup_isshow} onClose={showSharePopup} />
					<IndemNullPopup
						show={IndemNullPopup_isshow}
						onClose={showIndemNullPopup}
					/>
				</Wrapeer>
			</MainContainer>
		</>
	);
};

export default Details;
