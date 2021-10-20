export interface Feature {
  name: string;
  description: string;
  link: string | null;
  github: string | null;
  docs: string | null;
}

export const features: Feature[] = [
  {
    name: 'Angular',
    description: `The modern web developer's platform.`,
    link: 'https://angular.io/',
    github: 'https://github.com/angular/angular',
    docs: 'https://angular.io/docs',
  },
  {
    name: 'NgRx',
    description: 'Reactive State for Angular.',
    link: 'https://ngrx.io/',
    github: 'https://github.com/ngrx/platform',
    docs: 'https://ngrx.io/docs',
  },
  {
    name: 'RxJS',
    description: 'Reactive Extensions Library for JavaScript.',
    link: 'https://rxjs.dev/',
    github: 'https://github.com/ReactiveX/rxjs',
    docs: 'https://rxjs.dev/guide/overview',
  },
  {
    name: 'Taiga UI',
    description: 'Angular UI Kit and components library for awesome people.',
    link: 'https://taiga-ui.dev/',
    github: 'https://github.com/TinkoffCreditSystems/taiga-ui',
    docs: 'https://taiga-ui.dev/getting-started',
  },
  {
    name: 'Tailwindcss',
    description: 'A utility-first CSS framework for rapid UI development.',
    link: 'https://tailwindcss.com/',
    github: 'https://github.com/tailwindlabs/tailwindcss',
    docs: 'https://tailwindcss.com/docs',
  },
  {
    name: 'Lazy loading',
    description: 'Faster startup time with lazy loaded feature modules.',
    link: null,
    github: null,
    docs: 'https://angular.io/guide/router#lazy-loading-route-configuration',
  },
  {
    name: 'Font Awesome 5',
    description: 'Icons and typefaces in a single place.',
    link: 'https://fontawesome.com/',
    github: 'https://github.com/FortAwesome/angular-fontawesome',
    docs: null,
  },
  {
    name: 'Responsive',
    description: 'Responsive web design using many different devices.',
    link: 'https://www.w3schools.com/css/css_rwd_intro.asp',
    github: null,
    docs: null,
  },
  {
    name: 'ESLint',
    description: 'A utility-first CSS framework for rapid UI development.',
    link: 'https://eslint.org/',
    github: 'https://github.com/eslint/eslint',
    docs: 'https://eslint.org/docs/user-guide/getting-started',
  },
  {
    name: 'Prettier',
    description: 'An opinionated code formatter.',
    link: 'https://prettier.io/',
    github: 'https://github.com/prettier/prettier',
    docs: 'https://prettier.io/docs/en/index.html',
  },
  {
    name: 'In-memory Web API',
    description: 'An in-memory web API for Angular demos and tests.',
    link: null,
    github:
      'https://github.com/angular/angular/tree/master/packages/misc/angular-in-memory-web-api',
    docs: 'https://angular.io/tutorial/toh-pt6',
  },
  {
    name: 'Lint Staged',
    description: 'Run linters on git staged files.',
    link: null,
    github: 'https://github.com/okonet/lint-staged',
    docs: null,
  },
  {
    name: 'Conventional Commits',
    description:
      'A specification for adding human and machine readable meaning to commit messages.',
    link: 'https://www.conventionalcommits.org/',
    github: null,
    docs: null,
  },
  {
    name: 'Husky',
    description: 'Modern native git hooks made easy.',
    link: 'https://typicode.github.io/husky/',
    github: 'https://github.com/typicode/husky',
    docs: null,
  },
  {
    name: 'Standard Version',
    description:
      'Automate versioning and CHANGELOG generation, with semver.org and conventionalcommits.org.',
    link: null,
    github: 'https://github.com/conventional-changelog/standard-version',
    docs: null,
  },
  {
    name: 'Typescript',
    description:
      'Superior developer experience, code completion, refactoring and less bugs.',
    link: 'https://www.typescriptlang.org/',
    github: 'https://github.com/Microsoft/TypeScript',
    docs: 'https://www.typescriptlang.org/docs/',
  },
];
