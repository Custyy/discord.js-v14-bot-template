const Discord = require('discord.js')
const fullIntents = [Object.entries(Discord.GatewayIntentBits).filter(intent => ![].includes(intent[0])).reduce((tax, [, Value]) => tax | Value, 0)]
const fullIntent = true

module.exports = {
    bot: {
        prefix: 'Prefix',
        owner: ['ownerID(s)'],
        token: 'Token',
        intents: fullIntent ? fullIntents : [Discord.GatewayIntentBits.Guilds, Discord.GatewayIntentBits.GuildMessages, Discord.GatewayIntentBits.MessageContent, Discord.GatewayIntentBits.GuildMembers],
    },

    database: {
        url: 'mongodb://localhost:27017/DatabaseName',
    }
}