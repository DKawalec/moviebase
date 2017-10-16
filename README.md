# README #

This is a simple exercise that uses [The MovieDB](https://www.themoviedb.org) database for movie data browsing.

## Setup explanation ##

The application is written in ES6 and transpiled to ES5 using Babel. App environment is set on Babel, with the following features:
* Support for Sass modules, automatic CSS compilation
* ESLint, with automated fixing via console command
* Hot reloading
* Unit testing with Mocha

Webpack config was based on a template I developed based on [Cory House's](https://github.com/coryhouse) excellent Pluralsight tutorial. I've been building various projects on it, tweaking the settings depending on individual project requirements.

This is a simplified version of that template, with no production setup and no Redux support.

## Console commands ##

* Install dependencies with `npm install`
* Run application with `npm start`. It also runs tests and ESLint, and watches for changes.
* For unit tests only, type `npm run test`.
* For ESLint only, type `npm run lint`. `npm run lint:fix` automatically fixes issues (to be used with caution).

When the application is ready after `npm start`, a default browser window is going to open with the app on localhost:3000. No additional commands are necessary.
