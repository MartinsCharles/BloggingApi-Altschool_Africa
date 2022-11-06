**A Blog App**
**Assesment **

**You are required to build a blogging api. The general idea here is that the api has a general endpoint that shows a list of articles that have been created by different people, and anybody that calls this endpoint, should be able to read a blog created by them or other users.**

**Requirements**

_Users should have a first_name, last_name, email, password, (you can add other attributes you want to store about the user)

A user should be able to sign up and sign in into the blog app

Use JWT as authentication strategy and expire the token after 1 hour

A blog can be in two states; draft and published

Logged in and not logged in users should be able to get a list of published blogs created

Logged in and not logged in users should be able to to get a published blog

Logged in users should be able to create a blog.

When a blog is created, it is in draft state

The owner of the blog should be able to update the state of the blog to published

The owner of a blog should be able to edit the blog in draft or published state

The owner of the blog should be able to delete the blog in draft or published state

The owner of the blog should be able to get a list of their blogs.

The endpoint should be paginated

It should be filterable by state

Blogs created should have title, description, tags, author, timestamp, state, read_count, reading_time and body.

The list of blogs endpoint that can be accessed by both logged in and not logged in users should be paginated,

default it to 20 blogs per page.

It should also be searchable by author, title and tags.

It should also be orderable by read_count, reading_time and timestamp

When a single blog is requested, the api should return the user information(the author) with the blog. The read_count of the blog too should be updated by 1

Come up with any algorithm for calculating the reading_time of the blog.

Write tests for all endpoints

Note:

The owner of the blog should be logged in to perform actions

Use the MVC pattern_

**What I managed to achieve**.

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

Only validated  users can perform CRUD actions on Posts

Posts are paginated by a count of 20

I also added a thunder client collection, it contains the test I ran on the program. 
