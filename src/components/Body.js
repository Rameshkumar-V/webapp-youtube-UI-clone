import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Body() {
  return (
    <>
    <Header/>
    
      <div className="flex h-screen ">
      
        <SideBar />
        <Outlet />
      </div>
    </>
    
  );
}

export default Body