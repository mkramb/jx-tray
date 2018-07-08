import { ipcMain, Rectangle, Event } from 'electron';
import { innerMenu } from '../menu';
import { OPEN_MENU } from '../api';

const openMenu = async (event: Event, bounds: Rectangle) => {
    if (bounds && bounds.x && bounds.y) {
        bounds.x = parseInt(bounds.x.toFixed(), 10) + bounds.width / 2;
        bounds.y = parseInt(bounds.y.toFixed(), 10) - bounds.height / 2;

        const menu = await innerMenu();

        menu.popup({
            x: bounds.x,
            y: bounds.y
        });
    }
};

function setupOpenMenu() {
    ipcMain.on(OPEN_MENU, openMenu);
}

export { setupOpenMenu };
