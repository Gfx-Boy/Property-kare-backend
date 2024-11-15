const authmodel = require("../models/auth-model"); // Use require instead of import

const getdata = async (req, res) => {
    try {
        // Get data from the database
        let userData = await authmodel.find();
        res.status(200).send(userData);
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while fetching data");
    }
};

module.exports = getdata; // Use module.exports instead of export default
