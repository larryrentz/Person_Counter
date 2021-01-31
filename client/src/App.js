import './App.css';
import React, { useState } from 'react';
import MainAppBar from './components/layout/MainAppBar';
import ScrollView from './components/layout/ScrollView';
import ScrollTab from './components/layout/ScrollTab'

import { Container, Box, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
const useStyles = makeStyles({
  root: {
    background: '#e8e8e8',
  },
  content:{
    background: '#fff',
    borderRadius: '15px',
    gridGap: '64px',
    padding: '32px 0'
  },
  mainAppBar: {
    
  },
  navBar: {
    
  }
});

function App() {
  const [state, setState] = useState({
    metrics: [
      {
        name: 'Capacity',
        value: 5
      },
      {
        name: 'Customer Count',
        value: 2
      },
      {
        name: 'Number in Queue',
        value: 13
      },
      {
        name: 'Number in Queue',
        value: 13
      },
      {
        name: 'Number in Queue',
        value: 13
      },
      {
        name: 'Number in Queue',
        value: 13
      },
      {
        name: 'Number in Queue',
        value: 13
      },
      {
        name: 'Number in Queue',
        value: 13
      },
      {
        name: 'Number in Queue',
        value: 13
      },
      {
        name: 'Number in Queue',
        value: 13
      }
    ],
  })
  const classes = useStyles();
  return(
    <div className="App" style={{ background: '#e8e8e8'}}>
      <Grid container className={classes.root} direction="column">
        <Grid item>
          <MainAppBar id="top" className={classes.mainAppBar} metrics={state.metrics}/>
        </Grid>
        <Grid item>
          <ScrollTab metrics={state.metrics}/>
        </Grid>
        <Grid container item className={classes.content} alignItems="stretch" justify="center">
          <ScrollView className={classes.navBar} metrics={state.metrics}/>
        </Grid>
      </Grid>
    </div>
  )
}

export default App;
