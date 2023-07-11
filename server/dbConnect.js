const mongoose = require("mongoose");
const { ServerApiVersion } = require('mongodb');


module.exports = async () => {
    const mongoUri =
        "mongodb+srv://Shovan001:uIjtJqlTNnntoyk4@cluster0.ae0tr3o.mongodb.net/?retryWrites=true&w=majority";

    try {
        const connect = await mongoose.connect(mongoUri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
              }
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
