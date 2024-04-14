import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login'
import Register from './pages/register'
import Home from './pages/Home'
import Addartical from './pages/Addartical'
import Post from './pages/Post'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/add" element={<Addartical/>} ></Route>
          <Route path="/login" element={<Login/>} ></Route>
          <Route path="/register" element={<Register/>} ></Route>
          <Route path="/post/:id" element={<Post/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
