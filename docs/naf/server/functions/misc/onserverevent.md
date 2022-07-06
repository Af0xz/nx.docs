# OnServerEvent

```ts
const NAF = exports.NAF.useServer()


// last argument is always the callback.
NAF.Misc.OnServerEvent(eventName: string, (arg1?: any, arg2?: any, cb: Function) => {
    console.log(arg1)

    const data = () => {}

    cb(data)
})
```
