const express = require('express')
const app = express()
const Sentiment = require('sentiment')

const sentiment = new Sentiment()


app.set('view engine','ejs')
app.use('/',express.static('public'))
app.get('/',(req,res)=>{
const result = sentiment.analyze(req.query.query)
    console.log(result)
    res.render('index',{query:req.query.query,positive:result.positive,negative:result.negative})
})

const port = process.env.PORT || 3001
app.listen(port,()=>console.log('server started'))
