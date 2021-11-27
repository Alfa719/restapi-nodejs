const express = require('express');
const { getAllMahasiswa } = require('../controllers/mahasiswa');

const router = express.Router();

// Mahasiswa route
router.get('/', getAllMahasiswa);

module.exports = router;