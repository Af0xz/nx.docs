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
      type: 'doc',
      id: 'nx/config/config',
      label: 'Configuration',
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
                  id: 'nx/client/events/item',
                  label: 'Item',
                },
                {
                  type: 'doc',
                  id: 'nx/client/events/loadingBar',
                  label: 'Loading Bar',
                },
                {
                  type: 'doc',
                  id: 'nx/client/events/notification',
                  label: 'Notification',
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
                  label: 'Menu',
                  items: [
                    {
                      type: 'doc',
                      id: 'nx/client/functions/menu/create',
                      label: 'Create',
                    },
                    {
                      type: 'doc',
                      id: 'nx/client/functions/menu/showMenu',
                      label: 'Show Menu',
                    },
                    {
                      type: 'doc',
                      id: 'nx/client/functions/menu/hideMenu',
                      label: 'Hide Menu',
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
                  label: 'Timeline',
                  items: [
                    {
                      type: 'doc',
                      id: 'nx/client/functions/timeline/create',
                      label: 'Create',
                    },
                    {
                      type: 'doc',
                      id: 'nx/client/functions/timeline/update',
                      label: 'Update',
                    },
                    {
                      type: 'doc',
                      id: 'nx/client/functions/timeline/destroy',
                      label: 'Destroy',
                    },
                    {
                      type: 'doc',
                      id: 'nx/client/functions/timeline/isActive',
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
                      id: 'nx/client/functions/player/getData',
                      label: 'GetData',
                    },
                    {
                      type: 'doc',
                      id: 'nx/client/functions/player/getValue',
                      label: 'GetValue',
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
              label: 'Players',
              items: [
                {
                  type: 'doc',
                  id: 'nx/server/functions/players/get',
                  label: 'Get',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/players/getData',
                  label: 'GetData',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/players/getAll',
                  label: 'GetAll',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/players/getAllData',
                  label: 'GetAllData',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/players/saveAll',
                  label: 'SaveAll',
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
            {
              type: 'category',
              label: 'nxPlayer',
              items: [
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/addItem',
                  label: 'AddItem',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/emitEvent',
                  label: 'EmitEvent',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getAccountMoney',
                  label: 'GetAccountMoney',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getAccounts',
                  label: 'GetAccounts',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getBloodType',
                  label: 'GetBloodType',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getCharInfo',
                  label: 'GetCharInfo',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getCoords',
                  label: 'GetCoords',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getHunger',
                  label: 'GetHunger',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getIdentifier',
                  label: 'GetIdentifier',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getUID',
                  label: 'GetUID',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getInventory',
                  label: 'GetInventory',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getJob',
                  label: 'GetJob',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getMaxWeight',
                  label: 'GetMaxWeight',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getName',
                  label: 'GetName',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getPermissions',
                  label: 'GetPermissions',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getThirst',
                  label: 'GetThirst',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/getWeight',
                  label: 'GetWeight',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/hasItem',
                  label: 'HasItem',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/kick',
                  label: 'Kick',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/removeItem',
                  label: 'RemoveItem',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/save',
                  label: 'Save',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/setAccountMoney',
                  label: 'SetAccountMoney',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/setJob',
                  label: 'SetJob',
                },
                {
                  type: 'doc',
                  id: 'nx/server/functions/nxPlayer/setPermissions',
                  label: 'SetPermissions',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
