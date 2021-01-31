import React ,{ useState } from 'react'

import { Grid, Card, CardHeader, CardContent, FormGroup, FormControl, InputLabel, Input, FormHelperText, TextField, Typography, CircularProgress, Button } from '@material-ui/core'
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
        marginBottom: '16px',
        fontSize: '20px'
    },
    progressBar:{
        
    }
});

function QueueForm({inQueue, submitForm}) {
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
    const isInQueue = (inQueue) => {
        if(inQueue){
           return(
               <React.Fragment>
                   <CardHeader
                       title={message}
                       titleTypographyProps={{ variant: "h5" }}
                       style={{ marginBottom: "16px" }}
                   />
                   <FormGroup id="form" className={classes.formGroup}>
                       <TextField required id="name" label="Name" className={classes.input} variant="outlined" onChange={(e) => onChange(e)} />
                       <TextField required id="number" label="Phone Number" className={classes.input} variant="outlined" onChange={(e) => onChange(e)} />
                       <Button href="#top" variant="contained" style={{marginBottom: '16px'}} onClick={() => submitForm(name, phoneNumber)}>Join</Button>
                       <Typography variant="caption">Complete to continue</Typography>
                   </FormGroup>
               </React.Fragment>
           ) 
        }
        else{
            return(
                <Grid container justify="center" direction="column">
                    <Grid item>
                        <CircularProgress className={classes.progressBar} variant="determinate" value={85} position="static"/>
                    </Grid>
                    <Grid item>
                        <Typography>Here is where you are in the queue.</Typography>
                    </Grid>
                </Grid>
            )
        }
        
    }
    const classes = useStyles();
    return (
        <Card className={classes.root}>  
            <CardContent>
                {isInQueue(true)}
            </CardContent>
        </Card>
    )
}

export default QueueForm
