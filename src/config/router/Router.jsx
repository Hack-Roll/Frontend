import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../../pages/home/Home';
import EventList from '../../pages/eventList/EventList';
import EventDetails from '../../pages/eventDetails/EventDetails';
import LoginRegister from '../../pages/loginRegister/LoginRegister';
import UserProfile from '../../pages/userProfile/UserProfile';
import AddEvents from '../../pages/addEvents/AddEvents';


export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/eventList" element={<EventList />} />
          <Route path="/eventDetails" element={<EventDetails />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/addEvents" element={<AddEvents />} />
        </Routes>
      </BrowserRouter>
    );
  }