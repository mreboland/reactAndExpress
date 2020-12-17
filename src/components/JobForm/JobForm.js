import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {
    Button,
    TextField,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle }
from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heroButtons: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(5)
  },
  jobButton: {
    background: '#376999',
    borderRadius: '0',
    color: 'white',
    borderColor: 'transparent',
    fontWeight: 'bold',
    textTransform: 'lowercase'
  },
}));

function FormDialog({ addJob }) {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const [jobTitle, setJobTitle] = useState(null);
    const [jobCompany, setJobCompany] = useState(null);
    const [jobLink, setJobLink] = useState(null);

    function handleClickOpen() {
      setOpen(true);
    }

    function handleClose() {
      setOpen(false);
    }

    function handleAddJob() {
      // const jobData = axios.post('http://localhost:3000/api/jobs/add', {
      //   title: jobTitle,
      //   company: jobCompany,
      //   link: jobLink
      // });
      // setOpen(false);
      // jobData.then(results => {
      //   addJob(results.data.data[0].title, results.data.data[0].company, results.data.data[0].link)
      //   setOpen(false)
      // });

      // Make request to add job here
      // this form is where we are adding in jobs through the front end. This will be calling our add endpoint in jobRoutes, and will allow us to add new jobs into our array.
      const jobData = axios.post('http://localhost:3000/api/jobs/add', {
        title: jobTitle,
        company: jobCompany,
        link: jobLink
      });
      jobData.then(results => {
        console.log(results);
        addJob(results.data.data[0].title, results.data.data[0].company, results.data.data[0].link)
        setOpen(false)
      });
    }

    return (
      <div>
        <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
            <Grid item>
                <Button className={classes.jobButton}variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add Job
                </Button>
            </Grid>
            </Grid>
        </div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Job</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add the details of the job that you applied for!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Job Title"
              type="name"
              onChange={(e) => setJobTitle(e.target.value)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="company"
              label="Company"
              type="name"
              onChange={(e) => setJobCompany(e.target.value)}
              fullWidth
            />
            <TextField
              margin="dense"
              id="link"
              label="Link"
              type="name"
              onChange={(e) => setJobLink(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleAddJob} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }

  export default FormDialog;