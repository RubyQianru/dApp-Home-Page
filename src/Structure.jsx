import React from 'react'
import styles from './style';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './Components/Navbar';
import StickyFooter from './Components/StickyFooter';
import Hero3D from './Components/hero3D';
import BusinessCard from './Components/BusinessCard';

const Structure = () => {
  return (
    <div className = "w-full overflow-hidden">

      <div className = {` ${styles.flexCenter}` }>
          <ResponsiveAppBar/>
      </div>

      <div className={` ${styles.flexCenter}` }>
        <div className={``}>
          <Hero3D/>
        </div>
        <div className={``} style={{position: 'absolute', left:'60%'}}>
            <div>Advertisement</div>
            <br/>
            <Button variant="contained" size="large" style={{background:'initial', color: 'black' }}>LAUNCH APP</Button>
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}` }>
        <div className={`${styles.boxWidth}` }>
          <BusinessCard/>       
        </div>
      </div>

      <div className = {``}>
        <StickyFooter/>  
      </div>

    </div>
  )
}

export default Structure;
