import React from 'react';
import {
    BankWrapper,
    ListWrapper,
    BankList,

} from './styled';

const Bank = (props) => {
    return (
        <>
            <BankWrapper onClick={props.onClick} data-code={props.items.code} data-name={props.items.name}>
                <ListWrapper>
                    <BankList>
                        {/* <img src={process.env.PUBLIC_URL + props.itmes.icon} alt=""/>
                        <p>{props.itmes.bank_ID}</p> */}
                        {/* <p>{props.items.code}</p> */}
                        <p>{props.items.name}</p>
                    </BankList>
                </ListWrapper>
            </BankWrapper>
        </>
    );
};

export default Bank;