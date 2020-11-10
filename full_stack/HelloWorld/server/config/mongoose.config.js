const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/crmdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Established connection to database'))
.catch(err => console.log('Something went wrong connecting to the database', err));