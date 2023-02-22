---
author: Ben Burns
sidebar_position: 1
sidebar_label: "MacOS"
---

# Installing Python on macOS

This guide will help you install Python on macOS. Python on macOS can get messy. If you run into any issues while running the instructions detailed below, please post to Piazza.

## (Optional) Update macOS
Prior to macOS 12.3, macOS came with Python 2.7. 
This version is nearly 13 years old and not suitable for development. Therefore, [Apple removed it from macOS in 12.3](https://developer.apple.com/documentation/macos-release-notes/macos-12_3-release-notes#Python).

If possible, you can update your computer to any version of macOS after 12.2, and the installer will delete Python. This is not necessary, but if your machine is new enough that 12.3+ is supported and you don't have any concerns about it effecting your battery health, it is easier if you update your computer.

## Verify you don't already have python3 installed
1. Open Finder > Applications > Terminal
2. Run `python3 --version`. You should get something along the lines of `zsh: command not found: python3`. Otherwise, you have `python3` installed.

If you have python installed from the developer website, you are all set. If you have python3 installed through Homebrew, we recommend you install and use python from the developer website. To tell the difference, run `whereis python3` in Terminal. If you get `/usr/bin/python3`, you're all set. 
Otherwise, we recommend you follow the below installation directions.

## Installing

1. Go to [https://www.python.org/downloads/](https://www.python.org/downloads/)
2. You should see "Download the latest version for macOS", followed by a button labeled `Download Python 3.x`. Click the button to start the download. If the website does not automatically detect you are running macOS, select `macOS` under "Looking for Python with a different OS?".

<div style={{textAlign: 'center'}}>
  <img 
    src={require('./mac-install.png').default} 
    alt="Image of mac install screen"
  />
</div>

3. Once the download is finished, run the `.pkg` to run the installer. 
4. Run through the installer, and click `Install`.
5. Open Finder > Applications > Python 3.x.
6. Right-click on `Update Shell Profile.command`, and click open. This will run a process in Terminal that lets you run `python3` from your command line.
7. Restart Terminal, type `python3`, and press `Enter`.

At this point, you should see something like the following screen:

<div style={{textAlign: 'center'}}>
  <img 
    src={require('./python-run.png').default} 
    alt="Image of python interpreter"
  />
</div>

To exit, type `quit()` and press `Enter`.