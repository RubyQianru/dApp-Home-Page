import React from 'react'
import styles from '../../style';
import Opensea from './Opensea';
import { AccountProvider } from '../AccountContext';
import Reminder from './Reminder';
import ResponsiveAppBar from '../Navbar';
import { Skeleton } from '@mui/material';

const NFT = () => {

  return (
    <AccountProvider>
      <ResponsiveAppBar/>
      <div className = "w-full overflow-hidden" >
        <div className = {` ${styles.flexCenter} `} >
            <Opensea/> 
            <div className="absolute">
              <Reminder/>
            </div>
        </div>
      </div>
    </AccountProvider>
  )
}

export default NFT;
