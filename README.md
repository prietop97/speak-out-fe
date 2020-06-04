[![Maintainability](https://api.codeclimate.com/v1/badges/d7cd0bec7a79ce0d7fa1/maintainability)](https://codeclimate.com/github/Lambda-School-Labs/speak-out-fe/maintainability)

# Speak Out

You can find the deployed project at [speakout.pedroprieto.now.sh](speakout.pedroprieto.now.sh).

## Documentation

See [Backend Documentation](https://github.com/prietop97/speak-out-be) for details on the backend of our project.

## Contributors

|                                                                                      [Pedro Prieto](https://github.com/prietop97)                                                                                       |                                                                                     [Eric S Richards](https://github.com/Chards79)                                                                                     |                                                                                        [Jessica G Cooper](https://github.com/JessicaGCooper)                                                                                         |                                                                                          [Chase Hooper](https://github.com/HoopCha)                                                                                          |                                                                                          [Dave Vazquez](https://github.com/dave-vazquez)                                                                                          |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                                                                                                                         |
|                                              [<img src="./profile-pictures/pedro-prieto.png" width = "200" />](https://github.com/prietop97) </br>Full Stack Web Developer                                              |                                            [<img src="./profile-pictures/eric-s-richards.png" width = "200" />](https://github.com/Chards79) </br>Full Stack Web Developer                                             |                                                [<img src="./profile-pictures/jessica-g-hooper.png" width = "200" />](https://github.com/JessicaGCooper) </br>Full Stack Web Developer                                                |                                                 [<img src="./profile-pictures/chase-hooper.png" width = "200" />](https://github.com/HoopCha) </br>Full Stack Web Developer                                                  |                                         [<img src="./profile-pictures/dave-vazquez.png" width = "200" />](https://github.com/dave-vazquez) </br>Full Stack Web Developer /</br> Team Lead                                         |
| [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/prietop97) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/pedroprieto-dev/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Chards79) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/eric-s-richards/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/JessicaGCooper) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jessica-cooper-17730748/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/HoopCha) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/chase-hooper-5794a5158/) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/dave-vazquez) [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/david-vazquez-b6172770/) |  |

<br>
<br>

![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)
![React](https://img.shields.io/badge/react-v16.7.0--alpha.2-blue.svg)

## Project Overview

[Trello Board](https://trello.com/b/SJHPrjVM/labs-20-speak-out)

[Product Canvas](https://www.notion.so/Speak-Out-bf0efc0a7c3847a4b3bfc33d9a12c6e9)

[UX Design files](https://www.figma.com/proto/lAawtUck67YJkPuZQK2Vlo/UX6-Group-Project-Speak-Out.?node-id=746%3A21505&viewport=182%2C561%2C0.0289407130330801&scaling=min-zoom)

Easy-to-use, ‘cloud application’ that promotes school’s quality education at an affordable price, enables parents to register their children for classes, schedule a placement test (or have a student to take a placement test online), pay tuition, and track their childrens’ success at school.

### Key Features

- Add/View/Update Student Record
- Add/View/Update Staff Records
- Online Student Registration
- Record Student Attendance

## Tech Stack

### Front end built using:

#### Front end framework is React

- Familiarity is one the biggest advantage using React, everyone can start coding right day one.
- A popular js library that is fast, scalable, simple, and maintained by a lot of developers.
- We also are likely to have a need to reuse modular units of code (due to student info) that will appear in our various routes/views.
- We also want something that is performant and easy to maintain/extend.

## Material UI - a UI framework that works well with React.

- For primary styling of the site. Given the number of developers who may work on the app, there could be difficulty achieving stylistic uniformity across all views (the "too many cooks in the kitchen" issue). Material UI would allow for a clean and consistent user interface, and save time, since it is implemented in a standard way regardless of who is using it.
- Pros: Reusable, prebuilt components save time

## Styled Components - an add-on for creating dynamic styles directly in React components.

- Use Case: Having a base library implemented for overall site styling will cover most use cases, but we may need more flexibility on a per-component basis and the ability to add/alter styles dynamically based user interaction/the state of the application, and Styled Components can provide this.
- Pros: easy to use, easy to create, can make them custom

#### Front end deployed to Netlify

#### [Back end](https://github.com/Lambda-School-Labs/speak-out-be) built using:

- Node.js is an open-source, cross-platform, JavaScript run-time environment that executes JavaScript code outside of a browser.
- Node.js allows the team to build platform-independent web apps.
- Popular, easy to use, and allows us to write JS on the backend, access to NPM packages
- Express is a web server application designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.
- On Top of Node.js it allows the team to make a REST API to make a web server and it allows flexibility through the routes api that express provides.
- It's highly flexible for all different kinds of API requirements, supports middleware which are easy to create, and a huge number of packages available on NPM.

List the rest of the back end end features and libraries in the same format as the framework above

## PostgreSQL - also known as Postgres, is a free and open-source relational database

- Using postgresql will help us link up data to one another which will help us identify data uniquely.
- Popular, well-supported, well-documented and has a free tier for developing environments.

## Passport JS - A extremely flexible and modular authentication middleware for express.

- PassportJS will give us a way to handle authentication in different strategies based on the stakeholders needs.
- Passport is a well documented authentication library and works very well with node and express

# Installation Instructions

`npm install` within the client directory

## Other Scripts

    * build - creates a build of the application
    * start - starts the production server after a build is created

# Contributing

When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./CODE_OF_CONDUCT.md). Please follow it in all your interactions with the project.

## Issue/Bug Request

**If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**

- Check first to see if your issue has already been reported.
- Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
- Create a live example of the problem.
- Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes, where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).
