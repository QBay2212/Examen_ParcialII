import { pool } from '../database'
// METODO OPTENER USUARIOS
export const getUsuarios = async (req, res) =>{
    try {//select *from fc_listar_usuario();
        const reponse = await pool.query('select * from fc_listar_usuario()');
        return res.status(200).json(reponse.rows);
    } catch (error) {
        return res.status(500).json('Error al listar Usuarios => '+error.message);
    }
};
// METODO CREAR USUARIOS
export const crearUsuarios = async (req, res) =>{
    try {
        const {username, password, idpersona, idrol} = req.body;
        await pool.query('select * from fc_create_usuario($1,$2,$3,$4)',[username, password, idpersona, idrol]);
        return res.status(200).json({
            message: 'Post registrado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al registrar Posts => '+error.message);
    }
};

