//electron imports
const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;

const goToAddBtn = document.getElementById("go-to-add-btn");
goToAddBtn.addEventListener("click", () => {
  ipcRenderer.send("go-to-add-page-event", "addition.html");
});

const goToViewBtn = document.getElementById("go-to-view-btn");
goToViewBtn.addEventListener("click", () => {
  ipcRenderer.send("go-to-view-page-event", "viewers.html");
});
