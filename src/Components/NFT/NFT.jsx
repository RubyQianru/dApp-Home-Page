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

      </div>

    </div>
    </AccountProvider>
  )
}

export default NFT;
