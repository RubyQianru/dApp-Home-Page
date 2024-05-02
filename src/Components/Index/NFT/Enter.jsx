import React from "react";
import { Button } from "@mui/material";
import { Link } from "wouter";
import LearnMore from "../LearnMore";
import styles from "../../../style";

function Enter() {
    return(
        <section className="w-screen h-screen flex justify-center items-center relative">
            <img src="/gallery.png" alt="gallery preview for NFT gallery" className="absolute h-screen w-auto object-cover" loading="lazy"/>
                <Link to="/NFT">
                <Button size="large" 
                    variant="contained" 
                    className={`${styles.buttonColor} `}
                >
                    Your VIP NFT Gallery
                </Button>
                </Link>

                <LearnMore text="And More" color="black"/>  
        </section>
    )
}

export default Enter;