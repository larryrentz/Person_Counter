import React, { useState } from 'react'
import { Fab, Button, IconButton, Typography, AppBar, Toolbar, Grid } from '@material-ui/core';
import { Schedule, Timelapse, Group, PersonAdd } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        background: '#e8e8e8',
        paddingTop: '16px',
        boxShadow: 'None',
        overflowX: 'hidden',
        maxWidth: '100vw',
        margin: 'auto',
        
    },
    fab: {
        borderRadius: '50px',
        background: 'linear - gradient(145deg, #f8f8f8, #d1d1d1)',
        boxShadow: '9px 9px 18px #9e9e9e, -4px -4px 16px #ffffff',
    },
});

function MainAppBar({inQueue, toggleQueueStatus}) {
    const classes = useStyles();
    const isInQueue = (inQueue) => {
        let color = "";
        let text = ""
        if(!inQueue){
            color = "primary";
            text = "In Queue"
        }
        return(
            <Fab className={classes.fab} color={color} variant="rounded" onClick={toggleQueueStatus}>
                <PersonAdd/>
                <Typography>{text}</Typography>
            </Fab>
        )
    };
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar style={{marginBottom: '20px'}}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        {isInQueue(inQueue)}
                    </Grid>
                    <Grid item>
                        <IconButton aria-label="Group">
                            <Group color="disabled" fontSize="large"/>    
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <Fab className={classes.fab} variant="rounded">
                            <Timelapse />
                        </Fab>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default MainAppBar;
