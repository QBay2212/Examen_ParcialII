import { pool } from '../database'
// METODO OPTENER POST
export const getPost = async (req, res) =>{
    try {//select *from fc_listar_post();
        const reponse = await pool.query('select * from fc_listar_post()');
        return res.status(200).json(reponse.rows);
    } catch (error) {
        return res.status(500).json('Error al listar Posts => '+error.message);
    }
};
// METODO OBTENER POST POR ID
export const getPostId = async (req, res) =>{
    try {
        const id = parseInt(req.params.id);
        const reponse = await pool.query('select * from fc_listar_post_id($1)',[id]);
        return res.status(200).json(reponse.rows);
    } catch (error) {
        return res.status(500).json('Error al listar PostsId => '+error.message);
    }
};
// METODO CREAR POST
export const crearPost = async (req, res) =>{
    try {
        const {titulo, descripcion} = req.body;
        await pool.query('select * from fc_create_post($1, $2)',[titulo, descripcion]);
        return res.status(200).json({
            message: 'Post registrado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al registrar Posts => '+error.message);
    }
};
// METODO ACTUALIZAR POST
export const updatePost = async (req, res) =>{
    try {
        const id = parseInt(req.params.id);
        const {titulo, descripcion} = req.body;
        await pool.query('select * from fc_update_post($1,$2,$3)',[titulo, descripcion, id]);
        return res.status(200).json({
            message: 'Post modificado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al modificar Posts => '+error.message);
    }
};
// METODO BORRAR POST
export const deletePost = async (req, res) =>{
    try {
        const id = parseInt(req.params.id);
        await pool.query('select fc_delete_post($1)',[id]);
        return res.status(200).json({
            message: 'Post eliminado correctamente'
        });
    } catch (error) {
        return res.status(500).json('Error al eliminar Posts => '+error.message);
    }
};