const { Client, IntentsBitField } = require('discord.js');
const token = process.env['token'];
const client = new Client({
  intents: ['GuildMessages', 'Guilds']
});

const targetUserId = '549966042185859085'; // ID del usuario al que se responderá

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  // Verificar si el mensaje fue enviado por el usuario objetivo
  if (message.author.id === targetUserId) {
    // Responder al mensaje del usuario objetivo
    message.reply('https://media.discordapp.net/attachments/947267307648974928/1077686980277706762/Faeox49X0AA1Jf7.png');
  }
});

client.login(token);