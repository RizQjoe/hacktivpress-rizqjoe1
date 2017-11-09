
const express = require('express')
const router = express.Router()
const controller = require('../controllers/articleController')
const middleware = require('../helpers/auth')

router.get('/', controller.getAllArticles)
router.get('/:id', controller.getOneArticle)
router.post('/', controller.postArticle)
router.delete('/:id', middleware.auth, controller.deleteArticle)
router.put('/:id', middleware.auth, controller.editArticle)
router.get('/category/:category', controller.getByCategory)
router.get('/author/:author', controller.getByAuthor)

module.exports = router
