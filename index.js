const path = require('path')
const express = require('express')

const notesRoutes = require('./routes/notes.js');
const notFoundPage = require('./controllers/notes').get404;

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(notesRoutes);

app.use('*', notFoundPage);



app.listen(port, () => console.log(`Example app listening on port ${port}!`));