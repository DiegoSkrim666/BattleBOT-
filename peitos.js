const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if(!message.channel.nsfw) return message.reply("Este comando só pode ser utilizado em canais NSFW!");
  
  const boobs = [
    
    "https://i.pinimg.com/originals/b1/85/05/b185055575ba94ba40d1d45c1173966f.gif",
    "https://www.intoxianime.com/wp-content/uploads/2016/12/Keijo-Episode12-Omake-7.gif",
    "https://i.pinimg.com/originals/92/2a/7b/922a7b9d2bc7915b3cfaaf838698b8aa.gif",
    "https://ptanime.com/wp-content/uploads/2016/10/Keijo-2-gif.gif",
    "https://steamuserimages-a.akamaihd.net/ugc/249213595949586147/B8B0CAD5C837CABA5F728885F1DD55DEC326B068/",
    "https://imgur.com/ISAjxDX",
    "https://media.giphy.com/media/3oszKgjGSJSFBccR0I/giphy.gif",
    "https://animeportifolio.files.wordpress.com/2014/08/eh5qg.gif",
    "https://imgur.com/tyFLvYk",
    "https://i.kym-cdn.com/photos/images/original/001/078/470/531.gif",
    "https://66.media.tumblr.com/e15ede3470347da920b068d5b2cefb28/tumblr_oa7o3vmqSv1upyvx7o2_500.gif",
    "http://admin.asgardproject.com.br/sys/arq/post/KS7UJ6/02-problema-de-peito-grande.gif",
    "https://img.buzzfeed.com/buzzfeed-static/static/2016-10/21/17/asset/buzzfeed-prod-fastlane03/anigif_sub-buzz-12808-1477084090-10.gif",
    "https://38.media.tumblr.com/3a035751eec10fa99d842f4fab9e90ae/tumblr_nkrsxbpAVv1qb1bi1o1_400.gif",
    "https://media1.tenor.com/images/3f3a1bbc778de40e3e6d2d7260436c1c/tenor.gif?itemid=4708825",
    "https://ladimurfi.files.wordpress.com/2012/10/tumblr_m4c09ryq4t1r9n0vbo1_250.gif",
    "https://i.pinimg.com/originals/d7/c2/8b/d7c28b04542bbba6d88def504524be50.gif",
    "http://admin.asgardproject.com.br/sys/arq/post/42XSWT/02-asiatica-ensina-como-bater-palmas-sem-as-maos.gif",
    "https://capinaremos.com/wp-content/uploads/sites/2/2015/09/0917-peitos.gif",
    "https://terrademordor.files.wordpress.com/2014/01/nao-ta-afim-de-fazer-nada-hoje.gif",
    "http://3.bp.blogspot.com/-Rk9n7NBS5go/Uwv-SVbpXvI/AAAAAAAABQk/WSOzKo7m4UI/s1600/2014+-+1.gif",
    "http://leitorcabuloso.com.br/wp-content/uploads/2014/04/3427himiko_petitegif.gif",
    "https://i.imgur.com/aXyzRZR.gif",
    "https://pa1.narvii.com/6473/a9bdf7ecc55460ab36dc3f4e658df172cf2dba19_hq.gif",
    "https://www.satirinhas.com/wp-content/uploads/2015/04/gif-hipnotizante-exerc%C3%ADcios-f%C3%ADsicos.gif",
    "https://pa1.narvii.com/6560/b807a4b076d6b38ecebe5e39bdfc0cbf910c0d51_hq.gif",
    "https://pa1.narvii.com/6319/9e968934e55694fd94212d02979192dd437aa625_hq.gif",
    "http://hentai.bestsexphotos.eu/wp-content/uploads/2016/12/tumblr_odu18m8ZGv1ta7pubo2_500.gif",
    
    
    
    
  ]
  
  const randomboobs = boobs[Math.round(Math.random() * (boobs.length - 1))];
  
  const embed = new Discord.RichEmbed()
  .setDescription("Boobs")
  .setImage(randomboobs)
  .setColor("RED")
  .setTimestamp();
  
  message.channel.send(embed);
  
    

}