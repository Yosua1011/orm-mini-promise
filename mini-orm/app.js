const express = require('express')
const app = express()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')
const bodyParser = require('body-parser')

app.set('view engine','ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

// let project = require('./routes/project.js')
let supervisor = require('./routes/supervisor.js')

app.get('/', (req, res)=>{
  res.render('index')
})

// app.use('/project', project)
app.use('/supervisor', supervisor)

app.listen(3000, () => {
console.log('app start on port 3000')
})
