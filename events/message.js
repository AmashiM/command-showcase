module.exports = async (Discord, client, ProfileData, message) => {
  if(message.author.bot || !message.content.startsWith(client.prefix)) return;

  const args = message.content.slice(client.prefix.length).split(/ +|\n/igm);
  const commandName = args.shift().toLowerCase();

  let cmd = client.commands.get(commandName);
  if(!cmd) return;

  // the data we'll put in to find the user
    let userQuery = { userID: message.author.id }

    // get the user
    let user = await ProfileData.findOne(userQuery);
    // if user not found create the user in the schema
    if(!user){
      let new_user = new ProfileData(userQuery)
      await new_user.save();
      user = await ProfileData.findOne(userQuery);
    };

  cmd.execute(message, args, client, Discord, ProfileData, user, userQuery);
}
