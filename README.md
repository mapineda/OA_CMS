# OA_CMS
OA_CMS is a CMS tool developed for Open-Austin

## Tech Used

Client side we are using [Aurelia](http://aurelia.io/), a front-end framework.

Server side we are using [Loopback]("http://loopback.io/"), an ExpressJS solution for REST APIs.

Also using [Yeoman]("http://yeoman.io/"), a scaffolding tool that will help us setup a basic structure for the application while helping us extend the application to various administrative scenarios.

## Overview

The Process in a nutshell:

- create the server side project (the Loopback NodeJs express app) with yeoman
- create the client side Aurelia SPA project (in a seperate folder apart from the server project)
- copy the aurelia app in the client folder of the server project
- do a small tweak on the Gulp webserver processing
- add a model (in our case a customer model) in the loopback app
- add a corresponding basic crud scenario in the aurelia app
- start the server and gulp watch the client and enjoy.

## Getting Started

1. Create loopback server with Yeoman
2. Create Aurelia Single Page Application (SPA)
3. Merge Client with Server
4. Customize gulp web server processing
5. Add Member model in the loopback server app
6. Add basic CRUD in Aurelia SPA

### Step 1. Create loopback server app with Yeoman.

*Make sure you have npm and nodeJS installed*

Install loopback via strongloop:
```
npm install -g strongloop
```
Install Yeoman using npm:
```
npm install -g yo
```
Install Yeoman loopback generator:
```
npm install -g generator-loopback
```
Run the Yeoman scaffolding tool for generating the app:
```
yo loopback
```

*Test your app by starting the app*
```
node server/server.js
```

### Step 2. Create the Aurelia SPA
*Caution!*
We will use yeoman again for setting up the SPA's base structure, however it's important that we do this in a folder completely separate from the previous step.

Ultimately, we will move the Aurelia spa in the client folder of the loopback app, however we can not generate the application in this folder.

*Note: make sure the following has been installed for this step; yeoman Aurelia generator, gulp and jspm*

```
 mkdir new-folder
```
cd into new-folder, make sure you have the yeoman aurelia generator installed and run:
```
yo aurelia
```
*Test the app by running:*

```
gulp watch
```
*navigate to localhost://9000 to view your app*

### Step 3. Merge Client with Server
Copy the doc folder from your aureilia-app to the client folder in loopback app.

### Step 4. Customize gulp web server processing
Here we make sure that the web server is serving all static files, and requests to https://localost/4000/Api/xyz are proxied to the NodeJs application.

1. Navigate to aurelia-app/build/tasks/serve.js
2. Insert code:
```
var gulp = require('gulp');  
var browserSync = require('browser-sync');  
var proxy = require('proxy-middleware');  
var url = require('url');  
var paths = require('../paths');  
gulp.task('serve', ['build' ], function(done) {

  var proxyOptionsAccessControl = function(req,res, next){
        res.setHeader('Access-Control-Allow-Origin', '*');
        next();
  };
  var proxyOptionsApiRoute = url.parse('http://localhost:' + paths.nodeJsPort +  '/api') ;
  proxyOptionsApiRoute.route = '/api';

  var proxyOptionsAuthRoute = url.parse('http://localhost:' + paths.nodeJsPort +  '/auth') ;
  proxyOptionsAuthRoute.route = '/auth';

  browserSync({
    open: false,
    port: paths.webServerPort,
    server: {
      baseDir: ['.'],
      middleware: [
        proxyOptionsAccessControl,
        proxy(proxyOptionsApiRoute),
        proxy(proxyOptionsAuthRoute)]
    }
  }, done);
});
```
*install npm module for proxy middleware from the client folder as a dev dependency*
```
npm install --save-dev proxy-middleware
```
Update path.js file with following variables:
```
nodeJsPort:3000
webServerPort : 4000
```
### Step 5: Add Member model in the loopback server app
From the server folder:
```
yo loopback:model
```
Follow the prompted steps. Make sure to create a model called 'member' with the fields firstName and lastName (case sensitive). When asked for a plural name for member, make sure to type members.


Next, locate in the server project the file dataSource.json - we will change this file so that our memory data is stored in a file. Change to:
```
{
  "db": {
    "name": "db",
    "connector": "memory",
    "file":"mydata.json"
  }
}
```
All data will now be saved in the file mydata.json

### Step 6. Add basic CRUD in Aurelia SPA


## FAQs

### What is Open-Austin?

### What is a CMS?

### How can I help?

## Contact

- email: projects@marcopineda.com

- twitter: @marcoapineda13
