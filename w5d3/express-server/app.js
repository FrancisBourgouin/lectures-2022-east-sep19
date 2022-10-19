const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const generateJokeHelpers = require("./helpers/jokeHelpers");

const { Pool, Client } = require("pg");
// pools will use environment variables
// for connection information
const [, , question, answer, rating, author_id] = process.argv;

const pool = new Pool({
  host: "localhost",
  user: "francis",
  password: "francis",
  database: "jokes",
  port: 5432,
});

const app = express();
const { fetchAllJokes, fetchOneJoke } = generateJokeHelpers(pool);
// const { fetchAllAuthors } = generateAuthorHelpers(pool);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index", { title: "SQL is fun!" });
});

app.get("/jokes", (req, res) => {
  fetchAllJokes().then((jokeList) => {
    const templateVars = { jokes: jokeList };

    res.render("jokes", templateVars);
  });
});

app.get("/jokes/:joke_id", (req, res) => {
  const jokeId = Number(req.params.joke_id);

  fetchOneJoke(jokeId).then((joke) => {
    const templateVars = { joke };

    res.render("joke", templateVars);
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
