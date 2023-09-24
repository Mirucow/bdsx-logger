# bdsx-logger


Simple logger plugin for bdsx.



## features


- Logging with various color
- Support in game logging



## How to


### Import class `Logger`

```ts
import { Logger, TextFormat } from "@bdsx/bdsx-logger";


const logger = new Logger("Prefix");
```

### Just have fun with logging!!

```ts
logger.log("Green", TextFormat.Green);
logger.error("Red");
logger.warn("Yellow");

events.playerJoin.on((ev) => {
  const pl = ev.player;
  logger.mcLog("Send", pl);
  logger.mcError("to", pl);
  logger.mcWarn("player", pl);
});

logger.mcBroadCast("Send");
logger.mcBroadCastError("to");
logger.mcBroadCastWarn("all players");
```



## Advanced options


### default color

```ts
const logger = new Logger("Prefix", {
  prefixColor: TextFormat.BrightMagenta,
  prefixMCColor: MCTextFormat.MaterialAmethyst,
  defaultColor: TextFormat.Rainbow,
  defaultMCColor: MCTextFormat.MaterialNetherite
});
```


### broadcast to selected players

```ts
logger.mcBroadCast("broadcast", TextFormat.Rainbow, [player1, player2]);
```