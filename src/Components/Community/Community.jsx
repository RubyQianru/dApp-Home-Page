import React from 'react'
import styles from '../../style';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../Navbar';
import StickyFooter from '../StickyFooter';
import Typography from '@mui/material/Typography';
import Forum from './Forum/Forum';



const Community = () => {
  return (
    <div className = "w-full overflow-hidden" >

      <div className = {` ${styles.flexCenter} `} style={{color:"black"}}>
          <ResponsiveAppBar/>
      </div>

      <div className={`${styles.flexCenter}`} style={{position:'relative', top: '100px'}}>
        <Forum/>
      </div>

      <div className = {``}>
        <StickyFooter/>  
      </div>

    </div>
  )
}

export default Community;
