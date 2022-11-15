import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import { Outlet } from 'react-router-dom';

const AuthPage = () => {
  return (
    <>
      <AuthForm>
        <Outlet />
      </AuthForm>
    </>
  )
}

export default AuthPage;