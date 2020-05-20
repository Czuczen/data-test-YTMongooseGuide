const mongoose = require("mongoose");

var url = 'mongodb://localhost:27017/mongoose-test';

mongoose.connect( url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
