## NoMore 2020 Vue / JS developer code test
### Introduction
The test centers around a small simple Vue application. The app is very simple and in many ways poorly written. And your job is to improve the quality of the code base.

### About the app
The appplciation is a very simple tool - a form of mixture between a "news generator" and a "to-do list" app. The functionality is very limited:
- The app has to database or persistence layer
- It allows the user to randomly generate a news source
- It gives the ability to go to the given site 
- And the ability to mark a source as "read"

### How the app is written
The app is written in plain Vue.js 2 and can be "run" by simply running: 

`npm run serve`

The code is not very well written and have a lot of improvement potential. Furthermore, the code is not implementing TypeScript or vue-decorators.

## Your task
### What you need to do:
- rewrite the application with the same basic functionality
- use TypeScript
- use Vue-decorators instead of basic JS approach
- apply "clean code" principles as you would on a proper project (google "uncle bob - clean code" in case you want our take on this - e.g. https://www.youtube.com/watch?v=7EmboKQH8lM)
- improve the existing functionality in order to handle common egde cases and how it is written
- make further adjustments assuming the code had to go into production and that this is part of a larger vue application that might re-use some of this code elsewhere
- make selective improvements to the design and UX

### How to proceed with the test
- fork the code into your own Github repository
- commit changes similar to how you would do on normal team
- once "ready to share" provide access to the repository to ahthomsen@gmail.com
- please share any assumptions or thoughts as part of the README.me (feel free to delete this one)