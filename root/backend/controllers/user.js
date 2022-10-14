
const UserSubmission = require('../models/userSubmission')

require('dotenv').config()

// sendgridMail.setApiKey(process.env.SENDGRID_API_KEY)
const Mailjet = require('node-mailjet');

exports.postSubmitForm = (req, res, next) => {
    console.log(req.body)
    const recipientEmail = req.body.recipientEmail
    const emailContent = req.body.emailContent
    const date = req.body.date
    const time = req.body.time
    const timezone = req.body.timezone

    console.log("postSubmitForm endpoint called!")
    
    const mailjet = Mailjet.apiConnect(
        process.env.REACT_APP_MAILJET_API_KEY,
        process.env.REACT_APP_MAILJET_API_SECRET,
    );

    const request = mailjet
                    .post("send", {'version': 'v3.1'})
                    .request({
                    "Messages":[
                        {
                        "From": {
                            "Email": "junpeng94@gmail.com",
                        },
                        "To": [
                            {
                            "Email": recipientEmail,
                            }
                        ],
                        "Subject": "Time for your mid day stretch!",
                        "HTMLPart": 
                            `
                            <p>Hi there, it is time for your daily mid day stretch. </p> 
                            <p> Take a stretch break!</p>
                            <br /> To rest is to walk further. 休息是为了走更长的路.`,
                        "CustomID": "stretchyourmuscles"
                        }
                    ]
                    })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })

    res.send("postSubmitForm endpoint called!")
    
}