
const db = require('../models');

//Create one book

exports.createBook = async (req,res) => {

  try{
        let newBook = await db.Book.create(req.body);
        return res.status(200).json({
          message: 'Un nouveau book creee avec succes',
          newBook
        });

  } catch (err){
        return res.status(400).json({
          message: 'Oups! could not create yout book',
          error: err
    });
  }
};


// Get all books  :

exports.getAllbooks = async (req,res) => {
  try{
  //      let books = await db.Book.find();
  //      return res.status(200).json(books);
          let books = req.query
          ? await db.Book.find(req.query)
          : await db.Book.find();
    return res.status(200).json(books);

  } catch (err){
          return res.status(400).json({
          message: 'Oups! could not find the books',
          error: err
    });
  }
};


// Get one book

exports.getOnebook = async(req,res) => {
  try {
      let thisBook = await db.Book.findById(req.params.id);
      return res.status(200).json(thisBook);

    } catch (err){
            return res.status(400).json({
              message: 'Ayyy could not find this specific book',
              error:error
     });
   }
};


// Update one book


exports.updateOnebook = (req, res, next) => {

        db.Book.updateOne({ _id: req.params.id },
                          { ...req.body, _id: req.params.id })

               .then(() => res.status(200).json({ message: 'Yaay book bien modifie'}))
               .catch(err => res.status(400).json({
                  message: 'Oops could not modify this specific book',
                  error:err }));

  };


// Delete one book
exports.deleteOnebook = async(req,res) => {
  try {
      await db.Book.findByIdAndRemove(req.params.id);
      return res.status(200).json('Book deleted');
    } catch (err){
            return res.status(400).json({
              message: 'Oops could not delete this specific book',
              error:error
     });
   }
};
