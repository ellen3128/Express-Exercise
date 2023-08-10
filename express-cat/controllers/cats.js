const Cat = require("../models/cat");

module.exports = {
    new: newCat,
    create, 
    index, 
    show, 
    delete: deleteCat
};


function newCat(req, res) {
    res.render("cats/new", {title: "Add Cat", errorMsg: ""});
}

async function create(req, res) {
    const catData = {...req.body}
    try {
        const createdCat = await Cat.create(catData); 
        res.redirect("/cats/");
    } catch (err) {
        res.render("cats/new", {errorMsg: err.message});
    }
}

async function index(req, res) {
    Cat.find({})
    .then(results=>res.render('cats/index', {title: 'Cat List', cats: results}))
    .catch(err=>res.send(err))
}

async function show(req, res) {
    const cats = await Cat.findById(req.params.id)
    res.render('cats/show', {
        title: 'Cat Details', 
        cats
    })
}

async function deleteCat(req, res) {
    await Cat.deleteOne({_id: req.params.id})
    .then(function() {
        res.redirect('/cats/')
    })
    .catch(function(){
        console.log(err)
    })
}