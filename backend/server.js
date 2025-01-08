const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Routes
const reservationRoutes = require('./routes/reservations');
app.use('/api/reservations', reservationRoutes);
app.get('/', (req,res) => {
    res.send('Test');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
