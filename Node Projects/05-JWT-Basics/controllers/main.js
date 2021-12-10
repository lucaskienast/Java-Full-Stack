// check username, password in post(login) request
// if both exist then create a new JWT
// send back to front end so front end can access it
// and send another request
// setup auth so only requests with JWT can access dashboard

const jwt = require("jsonwebtoken");
const {BadRequestError} = require('../errors');

const login = async (req, res) => {
    // Options for auth layers
    // mongoose validation / MongoDB validation
    // Joi package
    // check existence in controllers
    const {username, password} = req.body;
    if (!username || !password) {
        throw new BadRequestError('Please provide email and password');
    }
    // do not put confidential info in the jwt token
    // eg. passwords
    // normally send back the user id
    // try to keep payload small for better user experience
    //use long & complex & unguessable secret values in .env
    const id = new Date().getDate();
    const token = jwt.sign(
        {id, username}, 
        process.env.JWT_SECRET, 
        {expiresIn: '30d'}
    );
    res.status(200).json({
        msg: 'User created',
        token
    });
};

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random()*100);
    res.status(200).json({
        msg: `Hello, ${req.user.username}`,
        secret: `Your authorized data is ${luckyNumber}`
    });
};

module.exports = {
    login,
    dashboard,
}