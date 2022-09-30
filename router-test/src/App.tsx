import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './routes/Home'
import About from './routes/About'
import Nav from './components/Nav'

function App() {
  return (
      <>
      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
      </>
    );
}


export default App;