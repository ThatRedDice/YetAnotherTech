declare module "dan200.computercraft.core.util.Colour" {
import {$Enum} from "java.lang.Enum"

export class $Colour extends $Enum<($Colour)> {
static readonly "WHITE": $Colour
static readonly "BLUE": $Colour
static readonly "PURPLE": $Colour
static readonly "GREEN": $Colour
static readonly "RED": $Colour
static readonly "LIGHT_GREY": $Colour
static readonly "PINK": $Colour
static readonly "LIGHT_BLUE": $Colour
static readonly "LIME": $Colour
static readonly "BLACK": $Colour
static readonly "MAGENTA": $Colour
static readonly "VALUES": ($Colour)[]
static readonly "YELLOW": $Colour
static readonly "CYAN": $Colour
static readonly "BROWN": $Colour
static readonly "GREY": $Colour
static readonly "ORANGE": $Colour

public "getARGB"(): integer
public "getR"(): float
public static "fromInt"(arg0: integer): $Colour
public "getHex"(): integer
public "getB"(): float
public "getG"(): float
public static "values"(): ($Colour)[]
public static "valueOf"(arg0: StringJS): $Colour
get "ARGB"(): integer
get "r"(): float
get "hex"(): integer
get "b"(): float
get "g"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Colour$$Type = (("black") | ("red") | ("green") | ("brown") | ("blue") | ("purple") | ("cyan") | ("light_grey") | ("grey") | ("pink") | ("lime") | ("yellow") | ("light_blue") | ("magenta") | ("orange") | ("white"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Colour$$Original = $Colour;}
