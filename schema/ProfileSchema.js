const { model, Schema } = require('mongoose');


const Item = new Schema({
  name: { type: String, required: true },
  aliases: { type: Array, default: [] },
  description: String,
  cost: { type: Number, required: true },
});


const ProfileSchema = new Schema({
  userID: { type: String, required: true },
  coins: { type: Number, default: 1000, min: 0 },
  bank: { type: Number, default: 0, min: 0 },
  inventory: [Item]
});

module.exports = model("ProfileSchema", ProfileSchema)
