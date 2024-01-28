import React, { useState, useEffect } from 'react';
import Button from '../../../components/Button';
import ButtonGroup from '../../../components/ButtonGroup';
import { Row, Col } from '../../../components/Grid';
import { useParams } from 'react-router-dom';
import {
  WreathCommonWrapper,
  WreatNotContent,
  WreathNot,
  WreathCommonContent,
  WreathGetImg,
  Background,
  CommonContent,
} from '../styled';

const arrowIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="6"
    height="9"
    viewBox="0 0 6 9"
  >
    <g fill="none" fill-rule="evenodd">
      <g fill="#fff" fill-rule="nonzero">
        <g>
          <g>
            <path
              d="M69.92 11.515l-.4-.43c-.054-.056-.116-.085-.185-.085-.07 0-.131.029-.184.086L66 14.462l-3.15-3.376c-.054-.057-.115-.086-.185-.086-.07 0-.13.029-.184.086l-.4.43c-.054.057-.081.123-.081.197 0 .075.027.14.08.198l3.736 4.003c.053.057.115.086.184.086.07 0 .13-.029.184-.086l3.736-4.003c.053-.058.08-.123.08-.198 0-.074-.027-.14-.08-.198z"
              transform="translate(-319 -504) translate(20 492) translate(236 3) rotate(-90 66 13.5)"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const WreathGet = props => {
  // var today = new Date();

  // const date = today.getFullYear() + ("00" + (today.getMonth() + 1)).slice(-2) + ("00" + today.getDate()).slice(-2) + ("00" + today.getHours()).slice(-2) + ("00" + today.getMinutes()).slice(-2) ;

  return (
    <WreathCommonWrapper>
      {props.items ? (
        props.items.map((item, key) => (
          <WreathCommonContent>
            <CommonContent
              url={
                item.payment_data.product_image
                  ? item.payment_data.product_image
                  : ''
              }
            >
              <div />
              <strong>
                {item.order_data.order_status
                  ? item.order_data.order_status
                  : ''}
                <small>
                  {item.order_data.order_date ? item.order_data.order_date : ''}
                </small>
              </strong>
              <p>
                {item.payment_data.product_name
                  ? item.payment_data.product_name
                  : ''}
              </p>
              <p>{item.payment_data.total ? item.payment_data.total : ''}</p>
              <p>
                To.
                <span>
                  {item.shipping_data.shipping_name
                    ? item.shipping_data.shipping_name
                    : ''}
                  상주
                </span>
              </p>
              <Button
                type="default"
                to={
                  '/mypage/returnmessage/' +
                  item.order_ID +
                  '?obituary_ID=' +
                  item?.order_data?.obituary_ID
                }
              >
                답례인사 보내기{arrowIcon}
              </Button>
            </CommonContent>
          </WreathCommonContent>
        ))
      ) : (
        <WreatNotContent>
          <WreathNot url="/img/wreathimg2.png" />
          <h1>받은 화환 내역이 없습니다.</h1>
        </WreatNotContent>
      )}
    </WreathCommonWrapper>
  );
};

export default WreathGet;
