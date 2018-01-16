const router = require('express').Router();
const articleRoutes = require('./recipes');

// Article routes
router.use('/saved', recipeRoutes);

module.exports = router;
