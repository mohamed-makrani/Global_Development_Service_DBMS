const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // Chaîne de connexion MongoDB
        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            // Supprimer useFindAndModify et useCreateIndex
            // Utilisez plutôt les options suivantes :
            // useFindAndModify: false,
            // useCreateIndex: true,
            // Utilisez ces options à la place :
            // useFindAndModify: false,
            // useCreateIndex: true
        });

        console.log(`MongoDB connected : ${con.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;
