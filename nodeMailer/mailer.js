const router = require("express").Router();
const nodemailer = require("nodemailer");
const generateKey = require("../apiKeyGenerator/keyCreator");
require('dotenv').load()
const apiController = require("../controllers/apiUsersController")




var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: process.env.Email_User,
        pass: process.env.Email_Pass
    }
});




router.route("/")
    .post((req, res) => {
        // console.log("in the api key request")
        // console.log(req.body)

        // let key = generateKey.makeKey()
        // console.log("look here")
        // console.log(key);
        let userEmail = req.body.email;
        console.log(userEmail);

        generateKey.makeKey()
            .then(result => {
                console.log("inside apikey promise")
                console.log(result)

                // add new key and user to collection
                let data = {
                    email: userEmail,
                    key: result
                }

                apiController.insertNewApi(data)
                    .then(dbresults => {
                        console.log("this is the return for create new api entry")
                        console.log(dbresults)

                        // email the user their new info
                        let mailOptions = {
                            from: '"API response" <bjsapi@outlook.com>', // sender address
                            to: userEmail, // list of receivers
                            subject: "API key", // Subject line
                            text: `Thank you for signing up for the special API.

                                    Your user name is: ${userEmail}
                                    Your secret API key is: ${result}

                                    Place this key in a .env file to prevent 
                                    unauthorized use. 

                                    Thank you, 
                                    BJ Smith.

                                    Happy Coding!`, // plain text body
                            // html: "<b>Hello world?</b>" // html body
                        };

                        // transporter.sendMail(mailOptions, function (error, info) {
                        //     if (error) {

                        //         res.json("it messed up....")
                        //         return console.log(error);
                        //     }

                        //     console.log("Message sent: %s", info.messageId);
                        //     res.json("email sent")
                        // })

                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))

    });

module.exports = router;















