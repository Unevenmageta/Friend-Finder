const express = require("express");
const path = require("path");


const port = 3333;




app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));



