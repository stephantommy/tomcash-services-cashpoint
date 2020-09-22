module.exports = {
    host: process.env.HOST || '0.0.0.0',
    port: process.env.PORT || 8080,

    mongoUrl: process.env.MONGODB_URL || 'mongodb+srv://db_user:db_pass@cluster0.5vgix.mongodb.net/<testDB>?retryWrites=true&w=majority',
    //mongoUrl: process.env.MONGODB_URL || 'mongodb://localhost:27017/testDB'
}
