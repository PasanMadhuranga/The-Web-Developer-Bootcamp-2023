const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('GET handler for /dogs route.');
});

router.get("/:id", (req, res) => {
  res.send("Show Dog");
});

router.get("/:id/edit", (req, res) => {
  res.send("Edit Dog");
});

router.post('/', (req, res) => {
    res.send('POST handler for /dogs route.');
});

module.exports = router;

