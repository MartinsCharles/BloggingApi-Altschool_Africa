This is a BLog API created y Charles Martins
All codes are contained within the API folder
There are other folders and files within the API folder which houses the codes
Index.js is the entry
db.js contains the database connection code for mongodb which is used in this project;
function.js contains the function I have written to calculate the reading_time of the blogPosts. 
In the routes folder are the routes to CREATE, GET, DELETE, AND UPDATE POSTS called blog_posts.js; 
In the routes folder are the routes to CREATE, GET, DELETE, AND UPDATE USERS called blog_users.js;
In the routes folder are the routes to GET and POST called blog_states.js;
In the routes folder are the routes to SIGNIN and SIGNUP users called auth.js;
In the routes folder are the routes to authenticate user using JWT called jwtAuth.js; so far JWT isn't activated in this project
Bcrypt is used to hash the passwords, and secure the routes,
In the api_models folder, all schemas are provided for the states in blog_states.js, for the posts in blog_posts.js, for the user in blog_user.js; 
Only certified users can perform CRUD actions on Posts
Posts are paginated by a count of 20