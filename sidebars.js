module.exports = {
  NX: [
    {
      type: 'doc',
      id: 'nx/nx',
      label: 'Installation',
    },
    {
      type: 'category',
      label: 'Client',
      items: [
        {
          type: 'category',
          label: 'Functions',
          items: [
            {
              type: 'category',
              label: 'Input',
              items: [
                {
                  type: 'doc',
                  id: 'nx/client/functions/input/create',
                  label: 'Create',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/input/destroy',
                  label: 'Destroy',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/input/isActive',
                  label: 'IsActive',
                },
              ]
            },
            {
              type: 'category',
              label: 'Misc',
              items: [
                {
                  type: 'doc',
                  id: 'nx/client/functions/misc/createPed',
                  label: 'CreatePed',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/misc/drawText3d',
                  label: 'DrawText3D',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/misc/emitServerEvent',
                  label: 'EmitServerEvent',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/misc/requestAnim',
                  label: 'RequestAnim',
                },
              ]
            },
            {
              type: 'category',
              label: 'Objects',
              items: [
                {
                  type: 'doc',
                  id: 'nx/client/functions/objects/create',
                  label: 'Create',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/objects/delete',
                  label: 'Delete',
                },
              ]
            },
            {
              type: 'category',
              label: 'Player',
              items: [
                {
                  type: 'doc',
                  id: 'nx/client/functions/player/getPlayerData',
                  label: 'GetPlayerData',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/player/hasLoaded',
                  label: 'HasLoaded',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/player/setPlayerData',
                  label: 'SetPlayerData',
                },
              ]
            },
            {
              type: 'category',
              label: 'Vehicles',
              items: [
                {
                  type: 'doc',
                  id: 'nx/client/functions/vehicles/create',
                  label: 'Create',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/vehicles/delete',
                  label: 'Delete',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/vehicles/random',
                  label: 'Random',
                },
                {
                  type: 'doc',
                  id: 'nx/client/functions/vehicles/repair',
                  label: 'Repair',
                },
              ]
            },
          ]
        }
      ],
    }
  ],
};