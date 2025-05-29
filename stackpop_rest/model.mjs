import mongoose from 'mongoose';
import 'dotenv/config';
//import fishs from './data/fishs.mjs';
import Fish from './fish.mjs';


const FISH_DB_species = 'fish_db';
const FISH_COLLECTION = 'fishes';
const FISH_CLASS = "Fish";

let connection = undefined;
let LogFish = undefined;


//connect to MongoDB
async function connect(){
    try{
        await mongoose.connect(process.env.MONGODB_CONNECT_STRING);
        connection = mongoose.connection;
        console.log("Successfully connected to MongoDB using Mongoose!");
        LogFish= createModel();
    } catch(err){
        console.log(err);
        throw Error(`Could not connect to MongoDB ${err.message}`)
    }
}

//create using POST/orders 
function createModel(){
//define schema
    const fishSchema = mongoose.Schema({
        species: {type: String, required: true},
        month: {type: String, required: true},
        time: {type: String, required: true},
        location:{type: String, required: true},
        weather: {type: String, required: true}
    
    });
    return mongoose.model(FISH_CLASS, fishSchema)
}

//Call constructor of fish class
async function createFish(species, month, time, location, weather){
    //console.log('Creating fish with data:', { species, month, time, location, weather });
    const fish = new LogFish({species: species, month:month, time:time, location:location, weather:weather});
    //console.log('Fish saved successfully:', fish);
    return fish.save();
}



//Retrieve all fishs
const findFishes = async(filter) => {
    const query = LogFish.find(filter);
    return query.exec();
}

//Retrieve by ID
async function findFishById(_id) {
    const fish = await LogFish.findById(_id);
    return fish;
}


 /**
     * 
     * @param {String} species
     * @param {String} month
     * @param {String} time
     * @param {String} location
     * @param {String} weather
     */
async function replaceFish (_id, species, month, time, location, weather) {
    const updateOption = {};
    updateOption.species = species;
    updateOption.month = month;
    updateOption.time = time;
    updateOption.location = location;
    updateOption.weather = weather;
    await LogFish.updateOne({_id: _id}, updateOption);
    return LogFish.findById(_id).exec(); 
    
}


/**
 * Delete the fish with provided id value
 * @param {String} _id 
 * @returns Count of deleted documents
 */
const deleteById = async (_id) => {
    const result = await LogFish.deleteOne({_id: _id});
    /*for(let i = 0; i < fishs.length; i++){
        if(fishs[i]._id === _id){
            fishs.splice(i, 1)
            return 1;
        }
    }*/
    return result.deletedCount;
}

export { connect, createFish, findFishes, findFishById, replaceFish, deleteById };
