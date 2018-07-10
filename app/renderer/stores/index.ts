import { RootStore } from './RootStore';

export * from './PipelineStore';
export const stores = {
    ...new RootStore()
};
