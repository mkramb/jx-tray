import { ipcRenderer } from 'electron';
import { Deserialize } from 'cerialize';
import { observable, action, runInAction } from 'mobx';
import { KubeCallbackKind } from '../../main/kubernetes/types';
import { PIPELINE_SUBSCRIBE } from '../../main/actions';
import { Pipeline } from '../models';

export class PipelineStore {
    @observable pipelines: Pipeline[] = [];

    @action
    init() {
        ipcRenderer.send(PIPELINE_SUBSCRIBE);
        ipcRenderer.on(KubeCallbackKind.ADDED, (event: any, data: any) => {
            runInAction(() => {
                const newPipeline = Deserialize(data, Pipeline);

                this.pipelines = this.pipelines
                    .filter(pipeline => pipeline.key === newPipeline.key)
                    .concat([newPipeline]);
            });
        });
    }
}
