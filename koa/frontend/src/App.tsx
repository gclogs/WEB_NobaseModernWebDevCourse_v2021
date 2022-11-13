import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../pages/HomePage'
import Auth from '../pages/AuthPage'

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <>
      <Route path="/" element={Home}/>
      <Route path="/auth" element={Auth}/>
    </>
  )
}