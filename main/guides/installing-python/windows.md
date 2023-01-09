---
sidebar_position: 0
sidebar_label: "Windows"
---

# Installing Python on Windows

This guide will help you install Python on Windows. If you are using a different operating system, please see the [Installing Python on other operating systems](./index.md) for a different guide.

## Make sure you don't already have Python

1. Open the start menu and search for "cmd" (or "command prompt")
2. Type `python --version` and press enter. If you get a message saying "python is not recognized as an internal or external command", you do not have Python installed. If you get a message saying "Python 3.6.1" (or any other set of numbers), you already have Python installed.

## Installing Python

1. Go to the Microsoft store website
https://apps.microsoft.com/store/detail/python-311/9NRWMJP3717K?hl=en-us&gl=us

2. Click the "Get in Store App" button (should open the microsoft store app)

3. Click the "Get" button. This will download and install Python.

4. When it is done installing, follow the steps [above](#make-sure-you-dont-already-have-python) to verify that you have Python installed successfully.

## For if things go wrong

Other methods of installing Python on Windows are available, but are not recommended. Contact an instructor if you have trouble installing Python using the method above. Or, try one of the following methods.

:::caution
These methods are not ideal, they have more risk of not working. If you have trouble installing Python using the method above, try one of the following methods. Try these at your own risk (though they should still work fine)
:::

- Download the latest version of Python from the [Python website](https://www.python.org/downloads/windows/). Make sure to select the "Add Python to PATH" option when installing.
- Install Python using [Chocolatey](https://chocolatey.org/). This is a package manager for Windows. You can install Chocolatey by following the instructions on their website. Once you have Chocolatey installed, you can install Python by running `choco install python` in the command prompt.
- Install Python using [Scoop](https://scoop.sh/). This is another package manager for Windows. You can install Scoop by following the instructions on their website. Once you have Scoop installed, you can install Python by running `scoop install python` in the command prompt.