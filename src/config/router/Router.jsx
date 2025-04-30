import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

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