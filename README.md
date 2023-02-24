# Gatsby 2.0 Typescript Starter
[Gatsby](https://www.gatsbyjs.org/) is documented as a static site generator for react. However, the truth is that it's far more than that. With the help of GraphQL and a vast library of plugins Gatsby can be used to create rich dynamic content that is both fast and highly extensible.

#### Overview
The goal of this starter, like many others, is to provide the ground work for new Gatsby projects. The primary focus for this particular starter is provide a feature rich environment that allows a user to hit the ground running while providing tools to help maintain quality code and site. 

#### Features
* Markdown to markup processing by remark
* React 16 & Redux
* Semantic UI React component library
* Storybook for building components in isolation
* Testing/Linting supported by Jest, enzyme, eslint, tslint, etc
* TypeScript support

## Table of Contents

- [Requirements](#requirements)
- [Content Creation & Management](#content-creation-&-management)
- [Setup](#setup)

## Requirements
This project has the following requirements for development. Keep in mind that the versions provided are a recommendation while other versions may be compatible they are untested.
- Node >= `8.0.0` 
- Yarn >= `1.0.0`

## Content Creation & Management
For content creation all our work will be contained in the `data` directory.

#### Author
This starter supporters multiple authors at the same time. All authors must first be added to the array found in the file below.

```
data/
├── author.json
```
Each author should share a structure identical to the following.
```json
  {
    "id": "Full Name",
    "bio": "Short biography",
    "avatar": "avatars/testing.jpg",
    "twitter": "@handle",
    "github": "@handle"
  }
```
The `id` field above should be the authors full name. This will later be used to tie the author to a given post. All avatar images can be found in `data/avatars`.

#### Blog Posts
Each blog post should be contained with in a directory that follows the pattern `YYYY-MM-DD--the-title`. In side this directory there should be the post `index.md` and optionally the post image `{gif, jpg, png}`.
```
data/
├── blog/
    ├── 2018-05-25--welcome-to-gatsby/
        ├── index.md
        ├── post-image.jpg
```
As for the post markdown itself. The meta data section should follow the below pattern.
```
title: Tile Name
createdDate: '2018-05-25'
updatedDate: '2018-05-25'
author: Brian Gebel
tags:
  - starter
  - gatsby
image: post-image.jpeg
draft: false
```
For the post part this structure should be self explanatory however, a few parts have special behaviour.
1. `author` should be identical to the `id` referenced in `data/author.json`. This allows articles to be linked to a specific site author.
2. `image` can either be an image placed with int he same directory or a remote image hosted else where.
3. `draft` allows for a posts to be hidden from the public.

## Setup
This project uses `yarn` instead of npm. As a result it is required that we first get that setup. Please see their [documentation](https://yarnpkg.com/lang/en/docs/install) for more information. 

Once yarn is installed and `node >=8` is confirmed run:
```bash
yarn install
```

## Development
Extending the starter is really no different that developing any other react application. However for advanced features it is recommended that you read both the [Gatsby](https://www.gatsbyjs.org/docs/) and [GraphQL](https://graphql.org/learn/) documentation.

#### Getting started
Often times we are interested in developing small react components in isolation prior to introducing them into the greater project. To accomplish this we use `storybook` to mount our components.
```bash
yarn storybook
```
For integration we can run a local dev server provided by gatsby. 
```bash
yarn start
```
This should also provide a web interface to created/edit GraphQL queries.

#### Testing
During and after development we can verify that our changes won't break our build by running our test suite.
```bash
yarn test
```
Of course we can also have this run while we make changes.
```bash
yarn start:watch
```
#### Code Quality
To ensure code quality we can manually run our suite of linters to verify everything is kosher.
```bash
yarn lint
```
Individual linters can be targeted with the one of the following modifiers:
1. `ts` - Runs across all TypeScript code
2. `md` - Verifies all markdown matches specified patterns.
3. `js` - Checks JavaScript meets specific standards
4. `js` - Checks CSS meets specific standards
5. `js` - Checks SCSS meets specific standards

#### Building & Publishing
Once we are ready to publish we can generate our build. It is first recommended that we delete all previous build files and then build our new site.
```bash
yarn clean && yarn build
```
Then of course once complete we can commit our changes. This should then kick off a small test suite that will verify our changes are ready to be committed.

#### Verifying Build
To verify the build locally it is recommended that `docker` and `docker-compose` are setup. This will allow us to spin up a simple nginx server to serve up our content in a way similar to how most webservers will handle it.

First in the root directory of this starter run the following cmd to build our container.
```bash
docker-compose build
``` 
Once complete you can launch this container by running.
```bash
docker-compose up
``` 
This will then serve up the site at [http://localhost:8080](http://localhost:8080).
