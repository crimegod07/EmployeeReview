
const mongoose = require('mongoose');

// connect from mongodb
//  mongoose.connect('mongodb://localhost:27017/Review-System');
const url= "mongodb+srv://deepakdb:deepakdb@atlascluster.okcc0yz.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

// aquire connection if it is succesful
const db = mongoose.connection;

// error
db.on('error', console.error.bind(console, 'error connecting to db'));

// up and running then print the message
db.once('open', function(){
    console.log("successfully connected to database!");
});

module.exports = db;