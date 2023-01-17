import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Frontpage from './Components/Frontpage';
import Home from './Components/Home';
import Nav from './Components/Nav';
import Page from './Components/Page';
import Shop from './Components/Shop';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Frontpage />
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/page' element={<Page/>} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<Dashboard />} />


      </Routes>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
