const express = require("express");
const app = express();
const path = require("path");

const viewsPath = path.resolve(__dirname, "./views");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", viewsPath);

const moviesRoutes = require("./routes/movies");
const genresRoutes = require("./routes/genres");
const actorsRoutes = require("./routes/actors");
const countriesRoutes = require("./routes/countries");

app.use("/movies", moviesRoutes);
app.use("/genres", genresRoutes);
app.use("/actors", actorsRoutes);

app.use("/countries", countriesRoutes);
app.listen(3010, () => {
  console.log(" 👯‍♂️👯‍♂️ Servidor andando en el puerto 3010 👯‍♂️👯‍♂️");
});
