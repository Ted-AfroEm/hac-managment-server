const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = 4000;
const peopleRoutes = require("./routes/peopleRoutes");

app.use(bodyParser.json());
app.unsubscribe(bodyParser.urlencoded({ extended: true }));

app.use("/api", peopleRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
