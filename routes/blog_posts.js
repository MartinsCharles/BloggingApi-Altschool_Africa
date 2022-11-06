const router = require ("express").Router();
const User = require ("../api_models/blog_user");
const Post = require ("../api_models/blog_posts");

// CREATE A POST

router.post ("/", async (req,res)=> {
     const newPost = await new Post(req.body);
     try {
            const savedPost = newPost.save();
            res.status(200).json(newPost)
     }catch(err){
        console.log(err)
        res.status(500).send({
            message: "Post could not be created"
        })

     }
});



// UPDATE A POST

router.put("/:id", async(req,res)=>{
   try {

    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username){
         try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set:req.body
                }, {new:true}
                );
                res.status(200).json(updatedPost)
        } catch(err){
             res.status(500).json(err);
        }

    } else {
        res.status(401).json("You can only update your own post")
    }
   }catch(err){
      res.status(500).send({
        message: "Post could not be updated!"
      })
   }
});


// DELETE A POST

router.delete("/:id", async(req,res)=>{
    try {
 
     const post = await Post.findById(req.params.id);
     if (post.username === req.body.username){
          try {
                 await post.delete()
                 res.status(200).json("post has been deleted");
         } catch(err){
            res.status(500).json(err);
         }
 
     } else {
         res.status(401).json("You can only delete your own post")
     }
    }catch(err){
       res.status(500).send({
         message: "Post could not be updated!"
       })
    }
 });

//  GET A POST

router.get ("/:id", async (req,res)=> {
   read_count = req.params.read_count;
   try {
           const post = await Post.findById(req.params.id);
           read_count = read_count++
           res.status(200).json(post);
    }catch(err){
       console.log(err)
       res.status(500).send({
           message: "We could not retrieve the post"
       })

    }
});

// GET ALL POSTS

router.get ("/", async (req,res)=> {
    // Pagination, shows first 20
    const page = req.query.page;
    const limit = 20;
    const startIndex = (page-1)*limit;
    const endIndex = page*limit;


    const results ={}

    results.next= {
        page: page + 1,
        limit: limit,
    };

    results.previous = {
        page: page - 1,
        limit: limit,
    };

    results.results = page.slice(startIndex,endIndex) + " page(s) of results found" ;

    // Query parameters
    const username = req.query.user;
    const blogState = req.query.state;
    const author = req.query.author;
    const title = req.query.title;
    const tags=req.query.tags;
   
    try {
        let posts;
           if (username){
            posts = await Post.find({username});
           } else if (blogState){
            posts = await Post.find({
                blog_states: {
                $in:[blogState],
            } 
        });
           }else if (author){
            posts = await Post.find({author});
          }else if (title){
            posts = await Post.find({title});
         }else if (tags){
            posts = await Post.find({tags});
        }else {
            posts = await Post.find();
           }
              res.status(200).send({
                message:"Here are your results!",
                data:[
                    posts.slice(startIndex,endIndex),
                    results.results
                ]
              });
            }catch(err){
              console.log(err)
              res.status(500).send({
              message: "We could not retrieve the post"
           });
           }
        });



module.exports = router;