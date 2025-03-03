const express = require('express');
require("dotenv").config();

const app = express();

app.use(express.json());

const PORT = process.env.SERVER_PORT || 5000;
app.listen(PORT,()=>{
    console.log("Server started at : ",PORT);
});