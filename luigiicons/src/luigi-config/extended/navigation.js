class Navigation {
    constructor() {
    }

    nodes = [
        {
            pathSegment: "home", label: "Home", children:
                [{
                    pathSegment: "hw", 
                    label: "Hello World!", 
                    icon: "home", 
                    viewUrl: "https://46d92a43trial.launchpad.cfapps.us10.hana.ondemand.com/00b57e0f-fa22-4f4f-88e2-ff1dd27d2346.nastya19102021.19102021nastyadeploy-1.0.0/",
                    loadingIndicator: {
                        enabled: false
                    }
                }]

        }
    ];

    profile = {
    logout: {
      label: 'Sign Out'
      // icon: "sys-cancel",
    },
    items: [
      {
        label: 'Luigi in Github',
        externalLink: {
          url: 'https://github.com/SAP/luigi',
          sameWindow: false
        }
      }
    ],
    staticUserInfoFn: () => {
      return new Promise(resolve => {
        resolve({
          name: 'Static User',
          initials: 'LU',
          email: 'other.luigi.user@example.com',
          picture: '/assets/favicon-sap.ico',
          description: 'Luigi Developer'
        });
      });
    }
  }
 
}
 export const navigation = new Navigation();