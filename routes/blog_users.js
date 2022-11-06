const router = require ("express").Router();
const User = require ("../api_models/blog_user");
const bcrypt = require ('bcrypt');
const blogPosts = require ('../api_models/blog_posts')

// GET USER

router.get("/:id", async(req,res)=>{

    try {
         const user = await User.findById(req.params.id);
         const {password, ...others} = user._doc
         res.status(200).json(others);
    } catch (err){
        console.log(err)
        res.status(500).send({
            message: "User not found"
        })

    }
})


// UPDATE USER

router.put("/:id", async(req,res)=>{
    if (req.body.userId === req.params.id) {
        if (req.body.password){
            const salt = await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);
        }
    try {
           const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set:req.body,
           },
            {new:true}
            );
           res.status(200).json(updatedUser);
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message:"Something went wrong"
        });
    }
  } else {
     res.status(401).json("You cannot update this user. Only update your account.");
  }
})




// DELETE USER

router.delete("/:id", async(req,res)=>{
    if (req.body.userId === req.params.id) {

    try {
           const user = await User.findById(req.params.id);
    try {
           await blogPosts.deleteMany({username: user.username})
           await User.findByIdAndDelete(req.params.id)
           res.status(200).json("User deleted successfully!");
      } catch (err) {
        console.log(err)
        res.status(500).send({
            message:"Something went wrong!"
        });
    }
    } catch (err){
             res.status(404).send({
                message: "User doesn't not exist"
             });
          }   
  } else {
     res.status(401).json("You are not allowed to delete this account, this not yours!");
  }
})



module.exports = router;