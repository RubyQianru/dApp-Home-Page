import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import styles from '../../../style';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Post() {
    const [formVisible, setFormVisible] = useState(false); 
    const [title, setTitle] = useState("")
    const [user, setUser] = useState("")
    const [content, setContent] = useState("")

    const navigate = useNavigate();

    async function onSubmit(e) {
        e.preventDefault();
        const newContent = {title, user, content};

        setTitle("")
        setUser("")
        setContent("")

        await fetch("https://dapp-home-server-2f2035829a1e.herokuapp.com/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newContent),
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
        
    }

    // Function to toggle the form visibility
    function toggleForm() {
        setFormVisible(!formVisible);
        window.scroll(0, 500);
    }

    return (
        <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
            <Typography variant='h3'>
                Any Comments?
            </Typography>
            <br/>
            <Button
                variant="contained"
                className={`${styles.buttonColor} p-10`}
                size="large"
                onClick={toggleForm} // Add onClick event to toggle the form visibility
            >
                leave your comment
            </Button>
            <br/>
            {formVisible && (
                    <form onSubmit={onSubmit}
                        component="form"
                        noValidate
                        autoComplete="off"
                        style={{width:"80vw" }}
                        >
                        <Card>
                            <CardContent>
                        <div className={`${styles.flexSpaceX} `}> 
                            <TextField id="outlined-basic" label="Title" variant="outlined" 
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                />
                            <TextField id="outlined-basic" label="Contact" variant="outlined" 
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                />
                        </div>
                        <br />
                        <div>
                            <TextField fullWidth id="fullwidth" label="Content" variant="standard" 
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />

                        </div>
                        <br />
                        <br />
                        <div className={`${styles.flexCenter}`}>
                        <Button type="submit" variant="contained" 
                            className={`${styles.buttonColor}`}
                        >
                        Submit
                        </Button>
                        </div>
                        
                        </CardContent>
                        </Card>
                    </form>

            )}
        </div>
    );
}

export default Post;
