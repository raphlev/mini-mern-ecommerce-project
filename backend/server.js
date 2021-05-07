require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const cors = require('cors');

connectDB();

const app = express();

const origin = (process.env.NODE_ENV !== 'production')
  ? 'http://localhost:3000'
  : 'https://rlu-shop-mern.netlify.app';
app.use(cors({
  origin: origin
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API running. Load seed data : node backend/seederScript; try /api/products...; try /api/products:id ..." });
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
