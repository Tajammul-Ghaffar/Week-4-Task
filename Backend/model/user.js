const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
userFirstName: {
type: String,
required: true,
unique: true
},
userPassword:{
type: String,
required: true,
unique: true
}
});

const user = mongoose.model("user", userSchema);

module.exports =user;