const express = require('express');
const app = express();
const user_inform = require('./routes/user_inform');
const cors = require("cors");
const mysql = require("mysql");
require("dotenv").config();
const jwt = require('jsonwebtoken');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '950762',
    database: 'testdb'
});

app.use('/user_inform', user_inform);
app.use(cors());


// 자유게시판 데이터 가져오기
app.get("/getFreeBoard", (req, res)=>{
    const sqlQuery = "SELECT * FROM freeboard";
    db.query(sqlQuery, (err, result)=>{
        res.send(result);
    })
})

// 자유게시판 게시글 저장
app.post('/free_board', (req, res) => {
    const writer = req.query.writer;
    const subject = req.query.subject;
    const content = req.query.content;
    const sql1 = "INSERT INTO freeboard (subject, content, writer) VALUES (?,?,?)";
    db.query(sql1, [subject, content, writer], (err, result) => {
        res.send('success');
    });
})

const port = 3001;
app.listen(port, () => console.log(`Node.js Server is running on port ${port}...`));
