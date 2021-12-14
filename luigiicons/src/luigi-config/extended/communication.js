
import { setChangedNodesConfig } from './helpers';

class Communication {
    customMessagesListeners = {
        'my-custom-message.changeConfig': () => {
            debugger;
            setChangedNodesConfig(true);
            // Luigi.setConfig();
            Luigi.configChanged('navigation.nodes');
            // Luigi.navigation().updateTopNavigation();
        }
    }
}

export const communication = new Communication();