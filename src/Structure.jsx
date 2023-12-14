import React from 'react'
import styles from './style';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './Components/Navbar';
import StickyFooter from './Components/StickyFooter';
import Hero3D from './Components/Index/Hero3D';
import Coinpaprika from './Components/Index/Coinpaprika';
import GlobalMarket from './Components/Index/GlobalMarket';
import Typography from '@mui/material/Typography';

const Structure = () => {
  return (
    <div className = "w-full overflow-hidden" >

      <div className = {` ${styles.flexCenter}` }>
          <ResponsiveAppBar/>
      </div>

      <div className={` ${styles.flexCenter} ${styles.bgGradient} relative h-screen ` } >
        <div className={`absolute h-screen w-screen md:right-1/4`} >
          <Hero3D/>
        </div>
        <div className={` ${styles.flexStart} ${styles.flexColumn} absolute w-4/5 md:left-1/2 md:w-1/3` } >
            <div className={`${styles.heroText}`}> 
              <Typography gutterBottom variant='h1' >
                AVALA
              </Typography>
              <Typography gutterBottom variant='h5' >
                Communicate with Ethereum blockchain within a click
            </Typography>
            </div>
            <br/>
            <Button variant="outlined" size="large">
              DAPP COMING SOON
            </Button>
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}` }>
        <div className={`` }>
          <GlobalMarket/>       
        </div>
      </div>

      <div className = {` ${styles.flexCenter}`}>
        <Coinpaprika/>
      </div>

      <br />
      <br />
      

      <div className = {``}>
        <StickyFooter/>  
      </div>

    </div>
  )
}

export default Structure;
