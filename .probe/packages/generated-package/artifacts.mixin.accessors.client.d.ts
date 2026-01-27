declare module "artifacts.mixin.accessors.client.LivingEntityRendererAccessor" {
import {$RenderLayer} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$RenderLayerParent$$Interface} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $LivingEntityRendererAccessor$$Interface<T extends $LivingEntity, M extends $EntityModel<(object)>> extends $RenderLayerParent$$Interface<(T), (M)> {
get "layers"(): $List<($RenderLayer<(T), (M)>)>
get "model"(): M
}

export class $LivingEntityRendererAccessor<T extends $LivingEntity, M extends $EntityModel<(object)>> implements $LivingEntityRendererAccessor$$Interface {
 "getLayers"(): $List<($RenderLayer<(T), (M)>)>
 "getTextureLocation"(arg0: T): $ResourceLocation
 "getModel"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRendererAccessor$$Type<T, M> = ($LivingEntityRendererAccessor<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRendererAccessor$$Original<T, M> = $LivingEntityRendererAccessor<(T), (M)>;}
