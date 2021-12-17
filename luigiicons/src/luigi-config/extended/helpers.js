import { changedNodes } from "./changedNodes";
import { initialNodes } from "./initialNodes";

let changedNodesConfig = false;

export const setChangedNodesConfig = changeConfig => {
    debugger;
    console.log('helper');
    changedNodesConfig = changeConfig;
}

export const navigationFn = () => {
    return changedNodesConfig ? changedNodes : initialNodes;
}

