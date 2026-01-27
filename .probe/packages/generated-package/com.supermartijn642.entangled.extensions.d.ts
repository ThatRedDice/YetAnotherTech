declare module "com.supermartijn642.entangled.extensions.BlockCapabilityExtension" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $BlockCapabilityExtension$$Interface {
}

export class $BlockCapabilityExtension implements $BlockCapabilityExtension$$Interface {
 "entangled_getIdentifier"(): $ResourceLocation
 "entangled_storeIdentifier"(identifier: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCapabilityExtension$$Type = ($BlockCapabilityExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockCapabilityExtension$$Original = $BlockCapabilityExtension;}
declare module "com.supermartijn642.entangled.extensions.RegisterCapabilitiesEventExtension" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $RegisterCapabilitiesEventExtension$$Interface {

(): $Set$$Type<($BlockCapability$$Type<(never), (never)>)>
}

export class $RegisterCapabilitiesEventExtension implements $RegisterCapabilitiesEventExtension$$Interface {
 "entangled_getRegisteredCapabilities"(): $Set<($BlockCapability<(never), (never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterCapabilitiesEventExtension$$Type = (() => $Set$$Type<($BlockCapability$$Type<(never), (never)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterCapabilitiesEventExtension$$Original = $RegisterCapabilitiesEventExtension;}
