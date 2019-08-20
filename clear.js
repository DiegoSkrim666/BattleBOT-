const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Por favor, digite um número entre 2 e 100 para o número de mensagens a serem apagadas");

    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.reply("Apagou as mensagens");
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Erro: ${error}`));

}