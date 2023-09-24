import {
  america,
  bgBlack,
  bgBlue,
  bgCyan,
  bgGreen,
  bgMagenta,
  bgRed,
  bgWhite,
  bgYellow,
  black,
  blue,
  bold,
  brightBlue,
  brightCyan,
  brightGreen,
  brightMagenta,
  brightRed,
  brightWhite,
  brightYellow,
  cyan,
  dim,
  gray,
  green,
  grey,
  hidden,
  inverse,
  italic,
  magenta,
  rainbow,
  random,
  red,
  reset,
  strikethrough,
  trap,
  underline,
  white,
  yellow,
  zalgo,
  zebra
} from "colors";
import { Player } from "bdsx/bds/player";
import { bedrockServer } from "bdsx/launcher";





export class Logger {

  private PREFIX: string = "Logger";

  private prefixColor: TextFormat = TextFormat.White;
  private prefixMCColor: MCTextFormat = MCTextFormat.White;
  private defaultColor: TextFormat = TextFormat.White;
  private defaultMCColor: MCTextFormat = MCTextFormat.White;



  constructor(prefix: string, options?: { prefixColor?: TextFormat, prefixMCColor?: MCTextFormat,defaultColor?: TextFormat, defaultMCColor?: MCTextFormat }) {
    this.PREFIX = prefix;
    if (options) {
      if (options.prefixColor) this.prefixColor = options.prefixColor;
      if (options.prefixMCColor) this.prefixMCColor = options.prefixMCColor;
      if (options.defaultColor) this.defaultColor = options.defaultColor;
      if (options.defaultMCColor) this.defaultMCColor = options.defaultMCColor;
    }
  }



  public setPrefix(prefix: string): void {
    this.PREFIX = prefix;
  }


  public log(message: string, color?: TextFormat): void {
    if (!color) color = this.defaultColor;
    const p = Logger.createColorText(`[${this.PREFIX}]`, this.prefixColor);
    const m = Logger.createColorText(message, color);
    console.log(`${p} ${m}`);
  }

  public error(message: string): void {
    const p = Logger.createColorText(`[${this.PREFIX}]`, this.prefixColor);
    const m = Logger.createColorText(`[ERROR] ${message}`, TextFormat.Red);
    console.error(`${p} ${m}`);
  }

  public warn(message: string): void {
    const p = Logger.createColorText(`[${this.PREFIX}]`, this.prefixColor);
    const m = Logger.createColorText(`[WARN] ${message}`, TextFormat.Yellow);
    console.warn(`${p} ${m}`);
  }


  public mcLog(message: string, player: Player, color?: MCTextFormat): void {
    if (!color) color = this.defaultMCColor;
    player.sendMessage(`${this.prefixMCColor}[${this.PREFIX}] ${color}${message}`);
  }

  public mcError(message: string, player: Player): void {
    player.sendMessage(`${this.prefixMCColor}[${this.PREFIX}] ${MCTextFormat.Red}[ERROR] ${message}`);
  }

  public mcWarn(message: string, player: Player): void {
    player.sendMessage(`${this.prefixMCColor}[${this.PREFIX}] ${MCTextFormat.Yellow}[WARN] ${message}`);
  }


  public mcBroadCast(message: string, color?: MCTextFormat, players?: Player[]): void {
    if (!color) color = this.defaultMCColor;
    if (!players) players = bedrockServer.serverInstance.getPlayers();
    for (const player of players) {
      player.sendMessage(`${this.prefixMCColor}[${this.PREFIX}] ${color}${message}`);
    }
  }

  public mcBroadCastError(message: string, players?: Player[]): void {
    if (!players) players = bedrockServer.serverInstance.getPlayers();
    for (const player of players) {
      player.sendMessage(`${this.prefixMCColor}[${this.PREFIX}] ${MCTextFormat.Red}[ERROR] ${message}`);
    }
  }

  public mcBroadCastWarn(message: string, players?: Player[]): void {
    if (!players) players = bedrockServer.serverInstance.getPlayers();
    for (const player of players) {
      player.sendMessage(`${this.prefixMCColor}[${this.PREFIX}] ${MCTextFormat.Yellow}[WARN] ${message}`);
    }
  }



  public static createColorText(message: string, color: TextFormat): string {
    switch (color) {
      case TextFormat.Black:
        return black(message);
      case TextFormat.Red:
        return red(message);
      case TextFormat.Green:
        return green(message);
      case TextFormat.Yellow:
        return yellow(message);
      case TextFormat.Blue:
        return blue(message);
      case TextFormat.Magenta:
        return magenta(message);
      case TextFormat.Cyan:
        return cyan(message);
      case TextFormat.White:
        return white(message);
      case TextFormat.Gray:
        return gray(message);
      case TextFormat.Grey:
        return grey(message);
      case TextFormat.BrightRed:
        return brightRed(message);
      case TextFormat.BrightGreen:
        return brightGreen(message);
      case TextFormat.BrightYellow:
        return brightYellow(message);
      case TextFormat.BrightBlue:
        return brightBlue(message);
      case TextFormat.BrightMagenta:
        return brightMagenta(message);
      case TextFormat.BrightCyan:
        return brightCyan(message);
      case TextFormat.BrightWhite:
        return brightWhite(message);
      case TextFormat.BgBlack:
        return bgBlack(message);
      case TextFormat.BgRed:
        return bgRed(message);
      case TextFormat.BgGreen:
        return bgGreen(message);
      case TextFormat.BgYellow:
        return bgYellow(message);
      case TextFormat.BgBlue:
        return bgBlue(message);
      case TextFormat.BgMagenta:
        return bgMagenta(message);
      case TextFormat.BgCyan:
        return bgCyan(message);
      case TextFormat.BgWhite:
        return bgWhite(message);
      case TextFormat.Reset:
        return reset(message);
      case TextFormat.Bold:
        return bold(message);
      case TextFormat.Dim:
        return dim(message);
      case TextFormat.Italic:
        return italic(message);
      case TextFormat.Underline:
        return underline(message);
      case TextFormat.Inverse:
        return inverse(message);
      case TextFormat.Hidden:
        return hidden(message);
      case TextFormat.Strikethrough:
        return strikethrough(message);
      case TextFormat.Rainbow:
        return rainbow(message);
      case TextFormat.Zebra:
        return zebra(message);
      case TextFormat.America:
        return america(message);
      case TextFormat.Trap:
        return trap(message);
      case TextFormat.Random:
        return random(message);
      case TextFormat.Zalgo:
        return zalgo(message);
    }
  }
}



export enum TextFormat {
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
  Zalgo
}



export enum MCTextFormat {
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
  Reset = "§r"
}