const Discord = require('discord.js')
const config = global.config = require('./config.js')
const client = global.client = new Discord.Client({ intents: [Object.entries(Discord.GatewayIntentBits).filter(intent => ![].includes(intent[0])).reduce((tax, [, Value]) => tax | Value, 0)] })
const fs = require('node:fs')
const { connect, connection } = require('mongoose')
const moment = require('moment')
require('moment-duration-format')
require('./util/eventLoader.js')(client)
moment.locale('tr')

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection()

fs.readdir('./commands/', (Error, Files) => {
    if (Error) console.error(Error)
    Files.forEach(command => {
        let Props = require(`./commands/${command}`)
        console.log(`(*): Yüklenen komut: ${Props.help.name}.`)
        client.commands.set(Props.help.name, Props)
        Props.conf.aliases.forEach(Alias => {
            client.aliases.set(Alias, Props.help.name)
        })
    })
})

client.on('ready', async () => {
    const { author } = require('./package.json')
    client.user.setPresence({ activities: [{ name: `👀 ${author}`, type: Discord.ActivityType.Watching, url: 'https://twitch.tv/cNed' }] })

    console.log(`(*): Logged in as ${client.user.tag}!`)
})

client.login(config.bot.token).catch(() => {
    console.log('(*): Provided token is invalid. Please check your token and try again.')
    process.exit(0)
})

connect(config.database.url, config.database.options)

connection.on('connected', () => {
    console.log('(*): Database connection established')
})

process.on('uncaughtException', (err) => {
    if (err === 'DiscordAPIError: Missing Access') return console.log(`(!): ${err}`)
    console.log(err)
})