const AuthorModel = require('../model/AuthorModel');

//Add Authors
const addAuthor = async (req, res) => {

    if(req.body){
        const Author = new AuthorModel(req.body);
        await Author.save()
        .then((data) => {
            res.status(200).send({data: data});
        }).catch((error) => {
            res.status(500).send({error: error.message});
        })
    }
}

//Get all Authors
const getAuthors = async (req, res) => {
    await AuthorModel.find({})
    .then(data => {
        res.status(200).send({data: data});
    }).catch(error => {
        res.status(500).send({error: error.message});
    })
}

module.exports = {
    addAuthor,
    getAuthors
}