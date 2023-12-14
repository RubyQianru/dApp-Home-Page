import React from 'react'
import styles from '../../style';
import Button from '@mui/material/Button';
import ResponsiveAppBar from '../Navbar';
import StickyFooter from '../StickyFooter';
import Typography from '@mui/material/Typography';
import Forum from './Forum/Forum';
import Community3d from './Three/Community3D';
import { AccountProvider } from '../AccountContext';


const Community = () => {
  return (
    <AccountProvider>
      <div className = "w-full overflow-hidden" >

        <div className = {` ${styles.flexCenter} `}>
            <ResponsiveAppBar textColor={"black"}/>
        </div>

        <div className={`${styles.flexCenter} relative top-200`} >
          <Community3d/>
        </div>

        <div className={`${styles.flexCenter} relative top-200`} >
          <Forum/>
        </div>
        

        <div className = {``}>
          <StickyFooter/>  
        </div>

      </div>
    </AccountProvider>
  )
}

export default Community;
