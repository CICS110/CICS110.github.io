# Changing Linter Colors
1. Open the VSCode Command Pallet: press Ctrl+Shift+P on Windows, or ⌘+Shift+P on MacOS.
2. Enter `Preferences: Open User Settings (JSON)`
3. Scroll to the end of the file, and make a new line before the last `}`
4. Insert the following snippet on the newline:
```json
    "workbench.colorCustomizations": {
        "editorWarning.foreground": "#ffff00", // changes warning squiggle color
        "editorError.foreground": "#ff0000", // changes error squiggle color
        "editorInfo.foreground": "#3794ff" // changes information squiggle color
    }
```
5. Update the colors you would like to change

:::info 
The `#` followed by 6 characters is the "hex code" of a particular color. If you want to change the underline to a particular color, search that color's hex code, and replace the appropriate hex code. For example, to change the warning's color, I googled "yellow hex code", and put it in the warning line after the colon but before the comment.
:::

6. Delete the lines of any colors you do not wish to change
For example, I just want change my warning color to yellow, and don't want to change the info and error line colors. Therefore, the last 7 lines of my `settings.json` looks like
```json title="settings.json"
    "git.confirmSync": false,
    "diffEditor.ignoreTrimWhitespace": false,
    "workbench.colorCustomizations": {
        "editorWarning.foreground": "#ffff00",
    }
}
```