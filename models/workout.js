const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now()
    },
    exercises: [
        {
            type: {
            type: String,
            trim: true,
            required: "Enter an Excersise"
        },
        name: {
            type: String,
            trim: true,
            required: "Enter Exercise name"

        },
        duration: {
            type: Number,
            required: "Enter an Exercise time in minutes"
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number

        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }
         
    ],
    
},
{
    toJSON: {
        virtuals: true
    }
});

WorkoutSchema.virtual("totalDuration").get(function (){
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
   
});

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout;