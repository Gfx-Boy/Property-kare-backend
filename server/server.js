// Required dependencies
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const admin = require("firebase-admin");
const cors = require("cors");
const connectdb = require("./utils/db");
const Router = require("./router/loginrouter");
const router2 = require("./router/loginrouterdata");
const Router3 = require("./router/logindata");
const Router4 = require("./router/main-routes");
const Router5 = require("./router/property-routes");


// Initialize express app
const app = express();
const port = 5000;

// Middleware
app.use(cors({
    origin: "*",
    method: "*",
}));
app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

// Firebase initialization
const serviceAccount = require("./config/firebaseKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://property-karea-default-rtdb.firebaseio.com" // Update to your actual Firebase DB URL
});

// Firebase authentication middleware
function checkAuth(req, res, next) {
  if (req.headers.authtoken) {
    admin
      .auth()
      .verifyIdToken(req.headers.authtoken)
      .then(() => next())
      .catch(() => res.status(403).send("Unauthorized"));
  } else {
    res.status(403).send("Unauthorized!");
  }
}

// Routes
app.use("/property-kare", Router);
app.use("/property-kare", router2);
app.use("/property-kare", Router3);
app.use("/property-kare", Router4);
app.use("/property-kare", Router5);


// Secure Route Example
// app.use("/", checkAuth); // This middleware protects all routes after it

// Example route
app.get("/", (req, res) => {
  res.json({ message: "Data accessed from server!" });
});

// Connect to DB and start server
const startServer = async () => {
  try {
    await connectdb()
      .then(() => {
        console.log('Database Connected');
      });
    app.listen(port, () => console.log(`Server running on port ${port}`));
  } catch (error) {
    console.log(error);
  }
}

// Initialize the server
startServer();

// Export app for testing purposes
module.exports = app;
