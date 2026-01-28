declare module "dan200.computercraft.core.terminal.Palette" {
import {$Colour$$Type} from "dan200.computercraft.core.util.Colour"

export class $Palette {
static readonly "PALETTE_SIZE": integer
static readonly "DEFAULT": $Palette

constructor(arg0: boolean)

public "getRenderColours"(arg0: integer): integer
public "setColour"(arg0: integer, arg1: $Colour$$Type): void
public "setColour"(arg0: integer, arg1: double, arg2: double, arg3: double): void
public "getColour"(arg0: integer): (double)[]
public "resetColours"(): void
public static "encodeRGB8"(arg0: (double)[]): integer
public static "decodeRGB8"(arg0: integer): (double)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Palette$$Type = ($Palette);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Palette$$Original = $Palette;}
declare module "dan200.computercraft.core.terminal.TextBuffer" {
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"

export class $TextBuffer {
constructor(arg0: character, arg1: integer)
constructor(arg0: StringJS)

public "length"(): integer
public "toString"(): StringJS
public "charAt"(arg0: integer): character
public "fill"(arg0: character): void
public "fill"(arg0: character, arg1: integer, arg2: integer): void
public "write"(arg0: $TextBuffer$$Type): void
public "write"(arg0: StringJS, arg1: integer): void
public "write"(arg0: StringJS): void
public "write"(arg0: $ByteBuffer$$Type, arg1: integer): void
public "setChar"(arg0: integer, arg1: character): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextBuffer$$Type = ($TextBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextBuffer$$Original = $TextBuffer;}
declare module "dan200.computercraft.core.terminal.Terminal" {
import {$TextBuffer} from "dan200.computercraft.core.terminal.TextBuffer"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ByteBuffer$$Type} from "java.nio.ByteBuffer"
import {$Palette} from "dan200.computercraft.core.terminal.Palette"
import {$Colour$$Type} from "dan200.computercraft.core.util.Colour"

export class $Terminal {
constructor(arg0: integer, arg1: integer, arg2: boolean, arg3: $Runnable$$Type)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "isColour"(): boolean
public "clearLine"(): void
public "getTextColour"(): integer
public static "getColour"(arg0: character, arg1: $Colour$$Type): integer
public "setTextColour"(arg0: integer): void
public "setCursorPos"(arg0: integer, arg1: integer): void
public "getTextColourLine"(arg0: integer): $TextBuffer
public "setCursorBlink"(arg0: boolean): void
public "setBackgroundColour"(arg0: integer): void
public "getCursorX"(): integer
public "getCursorY"(): integer
public "getCursorBlink"(): boolean
public "getBackgroundColour"(): integer
public "getBackgroundColourLine"(arg0: integer): $TextBuffer
public "getWidth"(): integer
public "getHeight"(): integer
public "reset"(): void
public "clear"(): void
public "write"(arg0: StringJS): void
public "resize"(arg0: integer, arg1: integer): void
public "getLine"(arg0: integer): $TextBuffer
public "setLine"(arg0: integer, arg1: StringJS, arg2: StringJS, arg3: StringJS): void
public "blit"(arg0: $ByteBuffer$$Type, arg1: $ByteBuffer$$Type, arg2: $ByteBuffer$$Type): void
public "getPalette"(): $Palette
public "setChanged"(): void
public "scroll"(arg0: integer): void
get "colour"(): boolean
get "textColour"(): integer
set "textColour"(value: integer)
set "cursorBlink"(value: boolean)
set "backgroundColour"(value: integer)
get "cursorX"(): integer
get "cursorY"(): integer
get "cursorBlink"(): boolean
get "backgroundColour"(): integer
get "width"(): integer
get "height"(): integer
get "palette"(): $Palette
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Terminal$$Type = ($Terminal);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Terminal$$Original = $Terminal;}
