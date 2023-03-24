const axios = require("axios");
const cheerio = require("cheerio");
const baseResponse = require('../helper/baseResponse')
const articles = []
axios.get('https://indeks.kompas.com/')
    .then((response) => {
        const html = response.data
        const chr = cheerio.load(html)
        chr('.article__list', html).each((index, element) => {
            const title = chr(element).find('h3').text().trim()
            const url = chr(element).find('a').attr('href')
            const image = chr(element).find('img').attr('src')
            const category = chr(element).find(".article__subtitle").text().toLowerCase()
            articles.push({
                title,
                category,
                image,
                url
            })
        })

    }).catch((e) => console.log(e))
module.exports = {
    getNewsKompas: (req, res) => {
        const {category, search} = req.query
        if (category !== undefined || search !== undefined) {
            const reqCategory = articles.filter((a) => a?.category?.toLowerCase() === category?.toLowerCase() || a?.title?.toLowerCase().includes(search?.toLowerCase()))
            baseResponse.success(res, 'Success get data', 200, reqCategory)
        } else {
            baseResponse.success(res, 'Success get data', 200, articles)
        }
    }
}
