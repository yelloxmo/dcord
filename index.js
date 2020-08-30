const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === 'someone be my friend !') {
        message.channel.send('ok i will be your frend');
    }
});


client.login('NzQ5NjI2MjE1NzczNjM0NTgx.X0ut0Q.pZO1Y87cgU0r_Ww2mr0yz0SkJtk');

