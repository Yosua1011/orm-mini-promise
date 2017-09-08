let express = require('express')
let router = express.Router()
let Model_project = require('../models/project.js')

router.get('/', (req, res)=>{
  Model_project.findAll()
    .then(project => {
      res.render('project', {data: project})
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/',(req, res)=>{
  let data_project = {
    nama: `${req.body.nama}`,
    status: `${req.body.status}`
  }

  Model_project.create(data_project)
    .then(string_success => {
      res.redirect('/project')
    })
    .catch(err => {
      console.log(err)
    })
})

router.get('/update/:id/', (req, res) => {
  Model_project.findById(req.params.id)
    .then(project => {
      res.render('project_edit_form', {data_project :  project});
    })
    .catch(err => {
      console.log(err)
    })
})

router.post('/update/:id/',(req, res)=>{
  let data_project = {
    nama: `${req.body.nama}`,
    status: `${req.body.status}`,
  }

  Model_project.update(data_project)
    .then(string_success => {
      res.redirect('/project')
    })
    .catch(err => {
      console.log(err)
    })

})

router.get('/delete/:id/',(req, res)=>{
  Model_project.destroy(req.params.id)
    .then(string_success => {
      res.redirect('/project')
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
