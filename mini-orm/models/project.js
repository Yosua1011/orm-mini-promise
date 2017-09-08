const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')
let Model_project = require('./project.js')

class Project {
  constructor(obj) {
    this.id = obj.id
    this.nama = obj.nama
    this.status = obj.status
  }

  static findAll() {
    return new Promise((resolve,reject) => {
      db.all(`SELECT * FROM project`, (err, rows_project) => {
        if(!err) {
          let project_all = rows_project.map(s => new project(s))
          resolve(project_all)
        } else {
          reject(err)
        }
      })
    })
  }

  static findById() {
    return new Promise((resolve, reject)=>{
      db.all(`SELECT * FROM project WHERE id = ${id}`,(err,rows_project) => {
        if(!err){
          resolve(rows_project)
        } else {
          reject(err)
        }
      })
    })
  }

  static create() {
    return new Promise((resolve,reject) => {
      let data_project = `INSERT INTO project (nama,status)
              VALUES
              (
                '${data_project.nama}',
                '${data_project.status}'
              )`
      db.run(data_project, (err) => {
        if(!err) {
          resolve('Insert Success')
        } else {
          reject(err)
        }
      })
    })
  }

  static update() {
    return new Promise((resolve,reject)=> {
      let data = {
        $nama: `${data_project.nama}`,
        $email: `${data_project.status}`
      }
      let sql = `UPDATE project
                  SET nama = $nama,
                  SET status = $status,
                  WHERE id = $id`;
      db.run(sql,data,(err)=>{
        if(!err){
          resolve('Update Success');
        } else {
          reject(err)
        }
      });
    })
  }

  static destroy() {
    return new Promise((resolve, reject)=> {
      db.run(`DELETE FROM project WHERE id = ${id}`,(err)=>{
        if(!err){
          resolve('Deleted')
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = Project
