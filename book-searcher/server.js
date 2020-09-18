const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");

const databaseUrl = "mongodb://localhost:27017";

mongoose
  .connect(process.env.DATABASE_URI || databaseUrl, {
    useCreateIndex: true,
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongoDB connected..."))
  .catch((error) => console.log(error));

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET",
    "PUT",
    "POST",
    "DELETE",
    "OPTIONS"
  );
  next();
});

const Books = new mongoose.Schema({
  authors: Array,
  title: String,
  publishedDate: String,
  description: String,
  averageRating: Number,
  pageCount: Number,
  categories: Array,
  imageLink: String,
  infoLink: String,
});

const BookModel = mongoose.model("Books", Books);

app.post("/save-book", (req, res) => {
  const newBook = new BookModel(req.body);

  newBook
    .save()
    .then((doc) => {
      console.log(doc);
      res.json(doc);
    })

    .catch((error) => res.json(error));
});

app.get("/books", (req, res) => {
  BookModel.find()
    .then((books) => res.json(books))
    .catch((error) => res.json(error));
});

app.post("/delete-book", (req, res) => {
  BookModel.find(req.body)
    .remove()
    .then(() => res.json({ message: "delete" }))
    .catch((error) => res.json({ message: "there was a problem!" }));
});

app.listen(3200);

console.log("Listening on port 3200");
