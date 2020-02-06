
const mongoose = require ('mongoose');


const bookSchema = new mongoose.Schema({
  name: {
    type : String,
    required : true,
    minLength: 3,
    maxLength:300
  },

  author: {
    type : String,
    required : true,
    minLength: 10,
    maxLength:400
  },

categories:{
  type: [String],
  required: true,
  enum:['sf','fantasy','polar','thriller','novel','marketing','business','non-fiction','fiction']
},

stock: {
  type: Number,
  required: true,
  defaults:0,
  min:0
},

publishDate:{
  type:Date,
  required: false,
  defaults:new Date()
},

isBestSeller:{
  type:Boolean,
  required: false,
  defaults:false
},

});


// Model
const Book = mongoose.model('Book', bookSchema);


//Export
module.exports = Book;
