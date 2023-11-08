import { useSDK } from '@metamask/sdk-react';
import React, { useState } from 'react';
import { Button } from '@mui/material';
import styles from '../style';

export const MetaMaskButton = (props) => {
  const [account, setAccount] = useState()
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      setAccount(accounts?.[0]);
    } catch(err) {
      console.warn(`failed to connect..`, err);
    }
  };

  return (
    <div className="MetaMaskButton">
      <Button style={{  margin: 10, color: 'white'}} 
        onClick={connect} 
        variant="contained" 
        className={`${styles.buttonColor}`}>
        Connect
      </Button>
      {connected && (
        <div>
          <>
            {chainId && `Connected chain: ${chainId}`}
            <p></p>
            {account && `Connected account: ${account}`}
          </>
        </div>
      )}
    </div>
  );
};