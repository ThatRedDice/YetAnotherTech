declare module "dan200.computercraft.shared.platform.RegistryEntry" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Interface} from "java.util.function.Supplier"

export interface $RegistryEntry$$Interface<U> extends $Supplier$$Interface<(U)> {
}

export class $RegistryEntry<U> implements $RegistryEntry$$Interface {
 "id"(): $ResourceLocation
static "codec"<T>(arg0: $Registry$$Type<(T)>): $Codec<($RegistryEntry<(T)>)>
 "get"(): U
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$$Type<U> = ($RegistryEntry<(U)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryEntry$$Original<U> = $RegistryEntry<(U)>;}
