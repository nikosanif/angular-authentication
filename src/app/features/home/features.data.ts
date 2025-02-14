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
    link: 'https://angular.dev/',
    github: 'https://github.com/angular/angular',
    docs: 'https://angular.dev/overview',
  },
  {
    name: 'NgRx',
    description: 'Reactive State for Angular.',
    link: 'https://ngrx.io/',
    github: 'https://github.com/ngrx/platform',
    docs: 'https://ngrx.io/docs',
  },
  {
    name: 'NGXS',
    description: 'NGXS is a state management pattern + library for Angular.',
    link: 'https://www.ngxs.io/',
    github: 'https://github.com/ngxs/store',
    docs: 'https://www.ngxs.io',
  },
  {
    name: 'Standalone Components',
    description: 'A simplified way to build Angular applications.',
    link: null,
    github: null,
    docs: 'https://angular.dev/guide/components',
  },
  {
    name: 'Zoneless',
    description: 'Angular without ZoneJS.',
    link: null,
    github: null,
    docs: 'https://angular.dev/guide/experimental/zoneless',
  },
  {
    name: 'RxJS',
    description: 'Reactive Extensions Library for JavaScript.',
    link: 'https://rxjs.dev/',
    github: 'https://github.com/ReactiveX/rxjs',
    docs: 'https://rxjs.dev/guide/overview',
  },
  {
    name: 'Angular Material',
    description: 'Material Design components for Angular.',
    link: 'https://material.angular.io/',
    github: 'https://github.com/angular/components',
    docs: 'https://material.angular.io/guide/getting-started',
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
    docs: 'https://angular.dev/guide/routing/common-router-tasks#lazy-loading',
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
    name: 'Release It',
    description: 'Automate versioning and package publishing',
    link: null,
    github: 'https://github.com/release-it/release-it',
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
