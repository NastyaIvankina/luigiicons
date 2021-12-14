export const changedNodes = [
    {
        pathSegment: "hw", 
        label: "Hello World!", 
        icon: "home", 
        viewUrl: "https://46d92a43trial.launchpad.cfapps.us10.hana.ondemand.com/00b57e0f-fa22-4f4f-88e2-ff1dd27d2346.nastya19102021.19102021nastyadeploy-1.0.0/",
        loadingIndicator: {
            enabled: false
        }
    },
    {
        pathSegment: "changed-nodes", 
        label: "Changed Nodes", 
        category: {
            label: 'Changed Nodes',
            icon: 'dimension',
            collapsible: true
        },
        viewUrl: "https://46d92a43trial.launchpad.cfapps.us10.hana.ondemand.com/00b57e0f-fa22-4f4f-88e2-ff1dd27d2346.nastya19102021.19102021nastyadeploy-1.0.0/",
        loadingIndicator: {
            enabled: false
        },
    },
    { 
        pathSegment: 'changed-nodes/orders', 
        label: 'Orders', 
        category: 'Changed Nodes',
        loadingIndicator: {
            enabled: false
        },
        viewUrl: 'https://46d92a43trial.launchpad.cfapps.us10.hana.ondemand.com/00b57e0f-fa22-4f4f-88e2-ff1dd27d2346.nastya19102021.19102021nastyadeploy-1.0.0/#/orders'
    }
]