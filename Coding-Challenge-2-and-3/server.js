const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { sports, PORT } = require( './models/sport-model');

const app = express();

/* Your code goes here */

let sports = {
    id: uuid.v4(), // This is a String type holding a uuid
    name: String,
    num_players: Number
}

// Delete endpoint
app.delete('/sports/delete', (req, res) => {
    let id = req.params.id;
    let removeItem = sports.findIndex((sport) => {
        if(sport.id == id){
            return true;
        }
    });
    if(removeItem < 0){
        res.statusMessage = "ID NOT FOUND";
        return res.status(404).end();
    }
    sport.slice(removeItem, 1);
    return res.status(204).end();
});



app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});