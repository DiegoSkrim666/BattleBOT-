// Reinicialização de verificação
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);


const router = express.Router();

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const redirect = encodeURIComponent('http://localhost:50451/api/discord/callback');

router.get('/login', (req, res) => {
  res.redirect(`https://discordapp.com/api/oauth2/authorize?client_id="568512543308513280"&scope=guilds&response_type=code&redirect_uri="index.html"`);
});

// BOT
const Discord = require('discord.js'),
      config = require('./config.json'),
      moment = require('moment'),
      ops = require('opusscript'),
      Enmap = require('enmap'),
      fs = require('fs'),
      firebase = require('firebase'),
      client = new Discord.Client();

      var firebaseConfig = {
        apiKey: "AIzaSyA23r8b06z9atWCpOqy1QXrqVSEASaUESw",
        authDomain: "vivika-2041f.firebaseapp.com",
        databaseURL: "https://vivika-2041f.firebaseio.com",
        projectId: "vivika-2041f",
        storageBucket: "",
        messagingSenderId: "17069848614",
        appId: "1:17069848614:web:3f3bf6e24d2f2b99"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
  
const database = firebase.database();

fs.readdir('./events/', (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    console.log(`Iniciando o pré-carregamento de eventos.\n${eventName}`);
    client.on(eventName, event.bind(null, client));
    
  });
});

client.commands = new Enmap();


fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`pré carregamento de comandos\n${commandName}`);
    client.commands.set(commandName, props);
  });
});;
const active = new Map();

client.on('ready', () => {
  client.user.setStatus('dnd')
  setInterval(() => {
    const y = ["Olá, qualquer dúvida digite s!help", "s!help"];
    
    const yrandom = y[Math.round(Math.random() * (y.length -1))];
    
    client.user.setGame(yrandom, "https://www.twitch.tv/diegoskrim666");
    
  }, 9000);
  
  console.log("Inicializando\n============================================================\n");
  console.log(" ███████╗██╗   ██╗██████╗  ██████╗ ██████╗ ████████╗███████╗");
  console.log(" ██╔════╝██║   ██║██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝");  
  console.log(" ███████╗██║   ██║██████╔╝██║   ██║██████╔╝   ██║   █████╗ ");
  console.log(" ╚════██║██║   ██║██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ");
  console.log(" ███████║╚██████╔╝██║     ╚██████╔╝██║  ██║   ██║   ███████╗");
  console.log(" ╚══════╝ ╚═════╝ ╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝");                                                                            
  console.log("Inicializando\n============================================================\n");                                                                                                  
  console.log(`Inicializado com ${client.commands.size} comandos`);  
    
  }, 5000);

client.on('message', async message => {

       if(message.author.bot) return;
       if(message.channel.type === "dm") return;
       const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
       const comando = args.shift().toLowerCase();
       
      let prefix = config.prefix;
  
      let messageArray = message.content.split(" ");
      let cmd = messageArray[0];
      let msg = message.content.toLowerCase();
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      
      let author = message.author;
  
  /*     global.xp = '';
       global.nextLevel = '';
       let xpRandom = Math.floor(Math.random() * 7) + 8;

       database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
          .once('value').then(async function(snap) {
            if (snap.val() == null) {
              console.log(`O usuário: ${message.author.tag} da guilda: ${message.guild.name} acabou de ser registrado na minha database !\nID: ${message.author.id}`)
              database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
                .set({
                  xp: 0,
                  level: 1
                });
            } else {
              xp = snap.val().xp + xpRandom;
              nextLevel = snap.val().level * 400;
              database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
                .update({
                  xp: xp
                })
              if(nextLevel <= xp) {
                nextLevel = snap.val().level + 1;
                database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`)
                  .update({
                    level: nextLevel
                  })

                  await message.reply(`Você acabou de passar para o nivel ${nextLevel}!`)
                  await console.log(`O usuário: ${message.author.tag} da guilda: ${message.guild.name} acabou de passar para o level ${nextLevel}!\nID: ${message.author.id}`)
              }
            }
          }) */
      try {
        
        let commandfile = client.commands.get(cmd.slice(prefix.length));
        if(commandfile) commandfile.run(client, message, args);
        
        let ops = {
          
          active: active
          
        }
        
      } finally{ }
       
       
       })

