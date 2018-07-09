import { Tray, nativeImage } from 'electron';
import { toggleMainWindow, getMainWindow } from '../browser';
import { showDevTools } from '../utils';
import * as trayIcon from '../../static/tray.png';

let tray: Tray | null;

function createTrayIcon() {
    tray = new Tray(nativeImage.createFromDataURL(trayIcon));
    tray.setToolTip('JenkinsX');

    const onShowApp = () => {
        toggleMainWindow();

        if (process.env.NODE_ENV === 'development') {
            showDevTools(getMainWindow());
        }
    };

    tray.on('right-click', onShowApp);
    tray.on('double-click', onShowApp);
    tray.on('click', onShowApp);
}

function getTrayIcon() {
    return tray;
}

export { createTrayIcon, getTrayIcon };
