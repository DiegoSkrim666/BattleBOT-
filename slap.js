const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let punch = [
    "https://media.giphy.com/media/Zau0yrl17uzdK/giphy.gif",
    "https://media.giphy.com/media/gSWWPpv1kYRb2/giphy.gif",
    "https://media.giphy.com/media/LD8TdEcyuJxu0/giphy.gif",
    "https://media.giphy.com/media/uG3lKkAuh53wc/giphy.gif",
    "https://media.giphy.com/media/kwJFBHP4eddLO/giphy.gif",
  ]
  
  const xpunch = punch[Math.round(Math.random() * (punch.length - 1))];
  
  const sMember = message.mentions.members.first()
  const embed = new Discord.RichEmbed();
  if(!sMember) {
    message.channel.send(message.author + " Usuário não encontrado")
  } else {
    
  embed.setColor("RED")
  embed.setDescription(`${message.author.tag} **deu um tapa em ${sMember}**`)
  embed.setImage(xpunch)
  message.channel.send(embed)
    
  }
}