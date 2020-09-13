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

## Task

### What was done

- The application was rewritten and the basic functionalities were retained
- Added support for TypeScript in the codebase
- Vue-decorators pattern/api was used instead of the options api which comes with Vue.js 2 by default
- Split page into components so it is easier to reuse across different other components/views (useful when the app grows big.)
- Notable UI/UX improvements:
  - Instead of displaying an articles's abstract when cursor is placed over the article, it is toggled per click on the article. So, by default now, an article's abstract is not shown, until the article is clicked
  - Added responsive design so the app is easier to look at on mobile devices, small screens and larger breakpoints - CSS Grids was taken advantage of here
  - Added a button to toggle the articles to display (unread/read) - by default, **unread** articles are displayed first, a user can then decide to see articles they've "marked as read" by clicking on the button
- A brief video recording has been made for the visual modifications. Please [check the recording here](https://www.loom.com/share/020310e79c014ac89995aad7eef721e3).
- The app was deployed to Netlify. You can [access it here](https://flamboyant-dubinsky-530416.netlify.app/)

Thank you.
