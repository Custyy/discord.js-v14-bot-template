const mongoose = require('mongoose')

module.exports = async (MONGO_URL) => {
    await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }).then(() => {
        console.log(`${chalk.green(' [ MongoDB ]:')} Database Başarıyla Bağlandı.`)
    }).catch(err => {
        console.log(`${chalk.red(' [ MongoDB ]:')} Database Bağlantısı Kurulamadı. ${err}`)
    })
}