const fetch = require("node-fetch");
module.exports = {
  list: async (req, res) => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((response) => response.json())
      .then((countries) => {
        //return res.json(countries);
        return res.render("./countries", { countries });
      });
  },
};
