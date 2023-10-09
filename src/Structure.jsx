import React from 'react'
import styles from './style';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './Components/Navbar';
import StickyFooter from './Components/StickyFooter';
import Hero3D from './Components/hero3D';
import CryptoAPI from './Components/CryptoAPI';

import Coinpaprika from './Components/Coinpaprika';
import GlobalMarket from './Components/GlobalMarket';

import Typography from '@mui/material/Typography';



const Structure = () => {
  return (
    <div className = "w-full overflow-hidden" >

      <div className = {` ${styles.flexCenter}` }>
          <ResponsiveAppBar/>
      </div>

      <div className={` ${styles.flexCenter} ${styles.bgGradient}` } style={{position:'relative', padding: '30px 0'}}>
        <div className={``} style={{position:'relative'}}>
          <Hero3D/>
        </div>
        <div className={` ${styles.flexStart} ${styles.flexColumn}` } style={{position: 'absolute', left:'45%'}}>
            <div className={`${styles.heroText}`}> 
              <Typography variant="h3" gutterBottom style={{fontWeight: 'lighter'}}>
                DECENTRALIZATION PROTOCOL
              </Typography>

              <Typography variant="h4" gutterBottom>
              Communicate with Blockchain within a click
            </Typography>
            </div>
            <Button variant="contained" className={`${styles.buttonColor}`} 
              style={{fontSize: '1.5rem', padding:"0.8rem 2rem"}}>
              LAUNCH APP
            </Button>
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}` }>
        <div className={`${styles.boxWidth}` }>
          <GlobalMarket/>       
        </div>
      </div>

      <div className = {``}>
        <Coinpaprika/>
      </div>

      <div className = {``}>
        <StickyFooter/>  
      </div>

    </div>
  )
}

export default Structure;
