import { deserialize, deserializeAs } from 'cerialize';

export enum PipelineStatus {
    Pending = 'Pending',
    Scheduled = 'Scheduled',
    Initialized = 'Initialized',
    Running = 'Running',
    Ready = 'Ready',
    Terminating = 'Terminating',
    Succeeded = 'Succeeded',
    Failed = 'Failed',
    Unknown = 'Unknown'
}

export class PipelineSpec {
    @deserialize build: number;
    @deserialize gitUrl: string;
    @deserialize pipeline: string;
    @deserializeAs(PipelineStatus) status: PipelineStatus;
}

export class Pipeline {
    @deserializeAs(PipelineSpec) spec: PipelineSpec;

    get key() {
        return this.name;
    }

    get name() {
        return decodeURIComponent(this.spec.pipeline);
    }
}
