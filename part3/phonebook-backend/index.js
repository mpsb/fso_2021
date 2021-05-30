const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = 3001;  

app.use(cors());
app.use(express.json())

// middleware
morgan.token('jsonBody', (req, res) => JSON.stringify(req.body));

const logger = morgan(':method :url :status :res[content-length] - :response-time ms :req[header] :jsonBody');

app.use(logger);

let persons = [
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    },
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "date": "2021-05-16T02:44:24.029Z",
      "id": 5
    }
];

app.get('/', (req, res) => {
    res.send('<h1>Welcome.</h1>');
});

app.get('/api/persons', (req, res) => {
    res.json(persons);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(person => person.id === id);

    if(person) {
        res.json(person);
    }
    else {
        res.status(404).end();
    }
});

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people.</p>
    <br>
    ${new Date()}`);
});

app.post('/api/persons', (req, res, next) => {
    const body = req.body;
    const id = Math.floor(Math.random()*10000);
    const new_person = {
        "name": "Ada Lovelace",
        "number": "12345678",
        "id": id
    };

    const checkIfNameExists = persons.filter(person => {
        return person.name === new_person.name
    });

    if(new_person.name === '' || new_person.number === '') {
        res.send({error: "Name or number is missing.", new_person});
    } 
    else if(checkIfNameExists) {
        res.send(JSON.stringify({error: 'Name must be unique', new_person}));
    }
    else {
        persons.push(new_person);
        res.send('New person added.', new_person);
    }
});

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    persons = persons.filter(person => person.id !== id);

    res.status(204).end();
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});