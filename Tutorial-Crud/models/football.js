const mongoose = require('mongoose')
const Schema = mongoose.Schema;

let ClubSchema= new Schema({
    name: {type: String, required: [true, "Please enter a name"]},
    players: {type: String, required: true},
    coach: {type: String, required: true}
},
{
    timestamps: true,
}
)

module.exports=mongoose.model('FootBall', ClubSchema);