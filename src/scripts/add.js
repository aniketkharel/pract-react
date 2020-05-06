//electron imports
const electron = require("electron");
const ipcRenderer = electron.ipcRenderer;

const addPageBtn = document.getElementById("btn-add-page-btn");
addPageBtn.addEventListener("click", () => {
  ipcRenderer.send("add-page-btn-event", "addition.html");
});

// const goToViewBtn = document.getElementById("go-to-view-btn");
// goToViewBtn.addEventListener("click", () => {
//   ipcRenderer.send("go-to-view-page-event", "viewers.html");
// });
