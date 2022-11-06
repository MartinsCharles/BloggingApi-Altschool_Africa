const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogStateSchema = new Schema ({

     Draft: {
         type: String,
         required: true,
     },

     Published: {
        type: String,
        required: true,
    }
},

{timestamps:true},


)

module.exports = mongoose.model( "blog_states", blogStateSchema)