import { changedNodes } from "./changedNodes";
import { initialNodes } from "./initialNodes";

let changedNodesConfig = false;

export const setChangedNodesConfig = () => {
    changedNodesConfig = true;
}

export const navigationFn = () => {
    return changedNodesConfig ? changedNodes : initialNodes;
}

