import { initMenu } from './menu';
import { initPipeline } from './pipeline';

function initRemoteApi() {
    initMenu();
    initPipeline();
}

export { initRemoteApi };
