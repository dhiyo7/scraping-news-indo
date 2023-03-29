const express = require("express");
const mainRouter = express.Router();
const kompasController = require('../controllers/kompasComController')
const detikController = require('../controllers/detikComController');
const cnnIndonesiaComController = require("../controllers/cnnIndonesiaComController");

mainRouter.get('/kompas-news', kompasController.getNewsKompas)
mainRouter.get('/kompas-detail-news', kompasController.getNewsDetailKompas)
mainRouter.get('/detik-news', detikController.getNewsDetik)
mainRouter.get('/detik-detail-news', detikController.getNewsDetailDetik)
mainRouter.get('/cnn-news', cnnIndonesiaComController.getCnnNews)

module.exports = mainRouter