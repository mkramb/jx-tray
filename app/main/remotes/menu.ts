import { ipcMain, Rectangle, Event } from 'electron';
import { innerMenu } from '../browser';
import { MENU_OPEN } from '../actions';

const showMenu = async (event: Event, bounds: Rectangle) => {
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

function initMenu() {
    ipcMain.on(MENU_OPEN, showMenu);
}

export { initMenu };
