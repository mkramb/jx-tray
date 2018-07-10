import { app } from 'electron';
import { initRemotesApi } from './remotes';
import { createMainWindow, createTrayIcon, getTrayIcon } from './browser';

app.dock.hide();
app.setName('JX-Tray');

// Chrome Command Line Switches
app.commandLine.appendSwitch('disable-renderer-backgrounding');

app.on('ready', () => {
    createMainWindow();
    createTrayIcon();
    initRemotesApi();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (getTrayIcon() === null) {
        createTrayIcon();
    }
});
