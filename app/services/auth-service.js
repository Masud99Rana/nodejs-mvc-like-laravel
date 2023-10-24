const bcrypt = require('bcrypt')
const Tokenizer = require('../modules/tokenizer')

class AuthService {

    async isPasswordAMatch(attempted, original) {
        return await bcrypt.compare(attempted, original)
    }

    async generateTokens(payload) {
        // return jwt.sign(payload, appKey, { expiresIn: tokenExpiresIn })
        return {
            accessToken: Tokenizer.generateAccessToken(payload),
            refreshToken: Tokenizer.generateRefreshToken()
        }
    }

}

module.exports = new AuthService()