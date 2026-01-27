declare module "net.irisshaders.iris.mixin.rendertype.RenderTypeAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $RenderTypeAccessor$$Interface {

(): boolean
}

export class $RenderTypeAccessor implements $RenderTypeAccessor$$Interface {
 "shouldSortOnUpload"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderTypeAccessor$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderTypeAccessor$$Original = $RenderTypeAccessor;}
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsTickerAccessor" {
import {$SpriteContents$AnimatedTexture} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsTickerAccessor$$Interface {
get "animationInfo"(): $SpriteContents$AnimatedTexture
get "subFrame"(): integer
get "frame"(): integer
set "subFrame"(value: integer)
set "frame"(value: integer)
}

export class $SpriteContentsTickerAccessor implements $SpriteContentsTickerAccessor$$Interface {
 "getAnimationInfo"(): $SpriteContents$AnimatedTexture
 "getSubFrame"(): integer
 "getFrame"(): integer
 "setSubFrame"(arg0: integer): void
 "setFrame"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsTickerAccessor$$Type = ($SpriteContentsTickerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsTickerAccessor$$Original = $SpriteContentsTickerAccessor;}
declare module "net.irisshaders.iris.mixin.GameRendererAccessor" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PostChain} from "net.minecraft.client.renderer.PostChain"
import {$Camera$$Type} from "net.minecraft.client.Camera"

export interface $GameRendererAccessor$$Interface {
get "blurEffect"(): $PostChain
get "renderHand"(): boolean
get "panoramicMode"(): boolean
}

