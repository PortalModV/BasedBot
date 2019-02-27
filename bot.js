require('http').createServer().listen(3000)
var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready',function (evt) {
  logger.info('I EXIST REE');
});
bot.on('message',function (user, userID, channelID, message, evt){
  //prefix listen
  if (message.substring(0,3) == 'bb$'){
    var args = message.substring(3).split('');
    var cmd = args[0];

    args = args.splice(3);
    switch(cmd){
      case 'test':
      bot.sendMessage({
        to: channelID,
        message: 'Fuck you'
      });
      break;
    }
  }
});
client.login(process.env.TOKEN)
