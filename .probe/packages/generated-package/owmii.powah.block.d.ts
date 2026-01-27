declare module "owmii.powah.block.Tier" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Enum} from "java.lang.Enum"
import {$IVariant, $IVariant$$Interface} from "owmii.powah.lib.registry.IVariant"

export class $Tier extends $Enum<($Tier)> implements $IVariant$$Interface<($Tier)> {
static readonly "HARDENED": $Tier
static readonly "BLAZING": $Tier
static readonly "CREATIVE": $Tier
static readonly "STARTER": $Tier
static readonly "NIOTIC": $Tier
static readonly "SPIRITED": $Tier
static readonly "NITRO": $Tier
static readonly "BASIC": $Tier

public static "getNormalVariants"(): ($Tier)[]
public "getVariants"(): ($Enum)[]
public static "values"(): ($Tier)[]
public static "valueOf"(arg0: StringJS): $Tier
public "getColor"(): integer
public "getName"(): StringJS
public "isEmpty"(): boolean
public "write"(arg0: $CompoundTag$$Type, arg1: $Tier$$Type, arg2: StringJS): $CompoundTag
public "read"(arg0: $CompoundTag$$Type, arg1: StringJS): $Tier
public "ordinal"(): integer
public static "getEmpty"<T extends $IVariant<(object)>>(): T
public static get "normalVariants"(): ($Tier)[]
get "variants"(): ($Enum)[]
get "color"(): integer
get "name"(): StringJS
get "empty"(): boolean
public static get "empty"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tier$$Type = (("starter") | ("basic") | ("hardened") | ("blazing") | ("niotic") | ("spirited") | ("nitro") | ("creative"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tier$$Original = $Tier;}
