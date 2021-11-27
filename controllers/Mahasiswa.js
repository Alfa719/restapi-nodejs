const Mahasiswa = require("../models/mahasiswaModel");

const getAllMahasiswa = async (req, res) => {
    try {
        const mahasiswa = await Mahasiswa.findAll();
        res.json(mahasiswa);
    } catch (error) {
        res.json({message: error.message})
    }
}

module.exports = { getAllMahasiswa };