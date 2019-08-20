const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if(!message.channel.nsfw) return message.reply("Este comando só pode ser utilizado em canais NSFW!");
  
  const boobs = [
    
  "https://animeporngif.com/wp-content/uploads/2018/06/1012630730719198destined_for_love_episode_12830.gif",
  "http://i.imgur.com/oZygXPo.gif",
  "https://66.media.tumblr.com/8b19c2c0cb2e07ae58ae86ec05a9dc86/tumblr_n0yvdiPEZe1sk8ja7o3_500.gif",
  "https://cdnio.luscious.net/239/lusciousnet_9b16f0edab70f0e2a90e3a8_985257570.gif",
  "https://i.kym-cdn.com/photos/images/newsfeed/000/981/962/b8e.gif",
  "http://66.media.tumblr.com/d7e517e882fc7333eb01513a2e5b849d/tumblr_mz6cmclK3U1tpn5feo1_400.gif",
  "http://xxxpicss.com/xxx/anime-hentai-cow-photo-tag-drop-factory-gif.gif",
  "http://img.comunidades.net/rub/rubiaebeto/anime210.gif",
  "https://media1.giphy.com/media/14lU3LnWo94EF2/giphy.gif",
  "http://49.media.tumblr.com/e99633c3ab3c0bc68774740bc0a6c9b9/tumblr_nyky0tew5D1uzxg0io1_250.gif",
  "http://asset-f.soupcdn.com/asset/7146/8522_f66b.gif",
  "https://media.giphy.com/media/o3mN7VMbdmNsQ/giphy.gif",
  "https://media.giphy.com/media/1n75ZbSERTzPRShTqn/giphy.gif",
  "https://media.giphy.com/media/1D7TBkmqZfrZS/giphy.gif",
  "https://media2.giphy.com/media/Xz6kIi2DpjqRG/source.gif",
  "https://cdn.discordapp.com/attachments/609954554838122497/610300332978995222/B87DEDEDA54C76F19D35DEF024E041311CD820FD.png",
  "https://i.pinimg.com/originals/c9/4d/47/c94d472ddfba2bc7a41346798fe241d2.gif",
  "https://media1.tenor.com/images/6e33d640ace2ef8e2cafa7588b2b4a10/tenor.gif?itemid=6218275",
  "https://media0.giphy.com/media/WjpKQs2rOVZPW/giphy.gif",
    
    
    
    
    
  ]
  
  const randomboobs = boobs[Math.round(Math.random() * (boobs.length - 1))];
  
  const embed = new Discord.RichEmbed()
  .setDescription("Ass")
  .setImage(randomboobs)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(embed);
  
    

}