const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  const randomNumber = Math.floor(Math.random() * (6 - 1) + 1);
  
  if(randomNumber == 2) {
    const embed = new Discord.RichEmbed();
    embed.setTitle("O que será que aconteceu?")
    embed.setThumbnail(message.author.avatarURL);
    embed.setColor("RED")
    embed.setDescription(message.author + " **Você tomou um tiro no peito**")
    embed.setFooter("Solicitado por " + message.author.tag, message.author.displayAvatarURL)
    message.channel.send(embed)
  }
  else if(randomNumber == 3) {
    const embed = new Discord.RichEmbed();
    embed.setTitle("O que será que aconteceu?")
    embed.setThumbnail(message.author.avatarURL);
    embed.setColor("RED")
    embed.setDescription(message.author + " **Você saiu ileso**")    
    embed.setFooter("Solicitado por " + message.author.tag, message.author.displayAvatarURL)
    message.channel.send(embed)
  } else if(randomNumber == 4){
    
    const embed = new Discord.RichEmbed();
    embed.setTitle("O que será que aconteceu?")
    embed.setThumbnail(message.author.avatarURL);
    embed.setColor("RED")
    embed.setDescription(message.author + " **Você levou um tiro de raspão!**")    
    embed.setFooter("Solicitado por " + message.author.tag, message.author.displayAvatarURL)
    message.channel.send(embed)
  } else {
    
    const embed = new Discord.RichEmbed();
    embed.setTitle("O que será que aconteceu?")
    embed.setThumbnail(message.author.avatarURL);
    embed.setColor("RED")
    embed.setDescription(message.author + " **Você foi baleado na perna, porém, morreu de hemorragia!**")    
    embed.setFooter("Solicitado por " + message.author.tag, message.author.displayAvatarURL)
    message.channel.send(embed)
    
  }
  
}