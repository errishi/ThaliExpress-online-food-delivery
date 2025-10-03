import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import { Route, Routes } from 'react-router-dom';
import Add from './pages/Add/Add';
import Lists from './pages/Lists/Lists';
import Orders from './pages/Orders/Orders';
import NotFound from './pages/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Navbar/>
      <hr />
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/' element={<Add/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/list' element={<Lists/>} />
          <Route path='/orders' element={<Orders/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </div>
    </div>
  )
}

export default App;