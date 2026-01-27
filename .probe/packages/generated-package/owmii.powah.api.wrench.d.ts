declare module "owmii.powah.api.wrench.IWrenchable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$WrenchMode, $WrenchMode$$Type} from "owmii.powah.api.wrench.WrenchMode"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IWrenchable$$Interface {

(arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $InteractionHand, arg5: $Direction, arg6: $WrenchMode, arg7: $Vec3): boolean
}

export class $IWrenchable implements $IWrenchable$$Interface {
 "onWrench"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $Direction$$Type, arg6: $WrenchMode$$Type, arg7: $Vec3$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrenchable$$Type = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $InteractionHand, arg5: $Direction, arg6: $WrenchMode, arg7: $Vec3) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWrenchable$$Original = $IWrenchable;}
declare module "owmii.powah.api.wrench.WrenchMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $WrenchMode extends $Enum<($WrenchMode)> implements $StringRepresentable$$Interface {
static readonly "CONFIG": $WrenchMode
static readonly "CODEC": $Codec<($WrenchMode)>
static readonly "ROTATE": $WrenchMode
static readonly "BY_ID": $IntFunction<($WrenchMode)>
static readonly "LINK": $WrenchMode
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($WrenchMode)>

public "link"(): boolean
public static "values"(): ($WrenchMode)[]
public static "valueOf"(arg0: StringJS): $WrenchMode
public "config"(): boolean
public "rotate"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchMode$$Type = (("config") | ("link") | ("rotate"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrenchMode$$Original = $WrenchMode;}
declare module "owmii.powah.api.wrench.IWrench" {
import {$WrenchMode, $WrenchMode$$Type} from "owmii.powah.api.wrench.WrenchMode"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IWrench$$Interface {

(arg0: $ItemStack): $WrenchMode$$Type
}

export class $IWrench implements $IWrench$$Interface {
 "getWrenchMode"(arg0: $ItemStack$$Type): $WrenchMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrench$$Type = ((arg0: $ItemStack) => $WrenchMode$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWrench$$Original = $IWrench;}
