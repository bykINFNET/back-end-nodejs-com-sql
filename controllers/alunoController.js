const Aluno = require('../models/Aluno');

const getAlunos = async (req, res) => {
    try {
        const alunos = await Aluno.findAll();

        res.json(alunos);
    }
    catch (error) {
        console.error(error);

        res.status(500).send('Server Error: "getAluno"');
    }
}

const addAluno = async (req, res) => {
    try {
        const {username, password, nameAluno, email, gender, birthday, phoneNumber, address} = req.body;

        const aluno = await Aluno.create({
            username, 
            password, 
            nameAluno, 
            email, 
            gender, 
            birthday, 
            phoneNumber, 
            address
        });
        
        res.json(aluno);
    }
    catch (error) {
        console.error(error);

        res.status(500).send('Server Error: "addAluno"');
    }
}

module.exports = {getAlunos, addAluno};