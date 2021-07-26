const siteRouter = require("./site");
const apiRouter = require("./api");
const authRouter = require("./auth");



function route(app){
    app.use("/auth", authRouter);
    app.use("/api", apiRouter);
    app.use("/", siteRouter);
}


module.exports = route;