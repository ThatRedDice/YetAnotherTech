declare module "com.hrznstudio.titanium.item.BasicItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $BasicItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS, arg1: $Item$Properties$$Type)
constructor(arg0: $Item$Properties$$Type)

public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "setItemGroup"(arg0: $TitaniumTab$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "itemGroup"(value: $TitaniumTab$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicItem$$Type = ($BasicItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicItem$$Original = $BasicItem;}
declare module "com.hrznstudio.titanium.item.BasicItem$Key" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $BasicItem$Key extends $Enum<($BasicItem$Key)> implements $StringRepresentable$$Interface {
static readonly "SHIFT": $BasicItem$Key
static readonly "CTRL": $BasicItem$Key
static readonly "ALT": $BasicItem$Key

public static "values"(): ($BasicItem$Key)[]
public static "valueOf"(arg0: StringJS): $BasicItem$Key
public "getSerializedName"(): StringJS
public "isDown"(): boolean
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "down"(): boolean
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicItem$Key$$Type = (("shift") | ("ctrl") | ("alt"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicItem$Key$$Original = $BasicItem$Key;}
