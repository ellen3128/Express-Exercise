const Cat = require("../models/cat");

module.exports = {
    new: newCat
};


function newCat(req, res) {
    res.render("cats/new", {title: "Add Cat", errorMsg: ""});
}