client.on('message', message => {
    if(message.content == "<@612384131979935764>") {
      message.reply('Olá, eu sou um suporte para lhe auxiliar no grupo. Em via de dúvidas use: s!help');
    }
  
});

client.on('raw', async dados => {
  if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
  if(dados.d.message_id == "612400519335379009") {

  let servidor = client.guilds.get("612377789563273341");
  let membro = servidor.members.get(dados.d.user_id);
  let accept = servidor.roles.get("612377996409700357");
      

 if(dados.t === "MESSAGE_REACTION_ADD"){
    if(dados.d.emoji.name === "🔵"){
      if(membro.roles.has(accept)) return
      const db = require('quick.db')
      membro.addRole(accept)
      let alunox = db.fetch(`aluno_${membro.id}`)
      db.set(`aluno_${membro.id}`, 1)
      
    }else if(dados.d.emoji.name === "🔴") {
        membro.kick("Você foi expulso por não aceitar as condições do grupo", membro)
    }
           }
              if(dados.t === "MESSAGE_REACTION_REMOVE"){
                  if(dados.d.emoji.name === "🔵"){
                    if(dados.d.emoji.name === "🔵"){
                      if(membro.roles.has(accept)) return
                      membro.removeRole(accept)
                    }

                                    }
                
              }
  }else if(dados.d.message_id == "612683582825037825") {
  let servidor = client.guilds.get("612377789563273341");
  let membro = servidor.members.get(dados.d.user_id);
  let js = servidor.roles.get("612382674069487617"),
  	  php = servidor.roles.get("612381873221664808"),
  	  c = servidor.roles.get("612379423773032478"),
  	  python = servidor.roles.get("612379453997449253"),
  	  java = servidor.roles.get("612379467163238430"),
  	  csharp = servidor.roles.get("612379932965863424"),
  	  c_plus_plus = servidor.roles.get("612379391091146764"),
  	  perl = servidor.roles.get("612383881525461092"),
  	  html = servidor.roles.get("612381886420877325");

 if(dados.t === "MESSAGE_REACTION_ADD"){
    if(dados.d.emoji.id === "612652256290144267") {
    	if(membro.roles.has(js)) return
    	 membro.addRole(js)
      
    }else if(dados.d.emoji.id === "612650838409740288") {
        if(membro.roles.has(php)) return
        	membro.addRole(php)

    } else if(dados.d.emoji.id === "612658524685729912") {
    	if(membro.roles.has(java)) return
    		membro.addRole(java)

    } else if(dados.d.emoji.id === "612653240907071500") {
    	if(membro.roles.has(html)) return
    		membro.addRole(html)

    } else if(dados.d.emoji.id === "612651130152812584") {
    	if(membro.roles.has(python)) return
    		membro.addRole(python)

    } else if(dados.d.emoji.id === "612650958886928385") {
    	if(membro.roles.has(c)) return
    		membro.addRole(c)

    }else if(dados.d.emoji.id === "612654445687209997") {
    	if(membro.roles.has(csharp)) return
    		membro.addRole(csharp)

    }else if(dados.d.emoji.id === "612657297608409105") {
    	if(membro.roles.has(c_plus_plus)) return
    		membro.addRole(c_plus_plus)

    }else if(dados.d.emoji.id === "612658580453195845") {
    	if(membro.roles.has(perl)) return
    		membro.addRole(perl)
    }
           }
              if(dados.t === "MESSAGE_REACTION_REMOVE"){
              	if(dados.d.emoji.id === "612652256290144267") {
              		membro.removeRole(js)

              	}else if(dados.d.emoji.id === "612650838409740288") {
              		membro.removeRole(php)

              	}else if(dados.d.emoji.id === "612658524685729912") {
              		membro.removeRole(java)

              	}else if(dados.d.emoji.id === "612653240907071500") {
              		membro.removeRole(html)

              	}else if(dados.d.emoji.id === "612651130152812584") {
              		membro.removeRole(python)

              	}else if(dados.d.emoji.id === "612650958886928385") {
              		membro.removeRole(c)

              	}else if(dados.d.emoji.id === "612654445687209997") {
              		membro.removeRole(csharp)

              	}else if(dados.d.emoji.id === "612657297608409105") {
              		membro.removeRole(c_plus_plus)

              	}else if(dados.d.emoji.id === "612658580453195845") {
              		membro.removeRole(perl)
              	}

            }

      }

  
});

                
client.login(config.token);

