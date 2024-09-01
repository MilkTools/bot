const { Client, GatewayIntentBits } = require('discord.js');

// Create a client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

// When the client is ready
client.once('ready', () => {
    console.log('Bot is ready to be online 24/7!');
});

// Message Listener 
client.on('messageCreate', message => {
    // If the message contain hi
    if (message.content.toLowerCase() === 'hi') {
        message.channel.send('Hello!');
    }
});

// Log in to Discord with your bot's token
client.login('YOUR_BOT_TOKEN'); 

