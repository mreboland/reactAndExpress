const express = require("express");
const router = express.Router();

router.route("/")
    .get((req, res) => {
        // 1. Respond with the array of jobs
        res.status(200).send({
            data: jobs
        })
    })

router.route("/add")
    .post((req, res) => {
        // 1. Grab the new job info from the request body
        // We will first need to destructure the different pieces of information that are coming from the request bod
        const { title, company, link } = req.body

        // 2. Push the job to our job array.
        // Push the new jon info into the array
        jobs.push({
            title: title,
            company: company,
            link: link
        });

        // 3. Respond with the updated jobs array.
        // Returning the jobs array as it has been updated
        res.status(200).send({
            data: jobs
        });
    });

// The above code introduced some endpoints that we can interact with from our front end. We need to switch to the front end to add some calls in so they can interact. We start in Jobs.js and JobForm.js which will make the calls to the endpoints that we just added.

const jobs = [];

module.exports = router;