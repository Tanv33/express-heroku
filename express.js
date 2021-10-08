const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/", (request, response) => {
  response.send("Hey You are on Home page of Tanveer <h1>Wanna see more go on /tanveer </h1>");
});
app.get("/tanveer", (request, response) => {
  response.send("<h1>Welcome to Tanveer GET response</h1> There are remainnig to this /tanveer search it on Postman");
});
app.post("/tanveer", (request, response) => {
  response.send("<h1>POST: Hey This will show only on Postman are you using it. If seeing this response congrats </h1><h2>Post have been created</h2>");
});
app.put("/tanveer", (request, response) => {
  response.send("<h1>Post has been updated</h1>");
});
app.delete("/tanveer", (request, response) => {
  response.send("<h1>Post has been deleted</h1>");
});

app.listen(PORT, () => {
  console.log(`Your PORT is listening on http://localhost:${PORT}`);
});
