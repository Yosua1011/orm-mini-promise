const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')
let Model_project = require('./project.js')

class Supervisor {
  constructor(obj) {
    this.id = obj.id
    this.nama = obj.nama
  }

  static findAll() {
    return new Promise((resolve,reject) => {
      db.all(`SELECT * FROM supervisor`, (err, rows_supervisor) => {
        if(!err) {
          let supervisor_all = rows_supervisor.map(s => new Supervisor(s))
          resolve(supervisor_all)
        } else {
          reject(err)
        }
      })
    })
  }

  static findById() {
    return new Promise((resolve, reject)=>{
      db.all(`SELECT * FROM supervisor WHERE id = ${id}`,(err,rows_supervisor) => {
        if(!err){
          resolve(rows_supervisor)
        } else {
          reject(err)
        }
      })
    })
  }

  static create() {
    return new Promise((resolve,reject) => {
      let data = `INSERT INTO supervisor (nama,email)
              VALUES
              (
                '${data_supervisor.nama}',
                '${data_supervisor.email}'
              )`
      db.run(data, (err) => {
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
        $nama: `${data_supervisor.nama}`,
        $email: `${data_supervisor.email}`
      }
      let sql = `UPDATE supervisor
                  SET nama = $nama,
                  SET email = $email,
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
      db.run(`DELETE FROM supervisor WHERE id = ${id}`,(err)=>{
        if(!err){
          resolve('Deleted')
        } else {
          reject(err)
        }
      })
    })
  }
}

module.exports = Supervisor
