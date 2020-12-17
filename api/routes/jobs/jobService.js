const Job = require('./jobModel');

exports.listJobs = async () => {
    try {
        const jobs = await Job.find({});
        return jobs;
    } catch (e) {
        throw e;
    }
}