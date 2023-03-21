const PORT = 7777
const express = require('express')
const axios = require('axios')
const cheerio = require('cheerio')

const app = express()
const articles = []

app.get('/', (req, res) => {
    res.json(`🚀 server run on ${PORT}`)
})

app.get('/api/kompas-news', (req, res) => {
    axios.get('https://indeks.kompas.com/')
        .then((response) => {
          const html = response.data
            const chr = cheerio.load(html)
            chr('.article__list', html).each((index, element) => {
                const title = chr(element).find('h3').text().trim()
                const url = chr(element).find('a').attr('href')
                const image = chr(element).find('img').attr('src')
                const category = chr(element).find(".article__subtitle").text()
                articles.push({
                    title,
                    category,
                    image,
                    url
                })
            })
            res.json({message : "Success get news Kompas.com" , status: 200, data: articles.length > 0 ? articles : 'Data Kosong'})
        }).catch((e) => console.log(e))
})

app.listen(PORT, ()=> console.log(`RUN ON ${PORT}`))