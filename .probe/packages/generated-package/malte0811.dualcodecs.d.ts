declare module "malte0811.dualcodecs.DualMapCodec" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$Function$$Type} from "java.util.function.Function"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $DualMapCodec<S extends $ByteBuf, T> extends $Record {
constructor(mapCodec: $MapCodec$$Type<(T)>, streamCodec: $StreamCodec$$Type<(S), (T)>)

public "streamCodec"(): $StreamCodec<(S), (T)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "map"<T1>(arg0: $Function$$Type<(T), (T1)>, arg1: $Function$$Type<(T1), (T)>): $DualMapCodec<(S), (T1)>
public static "unit"<S extends $ByteBuf, T>(arg0: T): $DualMapCodec<(S), (T)>
public "codec"(): $DualCodec<(S), (T)>
public "mapCodec"(): $MapCodec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DualMapCodec$$Type<S, T> = ({"streamCodec"?: $StreamCodec$$Type<(S), (T)>, "mapCodec"?: $MapCodec$$Type<(T)>}) | ([streamCodec?: $StreamCodec$$Type<(S), (T)>, mapCodec?: $MapCodec$$Type<(T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DualMapCodec$$Original<S, T> = $DualMapCodec<(S), (T)>;}
declare module "malte0811.dualcodecs.DualCodec" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$DualMapCodec, $DualMapCodec$$Type} from "malte0811.dualcodecs.DualMapCodec"
import {$Optional} from "java.util.Optional"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Set} from "java.util.Set"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $DualCodec<S extends $ByteBuf, T> extends $Record {
constructor(codec: $Codec$$Type<(T)>, streamCodec: $StreamCodec$$Type<(S), (T)>)

public "streamCodec"(): $StreamCodec<(S), (T)>
public "fromNBT"(arg0: $Tag$$Type): T
public "castStream"<S1 extends $ByteBuf>(): $DualCodec<(S1), (T)>
public "fromJSON"(arg0: $JsonElement$$Type): T
public "toJSON"(arg0: T): $JsonElement
public "dispatch"<V>(arg0: $Function$$Type<(V), (T)>, arg1: $Function$$Type<(T), ($DualMapCodec$$Type<(S), (V)>)>): $DualCodec<(S), (V)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "map"<T1>(arg0: $Function$$Type<(T), (T1)>, arg1: $Function$$Type<(T1), (T)>): $DualCodec<(S), (T1)>
public "listOf"(): $DualCodec<(S), ($List<(T)>)>
public "codec"(): $Codec<(T)>
public "fieldOf"(arg0: StringJS): $DualMapCodec<(S), (T)>
public "optionalFieldOf"(arg0: StringJS): $DualMapCodec<(S), ($Optional<(T)>)>
public "optionalFieldOf"(arg0: StringJS, arg1: T): $DualMapCodec<(S), (T)>
public "toNBT"(arg0: T): $Tag
public "setOf"(): $DualCodec<(S), ($Set<(T)>)>
get "of"(): $DualCodec<(S), ($Set<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DualCodec$$Type<S, T> = ({"codec"?: $Codec$$Type<(T)>, "streamCodec"?: $StreamCodec$$Type<(S), (T)>}) | ([codec?: $Codec$$Type<(T)>, streamCodec?: $StreamCodec$$Type<(S), (T)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DualCodec$$Original<S, T> = $DualCodec<(S), (T)>;}
