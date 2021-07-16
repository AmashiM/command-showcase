module.exports = {
  name: "bal",
  async execute(message, args, client, Discord, ProfileData, user, userQuery){
    await message.channel.send(`you have ${user.coins} amount of coins`);
  }
}
