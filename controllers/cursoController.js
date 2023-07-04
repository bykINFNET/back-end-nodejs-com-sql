const Curso = require('../models/Curso');

const getCursos = async (req, res) => {
    try {
        const cursos = await Curso.findAll();

        res.json(cursos);
    }
    catch (error) {
        console.error(error);

        res.status(500).send('Server Error: "getCursos"');
    }
}

const addCurso = async (req, res) => {
    try {
        const {nameCurso, description, startDate, maxParticipants, enrolledParticipants} = req.body;

        const curso = await Curso.create({
            nameCurso, 
            description, 
            startDate, 
            maxParticipants, 
            enrolledParticipants
        });
        
        res.json(curso);
    }
    catch (error) {
        console.error(error);

        res.status(500).send('Server Error: "addCurso"');
    }
}

module.exports = {getCursos, addCurso};