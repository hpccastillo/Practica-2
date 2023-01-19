import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OrganizacionRoute from "./routes/OrganizacionRoute.js";
import PersonalRoute from "./routes/PersonalRoute.js";
import ProductosRoute from "./routes/ProductosRoute.js";
import MensajeRoute from "./routes/MensajeRoute.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(OrganizacionRoute);
app.use(PersonalRoute);
app.use(ProductosRoute);
app.use(MensajeRoute);

app.listen(process.env.APP_PORT, ()=>{
    console.log('Server up and running...');
});