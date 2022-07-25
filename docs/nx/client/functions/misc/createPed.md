import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreatePed

This function well create a new ped.

<Tabs>
<TabItem value="ts" label="TypeScript">

```typescript
const NX = exports.NX.useClient()

NX.Misc.CreatePed(1, 'a_f_m_beach_01', (resp: RespT) => {
    // 
})

interface RespT {
  status: 'succes' | 'error'
  message?: any
  data?: any
}
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
const NX = exports.NX.useClient()

NX.Misc.CreatePed(1, 'a_f_m_beach_01', (resp) => {
    // 
})
```

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local NX = exports['NX']:useClient()

NX.Misc.CreatePed(1, 'a_f_m_beach_01', function (resp)
    -- 
end)
```

</TabItem>
</Tabs>