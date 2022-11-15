import React from 'react';
import AuthContent from '../../components/auth/AuthContent'
import AuthButton from '../../components/auth/AuthButton';
import AuthInputWithLabel from '../../components/auth/AuthInputWithLabel';
import RightAlignedLink from '../../components/auth/RightAlignedLink';
import * as authActions from '../../redux/modules/auth';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

interface AuthState {
  auth: any;
}

function Login() {
  
  const handleChange = (e) => {
    const { AuthAcitons } = this.props;
    const { name, value } = e.target;

    AuthAcitons.changeInput({
      name,
      value,
      form: 'login'
    });
  }

  const { email, password } = this.props.form.toJS();

  return (
    <>
      <AuthContent title="로그인">
        <AuthInputWithLabel
          label="이메일"
          name="email"
          placeholder="이메일"
          value={email}
          onChange={handleChange}
        />
        <AuthInputWithLabel
          label="비밀번호"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={handleChange}
        />
        <AuthButton>로그인</AuthButton>
        <RightAlignedLink to="/auth/register">회원가입</RightAlignedLink>
      </AuthContent>
    </>
  )
}

export default connect(
  (state: AuthState) => ({
    form: state.auth.getIn(['login', 'form'])
  }),
  (dispatch) => ({
    AuthActions: bindActionCreators(authActions, dispatch)
  })
)(Login);