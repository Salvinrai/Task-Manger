const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

app.use(express.json());
app.use(cors());

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database: "assessment"
})

app.get("/",(req,res)=>{
   
    // res.json("Hello salvin you are working for Assignment :Developer Profile");
    const sql = "SELECT * FROM tasks";
    db.query(sql,(err,data) =>{
        if(err) return app.json("Error");
        return res.json(data);
    })

})
app.post('/create', (req, res) => {
    const sql = "INSERT INTO tasks (`Title`, `Description`, `Completed`) VALUES (?, ?, 0)";
    const values = [
        req.body.Task,
        req.body.Description
    ];

    db.query(sql, values, (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data into the database" });
        }
        console.log("Data inserted successfully:", data);
        return res.status(200).json({ message: "Data inserted successfully" });
    });
});
app.put('/update/:id', (req, res) => {
    const sql = "UPDATE tasks SET Title = ?, Description = ? WHERE ID = ?";

    const values = [
        req.body.Task,
        req.body.Description
    ];
    const id = req.params.id;

    db.query(sql, [...values,id], (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data into the database" });
        }
        console.log("Data Updated successfully:", data);
        return res.status(200).json({ message: "Data inserted successfully" });
    });
});

app.put('/status/:id', (req, res) => {
    const sql = "UPDATE tasks SET Completed = ? WHERE ID = ?";

    const values = [
        req.body.Completed
    ];
    const id = req.params.id;

    db.query(sql, [values,id], (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data into the database" });
        }
        console.log("Data Updated successfully:", data);
        return res.status(200).json({ message: "Data inserted successfully" });
    });
});

app.delete('/tasks/:id', (req, res) => {
    const sql = "DELETE FROM tasks WHERE ID = ?";
    const id = req.params.id;

    db.query(sql, [id], (err, data) => {
        if (err) {
            console.error("Error inserting data:", err);
            return res.status(500).json({ error: "Error inserting data into the database" });
        }
        console.log("Data deleted successfully:", data);
        return res.status(200).json({ message: "Data inserted successfully" });
    });
});

app.listen(8000, ( )=> {
    console.log("listining") ;
})