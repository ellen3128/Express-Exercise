const Cat = require("../models/cat");

module.exports = {
    new: newCat,
    create
};


function newCat(req, res) {
    res.render("cats/new", {title: "Add Cat", errorMsg: ""});
}

async function create(req, res) {
    const catData = {...req.body}
    try {
        const createdCat = await Cat.create(catData); 
        res.redirect("/cats/" + createdCat._id);
    } catch (err) {
        res.render("cats/new", {errorMsg: err.message});
    }
}