import React, { useEffect, useState } from 'react';
import { VStack, Box, Text, Image } from '@chakra-ui/react';
import { TbBrandBooking } from 'react-icons/tb';
import { selectAllPatients } from '../features/patient/patientsSlice';
import { useSelector } from 'react-redux';
import doctor_dashb from "../Assets/doctor_dashboard.jpg";
import { getToken, getRole, removeToken, removeEmail, removeRole } from './LocalStorage';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Doctordash() {
  const nav = useNavigate();
  const CryptoJS = require('crypto-js');
  const token = getToken();
  const [patients, setPatients] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const apiUrl = 'http://localhost:8080/patients';
  const apiUrl1 = 'http://localhost:8080/appointment';
  const imgSrc = "https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg";

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get(apiUrl);
        const patientData = response.data;
        setPatients(patientData);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };
    fetchPatients();
  }, [apiUrl]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get(apiUrl1);
        const appointmentData = response.data;
        setAppointments(appointmentData);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    };
    fetchAppointments();
  }, [apiUrl1]);

  return (
    <div>
      <div style={{ backgroundColor: '#F4EEEE' }}>
        <VStack
          spacing={4}
          align='stretch'
          px={['2', '4', '6']}
        >
          {token && (getRole() === "DOCTOR" || getRole() === "ADMIN") ? (
            <>
              <Box
                h={['80px', '100px']}
                bg='#0E3EDA'
                display='flex'
                justifyContent='center'
                alignItems='center'
              >
                <Text
                  fontSize={['18px', '24px', '30px']}
                  color='#fff'
                  as='b'
                >
                  Hi Doctor! Welcome to MediSpark
                </Text>
              </Box>

              <Box
                w={['100%', '80%']}
                h={['200px', '300px']}
                ml={['0', 'auto', '100px']}
                maxW={['100%', '900px']}
                mx={['0', 'auto']}
                backgroundColor='#fff'
                p={['4', '6']}
                borderRadius='md'
                boxShadow='md'
                display='flex'
                flexDirection={['column', 'row']}
                gap={['2', '4']}
              >
                <Image
                  src={doctor_dashb}
                  alt="Doctor Dashboard"
                  maxH="500px"
                  style={{ height: '250px', marginRight: '650px' }}
                />
              </Box>

              {patients.map((patient, index) => (
                <Box
                  key={index}
                  w={['100%', '80%']}
                  h={['auto', 'auto', '300px']}
                  ml={['0', 'auto', '100px']}
                  maxW={['100%', '900px']}
                  mx={['0', 'auto']}
                  backgroundColor='#fff'
                  p={['4', '6']}
                  borderRadius='md'
                  boxShadow='md'
                  display='flex'
                  justifyContent={['center', 'flex-start']}
                  alignItems={['flex-start', 'flex-start', 'center']}
                  flexDirection={['column', 'column', 'row']}
                  gap={['2', '4']}
                >
                  <img
                    src={imgSrc}
                    alt={patient.patientName}
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      marginBottom: '10px',
                      marginTop: ['10px', '10px', '0'],
                      marginRight: '30px',
                    }}
                  />
                  <Box
                    textAlign={['center', 'left']}
                    width={['100%', '100%', '70%']}
                    marginLeft={['0', '20px']}
                  >
                    <Text fontSize={['24px', '30px']} color='black' as='b'>
                      Name: {patient.patientName}
                    </Text>
                    <Text fontSize={['16px', '20px']} color='black'>
                      Age: {patient.patientAge} Years
                    </Text>
                    <Text fontSize={['16px', '20px']} color='black'>
                      Consultation: {patient.patientConsultation}
                    </Text>
                    <Text fontSize={['16px', '20px']} color='black'>
                      Insurance: {patient.patientInsurance}
                    </Text>
                    <Text fontSize={['16px', '20px']} color='black'>
                      Previous Consultation: {patient.patientPreviousConsultation}
                    </Text>
                  </Box>
                </Box>
              ))}

              {appointments.map((appt, index) => (
                <Box
                  key={index}
                  w={['100%', '80%']}
                  h={['auto', 'auto', '300px']}
                  ml={['0', 'auto', '100px']}
                  maxW={['100%', '900px']}
                  mx={['0', 'auto']}
                  backgroundColor='#fff'
                  p={['4', '6']}
                  borderRadius='md'
                  boxShadow='md'
                  display='flex'
                  justifyContent={['center', 'flex-start']}
                  alignItems={['flex-start', 'flex-start', 'center']}
                  flexDirection={['column', 'column', 'row']}
                  gap={['2', '4']}
                >
                  <Box
                    textAlign={['center', 'left']}
                    width={['100%', '100%', '70%']}
                    marginLeft={['0', '20px']}
                  >
                    <Text fontSize={['24px', '30px']} color='black' as='b'>
                      Name: {appt.patientName}
                    </Text>
                    <Text fontSize={['16px', '20px']} color='black'>
                      Email: {appt.email}
                    </Text>
                    <Text fontSize={['16px', '20px']} color='black'>
                      Phone Number: {appt.phoneNumber}
                    </Text>
                    <Text fontSize={['16px', '20px']} color='black'>
                      Appointment: {appt.appointmentTime}
                    </Text>
                  </Box>
                </Box>
              ))}
            </>
          ) : (
            <Box
              w={['100%', '80%']}
              h={['200px', '300px']}
              ml={['0', 'auto', '100px']}
              maxW={['100%', '900px']}
              mx={['0', 'auto']}
              backgroundColor='#fff'
              p={['4', '6']}
              borderRadius='md'
              boxShadow='md'
              display='flex'
              flexDirection={['column', 'row']}
              gap={['2', '4']}
            >
              <Text fontSize={['24px', '30px']} color='black' as='b'>
                You don't have authentication to access this page.
              </Text>
            </Box>
          )}
        </VStack>
      </div>
    </div>
  );
}

export default Doctordash;
