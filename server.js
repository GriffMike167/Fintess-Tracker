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

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://griffmike167:Irish4528@fitness-tracker.70e1x.mongodb.net/workout?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  // useCreateIndex: true,
  // useNewUrlParser: true,
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
