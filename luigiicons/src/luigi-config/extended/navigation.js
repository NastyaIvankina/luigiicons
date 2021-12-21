import { getChangedNodesConfig, navigationFn } from './helpers';
import { initialNodes } from './initialNodes';
import { changedNodes } from './changedNodes';

class Navigation {
    constructor() {
    }

    // navigationFn() {
    //   return window.location.hash.includes('changed') || window.location.hash.includes('orders') || getChangedNodesConfig() ? changedNodes : initialNodes;
    // }

    viewGroupSettings = {
      view_group_components: {
        mandi_view_group: 'https://cbf69bbetrial.launchpad.cfapps.eu10.hana.ondemand.com/2daf59b9-6dcb-4a79-b39c-aaa4564a8754.nastya19102021.19102021nastyadeploy-1.0.0/#/mandi-view-group/preload'
      }
    };

    nodes = [
        {
            pathSegment: "mandi-view-group", 
            label: "Home", 
            viewGroup: 'mandi_view_group',
            children: navigationFn
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