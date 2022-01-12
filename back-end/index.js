const express = require('express');
const cors = require('cors');
const { movies } = require('./data/movies');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.send(movies);
})

app.post('/create', (request, response)=> {
    console.log(request.body);
})

app.listen('3333', () => {
    console.log('server started at localhost:3333');
})