declare module "com.copycatsplus.copycats.CCBlockStateProperties$Side" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $CCBlockStateProperties$Side extends $Enum<($CCBlockStateProperties$Side)> implements $StringRepresentable$$Interface {
static readonly "LEFT": $CCBlockStateProperties$Side
static readonly "RIGHT": $CCBlockStateProperties$Side

public "isRight"(): boolean
public static "values"(): ($CCBlockStateProperties$Side)[]
public static "valueOf"(name: StringJS): $CCBlockStateProperties$Side
public "getSerializedName"(): StringJS
public "getOpposite"(): $CCBlockStateProperties$Side
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "right"(): boolean
get "serializedName"(): StringJS
get "opposite"(): $CCBlockStateProperties$Side
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCBlockStateProperties$Side$$Type = (("left") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CCBlockStateProperties$Side$$Original = $CCBlockStateProperties$Side;}
declare module "com.copycatsplus.copycats.CCBlockStateProperties$VerticalStairShape" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $CCBlockStateProperties$VerticalStairShape extends $Enum<($CCBlockStateProperties$VerticalStairShape)> implements $StringRepresentable$$Interface {
static readonly "OUTER_BOTTOM": $CCBlockStateProperties$VerticalStairShape
static readonly "STRAIGHT": $CCBlockStateProperties$VerticalStairShape
static readonly "OUTER_TOP": $CCBlockStateProperties$VerticalStairShape
static readonly "INNER_BOTTOM": $CCBlockStateProperties$VerticalStairShape
static readonly "INNER_TOP": $CCBlockStateProperties$VerticalStairShape

public "isOuter"(): boolean
public static "values"(): ($CCBlockStateProperties$VerticalStairShape)[]
public static "valueOf"(name: StringJS): $CCBlockStateProperties$VerticalStairShape
public "isTop"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "outer"(): boolean
get "top"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCBlockStateProperties$VerticalStairShape$$Type = (("straight") | ("outer_top") | ("outer_bottom") | ("inner_top") | ("inner_bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CCBlockStateProperties$VerticalStairShape$$Original = $CCBlockStateProperties$VerticalStairShape;}
