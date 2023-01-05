# Committing Code

This is a guide on how to commit code to the repository.

## Prerequisites

- Have a GitHub account
- Have Git installed (see [here](https://git-scm.com/downloads) for instructions on how to install Git)
- Have a local version of the development environment (see [here](getting_started.md) for instructions on how to set it up)

:::danger Warning
**Never commit directly to the `main` or `gh-pages` branches!** This will cause the website to break.
:::

## Committing Code

1. Make sure your changes are in a separate branch (not `main`)
    - If you have already made changes, don't worry. You can still commit them to a new branch.
    - To make a new branch (and use it), type `git checkout -b <branch_name>` in the terminal.
    - To use an existing branch, type `git checkout <branch_name>` in the terminal.
2. Add your changes to the staging area.
    - To add all changes, type `git add .` in the terminal.
    - To add specific changes, type `git add <file_path>` in the terminal.
3. Commit your changes.
    - To commit all changes, type `git commit -m "<commit_message>"` in the terminal.
    - To commit specific changes, type `git commit <file_path> -m "<commit_message>"` in the terminal.
4. Push your changes to GitHub.
    - To push all changes, type `git push` in the terminal.
    - To push specific changes, type `git push <file_path>` in the terminal.
5. Create a pull request on GitHub.
    - To create a pull request, go to the repository on GitHub and click the `Compare & pull request` button.
    - Add a title and description for the pull request.
    - Click the `Create pull request` button.
6. Merging
    - First, a test build is created to make sure the code compiles.
    - Second, someone must approve the pull request (this can be done by anyone).
    - Third, the pull request is merged to `main`. This will automatically deploy the changes to the website.

