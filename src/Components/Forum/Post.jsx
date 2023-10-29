import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router";
import React, { useState, useEffect } from "react";
import styles from '../../style';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function Post() {
    const [formVisible, setFormVisible] = useState(false); // State to control form visibility

    const [form, setForm] = useState({
        title: "",
        user: "",
        content: "",
    });

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newPerson = { ...form };
        await fetch("http://localhost:5050/record/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ title: "", user: "", content: "" });
        navigate("/");
    }

    // Function to toggle the form visibility
    function toggleForm() {
        setFormVisible(!formVisible);
    }

    return (
        <div className={`${styles.flexCenter} ${styles.flexColumn}`}>
            <Typography variant="h4">
                Community
            </Typography>
            <Button
                variant="contained"
                className={`${styles.buttonColor}`}
                style={{ fontSize: '2vw', padding: "0.8vw 2vw" }}
                onClick={toggleForm} // Add onClick event to toggle the form visibility
            >
                Start a topic
            </Button>

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
                                value={form.title}
                                onChange={(e) => updateForm({ title: e.target.value })}
                                />
                            <TextField id="outlined-basic" label="User" variant="outlined" 
                                value={form.user}
                                onChange={(e) => updateForm({ user: e.target.value })}
                                />
                        </div>
                        <br />
                        <div>
                            <TextField fullWidth id="fullwidth" label="Content" variant="standard" 
                                value={form.content}
                                onChange={(e) => updateForm({ content: e.target.value })}
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
