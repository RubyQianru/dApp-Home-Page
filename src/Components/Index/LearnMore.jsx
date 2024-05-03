import React from 'react';
import { Typography } from '@mui/material';
import "./index.css"

function LearnMore(props) {

    function learnMoreClicked() {
        window.scrollTo({
            top: window.innerHeight, 
            behavior: 'smooth' 
        });
    }

    return (
            <p onClick={learnMoreClicked} className="bold text-xl text-white md:text-2xl learnMore">
                {props.text}
            </p>
    )
}

export default LearnMore;