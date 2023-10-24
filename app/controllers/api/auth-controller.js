const InvalidCredentialException = require('../../exceptions/invalid-credential-exception')
const UserRepository = require('../../repositories/user-repository')
const AuthService = require('../../services/auth-service')
const nodemailer = require('nodemailer')
const mailConfig = require('../../../config/mail')
const Mail = require('../../modules/mailer')

class AuthController {

    async login(req, res) {
        const { email, password } = req.body

        // const user = await User.findOne({
        //     where: {
        //         email
        //     }
        // })

        const user = await UserRepository.findByEmail(email)

        // if (!user)
        //     throw new InvalidCredentialException()

        if (!await AuthService.isPasswordAMatch(password, user.password))
            throw new InvalidCredentialException()

        const payload = { id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName }
        // const key = require('crypto').randomBytes(64).toString('hex')

        const tokens = await AuthService.generateTokens(payload)

        res.send({ user, ...tokens })
    }

    async register(req, res) {
        const { firstName, lastName, email, password } = req.body
        const data = { firstName, lastName, email, password }

        // const user = await UserRepository.create(data)
        // const tokens = await AuthService.generateTokens(data)

        // const transporter = nodemailer.createTransport({
        //     host: mailConfig.smtp.host,
        //     port: mailConfig.smtp.port,
        //     auth: mailConfig.smtp.auth
        // })

        // const message = {
        //     from: mailConfig.from,
        //     to: email,
        //     subject: 'Email verification',
        //     html: '<div><h1>Please verify your email!</h1><button>Verify email</button></div>'
        // }

        // await transporter.sendMail(message)

        await Mail.send('email-verification', message => {
            message
                .from(mailConfig.form)
                .to(email)
                .subject('Email verification')
                .with({
                    firstName, lastName, email
                })
        })

        res.send('Works')
    }

}

module.exports = new AuthController()