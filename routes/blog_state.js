const router = require ("express").Router();
const blog_states = require("../api_models/blog_states");

router.post("/", async (req,res)=>{
    const newState= new blog_states(req.body);
    try {
          const savedState = await newState.save();
          res.status(200).json(savedState);
    } catch (err) {
        res.status(500).send({
            message: "cannot find blog state",
            data: err
        })
    }
})


router.get("/", async (req,res)=>{

    try {
          const states = await blog_states.find()
          res.status(200).json(states);
    } catch (err) {
        res.status(500).send({
            message: "Could not get state",
            data: err
        })
    }
})


module.exports = router;