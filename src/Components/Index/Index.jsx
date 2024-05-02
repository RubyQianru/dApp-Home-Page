import React from 'react'
import ResponsiveAppBar from '../Navbar';
import StickyFooter from '../StickyFooter';
import Coinpaprika from './Data/Coinpaprika';
import GlobalMarket from './Data/GlobalMarket';
import Community from '../Community/Community';
import Hero from './Hero/Hero';
import Banner from './NFT/Banner';
import Enter from './NFT/Enter';
import BlurryBlob from './Decor/BlurryBlob';

const Index = () => {
  return (
    <main className = "w-full overflow-hidden" >

      <ResponsiveAppBar textColor={"white"}/>
      <Hero/>
      <Banner/>
      <Enter/>

      <section className={`p-0 md:px-20`}>
          <GlobalMarket/>  
          <BlurryBlob/>
          <Coinpaprika/>
          <Community/>
      </section>

      <StickyFooter/>  
    </main>
  )
}

export default Index;
