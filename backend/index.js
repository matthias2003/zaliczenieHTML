const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const { Menu } = require("./schemas")

const port = process.env.PORT || 3001;
const app = express();
app.use(cors());

const main = async () => {
    await mongoose.connect(`mongodb+srv://maciejkloda98:PyGHtNpaywA5Rx6z@cluster.cqup7ow.mongodb.net/rest?retryWrites=true&w=majority&appName=cluster`);
}
app.get("/",async (req,res) => {
    res.json(await getMenu());
})

app.get("/item/:desc",async (req,res) => {
    const data = req.params.desc;
    res.json(await getItem(data));
})

const getMenu = async (kat) => {
    return Menu.find();
}

const getItem = async (val) => {
    return Menu.find({ nazwa: { $regex: val, $options: 'i' } });
}

main().catch(err => console.log(err));

app.listen(port)