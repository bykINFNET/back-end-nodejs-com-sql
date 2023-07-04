


const VerificaJWT = (req, res, next) => {
    const token = req.body.token || req.query.token;
    const reftoken = req.body.reftoken || req.query.reftoken;

    if (!token) {
        return res.status(403).json({
            auth: false,
            message: 'No token provided'
        });
    }

    jwt.verify(token, 'secret_key', (err, aluno) => {
        if (err) {
            if (reftoken) {
                jwt.verify(reftoken, 'secret_key2', (err2, aluno2) => {
                    if (err2) {
                        return res.status(403).json({ 
                            auth: false, 
                            message: 'Invalid refresh token'
                        });
                    }
                
                    const newToken = jwt.sign({
                        id: aluno2.alunoId,
                        username: aluno2.username
                    }, 'secret_key');

                    req.aluno = aluno2;

                    next();
                });
            }
            else {
                return res.status(403).json({
                    auth: false,
                    message: 'Access token expired'
                });
            }
        }
        else {
            req.aluno = aluno;

            next();
        }
    });
}

module.exports = VerificaJWT;