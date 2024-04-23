import React from 'react'
import styles from '../../style';
import Opensea from './Opensea';
import { AccountProvider } from '../AccountContext';
import Reminder from './Reminder';

const NFT = () => {

  return (
    <AccountProvider>
    <div className = "w-full overflow-hidden" >

      <div className = {` ${styles.flexCenter} `} >
          <Opensea/> 
          <div style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            color: "white",
            transform: "translate(-50%, -50%)"
            }}
          >

            <Reminder/>
        </div>

      </div>

    </div>
    </AccountProvider>
  )
}

export default NFT;
