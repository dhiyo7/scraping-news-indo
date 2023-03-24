const axios = require("axios");
const cheerio = require("cheerio");
const baseResponse = require('../helper/baseResponse')
const articles = []
const detailArticles = {}
const urlList = [
    {
        name: 'news',
        url: "https://news.detik.com/indeks"
    },
    {
        name: 'sport',
        url: "https://sport.detik.com/indeks"
    },
    {
        name: 'finance',
        url: "https://finance.detik.com/indeks"
    },
    {
        name: 'food',
        url: "https://food.detik.com/indeks"
    },
    {
        name: 'oto',
        url: "https://oto.detik.com/indeks"
    },
    {
        name: 'inet',
        url: "https://inet.detik.com/indeks"
    },
]

urlList.forEach(urlSingle => {
    axios.get(urlSingle.url)
        .then((response) => {
            const html = response.data
            const chr = cheerio.load(html)
            chr('.list-content__item', html).each((index, element) => {
                const title = chr(element).find('h3').text().trim()
                const url = chr(element).find('a').attr('href')
                const image = chr(element).find('img').attr('src')
                articles.push({
                    title,
                    image,
                    url
                })
            })
        }).catch((e) => console.log(e))
})



module.exports = {
    getNewsDetik: (req, res) => {
        const {search, category} = req.query
        if (search !== undefined) {
            const reqSearch = articles.filter((a) => a?.title?.toLowerCase().includes(search?.toLowerCase()))
            baseResponse.success(res, 'Success get data', 200, reqSearch)
        } else if (category !== undefined) {
            const categoryRes = articles.filter(urls => urls.url.includes(`https://${category}.detik.com`))
            baseResponse.success(res, 'Success get data', 200, categoryRes)
        } else {
            baseResponse.success(res, 'Success get data', 200, articles)
        }
    },

    getNewsDetailDetik: (req, res) => {
        const {detail} = req.query
        axios.get(`${detail}`)
            .then((response) => {
                const html = response.data
                const chr = cheerio.load(html)
                chr('.detail__body-text', html).each((index, element) => {
                    const detail = chr(element).find('p').text().trim()
                    const newRes = {...detailArticles, detail}
                    baseResponse.success(res, 'Success get data', 200, newRes)
                })
            }).catch((e) => baseResponse.error(res, 503, e?.err?.message))
    }

}
