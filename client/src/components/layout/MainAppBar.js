import React, { useState } from 'react'
import ScrollTab from './ScrollTab'
import { Fab, Button, IconButton, Typography, AppBar, Toolbar, Grid } from '@material-ui/core';
import { Schedule, Timelapse, Group } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
        background: '#e8e8e8',
        // padding: '5px',
        paddingBottom: '16px',
        boxShadow: 'None',
        // overflowY: 'visible',
        maxWidth: '100vw'
    },
    fab: {
        borderRadius: '50px',
        background: 'linear - gradient(145deg, #f8f8f8, #d1d1d1)',
        boxShadow: '9px 9px 18px #9e9e9e, -4px -4px 16px #ffffff'
    },
});

function MainAppBar({metrics}) {
    const classes = useStyles();
    return (
        <AppBar className={classes.root} position="sticky">
            <Toolbar style={{marginBottom: '20px'}}>
                <Grid container justify="space-between" alignItems="center">
                    <Grid item>
                        <Fab className={classes.fab} variant="rounded">
                            <Schedule />
                        </Fab>
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
            <Toolbar>
                <ScrollTab metrics={metrics}/>
            </Toolbar>
        </AppBar>
    )
}

export default MainAppBar;
