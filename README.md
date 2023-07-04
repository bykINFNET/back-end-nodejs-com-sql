# back-end-nodejs-com-sql
Projeto da disciplina Back-End Node.JS com SQL do curso Desenvolvimento Full Stack (Infnet)

Exemplo para popular a tabela de Curso (MariaDB)

insert into curso (nameCurso, description, startDate, maxParticipants, enrolledParticipants, createdAt, updatedAt)
values 
	('Front-end com React', 'Introducao a React', "2023-02-01", 50, 0, "2023-02-01", "2023-02-01"),
	('Projeto de Interfaces com React', 'Programação de interface com a React', "2023-02-01", 50, 0, "2023-02-01", "2023-02-01"),
	('Back-end com Express & Node.JS', 'Desenvolvimento Back-end com Express e Node.JS', "2023-08-01", 40, 0, "2023-02-01", "2023-02-01"),
	('Back-end Node.JS com SQL', 'Desenvolvimento Back-end com Node.JS e SQL', "2023-08-01", 40, 0, "2023-02-01", "2023-02-01");
