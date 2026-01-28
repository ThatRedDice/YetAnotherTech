declare module "blusunrize.immersiveengineering.api.IEEnums$IOSideConfig" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $IEEnums$IOSideConfig extends $Enum<($IEEnums$IOSideConfig)> implements $StringRepresentable$$Interface {
static readonly "CODECS": $DualCodec<($ByteBuf), ($IEEnums$IOSideConfig)>
static readonly "INPUT": $IEEnums$IOSideConfig
static readonly "OUTPUT": $IEEnums$IOSideConfig
static readonly "VALUES": ($IEEnums$IOSideConfig)[]
static readonly "NONE": $IEEnums$IOSideConfig

public "getTextComponent"(): $Component
public "getTextureName"(): StringJS
public static "values"(): ($IEEnums$IOSideConfig)[]
public static "valueOf"(arg0: StringJS): $IEEnums$IOSideConfig
public static "next"(arg0: $IEEnums$IOSideConfig$$Type): $IEEnums$IOSideConfig
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "textComponent"(): $Component
get "textureName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEEnums$IOSideConfig$$Type = (("none") | ("input") | ("output"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEEnums$IOSideConfig$$Original = $IEEnums$IOSideConfig;}
declare module "blusunrize.immersiveengineering.api.IPostBlock" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IPostBlock$$Interface {

(arg0: $BlockGetter, arg1: $BlockPos): boolean
}

export class $IPostBlock implements $IPostBlock$$Interface {
 "canConnectTransformer"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPostBlock$$Type = ((arg0: $BlockGetter, arg1: $BlockPos) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPostBlock$$Original = $IPostBlock;}
declare module "blusunrize.immersiveengineering.api.TargetingInfo" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export class $TargetingInfo {
readonly "side": $Direction
readonly "hitX": float
readonly "hitY": float
readonly "hitZ": float

constructor(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float)
constructor(arg0: $UseOnContext$$Type)

public static "readFromNBT"(arg0: $CompoundTag$$Type): $TargetingInfo
public "writeToNBT"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TargetingInfo$$Type = ($TargetingInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TargetingInfo$$Original = $TargetingInfo;}
declare module "blusunrize.immersiveengineering.api.EnumMetals" {
import {$Enum} from "java.lang.Enum"

export class $EnumMetals extends $Enum<($EnumMetals)> {
static readonly "URANIUM": $EnumMetals
static readonly "ALUMINUM": $EnumMetals
static readonly "GOLD": $EnumMetals
readonly "smeltingXP": float
static readonly "STEEL": $EnumMetals
static readonly "NICKEL": $EnumMetals
static readonly "CONSTANTAN": $EnumMetals
static readonly "SILVER": $EnumMetals
static readonly "COPPER": $EnumMetals
static readonly "IRON": $EnumMetals
static readonly "ELECTRUM": $EnumMetals
static readonly "LEAD": $EnumMetals

public "isVanillaMetal"(): boolean
public "isAlloy"(): boolean
public "shouldAddOre"(): boolean
public "shouldAddNugget"(): boolean
public "tagName"(): StringJS
public static "values"(): ($EnumMetals)[]
public static "valueOf"(arg0: StringJS): $EnumMetals
get "vanillaMetal"(): boolean
get "alloy"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumMetals$$Type = (("copper") | ("aluminum") | ("lead") | ("silver") | ("nickel") | ("uranium") | ("constantan") | ("electrum") | ("steel") | ("iron") | ("gold"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumMetals$$Original = $EnumMetals;}
