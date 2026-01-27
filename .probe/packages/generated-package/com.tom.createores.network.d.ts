declare module "com.tom.createores.network.OreVeinAtlasClickPacket$Option" {
import {$Enum} from "java.lang.Enum"

export class $OreVeinAtlasClickPacket$Option extends $Enum<($OreVeinAtlasClickPacket$Option)> {
static readonly "ADD_EXCLUDE": $OreVeinAtlasClickPacket$Option
static readonly "REMOVE_TARGET": $OreVeinAtlasClickPacket$Option
static readonly "REMOVE_EXCLUDE": $OreVeinAtlasClickPacket$Option
static readonly "TOGGLE_HIDE": $OreVeinAtlasClickPacket$Option
static readonly "SET_TARGET": $OreVeinAtlasClickPacket$Option

public static "values"(): ($OreVeinAtlasClickPacket$Option)[]
public static "valueOf"(arg0: StringJS): $OreVeinAtlasClickPacket$Option
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreVeinAtlasClickPacket$Option$$Type = (("add_exclude") | ("remove_exclude") | ("set_target") | ("remove_target") | ("toggle_hide"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OreVeinAtlasClickPacket$Option$$Original = $OreVeinAtlasClickPacket$Option;}
