import React from 'react';
import { Typography } from '@mui/material';
import "./index.css"

function LearnMore(props) {

    function learnMoreClicked() {
        window.scrollTo({
            top: window.scrollY + window.innerHeight, 
            behavior: 'smooth' 
        });
    }

    return (
        <Typography variant="h5" className={`learnMore text-${props.color}`}>
            <div onClick={learnMoreClicked}>
                {props.text}
            </div>
        </Typography>
    )
}

export default LearnMore;