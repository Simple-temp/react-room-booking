import React , { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Booking from './component/Booking/Booking';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Room from './component/Room/Room';

export const UserContext = createContext()

function App() {
  const [loggedInuser , setloggedInuser] = useState({});
  return (
    <div className="">
      <UserContext.Provider value={[loggedInuser , setloggedInuser]}>
          <Router>
            <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="/home" element={ <Home/> } />
              <Route path="/login" element={ <Login/> } />
              <Route path="/booking" element={ <PrivateRoute>
                <Booking/>
              </PrivateRoute> } />
              <Route path="/booking/:id" element={ <PrivateRoute>
                <Booking/>
              </PrivateRoute> } />
              <Route path="/*" element={ <NotFound/> } />
            </Routes>
          </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
