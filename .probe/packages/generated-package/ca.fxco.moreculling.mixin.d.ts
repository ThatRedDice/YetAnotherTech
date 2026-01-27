declare module "ca.fxco.moreculling.mixin.models.cullshape.UnbakedModel_extendsMixin" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$BlockElementFace, $BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$CullShapeElement, $CullShapeElement$$Type} from "ca.fxco.moreculling.api.model.CullShapeElement"
import {$ExtendedUnbakedModel$$Interface} from "ca.fxco.moreculling.api.model.ExtendedUnbakedModel"

export interface $UnbakedModel_extendsMixin$$Interface extends $ExtendedUnbakedModel$$Interface {

(arg0: $BlockElementFace): $BlockElementFace$$Type
}

export class $UnbakedModel_extendsMixin implements $UnbakedModel_extendsMixin$$Interface {
 "moreculling$setCullShapeElements"(arg0: $List$$Type<($CullShapeElement$$Type)>): void
 "moreculling$getCullShapeElements"(arg0: $ResourceLocation$$Type): $List<($CullShapeElement)>
 "moreculling$setUseModelShape"(arg0: boolean): void
 "moreculling$getUseModelShape"(arg0: $ResourceLocation$$Type): boolean
 "moreculling$modifyElementFace"(arg0: $BlockElementFace$$Type): $BlockElementFace
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnbakedModel_extendsMixin$$Type = ((arg0: $BlockElementFace) => $BlockElementFace$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnbakedModel_extendsMixin$$Original = $UnbakedModel_extendsMixin;}
declare module "ca.fxco.moreculling.mixin.accessors.LevelRendererAccessor" {
import {$Frustum, $Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"

export interface $LevelRendererAccessor$$Interface {

(): $Frustum$$Type
get "frustum"(): $Frustum
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "getFrustum"(): $Frustum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = (() => $Frustum$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
declare module "ca.fxco.moreculling.mixin.models.BakedModel_extendsMixin" {
import {$BakedOpacity$$Interface} from "ca.fxco.moreculling.api.model.BakedOpacity"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BakedModel_extendsMixin$$Interface extends $BakedOpacity$$Interface {
}

export class $BakedModel_extendsMixin implements $BakedModel_extendsMixin$$Interface {
 "moreculling$getCullingShape"(arg0: $BlockState$$Type): $VoxelShape
 "moreculling$setCullingShape"(arg0: $VoxelShape$$Type): void
 "moreculling$canSetCullingShape"(): boolean
 "moreculling$hasTextureTranslucency"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
 "moreculling$hasTextureTranslucency"(): boolean
 "moreculling$hasTextureTranslucency"(arg0: $BlockState$$Type): boolean
 "moreculling$resetTranslucencyCache"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedModel_extendsMixin$$Type = ($BakedModel_extendsMixin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedModel_extendsMixin$$Original = $BakedModel_extendsMixin;}
declare module "ca.fxco.moreculling.mixin.accessors.BlockModelShaperAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockModelShaperAccessor$$Interface {

(): $Map$$Type<($BlockState$$Type), ($BakedModel$$Type)>
get "models"(): $Map<($BlockState), ($BakedModel)>
}

export class $BlockModelShaperAccessor implements $BlockModelShaperAccessor$$Interface {
 "getModels"(): $Map<($BlockState), ($BakedModel)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelShaperAccessor$$Type = (() => $Map$$Type<($BlockState$$Type), ($BakedModel$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModelShaperAccessor$$Original = $BlockModelShaperAccessor;}
declare module "ca.fxco.moreculling.mixin.accessors.SpriteContentsAccessor" {
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteContentsAccessor$$Interface {

(): $NativeImage$$Type
get "image"(): $NativeImage
}

export class $SpriteContentsAccessor implements $SpriteContentsAccessor$$Interface {
 "getImage"(): $NativeImage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$$Type = (() => $NativeImage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAccessor$$Original = $SpriteContentsAccessor;}
