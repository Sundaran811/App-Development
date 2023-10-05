import React from 'react';
import { VStack, Box, Button, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function LoginOptions() {
  return (
    <div style={{ alignContent: 'center' }}>
      <VStack
        spacing={4}
        align='center'
        justify='center'
        px={['2', '4', '6']}
        alignContent={'center'}
        marginTop={160}
      >
        <Box
          h={['10px', '200px']}
          bg='#1A8EFD'
          display='flex'
          justifyContent='center'
          alignItems='center'
          m={['50px', '100px']}
          ml={['50px', '100px']}
          w={['20px', '500px']}
          alignSelf={'center'}
          alignContent={'center'}
        >
          <Stack spacing={55} direction={'row'}>
            {/* Use Link to navigate to the root path "/" */}
            <Link to="/patientLogin">
              <Button color={'#1A8EFD'} size='lg'>
                Patient
              </Button>
            </Link>
            <Link to="/doctorLogin">
              <Button  color={'#1A8EFD'} size='lg'>
                Doctor
              </Button>
            </Link>
            <Link to="/adminLogin">
              <Button  color={'#1A8EFD'} size='lg'>
                Admin
              </Button>
            </Link>
          </Stack>
        </Box>
      </VStack>
    </div>
  );
}

export default LoginOptions;
