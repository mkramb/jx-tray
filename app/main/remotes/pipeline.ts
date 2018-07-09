import { ipcMain } from 'electron';
import { KubeWatcher } from '../kubernetes';
import { PIPELINE_SUBSCRIBE } from '../actions';
import { getMainWindow } from '../browser';

const pipelines = '/apis/jenkins.io/v1/namespaces/jx/pipelineactivities';
const watcher = new KubeWatcher(pipelines);

const watchPipelines = () => {
    watcher.addCallback((kind, event) => {
        getMainWindow()!.webContents.send(kind, event);
    });

    watcher.connect();
};

watchPipelines();

function initPipeline() {
    ipcMain.on(PIPELINE_SUBSCRIBE, watchPipelines);
}

export { initPipeline };
