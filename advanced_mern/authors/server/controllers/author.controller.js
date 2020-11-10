const { Author } = require('../models/author.model');

module.exports.createAuthor = (req, res) => {
    const { name } = req.body;
    Author.create({
        name
    })
        .then(author => res.json(author))
        .catch(err => res.json(err));
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => console.log("Error: ", err));
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne( { _id: req.params.id } )
        .then(author => res.json(author))
        .catch(err => console.log("Error: ", err));
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate( { _id: req.params.id }, req.body, { new: true } )
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => console.log("Error: ", err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne( { _id: req.params.id } )
        .then(deletedAuthor => res.json(deletedAuthor))
        .catch(err => console.log("Error: ", err))
}