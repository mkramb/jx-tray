import { Tray, nativeImage } from 'electron';
import { toggleWindow, showDevTools } from './window';
import * as trayIcon from '../../img/tray.png';

let tray: Tray | null;

function createTrayIcon() {
    tray = new Tray(nativeImage.createFromDataURL(trayIcon));
    tray.setToolTip('JenkinsX');

    tray.on('click', () => {
        toggleWindow();

        if (process.env.NODE_ENV === 'development') {
            showDevTools();
        }
    });
}

function getTrayIcon() {
    return tray;
}

export { createTrayIcon, getTrayIcon };
