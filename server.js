const express = require("express");
const studentinfo = require("./model/studentModel");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));



                    // Main 
app.get("/", (req, res) => {
  studentinfo
    .find()
    .sort({ createdAt: -1 })
    .then((result) => res.render("home", { result }))
    .catch((err) => console.log(err));
});
                  
app.get("/compose", (req, res) => {
  res.render("compose");
});
                    // add new blog 
app.post("/compose", (req, res) => {
  const blog = new studentinfo(req.body);
  blog
    .save()
    .then((result) => console.log("new blogs save to database"))
    .catch((err) => console.log(err));

  res.redirect("/");
});
                    // Read More 
app.get("/readMore/:id", (req, res) => {
  const id = req.params.id;
  studentinfo
    .findById(id)
    .then((result) => res.render("readMore", { result }))
    .catch((err) => console.log(err));
});

                    // Delete  
app.get("/delete/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  studentinfo
    .findByIdAndDelete(id)
    .then(() => res.redirect("/"))
    .catch((err) => console.log(err));
});

app.listen(3000, () => {
  console.log("Server on port 3000");
});
