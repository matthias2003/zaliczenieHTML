const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

const port = process.env.PORT || 3001;
const app = express();

const main = async () => {
    await mongoose.connect(`mongodb+srv://maciejkloda98:PyGHtNpaywA5Rx6z@cafeteria.xbnajsk.mongodb.net/cafeteria?retryWrites=true&w=majority&appName=cafeteria`);
}

const options = {
    origin: "*"
}

app.get("/",(req,res) => {
    res.send("Working")
})

app.use(cors(options))

main().catch(err => console.log(err));

app.listen(port)