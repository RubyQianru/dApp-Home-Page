import React from "react";
import LearnMore from "../LearnMore";
import BlurryBlob from "../Decor/BlurryBlob";
import "./index.css"

function Feature() {
    return(
        <section className="w-screen h-screen flex justify-center items-center relative">
             <img 
                src="/coin/eth.png" 
                alt="Cryptocurrency" 
                className="absolute h-[30vh] w-auto object-cover top-0 left-0 m-10 coin" 
                loading="lazy"/>  
            <img 
                src="/coin/bit.png" 
                alt="Cryptocurrency" 
                className="absolute h-[30vh] w-auto object-cover bottom-0 right-0 m-10 coin" 
                loading="lazy"/>  

            <div className="w-2/3 text-center">
                <p className="bold text-3xl md:text-5xl">
                    Realtime analytics platform for global cryptocurrency data.
                </p>
            </div>
            <BlurryBlob/>
            <LearnMore text="⌄" color="black"/>  
        </section>
    )
}

export default Feature;