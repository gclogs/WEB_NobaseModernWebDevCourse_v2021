import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'
import Footer from "../Footer"
import './LoginMain.css'

interface Login {
  id: string;
  pwd: string;
  setId: (id: string) => void;
  setPwd: (pwd: string) => void;
}

export default function LoginMain(props: Login) {
  const { id, pwd, setId, setPwd } = props;

  const onChangeId = (e: any) => {
    setId(e.target.value);
  }

  const onChangePwd = (e: any) => {
    setPwd(e.target.value);
  }

  const printIdAndPwd = () => {
    console.log(id, pwd);
  }

  return (
    <>
      <div className="loginMain fullsize">
        <section className="idAndPwd">
          <div className="id form-floating">
            <input type="text" className="form-control" id="idInput" placeholder="아이디" onChange={onChangeId}/>
            <label htmlFor="idInput">아이디</label>
          </div>
          <div className="pwd form-floating">
            <input type="password" className="form-control" id="passwordInput" placeholder="비밀번호" onChange={onChangePwd} />
            <label htmlFor="passwordInput">비밀번호</label>
          </div>
          <div className="buttonContainer">
          <div className="d-grid gap-2">
            <button onClick={printIdAndPwd} className="btn btn-info btn-login" type="button">로그인</button>
          </div>
          </div>
        </section>
        <section className="wannaJoin">
          <span>혹시 조교도시락이 처음이신가요?</span>
          <Link to="/join">회원가입</Link>
        </section>
        <Footer />
      </div>
    </>
  )
}