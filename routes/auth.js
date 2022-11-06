const router = require ("express").Router();
const User = require ("../api_models/blog_user");
const bcrypt = require ('bcrypt');
const passport = require ('passport')
// const jwt = require ('jsonewebtoken');
require ('dotenv').config();

// // JWT AUTH SIGN UP

// router.post (
//     'signup',
//     passport.authenticate('signup', {session:false}), async (req,res,next)=>{
//         res.json({
//             message:"signup successful",
//             user:req.user
//         });
//     }
// );



// SIGN UP 

router.post("/signup", async(req,res)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt)
        const newUser = new User ({
            firstname: req.body.firstname,
            lastname:req.body.lastname,
            username: req.body.username,
            email:req.body.email,
            password:hashPassword,
        });
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err)
        res.status(500).send({
            message:"Cannot connect to database"
        })
    }
} )


// SIGN IN

router.post("/signin", async(req,res)=>{
    try {
          const user = await User.findOne({
            username: req.body.username
          })
          !user && res.status(400).json("User does not exist")

          const validateUser = await bcrypt.compare(req.body.password, user.password)
          !validateUser && res.status(400).json("You've entered a wrong password")

          const {password, ...others} = user._doc;
          res.status(200).json(others)
    }catch (err){

        console.log(err)
        res.status(500).send({
            message:"Cannot connect to database"
      })
    }
}

)



module.exports = router;