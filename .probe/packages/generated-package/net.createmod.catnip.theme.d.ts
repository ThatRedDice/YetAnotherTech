declare module "net.createmod.catnip.theme.Color" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Style} from "net.minecraft.network.chat.Style"
import {$Vector3f} from "org.joml.Vector3f"
import {$Couple$$Type} from "net.createmod.catnip.data.Couple"

export class $Color {
static readonly "RED": $Color
static readonly "TRANSPARENT_BLACK": $Color
static readonly "WHITE": $Color
static readonly "BLACK": $Color
static readonly "SPRING_GREEN": $Color
static readonly "PURPLE": $Color
static readonly "GREEN": $Color

constructor(arg0: integer)
constructor(arg0: integer, arg1: boolean)
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)
constructor(arg0: float, arg1: float, arg2: float, arg3: float)

public "setRed"(arg0: integer): $Color
public "setRed"(arg0: float): $Color
public "setGreen"(arg0: float): $Color
public "setGreen"(arg0: integer): $Color
public "setBlue"(arg0: float): $Color
public "setBlue"(arg0: integer): $Color
public "mixWith"(arg0: $Color$$Type, arg1: float): $Color
public "getRed"(): integer
public "getGreen"(): integer
public "getBlue"(): integer
public static "mixColors"(arg0: integer, arg1: integer, arg2: float): integer
public static "mixColors"(arg0: $Couple$$Type<($Color$$Type)>, arg1: float): $Color
public static "mixColors"(arg0: $Color$$Type, arg1: $Color$$Type, arg2: float): $Color
public "getRedAsFloat"(): float
public "getGreenAsFloat"(): float
public "getBlueAsFloat"(): float
public static "rainbowColor"(arg0: integer): $Color
public static "generateFromLong"(arg0: long): $Color
public "getAlphaAsFloat"(): float
public "asVector"(): $Vec3
public "asStyle"(): $Style
public "ensureMutable"(): $Color
public "scaleAlpha"(arg0: float): $Color
public "scaleAlphaForText"(arg0: float): $Color
public "modifyValue"(arg0: $UnaryOperator$$Type<(integer)>): $Color
public "asVectorF"(): $Vector3f
public "brighter"(): $Color
public "darker"(): $Color
public "getRGB"(): integer
public "setValue"(arg0: integer): $Color
public "copy"(arg0: boolean): $Color
public "copy"(): $Color
public "setImmutable"(): $Color
public "setAlpha"(arg0: float): $Color
public "setAlpha"(arg0: integer): $Color
public "getAlpha"(): integer
set "red"(value: integer)
set "red"(value: float)
set "green"(value: float)
set "green"(value: integer)
set "blue"(value: float)
set "blue"(value: integer)
get "red"(): integer
get "green"(): integer
get "blue"(): integer
get "redAsFloat"(): float
get "greenAsFloat"(): float
get "blueAsFloat"(): float
get "alphaAsFloat"(): float
get "RGB"(): integer
set "value"(value: integer)
get "immutable"(): $Color
set "alpha"(value: float)
set "alpha"(value: integer)
get "alpha"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Color$$Type = ($Color);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Color$$Original = $Color;}
