const axios = require("axios");
const cheerio = require("cheerio");
const baseResponse = require('../helper/baseResponse')
const articles = []
const detailArticles = {}

axios.get('https://www.cnnindonesia.com/indeks/')
    .then((response) => {
        const html = response.data
        const chr = cheerio.load(html)
        chr('article', html).each((index, element) => {
            const title = chr(element).find('h2').text().trim()
            const url = chr(element).find('a').attr('href')
            const image = chr(element).find('img').attr('src')
            const category = chr(element).find('.kanal').text().toLowerCase()
            articles.push({
                image,
                title,
                category,
                url
            })
        })

    }).catch((e) => console.log(e))
module.exports = {
    getCnnNews: (req, res) => {
        const {category, search} = req.query
        if (category !== undefined || search !== undefined) {
            const reqCategory = articles.filter((a) => a?.category?.toLowerCase() === category?.toLowerCase() || a?.title?.toLowerCase().includes(search?.toLowerCase()))
            baseResponse.success(res, 'Success get data', 200, reqCategory)
        } else {
            baseResponse.success(res, 'Success get data', 200, articles)
        }
    }
}