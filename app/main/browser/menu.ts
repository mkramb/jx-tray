import * as shelljs from 'shelljs';
import { Menu, shell } from 'electron';

async function innerMenu() {
    return Menu.buildFromTemplate([
        {
            label: 'Open the CloudBees UI',
            click: () => {
                shelljs.exec('jx cloudbees', {
                    silent: true,
                    async: true
                });
            }
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
