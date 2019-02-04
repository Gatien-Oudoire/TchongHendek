const Discord = require('discord.js');

const bot = new Discord.Client();

var prefix = ("&");

bot.on('ready', function(){
    console.log("Bot en ligne !");
})
bot.on('message', message =>{
    if (message.content ==='site'){
        message.channel.send('Russian guy#5571  www.memes-fr.glitch.me');
    }
})
  bot.on('message', message => {
    if (message.content === 'fruit') {
        message.channel.send('bananes');
    }
  }) 
  bot.on('message', message => {
    if (message.content === 'parle') {
        message.channel.send('Bonjour !');
    }
  }) 
  bot.on('message', message => {
    if (message.content === 'ceci est un test')
  member.guild.defaultChannel.send(` ${member} ne t'inquietes pas c'est un test !`); 
})
bot.on('message', message => {
    if (message.content === 'avatar') {
      message.channel.send(message.author.avatarURL);
    }
  });

  bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(ch => ch.name === 'member-log');
    if (!channel) return;  
    // Do nothing if the channel wasn't found on this server
    // Send the message, mentioning the member
    channel.send(`Bienvenue sur le serveur, ${member}`);
  });

  bot.login('NTQwMDk2MTgwNDI4NzM0NDc3.Dzjuwg.7mNIcoMm_9dvIm4XltwBKWyGebg');
