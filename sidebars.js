module.exports = {
  NX: [
    {
      type: 'doc',
      id: 'nx/nx',
      label: 'Installation',
    },
    {
      type: 'doc',
      id: 'nx/dev/dev',
      label: 'Developpement',
    },
    {
      type: 'category',
      label: 'API',
      items: [
        {
          type: 'category',
          label: 'Client',
          items: [
            {
              type: 'category',
              label: 'Events',
              items: [
                {
                  type: 'doc',
                  id: 'nx/client/events/items',
                  label: 'Items',
                },
                {
                  type: 'doc',
                  id: 'nx/client/events/misc',
                  label: 'Misc',
                },
              ],
            },
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
                  ],
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
                    {
                      type: 'doc',
                      id: 'nx/client/functions/misc/createNotification',
                      label: 'CreateNotification',
                    },
                  ],
                },
                {
                  type: 'category',
                  label: 'Loading Bar',
                  items: [
                    {
                      type: 'doc',
                      id: 'nx/client/functions/loading-bar/create',
                      label: 'Create',
                    },
                    {
                      type: 'doc',
                      id: 'nx/client/functions/loading-bar/isActive',
                      label: 'IsActive',
                    },
                  ],
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
                  ],
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
                  ],
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
                  ],
                },
              ],
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
                {
                  type: 'doc',
                  id: 'nx/server/events/items',
                  label: 'Items',
                },
                {
                  type: 'doc',
                  id: 'nx/server/events/misc',
                  label: 'Misc',
                },
              ],
            },
            {
              type: 'category',
              label: 'Players',
              items: [
                {
                  type: 'doc',
                  id: 'nx/server/functions/players/get',
                  label: 'Get',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/players/getAll',
                  label: 'GetAll',
                },
              ],
            },
            {
              type: 'category',
              label: 'Misc',
              items: [
                {
                  type: 'doc',
                  id: 'nx/server/functions/misc/addCommand',
                  label: 'AddCommand',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/misc/onServerEvent',
                  label: 'OnServerEvent',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/misc/registerUsableItem',
                  label: 'RegisterUsableItem',
                },
              ],
            },
            {
              type: 'category',
              label: 'Discord',
              items: [
                {
                  type: 'doc',
                  id: 'nx/server/functions/discord/sendWebhook',
                  label: 'SendWebhook',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
