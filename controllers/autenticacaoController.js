const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const Aluno = require('../models/Aluno');


class AutenticacaoController {
    static async login(req, res) {
        try {
            const {username, password} = req.body;

            const aluno = await Aluno.findOne({ where: {username}});

            if(!aluno) {
                return res.status(401).json({message: 'Aluno does not exist'});
            }

            const compareResult = await bcrypt.compare(password, aluno.password);

            if (!compareResult) {
                return res.status(401).json({message: 'Invalid password'})
            }

            const token = jwt.sign({
                id: aluno.id,
                username: aluno.username
            }, 'secret_key');

            const nToken = jwt.sign({
                id: aluno.alunoId,
                username: aluno.username
            }, 'secret_key');

            return res.status(200).json({auth: true, token: token, refreshToken: nToken});
        }
        catch (error) {
            console.error(error);

            res.status(500).json({message: 'Server Error "login"'});
        }
    }    

    static async logout(req, res) {
        return res.json({auth: false, token: null});
    }

    static async renovaToken(req, res) {
        const newToken = req.body.refreshToken;

        if(!newToken) {
            return res.status(403).json({auth: false, message: 'Refreshing token failed'});
        }

        jwt.verify(newToken, 'secret_key2', (err, aluno) => {
            if (err) {
                return res.status(403).json({auth: false, message: 'Invalid refreshh token'});
            }

            const nToken = jwt.sign({
                id: aluno.alunoId,
                username: aluno.username
            }, 'secret_key');

            res.json({refreshToken: nToken});
        });
    }
}

module.exports = AutenticacaoController;