require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3002;
const propertyRoutes = require('./Routes/property');
const financeRoutes = require('./Routes/finance');
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());


app.use((req, res, next) => {
  console.log('Request received: ', req.method, req.url);
  next();
});

app.get("/", (req, res) => {
  res.send("welcome to pycray");
})


app.use("/finance", financeRoutes);
app.use("/property", propertyRoutes);

app.listen(PORT, () => {
  console.log("listening at port", PORT);
})