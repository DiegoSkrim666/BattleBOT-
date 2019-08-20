const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  message.delete();
  
  const say = args.join(" ");
  const embed = new Discord.RichEmbed()
  .setDescription(`${say}`)
  .setColor("RANDOM");

  console.log(`Comando say utilizando na guild: ${message.guild} + ID: ${message.guild.id}`)
  message.channel.send(embed);
  
  
  
  
}