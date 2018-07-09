import { EventEmitter } from 'events';
import StrictEventEmitter from 'strict-event-emitter-types';
import * as k8s from '@kubernetes/client-node';
import { KubeCallbackKind, KubeEvents, KubeCallback } from './types';

export class KubeWatcher {
    emitter: StrictEventEmitter<EventEmitter, KubeEvents>;
    config: k8s.KubeConfig;
    request: any;

    succesHandler = (kind: KubeCallbackKind, event: any) => {
        kind === KubeCallbackKind.ADDED && this.emitter.emit(KubeCallbackKind.ADDED, event);
        kind === KubeCallbackKind.UPDATED && this.emitter.emit(KubeCallbackKind.UPDATED, event);
        kind === KubeCallbackKind.REMOVED && this.emitter.emit(KubeCallbackKind.REMOVED, event);
    };

    errorHandler = (err: any) => {
        console.error(err);
        console.info('Reconnecting watcher');
        setTimeout(this.connect, 1000);
    };

    constructor(private crd: string) {
        this.emitter = new EventEmitter();
        this.config = new k8s.KubeConfig();

        try {
            this.config.loadFromFile(process.env['HOME'] + '/.kube/config');
        } catch (e) {
            console.error(`error reading .kube: ${e.message}`);
            throw e;
        }
    }

    connect() {
        const watcher = new k8s.Watch(this.config);
        this.request = watcher.watch(this.crd, {}, this.succesHandler, this.errorHandler);
    }

    disconnect() {
        this.request && this.request.abort();
    }

    addCallback(callback: KubeCallback) {
        this.emitter.on(KubeCallbackKind.ADDED, event => callback(KubeCallbackKind.ADDED, event));
        this.emitter.on(KubeCallbackKind.UPDATED, event => callback(KubeCallbackKind.UPDATED, event));
        this.emitter.on(KubeCallbackKind.REMOVED, event => callback(KubeCallbackKind.REMOVED, event));
    }
}
