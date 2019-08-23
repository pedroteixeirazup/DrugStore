const Customer = require('../models/Customers');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const authConfig = require('../../config/auth');
const mailer = require('../../modules/mailer');

const salt = bcrypt.genSaltSync(10);

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret, {
        expiresIn: 86400, //1 dia de autenticação
    });
}

module.exports = {

    async forgot(req, res) {
        const { email } = req.body;

        try {
            const user = await Customer.findOne({ email });

            if (!user) 
                return res.status(400).send({ error: 'user not found' });
            
            const token = crypto.randomBytes(20).toString('hex');

            const now = new Date();
            now.setHours(now.getHours() + 1);

            await Customer.updateOne({_id: user._id}, {
                '$set': {
                    passwordResetToken: token,
                    passwordResetExpiress: now,
                }
            });

            mailer.sendMail({
                to: email,
                from: 'diego@rocketseat.com.br',
                template: 'auth/forgot_password',
                context: { token }
            }, (err) => {
                if (err) 
                    return res.status(400).send({ error: 'cannot send forgot password email' })

               return res.send();
            })

        } catch (err) {
            console.log(err);
            res.status(400).send({ error: 'error on forgot password, try again' });
        }

    },

    async reset_password(req, res) {
        const { email, token, password } = req.body;
        const hash = bcrypt.hashSync(password, salt);
        try {
            const user = await Customer.findOne({ email })
            .select('+passwordResetToken passwordResetExpiress');

            if (!user) 
                return res.status(400).send({ error: 'user not found' });

            if (token !== user.passwordResetToken)
                return res.status(400).send({ error: 'token invalid' });

            const now = new Date();

            if (now > user.passwordResetExpiress)
                return res.status(400).send({ error: 'token expired, generate a new one' });

            user.password = hash;

            await user.save();

            res.send();
        } catch (err) {
            res.status(400).send({ error: 'cannot reset password, try again' });
        }
    },

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