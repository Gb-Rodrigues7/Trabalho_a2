require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/database');

const alunoRoutes = require('./routes/aluno.routes');
const professorRoutes = require('./routes/professor.routes');
const planoRoutes = require('./routes/plano.routes');
const pagamentoRoutes = require('./routes/pagamento.routes');
const treinoRoutes = require('./routes/treino.routes');
const exercicioRoutes = require('./routes/exercicio.routes');
const turmaRoutes = require('./routes/turma.routes');
const agendamentoRoutes = require('./routes/agendamento.routes');
const avaliacaoRoutes = require('./routes/avaliacao.routes');
const equipamentoRoutes = require('./routes/equipamento.routes');

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api/alunos', alunoRoutes);
app.use('/api/professores', professorRoutes);
app.use('/api/planos', planoRoutes);
app.use('/api/pagamentos', pagamentoRoutes);
app.use('/api/treinos', treinoRoutes);
app.use('/api/exercicios', exercicioRoutes);
app.use('/api/turmas', turmaRoutes);
app.use('/api/agendamentos', agendamentoRoutes);
app.use('/api/avaliacoes', avaliacaoRoutes);
app.use('/api/equipamentos', equipamentoRoutes);


app.get('/', (req, res) => res.json({ ok: true, env: process.env.NODE_ENV || 'development' }));

const PORT = process.env.PORT || 3000;


const { DB_USER, DB_PASS, DB_HOST, DB_NAME } = process.env;


if (!DB_USER || !DB_PASS || !DB_HOST || !DB_NAME) {
    console.error('As variáveis DB_USER, DB_PASS, DB_HOST e DB_NAME devem ser definidas no .env');
    process.exit(1);
}


const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

connectDB(MONGO_URI).then(() => {
    app.listen(PORT, () => console.log('Server running on port', PORT));
});