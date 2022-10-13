
const UserSubmission = require('../models/userSubmission')

const sendgridMail = require('@sendgrid/mail');

// sendgridMail.setApiKey(process.env.SENDGRID_API_KEY)

exports.postSubmitForm = (req, res, next) => {
    console.log(req.body)
    console.log("postSubmitForm endpoint called!")
    res.send("postSubmitForm endpoint called!")
    
    // const emailContent = {
    //     to: userEmail,
    //     from: 'mfachengdu@gmail.com', // Change to your verified sender
    //     cc: coveringEmail,
    //     subject: `Leave Application from ${startDate} to ${endDate}`,
    //     html: `
    //         <div>
    //             <p>Hi ${userEmail}, you applied ${numOfDaysTaken} days of <strong>${leaveType}</strong> from ${startDate} to ${endDate}</p> 
    //             <p>You will receive an email confirmation once your reporting officer reviews the request, thank you.</p>
    //         </div>
    //         <div>
    //             <p>您好 ${userEmail}，您在${startDate}至${endDate}申请了${numOfDaysTaken}天<strong>${leaveType}</strong></p> 
    //             <p>一旦您的主管审核，您将收到一封邮件，谢谢。</p>
    //         </div>
    //     `
    //     }
    //     sendgridMail
    //         .send(emailContent)
    //         .then(() => {
    //             // res.status(200).send("email sent to user and covering")
    //             console.log('email sent to user and covering')
    //         })
    //         .catch((error) => {
    //             console.error("sendgrid error when sending to user/covering: ", error)
    //             console.log("err: ", error.response.body)
    //         })
}