import express from 'express'
import morgan from 'morgan'

import postRoutes from './routes/post.routes'
import rolesRoutes from './routes/roles.routes'
import personasRoutes from './routes/personas.routes'
import usuariosRoutes from './routes/usuarios.routes'


const app = express();
var cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/', (req,res) => {
    res.send('Bienvenido a Node JS...!');

});

app.use('/api/auth/post', postRoutes);
app.use('/api/auth/roles', rolesRoutes);
app.use('/api/auth/personas', personasRoutes);
app.use('/api/auth/usuarios', usuariosRoutes);

export default app;