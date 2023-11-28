import { useSDK } from '@metamask/sdk-react';
import React, { useState, useEffect } from 'react';
import { Button, filledInputClasses } from '@mui/material';
import styles from '../style';
import { useAccount } from './AccountContext';

export const MetaMaskButton = (props) => {
  const [account, setAccount] = useState()
  const { sdk, connected } = useSDK()
  const { setConnectedAccount } = useAccount()
  const [button, setButton] = useState(false)

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]); 
      setConnectedAccount(accounts?.[0])

    } catch(err) {
      console.warn(`failed to connect..`, err);
    }
  };

  const accounts = useAccount();
  useEffect(() => {
    async function detectConnection() {
      if (accounts.account != null) {
        setButton(true)
      }
    }
    detectConnection();
  }, [accounts]);

  return (
    <div className="MetaMaskButton">
      {!button && (
        <Button style={{  margin: 10, color: 'white'}} 
        onClick={connect} 
        variant="contained" 
        className={`${styles.buttonColor}`}>
        Connect
        </Button>
      ) }

      {button && (
        <Button style={{  margin: 10}} 
          onClick={connect} 
          // variant="contained" 
          className={``}>
          Connected
        </Button>
      )}
    </div>
  );
};