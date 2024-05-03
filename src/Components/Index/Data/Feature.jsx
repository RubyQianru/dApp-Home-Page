import React from "react";
import LearnMore from "../LearnMore";
import BlurryBlob from "../Decor/BlurryBlob";

function Feature() {
    return(
        <section className="w-screen h-screen flex justify-center items-center relative">
                <div className="w-1/2">
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