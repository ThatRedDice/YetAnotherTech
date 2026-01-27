declare module "dev.shadowsoffire.placebo.reload.DynamicHolder" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$CodecProvider} from "dev.shadowsoffire.placebo.codec.CodecProvider"
import {$Supplier$$Interface} from "java.util.function.Supplier"

export class $DynamicHolder<R extends $CodecProvider<(object)>> implements $Supplier$$Interface<(R)> {
static readonly "EMPTY": $ResourceLocation

public "getRegistryPath"(): StringJS
public "get"(): R
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getId"(): $ResourceLocation
public "is"(arg0: $ResourceLocation$$Type): boolean
public "getOptional"(): $Optional<(R)>
public "isBound"(): boolean
get "registryPath"(): StringJS
get "id"(): $ResourceLocation
get "optional"(): $Optional<(R)>
get "bound"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicHolder$$Type<R> = ($DynamicHolder<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicHolder$$Original<R> = $DynamicHolder<(R)>;}
