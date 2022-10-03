import Loading from "../components/Login/Loading"
import LoginMain from "../components/Login/LoginMain"
import Footer from "../components/Footer"
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');

  setTimeout(() => {
    setLoading(false);
  }, 3000)

  return (
    <>
      <LoginMain id={id} pwd={pwd} setId={setId} setPwd={setPwd} />
    </>
  )
}