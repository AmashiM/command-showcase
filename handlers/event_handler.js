
module.exports = async (req) => {
  // object desctructuring
  const { Discord, client, ProfileData, fs } = req;

  const load_dir = async (dir) => {
    const event_files = fs.readdirSync(`./events/${dir}`).filter(file => file.endsWith('.js'));

    for(const file of event_files){
      const event = require(`../events/${dir}/${file}`);
      const event_name = file.split('.')[0];

      // instead of passing in a long list of arguments we're just gonna pass in 1 object named req
      client.on(event_name, event.bind(null, Discord, client, ProfileData,))
    };
  };

  ['client', 'guild'].forEach(e => {
    load_dir(e)
  })
};
