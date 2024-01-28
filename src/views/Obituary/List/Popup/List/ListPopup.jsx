import React from 'react';
import ButtonGroup from '../../../../../components/ButtonGroup';
import Popup from '../../../../../components/Popup';
import ButtonGrounp from '../../../../../components/ButtonGroup';
import Button from '../../../../../components/Button';

import {
    ManageMent,
    List,
    MangeMentTitle,
    ManageMentButton,
} from './styled';

export const ListPopup = (props) => {
    return (
        <>
            <Popup position="bottom" padding="16px 0px" show={props.show} onClose={props.onClose} onCloseButton buttonType >
                <ManageMent>
                    <MangeMentTitle>
                        <h1>부고관리</h1>
                    </MangeMentTitle>
                    <ManageMentButton>
                        <ButtonGrounp>
                            <Button type="default" width="50%" bgColor="#FFF">
                                삭제
                            </Button>
                            <Button type="default" width="50%" bgColor="#fff" to={"/obituary/make/"+props.show}>
                                수정
                            </Button>
                        </ButtonGrounp>
                    </ManageMentButton>
                </ManageMent>
            </Popup>
        </>
    )
} // 부고 관라 삭제 / 수정 //

export const ListDeletePopup = (props) => {
    const button = [
        {
            title: '취소',            //default '취소'
            onClick: props.onClose,
            width: '30%',            //default '50%'
        },
        {
            title: '삭제',          //default '확인' 
            width: '70%'                   //default '50%'
        }
    ]
    return (
        <>
            <Popup show={props.show} onClose={props.onClose}>
                <List>
                    <h1>부고를 삭제하시겠습니까?</h1>
                </List>
                <ButtonGroup>
                    <Button onClick={props.onClick}>취소</Button>
                    <Button onClick={props.onClick}>삭제</Button>
                </ButtonGroup>
            </Popup>
        </>
    )
} // 부고 삭제 //

export const DeletePopup = (props) => {
    return (
        <>
            <Popup show={props.show} onClose={props.onClose} buttonType="default">
                <List>
                    <h1>부고가 삭제 되었습니다.</h1>
                </List>
            </Popup>
        </>
    )
} // 삭제 완료 //

export const ListUpdatePopup = (props) => {
    const button = [
        {
            title: '취소',            //default '취소'
            width: '30%',            //default '50%'
        },
        {
            title: '수정',          //default '확인' 
            width: '70%'                   //default '50%'
        }
    ]
    return (
        <>
            <Popup show={props.show} onClose={props.onClose} buttonType="primary" button={button}>
                <List>
                    <h1>부고를 수정하시겠습니까?</h1>
                </List>
            </Popup>
        </>
    )
} // 부고 수정 //

export const UpdatePopup = (props) => {
    return (
        <>
            <Popup show={props.show} onClose={props.onClose} buttonType="default">
                <List>
                    <h1>부고가 삭제 되었습니다.</h1>
                </List>
            </Popup>
        </>
    )
} // 수정 완료 //