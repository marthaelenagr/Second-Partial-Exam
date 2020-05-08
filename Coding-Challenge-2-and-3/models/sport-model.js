const mongoose = require( 'mongoose' );
const uuid = require( 'uuid' );

/* Your code goes here */

const sportsSchema = mongoose.Schema({
        id: {
            type: String,
            required: True,
            unique: True
        },
        name: {
            type: String,
        },
        num_players: {
            type: Number,
        }
})

const sportsCollection = mongoose.model('Sports', sportsSchema);

//collection
const Sports = {

    //delete query
    removeSport : function(id){
        return sportsCollection
            .find({id: id})
            .remove()
    }
}

module.exports = {
    
};