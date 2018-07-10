import { PipelineStore } from './PipelineStore';

export class RootStore {
    pipelineStore: PipelineStore;

    constructor() {
        this.pipelineStore = new PipelineStore();
    }
}
