import React, { Component } from 'react'

import { Fab, Typography, AppBar, Toolbar, Grid } from '@material-ui/core';

import { Schedule, Timelapse, Group } from '@material-ui/icons';
export class MainAppBar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <Grid container justify="space-between">
                        <Grid item>
                            <Fab variant="rounded">
                                <Schedule />
                            </Fab>
                        </Grid>
                        <Grid item>
                            <Fab variant="extended">
                                <Group />
                                <Typography variant="h7">
                                    Counter
                                </Typography>
                            </Fab>
                        </Grid>
                        <Grid item>
                            <Fab variant="rounded">
                                <Timelapse />
                            </Fab>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        )
    }
}

export default MainAppBar
