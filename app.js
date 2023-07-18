const express= require("express");
const path= require("path");
const dotenv= require("dotenv").config();

const app = express();

const publicPath = path.resolve(__dirname, "./public");
app.use(express.static(publicPath));

app.get("/", (req, res) =>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

    app.listen(process.env.PORT, () => {
        console.log("Servidor corriendo en Puerto" + process.env.PORT + " - http://localhost:3000"); 
});


