import React from 'react';
// import PropTypes from 'prop-types';

import { AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

// function a11yProps(index) {
//     return {
//         id: `scrollable-auto-tab-${index}`,
//         'aria-controls': `scrollable-auto-tabpanel-${index}`,
//     };
// }

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        borderRadius: '50px',
        background: 'linear - gradient(145deg, #f8f8f8, #d1d1d1)',
        boxShadow: '9px 9px 18px #9e9e9e, -4px -4px 16px #ffffff',
        overflow: 'hidden',
        marginBottom: '0',
    },
}));

export default function ScrollTab({metrics}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent">
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
                    {metrics.map((metric) => {
                        return(
                            <Tab label={metric.name}/>
                        )
                    })}
                    
                </Tabs>
            </AppBar>
        </div>
    );
}