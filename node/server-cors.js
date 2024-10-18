const express = require("express");
const app = express();
const cors = require("cors");
const allowedOrigins = [
    "http://localhost:3000",
    "http://google.com"
];

app.use(cors({ origin: allowedOrigins }));

async function HTTP(url, corpo, metodo) {
    let res = await fetch(url, {
        mode: "cors",
        body: corpo,
        method: metodo,
        headers: {
            "Content-type": "json/application"
        }
    });
    return res.json();
}