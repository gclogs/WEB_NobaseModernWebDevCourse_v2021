import React from 'react';
import AuthContent from './AuthContent';
import AuthInputWithLabel from './AuthInputWithLabel';
import AuthButton from './AuthButton';
import RightAlignedLink from './RightAlignedLink';

const Register = () => {
  return (
    <>
      <AuthContent title="회원가입">
        <AuthInputWithLabel label="이메일" name="email" placeholder="이메일"></AuthInputWithLabel>
        <AuthInputWithLabel label="아이디" name="username" placeholder="아이디"></AuthInputWithLabel>
        <AuthInputWithLabel label="비밀번호" name="password" placeholder="비밀번호"></AuthInputWithLabel>
        <AuthInputWithLabel label="비밀번호 확인" name="passwordConfirm" placeholder="비밀번호 확인"></AuthInputWithLabel>
        <AuthButton>회원가입</AuthButton>
        <RightAlignedLink to="/auth/login">로그인</RightAlignedLink>
      </AuthContent>
    </>
  )
}

export default Register;