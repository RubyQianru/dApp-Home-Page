import React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import LearnMore from "../LearnMore";
import styles from "../../../style";
import useMediaQuery from '@mui/material/useMediaQuery';

function Enter() {
    const isMediumScreen = useMediaQuery('(max-width:780px)'); 

    return(
        <section className="w-screen h-screen flex justify-center items-center relative">
            { isMediumScreen? (
                <img 
                    src="/gallery/galleryMobile.png" 
                    alt="Mobile view of 3D NFT gallery" 
                    className="absolute h-screen w-auto object-cover" 
                    loading="lazy"/>
            ) : (
                <img 
                    src="/gallery/gallery.png" 
                    alt="Desktop view of 3D NFT gallery" 
                    className="absolute h-screen w-auto object-cover" 
                    loading="lazy"/>
            )}

            <div className="w-1/2">
                <p className="bold text-3xl md:text-5xl">
                    Interact with your digital ownership in vritural 3D gallery.
                </p>
            </div>

            <Link to="/NFT">
                <Button size="large" 
                    variant="contained" 
                    className={`${styles.buttonColor} `}
                >
                    Your VIP NFT Gallery
                </Button>
            </Link>

        </section>
    )
}

export default Enter;