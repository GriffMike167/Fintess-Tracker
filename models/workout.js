const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        tyoe: Date,
        default: Date.now()
    },
    exercises: [
        {
            type:Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ],
    totalDuration: {
        type: Number,
        default: 0
    }
});