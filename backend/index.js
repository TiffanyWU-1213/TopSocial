const express = require("express");
const cors = require("cors");
const router = require("./routes/index");
const app = express();

//增加json 和url编码请求体大小限制
app.use(express.json({ limit: "5mb" }));
app.use(express.urlencoded({ limit: "5mb", extended: true }));

app.use(cors());
app.use(express.json());

app.use("/api", router);

const PORT = 80;
app.listen(PORT, function () {
  console.log("Server is running on http://localhost");
});
