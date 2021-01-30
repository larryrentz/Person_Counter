import React, { Component } from 'react'
import MetricCard from '../MetricCard'

export class ScrollView extends Component {
    render() {
        
        return (
            <div>
                <Grid container>
                    <MetricCard data={this.props.metrics.customerCount}/>
                </Grid>
            </div>
        )
    }
}

export default ScrollView
