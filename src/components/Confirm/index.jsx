import React from 'react';
import {useDispatch} from 'react-redux';
import {SetConfirm} from '../../store/global';
import Popup from '../Popup';
import {
    ConfirmStyle,
    ManageMent,
    List,
    MangeMentTitle,
    ManageMentButton,
} from './styled';

const Confirm = (props) => {
    const Dispatch = useDispatch();
    const OnClose = (e) => {
        Dispatch(SetConfirm(0));
    }
    return (
        <ConfirmStyle>
            <Popup show={props.data && 1} onClose={OnClose} buttonType="primary" button={props.data.button}>
                <List>
                    <h1>{props.data.title}</h1>
                </List>
            </Popup>
        </ConfirmStyle>
    )
}
export default Confirm;