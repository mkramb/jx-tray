import { Menu, shell } from 'electron';
import * as terminalTab from 'terminal-tab';

async function innerMenu() {
    return Menu.buildFromTemplate([
        {
            label: 'Open the CloudBees UI',
            click: () => terminalTab.open('jx cloudbees')
        },
        { type: 'separator' },
        {
            label: 'Documentation',
            click: () => shell.openExternal('https://jenkins-x.io/documentation/')
        },
        {
            label: 'Community',
            click: () => shell.openExternal('https://jenkins-x.io/community/')
        },
        { type: 'separator' },
        {
            role: 'quit',
            accelerator: 'Cmd+Q'
        }
    ]);
}

export { innerMenu };
