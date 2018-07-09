export enum KubeCallbackKind {
    ADDED = 'ADDED',
    UPDATED = 'MODIFIED',
    REMOVED = 'DELETED'
}

export interface KubeEvents {
    [KubeCallbackKind.ADDED]: object;
    [KubeCallbackKind.UPDATED]: object;
    [KubeCallbackKind.REMOVED]: object;
}

export type KubeCallback = (kind: KubeCallbackKind, event: any) => void;
