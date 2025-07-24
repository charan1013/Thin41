const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const snippetRoutes = require('./routes/snippetRoutes');

const app = express();

app.use('/users/:userId/snippets', snippetRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("mongodb connected");
        app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
    })
    .catch((err) => console.log(err));
