

module.exports = {
  name: "beg",
  async execute(message, args, client, Discord, ProfileData, user, userQuery){

    let min = 10;
    let max = 25;
    // max minus the min to find the median amount
    let median = max - min;
    // get the amount we'll be giving to the user
    let amount = Math.floor(Math.random() * median) + min;

    // this is the same as calling "find one and update"
    await ProfileData.updateOne(userQuery, {
      "$inc": { "coins": amount }
    });

    await message.channel.send(`You Have Begged and Gained ${amount}`);
  }
}
