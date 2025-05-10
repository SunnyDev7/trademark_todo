const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const todoRoutes = require('./routes/todos')

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(cors());

app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send("The Todo app is working!")
});

app.listen(PORT, () => {
    console.log(`The server is running on port no ${PORT}`);
})