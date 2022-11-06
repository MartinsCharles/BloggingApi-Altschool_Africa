const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogPostSchema = new Schema ({

      username: {
        type: 'String',
        require:true,
        unique:true,
      },

      title: {
        type: 'String',
        require:true,
        unique:true,
      },

      description: {
        type: 'string',
        required:true,
      },

      photo:{
        type: 'string',
        required:false,
      },

      author:{
        type: String,
        required: true,
      },

      tags: {
        type: String,
        required: false,
      },

      read_count: {
        type: Number,
        required:false,
      },

      reading_time: {
        type: String,
        required: false,
      },

      body: {
        type: String,
        required: true,
      },

      state: {
        type: String,
        required: true,
      },

    },

    {timestamps:true},

    )

module.exports = mongoose.model( "blogPost", blogPostSchema)