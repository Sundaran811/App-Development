import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, handleOpenSidebar}) {
  return (
   <>
   {openSidebarToggle && (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Active Users
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillGrid3X3GapFill className='icon'/> Patients
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPeopleFill className='icon'/> Doctors
                </a>
            </li>
           
            <li className='sidebar-list-item'>
                <a href="/">
                    <BsPeopleFill className='icon'/> Logout
                </a>
            </li>

           
        </ul>
    </aside>)}
    <button className='icon close_icon' onClick={handleOpenSidebar}>SIDE PANEL</button>
 
    </>
  )
}

export default Sidebar