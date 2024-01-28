import React, { useEffect, useState } from 'react';
import { isLogind } from '../api/auth';
import { useDispatch, useSelector } from 'react-redux';
import { SetUserData } from '../store/global';
import { GetMe } from '../api/user';

const AuthContainer = props => {
  const userData = useSelector(state => state.global.user_data);
  const Dispatch = useDispatch();
  useEffect(() => {
    const localToken = localStorage.getItem('user_token');
    if (localToken) {
      isLogind()
        .then(response => {
          if (!userData) {
            GetMe()
              .then(
                res =>
                  res.data.code == 200 && Dispatch(SetUserData(res.data.body))
              )
              .catch(err => console.log(err));
          }
        })
        .catch(error => {
          // alert('로그인 정보가 잘못되었습니다.');
          localStorage.removeItem('user_token');
          window.location.href = '/login';
        });
    } else {
      localStorage.removeItem('user_token');
      window.location.href = '/login';
    }
  });
  return <>{props.children}</>;
};

export default AuthContainer;
