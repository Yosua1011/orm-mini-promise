let express = require('express')
let router = express.Router()
let Model_supervisor = require('../models/supervisor.js')

router.get('/', (req, res)=>{
  Model_supervisor.findAll()
    .then(supervisor => {
      res.render('supervisor', {data: supervisor})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/',(req, res)=>{
  let data_supervisor = {
    nama: `${req.body.nama}`,
    email: `${req.body.email}`
  }

  Model_supervisor.create(data_supervisor)
    .then(string_success => {
      res.redirect('/supervisor')
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/update/:id/', (req, res) => {
  Model_supervisor.findById(req.params.id)
    .then(supervisor => {
      res.render('supervisor_edit_form', {data :  supervisor});
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/update/:id/',(req, res)=>{
  let data_supervisor = {
    nama: `${req.body.nama}`,
    email: `${req.body.email}`,
  }

  Model_supervisor.update(data_supervisor)
    .then(string_success => {
      res.redirect('/supervisor')
    })
    .catch(err => {
      console.log(err)
    })

})

router.get('/delete/:id/',(req, res)=>{
  Model_supervisor.destroy(req.params.id)
    .then(string_success => {
      res.redirect('/supervisor')
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
