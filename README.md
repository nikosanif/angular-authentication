# Angular Authentication

An Angular application that demonstrates best practices for user authentication & authorization flows.

By [@nikosanif](https://x.com/nikosanif)

[![license](https://img.shields.io/github/license/nikosanif/angular-authentication.svg)](https://github.com/nikosanif/angular-authentication/blob/main/LICENSE)
[![Netlify Status](https://api.netlify.com/api/v1/badges/4c9d2c63-d481-486a-996c-8451443ac9d6/deploy-status)](https://angular-authentication.netlify.app)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![X Follow](https://img.shields.io/twitter/follow/nikosanif.svg?style=social&label=Follow)](https://x.com/nikosanif)

## Table of Contents

- [Live Demo](#live-demo)
- [Getting Started](#getting-started)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [High-level Design](#high-level-design)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Live Demo

Live application: [angular-authentication.netlify.app](https://angular-authentication.netlify.app/)

![Angular Authentication Demo](https://raw.githubusercontent.com/nikosanif/angular-authentication/main/meta/app-demo.gif)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Angular CLI](https://angular.io/cli)

### Setup & Local Development

- Clone this repository: `git clone git@github.com:nikosanif/angular-authentication.git`
- `cd angular-authentication`
- Install dependencies: `npm install`
- Serve the Angular app: `npm start`
- Open your browser at: `http://localhost:4200`

### Use it as a Template

The main purpose of this repository is to provide a simple Angular application that demonstrates best practices for user authentication and authorization flows. The application is configured to use a fake API server (interceptor) that simulates the backend server. Also, it includes two state management libraries, NgRx and NGXS, so you can choose which one to use.

If you want to use this repository as a template for your project, you can follow these steps:

- Clone this repository
- Remove fake API:
  - Delete `src/app/core/fake-api` folder
  - Remove all references from the `fake-api` folder
  - Remove the `fakeApiInterceptor` from `app.config.ts`
- Choose the state management library you want to use:
  - NgRx: Remove `src/app/auth/store/ngxs` folder and the `index.ngxs.ts` file
  - NGXS: Remove `src/app/auth/store/ngrx` folder and the `index.ngrx.ts` file
  - Rename the `index.XXX.ts` file to `index.ts` in the `src/app/auth/store` folder
  - Update the `app.store.ts` file to import the correct store module
  - Remove all unused packages from `package.json`
- Update the Google Analytics tracking ID by replacing `UA-XXXXX-Y` in the `index.html` file and in the `src/app/core/services/google-analytics.service.ts` file. Or remove the Google Analytics service if you don't want to use it.

### Useful Commands

- `npm start` - starts a dev server of Angular app
- `npm run build:prod` - builds full prod build
- `npm run lint` - linting source code of this project
- `npm run format:check` - runs prettier to check for formatting errors
- `npm run format:write` - runs prettier to format whole code base
- `npm run release` - runs `release-it` to create new release

## Features

### Authentication Flows

![Angular Authentication Demo](https://raw.githubusercontent.com/nikosanif/angular-authentication/main/meta/auth-init-flow.png)
![Angular Authentication Demo](https://raw.githubusercontent.com/nikosanif/angular-authentication/main/meta/auth-login-flow.png)

### Other Features

- Zoneless Angular application
- Standalone Angular components
- Angular Material UI components
- Lazy loading of Angular components
- API requests with `@ngrx/effects` or `@ngxs/store` (you can choose at `src/app/app.config.ts`)
- Responsive design
- Custom In-memory Web API using interceptors

## Tech Stack

- [Angular](https://angular.io/)
- State Management. This repos demonstrates **two** state management libraries, you can choose which one to use by following the instructions in the [Use it as a Template](#use-it-as-a-template) section.
  - [NgRX](https://ngrx.io/) - @ngrx/{store,effects,component}
  - [NGXS](https://www.ngxs.io/) - @ngxs/store
- [Angular Material UI](https://material.angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- Other dev tools
  - ESLint
  - Prettier
  - Husky
  - release-it

## High-level Design

Below is the high-level structure of the application.

```sh
./src
├── app
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.config.ts
│   ├── app.routes.ts
│   ├── app.store.ts # configure store based on NgRx or NGXS
│   │
│   ├── auth # includes authentication logic
│   │   ├── auth.routes.ts
│   │   ├── auth.service.ts
│   │   ├── index.ts
│   │   ├── guards
│   │   ├── interceptors
│   │   ├── login
│   │   ├── models
│   │   ├── tokens
│   │   └── store     # Choose one of the following
│   │       ├── ngrx  # store based on NgRx
│   │       └── ngxs  # store based on NGXS
│   │
│   ├── core # includes core utilities
│   │   ├── fake-api
│   │   └── services
│   │
│   ├── features # all features of application
│   │   ├── about
│   │   ├── home
│   │   └── secured-feat
│   │
│   └── shared
│       ├── ui # UI components
│       │   ├── avatar
│       │   ├── footer
│       │   ├── header
│       │   └── icon
│       │
│       └── util # utility functions
│
├── environments # environment configurations
│
├── index.html
├── main.ts
├── styles.scss
│
└── theme # global theme styles
    ├── _components.scss
    ├── _material.scss
    └── index.scss
```

## Contributing

Who is for this? I would love for you to contribute to Angular Authentication! Before you start, please read the [Contributor Guide](https://github.com/nikosanif/angular-authentication/blob/main/CONTRIBUTING.md).

If you have found any bug in the source code or want to _request_ a new feature, you can help by [submitting an issue](https://github.com/nikosanif/angular-authentication/issues/new/choose) at GitHub. Even better, you can fork this repository and [submit a PR](https://github.com/nikosanif/angular-authentication/compare) with the fix or the new feature description.

## Support

- Star this repository 👆⭐️
- Help it spread to a wider audience: [![X](https://img.shields.io/twitter/url/https/x.com/nikosanif.svg?style=social&label=Tweet)](https://x.com/intent/tweet?text=An%20Angular%20application%20that%20demonstrates%20best%20practices%20for%20user%20authentication%20and%20authorization%20flows.%0A%0A%40nikosanif%20%0A%F0%9F%94%97%20https%3A%2F%2Fgithub.com%2Fnikosanif%2Fangular-authentication%0A%0A&hashtags=Angular,NgRx,NGXS,MDX,tailwindcss,ngAuth)

### Author: Nikos Anifantis ✍️

- Fullstack Software Engineer - I’m currently working on Angular & Node.js application development.
- I write stuff at [dev.to/nikosanif](https://dev.to/nikosanif) and [nikosanif.medium.com](https://nikosanif.medium.com/)
- How to reach me: [![X](https://img.shields.io/twitter/url/https/x.com/nikosanif.svg?style=social&label=Follow%20nikosanif)](https://x.com/nikosanif) or [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=social&style=flat&logo=linkedin&labelColor=blue&label=Connect%20Nikos%20Anifantis)](https://www.linkedin.com/in/nikosanifantis/)

## License

Feel free to use this repository, but **please star and put a reference to this repository.** :pray: :heart:

[MIT](https://opensource.org/licenses/MIT)
