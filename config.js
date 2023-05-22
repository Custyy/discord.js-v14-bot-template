const Discord = require('discord.js')

module.exports = {
    bot: {
        prefix: 'Prefix',
        owner: ['ownerId(s)'],
        token: 'Token',
        intents: [Object.entries(Discord.GatewayIntentBits).filter(intent => ![].includes(intent[0])).reduce((tax, [, Value]) => tax | Value, 0)],
    },

    database: {
        url: 'mongodb://localhost:27017/DatabaseName',
    }
}