const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const GiftcardRoutes = require("./routes/GiftCardRoutes");
const AddCustomerRoutes = require("./routes/AddCustomersRoutes");
const cors = require("cors");

dotenv.config();
connectDB();

const corsOptions = {
    origin : "http://localhost:5173",
    methods: "GET , POST , PUT , DELETE ,PATCH, HEAD",
    Credential:true,
};

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use("/api/giftcard",GiftcardRoutes);
app.use("/api/customers",AddCustomerRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));