RESTFUL ROUTES

name     url        verb            desc.
==========================================================
INDEX   /dogs       GET     displays a list of dogs
NEW     /dogs/new   GET     displays form to make a new dog
CREATE  /dogs       POST    add new dog to DB
SHOW    /dogs/:id   GET     shows info about one dog
EDIT    /dogs/:id/edit GET  Dog.findByIdAndUpdate()

REST - a mapping between HTTP routes and CRUD


ADD COMMENTS ROUTE
NEW     campground/:id/comments/new     GET
CREATE  campground/:id/comments         POST

##Add User Model

##Routes refactor
1. campgrounds routes
2. comments routes
3. user routes

##Data collection association + Authentication
1. to comment, the current user info is automatically associated (in comment module)
2. save username+id to the newly created campground and the campgrounds can be viewed only after loggedin 
3. users can edit/delete their own comments and posts

##Authorization
1. figure out what can do once loggedin

##UI
1. Using connect-flash to show error message for account loggin
2. Landing page
3. header/footer