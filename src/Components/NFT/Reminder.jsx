import React from 'react'
import Typography from '@mui/material/Typography'
import { useAccount } from '../AccountContext';
import { useState, useEffect } from 'react';

function Reminder(){
  
  const [connect, setConnect] = useState(false)
  const accounts = useAccount();
  useEffect(() => {
    async function detectConnection() {
      if (accounts.account != null) {
        setConnect(true)
      }
    }
    detectConnection();
  }, [accounts]);


    return(
        <>
            {!connect && (
                <Typography variant="h3" >
                    Connect to your wallet first.
                </Typography>
            )} 
        </>
    )
}

export default Reminder