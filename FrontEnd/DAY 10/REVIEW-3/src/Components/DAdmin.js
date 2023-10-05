import React, { useState } from 'react';
import '../Styles/Doctoradmin.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useSelector } from "react-redux";
import { selectAllDoctors } from '../features/doctor/doctorsSlice';
import { Link } from 'react-router-dom';
import AddDoctorForm from './AddDoctorForm';
import Sidebar from './Sidebar';
import {AiOutlineUserAdd} from 'react-icons/ai'

const DAdmin = () => {
  const handleOpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true)
  
  const doctors = useSelector(selectAllDoctors)

  return (
    <>
    <Sidebar openSidebarToggle={openSidebarToggle} handleOpenSidebar={handleOpenSidebar}/>
    <div className='doctor'>
      <div className='addordel'>
      <Link to={"/addDoctor"}><AiOutlineUserAdd/></Link><br/>

        {/* <button className='del'>Delete All</button> */}
      </div>
    <div className="product-container">
      
      {doctors.map((doctor, index) => (
        <div className="product-card" key={index}>
         
          <img src={doctor.imageSrc} alt={doctor.name} className="product-image" />
          <h3 className="product-name">Name:{doctor.name}</h3>
          <p className="product-description">Qualifications:{doctor.qualifications}</p>
          <p className="product-description">Specialization:{doctor.specialization}</p>
          <p className="product-price">Experience:{doctor.exp}</p>
          <div className="product-price">Age:{doctor.age} years old</div>
          <div className="product-price">Ratings:
            {doctor.rating} <StarRateIcon fontSize="100px" />
          </div>
          <button className="ask-query-button">Ask a query</button>
          <br />
        </div>
        
      ))}
      
    </div>
    </div>
    </>

  );
}

export default DAdmin;