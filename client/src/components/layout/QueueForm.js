import React ,{ useState } from 'react'

import { Grid, Card, CardHeader, CardContent, FormGroup, FormControl, InputLabel, Input, FormHelperText, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        borderRadius: '40px',
        background: 'linear - gradient(145deg, #f8f8f8, #d1d1d1)',
        boxShadow: '9px 9px 18px #9e9e9e, -9px -9px 18px #ffffff',
        padding: '20px 5px'
    },
    formGroup: {
        width: '80%',
        margin: 'auto',
    },
    input:{
        
    }
});

function QueueForm({inQueue}) {
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("Complete to join queue");
    const onChange = (e) => {
        console.log(e.target.id)
        
        switch(e.target.id){
            case "name":
                setName(e.target.value);
                break;
            case "number":
                setPhoneNumber(e.target.value);
                break;
        }
        
        if (name != "" && phoneNumber != "") {
            setMessage("Almost done! Click add button.");
        }
        else {
            setMessage("Complete to join queue");
        }
        console.log(name, phoneNumber);
        
        
    }
    
    const classes = useStyles();
    return (
        <Card className={classes.root}>  
            <CardContent>
                <CardHeader
                    title={message}
                />
                <FormGroup className={classes.formGroup}>
                    <FormControl style={{marginBottom: '16px'}} >
                        <InputLabel htmlFor="my-input">Name</InputLabel>
                        <Input id="name" className={classes.input} variant="outlined" aria-describedby="my-helper-text" onChange={(e) => onChange(e)}/>
                        <FormHelperText id="my-helper-text">First and Last name</FormHelperText>
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Phone Number</InputLabel>
                        <Input id="number" className={classes.input} variant="outlined" aria-describedby="my-helper-text" onChange={(e) => onChange(e)}/>
                        <FormHelperText id="my-helper-text">A good number to contact you at</FormHelperText>
                    </FormControl>
                </FormGroup>
            </CardContent>
        </Card>
    )
}

export default QueueForm
