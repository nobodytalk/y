import React, {useState, useEffect} from 'react';
import Popup from '../../../../components/Popup';
import {
    ListWrapper,
    List
} from './styled';

import { ProductGetFlowerSlider } from '../../../../api/product';

const ListPopup = (props) => {

    // const [slider_item, set_slider_item] = useState('');

    // useEffect(()=>{
    //     if(!slider_item){
    //         ProductGetFlowerSlider({
 
    //     })
    //     .then(response=>{
    //         if(response.data.code == '200');
    //         set_slider_item(response.data.body.items)
    //     })
    //     }
    // })
    return (
        <Popup show={props.show > 0 ? props.show : 0} onClose={props.onClose} data-key={props.show} onCloseButton buttonType>
            <ListWrapper>
                <List>
                <div dangerouslySetInnerHTML={{__html: props.content }}/>
                </List>
            </ListWrapper>
        </Popup>
    );
};

export default ListPopup;