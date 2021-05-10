'use strict'

import {Student} from "../models/data.js";

//find all documents
Student.find({}, (err, result) =>{
    //output error if one occured
    if(err){
        console.log(err);
    }else{
        //otherwise output the arrat of documents
        console.log(result);
    }
    return
});

//count # of docs
console.log("step 1")
Student.countDocuments((err, result) =>{
    console.log("step 2")
    console.log(result + " db entries");
});
console.log("step 3")