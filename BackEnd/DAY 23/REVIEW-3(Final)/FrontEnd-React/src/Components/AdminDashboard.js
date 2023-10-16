import React from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { getToken, getRole } from './LocalStorage';
export default function AdminDashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true);

  const handleOpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }
  const authentication = (getToken() && getRole() === "ADMIN")

  
  return authentication ? (
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} handleOpenSidebar={handleOpenSidebar} />
      <Dashboard />
    </div>
  ) : null;
}
