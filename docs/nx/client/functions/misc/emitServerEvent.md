import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CreatePed

This function well create a new ped.

<Tabs>
<TabItem value="ts" label="TypeScript">

```typescript
const NX = exports.NX.useClient()

NX.Misc.EmitServerEvent(
  'NX::helloWorld',
  (name: string, amount: number) => {
    console.log(name)
    console.log(amount)
  },
  'arg1',
  'arg2'
)
```

</TabItem>
<TabItem value="js" label="JavaScript">

```js
const NX = exports.NX.useClient()

NX.Misc.EmitServerEvent(
  'NX::helloWorld',
  (name, amount) => {
    console.log(name)
    console.log(amount)
  },
  'arg1',
  'arg2'
)
```

</TabItem>
<TabItem value="lua" label="Lua">

```lua
local NX = exports['NX']:useClient()

NX.Misc.EmitServerEvent('NX::helloWorld', function (name, amount)
    print(name)
    print(amount)
end, 'arg1', 'arg2')
```

</TabItem>
</Tabs>