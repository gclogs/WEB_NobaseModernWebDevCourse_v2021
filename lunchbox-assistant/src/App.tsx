import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'
import Join from './routes/Join'
import Login from './routes/Login'
import Main from './routes/Main'
import MyOrder from './routes/MyOrder'
import Order from './routes/Order'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/join" element={<Join/>}></Route>
          <Route path="/main" element={<Main/>}></Route>
          <Route path="/myorder" element={<MyOrder/>}></Route>
          <Route path="/order" element={<Order/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
