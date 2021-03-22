const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const moviesRoutes = require("./routes/movies");
const genresRoutes = require("./routes/genres");
const actorsRoutes = require("./routes/actors");

app.use("/movies", moviesRoutes);
app.use("/genres", genresRoutes);
app.use("/actors", actorsRoutes);

app.listen(3010, () => {
  console.log(" 👯‍♂️👯‍♂️ Servidor andando en el puerto 3010 👯‍♂️👯‍♂️");
});
