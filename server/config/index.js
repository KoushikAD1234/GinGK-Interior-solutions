require("dotenv").config()

module.exports = {
    mongoDB: {
        mongoDBUri: process.env.MONGO_HOST ,
        mongoDBOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
}