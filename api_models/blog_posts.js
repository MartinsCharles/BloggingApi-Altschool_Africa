const Math = require ("mathjs");

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
        default: [],
        required: false,
      },

      read_count: {
        type: Number,
        default:0,
      },

      reading_time: {
        type: Number,
        default: 0,
      },

      body: {
        type: String,
        required: true,
      },

      state: {
        type: String,
        enum: ["draft", "published"],
        default: "draft",
      },

    },

    {timestamps:true, 
    toJSON: {virtuals:true},
    toObject: {virtuals:true}
    }
);


blogPostSchema.pre("save", function (next) {
  this.reading_time = Math.ceil(this.body.split(" ").length / 200);
  next();
});

module.exports = mongoose.model( "blogPost", blogPostSchema)
