import React from 'react'
import styles from './style';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './Components/Navbar';
import StickyFooter from './Components/StickyFooter';
import Hero3D from './Components/hero3D';
import Coinpaprika from './Components/Coinpaprika';
import GlobalMarket from './Components/GlobalMarket';
import Typography from '@mui/material/Typography';

import { Route, Routes } from "react-router-dom";
import RecordList from "./Components/RecordList";
import Edit from "./Components/Edit";
import Create from "./Components/Create";
import Navbar from './Components/NavRecord';

import Test from './Components/Test';

import Card from './Components/Card';


const Structure = () => {
  return (
    <div className = "w-full overflow-hidden" >

      <div className = {` ${styles.flexCenter}` }>
          <ResponsiveAppBar/>
      </div>

      <div className={` ${styles.flexCenter} ${styles.bgGradient}` } style={{position:'relative', padding: '30px 0'}} >
        <div className={``} style={{position:'relative'}}>
          <Hero3D/>
        </div>
        <div className={` ${styles.flexStart} ${styles.flexColumn}` } style={{position: 'absolute', left:'45%'}}>
            <div className={`${styles.heroText}`}> 
              <Typography variant="h3" gutterBottom style={{fontWeight: 'lighter', fontSize:"4vw"}}>
                DECENTRALIZATION PROTOCOL
              </Typography>

              <Typography variant="h4" gutterBottom style={{fontSize: "2vw"}}>
              Communicate with Blockchain within a click
            </Typography>
            </div>
            <Button variant="contained" className={`${styles.buttonColor}`} 
              style={{fontSize: '2vw', padding:"0.8vw 2vw"}}>
              LAUNCH APP
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
      <Navbar/>
      <Test/>
     <div className = {` ${styles.flexCenter}`}>
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>

      <div className = {` ${styles.flexCenter}`}>
        <Card />
      </div>
      

      <div className = {``}>
        <StickyFooter/>  
      </div>

    </div>
  )
}

export default Structure;
