import React from 'react'
import styles from './style';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './Components/Navbar';
import StickyFooter from './Components/StickyFooter';
import Hero3D from './Components/hero3D';
import BusinessCard from './Components/BusinessCard';
import CryptoAPI from './Components/CryptoAPI';


const Structure = () => {
  return (
    <div className = "w-full overflow-hidden">

      <div className = {` ${styles.flexCenter}` }>
          <ResponsiveAppBar/>
      </div>

      <div className={` ${styles.flexCenter}` } style={{backgroundColor: 'silver', position:'relative'}}>
        <div className={``} >
          <Hero3D/>
        </div>
        <div className={` ${styles.flexCenter} ${styles.flexColumn}` } style={{position: 'absolute', left:'60%'}}>
            <div>Advertisement</div>
            <Button variant="contained" size="large" className={`${styles.buttonColor}`}>LAUNCH APP</Button>
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}` }>
        <div className={`${styles.boxWidth}` }>
          <BusinessCard/>       
        </div>
      </div>

      <div className = {``}>
        <CryptoAPI/>
      </div>

      <div className = {``}>
        <StickyFooter/>  
      </div>

    </div>
  )
}

export default Structure;
