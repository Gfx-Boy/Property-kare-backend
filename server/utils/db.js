const mongoose = require("mongoose"); // Use require instead of import
const dotenv = require("dotenv"); // Use require instead of import

dotenv.config();

const connectDB = async () => {
    mongoose.set("strictQuery", true);
    console.log("Establishing connection to database...");
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log("DB CONNECTED");
            });
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB; // Use module.exports instead of export default
