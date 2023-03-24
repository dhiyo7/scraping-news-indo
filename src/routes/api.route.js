const express = require("express");
const mainRouter = express.Router();
const kompasController = require('../controllers/kompasComController')
const detikController = require('../controllers/detikComController')

mainRouter.get('/kompas-news', kompasController.getNewsKompas)
mainRouter.get('/detik-news', detikController.getNewsDetik)
mainRouter.get('/detik-detail-news', detikController.getNewsDetailDetik)

module.exports = mainRouter