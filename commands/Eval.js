const Discord = require('discord.js')

exports.run = async (client, message, args) => {

  if (!config.bot.owners.includes(message.author.id)) return
  try {
    let codein = args.join(" ")
    let code = eval(codein)
    if (codein.length < 1) return message.channel.send({ content: `Lütfen çalıştırmak istediğiniz kod bloğunu yazın.` }).then(message => setTimeout(() => message.delete(), 5000))
    if (codein == 'client.token') return message.channel.send({ content: `Çalıştırdığınız kod bloğu zararlı gibi gözüküyor.` }).then(message => setTimeout(() => message.delete(), 5000))
    if (typeof code !== 'string')
      code = require('util').inspect(code, { depth: 0 })
    const Embed = new Discord.EmbedBuilder()
      .setColor('#ff00ff')
      .addFields([
        { name: '📥 Girdi', value: `\`\`\`js\n${codein}\`\`\`` },
        { name: '📤 Çıktı', value: `\`\`\`js\n${code.replace(client.token, 'Error')}\n\`\`\`` }
      ])
    message.channel.send({ embeds: [Embed] })
  } catch (Hata) {
    const Embed2 = new Discord.EmbedBuilder()
      .setColor('#f15a27')
      .addFields([
        { name: '📤 Giriş', value: `\`\`\`js\n${codein}\`\`\`` },
      ])
    message.channel.send({ embeds: [Embed2] })
  }
}

exports.conf = {
  aliases: ['eval']
}

exports.help = {
  name: 'Eval',
  description: 'Kod bloğu çalıştırır.'
}