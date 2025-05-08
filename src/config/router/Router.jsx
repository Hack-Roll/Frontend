import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from '../../pages/home/Home';
import EventList from '../../pages/eventList/EventList';
import LoginRegister from '../../pages/loginRegister/LoginRegister';
import AddEvents from '../../pages/addEvents/AddEvents';


export default function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/eventList" element={<EventList />} />
          <Route path="/loginRegister" element={<LoginRegister />} />
          <Route path="/addEvents" element={<AddEvents />} />
        </Routes>
      </BrowserRouter>
    );
  }
