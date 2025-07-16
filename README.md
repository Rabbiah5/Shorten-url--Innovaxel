Project Name
URL Shortener API using Node.js, Express, Sequelize, and MySQL

Project Summary
This project lets users turn long website links into short ones. It also allows us to manage those links with create, view, update, delete, and usage tracking features.

Branch Info
The full working code is in the "dev" branch. After cloning the project, switch to the dev branch to use the correct code.

Technologies Used
This project uses Node.js for the backend, Express for building the API, Sequelize for handling the database, and MySQL for storing data.

Main Features
We can create short links, view the original link, change an existing link, delete a link, and see how many times it was used.

How to Set It Up
First, clone or download the project to the computer. Then open the folder in the terminal or code editor.

Install Packages
Use the command npm install to install all the required files and libraries.

Database Setup
Open MySQL and create a new database named url_shortener. We do not need to create any tables. The app will do it for we automatically.

Run the Project
After setting up, run node server.js in the terminal. The server will start and connect to the database. We can then use the API on the local machine.

How to Use the API
We can test the API using Postman.
Use the create route to make a short link.
Use the get route to get the original link.
Use the update route to change a link.
Use the delete route to remove a link.
Use the stats route to check how many times a link was opened.

Extra Notes
This project uses the nanoid library to make short codes. The tables are created automatically. We can also use a .env file to keep the database login info safe.

Developer
Rabbiah Qamar