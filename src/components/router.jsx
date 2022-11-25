import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/common/Header';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Board from '../pages/Board';
import Todo from '../pages/Todo';

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/board/:uid" element={<Board />}></Route>
          <Route path="/todo/:uid" element={<Todo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
