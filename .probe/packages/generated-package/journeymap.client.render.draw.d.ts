declare module "journeymap.client.render.draw.LivingEntityRendererETFTextureGetter" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $LivingEntityRendererETFTextureGetter$$Interface<T extends $LivingEntity> {

(arg0: T): $ResourceLocation$$Type
}

export class $LivingEntityRendererETFTextureGetter<T extends $LivingEntity> implements $LivingEntityRendererETFTextureGetter$$Interface {
 "getETFTextureLocation"(arg0: T): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererETFTextureGetter$$Type<T> = ((arg0: T) => $ResourceLocation$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRendererETFTextureGetter$$Original<T> = $LivingEntityRendererETFTextureGetter<(T)>;}
