const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const checklistRoutes = require("./routes/checklist");
const itemRoutes = require("./routes/item");
const { verifyToken } = require("./middleware/authMiddleware");
const app = express();

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/to_do_list_app", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api", authRoutes);
app.use("/api", verifyToken, checklistRoutes);
app.use("/api", verifyToken, itemRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
