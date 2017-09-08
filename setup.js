const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db/database.db')

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS supervisor
    (
    id INTEGER PRIMARY KEY AUTO INCREMENT,
    nama VARCHAR(255),
    email VARCHAR(15)
    )`,() => {
        console.log('Create Table Supervisor ')
    })

    db.run(`CREATE TABLE IF NOT EXISTS engineer
    (
    id INTEGER PRIMARY KEY AUTO INCREMENT,
    nama VARCHAR(255),
    email VARCHAR(15)
    )`,() => {
        console.log('Create Table Engineer ')
    })

    db.run(`CREATE TABLE IF NOT EXISTS project,
    (
        id INTEGER PRIMARY KEY AUTO INCREMENT,
        nama VARCHAR(255),
        status VARCHAR(255),
        supervisor_id INTEGER UNIQUE, FOREIGN KEY (supervisor_id) REFERENCES supervisor(id),
        engineer_id INTEGER UNIQUE, FOREIGN KEY (engineer_id) REFERENCES engineer(id)
    )`,() => {
        console.log('Create table project')
    })
})
