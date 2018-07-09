import { Rectangle } from 'electron';

function getCentralPosition(windowBounds: Rectangle, trayBounds: Rectangle) {
    return {
        x: Math.round(trayBounds.x + trayBounds.width / 2 - windowBounds.width / 2),
        y: Math.round(trayBounds.y + trayBounds.height + 4)
    };
}

export { getCentralPosition };
