const express = require('express');
const { getAllMahasiswa, createMahasiswa, editMahasiswa, getMahasiswaById, deleteMahasiswa } = require('../controllers/mahasiswa');

const router = express.Router();

// Mahasiswa route
router.get('/', getAllMahasiswa);
router.post('/', createMahasiswa);
router.patch('/:id', editMahasiswa);
router.get('/:id', getMahasiswaById);
router.delete('/:id', deleteMahasiswa);

module.exports = router;