const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;       // Nos genera un ID para cada proceso //

const filmSchema = new Schema({
    //id: { 
     //   type: ObjectId,
    //},
    title: { 
        type: String,
        required: true,
        default: 'film'
    },
    /*
    creationDate: {
        type: Date,
        default: new Date
    },
    year: { 
        type: Number 
    },
    country: { 
        type: String 
    },
    poster: { 
        type: String 
    },
    genre: { 
        type: String, 
        enum:
        {
            "Action": 28,
            "Adventure": 12,
            "Animation": 16,
            "Comedy": 35,
            "Crime": 80,
            "Documentary": 99,
            "Drama": 18,
            "Family": 10751,
            "Fantasy": 14,
            "History": 36,
            "Horror": 27,
            "Music": 10402,
            "Mystery": 9648,
            "Romance":10749,
            "Science Fiction":878,
            "Thriller":53,
            "War": 10752,
            "Western": 37
        }
    },
    description: { 
        type: String 
    },
    adult: { 
        type: Boolean,
        default: false
    }*/
})

const film = mongoose.model('film', filmSchema);
module.exports = film;