const InvalidCredentialException = require('../../exceptions/invalid-credential-exception')
const UserRepository = require('../../repositories/user-repository')
const AuthService = require('../../services/auth-service')

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

        const accessToken = await AuthService.generateToken(payload)

        res.send({ user, ...{ accessToken } })
    }

    async register(req, res) {
        res.send('Register')
    }

}

module.exports = new AuthController()