const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSubmissionSchema = new Schema({
    emailContent: {
        type: String,
        required: true
    },
    recipientEmail: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: Number,
        required: true
    },
    timezone: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('UserSubmission', userSubmissionSchema)