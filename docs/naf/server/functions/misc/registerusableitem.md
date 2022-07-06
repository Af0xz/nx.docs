# RegisterUsableItem

```ts
const NAF = exports.NAF.useServer()

NAF.Misc.RegisterUsableItem(name: string, (source: number, ...args: any[]) => {

    const naPlayer = NAF.Players.Get(source)
    const item = naPlayer.HasItem(name)

    if(item) {
        naPlayer.RemoveInventoryItem(name, 1)
    }
})
```
