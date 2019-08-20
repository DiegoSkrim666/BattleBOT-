const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  
  let kiss = [
    
    "https://cdn.discordapp.com/attachments/277519777449377794/282240399735521281/40071-Anime-Kiss-Arte-De-La-Espada-En-Linea-Kirito-Asuna.gif",
    "https://cdn.discordapp.com/attachments/277519777449377794/282240428265439232/a5b892b2e5ea243029bdf25f48f6e16d.gif",
    "https://cdn.discordapp.com/attachments/277519777449377794/282240446216929282/anime-cat-chibi-cute-Favim.com-4722517.gif",
    "https://i.pinimg.com/originals/f8/88/15/f88815fd60acb642622566fa6969ff5d.gif",
    "https://i.pinimg.com/originals/6f/c2/5f/6fc25fdd3e22d89b19c3ea76d11789e6.gif",
    "hhttps://media2.giphy.com/media/tZmWHlQT36oZW/giphy.gif",
    "https://data.whicdn.com/images/309929295/original.gif",
    "https://utinuti.files.wordpress.com/2017/04/kuzunohonkai-episode9-omake-7.gif?w=300&h=169",
    "https://i.pinimg.com/originals/c1/e1/98/c1e198a514380ebc2956734024a815c9.gif",
    "https://media2.giphy.com/media/G3va31oEEnIkM/giphy.gif",
    "http://4.bp.blogspot.com/-pqallYs571I/VaIDrZQuzeI/AAAAAAAAPO8/MPS2XTbGztk/s1600/53749af531dd598b87007efd567363f4.gif",
    "https://pa1.narvii.com/6248/f5bd8d1ed60b4f8305abf89433d07dc5b0106691_hq.gif",
    
    
    
  ]
  
  const xkiss = kiss[Math.round(Math.random() * (kiss.length - 1))];
  
  const rUser = message.mentions.members.first()
  
  if(!rUser){
    message.reply("Você não mencionou nenhum usuário!")
  } else {
    
  const embed = new Discord.RichEmbed()
  .setDescription(`${message.author.tag} você beijou ${rUser}`)
  .setImage(xkiss)
  .setTimestamp()
  .setColor("RED");
  
  message.channel.send(embed)
  
    
  }
  
  
  
  
}