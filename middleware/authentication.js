
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const { UnauthenticatedError } = require('../errors')

const auth = async (req, res, next) => {
    // check header 
    console.log(req.headers.authorization);
    const authHeader = req.headers.authorization
    if(!authHeader || !authHeader.startsWith('Bearer')){
        throw new UnauthenticatedError('Authenticationn invalid')
    }
    const token = authHeader.split(' ')[1]

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        console.log(payload)
        // atttached the user to the job routes 
        req.user = {userId:payload.userId, name: payload.name}
        next()
    } catch (error) {
        throw new UnauthenticatedError('Authenticationn not valid')
    }
}
module.exports = auth