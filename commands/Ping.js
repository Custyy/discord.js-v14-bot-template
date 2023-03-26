const Discord = require('discord.js')

exports.run = async (client, message, args) => {
   message.channel.send(`\`🏓\` Latency is **${Date.now() - message.createdTimestamp}**ms!
\`💻\` API Latency is **${client.ws.ping}**ms!`)
}

exports.conf = {
   aliases: ['ping']
}

exports.help = {
   name: 'Ping',
   description: 'Botun gecikmesini gösterir.',
   usage: 'ping'
}