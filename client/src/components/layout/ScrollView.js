import React, { useState } from 'react'
import MetricCard from '../MetricCard'
import QueueForm from './QueueForm';
import FadeInSection from './FadeInSection'

import { Grid, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root: {
    }
});

function ScrollView({metrics, submitForm}) {
    const classes = useStyles();
    const items = metrics.map((metric) => {
        return (
            <Grid item className={classes.root} item xs={10} s={10} md={5}>
                <MetricCard name={metric.name} value={metric.value} />
            </Grid>
        )
    })
    return(
        <React.Fragment>
            {items}
            <Grid item className={classes.root} xs={10} s={10} md={10}>

                <QueueForm id="Form" submitForm={submitForm}/>

            </Grid>
            
        </React.Fragment>
    )
}

export default ScrollView
