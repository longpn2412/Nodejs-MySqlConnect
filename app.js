let express = require("express");
let bodyPaser = require("body-parser");
let morgan = require("morgan");
let app = express();
let port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));
app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({ extended: true }));

app.use(morgan(("dev")));

app.set("view engine", "ejs");

require("./api/routes/customer.routes.js")(app);



// simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

app.listen(port, function () {
    console.log("App listening on port: " + port);
})

