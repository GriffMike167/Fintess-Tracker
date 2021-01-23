const Workout = require("../models/workout");

module.exports = function (app) {
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });

  app.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      { new: true, runValidators: true }
    )
      .then((data) => res.json(data))
      .catch((err) => {
        res.json(err);
      });
  });
  
  app.get("/api/workouts", function (req, res) {
    Workout.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });



  app.get("/api/workouts/range", function (req, res) {
    Workout.find({}).limit(6)
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  // app.delete("/api/workouts/:id", function (req, res) {
  //   Workout.create({})
  //     .then((data) => res.json(data))
  //     .catch((err) => {
  //       res.json(err);
  //     });
  // });

  
};
