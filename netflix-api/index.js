const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;
const ATLAS_URI =
  "mongodb+srv://sjegadeeshwaran2:Jeg%40deeshwaran2@cluster0.txs4314.mongodb.net/netflix?retryWrites=true&w=majority";

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(ATLAS_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch((err) => {
    console.log(err.message);
  });

// app.get('/', function (req, res) {
//   res.render('index', {});
// });

app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log("server started on PORT : 5000");
});
