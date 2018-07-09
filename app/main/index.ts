import { app } from 'electron';
import { patchNodePath } from './utils';
import { initRemotesApi } from './remotes';
import { createMainWindow, createTrayIcon, getTrayIcon } from './browser';

patchNodePath();

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
