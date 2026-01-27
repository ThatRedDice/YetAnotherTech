declare module "ca.fxco.moreculling.api.quad.QuadOpacity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $QuadOpacity$$Interface {
}

export class $QuadOpacity implements $QuadOpacity$$Interface {
 "moreculling$getTextureTranslucency"(): boolean
 "moreculling$resetTranslucencyCache"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadOpacity$$Type = ($QuadOpacity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuadOpacity$$Original = $QuadOpacity;}
declare module "ca.fxco.moreculling.api.model.CullShapeElement" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export class $CullShapeElement {
readonly "from": $Vector3f
readonly "to": $Vector3f

constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CullShapeElement$$Type = ($CullShapeElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CullShapeElement$$Original = $CullShapeElement;}
declare module "ca.fxco.moreculling.api.model.ExtendedUnbakedModel" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List, $List$$Type} from "java.util.List"
import {$BlockElementFace, $BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$CullShapeElement, $CullShapeElement$$Type} from "ca.fxco.moreculling.api.model.CullShapeElement"

export interface $ExtendedUnbakedModel$$Interface {

(arg0: $BlockElementFace): $BlockElementFace$$Type
}

export class $ExtendedUnbakedModel implements $ExtendedUnbakedModel$$Interface {
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
export type $ExtendedUnbakedModel$$Type = ((arg0: $BlockElementFace) => $BlockElementFace$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedUnbakedModel$$Original = $ExtendedUnbakedModel;}
declare module "ca.fxco.moreculling.api.sprite.SpriteOpacity" {
import {$QuadBounds$$Type} from "ca.fxco.moreculling.api.data.QuadBounds"
import {$List$$Type} from "java.util.List"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"

export interface $SpriteOpacity$$Interface {

(): $NativeImage$$Type
}

export class $SpriteOpacity implements $SpriteOpacity$$Interface {
 "moreculling$getUnmipmappedImage"(): $NativeImage
 "moreculling$hasTransparency"(arg0: $QuadBounds$$Type): boolean
 "moreculling$hasTransparency"(): boolean
 "moreculling$hasTranslucency"(arg0: $QuadBounds$$Type, arg1: $List$$Type<($NativeImage$$Type)>): boolean
 "moreculling$hasTranslucency"(arg0: $List$$Type<($NativeImage$$Type)>): boolean
 "moreculling$hasTranslucency"(arg0: $QuadBounds$$Type): boolean
 "moreculling$hasTranslucency"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteOpacity$$Type = (() => $NativeImage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteOpacity$$Original = $SpriteOpacity;}
declare module "ca.fxco.moreculling.api.blockstate.StateCullingShapeCache" {
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction$$Type} from "net.minecraft.core.Direction"

export interface $StateCullingShapeCache$$Interface {
}

export class $StateCullingShapeCache implements $StateCullingShapeCache$$Interface {
 "moreculling$getFaceCullingShape"(arg0: $Direction$$Type): $VoxelShape
 "moreculling$initShapeCache"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateCullingShapeCache$$Type = ($StateCullingShapeCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StateCullingShapeCache$$Original = $StateCullingShapeCache;}
declare module "ca.fxco.moreculling.api.map.MapOpacity" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MapOpacity$$Interface {
}

export class $MapOpacity implements $MapOpacity$$Interface {
 "moreculling$hasTransparency"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapOpacity$$Type = ($MapOpacity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapOpacity$$Original = $MapOpacity;}
declare module "ca.fxco.moreculling.api.renderers.ExtendedItemRenderer" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemFrame$$Type} from "net.minecraft.world.entity.decoration.ItemFrame"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Camera$$Type} from "net.minecraft.client.Camera"

export interface $ExtendedItemRenderer$$Interface {
}

export class $ExtendedItemRenderer implements $ExtendedItemRenderer$$Interface {
 "moreculling$renderBakedItemModelWithoutFace"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: $Direction$$Type): void
 "moreculling$renderBakedItemModelOnly3Faces"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: $Direction$$Type, arg7: $Direction$$Type, arg8: $Direction$$Type): void
 "moreculling$renderBakedItemModelForFace"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: $Direction$$Type): void
 "moreculling$renderItemFrameItem"(arg0: $ItemStack$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: $ItemFrame$$Type, arg5: $Camera$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedItemRenderer$$Type = ($ExtendedItemRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedItemRenderer$$Original = $ExtendedItemRenderer;}
declare module "ca.fxco.moreculling.api.block.MoreBlockCulling" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $MoreBlockCulling$$Interface {
}

export class $MoreBlockCulling implements $MoreBlockCulling$$Interface {
 "moreculling$cantCullAgainst"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
 "moreculling$shouldAttemptToCull"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
 "moreculling$customShouldDrawFace"(arg0: $BlockGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type, arg5: $Direction$$Type): $Optional<(boolean)>
 "moreculling$usesCustomShouldDrawFace"(arg0: $BlockState$$Type): boolean
 "moreculling$canCull"(): boolean
 "moreculling$setCanCull"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoreBlockCulling$$Type = ($MoreBlockCulling);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MoreBlockCulling$$Original = $MoreBlockCulling;}
declare module "ca.fxco.moreculling.api.data.QuadBounds" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $QuadBounds {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "getMaxX"(): integer
public "getMaxY"(): integer
public "getMinX"(): integer
public "getMinY"(): integer
get "maxX"(): integer
get "maxY"(): integer
get "minX"(): integer
get "minY"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $QuadBounds$$Type = ($QuadBounds);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $QuadBounds$$Original = $QuadBounds;}
declare module "ca.fxco.moreculling.api.model.BakedOpacity" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BakedOpacity$$Interface {
}

export class $BakedOpacity implements $BakedOpacity$$Interface {
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
export type $BakedOpacity$$Type = ($BakedOpacity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedOpacity$$Original = $BakedOpacity;}
declare module "ca.fxco.moreculling.api.blockstate.MoreStateCulling" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $MoreStateCulling$$Interface {
}

export class $MoreStateCulling implements $MoreStateCulling$$Interface {
 "moreculling$cantCullAgainst"(arg0: $Direction$$Type): boolean
 "moreculling$shouldAttemptToCull"(arg0: $Direction$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "moreculling$customShouldDrawFace"(arg0: $BlockGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type): $Optional<(boolean)>
 "moreculling$usesCustomShouldDrawFace"(): boolean
 "moreculling$canCull"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MoreStateCulling$$Type = ($MoreStateCulling);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MoreStateCulling$$Original = $MoreStateCulling;}
declare module "ca.fxco.moreculling.api.renderers.ExtendedBlockModelRenderer" {
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$List$$Type} from "java.util.List"
import {$BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"

export interface $ExtendedBlockModelRenderer$$Interface {
}

export class $ExtendedBlockModelRenderer implements $ExtendedBlockModelRenderer$$Interface {
 "moreculling$renderQuad"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $BakedQuad$$Type, arg7: integer, arg8: integer): void
 "moreculling$renderModelWithoutFace"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: $Direction$$Type): void
 "moreculling$renderQuadsWithoutFace"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $List$$Type<($BakedQuad$$Type)>, arg7: integer, arg8: integer, arg9: $Direction$$Type): void
 "moreculling$renderModelForFace"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: $Direction$$Type): void
 "moreculling$renderQuadsForFace"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $List$$Type<($BakedQuad$$Type)>, arg7: integer, arg8: integer, arg9: $Direction$$Type): void
 "moreculling$renderModelFor3Faces"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: $Direction$$Type, arg11: $Direction$$Type, arg12: $Direction$$Type): void
 "moreculling$renderQuadsFor3Faces"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $List$$Type<($BakedQuad$$Type)>, arg7: integer, arg8: integer, arg9: $Direction$$Type, arg10: $Direction$$Type, arg11: $Direction$$Type): void
 "moreculling$renderModelForFaces"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: ($Direction$$Type)[]): void
 "moreculling$renderQuadsForFaces"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $List$$Type<($BakedQuad$$Type)>, arg7: integer, arg8: integer, arg9: ($Direction$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtendedBlockModelRenderer$$Type = ($ExtendedBlockModelRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtendedBlockModelRenderer$$Original = $ExtendedBlockModelRenderer;}
declare module "ca.fxco.moreculling.api.block.LeavesCulling" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LeavesCulling$$Interface {
}

export class $LeavesCulling implements $LeavesCulling$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LeavesCulling$$Type = ($LeavesCulling);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LeavesCulling$$Original = $LeavesCulling;}
