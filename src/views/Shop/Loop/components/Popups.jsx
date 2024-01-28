import Popup from '../../../../components/Popup';
import styled from 'styled-components';

const ManageMent = styled.div`
    /* h1{
        border-bottom: 1px solid #f2f2f2;
        margin-bottom: -14px;
        padding-bottom: 14px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: bold;
        line-height: 1.2;
        color: #110000;
        text-align: center;
    } */
    padding: 30px 15px 5px 15px;
    img{
        width: 52px;
        height: auto;
    }
    h1{
        margin-top: 17px;
        font-family: "NotoSansKR";
        font-size: 18px;
        font-weight: bold;
        line-height: 1.2;
        text-align: center;
        color: #111111;
    }
    p{
        margin-top: 15px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: 1.5;
        text-align: center;
        color: #8c8c8c;
    }
    span{
        display: block;
        margin-top: 13px;
        font-family: "NotoSansKR";
        font-size: 15px;
        font-weight: normal;
        line-height: 1.2;
        text-align: center;
        color: #8c8c8c;
    }
`;

export const Br = styled.div`
    @media(max-width: 355px){
        display: block;
    }
    display: none;
`;

export const FuneralAlert = (props) => {
    const isfront = window.location.pathname.slice(1,6);
    const button = [
        {
            title: '닫기',            //default '취소'
            width: '30%',            //default '50%'
            onClick: props.onClose
            // bgColor: '#fff',
        },
        {
            title: '장례식장 선택',          //default '확인' 
            to: ((isfront == 'front' ? '/front' : '')+'/shop/funeral/search/' + props.product_ID),
            width: '70%',                 //default '50%'
            // bgColor: '#fff',
            // color: '#111;'
        }
    ]
    return (
        <>
            <Popup padding="16px 0px" show={props.show} onClose={props.onClose} buttonType="primary"  button={button}>
                <ManageMent>
                    <img src={process.env.PUBLIC_URL + '/img/contentimg1.png'} alt="" />
                    <h1>
                        먼저 장례식장을 선택해주세요
                    </h1>
                    <p>선택하신 장례식장으로 화환을<Br/>보내드립니다.</p>
                    {/* <span>※계좌인증 (40원) + 시스템유지보수</span> */}
                </ManageMent>
            </Popup>
        </>
    )
} // 부고 관라 삭제 / 수정 //