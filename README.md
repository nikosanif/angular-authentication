# Angular Authentication

An Angular application that demonstrates best practices for user authentication & authorization flows.

By [@nikosanif](https://twitter.com/nikosanif)

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/nikosanif/angular-authentication)
[![license](https://img.shields.io/github/license/nikosanif/angular-authentication.svg)](https://github.com/nikosanif/angular-authentication/blob/main/LICENSE)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Twitter Follow](https://img.shields.io/twitter/follow/nikosanif.svg?style=social&label=Follow)](https://twitter.com/nikosanif)

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

### Setup & Usage

- Clone this repository: `git clone git@github.com:nikosanif/angular-authentication.git`
- `cd angular-authentication`
- Install dependencies: `npm install`
- Serve the Angular app: `npm start`
- Open your browser at: `http://localhost:4200`

### Useful Commands

- `npm start` - starts a dev server of Angular app
- `npm run build:prod` - builds full prod build
- `npm run lint` - linting source code of this project
- `npm run format:check` - runs prettier to check for formatting errors
- `npm run format:write` - runs prettier to format whole code base
- `npm run release` - runs standard-version to create new release
- `npm run analyze` - runs Webpack Bundle Analyzer to examine chunk files

## Features

### Authentication Flows

![Angular Authentication Demo](https://raw.githubusercontent.com/nikosanif/angular-authentication/main/meta/auth-init-flow.png)
![Angular Authentication Demo](https://raw.githubusercontent.com/nikosanif/angular-authentication/main/meta/auth-login-flow.png)

### Other Features

- Lazy loading of Angular modules
- API requests with `@ngrx/effects`
- Responsive design
- In-memory Web API

## Tech Stack

- [Angular](https://angular.io/)
- [NgRX](https://ngrx.io/) - @ngrx/{store,effects,component}
- [Taiga UI](https://taiga-ui.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- Other dev tools
  - ESLint
  - Prettier
  - Husky
  - standard-vesrion

## High-level Design

Below is the high-level structure of the application.

```sh
./src
├── app
│   ├── app # root app component
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   └── app.component.ts
│   │
│   ├── app-routing.module.ts
│   ├── app.module.ts
│   │
│   ├── auth # includes authentication logic
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── guards
│   │   ├── interceptors
│   │   ├── login
│   │   └── store
│   │
│   ├── core # includes core utilities
│   │   ├── core.module.ts
│   │   ├── fake-api
│   │   └── services
│   │
│   ├── features # all features of application
│   │   ├── about
│   │   ├── home
│   │   └── secured-feat
│   │
│   └── shared # shared UI modules and utilities
│       ├── ui
│       └── util
│
├── assets
│   ├── ...
│
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
│
├── ...
│
└── theme # global theme styles
    ├── _components.scss
    ├── _typography.scss
    └── index.scss
```

## Contributing

Who is for this? I would love for you to contribute to Angular Authentication! Before you start, please read the [Contributor Guide](https://github.com/nikosanif/angular-authentication/blob/main/CONTRIBUTING.md).

If you have found any bug in the source code or want to _request_ a new feature, you can help by [submitting an issue](https://github.com/nikosanif/angular-authentication/issues/new/choose) at GitHub. Even better, you can fork this repository and [submit a PR](https://github.com/nikosanif/angular-authentication/compare) with the fix or the new feature description.

## Support

- Star this repository 👆⭐️
- Help it spread to a wider audience: [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/nikosanif.svg?style=social&label=Tweet)](https://twitter.com/intent/tweet?text=An%20Angular%20application%20that%20demonstrates%20best%20practices%20for%20user%20authentication%20and%20authorization%20flows.%0A%0A%40nikosanif%20%0A%F0%9F%94%97%20https%3A%2F%2Fgithub.com%2Fnikosanif%2Fangular-authentication%0A%0A&hashtags=Angular,NgRx,TaigaUI,tailwindcss,ngAuth)

### Author: Nikos Anifantis ✍️

- Fullstack Software Engineer - I’m currently working on Angular & Node.js application development.
- I write stuff at [dev.to/nikosanif](https://dev.to/nikosanif) and [nikosanif.medium.com](https://nikosanif.medium.com/)
- How to reach me: [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/nikosanif.svg?style=social&label=Follow%20nikosanif)](https://twitter.com/nikosanif) or [![LinkedIn](https://img.shields.io/badge/LinkedIn-blue?style=social&style=flat&logo=linkedin&labelColor=blue&label=Connect%20Nikos%20Anifantis)](https://www.linkedin.com/in/nikosanifantis/)

## License

Feel free to use this repository, but **please star and put a reference to this repository.** :pray: :heart:

[MIT](https://opensource.org/licenses/MIT)
