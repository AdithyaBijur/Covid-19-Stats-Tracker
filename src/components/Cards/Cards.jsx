import React from 'react';
import {Card,CardContent,Typography,Grid} from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'
const Cards=({data:{total,active,recovered,deaths}})=>{
    if(!active)
    {
        return ("Loading")
    }
    //console.log(data)
    return (
        <div className={styles.container}>
<Grid container spacing={3} justify="center">
<Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.total)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Total Cases</Typography>
            <Typography variant="h5">
                <CountUp
                start={0}
                end={total}
                duration={2}
                seperator=","
                />
            </Typography>
            <Typography variant="body2">Number of Confirmed Cases</Typography>
        </CardContent>
    </Grid>
    <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.active)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Active Cases</Typography>
            <Typography variant="h5">
                <CountUp
                start={0}
                end={active}
                duration={2}
                seperator=","
                />
            </Typography>
            <Typography variant="body2">Number of Active Cases</Typography>
        </CardContent>
    </Grid>
    <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.recovered)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
            <Typography variant="h5">  <CountUp
                start={0}
                end={recovered}
                duration={2}
                seperator=','
                /></Typography>
            <Typography variant="body2">Number of Recovered</Typography>
        </CardContent>
    </Grid>
    <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.death)}>
        <CardContent>
            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
            <Typography variant="h5">  <CountUp
                start={0}
                end={deaths}
                duration={2}
                seperator=","
                /></Typography>
            <Typography variant="body2">Number of Deaths</Typography>
        </CardContent>
    </Grid>
</Grid>
        </div>
    )
}

export default Cards;