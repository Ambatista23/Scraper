const express = require("express");

const mongoose = require("mongoose");

const axios = require("axios");

const cheerio = require("cheerio");

const db = require("./models")

const port = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.static("public"));

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

app.get("/scrape", (req, res) => {
    axios.get("https://www.ign.com/articles?tags=news")
        .then(res => {
            const $ = cheerio.load(res.data);
            const test = $(".listElmnt-storyHeadline").text()
            console.log(test)
            $("div.listElmnt").each((i, element)  => {
                const result = {};
                result.title = $(element)
                .children("div.listElmnt-blogItem")
                .children("a.listElmnt-storyHeadline").text()

                result.summary = $(element)
                .children("div.listElmnt-blogItem")
                .children("p").text()

                result.time = $(element)
                .children("div.listElmnt-blogItem")
                .children("p")
                .children("span.listElmnt-date").text()

                result.image = $(element)
                .children("div.listElmnt-thumb")
                .children("a.listElmnt-storyHeadline.thumb")
                .children("img").attr("src")
                res.json(results)
            })
        })
        res.send("success");
})

app.listen(port, () => {
    console.log("app listening on http://localhost:" + port);
})