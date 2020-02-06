
const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/bookdb',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
})

.then(() => console.log('connected to books DB'))  // s'assurer que ca marche
.catch(err => console.log(`Error connecting to db : ${err}`)); // si ca marche pas



// Exporting all models
module.exports.Book = require('./book');
