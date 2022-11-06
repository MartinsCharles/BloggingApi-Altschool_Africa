const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogUserSchema = new Schema ({

      firstname: {
        type: 'String',
        require:true,
      },

      lastname: {
        type: 'string',
        required:true,
      },

      username: {
        type: 'string',
        required:true,
      },

      email: {
        type: String,
        required: true,
        unique:true //email must be unique
      },

      password: {
        type: String,
        required: true,
        unique:true //password must be unique
      },

      profile_picture: {
        type:String,
        default: "",
      },


},

{timestamps:true},


)

module.exports = mongoose.model( "user", blogUserSchema)