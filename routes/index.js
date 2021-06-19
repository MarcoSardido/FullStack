const express = require('express');
const router = express.Router();

// TO GET THE ROUTE
router.get('/', (req, res) => {
    res.render('index');
});

module.exports = router;