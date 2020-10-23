import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const loading = 'loading...';
  if (!confirmed) {
    return (
      <div className={styles.container}>
        <Grid container spacing={3} justify='center'>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.infected)}
          >
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Infected
              </Typography>
              <Typography variant='h5'>{loading}</Typography>
              <Typography color='textSecondary'>{loading}</Typography>
              <Typography variant='body2'>
                Number of Active cases of covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.recovered)}
          >
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Recovered
              </Typography>
              <Typography variant='h5'>{loading}</Typography>
              <Typography color='textSecondary'>{loading} </Typography>
              <Typography variant='body2'>
                Number of Recoveries from covid-19
              </Typography>
            </CardContent>
          </Grid>
          <Grid
            item
            component={Card}
            xs={12}
            md={3}
            className={cx(styles.card, styles.deaths)}
          >
            <CardContent>
              <Typography color='textSecondary' gutterBottom>
                Deaths
              </Typography>
              <Typography variant='h5'>{loading}</Typography>
              <Typography color='textSecondary'>{loading} </Typography>
              <Typography variant='body2'>
                Number of Deaths by covid-19
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography
              color='textSecondary'
              gutterBottom
              style={{ fontWeight: 'bold' }}
            >
              Infected
            </Typography>
            <Typography variant='h5' style={{ color: 'blue' }}>
              <CountUp
                start={0}
                end={confirmed.value}
                duration={2.3}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Active cases of covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography
              color='textSecondary'
              gutterBottom
              style={{ fontWeight: 'bold' }}
            >
              Recovered
            </Typography>
            <Typography variant='h5' style={{ color: 'green' }}>
              <CountUp
                start={0}
                end={recovered.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Recoveries from covid-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography
              color='textSecondary'
              gutterBottom
              style={{ fontWeight: 'bold' }}
            >
              Deaths
            </Typography>
            <Typography variant='h5' style={{ color: 'red' }}>
              <CountUp
                start={0}
                end={deaths.value}
                duration={2.5}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2'>
              Number of Deaths caused by covid-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Cards;
