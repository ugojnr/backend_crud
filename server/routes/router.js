const express = require('express');
const route = express.Router();

route.get('/', (req, res) => {
    res.render("index");
})

route.get('/add_user', (req, res) => { 
    res.render("add_user");
})
route.get('/Update_user', (req, res) => { 
    res.render("update_user");
})

module.exports = route