'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: String,
    company: String,
    link: String
});

module.exports = mongoose.model('Job', jobSchema);