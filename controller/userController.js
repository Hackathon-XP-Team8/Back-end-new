const axios = require('axios')
const User = require('../model/User')

module.exports = {
    async create (request, response){
        let { name, date, pontuacao, saldo, image, } = request.body

            user = await User.create({
                name,
                date,
                pontuacao,
                saldo,
                image
            })
            console.log('POST /user User.create', request.body)
        return response.json(user)
    },

    async show (request, response, next){
        User.findById(request.params._id)
        .then(idFound => {
            if(!idFound){ return response.res.status(404).end(); }
            return response.status(200).json(idFound);
        })
        .catch(err => next(err)); 
        console.log('GET /user/:id User.show', request.params)
    },

    async index (request,  response){
        const user = await User.find();
        console.log('GET /user User.index')
        return response.json(user);
    },

    async update (req, response){
        var _id = req.body._id

        User.findById(_id, function(err, doc) {
            if (err){
                console.error('error, no entry found');  
            }
            doc.name = req.body.name,
            doc.date = req.body.date,
            doc.pontuacao = req.body.pontuacao,
            doc.saldo = req.body.saldo,
            doc.image = req.body.image,
            doc.save();
        })
        console.log('PUT /user User.update', req.body)
        return response.json(req.body)
    },

    async updatePatch (request, response){
        console.log('Ta entrando aqui?')

        var id = request.params.id

        User.findByIdAndUpdate(id, function(err, doc) {
            if (err){
                console.error('error, no entry found');  
                return response.status(500).send('error, no entry found!');
            }

            const name = request.body.name || doc.name
            const date = request.body.date || doc.date
            const pontuacao = request.body.pontuacao || doc.pontuacao
            const saldo = request.body.saldo || doc.saldo
            const image = request.body.image || doc.image

            doc.name = name,
            doc.date = date,
            doc.pontuacao = pontuacao,
            doc.saldo = saldo,
            doc.description = description,
            doc.image = image,
            console.log(doc)
            doc.save();
        })
        console.log('PUT /user User.update', request.body)
        return response.json(request.body)
    },

    async destroy (request, response){
        const params = request.params
        await User.findByIdAndDelete(params._id)
        console.log('DELETE /user User.destroy')
        return response.send('Destroy')
    }
}
