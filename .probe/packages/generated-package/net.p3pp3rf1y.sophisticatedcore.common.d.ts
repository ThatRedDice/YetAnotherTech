declare module "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $UpgradeSlotChangeResult extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($UpgradeSlotChangeResult)>

constructor(successful: boolean, errorMessage: $Component$$Type, errorUpgradeSlots: $Set$$Type<(integer)>, errorInventorySlots: $Set$$Type<(integer)>, errorInventoryParts: $Set$$Type<(integer)>)

public "errorUpgradeSlots"(): $Set<(integer)>
public "errorInventoryParts"(): $Set<(integer)>
public "errorInventorySlots"(): $Set<(integer)>
public static "success"(): $UpgradeSlotChangeResult
public "getErrorMessage"(): $Optional<($Component)>
public "successful"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "fail"(arg0: $Component$$Type, arg1: $Set$$Type<(integer)>, arg2: $Set$$Type<(integer)>, arg3: $Set$$Type<(integer)>): $UpgradeSlotChangeResult
public "errorMessage"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeSlotChangeResult$$Type = ({"errorMessage"?: $Component$$Type, "errorInventoryParts"?: $Set$$Type<(integer)>, "errorUpgradeSlots"?: $Set$$Type<(integer)>, "errorInventorySlots"?: $Set$$Type<(integer)>, "successful"?: boolean}) | ([errorMessage?: $Component$$Type, errorInventoryParts?: $Set$$Type<(integer)>, errorUpgradeSlots?: $Set$$Type<(integer)>, errorInventorySlots?: $Set$$Type<(integer)>, successful?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeSlotChangeResult$$Original = $UpgradeSlotChangeResult;}
declare module "net.p3pp3rf1y.sophisticatedcore.common.gui.SortBy" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $SortBy extends $Enum<($SortBy)> implements $StringRepresentable$$Interface {
static readonly "MOD": $SortBy
static readonly "CODEC": $Codec<($SortBy)>
static readonly "COUNT": $SortBy
static readonly "TAGS": $SortBy
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($SortBy)>
static readonly "NAME": $SortBy

public static "fromName"(arg0: StringJS): $SortBy
public static "values"(): ($SortBy)[]
public static "valueOf"(arg0: StringJS): $SortBy
public "next"(): $SortBy
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SortBy$$Type = (("name") | ("mod") | ("count") | ("tags"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SortBy$$Original = $SortBy;}
