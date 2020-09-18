module.exports = {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3001,

    mongoUrl: process.env.MONGODB_URL || 'mongodb+srv://db_user:db_pass@cluster0.5vgix.mongodb.net/<testDB>?retryWrites=true&w=majority',
    //mongoUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/testDB'
}
