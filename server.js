const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 8080;

const Workout = require("./models/workout");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useNewUrlParser: true,
});

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log(`App listening on Port ${PORT}`);
});

// Workout.create(Workout)
// .then((dbWorkout)=> {
//     console.log(dbWorkout);
// })
// .catch(({Workout})=>{
//     console.log(Workout)
// });
