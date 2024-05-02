import React from "react";
import LearnMore from "../LearnMore";
import { Typography } from "@mui/material";

function Banner() {
    return(
        <section className="w-screen h-screen flex justify-center items-center relative">
            <div class="container"> </div>
                <div className="w-1/2">
                    <Typography variant="h2">
                    Interact with your digital ownership in vritural 3D gallery.
                    </Typography>
                </div>
            <LearnMore text="Go" color="black"/>  
        </section>
    )
}

export default Banner