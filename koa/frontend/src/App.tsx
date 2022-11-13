import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/HomePage'
import Auth from './pages/AuthPage'
import { Provider } from 'react-redux';

const App = ({store}) => {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/auth" element={<Auth />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;