const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
Menu.setApplicationMenu(false);

const saveActivity = require("./helpers/saveActivity");
const saveOfWriteFile = require("./helpers/saveAndReadFile");

//electron imports
const electron = require("electron");
const ipcMain = electron.ipcMain;

const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://custom:custom@cluster0-cvdqd.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

let mainWindow;
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require("electron-squirrel-startup")) {
  // eslint-disable-line global-require
  app.quit();
}

const createWindow = () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "./preloader/preloader.js"),
    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "index.html"));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

//main ipc functions
ipcMain.on("go-to-add-page-event", (event, args) => {
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "./pages/" + args));
});
ipcMain.on("go-to-view-page-event", (event, args) => {
  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, "./pages/" + args));
});
ipcMain.on("add-page-btn-event", (event, args) => {
  // and load the index.html of the app.
  saveActivity.saveActivity();
  saveOfWriteFile.saveOrWriteFile();
  const DB_URL = saveOfWriteFile.readFile();
  console.log(DB_URL);
});