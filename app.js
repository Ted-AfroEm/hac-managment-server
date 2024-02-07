const express = require("express");
const app = express();

const port = 4000;
const peopleRoutes = require("./routes/peopleRoutes");

app.use(express.json());
app.use("/api", peopleRoutes);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
