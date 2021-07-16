module.exports = async (req) => {
  // object desctructuring
  const { client, fs } = req;

  const command_files = fs.readdirSync('./commands/')
  .filter(file => file.endsWith('.js'));

  for(const command_file of command_files){
    const command = require(`../commands/${command_file}`);
    if(!command.name) return;
    console.log('registered command: %s', command.name);
    // we're gonna save the file aswell as all the command data to the command object
    client.commands.set(command.name, { ...command, file: command_file });
  };
};
