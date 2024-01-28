import React, { useState, useEffect } from 'react';
import{
    BusListWrapper,
    BusList,
    Empty
} from './styled';


const BusListPopup = (props) => {


    return (
        <BusListWrapper>
            {props.items ? props.items.map((item, key) => (
            <BusList>
                <div>
                    <p>
                        {item ? item.num : ''}
                    </p>
                    <p>
                        {item? item.title : ''}
                        <span>
                            도보{item ? item.range : ''}
                        </span>
                    </p>
                </div>
            </BusList>
            )) : <Empty>버스 정보가 없습니다.</Empty>}
        </BusListWrapper>
    );
};

export default BusListPopup;