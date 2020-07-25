const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const logger = require("./logger");
const cors = require("cors");
const config = require("config");
var mongoose = require("mongoose");
var approutes = require("./routes/approutes");
process.env.NODE_ENV = process.env.NODE_ENV || "development";
process.env.HTTP_PORT = process.env.HTTP_PORT || 80;
process.env.MONGODB_URL = process.env.MONGODB_URL || config.get("mongo_db_url");
const _ = require("lodash");
if (process.env.ECS_ENV === "production") {
  // process.env.BASE_URL = 'https://letsventure.com';
} else {
  process.env.BASE_URL = config.get("base_url");
}

console.log("Base url", process.env.BASE_URL);

function onUnhandledError(err) {
  try {
    logger.error(err);
  } catch (e) {
    console.log("LOGGER ERROR:", e); //eslint-disable-line no-console
    console.log("APPLICATION ERROR:", err); //eslint-disable-line no-console
  }
  process.exit(1);
}

process.on("unhandledRejection", onUnhandledError);
process.on("uncaughtException", onUnhandledError);

const setupAppRoutes =
  process.env.NODE_ENV === "development"
    ? require("./middlewares/development")
    : require("./middlewares/production");

const app = express();

app.set("env", process.env.NODE_ENV);
logger.info(`Application env: ${process.env.NODE_ENV}`);

app.use(logger.expressMiddleware);
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
  optionsSuccessStatus: 200
};

app.use(express.static(path.join(__dirname, "public")));

app.use(cors(corsOptions));
app.use(approutes);

setupAppRoutes(app);

app.disable("x-powered-by");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

http.createServer(app).listen(process.env.HTTP_PORT, () => {
  logger.info(
    `HTTP server is now running on http://localhost:${process.env.HTTP_PORT}`
  );
});
