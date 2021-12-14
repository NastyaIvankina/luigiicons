import { navigationFn } from './helpers';
import { initialNodes } from './initialNodes';

class Navigation {
    constructor() {
    }

    nodes = [
        {
            pathSegment: "home", 
            label: "Home", 
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