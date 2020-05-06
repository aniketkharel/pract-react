//electron imports
const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;

const addPageBtn = document.getElementById("btn-add-page-btn");
addPageBtn.addEventListener("click", () => {
  ipcRenderer.send("add-page-btn-event", "addition.html");
});

const goToHome = document.getElementById("btn-add-page-home");
goToHome.addEventListener("click", () => {
  ipcRenderer.send("go-to-home", "index.html");
});
