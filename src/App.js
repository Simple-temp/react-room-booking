import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import Room from './component/Room/Room';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/home" element={ <Home/> } />
          <Route path="/room" element={ <Room/> } />
          <Route path="/login" element={ <Login/> } />
          <Route path="/*" element={ <NotFound/> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
