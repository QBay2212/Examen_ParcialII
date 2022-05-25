import { pool } from '../database'
// METODO OPTENER ROLES
export const getRoles = async (req, res) =>{
    try {//select *from fc_listar_rol();
        const reponse = await pool.query('select * from fc_listar_rol()');
        return res.status(200).json(reponse.rows);
    } catch (error) {
        return res.status(500).json('Error al listar Roles => '+error.message);
    }
};
// METODO OBTENER ROLES POR ID
export const getRolesId = async (req, res) =>{
    try {
        const id = parseInt(req.params.id);
        const reponse = await pool.query('select * from fc_listar_rol_id($1)',[id]);
        return res.status(200).json(reponse.rows);
    } catch (error) {
        return res.status(500).json('Error al listar RolesId => '+error.message);
    }
};
// METODO CREAR ROLES
export const crearRoles = async (req, res) =>{
    try {
        const {nombre} = req.body;
        await pool.query('select * from fc_create_rol($1)',[nombre]);
        return res.status(200).json({
            message: 'Rol registrado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al registrar Rol => '+error.message);
    }
};
// METODO ACTUALIZAR ROLES
export const updateRoles = async (req, res) =>{
    try {
        const id = parseInt(req.params.id);
        const {nombre, estado} = req.body;
        await pool.query('select * fc_update_rol($1,$2,$3)',[nombre, estado, id]);
        return res.status(200).json({
            message: 'Rol modificado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al modificar Rol => '+error.message);
    }
};
// METODO BORRAR ROLES
export const deleteRoles = async (req, res) =>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select * from fc_delete_rol($1)',[id]);
        return res.status(200).json({
            message: 'Rol eliminado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al eliminar Rol => '+error.message);
    }
};