const express = require('express');
const db = require('./db/connect');
const router = require('./routes/apiroutes');

const fetchAndStoreData = require('./fetchData');
const app = express();
app.use(express.static("public"));
app.set('views', './views');
app.set('view engine', 'ejs');
app.use('/', router);
fetchAndStoreData()
    .then(() => console.log('Data stored in the database'))

app.listen(5000, () => {
    console.log('Server started on port 5000');
});