import React from "react";
import { Typography, Button } from "@mui/material";
import LearnMore from "../LearnMore";
import styles from "../../../style";

function Hero() {
    return(
        <section className={` ${styles.flexCenter} ${styles.bgGradient} relative h-screen` } >
            <img src="/hero.png" alt="hero page for Avala" className="h-screen w-auto object-cover" loading="lazy"/>

            <div className={` ${styles.flexStart} ${styles.flexColumn} absolute w-4/5 md:left-1/2 md:w-1/3` } >
                <div className={`${styles.heroText}`}> 
                    <Typography gutterBottom variant='h1' >
                        AVALA
                    </Typography>
                    <Typography gutterBottom variant='h5' >
                        Realtime data analytics platform designed specifically for meme coins.
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
            <LearnMore text="Learn More" color="white"/>
      </section>
    )

}

export default Hero;