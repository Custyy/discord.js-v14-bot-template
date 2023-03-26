const Discord = require('discord.js')
const config = global.config = require('./config.js')
const client = global.client = new Discord.Client({ intents: config.bot.intents })
const chalk = global.chalk = require('chalk')
const fs = require('fs')
const moment = require('moment')
require('moment-duration-format')
require('./util/eventLoader.js')(client)
require('./util/connectMongo.js')(config.database.url)
moment.locale('tr')

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

fs.readdir('./commands/', (Error, Files) => {
    if (Error) console.error(Error)
    console.log(`${Files.length} Komut Yüklenecek!`)
    Files.forEach(Pepe => {
        let Props = require(`./commands/${Pepe}`)
        console.log(` ${chalk.yellow('[]')} Yüklenen Komut: ${Props.help.name}.`)
        client.commands.set(Props.help.name, Props)
        Props.conf.aliases.forEach(Alias => {
            client.aliases.set(Alias, Props.help.name)
        })
    })
})

client.on('ready', () => {
    client.user.setPresence({ activities: [{ name: `${Discord.version} Bot Template - Custy`, type: Discord.ActivityType.Playing }] })
})

client.login(config.bot.token).then(() => {
    console.log(`${chalk.green(` [ ${client.user.username} ]:`)} Sistem kullanıma hazır. (${client.guilds.cache.size} sunucu, ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} kullanıcı)`)
}).catch(() => {
    console.log(`${chalk.green(` [ ! ]:`)} Botunuzun tokenini kontrol edin.`)
    process.exit(0)
})