export class $GameRendererAccessor implements $GameRendererAccessor$$Interface {
 "getBlurEffect"(): $PostChain
 "getRenderHand"(): boolean
 "getPanoramicMode"(): boolean
 "invokeBobView"(arg0: $PoseStack$$Type, arg1: float): void
 "invokeBobHurt"(arg0: $PoseStack$$Type, arg1: float): void
 "invokeGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
 "shouldRenderBlockOutlineA"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRendererAccessor$$Type = ($GameRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameRendererAccessor$$Original = $GameRendererAccessor;}
declare module "net.irisshaders.iris.mixin.texture.TextureAtlasAccessor" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $TextureAtlasAccessor$$Interface {
get "texturesByName"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
get "mipLevel"(): integer
}

export class $TextureAtlasAccessor implements $TextureAtlasAccessor$$Interface {
 "getTexturesByName"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "getMipLevel"(): integer
 "callGetWidth"(): integer
 "callGetHeight"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasAccessor$$Type = ($TextureAtlasAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasAccessor$$Original = $TextureAtlasAccessor;}
declare module "net.irisshaders.iris.mixin.ProgramTypeAccessor" {
import {$Program$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export interface $ProgramTypeAccessor$$Interface {
}

export class $ProgramTypeAccessor implements $ProgramTypeAccessor$$Interface {
static "createProgramType"(arg0: StringJS, arg1: integer, arg2: StringJS, arg3: StringJS, arg4: integer): $Program$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgramTypeAccessor$$Type = ($ProgramTypeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgramTypeAccessor$$Original = $ProgramTypeAccessor;}
declare module "net.irisshaders.iris.mixin.LevelRendererAccessor" {
import {$BlockDestructionProgress} from "net.minecraft.server.level.BlockDestructionProgress"
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$SortedSet} from "java.util.SortedSet"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Long2ObjectMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ClientLevel} from "net.minecraft.client.multiplayer.ClientLevel"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EntityRenderDispatcher} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $LevelRendererAccessor$$Interface {
get "level"(): $ClientLevel
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "renderBuffers"(): $RenderBuffers
set "renderBuffers"(value: $RenderBuffers$$Type)
get "destructionProgress"(): $Long2ObjectMap<($SortedSet<($BlockDestructionProgress)>)>
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "getLevel"(): $ClientLevel
 "getEntityRenderDispatcher"(): $EntityRenderDispatcher
 "invokeRenderSectionLayer"(arg0: $RenderType$$Type, arg1: double, arg2: double, arg3: double, arg4: $Matrix4f$$Type, arg5: $Matrix4f$$Type): void
 "invokeSetupRender"(arg0: $Camera$$Type, arg1: $Frustum$$Type, arg2: boolean, arg3: boolean): void
 "invokeRenderEntity"(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type): void
 "getRenderBuffers"(): $RenderBuffers
 "setRenderBuffers"(arg0: $RenderBuffers$$Type): void
 "shouldRegenerateClouds"(): boolean
 "setShouldRegenerateClouds"(arg0: boolean): void
 "getDestructionProgress"(): $Long2ObjectMap<($SortedSet<($BlockDestructionProgress)>)>
 "invokeDoesMobEffectBlockSky"(arg0: $Camera$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRendererAccessor$$Type = ($LevelRendererAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRendererAccessor$$Original = $LevelRendererAccessor;}
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsFrameInfoAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SpriteContentsFrameInfoAccessor$$Interface {
get "index"(): integer
get "time"(): integer
}

export class $SpriteContentsFrameInfoAccessor implements $SpriteContentsFrameInfoAccessor$$Interface {
 "getIndex"(): integer
 "getTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsFrameInfoAccessor$$Type = ($SpriteContentsFrameInfoAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsFrameInfoAccessor$$Original = $SpriteContentsFrameInfoAccessor;}
declare module "net.irisshaders.iris.mixin.LightTextureAccessor" {
import {$DynamicTexture, $DynamicTexture$$Type} from "net.minecraft.client.renderer.texture.DynamicTexture"

export interface $LightTextureAccessor$$Interface {

(): $DynamicTexture$$Type
get "lightTexture"(): $DynamicTexture
}

export class $LightTextureAccessor implements $LightTextureAccessor$$Interface {
 "getLightTexture"(): $DynamicTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightTextureAccessor$$Type = (() => $DynamicTexture$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightTextureAccessor$$Original = $LightTextureAccessor;}
declare module "net.irisshaders.iris.mixin.rendertype.RenderStateShardAccessor" {
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"

export interface $RenderStateShardAccessor$$Interface {

(): StringJS
get "name"(): StringJS
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}

export class $RenderStateShardAccessor implements $RenderStateShardAccessor$$Interface {
 "getName"(): StringJS
static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShardAccessor$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShardAccessor$$Original = $RenderStateShardAccessor;}
declare module "net.irisshaders.iris.mixin.DimensionTypeAccessor" {
import {$OptionalLong} from "java.util.OptionalLong"

export interface $DimensionTypeAccessor$$Interface {
get "fixedTime"(): $OptionalLong
get "ambientLight"(): float
}

export class $DimensionTypeAccessor implements $DimensionTypeAccessor$$Interface {
 "getFixedTime"(): $OptionalLong
 "getAmbientLight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionTypeAccessor$$Type = ($DimensionTypeAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionTypeAccessor$$Original = $DimensionTypeAccessor;}
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsAccessor" {
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"

export interface $SpriteContentsAccessor$$Interface {

(): $SpriteContents$AnimatedTexture$$Type
get "animatedTexture"(): $SpriteContents$AnimatedTexture
}

export class $SpriteContentsAccessor implements $SpriteContentsAccessor$$Interface {
 "getAnimatedTexture"(): $SpriteContents$AnimatedTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAccessor$$Type = (() => $SpriteContents$AnimatedTexture$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAccessor$$Original = $SpriteContentsAccessor;}
declare module "net.irisshaders.iris.mixin.texture.SpriteContentsAnimatedTextureAccessor" {
import {$List} from "java.util.List"
import {$SpriteContents$FrameInfo} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"

export interface $SpriteContentsAnimatedTextureAccessor$$Interface {
get "frames"(): $List<($SpriteContents$FrameInfo)>
}

export class $SpriteContentsAnimatedTextureAccessor implements $SpriteContentsAnimatedTextureAccessor$$Interface {
 "invokeUploadFrame"(arg0: integer, arg1: integer, arg2: integer): void
 "getFrames"(): $List<($SpriteContents$FrameInfo)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContentsAnimatedTextureAccessor$$Type = ($SpriteContentsAnimatedTextureAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContentsAnimatedTextureAccessor$$Original = $SpriteContentsAnimatedTextureAccessor;}
