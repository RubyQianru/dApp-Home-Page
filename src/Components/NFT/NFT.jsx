import React from 'react'
import styles from '../../style';
import ResponsiveAppBar from '../Navbar';
import StickyFooter from '../StickyFooter';
import Opensea from './Opensea';
import {useState} from 'react'

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
