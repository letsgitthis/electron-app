// By requiring Electron, we are telling the script that we
// want to place our program in a window rather than a browser.
const {app, BrowserWindow } = require('electron');
const url = require('url');
const path = require('path');

let win

// We then write a function specifying the size of the window
// as well as the path our app is - to be placed in the window.
// nodeIntegration must be enabled for scripts in HTML to run.
function createWindow() {
    win = new BrowserWindow({
        width: 800, 
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL(url.format ({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
}

app.on('ready', createWindow);