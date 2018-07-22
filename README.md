# Gatsby 1.0 starters
-   [ ] Gatsby 1.0 (alpha)
    -   [x] sharp
    -   [x] offline support
    -   [ ] google analytics
    -   [x] manifest
    -   [x] typescript
    -   [x] blog in markdown
-   [x] Best practices tools
    -   [x] [Jest](https://facebook.github.io/jest/) / [Enzyme](http://airbnb.io/enzyme/)
    -   [x] [Storybook](https://storybooks.js.org/)
    -   [x] [Typescript](https://www.typescriptlang.org/) / [tslint](https://palantir.github.io/tslint/)
    -   [x] [xo linter](https://github.com/sindresorhus/xo)
    -   [x] [Remark-lint](https://github.com/wooorm/remark-lint)
    -   [x] [Husky](https://github.com/typicode/husky) & [lint-staged](https://github.com/okonet/lint-staged) for autofix each commit
    -   [x] Travis/AppVeyor config (unix-osx-windows CI)
    -   [x] Code climate config
-   [x] SEO
    -   [x] [Helmet](https://github.com/nfl/react-helmet)
-   [x] [Semantic-ui](http://react.semantic-ui.com) for styling
-   [x] Lazyboy tools
    -   [x] [plop](https://github.com/amwmedia/plop) templates -> `npm run generate`

## Files structure

     .
     ├── data                          // website data (included into graphQL)
     │   ├── author.json               // list of blog authors
     │   ├── avatars                   // authors avatars
     │   └── blog                      // all blog data (posts, images)
     ├── gatsby-config.js              // gatsby configuration
     ├── gatsby-node.js                // gatsby node hooks
     ├── generators                    // generators (`npm run generate`)
     │   ├── blog-post-generator.js    // `blog post` generator
     │   ├── component-generator.js    // `component` generator
     │   ├── page-generator.js         // `page` generator
     │   ├── plopfile.js               // generators entry
     │   ├── templates                 // all templates (handlebar notation)
     │   └── utils.js                  // utils scripts for generators
     ├── package.json
     ├── public                        // output folder (in .gitignore)
     ├── README.md                     // this file
     ├── src                           // sources
     │   ├── components                // all react components
     │   ├── css                       // styles
     │   ├── declarations.d.ts         // declarations for no typescript modules/files
     │   ├── graphql-types.d.ts        // graphql types (`npm run graphql-types`)
     │   ├── html.tsx                  // main html (required)
     │   ├── layouts                   // layouts
     │   │   └── default.tsx           // default layout (required)
     │   ├── pages                     // all pages
     │   └── templates                 // all templates (used for procedural page creation, see `gatsby-node.js`)
     ├── tools                         // miscs tools for dev
     │   └── update-post-date.js       // update post date hook
     ├── tsconfig.json                 // typescript configuration
     ├── tslint.json                   // tslint configuration
     └── package-lock.json             // npm lock file

## Plop generators - `npm run generate`

To avoid any boring copy/paste, this starter-kit have many generators to permit
simple bootstrap of current file pattern (eg. components/pages/blog posts). e.g. to add a new blog post first add the authors to data/authors.json and add authors' images to the data/avatars folder. Next execute 'npm run generate' and select 'Blog post'. Follow the prompts for a new post. Each blog post requires an image be added to the /data/blog/<your new post> folder prior to running 'gatsby develop'.

You can add/delete/modify any generators into `/generators` folder.

Be lazy and have fun!
