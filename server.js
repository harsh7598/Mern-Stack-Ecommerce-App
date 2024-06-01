
import  express  from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from 'morgan';
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";


//config env file
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//middelwares
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth', authRoutes);


//rest api
app.get("/", (req, res) => {
  res.send("<h1>Welcome To Ecommerce App</h1>");
});

//Port
const PORT = 8080;

//run listen
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgCyan.white);
});
