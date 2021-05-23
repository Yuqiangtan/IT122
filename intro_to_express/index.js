'use strict'

import express from 'express';
import handlebars from "express-handlebars"
import {Student} from "../models/data.js";
import cors from 'cors';

const app = express();

app.set("port", process.env.PORT || 3000);
app.use(express.static('./public')); // allows direct navigation to static files
app.use(express.urlencoded()); //Parse URL-encoded bodies
app.use(express.json()); //Used to parse JSON bodies
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route

app.engine('hbs', handlebars({defaultLayout: "main.hbs"}));
app.set("view engine", "hbs");

app.get('/', (req,res) => {
    Student.find({}).lean()
        .then((students) => {
            // res.render('home', { data:students });
            res.render('home', {students: JSON.stringify(students)});
        })
        .catch(err => next(err));
});

app.get('/about', (req,res) => {
    res.type('text/html');
    res.render('about');
});

app.get('/api/students', (req,res, next) => {
    Student.find((err,results) => {
        if (err || !results) return next(err);
        res.json(results);
    });
});

app.get('/api/detail', (req,res,next) => {
    Student.findOne({ name:req.query.name }).lean()
        .then((name) => {
            res.render('details', {result: name} );
        })
        .catch(err => next(err));
});

app.post('/api/detail', (req,res, next) => {
    Student.findOne({ name:req.body.name }).lean()
        .then((name) => {
            res.render('details', {result: name} );
        })
        .catch(err => next(err));
});

app.get('/api/delete', (req,res) => {
    Student.deleteOne({name:req.query.name }, (err, result) => {
        if (err) return next(err);
        // return # of items deleted
        console.log("Delete success!") 
        res.render('delete',{name:req.query.name ,result});
    });
});

app.post('/api/add/', (req,res, next) => {
    // find & update existing item, or add new
    console.log(req.body)
    if (!req.body._id) { // insert new document

        let student = new Student({name:req.body.name,age:req.body.age,classes:req.body.classes,gender:req.body.gender});
        student.save((err,newStudent) => {
            if (err) return next(err);
            console.log(newStudent)
            res.json({updated: 0, _id: newStudent._id});
        });
    } else { // update existing document
        Student.updateOne({ _id: req.body._id}, {name:req.body.name,age:req.body.age,classes:req.body.classes,gender:req.body.gender }, (err, result) => {
            if (err) return next(err);
            res.json({updated: result.nModified, _id: req.body._id});
        });
    }
});

app.use((req,res) => {
    res.type('text/plain'); 
    res.status(404);
    res.send('404 - Not found');
});

app.listen(app.get('port'), () => {
    console.log('Express started');    
});