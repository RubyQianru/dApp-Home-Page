import React from 'react'
import styles from '../../style';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../Navbar';
import StickyFooter from '../StickyFooter';
import Typography from '@mui/material/Typography';

import Opensea from './Opensea';



const NFT = () => {
  return (
    <div className = "w-full overflow-hidden" >

      <div className = {` ${styles.flexCenter} `} style={{color:"black"}}>
          <ResponsiveAppBar/>
      </div>

      <div className = {` ${styles.flexCenter} `} >
          <Opensea/>
      </div>


      <div className = {``}>
        <StickyFooter/>  
      </div>



    </div>
  )
}

export default NFT;
