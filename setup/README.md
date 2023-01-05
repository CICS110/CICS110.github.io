# Setup

This is a folder for scripts that deal with the setup of the website. They are imported by the `docusaurus.config.js` file.

## Warning

Editing files in this folder can break development mode deployments. If you are having issues try:
1. Modifying a markdown file that could be displayed
2. Stopping the local development server (Ctrl+C) and restarting it
3. Running `yarn clean` and then `yarn start` again. This will delete the `.docusaurus` folder (clearing the cache)