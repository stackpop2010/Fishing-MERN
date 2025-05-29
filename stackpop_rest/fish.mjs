import { uid } from 'uid';

export default class Fish {
    /**
     * 
     * @param {String} species
     * @param {String} month
     * @param {String} time
     * @param {String} location
     * @param {String} weather
     */
    constructor(species, month, time, location, weather) {
        this.species = species;
        this.month = month;
        this.time = time;
        this.location = location;
        this.weather = weather;
        this._id = uid(24);
    }
}