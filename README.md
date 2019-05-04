[![Build Status](https://travis-ci.org/ElisaBaum/inception.svg?branch=master)](https://travis-ci.org/ElisaBaum/inception)

# Inception

## How To Use
The Inception App was build as monorepo with  [Lerna](https://github.com/lerna/lerna). 
All parts of the app are located in the ```packages``` folder. 

##### Set up
To set up the project, run
```bash
npm install
``` 
at the root of the project. 

##### Start
Links local packages together, installs remaining package dependencies
and starts a development server with [parcel](https://parceljs.org), which will automatically rebuild the apps as files 
change. 
```bash
npm run start
``` 

##### Build
Links local packages together, installs remaining package dependencies and bundles all apps 
in production mode with [parcel](https://parceljs.org).

```bash
npm run build
``` 
##### Test
Links local packages together, installs remaining package dependencies and runs tests with code coverage in the packages.
```bash
npm run test