import { changedNodes } from "./changedNodes";
import { initialNodes } from "./initialNodes";

debugger;
let changedNodesConfig = false;
// let hideFromNavigation = true;

export const setChangedNodesConfig = changeConfig => {
    debugger;
    console.log('helper');
    changedNodesConfig = changeConfig;
}

export const getChangedNodesConfig = () => {
    debugger;
    return changedNodesConfig;
}

export const navigationFn = () => {
    debugger;
    return window.location.hash.includes('changed') || window.location.hash.includes('orders') || changedNodesConfig ? changedNodes : initialNodes;
}

// export const setHideFromNavigation = hideFromNav => {
//     debugger;
//     console.log("hide nav");
//     hideFromNavigation = hideFromNav;
// }

// export const getHideFromNavigation = () => {
//     debugger;
//     return hideFromNavigation;
// }