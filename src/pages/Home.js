// import { useEffect, useState } from 'react' 
// import {Link} from 'react-router-dom'
import React from 'react';
import PropTypes from 'prop-types';
import { grommet } from 'grommet/themes';
import { AnnounceContext, Box, Grommet, Heading, Text } from 'grommet';
 
const Announcer = ({ announce, message, mode, role }) => {
  React.useEffect(() => {
  const timeout = 3000;
  announce(message, mode, timeout);  
},[announce, message, mode]);

// export default function Home() {

  return (
    <Text align="center" role={role} aria-live={mode}>
        {message}
      </Text>
      );
    };
    
    Announcer.propTypes = {
      announce: PropTypes.func.isRequired,
      message: PropTypes.string,
      mode: PropTypes.string,
      role: PropTypes.string,
    };  
    const AnnounceContextComponent = props => (
        <Grommet theme={grommet} full>
          <Box justify="center" align="center" background="white" fill>
            <Heading>Welcome to Hi-Lite ⚡️</Heading>
            <AnnounceContext.Consumer>
              {announce => <Announcer announce={announce} {...props} />}
            </AnnounceContext.Consumer>
          </Box>
        </Grommet>
      );
      
      export const Assertive = () => (
        <AnnounceContextComponent
          message="The only one who can tell you 'you can't win' is you and you don't have to listen -Jessica Ennis-Hill"
          mode="assertive"
          role="alert"
        />
      );
      

  //return (
    // <content>
    // <div className='container'>
    //   <global class="active background"></global>
    //   <h1>Hi-Lite ⚡️</h1>
    // </div>
    // </content>
    
  
