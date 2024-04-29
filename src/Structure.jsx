import React from 'react'
import styles from './style';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './Components/Navbar';
import StickyFooter from './Components/StickyFooter';
import Coinpaprika from './Components/Index/Coinpaprika';
import GlobalMarket from './Components/Index/GlobalMarket';
import Typography from '@mui/material/Typography';
import Community from './Components/Community/Community';
import { Link } from 'react-router-dom';
import LearnMore from './Components/Index/LearnMore';

const Structure = () => {
  return (
    <div className = "w-full overflow-hidden" >

      <div className = {` ${styles.flexCenter}` }>
          <ResponsiveAppBar textColor={"white"}/>
      </div>

      <div className={` ${styles.flexCenter} ${styles.bgGradient} relative h-screen` } >
        <img src="/hero.png" alt="hero page for Avala" className="h-screen w-auto object-cover" loading="lazy"/>

        <div className={` ${styles.flexStart} ${styles.flexColumn} absolute w-4/5 md:left-1/2 md:w-1/3` } >
            <div className={`${styles.heroText}`}> 
              <Typography gutterBottom variant='h1' >
                AVALA
              </Typography>
              <Typography gutterBottom variant='h5' >
                Realtime data analytics platform designed specifically for mene coins.
              </Typography>

            </div>
            <br/>
            <a href="https://github.com/RubyQianru/molab-2024-01-RubyZhang" 
              target="_blank" 
              rel="noopener noreferrer"
              >
              <Button size="large" 
                variant="contained" 
                className={`${styles.buttonColor}`}
              >
                DAPP IN PROGRESS
              </Button>
            </a>

        </div>
        
        <LearnMore/>

      </div>
      
      <div className="w-screen h-screen flex justify-center items-center">
        <Link to="/NFT">
          <Button size="large" 
            variant="contained" 
            className={`${styles.buttonColor} `}
          >
            Your VIP NFT Gallery
          </Button>
        </Link>
      </div>

      <div className={`p-0 md:px-20`}>
          <GlobalMarket/>  
          <Coinpaprika/>
          <Community/>
      </div>

      <div className = {``}>
        <StickyFooter/>  
      </div>

    </div>
  )
}

export default Structure;
