const PORT = 7777
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
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

app.get('/', (req, res) => {
    res.json(`🚀 server run on ${PORT}`)
})

app.get('/api/kompas-news', (req, res) => {
    const {category, search} = req.query
    if (category !== undefined || search !== undefined) {
        const reqCategory = articles.filter((a) => a?.category?.toLowerCase() === category?.toLowerCase() || a?.title?.toLowerCase().includes(search?.toLowerCase()))
        res.json({
            message: "Success get news Kompas.com",
            status: 200,
            data: reqCategory
        })
    } else {
        res.json({
            message: "Success get news Kompas.com",
            status: 200,
            data: articles
        })
    }
})

app.listen(PORT, () => console.log(`RUN ON ${PORT}`))