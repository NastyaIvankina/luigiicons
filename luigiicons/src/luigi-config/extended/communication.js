
import { setChangedNodesConfig } from './helpers';

class Communication {
    debugger;
    customMessagesListeners = {
        'my-custom-message.changeConfig': () => {
            debugger;
            console.log('message received');
            setChangedNodesConfig(true);
            // Luigi.setConfig();
            Luigi.configChanged('navigation.nodes');
            // Luigi.navigation().updateTopNavigation();
        }
    }
}

export const communication = new Communication();