const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
    let hug = [
      "https://media.giphy.com/media/BXrwTdoho6hkQ/giphy.gif",
      "https://media.giphy.com/media/V8KnjUBg8mR8I/giphy.gif",
      "https://media.giphy.com/media/LeAvvCD0YncNG/giphy.gif",
      "https://media.giphy.com/media/nUz7d1sUppGta/giphy.gif",
      "https://media.giphy.com/media/Ih16mYfbCQDKw/giphy.gif",
    ]
  
  const xhug = hug[Math.round(Math.random() * (hug.length - 1))];
  
  const sMember = message.mentions.members.first()
  const embed = new Discord.RichEmbed();
  if(!sMember) {
    message.channel.send(message.author + " Usuário não encontrado")
  } else {
  embed.setColor("RED")
  embed.setDescription(`${message.author.tag} **Abraçou ${sMember}**`)
  embed.setImage(xhug)
  message.channel.send(embed) 
  }
}