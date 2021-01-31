import React from 'react'
import {Typography, Card, CardHeader, CardContent} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
    root:{
        borderRadius: '40px',
        background: 'linear - gradient(145deg, #f8f8f8, #d1d1d1)',
        boxShadow: '9px 9px 18px #9e9e9e, -9px -9px 18px #ffffff',
        padding: '20px 5px'
    }
});
export default function MetricCard({name , value}){
    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root}>
                <CardContent>
                    <CardHeader 
                        title={name}
                        titleTypographyProps={{variant: 'h5'}}
                    />
                        
                    <Typography variant="h2" align="center">
                        {value}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
