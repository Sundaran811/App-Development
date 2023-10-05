import React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';
import { FcConferenceCall } from 'react-icons/fc';
import Navbar from './Navbar';
import { selectAllDoctors } from '../features/doctor/doctorsSlice';
import { useSelector } from 'react-redux';


function Userdash() {
const doctors = useSelector(selectAllDoctors)

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
            Hi User! Welcome to MediSpark
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
            <FcConferenceCall style={{ fontSize: '30px', color: 'black' }} />
            <Box textAlign={['center', 'left']}>
              <Text fontSize={['24px', '30px']} color='black' as='b'>
                Prescription and Medical Records
              </Text>
              <Text fontSize={['16px', '20px']} color='black'>
                Consultation 1 : Fever ----------------- P650 ----------------- M/A/N
              </Text>
              <br />
              <Text fontSize={['16px', '20px']} color='black'>
                Consultation 2 : Cold ----------------- Dolo ----------------- M/A/N
              </Text>
            </Box>
          </Box>
          <Box
            w={['100%', '80%']}
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
            flexDirection={['column', 'column']} // Change 'row' to 'column'
            >
         
            <Text fontSize={['24px', '30px']} color='Black' as='b'>
            The Doctors that you can avail here are as follows :

              </Text>
          
            </Box>

          {/* Doctors List */}
          {doctors.map((doctor, index) => (
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
                src={doctor.imageSrc}
                alt={doctor.name}
                style={{ width: '100px', height: '100px', borderRadius: '50%' }}
              />
              <Box textAlign={['center', 'left']}>
                <Text fontSize={['24px', '30px']} color='black' as='b'>
                  {doctor.name}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Qualification: {doctor.qualification}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Specialization: {doctor.specialization}
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Experience: {doctor.exp} years
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Age: {doctor.age} years
                </Text>
                <Text fontSize={['16px', '20px']} color='black'>
                  Rating: {doctor.rating}
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

export default Userdash;
