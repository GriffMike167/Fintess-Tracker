const db =require("../models");
// const { update } = require("../models/workout");

module.exports = function(app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout);
        });
    });


    app.post("/api/workouts", async (req, res) => {
        try{
            const response = await db.Workout.create({type: "workout"})
            res.json(resposne)
        }
        catch(err){
            console.log("error occurred creating a workout: ", err)
        }

    })

    app.put("/api/workouts/:id", ({body, params}, res) => {

        const wourkoutId = params.id;
        let savedExercise = [];

        db.Workout.find({_id: workoutId})
        .then(dbWorkout => {
            savedExercise = dbWorokout[0].exercise;
            res.json(dbWorkout[0].exercise);
            let allExercise = [...savedExercise, body]
            console.log(allExercise)
            updateWorkout(allExercise)
        })
        .catch(err => {
            res.jsoon(err)
        })
    })

    function updateWorkout (exercise){
        db.Workout.findByIdAndUpdate(workoutId, {exercise: exercise}, function(err,doc){
            if(err){
                console.log(err)
            }
        })
    }

    app.get("/api/workoutd/range", (req, res) => {
        db.Workout.find({})
        .then(workout => {
            res.json(workout)
        })
        .catch(err => {
            res.json(err);
        })
    })
}
