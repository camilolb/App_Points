# Cristian Lopez

<p style="text-align: center;"><img src="https://i.ibb.co/WPHMbf2/Screenshot-2023-03-31-at-11-56-48-AM.png" width="200"></p>

## Screens

<p style="text-align: center;"><img src="https://imagizer.imageshack.com/img924/3346/1DOqA0.gif" width="400"></p>

## Description

This project aims to create a login with firebase and bring a list of products with their respective details

## Project Structure

The project structure is

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

<p style="text-align: center;"><img src="https://sixphere.com/wp-content/uploads/2021/09/4c56a51a-964d-4546-b8e0-0e658535e87c.png" width="400"></p>

## stack

Project is created using `Typescript, yarn, jotai, useQuery, Eslint, prettier, clean code, firebase, test`

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
