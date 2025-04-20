// main.js
const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  });

  win.loadFile('index.html'); // Or point this to your Angular build
}

app.whenReady().then(createWindow);
