
console.log('started process')
const Discord = require('discord.js');
require('dotenv').config();
const fs = require('fs');
require('./connect');
const ProfileData = require('./schema/ProfileSchema');

const client = new Discord.Client();



client.prefix = 'nya ';
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const handler_req = {
  Discord,
  client,
  ProfileData,
  fs
}

const handlers = ['command_handler', 'event_handler'];

handlers.forEach(handler => {
  require(`./handlers/${handler}`)(handler_req);
});

client.login(process.env.TOKEN).catch(console.log)



