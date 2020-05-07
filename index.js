import express from "express";
import http from "http";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";

import { globalErrorHandler, notFoundErrorHandler } from "./app/utills";

const apiRoute = require("./app/routes");

const app = express();

const port = process.env.PORT || 3010;

const PublicAssestsPath = path.resolve(__dirname, 'public');
const InitialJSPath = path.resolve(__dirname, 'public/js/ads.js');

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");
app.set("views", __dirname + "/app/views");
app.use('/public', express.static(PublicAssestsPath));
app.use('/render/getJS', express.static(InitialJSPath));

app.get("/", (req,res,next) =>{
    res.render('index.html');
})

app.use("/api", apiRoute);

//manage global not found error handling
app.use(notFoundErrorHandler);

//manage global error handling
app.use(globalErrorHandler);

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`App running on: http://localhost:${port}`)
);
