import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './views/home';
import Header from './core-layouts/header';
import Footer from './core-layouts/footer';
import Completed from './views/completed';
import Waiting from './views/waiting';
function App() {
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/Completed" element={<Completed />}></Route>
        <Route path="/Waiting" element={<Waiting />}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
