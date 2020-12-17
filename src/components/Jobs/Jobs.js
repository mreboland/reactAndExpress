import React, { useState, useEffect } from 'react';
import JobForm from '../JobForm';
import JobCard from '../JobCard';
import axios from 'axios';
import shark from '../../assets/logo.png';
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Typography,
    CssBaseline,
    Grid
}
from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heroText: {
    clip: 'rect(0 0 0 0)',
    position: 'absolute'
  },
  heroSub: {
    position: 'relative',
    zIndex: '2',
    top: '270px',
    color: 'white',
    fontSize: '29px',
    letterSpacing: '1.5',
    fontWeight: 'bold'
  },
  heroContent: {
    padding: theme.spacing(7, 0, 24),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    backgroundColor: '#6999D2',
  },
  shark: {
    display: 'flex',
    justifyContent: 'center',
    zIndex: '1',
    '& img': {
      position: 'absolute',
      top: '40px',
      width: '230px',
    }
  },
}));

export default function Jobs() {
  const classes = useStyles();

  const [jobs, setJobs] = useState([]);

  const addJob = (title, company, link) => {
    const newJob = [...jobs, { title, company, link }];
    setJobs(newJob);
  }

  // Hooks are a new addition in React 16.8. They let you use state and other React features without writing a class.
  useEffect(() => {
    // const jobData = axios.get('http://localhost:3000/api/jobs');
    // jobData.then(results => {
    //   setJobs(results.data.data)
    // });
    // Make call to /api/jobs here
    const jobData = axios.get('http://localhost:3000/api/jobs');
    // We need to use another Hook to update our state, which is in the function setJobs (see line 52). This is very similar to this.setState() seen in traditional React.
    jobData.then(results => {
      setJobs(results.data.data)
    });
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <div className={classes.shark}>
          <img src={shark} alt="Jaws Shark"/>
        </div>
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography className={classes.heroText} component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              JAWBER
            </Typography>
            <Typography className={classes.heroSub} variant="h5" align="center" color="textSecondary" paragraph>
              THE HUNT BEGINS
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <JobForm addJob={addJob} />
          <Grid container spacing={4}>
            {jobs && jobs.map(job => (
              <Grid item key={job._id} xs={12} sm={6} md={4}>
                <JobCard title={job.title} company={job.company} link={job.link}/>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}