import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '@pages/Home'
import Login from '@pages/Login'
import CreateOrJoinRoom from '@pages/CreateOrJoinRoom'
import NotFound from '@pages/NotFound'
import Room from '@pages/Room'
import '@styles/styles.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/create-room" element={<CreateOrJoinRoom/>} />
        <Route exact path="/room/:roomName" element={<Room/>} />
        <Route exact path="/join-room" element={<CreateOrJoinRoom/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;