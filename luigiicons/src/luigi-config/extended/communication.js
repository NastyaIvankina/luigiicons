
import { setChangedNodesConfig, setHideFromNavigation } from './helpers';

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
        },

        'my-custom-message.showHidden': () => {
            debugger;
            console.log('show hidden');
            setHideFromNavigation(false);
            // Luigi.setConfig();
            Luigi.configChanged('navigation');
            // Luigi.navigation().updateTopNavigation();
        }
    }
}

export const communication = new Communication();