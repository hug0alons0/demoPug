const router = require('express').Router();
const pages = require('./pages')

router.get('/', pages.home)
router.get('/about', pages.about)
router.get('/contact/', pages.contact)
router.get('/mission', pages.mission)
router.get('/location', pages.location)
router.get('*', pages.home)

module.exports = router;