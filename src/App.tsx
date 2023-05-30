import React from 'react';
import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import HomePage from './pages/homepage/homePage';
import NavBar from './pages/navbar/navBar';
import LoginPage from './pages/loginpage/loginPage';
import HousesPage from './pages/housespage/housesPage';
import ReservePage from './pages/reservepage/reservePage';
import CreateListing from './pages/createlisting/createListing';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const toggle = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className="App">
      <div className={darkMode ? 'dark' : 'light'}>
        <Routes>
          <Route path="/" element={<NavBar></NavBar>}>
            <Route index element={<HomePage></HomePage>}></Route>
            <Route path="/houses/*" element={<HousesPage></HousesPage>}></Route>
            <Route path="/reserve/*" element={<ReservePage></ReservePage>}></Route>
            <Route path="/listing" element={<CreateListing></CreateListing>}></Route>
            <Route path="/login" element={<LoginPage></LoginPage>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
