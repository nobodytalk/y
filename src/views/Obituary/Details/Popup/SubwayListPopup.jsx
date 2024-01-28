import React, {useState, useEffect} from 'react';
import{
    SubwayListWrapper,
    SubwayList,
    Empty
} from './styled';

const SubwayListPopup = (props) => {
    
    return (
        <SubwayListWrapper>
            {props.items ? props.items.map((item, key) => (
            <SubwayList line={item.num}>
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
            </SubwayList>
            )) : <Empty>지하철 정보가 없습니다.</Empty>}
        </SubwayListWrapper>
    );
};

export default SubwayListPopup;