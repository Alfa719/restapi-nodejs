const Mahasiswa = require("../models/mahasiswaModel");

const getAllMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll();
        res.json(mahasiswa);
    } catch (error) {
        res.json({message: error.message})
    }
}
const createMahasiswa = async (req, res) => {
    try {
        await Mahasiswa.create(req.body);
        res.json({
            'message': 'Mahasiswa created'
        });
    } catch (error) {
        res.json({message: error.message})
    }
}
const editMahasiswa = async (req, res) => {
    try {
        await Mahasiswa.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            'message': 'Mahasiswa updated'
        });
    } catch (error) {
        res.json({message: error.message})
    }
}
const getMahasiswaById = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findOne({
            where: {id: req.params.id}
        })
        res.json(mahasiswa);
    } catch (error) {
        res.json({message: error.message})
    }
}
const deleteMahasiswa = async (req, res) => {
    try {
        await Mahasiswa.destroy({where: {id: req.params.id}})
        res.json({
            'message': 'Mahasiswa deleted'
        });
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = { getAllMahasiswa, createMahasiswa, editMahasiswa, getMahasiswaById, deleteMahasiswa };