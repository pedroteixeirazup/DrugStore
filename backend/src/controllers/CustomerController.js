const Customer = require('../models/Customers');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');

const salt = bcrypt.genSaltSync(10);

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400, //1 dia de autenticação
    });
}

module.exports = {

    async login(req, res) {
        const { email, password } = req.body;

        const user = await Customer.findOne({ email }).select('+password');

        if (!user) 
            return res.status(400).json({ error: 'user not found'});
        
        if (!await bcrypt.compare(password, user.password))
            return res.status(400).json({ error: 'invalid password'});

        user.password = undefined;

        res.send({ 
            user, 
            token: generateToken({id: user._id})
        });
    },

    async store(req, res) {
        const { name, username, email, password, confirm } = req.body;
        const hash = bcrypt.hashSync(password, salt);

        const usernameExists = await Customer.findOne({ username: username });
        const emailExists = await Customer.findOne({ email: email });

        if (usernameExists) {
            return res.status(400).json({ error: "username in use"});
        }
        if (emailExists) {
            return res.status(400).json({ error: "email in use"});
        }

        if (confirm !== password)
            return res.status(400).json({ error: "confirm your password correctly"});


        const customer = await Customer.create({
            name,
            username,
            email,
            password: hash
        });

        customer.password = undefined;

        return res.json({ 
            customer,
             token: generateToken({id: customer._id}),
        });
    },

    async index(req, res) {
        const customers = await Customer.find();

        if (!customers) {
            return res.stats(404).json({ error: 'do not have customers'});
        }

        return res.json(customers);
    },

    async update(req, res) {
        const customer = await Customer.findById({_id: req.params.id});

        if(!customer){
            res.status(500).json('customer not finded');
        }

        await Customer.updateOne({_id: req.params.id}, req.body);

        return res.status(200).json(message = 'updated');
    },

    async delete(req, res) {
        const customer = await Customer.findOne({_id: req.params.id});

        if(!customer){
            res.status(500).json('customer not finded');
        }

        await Customer.deleteOne({_id: req.params.id});

        return res.status(200).json(message = 'deleted');

    }
}