import React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';
import { TbBrandBooking } from 'react-icons/tb';
import Navbar from './Navbar';
import { selectAllPatients } from '../features/patient/patientsSlice';
import { useSelector } from 'react-redux';


function Doctordash() {
const patients =  useSelector(selectAllPatients)

  return (
    <div>
      <div style={{ backgroundColor: '#f5eeee' }}>
        <VStack
          spacing={4}
          align='stretch'
          px={['2', '4', '6']} // Responsive padding
        >
        <Box
          h={['10px', '100px']} // Responsive height
          bg='#0E3EDA'
          display='flex'
          justifyContent='center'
          alignItems='center'
        >
          <Text fontSize={['24px', '30px']} color='white' as='b'>
            Hi Doctor! Welcome to MediSpark
          </Text>
        </Box>
          {/* Consultation Box */}
          <Box
            w={['100%', '80%']}
            h={['200px', '300px']}
            ml={['0', 'auto', '100px']} // Responsive margin-left (auto centers on small screens)
            maxW={['100%', '900px']}
            mx={['0', 'auto']}
            backgroundColor='#fff'
            p={['4', '6']}
            borderRadius='md'
            boxShadow='md'
            display='flex'
            justifyContent={['center', 'flex-start']}
            alignItems={['center', 'flex-start']}
            flexDirection={['column', 'row']}
            gap={['2', '4']}
          >
            <TbBrandBooking style={{ fontSize: '30px', color: 'black' }} />
            <Box textAlign={['center', 'left']}>
              <Text fontSize={['24px', '30px']} color='black' as='b'>
                No of Appointments
              </Text>
              <Text fontSize={['16px', '20px']} color='black'>
                Appointment 1 : Harry Stephen 6:00 PM
              </Text>
              <br />
              <Text fontSize={['16px', '20px']} color='black'>
              Appointment 2 : Harry Stephen1 8:00 PM
                
              </Text>
            </Box>
          </Box>

          {/* patients List */}
          {patients.map((patient, index) => (
            <Box
              key={index}
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
              justifyContent={['center', 'flex-start']}
              alignItems={['center', 'flex-start']}
              flexDirection={['column', 'row']}
              gap={['2', '4']}
            >
              <img
                src={patient.imageSrc}
                alt={patient.name}
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
              <Box textAlign={['center', 'left']}>
                <Text fontSize={['24px', '30px']} color='black' as='b'>
                 Name: {patient.name}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Age: {patient.age} Years
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Consultation: {patient.consultation}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Insurance: {patient.insurance} 
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Previous Consultation: {patient.prev} 
                </Text>
                
              </Box>
            </Box>
          ))}

          {/* Add more responsive boxes as needed */}

          {/* ...Your DAdmin component goes here... */}
        </VStack>
      </div>
    </div>
  );
}

export default Doctordash;