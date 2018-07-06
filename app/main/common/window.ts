import { BrowserWindow } from "electron";
import { isProd } from "env-var-helpers";

let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    height: 200,
    width: 620
  });

  isProd
    ? mainWindow.loadFile("build/index.html")
    : mainWindow.loadURL("http://localhost:9000");

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  return mainWindow;
}

function showDevTools() {
  mainWindow &&
    mainWindow.isVisible() &&
    mainWindow.webContents.openDevTools({ mode: "detach" });
}

function toggleWindow() {
  if (!mainWindow) {
    mainWindow = createWindow();
  }

  if (!mainWindow.isVisible() || !mainWindow.isFocused()) {
    mainWindow.show();
  } else {
    mainWindow.hide();
  }
}

export { toggleWindow, createWindow, showDevTools };
