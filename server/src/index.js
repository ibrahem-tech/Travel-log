const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");

const middlewares = require("./middlewares");

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:7000",
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Hello Kisa <3",
  });
});

// Middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server is ready for connection on port ${PORT}`);
});
