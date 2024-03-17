const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('All shelters')
});

router.post('/', (req, res) => {
    res.send('Create a new shelter')
});

router.get('/:id', (req, res) => {
    res.send('View shelter')
});

router.get('/:id/edit', (req, res) => {
    res.send('Edit shelter')
});

module.exports = router;