const Inscricao = require('../models/Inscricao');

const Curso = require('../models/Curso');


const getInscricoes = async (req, res) => {
    try {
        const inscricoes = await Inscricao.findAll();

        res.json(inscricoes);
    }
    catch (error) {
        console.error(error);

        res.status(500).send('Server Error: "getInscricoes"');
    }
}

const addInscricao = async (req, res) => {
    try {
        const {alunoId, cursoId} = req.body;

        const inscricao = await Inscricao.create({
            alunoId, 
            cursoId
        });
        
        const curso = await Curso.findByPk(cursoId);

        if (!curso) {
            return res.status(404).json({message: 'Curso not found'});
        }

        if (curso.maxParticipants === curso.enrolledParticipants) {
            return res.status(400).json({message: 'No remaining vacancy'})
        }

        curso.increment('enrolledParticipants');

        await curso.save()

        res.json(inscricao);
    }
    catch (error) {
        console.error(error);

        res.status(500).send('Server Error: "addInscricao"');
    }
}

module.exports = {getInscricoes, addInscricao};