const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if(!message.channel.nsfw) return message.reply("Este comando só pode ser utilizado em canais NSFW!");
  
  const boobs = [
    
  "http://hentai.bestsexphotos.eu/wp-content/uploads/2016/12/tumblr_ofsjcfL0Ho1vpe4noo1_500.gif",
  "https://danbooru.donmai.us/data/__ari_ari_anaman_succubus_chinchin_haeteru_akumakko_drawn_by_majenta_rose__84d83468880954f577daf2a7dd24c021.gif",
  "https://dl.phncdn.com/gif/18189261.gif",
  "https://media0.giphy.com/media/3o7btLEJVwFu3lei9a/source.gif",  
  "https://i.imgbox.com/3wBICdXa.gif",
  "http://hentai.bestsexphotos.eu/wp-content/uploads/2017/05/tumblr_ojxtgudBE21toy0ydo1_500.gif",
  "http://hentai.bestsexphotos.eu/wp-content/uploads/2016/12/tumblr_odu18m8ZGv1ta7pubo2_500.gif",
    
    
    
  ]
  
  const randomboobs = boobs[Math.round(Math.random() * (boobs.length - 1))];
  
  const embed = new Discord.RichEmbed()
  .setDescription("Hentai")
  .setImage(randomboobs)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(embed);
  
    

}