## Recipeezy

-Recipeezy is a web application for people that want to learn new recipes
-Users can type in what ingredients they have and they will recieve a list of recipes
-Users can also view trending recipes if they want to learn new recipes
-Users can post recipes or comments about recipes and see what others are posting

## Tech

-Recipeezy uses React for the frontend and NodeJS/Firebase for the backend. Firebase serves as Recipeezy's
database
-Boostrap and Material-UI were used for styling

## API Documentation

-The code that was used to build Recipeezy's backend can be found in the 'backend' folder
-The recipeezy firebase api can be found in package.json in proxy
-Create:
-User:
Purpose: creates a new user in the database
Endpoint: POST 'Recipeezy firebase api' + '/signup'
Response: 'user created successfully'
-User Post:
Purpose: creates a new comment in the database
Endpoint: POST 'Recipeezy firebase api' + '/scream'
Response: 'post created successfully'
-Read:
-User Post:
Purpose: gets details about a specific post
Endpoint: GET 'Recipeezy firebase api' + '/scream/:screamId'
response: details about the post in JSON
-Update:
-User Profile:
Purpose: update the users profile
Endpoint: PUT 'Recipeezy firebase api' + '/user'
Response: 'profile updated successfully'
Delete:
-User Post
Purpose: delete post
Endpoint: DELETE 'Recipeezy firebase api' + '/scream/:screamId'
Response: 'post deleted successfully'
