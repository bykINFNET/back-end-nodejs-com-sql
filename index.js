// importando express
const express = require('express');

// importando modulo de conexão ao banco de dados
const conn = require('./database/conn');

//
const jwt = require('jsonwebtoken');

const app = express();

// Routes
const alunoRoutes = require('./routes/alunoRoutes');

const cursoRoutes = require('./routes/cursoRoutes');

const inscricaoRoutes = require('./routes/inscricaoRoutes');

const autenticacaoRoutes = require('./routes/autenticacaoRoutes');


// Middleware
const verifyJWT = require('./middleware/autenticacaoMiddleWare');

//
app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());



//
app.use('/alunos', verifyJWT, alunoRoutes);

app.use('/inscricoes', verifyJWT, inscricaoRoutes);

app.use('/cursos', verifyJWT, cursoRoutes);

//
app.use('/login', autenticacaoRoutes);

app.use('/logout', autenticacaoRoutes);


//
conn.sync({force: false})
.then(() => {
    console.log('sync OK');

    app.listen(3333, () => {
        console.log('Server starting')
    });
})
.catch ((error) => {
    console.error('Error sync:', error);
});