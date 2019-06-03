[![Build Status](https://travis-ci.org/ElisaBaum/inception.svg?branch=master)](https://travis-ci.org/ElisaBaum/inception)

# Inception

## How To Use
The Inception App was build as monorepo with  [Lerna](https://github.com/lerna/lerna). 
All parts of the app are located in the ```packages``` folder. 

## Set up
To set up the project, run
```bash
npm install
``` 
at the root of the project.

To add a new dependency to a specific package, run:
```
lerna add @material-ui/icons packages/client
```

## Start
Links local packages together, installs remaining package dependencies
and starts a development server with [parcel](https://parceljs.org), which will automatically rebuild the apps as files 
change. 
```bash
npm run start
``` 

## Emulate Firebase
In order to emulate firebase hosting, firstore and functions locally run the following commands:
1. [Create credentials](https://firebase.google.com/docs/functions/local-emulator#set_up_admin_credentials_optional) 
2. Set up firestore: `firebase init firestore`
3. Install emulator: `firebase setup:emulators:firestore`
4. Run emulator: `GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials firebase emulators:start` or
`GOOGLE_APPLICATION_CREDENTIALS=path/to/credentials npm run emulate`

## Build
Links local packages together, installs remaining package dependencies and bundles all apps 
in production mode with [parcel](https://parceljs.org).

```bash
npm run build
``` 
## Test
Links local packages together, installs remaining package dependencies and runs tests with code coverage in the packages.
```bash
npm run test
