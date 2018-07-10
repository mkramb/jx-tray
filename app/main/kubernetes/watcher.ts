import { EventEmitter } from 'events';
import StrictEventEmitter from 'strict-event-emitter-types';
import * as k8s from '@kubernetes/client-node';
import { KubeCallbackKind, KubeEvents, KubeCallback } from './types';

export class KubeWatcher {
    private emitter: StrictEventEmitter<EventEmitter, KubeEvents> = new EventEmitter();
    private config: k8s.KubeConfig = new k8s.KubeConfig();
    private connected = false;
    private request: any;

    constructor(private crd: string) {
        try {
            this.config.loadFromFile(process.env['HOME'] + '/.kube/config');
        } catch (err) {
            console.error(`error reading .kube: ${err.message}`);
            throw err;
        }
    }

    connect() {
        if (!this.connected) {
            this.connected = true;
            const watcher = new k8s.Watch(this.config);

            const handler = (kind: KubeCallbackKind, event: any) => {
                kind === KubeCallbackKind.ADDED && this.emitter.emit(KubeCallbackKind.ADDED, event);
                kind === KubeCallbackKind.UPDATED && this.emitter.emit(KubeCallbackKind.UPDATED, event);
                kind === KubeCallbackKind.REMOVED && this.emitter.emit(KubeCallbackKind.REMOVED, event);
            };

            const doneHandler = (err: any) => {
                console.error(err);
                console.info('Reconnecting watcher');
                setTimeout(execute, 1000);
            };

            const execute = () => {
                this.request = watcher.watch(this.crd, {}, handler, doneHandler);
            };

            execute();
        }
    }

    disconnect() {
        if (this.connected) {
            this.request.abort();
            this.emitter.removeAllListeners();
            this.connected = false;
        }
    }

    addCallback(callback: KubeCallback) {
        this.emitter.on(KubeCallbackKind.ADDED, event => callback(KubeCallbackKind.ADDED, event));
        this.emitter.on(KubeCallbackKind.UPDATED, event => callback(KubeCallbackKind.UPDATED, event));
        this.emitter.on(KubeCallbackKind.REMOVED, event => callback(KubeCallbackKind.REMOVED, event));
    }
}
