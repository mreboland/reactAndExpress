import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography,
    Card,
    CardContent,
}
from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardContent: {
      flexGrow: 1,
      backgroundColor: '#376999',
      color: 'white'
    },
    jobTitle: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
    },
    companyTitle: {
      marginBottom: '15px'
    },
    link: {
      background: '#89edfb',
      padding: '5px 8px',
      display: 'inline',
      marginTop: '15px',

      '& a': {
        textDecoration: 'none',
        color: '#376999'
      }
    }
  }));

  export default function JobCard(props) {
    const classes = useStyles();

    return (
      <Card className={classes.card}>
          <CardContent className={classes.cardContent}>
              <Typography className={classes.jobTitle} gutterBottom variant="h5" component="h2">
                  {props.title}
              </Typography>
              <Typography className={classes.companyTitle}>
                  {props.company}
              </Typography>
              <Typography className={classes.link}>
                  <a href={props.link}>link</a>
              </Typography>
          </CardContent>
      </Card>
    )
  }