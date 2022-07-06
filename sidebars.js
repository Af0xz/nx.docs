module.exports = {
  docs: {
    'NAF': [
      {
        type: 'category',
        label: 'Client',
        items: [
          {
            type: 'category',
            label: 'Events',
            items: [
              'naf/naf',
            ]
          },
          {
            type: 'category',
            label: 'Functinos',
            items: [
              'naf/naf',
            ]
          },
        ],
      },
      {
        type: 'category',
        label: 'Server',
        items: [
          {
            type: 'category',
            label: 'Events',
            items: [
              'naf/naf'
            ]
          },
          {
            type: 'category',
            label: 'Functions',
            items: [
              {
                type: 'category',
                label: 'Misc',
                items: [
                  'naf/server/functions/misc/onserverevent',
                  'naf/server/functions/misc/registerusableitem',
                ]
              },
              {
                type: 'category',
                label: 'Players',
                items: [
                  'naf/server/functions/players/get',
                  'naf/server/functions/players/getall',
                ]
              },
            ]
          },
          {
            type: 'category',
            label: 'naPlayer',
            items: [
              'naf/server/naplayer/getname',
              'naf/server/naplayer/getidentifier',
              'naf/server/naplayer/getaccountmoney',
              'naf/server/naplayer/getcharinfo',
              'naf/server/naplayer/getcoords',
              'naf/server/naplayer/getweight',
              'naf/server/naplayer/getinventory',
              'naf/server/naplayer/getaccounts',
              'naf/server/naplayer/getpermissions',
              'naf/server/naplayer/getjob',
              'naf/server/naplayer/getinventoryitem',
              'naf/server/naplayer/setcoords',
              'naf/server/naplayer/setjob',
              'naf/server/naplayer/hasitem',
              'naf/server/naplayer/removeinventoryitem',
              'naf/server/naplayer/addinventoryitem',
              'naf/server/naplayer/emitevent',
            ]
          },
        ],
      },
    ],
  },
};
