const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  let slap = [
    "https://media1.tenor.com/images/2afd740d5f6e46183e5902dcbc31cd01/tenor.gif?itemid=13876327",
    "https://i.pinimg.com/originals/a5/9d/f3/a59df307e6bb26c6c0f1d726675ee934.gif",
    "https://static.wixstatic.com/media/88cc4d_605d974e0aa2475d82eb5a4f9ba28005.gif",
    "https://www.intoxianime.com/wp-content/uploads/2017/04/tumblr_ooub8fIHkT1qz64n4o2_400.gif",
    "https://utinuti.files.wordpress.com/2012/03/tumblr_lv8r0lagid1qgcvsy.gif",
    "https://media1.giphy.com/media/jLeyZWgtwgr2U/source.gif",
    "https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943",
    "https://media1.giphy.com/media/9U5J7JpaYBr68/source.gif",
    "https://media.giphy.com/media/AkKEOnHxc4IU0/giphy.gif",
    "https://i.kym-cdn.com/photos/images/newsfeed/001/040/951/73e.gif",
    
  ]
  
  const xslap = slap[Math.round(Math.random() * (slap.length - 1))];
  
  const sMember = message.mentions.members.first()
  const embed = new Discord.RichEmbed();
  if(!sMember) {
    message.channel.send(message.author + " Usuário não encontrado")
  } else {
    
  embed.setColor("RED")
  embed.setDescription(`${message.author.tag} **deu um tapa em ${sMember}**`)
  embed.setImage(xslap)
  message.channel.send(embed)
    
  }
}