const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');

const menuSchema = new mongoose.Schema({
    _id : ObjectId,
    nazwa : String,
    cena : Number,
    kategoria : String
})

const Menu = mongoose.model("menu",menuSchema,"menu");

module.exports = { Menu };