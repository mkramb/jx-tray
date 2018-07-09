import { EventEmitter } from 'events';
import StrictEventEmitter from 'strict-event-emitter-types';
import * as k8s from '@kubernetes/client-node';
import { KubeCallbackKind, KubeEvents, KubeCallback } from './types';

const config = new k8s.KubeConfig();

try {
    config.loadFromFile(process.env['HOME'] + '/.kube/config');
} catch (err) {
    console.error(`error reading .kube: ${err.message}`);
    throw err;
}

export class KubeWatcher {
    emitter: StrictEventEmitter<EventEmitter, KubeEvents>;
    request: any;

    succesHandler = (kind: KubeCallbackKind, event: any) => {
        kind === KubeCallbackKind.ADDED && this.emitter.emit(KubeCallbackKind.ADDED, event);
        kind === KubeCallbackKind.UPDATED && this.emitter.emit(KubeCallbackKind.UPDATED, event);
        kind === KubeCallbackKind.REMOVED && this.emitter.emit(KubeCallbackKind.REMOVED, event);
    };

    errorHandler = (err: any) => {
        console.error(err);
        console.info('Reconnecting watcher');
        setTimeout(() => this.connect, 1000);
    };

    constructor(private crd: string) {
        this.emitter = new EventEmitter();
    }

    connect() {
        const watcher = new k8s.Watch(config);

        try {
            this.request = watcher.watch(this.crd, {}, this.succesHandler, this.errorHandler);
        } catch (err) {
            this.errorHandler(err);
        }
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
