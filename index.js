const PORT = 7777
const express = require('express')
var cors = require('cors');
const morgan = require('morgan');


const app = express()
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors())
app.get('/', (req, res) => {
    res.json(`🚀 server run on ${PORT}`)
})

app.use('/api', require('./src/routes/api.route'))
app.listen(PORT, () => console.log(`RUN ON ${PORT}`))