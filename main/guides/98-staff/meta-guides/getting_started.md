---
author: Kobi Falus 
sidebar_position: 0
---

# Getting Started

This guide will walk you through the process of setting up a local development environment for the website

## Prerequisites

A computer that you can install software on

## Steps to setup the local development environment
1. Install Node.js: https://nodejs.org/en/download/
2. Install Yarn:
    1. Open a terminal
    2. Run `npm install --global yarn`
3. Install Git: https://git-scm.com/downloads
4. Clone the repository:
    1. Open a terminal and navigate to the directory you want to clone the repository into
    2. Run `git clone https://github.com/CICS110/CICS110.github.io.git`
5. Install dependencies:
    1. In the same terminal, navigate to the directory you cloned the repository into: `cd CICS110.github.io`
    2. Run `yarn install` in the terminal to install the dependencies

## Steps to run the local development environment
Note: must have the local development environment setup first
1. In the terminal, navigate to the directory you cloned the repository into
2. Run `yarn start` in the terminal to start the local development environment

This should open a browser window with the website running locally

:::caution Search Bar Will Not Work Locally
In the local development environment, the search bar will not work. You can get it to work by first building it then serving the local production build:

```bash
yarn build
npx http-server ./build
```
:::