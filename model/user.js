const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    name:  String,
    date: String,
    pontuacao: Number,
    saldo: [{type: mongoose.Types.Decimal128}],
    image: String,
})

module.exports = mongoose.model('User', UserSchema)