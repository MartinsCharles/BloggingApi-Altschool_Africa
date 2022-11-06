// const passport = require("passport");
// const localStrategy =require ('passport-local').Strategy;
// const blog_user = require ("../api_models/blog_user");
// const JWTstrategy = require ('passport-jwt').Strategy;
// const ExtractJWT = require ('passport-jwt').ExtractJwt;
// require ("dotenv").config();

// passport.use(
//     new JWTstrategy(
//     {
//         secretOrKey: process.env.JWT_ACCESS_TOKEN,
//         jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')

//     },
    
//     async (token,done)=> {
//         try{
//             return done(null,token.user);

//         } catch (error){
//             done(error);
//         }
//     }


//     )
// );

// // SIGNUP
// passport.use (
//      'signup',
//     new localStrategy (
//         {
//             usernameField: "username",
//             passwordField: "password"
//         },
//            async (username,password,done)=>{
//              try{
//                 const user = await blog_user.create({username,password});

//                 return done (null, user);
//             } catch (error){
//                 done(error);
//             }
//         })
//     )


// // signin

