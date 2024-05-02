import React from "react";
import LearnMore from "../LearnMore";
import BlurryBlob from "../Decor/BlurryBlob";

function Banner() {
    return(
        <section className="w-screen h-screen flex justify-center items-center relative">
                <BlurryBlob/>
                <div className="w-1/2">
                    <p className="bold text-3xl md:text-5xl">
                    Interact with your digital ownership in vritural 3D gallery.
                    </p>
                </div>
            <LearnMore text="Go" color="black"/>  
        </section>
    )
}

export default Banner