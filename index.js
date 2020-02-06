
const express = require('express');
const app = express ();
const port = process.env.PORT || 3000;
const booksRoutes = require('./routes/book');


// Middleware
app.use(express.json());




// First route
app.get('/', (req,res) => {
          res.send('Welcome to the best online library');
        });

app.use('/api/books', booksRoutes);  // une porte d'entree


app.listen(port, () => {
        console.log(`Listening to books on port ${port}`);
      });
