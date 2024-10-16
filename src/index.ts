import express from "express";
import connectDB from "./utils/db";
import authRoutes from "./routes/userRoutes";
import endpoints from "./config/endpointsConfig";
const corsConfig = require('./config/corsConfig').default; 

const app = express();

connectDB();

app.use(corsConfig);

app.use(express.json());

app.use(endpoints.API_ENDPOINTS.MAIN.DEFAULT, authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
