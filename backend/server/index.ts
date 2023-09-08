const cors = require("cors");
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors())
app.use(express.json())

const server = app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

