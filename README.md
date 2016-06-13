# swapi
A sample SPA built using [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/), [Material-UI](http://www.material-ui.com/#/) and [Firebase](https://firebase.google.com/) to display data from [The Star Wars API](http://swapi.co/).

The basic data from the API is cached in Firebase for faster loading. It is updated regularly using Azure WebJob. The Caching Script is available in "azure_webjob" folder.

The live website is available [here](https://swapi-fire.firebaseapp.com/people). It uses Firebase Hosting.

This project is built using [react-slingshot](https://github.com/coryhouse/react-slingshot) starter-kit with some modifications.


#### Running the test
To run the specs, please install and start [selenium-standalone](https://www.npmjs.com/package/selenium-standalone), then run "npm run test"
