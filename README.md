# Cristian Lopez

<p style="text-align: center;"><img src="https://i.ibb.co/WPHMbf2/Screenshot-2023-03-31-at-11-56-48-AM.png" width="200"></p>

## Screens

<p style="text-align: center;"><img src="https://i.ibb.co/qnnykSy/ezgif-1-194d6c96ea.gif" width="400"></p>

## Description

This project aims to create a login with firebase and bring a list of products with their respective details

## Project Structure

The project structure is

In core we find all the business logic. In mobile we find components in mobile-ui all components are reusable anywhere

```
project
│   README.md
└───src
   |---core
        |---adapters
        |---di
        |---domain
        |---framework
        |---hooks
        |---services
   |---mobile
        |---context
        |---mobile-ui
        |---navigation
        |---pages
   └───shared

```

## architecture explanation

This architecture in a React Native project is organized into two main sections: "core" and "mobile".

In "core", you can find the folders "adapters", "di", "domain", "framework", "hooks", and "services". In "adapters", you can find adapters to integrate with different external services. In "di", you can find the files related to dependency injection. In "domain", you can find the business logic. In "framework", you can find the tools offered by React Native to build the application. In "hooks", you can find custom hooks. In "services", you can find the files related to communication with the backend.

In "mobile", you can find the folders "context", "mobile-ui", "navigation", and "pages". In "context", you can find the application contexts. In "mobile-ui", you can find custom components for the user interface. In "navigation", you can find the application navigation configuration. In "pages", you can find the different screens of the application.

Finally, there is the "shared" folder that contains files that can be shared between the different sections of the application.

this architecture in a React Native project follows the pattern of separation of responsibilities and aims to have a high degree of modularity to facilitate project maintenance and scalability.

<p style="text-align: center;"><img src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*NfFzI7Z-E3ypn8ahESbDzw.png" width="400"></p>

## Configuration

in the .env file you configure the endpoints and the firebase configuration with your own credentials if desired
API_URL=''
FIREBASE_API_KEY=''
FIREBASE_AUTH_DOMAIN=''
FIREBASE_ID=''

## Libraries and TS

Project is created using `Typescript, yarn, jotai, useQuery, Eslint, prettier, clean code,  firebase, test, formik, luxon, yarn, navigation, storage`

## Dependencies

- Node.JS
- Java
- Yarn
- Cocoapods
- XCode
- Android Studio

## First Steps

You should follow the steep to configure environment of (https://reactnative.dev/docs/environment-setup)

After that use `yarn install`
After that use `cd ios` `pod install`

## Generic Comands

- Mobile
  - `yarn run ios`
  - `yarn run android`

## Documentation

- [yarn](https://classic.yarnpkg.com)
- [React Native](https://reactnative.dev)
