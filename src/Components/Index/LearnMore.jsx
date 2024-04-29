import React from 'react';
import { Typography } from '@mui/material';
import "./index.css"

function LearnMore() {

    function learnMoreClicked() {
        window.scrollTo({
            top: window.scrollY + window.innerHeight, 
            behavior: 'smooth' 
        });
    }

    return (
        <Typography variant="h5" className="learnMore">
            <div onClick={learnMoreClicked}>
                Learn More
            </div>
        </Typography>
    )
}

export default LearnMore;