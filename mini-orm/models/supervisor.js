const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db/database.db');

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
    
  }

}

module.exports = Supervisor
