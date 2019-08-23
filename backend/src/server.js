const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const mongoose = require('mongoose');
const port = process.env.PORT || 3333;

require('dotenv/config')

// console.log(process.env.PORT);
// console.log(process.env.PASSWORD)
const app = express();

mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@omnistack-vlfdq.mongodb.net/test?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useFindAndModify: true
})


app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(port, '0.0.0.0', () => console.log(`App running on port ${port}`));