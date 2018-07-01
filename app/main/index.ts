import { app, BrowserWindow } from "electron";
import { isProd } from "env-var-helpers";

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  isProd
    ? mainWindow.loadFile("build/index.html")
    : mainWindow.loadURL("http://localhost:9000");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
