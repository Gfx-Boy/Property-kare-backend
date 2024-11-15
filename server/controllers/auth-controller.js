const authmodel = require("../models/auth-model"); // Use require instead of import
// const bcrypt = require("bcrypt"); // Uncomment if bcrypt is used

// const saltrrounds = 10;

const registration = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // Check if the email already exists in the database
        const existingUser = await authmodel.findOne({ email: email });
        if (existingUser) {
            // If a user with that email already exists, send an error response
            return res.status(409).send("Email already in use");
        }
        
        // If the email does not exist, hash the password
        // const hashpassword = await bcrypt.hash(password, saltrrounds);
        console.log({email, password });
        
        // Create the user in the database
        await authmodel.create({
            email,
            password,
        });
        
        // Send success response
        res.status(201).send("User created successfully");
    } catch (error) {
        console.error(error);
        // Send a generic error response
        res.status(500).send("An error occurred during registration");
    }
};

module.exports = registration; // Use module.exports instead of export default
