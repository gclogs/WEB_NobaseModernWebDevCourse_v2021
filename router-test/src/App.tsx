import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import RouterPropTest from './routes/RouterPropTest'
import RouterPropTestResult from './routes/RouterPropTestResult'
import Nav from './components/Nav'

function App() {
  return (
      <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/routerproptest" element={<RouterPropTest/>} />
          <Route path="/routerproptestresult" element={<RouterPropTestResult/>} />
        </Routes>
      </Router>
      </>
    );
}


export default App;