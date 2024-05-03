import React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
import styles from "../../../style";
import useMediaQuery from '@mui/material/useMediaQuery';

function Enter() {
    const isMediumScreen = useMediaQuery('(max-width:780px)'); 

    return(
        <section className="w-screen h-screen flex flex-col justify-center items-center relative">
            { isMediumScreen? (
                <img 
                    src="/gallery/galleryMobile.png" 
                    alt="Mobile view of 3D NFT gallery" 
                    className="absolute w-screen h-screen object-cover" 
                    loading="lazy"/>
            ) : (
                <img 
                    src="/gallery/gallery.png" 
                    alt="Desktop view of 3D NFT gallery" 
                    className="absolute w-screen h-screen object-cover" 
                    loading="lazy"/>
            )}

            <div className="w-2/3 z-10 text-center">
                <p className="bold text-4xl text-white md:text-5xl">
                    Your digital ownership
                </p>
            </div>

            <br />

            <Link to="/NFT">
                <Button size="large" 
                    variant="contained" 
                    className={`${styles.buttonColor} `}
                >
                    NFT Gallery
                </Button>
            </Link>

        </section>
    )
}

export default Enter;