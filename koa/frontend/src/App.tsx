import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import Auth from './pages/AuthPage'
import { Provider } from 'react-redux';
import HeaderContainer from './container/base/HeaderContainer';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = ({store}) => {
  return (
    <>
      <HeaderContainer />
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/auth" element={<Auth />}>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
        </Routes>
      </Provider>
    </>
  )
}

export default App;