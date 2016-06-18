import * as express from "express";
import *as bodyParser from 'body-parser';

const data = require("./services/data.json");
const user = require("./services/user.json");
const timeWork = require("./services/timework.json");

const app = express();
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.end("Hello World!");
});
app.get("/TestRESTful/rest/UserService/users", (req, res) => {
    res.json(user);
});
app.post("/api/timework", (req, res) => {
    res.json(data);
});
app.post("/MobileAppRAOT/rest/TimeWorkService/timeWork", (req, res) => {
    res.json(timeWork);
});


app.listen(8080, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(" ==> Start server port:  8080")
});