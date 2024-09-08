
const express = require('express');
const db = require('./config/dbConfig'); 
const dotenv = require('dotenv');
const logger = require('./middlewares/logger');  
const errorHandler = require('./middlewares/errorHandler');

dotenv.config();  

const app = express();
const PORT = process.env.PORT || 5001;  

db.connect((err) => {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected to the database');
});


app.use(logger);  
app.use(express.json());  


app.use('/api/courses', require('./routes/courseRoute'));
app.use('/api/tests', require('./routes/testRoute'));  
app.use('/api/users', require('./routes/userRoute'));
app.use('/api/reviews', require('./routes/reviewRoute'));

app.use(errorHandler); 


app.listen(PORT, () => { 
    console.log(`Server started on port ${PORT}`);
});