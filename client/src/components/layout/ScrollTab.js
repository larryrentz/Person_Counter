import React from 'react';
// import PropTypes from 'prop-types';

import { AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '50px',
        background: '#e8e8e8',
        boxShadow: '9px 9px 18px #9e9e9e, -4px -4px 16px #ffffff',
        overflow: 'hidden',
        margin: '10px auto 12px auto',
        maxWidth: '90vw',
        position: 'static'
        
    },
}));

export default function ScrollTab({metrics}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <AppBar className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <Tab label="Top" href="#top"></Tab>
                <Tab label="Join Queue" href="#form"></Tab>
                {metrics.map((metric) => {
                    return (
                        <Tab label={metric.name} />
                    )
                })}

            </Tabs>
        </AppBar>
    );
}