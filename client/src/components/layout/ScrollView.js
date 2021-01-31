import React, { useState } from 'react'
import MetricCard from '../MetricCard'

import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
    }
});

function ScrollView({metrics}) {
    const classes = useStyles();
    const items = metrics.map((metric) => {
        return (
            <Grid className={classes.root} item xs={10} s={10} md={5}>
                <MetricCard name={metric.name} value={metric.value} />
            </Grid>
        )
    })
    return(
        <React.Fragment>
            { items}
        </React.Fragment>
    )
}

export default ScrollView
