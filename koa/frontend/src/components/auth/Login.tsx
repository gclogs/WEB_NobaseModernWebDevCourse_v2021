import React from 'react';
import AuthContent from './AuthContent';
import AuthInputWithLabel from './AuthInputWithLabel';
import AuthButton from './AuthButton';
import RightAlignedLink from './RightAlignedLink';

const Login = () => {
  return (
    <>
      <AuthContent title="로그인">
        <AuthInputWithLabel label="이메일" name="email" placeholder="이메일"></AuthInputWithLabel>
        <AuthInputWithLabel label="비밀번호" name="password" placeholder="비밀번호"></AuthInputWithLabel>
        <AuthButton>로그인</AuthButton>
        <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
      </AuthContent>
    </>
  )
}

export default Login;