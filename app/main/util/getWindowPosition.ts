import { Rectangle } from 'electron';

function getWindowPosition(windowBounds: Rectangle, trayBounds: Rectangle) {
    const x = Math.round(trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2);
    const y = Math.round(trayBounds.y + trayBounds.height + 4);

    return { x, y };
}

export { getWindowPosition };
