const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if(!message.channel.nsfw) return message.reply("Este comando só pode ser utilizado em canais NSFW!");
  
  const boobs = [
    
    "https://i.makeagif.com/media/7-24-2017/z84Yq_.gif",
    "https://gifed.video/gif/001/anime-hand-under-panties.gif",
    "https://i.pinimg.com/originals/29/a5/20/29a520059ce9e6cf37ddbccacb10ac86.gif",
    "https://cdn.discordapp.com/attachments/609954554838122497/610291023851159563/Z.png",
    "https://cdn.discordapp.com/attachments/609954554838122497/610291142524928022/th.png",
    "http://revlt.be/wp-content/uploads/anime-pussy-rubbing-5.gif",
    "https://cdn.discordapp.com/attachments/609954554838122497/610291640090755072/20434658.png",
    "http://nudebabes.realnakedgirls.net/wp-content/uploads/2018/07/tumblrpaofddakvdtvo-15318805938lpc4.gif",
    "https://cdn.discordapp.com/attachments/609954554838122497/610291823440691236/Z.png",
    "https://cdn.discordapp.com/attachments/609954554838122497/610292224323878912/gif-nude-pussy-gif-5.png",
    "https://static-ca-cdn.eporner.com/photos/587131.gif",
    "http://ripost.s3.eu-central-1.amazonaws.com/kepadatbazis/e5e70f024b47fcf76f3c6a16a2a34935a07c1fe3/437c328203439447c1c7ec9d56be085bdea7d8fb.gif",
    "http://bestsexgif.com/wp-content/uploads/2015/02/fingering-pussy.gif",
    "http://naughtyteens.eu/wp-content/uploads/2017/02/tumblr_n6xfnwKRoU1rs6a2oo1_400.gif",
    "https://i0.wp.com/vocesabianime.com/wp-content/uploads/2019/06/IsekaiQuartet-Episode9-Omake-1.gif?resize=600%2C328&ssl=1",
    "https://us.rule34.xxx/images/234/d5c18d7b83fef7610df957468a1756312a4d1af1.gif",
    "https://cdn.discordapp.com/attachments/609954554838122497/610293648227303434/images.png",
    "http://24.media.tumblr.com/1ecf8f050c0966992bb07164afac1f73/tumblr_myt7p1meER1rrsoino1_500.gif",
    "https://66.media.tumblr.com/f1d979e255e99f922c68f1e70c1d223e/tumblr_nb9gafRCzm1toy0ydo1_1280.gif",
    "http://juteandjackfruit.com/image/sexy-anime-ass-gif-4.gif",
    "https://img.fireden.net/a/image/1471/29/1471295659789.gif",
    "https://us.rule34.xxx/images/1207/d045d850472c61fedbec475e013eca31f46b1039.gif",
    "http://24.media.tumblr.com/5de13e0bc2beb88daa68d3353426fa6e/tumblr_mxuurrzvcr1sv5v4qo1_500.gif",
    "http://38.media.tumblr.com/033028f0a391b42418e8e362113bd5b2/tumblr_mzz2zfTBv21t90djyo1_400.gif",
    "https://bestsexpositions.com/pictures/eating-pussy-36.gif",
    
    
    
    
    
    
  ]
  
  const randomboobs = boobs[Math.round(Math.random() * (boobs.length - 1))];
  
  const embed = new Discord.RichEmbed()
  .setDescription("Pussy")
  .setImage(randomboobs)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(embed);
  
    

}