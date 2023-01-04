# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

1. Install [Node.js](https://nodejs.org/en/)
2. Install [Yarn](https://yarnpkg.com/).
```sh
npm install -g yarn
```
3. Clone the [Repository](https://github.com/CS-110/CS-110.github.io):
```sh
git clone https://github.com/CS-110/CS-110.github.io.git
```
4. Install dependencies:
```sh
cd CS-110.github.io
yarn install
```


### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

#### Warning Search Bar Will Not Work Locally
In the local development environment, the search bar will not work. You can get it to work by first building it then serving the local production build:

```bash
yarn build
npx http-server ./build
```

### Deployment

We are using Github Pages to host our website. To deploy changes, first push your changes to your own branch (NOT `main`), then create a pull request to merge your branch into the `main` branch. Once the pull request is merged, the changes will be deployed to the website.