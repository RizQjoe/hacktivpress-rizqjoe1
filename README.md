# hacktivpress-rizqjoe1

 blogging app sederhana dengan menggunakan framework Express JS ,Vuejs, dan database MongoDB

## REST API

List of user routes:

| Route             | HTTP          | Description      |
| -------------     |:-------------:| :----------------|
| /user/register    |POST           | Sign up with new user info|
| /user/login       |POST           | Sign in while get an access token based on credentials|
| /article          |GET            | Get all the articles info|
| /article/:id      |GET            | Get a single article info|
| /article          |POST           | Create a post (login user only)|
| /article/:id      |PUT            | Update a post with new  info (login user only)|
| /article/:id      |DELETE         | Delete a post (login user only)|

##RUN API server

cd server

npm install

npm start

for client side Read Readme in
cd client