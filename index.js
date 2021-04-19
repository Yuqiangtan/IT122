console.log('Hello from index')
//const http = require("http");
import http from 'http';
// import {getAll, getItem,students} from './data.js';
import * as data from "./data.js";
import qs from "querystring";
import { json } from 'express';
    
http.createServer(
    (req,res) => {
    let url = req.url.toLowerCase().split("?");
    switch(url[0]) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(JSON.stringify(data.getAll()));
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page:I am Yuqiang Tan');
            break;
        case '/detail':
            let query = qs.parse(url[1]);
            res.end(JSON.stringify(data.getItem(query.name)));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('404 Not found');
            break;
    }
    }).listen(process.env.PORT || 3000);

