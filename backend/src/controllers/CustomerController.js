const Customer = require('../models/Customers');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

module.exports = {
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

        return res.json(customer);
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