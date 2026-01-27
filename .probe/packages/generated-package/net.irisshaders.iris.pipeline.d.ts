declare module "net.irisshaders.iris.pipeline.programs.ShaderInstanceInterface" {
import {$ResourceProvider, $ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export interface $ShaderInstanceInterface$$Interface {

(arg0: $ResourceProvider, arg1: $ResourceLocation): void
}

export class $ShaderInstanceInterface implements $ShaderInstanceInterface$$Interface {
 "iris$createExtraShaders"(arg0: $ResourceProvider$$Type, arg1: $ResourceLocation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderInstanceInterface$$Type = ((arg0: $ResourceProvider, arg1: $ResourceLocation) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderInstanceInterface$$Original = $ShaderInstanceInterface;}
