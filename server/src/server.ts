import express from 'express';

const app = express();

app.use(express.json());

// GET: Busca
// POST: Cria
// PUT: Edita
// DELETE: Remove

// Request Param: Parametros inseridos na rota
// Query Param: Parametros inseridos na rota, porém opcionais (filtro, paginação)
// Request Body: Paramentros para gerenciamento dos dados

const users = [
    'Diego', 
    'Cleiton',
    'Robson'
];

app.get('/users', (request, response) => {
    const search =  String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    // JSON
    response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);
    const user = users[id];
    response.json(user);
});

app.post('/users', (request, response) => {
    const data = request.body;

    const user = {
        name: data.name, 
        email: data.email
    };

    return response.json(user);
});

app.listen(3333);