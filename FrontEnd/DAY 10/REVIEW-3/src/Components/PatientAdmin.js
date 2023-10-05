import React, { useState } from 'react';
import '../Styles/patientadmin.css';
import StarRateIcon from '@mui/icons-material/StarRate';
import { useSelector } from "react-redux";
import { selectAllPatients } from '../features/patient/patientsSlice';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import AddPatientForm from "./AddPatientForm"
import { AiOutlineUserAdd } from 'react-icons/ai';

const PatientAdmin = () => {
  const handleOpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const [openSidebarToggle, setOpenSidebarToggle] = useState(true)

  const patients = useSelector(selectAllPatients)

  return (
    <>
      <Sidebar openSidebarToggle={openSidebarToggle} handleOpenSidebar={handleOpenSidebar} />
      <div className='patient'>
        <div className='addordel'>
          <div className="left-buttons">
            <Link to={"/addPatient"} className='del1'><AiOutlineUserAdd /></Link><br/>
            {/* <button className='del'>Delete All</button> */}
          </div>
        </div>
        <div className="patientproduct-container">
          {patients.map((patient, index) => (
            <div className="patientproduct-card" key={index}>
              <img src={patient.imageSrc} alt={patient.name} className="patientproduct-image" />
              <h3 className="patientproduct-name">Name: {patient.name}</h3>
              <p className="patientproduct-description">Age: {patient.age}</p>
              <p className="patientproduct-description">Gender: {patient.gender}</p>
              <p className="patientproduct-price">Consultation: {patient.consultation}</p>
              <p className="patientproduct-price">Insurance: {patient.insurance}</p>
              <div className="patientproduct-price">Previous Consultation:
                {patient.prev} 
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PatientAdmin;
