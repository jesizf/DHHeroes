const { listenerCount } = require('events');
const express = require('express');
const { dirname } = require('path');
const app=express();
const port=3030;
const path=require('path');

app.use(express.static('public'));

app.get('/',(req,res)=> res.sendFile( path.join(__dirname, 'views',
'index.html')),
);




app.get('/Babbage',(req,res)=> res.sendFile( path.join(__dirname, 'views',
'babbage.html')),
);


app.listen(port,()=> console.log(`Servidor corriendo en http://localhost:${port}`));

app.get('/Berners-Lee',(req,res)=> res.sendFile(path.join(__dirname, 'views',
'berners-lee.html')));

app.get('/Clarke',(req,res)=> res.sendFile(path.join(__dirname, 'views',
'clarke.html')));

app.get('/Hamilton',(req,res)=> res.sendFile(path.join(__dirname, 'views',
'hamilton.html')));


app.get('/Hopper',(req,res)=> res.sendFile(path.join(__dirname, 'views',
'hopper.html')));

app.get('/lovelace',(req,res)=> res.sendFile(path.join(__dirname, 'views',
'lovelace.html')));

app.get('/turing',(req,res)=> res.sendFile(path.join(__dirname, 'views',
'turing.html')));