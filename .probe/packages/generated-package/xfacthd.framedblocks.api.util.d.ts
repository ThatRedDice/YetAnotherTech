declare module "xfacthd.framedblocks.api.util.CamoList" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$CamoContainer, $CamoContainer$$Type} from "xfacthd.framedblocks.api.camo.CamoContainer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Spliterator} from "java.util.Spliterator"
import {$List$$Type} from "java.util.List"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CamoList implements $Iterable$$Interface<($CamoContainer<(never), (never)>)> {
static readonly "CODEC": $Codec<($CamoList)>
static readonly "EMPTY": $CamoList
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CamoList)>

public "isEmptyOrContentsEmpty"(): boolean
public "getCamo"(arg0: integer): $CamoContainer<(never), (never)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "subList"(arg0: integer, arg1: integer): $CamoList
public "iterator"(): $Iterator<($CamoContainer<(never), (never)>)>
public "stream"(): $Stream<($CamoContainer<(never), (never)>)>
public static "of"(...arg0: ($CamoContainer$$Type<(never), (never)>)[]): $CamoList
public static "of"(arg0: $CamoContainer$$Type<(never), (never)>): $CamoList
public static "of"(arg0: $List$$Type<($CamoContainer$$Type<(never), (never)>)>): $CamoList
public "concat"(arg0: $CamoList$$Type): $CamoList
public "spliterator"(): $Spliterator<($CamoContainer<(never), (never)>)>
public "forEach"(arg0: $Consumer$$Type<($CamoContainer<(never), (never)>)>): void
public "reversed"(): $CamoList
[Symbol.iterator](): IterableIterator<$CamoContainer<(never), (never)>>;
get "emptyOrContentsEmpty"(): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CamoList$$Type = ($CamoList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CamoList$$Original = $CamoList;}
