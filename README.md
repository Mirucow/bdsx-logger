# bdsx-logger

Logger plugin for bdsx.

## How to use

1. Import Logger class from this plugin.
2. construct Logger class.
3. You can do logging easily now!

```ts
import { Logger, TextFormat, MCTextFormat } from "@bdsx/bdsx-logger";

const logger = new Logger("Prefix");

logger.info("Hello World", TextFormat.Green);

player.sendMessage(`${MCTextFormat.Green}Hello World`);
```

```sh
[Prefix] Hello World <- Green color
```

## Future

### Loging text with format

```ts
const logger = new Logger("Prefix");

logger.info("This is Blue", TextFormat.Blue);
logger.error("This is Red");
logger.warn("This is Yellow");
```

```ts
enum TextFormat {
    Black,
    Red,
    Green,
    Yellow,
    Blue,
    Magenta,
    Cyan,
    White,
    Gray,
    Grey,

    BrightRed,
    BrightGreen,
    BrightYellow,
    BrightBlue,
    BrightMagenta,
    BrightCyan,
    BrightWhite,

    BgBlack,
    BgRed,
    BgGreen,
    BgYellow,
    BgBlue,
    BgMagenta,
    BgCyan,
    BgWhite,

    Reset,
    Bold, // Not supported
    Dim, // Not supported
    Italic, // Not supported
    Underline,
    Inverse,
    Hidden, // Not supported
    Strikethrough, // Not supported

    Rainbow,
    Zebra,
    America,
    Trap,
    Random,
    Zalgo,
}
```

### Send message with format

```ts
const message = `${MCTextFormat.Aqua}This is Aqua`;
```

```ts
enum MCTextFormat {
    Black = "§0",
    DarkBlue = "§1",
    DarkGreen = "§2",
    DarkAqua = "§3",
    DarkRed = "§4",
    DarkPurple = "§5",
    Gold = "§6",
    Gray = "§7",
    DarkGray = "§8",
    Blue = "§9",
    Green = "§a",
    Aqua = "§b",
    Red = "§c",
    LightPurple = "§d",
    Yellow = "§e",
    White = "§f",

    MinecoinGold = "§g",
    MaterialQuartz = "§h",
    MaterialIron = "§i",
    MaterialNetherite = "§j",
    MaterialRedstone = "§m",
    MaterialCopper = "§n",
    MaterialGold = "§p",
    MaterialEmerald = "§q",
    MaterialDiamond = "§s",
    MaterialLapis = "§t",
    MaterialAmethyst = "§u",

    Obfuscated = "§k",
    Bold = "§l",
    Italic = "§o",
    Reset = "§r",
}
```
