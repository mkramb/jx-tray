function patchNodePath() {
    const shell = require('shelljs');
    const nodePath = shell.which('node').toString();
    shell.config.execPath = nodePath;
}

export { patchNodePath };
