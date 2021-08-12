require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const route = require('./routes');

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@netflix.jwlim.mongodb.net/netflix?retryWrites=true&w=majority`;

const connectToDatabase = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        console.log('Database connected');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

connectToDatabase();

const app = express();
app.use(express.json());
app.use(cors());

route(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
