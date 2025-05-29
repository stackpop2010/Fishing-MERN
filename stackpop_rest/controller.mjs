import 'dotenv/config';
import express from 'express';
import asyncHandler from "express-async-handler"
import * as fishesModel from './model.mjs';

const app = express();
app.use(express.json())
const PORT = process.env.PORT;


// CRUD Operation - create, using POST/fishes
// calls createFish in model.mjs file
app.post('/fishes', asyncHandler(async (req, res) => {
    const { species, month, time, location, weather } = req.body;
    
    if (!species || !month ||!time|| !location|| !weather
        
    ) {
        return res.status(400).json({ "Error": "Invalid request" }); 
    }
 
    const postFish = await fishesModel.createFish(species, month, time, location, weather);
    res.status(201).json(postFish);
    
}));

// Crud Operation - get, using GET/fishes
//Retrieve all fishes. 
app.get('/fishes', asyncHandler(async (req, res) => {
    const fishes = await fishesModel.findFishes();
    res.status(200).json(fishes);
}));

//Crud Operation - get, using GET/fishes/:_id
//Retrieve the fish corresponding to the ID provided in the URL.
app.get('/fishes/:fish_id', asyncHandler(async (req, res) => {
    const { fish_id} = req.params;
    const getByID = await fishesModel.findFishById(fish_id);
    if (getByID) {
        res.status(200).json(getByID);
    } else {
        res.status(404).json({"Error": "Not found"}); 
    }   
}));

// CRUD Operation - upweathers using PUT 
// path is PUT /fishes/:id

app.put('/fishes/:fish_id', asyncHandler(async (req, res) => {
    const { fish_id } = req.params;
    const { species, month, time, location, weather } = req.body;
    if (!species || !month ||!time|| !location|| !weather
    ) {
        return res.status(400).json({ "Error": "Invalid request" }); 
    }
 
    const putByID = await fishesModel.replaceFish(fish_id , species, month, time, location, weather );    
    if (putByID) {
        res.status(200).json(putByID);
    } else{
        res.status(404).json({ "Error": "Not found"}); 
    }    
})); 

/**
 * Delete the fish whose id is provided in the query parameters
 */
app.delete('/fishes/:fish_id', asyncHandler(async (req, res) => {
    const { fish_id } = req.params;
    const deleteByID = await fishesModel.deleteById(fish_id );
    
    // if no matching user ID is found, deleteByID returns null
    // if null is returned, 404 response is sent
    if(deleteByID > 0){
        return res.status(204).send()//json(deleteByID)
    }else{
        return res.status(404).json({"Error": "Not found"})
    }
}));


app.listen(PORT, asyncHandler(async () => {
    await fishesModel.connect(false)
    console.log(`Server listening on port ${PORT}...`);
}));

