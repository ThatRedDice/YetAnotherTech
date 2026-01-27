declare module "net.minecraft.client.renderer.block.ModelBlockRenderer$AmbientOcclusionFace" {
import {$BitSet$$Type} from "java.util.BitSet"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModelBlockRenderer$AmbientOcclusionFace {
constructor()

public "calculate"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: (float)[], arg5: $BitSet$$Type, arg6: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBlockRenderer$AmbientOcclusionFace$$Type = ($ModelBlockRenderer$AmbientOcclusionFace);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBlockRenderer$AmbientOcclusionFace$$Original = $ModelBlockRenderer$AmbientOcclusionFace;}
declare module "net.minecraft.client.renderer.block.LiquidBlockRenderer" {
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LiquidBlockRenderer {
constructor()

public "tesselate"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type): void
public static "shouldRenderFace"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type, arg5: $BlockState$$Type): boolean
public static "shouldRenderFace"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $FluidState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type, arg5: $FluidState$$Type): boolean
public "wrapOperation$bdl001$supplementaries$modifyLumiseneHeight"(instance: $Fluid$$Type, above: $Fluid$$Type, original: $Operation$$Type): boolean
public "wrapOperation$bdl000$supplementaries$modifyLumiseneLight"(level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, original: $Operation$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlockRenderer$$Type = ($LiquidBlockRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBlockRenderer$$Original = $LiquidBlockRenderer;}
declare module "net.minecraft.client.renderer.debug.BeeDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$HiveDebugPayload$HiveInfo$$Type} from "net.minecraft.network.protocol.common.custom.HiveDebugPayload$HiveInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BeeDebugPayload$BeeInfo$$Type} from "net.minecraft.network.protocol.common.custom.BeeDebugPayload$BeeInfo"

export class $BeeDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "addOrUpdateBeeInfo"(arg0: $BeeDebugPayload$BeeInfo$$Type): void
public "addOrUpdateHiveInfo"(arg0: $HiveDebugPayload$HiveInfo$$Type, arg1: long): void
public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "removeBeeInfo"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeeDebugRenderer$$Type = ($BeeDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeeDebugRenderer$$Original = $BeeDebugRenderer;}
declare module "net.minecraft.client.renderer.texture.TextureAtlasSprite$Ticker" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export interface $TextureAtlasSprite$Ticker$$Interface extends $AutoCloseable$$Interface {
}

export class $TextureAtlasSprite$Ticker implements $TextureAtlasSprite$Ticker$$Interface {
 "close"(): void
 "tickAndUpload"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSprite$Ticker$$Type = ($TextureAtlasSprite$Ticker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasSprite$Ticker$$Original = $TextureAtlasSprite$Ticker;}
declare module "net.minecraft.client.renderer.texture.TextureAtlasSprite" {
import {$QuadBounds$$Type} from "ca.fxco.moreculling.api.data.QuadBounds"
import {$SpriteOpacity$$Interface} from "ca.fxco.moreculling.api.sprite.SpriteOpacity"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlasSprite$Ticker} from "net.minecraft.client.renderer.texture.TextureAtlasSprite$Ticker"
import {$List$$Type} from "java.util.List"
import {$NativeImage} from "com.mojang.blaze3d.platform.NativeImage"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$SpriteContents} from "net.minecraft.client.renderer.texture.SpriteContents"

export class $TextureAtlasSprite implements $SpriteOpacity$$Interface {
public "moreculling$getUnmipmappedImage"(): $NativeImage
public "getUOffset"(arg0: float): float
public "getVOffset"(arg0: float): float
public "moreculling$hasTransparency"(arg0: $QuadBounds$$Type): boolean
public "moreculling$hasTransparency"(): boolean
public "moreculling$hasTranslucency"(arg0: $List$$Type): boolean
public "moreculling$hasTranslucency"(arg0: $QuadBounds$$Type): boolean
public "moreculling$hasTranslucency"(arg0: $QuadBounds$$Type, arg1: $List$$Type): boolean
public "moreculling$hasTranslucency"(): boolean
public "createTicker"(): $TextureAtlasSprite$Ticker
public "uvShrinkRatio"(): float
public "contents"(): $SpriteContents
public "getY"(): integer
public "toString"(): StringJS
public "wrap"(arg0: $VertexConsumer$$Type): $VertexConsumer
public "uploadFirstFrame"(): void
public "getX"(): integer
public "atlasLocation"(): $ResourceLocation
public "getU0"(): float
public "getU1"(): float
public "getV0"(): float
public "getV1"(): float
public "getU"(arg0: float): float
public "getV"(arg0: float): float
public "getPixelRGBA"(arg0: integer, arg1: integer, arg2: integer): integer
get "y"(): integer
get "x"(): integer
get "u0"(): float
get "u1"(): float
get "v0"(): float
get "v1"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasSprite$$Type = ($TextureAtlasSprite);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasSprite$$Original = $TextureAtlasSprite;}
declare module "net.minecraft.client.renderer.Rect2i" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $Rect2i {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "setX"(arg0: integer): void
public "getWidth"(): integer
public "getHeight"(): integer
public "intersect"(arg0: $Rect2i$$Type): $Rect2i
public "getY"(): integer
public "contains"(arg0: integer, arg1: integer): boolean
public "getX"(): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "setY"(arg0: integer): void
public "setPosition"(arg0: integer, arg1: integer): void
set "x"(value: integer)
get "width"(): integer
get "height"(): integer
get "y"(): integer
get "x"(): integer
set "width"(value: integer)
set "height"(value: integer)
set "y"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rect2i$$Type = ($Rect2i);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Rect2i$$Original = $Rect2i;}
declare module "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$GoalDebugPayload$DebugGoal$$Type} from "net.minecraft.network.protocol.common.custom.GoalDebugPayload$DebugGoal"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $GoalSelectorDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "addGoalSelector"(arg0: integer, arg1: $BlockPos$$Type, arg2: $List$$Type<($GoalDebugPayload$DebugGoal$$Type)>): void
public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "removeGoalSelector"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GoalSelectorDebugRenderer$$Type = ($GoalSelectorDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GoalSelectorDebugRenderer$$Original = $GoalSelectorDebugRenderer;}
declare module "net.minecraft.client.renderer.block.model.BlockElementFace" {
import {$BlockFaceUV, $BlockFaceUV$$Type} from "net.minecraft.client.renderer.block.model.BlockFaceUV"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MutableObject, $MutableObject$$Type} from "org.apache.commons.lang3.mutable.MutableObject"
import {$BlockElement, $BlockElement$$Type} from "net.minecraft.client.renderer.block.model.BlockElement"
import {$ExtraFaceData, $ExtraFaceData$$Type} from "net.neoforged.neoforge.client.model.ExtraFaceData"
import {$Record} from "java.lang.Record"

export class $BlockElementFace extends $Record {
static readonly "NO_TINT": integer

constructor(cullForDirection: $Direction$$Type, tintIndex: integer, texture: StringJS, uv: $BlockFaceUV$$Type, faceData: $ExtraFaceData$$Type, parent: $MutableObject$$Type<($BlockElement$$Type)>)
constructor(arg0: $Direction$$Type, arg1: integer, arg2: StringJS, arg3: $BlockFaceUV$$Type)

public "cullForDirection"(): $Direction
public "tintIndex"(): integer
public "faceData"(): $ExtraFaceData
public "texture"(): StringJS
public "uv"(): $BlockFaceUV
public "parent"(): $MutableObject<($BlockElement)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElementFace$$Type = ({"texture"?: StringJS, "parent"?: $MutableObject$$Type<($BlockElement$$Type)>, "tintIndex"?: integer, "uv"?: $BlockFaceUV$$Type, "faceData"?: $ExtraFaceData$$Type, "cullForDirection"?: $Direction$$Type}) | ([texture?: StringJS, parent?: $MutableObject$$Type<($BlockElement$$Type)>, tintIndex?: integer, uv?: $BlockFaceUV$$Type, faceData?: $ExtraFaceData$$Type, cullForDirection?: $Direction$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElementFace$$Original = $BlockElementFace;}
declare module "net.minecraft.client.renderer.block.model.BlockElementRotation" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $BlockElementRotation extends $Record {
constructor(arg0: $Vector3f$$Type, arg1: $Direction$Axis$$Type, arg2: float, arg3: boolean)

public "rescale"(): boolean
public "origin"(): $Vector3f
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "angle"(): float
public "axis"(): $Direction$Axis
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElementRotation$$Type = ({"origin"?: $Vector3f$$Type, "rescale"?: boolean, "axis"?: $Direction$Axis$$Type, "angle"?: float}) | ([origin?: $Vector3f$$Type, rescale?: boolean, axis?: $Direction$Axis$$Type, angle?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElementRotation$$Original = $BlockElementRotation;}
declare module "net.minecraft.client.renderer.LightTexture" {
import {$GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LightTextureAccessor$$Interface} from "net.irisshaders.iris.mixin.LightTextureAccessor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"
import {$DynamicTexture} from "net.minecraft.client.renderer.texture.DynamicTexture"

export class $LightTexture implements $AutoCloseable$$Interface, $LightTextureAccessor$$Interface {
static readonly "FULL_BRIGHT": integer
static readonly "FULL_SKY": integer
static readonly "FULL_BLOCK": integer

constructor(arg0: $GameRenderer$$Type, arg1: $Minecraft$$Type)

public static "sky"(arg0: integer): integer
public "getDarknessGamma"(arg0: float): float
public "calculateDarknessScale"(arg0: $LivingEntity$$Type, arg1: float, arg2: float): float
public "getLightTexture"(): $DynamicTexture
public "tick"(): void
public static "pack"(arg0: integer, arg1: integer): integer
public "close"(): void
public static "block"(arg0: integer): integer
public "turnOnLightLayer"(): void
public "turnOffLightLayer"(): void
public "updateLightTexture"(arg0: float): void
public static "getBrightness"(arg0: $DimensionType$$Type, arg1: integer): float
get "lightTexture"(): $DynamicTexture
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightTexture$$Type = ($LightTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightTexture$$Original = $LightTexture;}
declare module "net.minecraft.client.renderer.entity.EntityRendererProvider" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$EntityRendererProvider$Context, $EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Entity} from "net.minecraft.world.entity.Entity"

export interface $EntityRendererProvider$$Interface<T extends $Entity> {

(arg0: $EntityRendererProvider$Context): $EntityRenderer$$Type<(T)>
}

export class $EntityRendererProvider<T extends $Entity> implements $EntityRendererProvider$$Interface {
 "create"(arg0: $EntityRendererProvider$Context$$Type): $EntityRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererProvider$$Type<T> = ((arg0: $EntityRendererProvider$Context) => $EntityRenderer$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererProvider$$Original<T> = $EntityRendererProvider<(T)>;}
declare module "net.minecraft.client.renderer.ShaderInstance" {
import {$ShaderProgramAccessor$$Interface} from "io.wispforest.owo.mixin.shader.ShaderProgramAccessor"
import {$Program} from "com.mojang.blaze3d.shaders.Program"
import {$Shader$$Interface} from "com.mojang.blaze3d.shaders.Shader"
import {$Map} from "java.util.Map"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Reader$$Type} from "java.io.Reader"
import {$List} from "java.util.List"
import {$Uniform} from "com.mojang.blaze3d.shaders.Uniform"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AbstractUniform} from "com.mojang.blaze3d.shaders.AbstractUniform"
import {$Window$$Type} from "com.mojang.blaze3d.platform.Window"
import {$ShaderInstanceInterface$$Interface} from "net.irisshaders.iris.pipeline.programs.ShaderInstanceInterface"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$JsonObject} from "com.google.gson.JsonObject"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $ShaderInstance implements $Shader$$Interface, $AutoCloseable$$Interface, $ShaderInstanceInterface$$Interface, $ShaderProgramAccessor$$Interface {
readonly "FOG_START": $Uniform
 "PROJECTION_MATRIX": $Uniform
static readonly "SHADER_PATH": StringJS
 "TEXTURE_MATRIX": $Uniform
readonly "uniforms": $List<($Uniform)>
readonly "FOG_END": $Uniform
 "MODEL_VIEW_MATRIX": $Uniform
readonly "SCREEN_SIZE": $Uniform
readonly "GLINT_ALPHA": $Uniform
 "COLOR_MODULATOR": $Uniform
readonly "LINE_WIDTH": $Uniform
readonly "LIGHT0_DIRECTION": $Uniform
 "CHUNK_OFFSET": $Uniform
readonly "FOG_COLOR": $Uniform
readonly "FOG_SHAPE": $Uniform
readonly "GAME_TIME": $Uniform
readonly "LIGHT1_DIRECTION": $Uniform

/**
 * 
 * @deprecated
 */
constructor(arg0: $ResourceProvider$$Type, arg1: StringJS, arg2: $VertexFormat$$Type)
constructor(arg0: $ResourceProvider$$Type, arg1: $ResourceLocation$$Type, arg2: $VertexFormat$$Type)

public "markDirty"(): void
public "getName"(): StringJS
public "clear"(): void
public "apply"(): void
public "getId"(): integer
public "close"(): void
public "safeGetUniform"(arg0: StringJS): $AbstractUniform
public "attachToProgram"(): void
public "getVertexFormat"(): $VertexFormat
public "setDefaultUniforms"(arg0: $VertexFormat$Mode$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: $Window$$Type): void
public "iris$createExtraShaders"(arg0: $ResourceProvider$$Type, arg1: $ResourceLocation$$Type): void
public "owo$getLoadedUniforms"(): $Map
public "getVertexProgram"(): $Program
public "getFragmentProgram"(): $Program
public "redirect$bol000$oculus$iris$setupGeometryShader"(arg0: $Reader$$Type, arg1: $ResourceProvider$$Type, arg2: $ResourceLocation$$Type, arg3: $VertexFormat$$Type): $JsonObject
public "redirect$bol000$oculus$iris$redirectBindAttributeLocation"(arg0: integer, arg1: integer, arg2: charseq): void
public "getUniform"(arg0: StringJS): $Uniform
public "setSampler"(arg0: StringJS, arg1: any): void
get "name"(): StringJS
get "id"(): integer
get "vertexFormat"(): $VertexFormat
get "vertexProgram"(): $Program
get "fragmentProgram"(): $Program
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderInstance$$Type = ($ShaderInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderInstance$$Original = $ShaderInstance;}
declare module "net.minecraft.client.renderer.texture.Stitcher$Entry" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"

export interface $Stitcher$Entry$$Interface {
}

export class $Stitcher$Entry implements $Stitcher$Entry$$Interface {
 "name"(): $ResourceLocation
 "width"(): integer
 "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stitcher$Entry$$Type = ($Stitcher$Entry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stitcher$Entry$$Original = $Stitcher$Entry;}
declare module "net.minecraft.client.renderer.texture.Tickable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $Tickable$$Interface {

(): void
}

export class $Tickable implements $Tickable$$Interface {
 "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tickable$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tickable$$Original = $Tickable;}
declare module "net.minecraft.client.renderer.FogRenderer$FogMode" {
import {$Enum} from "java.lang.Enum"

export class $FogRenderer$FogMode extends $Enum<($FogRenderer$FogMode)> {
static readonly "FOG_TERRAIN": $FogRenderer$FogMode
static readonly "FOG_SKY": $FogRenderer$FogMode

public static "values"(): ($FogRenderer$FogMode)[]
public static "valueOf"(arg0: StringJS): $FogRenderer$FogMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FogRenderer$FogMode$$Type = (("fog_sky") | ("fog_terrain"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FogRenderer$FogMode$$Original = $FogRenderer$FogMode;}
declare module "net.minecraft.client.renderer.debug.BrainDebugRenderer$PoiInfo" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $BrainDebugRenderer$PoiInfo {
readonly "pos": $BlockPos
 "freeTicketCount": integer
readonly "type": StringJS

constructor(arg0: $BlockPos$$Type, arg1: StringJS, arg2: integer)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainDebugRenderer$PoiInfo$$Type = ($BrainDebugRenderer$PoiInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrainDebugRenderer$PoiInfo$$Original = $BrainDebugRenderer$PoiInfo;}
declare module "net.minecraft.client.renderer.entity.EntityRenderDispatcher" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$OwoEntityRenderDispatcherExtension$$Interface} from "io.wispforest.owo.util.pond.OwoEntityRenderDispatcherExtension"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcherAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.EntityRenderDispatcherAccessor"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Quaternionf, $Quaternionf$$Type} from "org.joml.Quaternionf"
import {$EntityType} from "net.minecraft.world.entity.EntityType"
import {$Map} from "java.util.Map"
import {$PlayerSkin$Model} from "net.minecraft.client.resources.PlayerSkin$Model"
import {$Options, $Options$$Type} from "net.minecraft.client.Options"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ItemInHandRenderer} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $EntityRenderDispatcher implements $ResourceManagerReloadListener$$Interface, $OwoEntityRenderDispatcherExtension$$Interface, $EntityRenderDispatcherAccessor$$Interface {
 "crosshairPickEntity": $Entity
 "renderers": $Map<($EntityType<(never)>), ($EntityRenderer<(never)>)>
readonly "options": $Options
readonly "textureManager": $TextureManager
 "camera": $Camera

constructor(arg0: $Minecraft$$Type, arg1: $TextureManager$$Type, arg2: $ItemRenderer$$Type, arg3: $BlockRenderDispatcher$$Type, arg4: $Font$$Type, arg5: $Options$$Type, arg6: $EntityModelSet$$Type)

public "owo$showNametag"(): boolean
public "owo$counterRotate"(): boolean
public "getSkinMap"(): $Map<($PlayerSkin$Model), ($EntityRenderer<($Player)>)>
public "cameraOrientation"(): $Quaternionf
public "create$getRenderers"(): $Map
public "owo$setCounterRotate"(counterRotate: boolean): void
public "owo$setShowNametag"(showNametag: boolean): void
public "setLevel"(arg0: $Level$$Type): void
public "prepare"(arg0: $Level$$Type, arg1: $Camera$$Type, arg2: $Entity$$Type): void
public "render"<E extends $Entity>(arg0: E, arg1: double, arg2: double, arg3: double, arg4: float, arg5: float, arg6: $PoseStack$$Type, arg7: $MultiBufferSource$$Type, arg8: integer): void
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "getPackedLightCoords"<E extends $Entity>(arg0: E, arg1: float): integer
public "getRenderer"(entity: $Entity$$Type): $EntityRenderer
public "distanceToSqr"(arg0: $Entity$$Type): double
public "distanceToSqr"(arg0: double, arg1: double, arg2: double): double
public "shouldRender"<E extends $Entity>(arg0: E, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double): boolean
public "overrideCameraOrientation"(arg0: $Quaternionf$$Type): void
public "setRenderShadow"(arg0: boolean): void
public "shouldRenderHitBoxes"(): boolean
public "setRenderHitBoxes"(arg0: boolean): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "skinMap"(): $Map<($PlayerSkin$Model), ($EntityRenderer<($Player)>)>
set "level"(value: $Level$$Type)
get "itemInHandRenderer"(): $ItemInHandRenderer
set "renderShadow"(value: boolean)
set "renderHitBoxes"(value: boolean)
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcher$$Type = ($EntityRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderDispatcher$$Original = $EntityRenderDispatcher;}
declare module "net.minecraft.client.renderer.block.BlockModelShaper" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Comparable$$Type} from "java.lang.Comparable"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ModelManager, $ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"
import {$BlockModelShaperAccessor$$Interface} from "ca.fxco.moreculling.mixin.accessors.BlockModelShaperAccessor"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $BlockModelShaper implements $BlockModelShaperAccessor$$Interface {
constructor(arg0: $ModelManager$$Type)

public "replaceCache"(arg0: $Map$$Type<($BlockState$$Type), ($BakedModel$$Type)>): void
public static "stateToModelLocation"(arg0: $BlockState$$Type): $ModelResourceLocation
public static "stateToModelLocation"(arg0: $ResourceLocation$$Type, arg1: $BlockState$$Type): $ModelResourceLocation
public "getTexture"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $TextureAtlasSprite
public "getModelManager"(): $ModelManager
public "getBlockModel"(arg0: $BlockState$$Type): $BakedModel
/**
 * 
 * @deprecated
 */
public "getParticleIcon"(arg0: $BlockState$$Type): $TextureAtlasSprite
public "getModels"(): $Map
public static "statePropertiesToString"(arg0: $Map$$Type<($Property$$Type<(never)>), ($Comparable$$Type<(never)>)>): StringJS
get "modelManager"(): $ModelManager
get "models"(): $Map
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModelShaper$$Type = ($BlockModelShaper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModelShaper$$Original = $BlockModelShaper;}
declare module "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$ShaderInstance, $ShaderInstance$$Type} from "net.minecraft.client.renderer.ShaderInstance"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$ShaderStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
readonly "shader": $Optional<($Supplier<($ShaderInstance)>)>
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $Supplier$$Type<($ShaderInstance$$Type)>)
constructor()

public "toString"(): StringJS
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$ShaderStateShard$$Type = ($RenderStateShard$ShaderStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$ShaderStateShard$$Original = $RenderStateShard$ShaderStateShard;}
declare module "net.minecraft.client.renderer.DimensionSpecialEffects" {
import {$DimensionSpecialEffects$SkyType, $DimensionSpecialEffects$SkyType$$Type} from "net.minecraft.client.renderer.DimensionSpecialEffects$SkyType"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Object2ObjectMap} from "it.unimi.dsi.fastutil.objects.Object2ObjectMap"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IDimensionSpecialEffectsExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IDimensionSpecialEffectsExtension"
import {$DimensionType$$Type} from "net.minecraft.world.level.dimension.DimensionType"

export class $DimensionSpecialEffects implements $IDimensionSpecialEffectsExtension$$Interface {
static readonly "EFFECTS": $Object2ObjectMap<($ResourceLocation), ($DimensionSpecialEffects)>

constructor(arg0: float, arg1: boolean, arg2: $DimensionSpecialEffects$SkyType$$Type, arg3: boolean, arg4: boolean)

public "getBrightnessDependentFogColor"(arg0: $Vec3$$Type, arg1: float): $Vec3
public "hasGround"(): boolean
public "forceBrightLightmap"(): boolean
public static "forType"(arg0: $DimensionType$$Type): $DimensionSpecialEffects
public "isFoggyAt"(arg0: integer, arg1: integer): boolean
public "getSunriseColor"(arg0: float, arg1: float): (float)[]
public "skyType"(): $DimensionSpecialEffects$SkyType
public "getCloudHeight"(): float
public "constantAmbientLight"(): boolean
public "adjustLightmapColors"(arg0: $ClientLevel$$Type, arg1: float, arg2: float, arg3: float, arg4: float, arg5: integer, arg6: integer, arg7: $Vector3f$$Type): void
public "renderSky"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $Matrix4f$$Type, arg4: $Camera$$Type, arg5: $Matrix4f$$Type, arg6: boolean, arg7: $Runnable$$Type): boolean
public "renderSnowAndRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $LightTexture$$Type, arg4: double, arg5: double, arg6: double): boolean
public "tickRain"(arg0: $ClientLevel$$Type, arg1: integer, arg2: $Camera$$Type): boolean
public "renderClouds"(arg0: $ClientLevel$$Type, arg1: integer, arg2: float, arg3: $PoseStack$$Type, arg4: double, arg5: double, arg6: double, arg7: $Matrix4f$$Type, arg8: $Matrix4f$$Type): boolean
get "cloudHeight"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionSpecialEffects$$Type = ($DimensionSpecialEffects);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionSpecialEffects$$Original = $DimensionSpecialEffects;}
declare module "net.minecraft.client.renderer.debug.DebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$GameTestDebugRenderer} from "net.minecraft.client.renderer.debug.GameTestDebugRenderer"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$Optional} from "java.util.Optional"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$VillageSectionsDebugRenderer} from "net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$RaidDebugRenderer} from "net.minecraft.client.renderer.debug.RaidDebugRenderer"
import {$GoalSelectorDebugRenderer} from "net.minecraft.client.renderer.debug.GoalSelectorDebugRenderer"
import {$GameEventListenerRenderer} from "net.minecraft.client.renderer.debug.GameEventListenerRenderer"
import {$BeeDebugRenderer} from "net.minecraft.client.renderer.debug.BeeDebugRenderer"
import {$BreezeDebugRenderer} from "net.minecraft.client.renderer.debug.BreezeDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PathfindingRenderer} from "net.minecraft.client.renderer.debug.PathfindingRenderer"
import {$LightSectionDebugRenderer} from "net.minecraft.client.renderer.debug.LightSectionDebugRenderer"
import {$BrainDebugRenderer} from "net.minecraft.client.renderer.debug.BrainDebugRenderer"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$StructureRenderer} from "net.minecraft.client.renderer.debug.StructureRenderer"

export class $DebugRenderer {
readonly "waterDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "neighborsUpdateRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "pathfindingRenderer": $PathfindingRenderer
readonly "gameTestDebugRenderer": $GameTestDebugRenderer
readonly "supportBlockRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "solidFaceRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "breezeDebugRenderer": $BreezeDebugRenderer
readonly "gameEventListenerRenderer": $GameEventListenerRenderer
readonly "structureRenderer": $StructureRenderer
readonly "lightDebugRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "chunkRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "brainDebugRenderer": $BrainDebugRenderer
readonly "heightMapRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "chunkBorderRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "collisionBoxRenderer": $DebugRenderer$SimpleDebugRenderer
readonly "skyLightSectionDebugRenderer": $LightSectionDebugRenderer
readonly "goalSelectorRenderer": $GoalSelectorDebugRenderer
readonly "beeDebugRenderer": $BeeDebugRenderer
readonly "villageSectionsDebugRenderer": $VillageSectionsDebugRenderer
readonly "raidDebugRenderer": $RaidDebugRenderer
readonly "worldGenAttemptRenderer": $DebugRenderer$SimpleDebugRenderer

constructor(arg0: $Minecraft$$Type)

public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: integer, arg4: integer, arg5: integer, arg6: integer): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: float, arg8: boolean, arg9: float, arg10: boolean): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer, arg7: float): void
public static "renderFloatingText"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: StringJS, arg3: double, arg4: double, arg5: double, arg6: integer): void
public "handler$ebl000$moonlight$supp$renderVanillaDebug"(poseStack: $PoseStack$$Type, bufferSource: $MultiBufferSource$BufferSource$$Type, camX: double, camY: double, camZ: double, ci: $CallbackInfo$$Type): void
public static "getTargetedEntity"(arg0: $Entity$$Type, arg1: integer): $Optional<($Entity)>
public static "renderFilledUnitCube"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type, arg4: float, arg5: float, arg6: float, arg7: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $BlockPos$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
public static "renderFilledBox"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $AABB$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$BufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "switchRenderChunkborder"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugRenderer$$Type = ($DebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugRenderer$$Original = $DebugRenderer;}
declare module "net.minecraft.client.renderer.texture.SpriteContents$InterpolationData" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"

export class $SpriteContents$InterpolationData implements $AutoCloseable$$Interface {
public "close"(): void
public "handler$bhe000$embeddium$assignParent"(arg0: $SpriteContents$$Type, arg1: $CallbackInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$InterpolationData$$Type = ($SpriteContents$InterpolationData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$InterpolationData$$Original = $SpriteContents$InterpolationData;}
declare module "net.minecraft.client.renderer.GameRenderer" {
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$IMixinGameRenderer$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinGameRenderer"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ShaderInstance} from "net.minecraft.client.renderer.ShaderInstance"
import {$PostChain} from "net.minecraft.client.renderer.PostChain"
import {$Minecraft, $Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$OverlayTexture} from "net.minecraft.client.renderer.texture.OverlayTexture"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$GameRendererAccessor$$Interface} from "net.irisshaders.iris.mixin.GameRendererAccessor"
import {$LightTexture} from "net.minecraft.client.renderer.LightTexture"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$GameRendererAccessor$$Interface as $GameRendererAccessor$1$$Interface} from "net.createmod.ponder.mixin.client.accessor.GameRendererAccessor"
import {$PreparableReloadListener} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$MapRenderer} from "net.minecraft.client.gui.MapRenderer"
import {$ItemInHandRenderer, $ItemInHandRenderer$$Type} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$GameRendererAccessor$$Interface as $GameRendererAccessor$0$$Interface} from "forge.me.thosea.badoptimizations.mixin.accessors.GameRendererAccessor"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $GameRenderer implements $AutoCloseable$$Interface, $GameRendererAccessor$$Interface, $GameRendererAccessor$1$$Interface, $IMixinGameRenderer$$Interface, $GameRendererAccessor$0$$Interface {
 "postEffect": $PostChain
readonly "renderBuffers": $RenderBuffers
static readonly "ITEM_ACTIVATION_ANIMATION_LENGTH": integer
 "effectActive": boolean
static readonly "PROJECTION_Z_NEAR": float
 "blitShader": $ShaderInstance
static readonly "MAX_BLUR_RADIUS": integer
readonly "itemInHandRenderer": $ItemInHandRenderer

constructor(arg0: $Minecraft$$Type, arg1: $ItemInHandRenderer$$Type, arg2: $ResourceManager$$Type, arg3: $RenderBuffers$$Type)

public "loadEffect"(arg0: $ResourceLocation$$Type): void
public "catnip$callGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
public "tick"(): void
public "close"(): void
public "pick"(arg0: float): void
public "resize"(arg0: integer, arg1: integer): void
public "getMinecraft"(): $Minecraft
public "render"(arg0: $DeltaTracker$$Type, arg1: boolean): void
public static "getPositionTexShader"(): $ShaderInstance
public static "getPositionColorShader"(): $ShaderInstance
public static "getPositionTexColorShader"(): $ShaderInstance
public "createReloadListener"(): $PreparableReloadListener
public "preloadUiShader"(arg0: $ResourceProvider$$Type): void
public "getMainCamera"(): $Camera
public "currentEffect"(): $PostChain
public "shutdownEffect"(): void
public "checkEntityPostEffect"(arg0: $Entity$$Type): void
public "resetData"(): void
public "isPanoramicMode"(): boolean
public "setRenderBlockOutline"(arg0: boolean): void
public "setPanoramicMode"(arg0: boolean): void
public "renderLevel"(arg0: $DeltaTracker$$Type): void
public "renderZoomed"(arg0: float, arg1: float, arg2: float): void
public static "getRendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
public static "getRendertypeLightningShader"(): $ShaderInstance
public static "getRendertypeTripwireShader"(): $ShaderInstance
public static "getRendertypeEndPortalShader"(): $ShaderInstance
public static "getRendertypeEndGatewayShader"(): $ShaderInstance
public static "getRendertypeCloudsShader"(): $ShaderInstance
public static "getRendertypeLinesShader"(): $ShaderInstance
public static "getRendertypeGuiShader"(): $ShaderInstance
public static "getRendertypeGuiOverlayShader"(): $ShaderInstance
public static "getRendertypeGuiTextHighlightShader"(): $ShaderInstance
public static "getRendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
public static "getRendertypeBreezeWindShader"(): $ShaderInstance
public "setRenderHand"(arg0: boolean): void
public "togglePostEffect"(): void
public "getShader"(arg0: StringJS): $ShaderInstance
public "getFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
public "handler$zca000$immersive_aircraft$immersiveAircraft$renderWorld"(poseStack: $PoseStack$$Type, partialTicks: float, ci: $CallbackInfo$$Type): void
public "getProjectionMatrix"(arg0: double): $Matrix4f
public "resetProjectionMatrix"(arg0: $Matrix4f$$Type): void
public "getDepthFar"(): float
public static "getNightVisionScale"(arg0: $LivingEntity$$Type, arg1: float): float
public "handler$cjg001$camerapture$shouldRenderBlockOutline"(cir: $CallbackInfoReturnable$$Type): void
public "getMapRenderer"(): $MapRenderer
public "displayItemActivation"(arg0: $ItemStack$$Type): void
public "getDarkenWorldAmount"(arg0: float): float
public "getRenderDistance"(): float
public static "getParticleShader"(): $ShaderInstance
public static "getRendertypeArmorGlintShader"(): $ShaderInstance
public static "getRendertypeGlintDirectShader"(): $ShaderInstance
public "lightTexture"(): $LightTexture
public "overlayTexture"(): $OverlayTexture
public static "getPositionColorLightmapShader"(): $ShaderInstance
public static "getPositionShader"(): $ShaderInstance
public static "getPositionColorTexLightmapShader"(): $ShaderInstance
public static "getRendertypeSolidShader"(): $ShaderInstance
public static "getRendertypeCutoutMippedShader"(): $ShaderInstance
public static "getRendertypeCutoutShader"(): $ShaderInstance
public static "getRendertypeTranslucentShader"(): $ShaderInstance
public static "getRendertypeTranslucentMovingBlockShader"(): $ShaderInstance
public static "getRendertypeArmorCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeEntitySolidShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullShader"(): $ShaderInstance
public static "getRendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
public static "getRendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentCullShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentShader"(): $ShaderInstance
public static "getRendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
public static "getRendertypeEntitySmoothCutoutShader"(): $ShaderInstance
public static "getRendertypeBeaconBeamShader"(): $ShaderInstance
public static "getRendertypeEntityDecalShader"(): $ShaderInstance
public static "getRendertypeEntityNoOutlineShader"(): $ShaderInstance
public static "getRendertypeEntityShadowShader"(): $ShaderInstance
public static "getRendertypeEntityAlphaShader"(): $ShaderInstance
public static "getRendertypeEyesShader"(): $ShaderInstance
public static "getRendertypeEnergySwirlShader"(): $ShaderInstance
public static "getRendertypeLeashShader"(): $ShaderInstance
public static "getRendertypeWaterMaskShader"(): $ShaderInstance
public static "getRendertypeOutlineShader"(): $ShaderInstance
public static "getRendertypeArmorEntityGlintShader"(): $ShaderInstance
public static "getRendertypeGlintTranslucentShader"(): $ShaderInstance
public static "getRendertypeGlintShader"(): $ShaderInstance
public static "getRendertypeEntityGlintShader"(): $ShaderInstance
public static "getRendertypeEntityGlintDirectShader"(): $ShaderInstance
public static "getRendertypeCrumblingShader"(): $ShaderInstance
public static "getRendertypeTextShader"(): $ShaderInstance
public static "getRendertypeTextBackgroundShader"(): $ShaderInstance
public static "getRendertypeTextIntensityShader"(): $ShaderInstance
public static "getRendertypeTextSeeThroughShader"(): $ShaderInstance
public static "getRendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
public "getBlurEffect"(): $PostChain
public "getRenderHand"(): boolean
public "getPanoramicMode"(): boolean
public "invokeBobView"(arg0: $PoseStack$$Type, arg1: float): void
public "invokeBobHurt"(arg0: $PoseStack$$Type, arg1: float): void
public "invokeGetFov"(arg0: $Camera$$Type, arg1: float, arg2: boolean): double
public "shouldRenderBlockOutlineA"(): boolean
public "getBlurEffect_FancyMenu"(): $PostChain
public "bo$getSkyDarkness"(): float
public "processBlurEffect"(arg0: float): void
get "minecraft"(): $Minecraft
public static get "positionTexShader"(): $ShaderInstance
public static get "positionColorShader"(): $ShaderInstance
public static get "positionTexColorShader"(): $ShaderInstance
get "mainCamera"(): $Camera
get "panoramicMode"(): boolean
set "renderBlockOutline"(value: boolean)
set "panoramicMode"(value: boolean)
public static get "rendertypeTextBackgroundSeeThroughShader"(): $ShaderInstance
public static get "rendertypeLightningShader"(): $ShaderInstance
public static get "rendertypeTripwireShader"(): $ShaderInstance
public static get "rendertypeEndPortalShader"(): $ShaderInstance
public static get "rendertypeEndGatewayShader"(): $ShaderInstance
public static get "rendertypeCloudsShader"(): $ShaderInstance
public static get "rendertypeLinesShader"(): $ShaderInstance
public static get "rendertypeGuiShader"(): $ShaderInstance
public static get "rendertypeGuiOverlayShader"(): $ShaderInstance
public static get "rendertypeGuiTextHighlightShader"(): $ShaderInstance
public static get "rendertypeGuiGhostRecipeOverlayShader"(): $ShaderInstance
public static get "rendertypeBreezeWindShader"(): $ShaderInstance
set "renderHand"(value: boolean)
get "depthFar"(): float
get "mapRenderer"(): $MapRenderer
get "renderDistance"(): float
public static get "particleShader"(): $ShaderInstance
public static get "rendertypeArmorGlintShader"(): $ShaderInstance
public static get "rendertypeGlintDirectShader"(): $ShaderInstance
public static get "positionColorLightmapShader"(): $ShaderInstance
public static get "positionShader"(): $ShaderInstance
public static get "positionColorTexLightmapShader"(): $ShaderInstance
public static get "rendertypeSolidShader"(): $ShaderInstance
public static get "rendertypeCutoutMippedShader"(): $ShaderInstance
public static get "rendertypeCutoutShader"(): $ShaderInstance
public static get "rendertypeTranslucentShader"(): $ShaderInstance
public static get "rendertypeTranslucentMovingBlockShader"(): $ShaderInstance
public static get "rendertypeArmorCutoutNoCullShader"(): $ShaderInstance
public static get "rendertypeEntitySolidShader"(): $ShaderInstance
public static get "rendertypeEntityCutoutShader"(): $ShaderInstance
public static get "rendertypeEntityCutoutNoCullShader"(): $ShaderInstance
public static get "rendertypeEntityCutoutNoCullZOffsetShader"(): $ShaderInstance
public static get "rendertypeItemEntityTranslucentCullShader"(): $ShaderInstance
public static get "rendertypeEntityTranslucentCullShader"(): $ShaderInstance
public static get "rendertypeEntityTranslucentShader"(): $ShaderInstance
public static get "rendertypeEntityTranslucentEmissiveShader"(): $ShaderInstance
public static get "rendertypeEntitySmoothCutoutShader"(): $ShaderInstance
public static get "rendertypeBeaconBeamShader"(): $ShaderInstance
public static get "rendertypeEntityDecalShader"(): $ShaderInstance
public static get "rendertypeEntityNoOutlineShader"(): $ShaderInstance
public static get "rendertypeEntityShadowShader"(): $ShaderInstance
public static get "rendertypeEntityAlphaShader"(): $ShaderInstance
public static get "rendertypeEyesShader"(): $ShaderInstance
public static get "rendertypeEnergySwirlShader"(): $ShaderInstance
public static get "rendertypeLeashShader"(): $ShaderInstance
public static get "rendertypeWaterMaskShader"(): $ShaderInstance
public static get "rendertypeOutlineShader"(): $ShaderInstance
public static get "rendertypeArmorEntityGlintShader"(): $ShaderInstance
public static get "rendertypeGlintTranslucentShader"(): $ShaderInstance
public static get "rendertypeGlintShader"(): $ShaderInstance
public static get "rendertypeEntityGlintShader"(): $ShaderInstance
public static get "rendertypeEntityGlintDirectShader"(): $ShaderInstance
public static get "rendertypeCrumblingShader"(): $ShaderInstance
public static get "rendertypeTextShader"(): $ShaderInstance
public static get "rendertypeTextBackgroundShader"(): $ShaderInstance
public static get "rendertypeTextIntensityShader"(): $ShaderInstance
public static get "rendertypeTextSeeThroughShader"(): $ShaderInstance
public static get "rendertypeTextIntensitySeeThroughShader"(): $ShaderInstance
get "blurEffect"(): $PostChain
get "renderHand"(): boolean
get "panoramicMode"(): boolean
get "blurEffect_FancyMenu"(): $PostChain
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameRenderer$$Type = ($GameRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameRenderer$$Original = $GameRenderer;}
declare module "net.minecraft.client.renderer.entity.EntityRendererProvider$Context" {
import {$BlockRenderDispatcher, $BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$ItemInHandRenderer, $ItemInHandRenderer$$Type} from "net.minecraft.client.renderer.ItemInHandRenderer"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$ModelManager} from "net.minecraft.client.resources.model.ModelManager"
import {$ItemRenderer, $ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$ResourceManager, $ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet, $EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"

export class $EntityRendererProvider$Context {
constructor(arg0: $EntityRenderDispatcher$$Type, arg1: $ItemRenderer$$Type, arg2: $BlockRenderDispatcher$$Type, arg3: $ItemInHandRenderer$$Type, arg4: $ResourceManager$$Type, arg5: $EntityModelSet$$Type, arg6: $Font$$Type)

public "getModelSet"(): $EntityModelSet
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "getResourceManager"(): $ResourceManager
public "getItemRenderer"(): $ItemRenderer
public "getFont"(): $Font
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "getItemInHandRenderer"(): $ItemInHandRenderer
public "getModelManager"(): $ModelManager
public "bakeLayer"(arg0: $ModelLayerLocation$$Type): $ModelPart
get "modelSet"(): $EntityModelSet
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "resourceManager"(): $ResourceManager
get "itemRenderer"(): $ItemRenderer
get "font"(): $Font
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "itemInHandRenderer"(): $ItemInHandRenderer
get "modelManager"(): $ModelManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRendererProvider$Context$$Type = ($EntityRendererProvider$Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRendererProvider$Context$$Original = $EntityRendererProvider$Context;}
declare module "net.minecraft.client.renderer.block.ModelBlockRenderer" {
import {$BitSet$$Type} from "java.util.BitSet"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$ExtendedBlockModelRenderer$$Interface} from "ca.fxco.moreculling.api.renderers.ExtendedBlockModelRenderer"
import {$BlockColors, $BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$ModelBlockRenderer$AmbientOcclusionFace$$Type} from "net.minecraft.client.renderer.block.ModelBlockRenderer$AmbientOcclusionFace"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ModelBlockRenderer implements $ExtendedBlockModelRenderer$$Interface {
readonly "blockColors": $BlockColors

constructor(arg0: $BlockColors$$Type)

public static "enableCaching"(): void
/**
 * 
 * @deprecated
 */
public "tesselateBlock"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "tesselateBlock"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "renderModel"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer): void
public "renderModel"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: integer, arg8: integer, arg9: $ModelData$$Type, arg10: $RenderType$$Type): void
public static "clearCache"(): void
public "tesselateWithAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "tesselateWithAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "tesselateWithoutAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer, arg10: $ModelData$$Type, arg11: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "tesselateWithoutAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BakedModel$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: boolean, arg7: $RandomSource$$Type, arg8: long, arg9: integer): void
public "renderModelFaceAO"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: $List$$Type<($BakedQuad$$Type)>, arg6: (float)[], arg7: $BitSet$$Type, arg8: $ModelBlockRenderer$AmbientOcclusionFace$$Type, arg9: integer): void
public "renderModelFaceFlat"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer, arg5: boolean, arg6: $PoseStack$$Type, arg7: $VertexConsumer$$Type, arg8: $List$$Type<($BakedQuad$$Type)>, arg9: $BitSet$$Type): void
public "putQuadData"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $VertexConsumer$$Type, arg4: $PoseStack$Pose$$Type, arg5: $BakedQuad$$Type, arg6: float, arg7: float, arg8: float, arg9: float, arg10: integer, arg11: integer, arg12: integer, arg13: integer, arg14: integer): void
public "moreculling$renderQuad"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $BakedQuad$$Type, arg7: integer, arg8: integer): void
public "moreculling$renderModelWithoutFace"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: $Direction$$Type): void
public "moreculling$renderQuadsWithoutFace"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $List$$Type, arg7: integer, arg8: integer, arg9: $Direction$$Type): void
public "moreculling$renderModelForFace"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: $Direction$$Type): void
public "moreculling$renderQuadsForFace"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $List$$Type, arg7: integer, arg8: integer, arg9: $Direction$$Type): void
public "moreculling$renderModelFor3Faces"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: $Direction$$Type, arg11: $Direction$$Type, arg12: $Direction$$Type): void
public "moreculling$renderQuadsFor3Faces"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $List$$Type, arg7: integer, arg8: integer, arg9: $Direction$$Type, arg10: $Direction$$Type, arg11: $Direction$$Type): void
public "moreculling$renderModelForFaces"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: $BlockState$$Type, arg3: $BakedModel$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: integer, arg9: integer, arg10: ($Direction$$Type)[]): void
public "moreculling$renderQuadsForFaces"(arg0: $PoseStack$Pose$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $List$$Type, arg7: integer, arg8: integer, arg9: ($Direction$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBlockRenderer$$Type = ($ModelBlockRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBlockRenderer$$Original = $ModelBlockRenderer;}
declare module "net.minecraft.client.renderer.EffectInstance" {
import {$Program} from "com.mojang.blaze3d.shaders.Program"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$AbstractUniform} from "com.mojang.blaze3d.shaders.AbstractUniform"
import {$BlendMode} from "com.mojang.blaze3d.shaders.BlendMode"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Uniform} from "com.mojang.blaze3d.shaders.Uniform"
import {$JsonObject$$Type} from "com.google.gson.JsonObject"
import {$EffectProgram} from "com.mojang.blaze3d.shaders.EffectProgram"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$Effect$$Interface} from "com.mojang.blaze3d.shaders.Effect"
import {$Program$Type$$Type} from "com.mojang.blaze3d.shaders.Program$Type"

export class $EffectInstance implements $Effect$$Interface, $AutoCloseable$$Interface {
constructor(arg0: $ResourceProvider$$Type, arg1: StringJS)

public static "parseBlendNode"(arg0: $JsonObject$$Type): $BlendMode
public "markDirty"(): void
public static "getOrCreate"(arg0: $ResourceProvider$$Type, arg1: $Program$Type$$Type, arg2: StringJS): $EffectProgram
public "getName"(): StringJS
public "clear"(): void
public "apply"(): void
public "getId"(): integer
public "close"(): void
public "safeGetUniform"(arg0: StringJS): $AbstractUniform
public "attachToProgram"(): void
public "getVertexProgram"(): $Program
public "getFragmentProgram"(): $Program
public "getUniform"(arg0: StringJS): $Uniform
public "setSampler"(arg0: StringJS, arg1: $IntSupplier$$Type): void
get "name"(): StringJS
get "id"(): integer
get "vertexProgram"(): $Program
get "fragmentProgram"(): $Program
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EffectInstance$$Type = ($EffectInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EffectInstance$$Original = $EffectInstance;}
declare module "net.minecraft.client.renderer.debug.BreezeDebugRenderer" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BreezeDebugPayload$BreezeInfo$$Type} from "net.minecraft.network.protocol.common.custom.BreezeDebugPayload$BreezeInfo"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $BreezeDebugRenderer {
constructor(arg0: $Minecraft$$Type)

public "clear"(): void
public "add"(arg0: $BreezeDebugPayload$BreezeInfo$$Type): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreezeDebugRenderer$$Type = ($BreezeDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BreezeDebugRenderer$$Original = $BreezeDebugRenderer;}
declare module "net.minecraft.client.renderer.block.model.BlockModel" {
import {$ItemOverrides} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$List, $List$$Type} from "java.util.List"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ItemTransforms, $ItemTransforms$$Type} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$BlockModel$GuiLight, $BlockModel$GuiLight$$Type} from "net.minecraft.client.renderer.block.model.BlockModel$GuiLight"
import {$Gson} from "com.google.gson.Gson"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$FaceBakery} from "net.minecraft.client.renderer.block.model.FaceBakery"
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Reader$$Type} from "java.io.Reader"
import {$BlockElementFace, $BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$BlockElement, $BlockElement$$Type} from "net.minecraft.client.renderer.block.model.BlockElement"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel$$Type, $UnbakedModel$$Interface} from "net.minecraft.client.resources.model.UnbakedModel"
import {$ExtendedUnbakedModel$$Interface} from "ca.fxco.moreculling.api.model.ExtendedUnbakedModel"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$BlockGeometryBakingContext} from "net.neoforged.neoforge.client.model.geometry.BlockGeometryBakingContext"
import {$ItemOverride, $ItemOverride$$Type} from "net.minecraft.client.renderer.block.model.ItemOverride"

export class $BlockModel implements $UnbakedModel$$Interface, $ExtendedUnbakedModel$$Interface {
 "parent": $BlockModel
 "parentLocation": $ResourceLocation
readonly "textureMap": $Map<(StringJS), ($Either<($Material), (StringJS)>)>
static readonly "PARTICLE_TEXTURE_REFERENCE": StringJS
 "name": StringJS
static readonly "GSON": $Gson
readonly "customData": $BlockGeometryBakingContext
static readonly "FACE_BAKERY": $FaceBakery

constructor(arg0: $ResourceLocation$$Type, arg1: $List$$Type<($BlockElement$$Type)>, arg2: $Map$$Type<(StringJS), ($Either$$Type<($Material$$Type), (StringJS)>)>, arg3: boolean, arg4: $BlockModel$GuiLight$$Type, arg5: $ItemTransforms$$Type, arg6: $List$$Type<($ItemOverride$$Type)>)

public "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>): void
public "moreculling$setCullShapeElements"(arg0: $List$$Type): void
public "moreculling$getCullShapeElements"(arg0: $ResourceLocation$$Type): $List
public "moreculling$setUseModelShape"(arg0: boolean): void
public "moreculling$getUseModelShape"(arg0: $ResourceLocation$$Type): boolean
public "moreculling$modifyElementFace"(arg0: $BlockElementFace$$Type): $BlockElementFace
public "getTransforms"(): $ItemTransforms
/**
 * 
 * @deprecated
 */
public "getElements"(): $List<($BlockElement)>
public static "fromStream"(arg0: $Reader$$Type): $BlockModel
public "toString"(): StringJS
public "isResolved"(): boolean
public static "fromString"(arg0: StringJS): $BlockModel
public "getOverrides"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $ItemOverrides
public "getOverrides"(): $List<($ItemOverride)>
public "getDependencies"(): $Collection<($ResourceLocation)>
public "bake"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: boolean): $BakedModel
public "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type): $BakedModel
public "hasTexture"(arg0: StringJS): boolean
public "hasAmbientOcclusion"(): boolean
public "getMaterial"(arg0: StringJS): $Material
public "getParentLocation"(): $ResourceLocation
public "getGuiLight"(): $BlockModel$GuiLight
public "bakeVanilla"(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg3: $ModelState$$Type, arg4: boolean): $BakedModel
public "getRootModel"(): $BlockModel
public static "bakeFace"(arg0: $BlockElement$$Type, arg1: $BlockElementFace$$Type, arg2: $TextureAtlasSprite$$Type, arg3: $Direction$$Type, arg4: $ModelState$$Type): $BakedQuad
get "transforms"(): $ItemTransforms
get "elements"(): $List<($BlockElement)>
get "resolved"(): boolean
get "overrides"(): $List<($ItemOverride)>
get "dependencies"(): $Collection<($ResourceLocation)>
get "guiLight"(): $BlockModel$GuiLight
get "rootModel"(): $BlockModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModel$$Type = ($BlockModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModel$$Original = $BlockModel;}
declare module "net.minecraft.client.renderer.ViewArea" {
import {$SectionRenderDispatcher$RenderSection} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SectionRenderDispatcher$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"

export class $ViewArea {
 "sections": ($SectionRenderDispatcher$RenderSection)[]

constructor(arg0: $SectionRenderDispatcher$$Type, arg1: $Level$$Type, arg2: integer, arg3: $LevelRenderer$$Type)

public "setDirty"(arg0: integer, arg1: integer, arg2: integer, arg3: boolean): void
public "getViewDistance"(): integer
public "repositionCamera"(arg0: double, arg1: double): void
public "releaseAllBuffers"(): void
public "getLevelHeightAccessor"(): $LevelHeightAccessor
get "viewDistance"(): integer
get "levelHeightAccessor"(): $LevelHeightAccessor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ViewArea$$Type = ($ViewArea);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ViewArea$$Original = $ViewArea;}
declare module "net.minecraft.client.renderer.chunk.RenderChunkRegion" {
import {$BlockHitResult} from "net.minecraft.world.phys.BlockHitResult"
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ColorResolver$$Type} from "net.minecraft.world.level.ColorResolver"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter$$Interface} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$ClipBlockStateContext$$Type} from "net.minecraft.world.level.ClipBlockStateContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$AuxiliaryLightManager} from "net.neoforged.neoforge.common.world.AuxiliaryLightManager"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ClipContext$$Type} from "net.minecraft.world.level.ClipContext"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"

export class $RenderChunkRegion implements $BlockAndTintGetter$$Interface {
static readonly "RADIUS": integer
static readonly "SIZE": integer

public "getHeight"(): integer
public static "index"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): integer
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getMinBuildHeight"(): integer
public "getLightEngine"(): $LevelLightEngine
public "getShade"(arg0: float, arg1: float, arg2: float, arg3: boolean): float
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getBlockTint"(arg0: $BlockPos$$Type, arg1: $ColorResolver$$Type): integer
public "getAuxLightManager"(arg0: $ChunkPos$$Type): $AuxiliaryLightManager
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "canSeeSky"(arg0: $BlockPos$$Type): boolean
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
public "getRawBrightness"(arg0: $BlockPos$$Type, arg1: integer): integer
public "getBlockEntity"<T extends $BlockEntity>(arg0: $BlockPos$$Type, arg1: $BlockEntityType$$Type<(T)>): $Optional<(T)>
public "clip"(arg0: $ClipContext$$Type): $BlockHitResult
public "getLightEmission"(arg0: $BlockPos$$Type): integer
public "getMaxLightLevel"(): integer
public "getBlockStates"(arg0: $AABB$$Type): $Stream<($BlockState)>
public "isBlockInLine"(arg0: $ClipBlockStateContext$$Type): $BlockHitResult
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
public "clipWithInteractionOverride"(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: $BlockPos$$Type, arg3: $VoxelShape$$Type, arg4: $BlockState$$Type): $BlockHitResult
public "getBlockFloorHeight"(arg0: $BlockPos$$Type): double
public "getBlockFloorHeight"(arg0: $VoxelShape$$Type, arg1: $Supplier$$Type<($VoxelShape$$Type)>): double
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(arg0: integer): boolean
public "getSectionIndex"(arg0: integer): integer
public "getSectionsCount"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getAuxLightManager"(arg0: $BlockPos$$Type): $AuxiliaryLightManager
get "height"(): integer
get "minBuildHeight"(): integer
get "lightEngine"(): $LevelLightEngine
get "maxLightLevel"(): integer
get "maxBuildHeight"(): integer
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderChunkRegion$$Type = ($RenderChunkRegion);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderChunkRegion$$Original = $RenderChunkRegion;}
declare module "net.minecraft.client.renderer.block.model.BakedQuad" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$QuadOpacity$$Interface} from "ca.fxco.moreculling.api.quad.QuadOpacity"
import {$SpriteTransparencyLevel} from "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevel"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ModelQuadFacing} from "org.embeddedt.embeddium.impl.model.quad.properties.ModelQuadFacing"
import {$BakedQuadView$$Interface} from "org.embeddedt.embeddium.impl.model.quad.BakedQuadView"
import {$BakedQuadAccess$$Interface} from "malte0811.ferritecore.mixin.accessors.BakedQuadAccess"

export class $BakedQuad implements $QuadOpacity$$Interface, $BakedQuadAccess$$Interface, $BakedQuadView$$Interface {
 "tintIndex": integer
 "sprite": $TextureAtlasSprite

constructor(arg0: (integer)[], arg1: integer, arg2: $Direction$$Type, arg3: $TextureAtlasSprite$$Type, arg4: boolean)
constructor(arg0: (integer)[], arg1: integer, arg2: $Direction$$Type, arg3: $TextureAtlasSprite$$Type, arg4: boolean, arg5: boolean)

public "moreculling$getTextureTranslucency"(): boolean
public "getNormalFace"(): $ModelQuadFacing
public "getLight"(arg0: integer): integer
public "hasShade"(): boolean
public "isShade"(): boolean
public "getFlags"(): integer
public "getY"(arg0: integer): float
public "setFlags"(arg0: integer): void
public "getVertices"(): (integer)[]
public "getDirection"(): $Direction
public "getX"(arg0: integer): float
public "getZ"(arg0: integer): float
public "getSprite"(): $TextureAtlasSprite
public "getColor"(arg0: integer): integer
public "moreculling$resetTranslucencyCache"(): void
public "isTinted"(): boolean
public "getTintIndex"(): integer
public "getColorIndex"(): integer
public "getForgeNormal"(arg0: integer): integer
public "getComputedFaceNormal"(): integer
public "getTexU"(arg0: integer): float
public "getTexV"(arg0: integer): float
public "getLightFace"(): $Direction
public "hasAmbientOcclusion"(): boolean
public "setVertices"(arg0: (integer)[]): void
public "getTransparencyLevel"(): $SpriteTransparencyLevel
public "hasColor"(): boolean
public "getModFaceNormal"(): integer
get "normalFace"(): $ModelQuadFacing
get "shade"(): boolean
get "flags"(): integer
set "flags"(value: integer)
get "vertices"(): (integer)[]
get "direction"(): $Direction
get "tinted"(): boolean
get "colorIndex"(): integer
get "computedFaceNormal"(): integer
get "lightFace"(): $Direction
set "vertices"(value: (integer)[])
get "transparencyLevel"(): $SpriteTransparencyLevel
get "modFaceNormal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedQuad$$Type = ($BakedQuad);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedQuad$$Original = $BakedQuad;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher" {
import {$SectionRenderDispatcher$RenderSection$CompileTask$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask"
import {$VertexBuffer$$Type} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$LevelRenderer$$Type} from "net.minecraft.client.renderer.LevelRenderer"
import {$ChunkBuilderAccess$$Interface} from "me.cominixo.betterf3.ducks.ChunkBuilderAccess"
import {$ByteBufferBuilder$Result$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder$Result"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$SectionRenderDispatcher$RenderSection$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$RenderRegionCache$$Type} from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$Queue} from "java.util.Queue"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$Executor$$Type} from "java.util.concurrent.Executor"

export class $SectionRenderDispatcher implements $ChunkBuilderAccess$$Interface {
constructor(arg0: $ClientLevel$$Type, arg1: $LevelRenderer$$Type, arg2: $Executor$$Type, arg3: $RenderBuffers$$Type, arg4: $BlockRenderDispatcher$$Type, arg5: $BlockEntityRenderDispatcher$$Type)

public "uploadSectionLayer"(arg0: $MeshData$$Type, arg1: $VertexBuffer$$Type): $CompletableFuture<(void)>
public "uploadSectionIndexBuffer"(arg0: $ByteBufferBuilder$Result$$Type, arg1: $VertexBuffer$$Type): $CompletableFuture<(void)>
public "betterF3$getQueuedTaskCount"(): integer
public "betterF3$getUploadQueue"(): $Queue
public "betterF3$getBufferCount"(): integer
public "isQueueEmpty"(): boolean
public "setCamera"(arg0: $Vec3$$Type): void
public "getCameraPosition"(): $Vec3
public "getToBatchCount"(): integer
public "getToUpload"(): integer
public "getFreeBufferCount"(): integer
public "setLevel"(arg0: $ClientLevel$$Type): void
public "dispose"(): void
public "schedule"(arg0: $SectionRenderDispatcher$RenderSection$CompileTask$$Type): void
public "blockUntilClear"(): void
public "rebuildSectionSync"(arg0: $SectionRenderDispatcher$RenderSection$$Type, arg1: $RenderRegionCache$$Type): void
public "uploadAllPendingUploads"(): void
public "getStats"(): StringJS
get "queueEmpty"(): boolean
set "camera"(value: $Vec3$$Type)
get "cameraPosition"(): $Vec3
get "toBatchCount"(): integer
get "toUpload"(): integer
get "freeBufferCount"(): integer
set "level"(value: $ClientLevel$$Type)
get "stats"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$$Type = ($SectionRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$$Original = $SectionRenderDispatcher;}
declare module "net.minecraft.client.renderer.culling.Frustum" {
import {$Viewport} from "org.embeddedt.embeddium.impl.render.viewport.Viewport"
import {$ViewportProvider$$Interface} from "org.embeddedt.embeddium.impl.render.viewport.ViewportProvider"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"

export class $Frustum implements $ViewportProvider$$Interface {
static readonly "OFFSET_STEP": integer

constructor(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type)
constructor(arg0: $Frustum$$Type)

public "prepare"(arg0: double, arg1: double, arg2: double): void
public "offsetToFullyIncludeCameraCube"(arg0: integer): $Frustum
public "sodium$createViewport"(): $Viewport
public "isVisible"(arg0: $AABB$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Frustum$$Type = ($Frustum);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Frustum$$Original = $Frustum;}
declare module "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderStateShard$BooleanStateShard} from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$OverlayStateShard extends $RenderStateShard$BooleanStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean)

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$OverlayStateShard$$Type = ($RenderStateShard$OverlayStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$OverlayStateShard$$Original = $RenderStateShard$OverlayStateShard;}
declare module "net.minecraft.client.renderer.block.model.BlockFaceUV" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $BlockFaceUV {
 "uvs": (float)[]
readonly "rotation": integer

constructor(arg0: (float)[], arg1: integer)

public "getU"(arg0: integer): float
public "getV"(arg0: integer): float
public "getReverseIndex"(arg0: integer): integer
public "setMissingUv"(arg0: (float)[]): void
set "missingUv"(value: (float)[])
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockFaceUV$$Type = ($BlockFaceUV);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockFaceUV$$Original = $BlockFaceUV;}
declare module "net.minecraft.client.renderer.texture.SpriteContents" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$SpriteContentsExtension$$Interface as $SpriteContentsExtension$0$$Interface} from "net.irisshaders.iris.pbr.texture.SpriteContentsExtension"
import {$SpriteTransparencyLevel} from "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevel"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$IntStream} from "java.util.stream.IntStream"
import {$SpriteContents$AnimatedTexture} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"
import {$SpriteContentsExtension$$Interface} from "net.irisshaders.iris.texture.SpriteContentsExtension"
import {$SpriteContentsAccessor$$Interface} from "ca.fxco.moreculling.mixin.accessors.SpriteContentsAccessor"
import {$SpriteContentsAccessor$$Interface as $SpriteContentsAccessor$1$$Interface} from "net.irisshaders.iris.mixin.texture.SpriteContentsAccessor"
import {$FrameSize$$Type} from "net.minecraft.client.resources.metadata.animation.FrameSize"
import {$SpriteContentsExtended$$Interface} from "org.embeddedt.embeddium.impl.render.texture.SpriteContentsExtended"
import {$Stitcher$Entry$$Interface} from "net.minecraft.client.renderer.texture.Stitcher$Entry"
import {$SpriteContents$Ticker} from "net.minecraft.client.renderer.texture.SpriteContents$Ticker"
import {$SpriteContentsAccessor$$Interface as $SpriteContentsAccessor$0$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAccessor"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PBRSpriteHolder} from "net.irisshaders.iris.pbr.texture.PBRSpriteHolder"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$SpriteContentsInvoker$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.SpriteContentsInvoker"
import {$SpriteTicker} from "net.minecraft.client.renderer.texture.SpriteTicker"
import {$ResourceMetadata, $ResourceMetadata$$Type} from "net.minecraft.server.packs.resources.ResourceMetadata"
import {$IPotentiallyInvisibleSpriteContents$$Interface} from "com.railwayteam.railways.mixin_interfaces.IPotentiallyInvisibleSpriteContents"
import {$SpriteTransparencyLevelHolder$$Interface} from "org.embeddedt.embeddium.impl.render.chunk.sprite.SpriteTransparencyLevelHolder"

export class $SpriteContents implements $Stitcher$Entry$$Interface, $AutoCloseable$$Interface, $IPotentiallyInvisibleSpriteContents$$Interface, $SpriteContentsExtension$$Interface, $SpriteContentsAccessor$1$$Interface, $SpriteContentsExtension$0$$Interface, $SpriteContentsAccessor$$Interface, $SpriteContentsAccessor$0$$Interface, $SpriteTransparencyLevelHolder$$Interface, $SpriteContentsExtended$$Interface, $SpriteContentsInvoker$$Interface {
readonly "animatedTexture": $SpriteContents$AnimatedTexture
 "byMipLevel": ($NativeImage)[]
 "originalImage": $NativeImage

constructor(arg0: $ResourceLocation$$Type, arg1: $FrameSize$$Type, arg2: $NativeImage$$Type, arg3: $ResourceMetadata$$Type)

public "getOriginalImage"(): $NativeImage
public "createTicker"(): $SpriteTicker
public "isTransparent"(arg0: integer, arg1: integer, arg2: integer): boolean
public "getFrameCount"(): integer
public "getImages"(): ($NativeImage)[]
public "name"(): $ResourceLocation
public "toString"(): StringJS
public "close"(): void
public "width"(): integer
public "height"(): integer
public "getImage"(): $NativeImage
public "metadata"(): $ResourceMetadata
public "uploadFirstFrame"(arg0: integer, arg1: integer): void
public "getPBRHolder"(): $PBRSpriteHolder
public "getOrCreatePBRHolder"(): $PBRSpriteHolder
public "getUniqueFrames"(): $IntStream
public "increaseMipLevel"(arg0: integer): void
public "railways$shouldDoInvisibility"(): boolean
public "railways$uploadFrame"(arg0: boolean): void
public "railways$isVisible"(): boolean
public "getCreatedTicker"(): $SpriteContents$Ticker
public "embeddium$getTransparencyLevel"(): $SpriteTransparencyLevel
public "sodium$setActive"(arg0: boolean): void
public "sodium$hasAnimation"(): boolean
public "sodium$isActive"(): boolean
public "getAnimatedTexture"(): $SpriteContents$AnimatedTexture
public "invokeUpload"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: ($NativeImage$$Type)[]): void
public static "getTransparencyLevel"(arg0: $TextureAtlasSprite$$Type): $SpriteTransparencyLevel
public static "getTransparencyLevel"(arg0: $SpriteContents$$Type): $SpriteTransparencyLevel
get "frameCount"(): integer
get "images"(): ($NativeImage)[]
get "image"(): $NativeImage
get "PBRHolder"(): $PBRSpriteHolder
get "orCreatePBRHolder"(): $PBRSpriteHolder
get "uniqueFrames"(): $IntStream
get "createdTicker"(): $SpriteContents$Ticker
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$$Type = ($SpriteContents);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$$Original = $SpriteContents;}
declare module "net.minecraft.client.renderer.ItemInHandRenderer" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$LocalPlayer$$Type} from "net.minecraft.client.player.LocalPlayer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $ItemInHandRenderer {
 "mainHandItem": $ItemStack
 "offHandItem": $ItemStack

constructor(arg0: $Minecraft$$Type, arg1: $EntityRenderDispatcher$$Type, arg2: $ItemRenderer$$Type)

public "tick"(): void
public "renderItem"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: boolean, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: integer): void
public "itemUsed"(arg0: $InteractionHand$$Type): void
public "renderHandsWithItems"(arg0: float, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$BufferSource$$Type, arg3: $LocalPlayer$$Type, arg4: integer): void
public "applyItemArmTransform"(arg0: $PoseStack$$Type, arg1: $HumanoidArm$$Type, arg2: float): void
public "handler$ebn000$moonlight$renderSpecial"(player: $AbstractClientPlayer$$Type, partialTicks: float, pitch: float, hand: $InteractionHand$$Type, swingProgress: float, stack: $ItemStack$$Type, equippedProgress: float, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, ci: $CallbackInfo$$Type, arm: $HumanoidArm$$Type): void
public "applyItemArmAttackTransform"(arg0: $PoseStack$$Type, arg1: $HumanoidArm$$Type, arg2: float): void
public "calculateMapTilt"(arg0: float): float
public "renderMapHand"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $HumanoidArm$$Type): void
public "renderPlayerArm"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: float, arg4: float, arg5: $HumanoidArm$$Type): void
public "handler$ebn000$moonlight$animateItem"(player: $AbstractClientPlayer$$Type, partialTicks: float, pitch: float, hand: $InteractionHand$$Type, swingProgress: float, stack: $ItemStack$$Type, handHeight: float, poseStack: $PoseStack$$Type, buffer: $MultiBufferSource$$Type, combinedLight: integer, ci: $CallbackInfo$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInHandRenderer$$Type = ($ItemInHandRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInHandRenderer$$Original = $ItemInHandRenderer;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSource" {
import {$SpriteSource$Output$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource$Output"
import {$SpriteSourceType} from "net.minecraft.client.renderer.texture.atlas.SpriteSourceType"
import {$FileToIdConverter} from "net.minecraft.resources.FileToIdConverter"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export interface $SpriteSource$$Interface {
}

export class $SpriteSource implements $SpriteSource$$Interface {
static readonly "TEXTURE_ID_CONVERTER": $FileToIdConverter

 "run"(arg0: $ResourceManager$$Type, arg1: $SpriteSource$Output$$Type): void
 "type"(): $SpriteSourceType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$$Type = ($SpriteSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSource$$Original = $SpriteSource;}
declare module "net.minecraft.client.renderer.texture.OverlayTexture" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export class $OverlayTexture implements $AutoCloseable$$Interface {
static readonly "NO_WHITE_U": integer
static readonly "WHITE_OVERLAY_V": integer
static readonly "NO_OVERLAY": integer
static readonly "RED_OVERLAY_V": integer

constructor()

public static "pack"(arg0: integer, arg1: integer): integer
public static "pack"(arg0: float, arg1: boolean): integer
public static "v"(arg0: boolean): integer
public "close"(): void
public static "u"(arg0: float): integer
public "teardownOverlayColor"(): void
public "setupOverlayColor"(): void
get "upOverlayColor"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverlayTexture$$Type = ($OverlayTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverlayTexture$$Original = $OverlayTexture;}
declare module "net.minecraft.client.renderer.entity.player.PlayerRenderer" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PlayerModel} from "net.minecraft.client.model.PlayerModel"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AbstractClientPlayer, $AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"
import {$LivingEntityRenderer} from "net.minecraft.client.renderer.entity.LivingEntityRenderer"

export class $PlayerRenderer extends $LivingEntityRenderer<($AbstractClientPlayer), ($PlayerModel<($AbstractClientPlayer)>)> {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: boolean)

public "renderRightHand"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $AbstractClientPlayer$$Type): void
public "renderLeftHand"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $AbstractClientPlayer$$Type): void
public "getTextureLocation"(arg0: $AbstractClientPlayer$$Type): $ResourceLocation
public "getTextureLocation"(arg0: $Entity$$Type): $ResourceLocation
public "render"(arg0: $AbstractClientPlayer$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $LivingEntity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getRenderOffset"(arg0: $AbstractClientPlayer$$Type, arg1: float): $Vec3
public "getRenderOffset"(arg0: $Entity$$Type, arg1: float): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerRenderer$$Type = ($PlayerRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerRenderer$$Original = $PlayerRenderer;}
declare module "net.minecraft.client.renderer.block.model.ItemOverrides$BakedOverride" {
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"

export class $ItemOverrides$BakedOverride {
 "model": $BakedModel

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverrides$BakedOverride$$Type = ($ItemOverrides$BakedOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverrides$BakedOverride$$Original = $ItemOverrides$BakedOverride;}
declare module "net.minecraft.client.renderer.entity.layers.RenderLayer" {
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$RenderLayerParent$$Type} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IUpperPartHelper$$Interface} from "dev.kosmx.playerAnim.impl.IUpperPartHelper"

export class $RenderLayer<T extends $Entity, M extends $EntityModel<(object)>> implements $IUpperPartHelper$$Interface {
constructor(arg0: $RenderLayerParent$$Type<(T), (M)>)

public "isUpperPart"(): boolean
public "getParentModel"(): M
public "setUpperPart"(bl: boolean): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: T, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
get "upperPart"(): boolean
get "parentModel"(): M
set "upperPart"(value: boolean)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLayer$$Type<T, M> = ($RenderLayer<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLayer$$Original<T, M> = $RenderLayer<(T), (M)>;}
declare module "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder" {
import {$RenderType$CompositeState} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$EmptyTextureStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShard$WriteMaskStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderType$OutlineProperty$$Type} from "net.minecraft.client.renderer.RenderType$OutlineProperty"
import {$RenderStateShard$DepthTestStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TransparencyStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard$$Type} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderType$CompositeState$CompositeStateBuilder {
public "setCullState"(arg0: $RenderStateShard$CullStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOverlayState"(arg0: $RenderStateShard$OverlayStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLayeringState"(arg0: $RenderStateShard$LayeringStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setDepthTestState"(arg0: $RenderStateShard$DepthTestStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTexturingState"(arg0: $RenderStateShard$TexturingStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setWriteMaskState"(arg0: $RenderStateShard$WriteMaskStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLineState"(arg0: $RenderStateShard$LineStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setColorLogicState"(arg0: $RenderStateShard$ColorLogicStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setLightmapState"(arg0: $RenderStateShard$LightmapStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setShaderState"(arg0: $RenderStateShard$ShaderStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTextureState"(arg0: $RenderStateShard$EmptyTextureStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setTransparencyState"(arg0: $RenderStateShard$TransparencyStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "setOutputState"(arg0: $RenderStateShard$OutputStateShard$$Type): $RenderType$CompositeState$CompositeStateBuilder
public "createCompositeState"(arg0: boolean): $RenderType$CompositeState
public "createCompositeState"(arg0: $RenderType$OutlineProperty$$Type): $RenderType$CompositeState
set "cullState"(value: $RenderStateShard$CullStateShard$$Type)
set "overlayState"(value: $RenderStateShard$OverlayStateShard$$Type)
set "layeringState"(value: $RenderStateShard$LayeringStateShard$$Type)
set "depthTestState"(value: $RenderStateShard$DepthTestStateShard$$Type)
set "texturingState"(value: $RenderStateShard$TexturingStateShard$$Type)
set "writeMaskState"(value: $RenderStateShard$WriteMaskStateShard$$Type)
set "lineState"(value: $RenderStateShard$LineStateShard$$Type)
set "colorLogicState"(value: $RenderStateShard$ColorLogicStateShard$$Type)
set "lightmapState"(value: $RenderStateShard$LightmapStateShard$$Type)
set "shaderState"(value: $RenderStateShard$ShaderStateShard$$Type)
set "textureState"(value: $RenderStateShard$EmptyTextureStateShard$$Type)
set "transparencyState"(value: $RenderStateShard$TransparencyStateShard$$Type)
set "outputState"(value: $RenderStateShard$OutputStateShard$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$CompositeState$CompositeStateBuilder$$Type = ($RenderType$CompositeState$CompositeStateBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$CompositeState$CompositeStateBuilder$$Original = $RenderType$CompositeState$CompositeStateBuilder;}
declare module "net.minecraft.client.renderer.entity.EntityRenderer" {
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Font} from "net.minecraft.client.gui.Font"
import {$Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$EntityRendererInter$$Interface} from "dev.tr7zw.entityculling.access.EntityRendererInter"

export class $EntityRenderer<T extends $Entity> implements $EntityRendererInter$$Interface {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer

public "handler$ejk000$irons_spellbooks$renderRayOverride"(arg0: $Entity$$Type, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double, arg5: $CallbackInfoReturnable$$Type): void
public "entityCullingIgnoresCulling"(entity: $Entity$$Type): boolean
public "entityCullingGetCullingBox"(entity: $Entity$$Type): $AABB
public "getTextureLocation"(arg0: T): $ResourceLocation
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getFont"(): $Font
public "shadowShouldShowName"(entity: $Entity$$Type): boolean
public "getRenderOffset"(arg0: T, arg1: float): $Vec3
public "shadowRenderNameTag"(entity: $Entity$$Type, component: $Component$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, light: integer, delta: float): void
public "getPackedLightCoords"(arg0: T, arg1: float): integer
public "shouldRender"(arg0: T, arg1: $Frustum$$Type, arg2: double, arg3: double, arg4: double): boolean
get "font"(): $Font
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderer$$Type<T> = ($EntityRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderer$$Original<T> = $EntityRenderer<(T)>;}
declare module "net.minecraft.client.renderer.debug.GameTestDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $GameTestDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor()

public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addMarker"(arg0: $BlockPos$$Type, arg1: integer, arg2: StringJS, arg3: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameTestDebugRenderer$$Type = ($GameTestDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameTestDebugRenderer$$Original = $GameTestDebugRenderer;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSourceType" {
import {$SpriteSource, $SpriteSource$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $SpriteSourceType extends $Record {
constructor(arg0: $MapCodec$$Type<($SpriteSource$$Type)>)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<($SpriteSource)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSourceType$$Type = ({"codec"?: $MapCodec$$Type<($SpriteSource$$Type)>}) | ([codec?: $MapCodec$$Type<($SpriteSource$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSourceType$$Original = $SpriteSourceType;}
declare module "net.minecraft.client.renderer.debug.PathfindingRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Path$$Type} from "net.minecraft.world.level.pathfinder.Path"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"

export class $PathfindingRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor()

public static "renderPath"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $Path$$Type, arg3: float, arg4: boolean, arg5: boolean, arg6: double, arg7: double, arg8: double): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "addPath"(arg0: integer, arg1: $Path$$Type, arg2: float): void
public static "renderPathLine"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Path$$Type, arg3: double, arg4: double, arg5: double): void
public "clear"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathfindingRenderer$$Type = ($PathfindingRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PathfindingRenderer$$Original = $PathfindingRenderer;}
declare module "net.minecraft.client.renderer.item.ClampedItemPropertyFunction" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ItemPropertyFunction$$Interface} from "net.minecraft.client.renderer.item.ItemPropertyFunction"

export interface $ClampedItemPropertyFunction$$Interface extends $ItemPropertyFunction$$Interface {

(arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer): float
}

export class $ClampedItemPropertyFunction implements $ClampedItemPropertyFunction$$Interface {
/**
 * 
 * @deprecated
 */
 "call"(arg0: $ItemStack$$Type, arg1: $ClientLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): float
 "unclampedCall"(arg0: $ItemStack$$Type, arg1: $ClientLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClampedItemPropertyFunction$$Type = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClampedItemPropertyFunction$$Original = $ClampedItemPropertyFunction;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSource$Output" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$SpriteSource$SpriteSupplier$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteSource$SpriteSupplier"
import {$Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $SpriteSource$Output$$Interface {
}

export class $SpriteSource$Output implements $SpriteSource$Output$$Interface {
 "add"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type): void
 "add"(arg0: $ResourceLocation$$Type, arg1: $SpriteSource$SpriteSupplier$$Type): void
 "removeAll"(arg0: $Predicate$$Type<($ResourceLocation)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$Output$$Type = ($SpriteSource$Output);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSource$Output$$Original = $SpriteSource$Output;}
declare module "net.minecraft.client.renderer.RenderStateShard$TextureStateShard" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$TextureStateShard extends $RenderStateShard$EmptyTextureStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
 "blur": boolean
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
readonly "texture": $Optional<($ResourceLocation)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
 "mipmap": boolean
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $ResourceLocation$$Type, arg1: boolean, arg2: boolean)

public "toString"(): StringJS
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$TextureStateShard$$Type = ($RenderStateShard$TextureStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$TextureStateShard$$Original = $RenderStateShard$TextureStateShard;}
declare module "net.minecraft.client.renderer.DimensionSpecialEffects$SkyType" {
import {$Enum} from "java.lang.Enum"

export class $DimensionSpecialEffects$SkyType extends $Enum<($DimensionSpecialEffects$SkyType)> {
static readonly "END": $DimensionSpecialEffects$SkyType
static readonly "NONE": $DimensionSpecialEffects$SkyType
static readonly "NORMAL": $DimensionSpecialEffects$SkyType

public static "values"(): ($DimensionSpecialEffects$SkyType)[]
public static "valueOf"(arg0: StringJS): $DimensionSpecialEffects$SkyType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DimensionSpecialEffects$SkyType$$Type = (("none") | ("normal") | ("end"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DimensionSpecialEffects$SkyType$$Original = $DimensionSpecialEffects$SkyType;}
declare module "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$EmptyTextureStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $Runnable$$Type, arg1: $Runnable$$Type)

public "cutoutTexture"(): $Optional<($ResourceLocation)>
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$EmptyTextureStateShard$$Type = ($RenderStateShard$EmptyTextureStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$EmptyTextureStateShard$$Original = $RenderStateShard$EmptyTextureStateShard;}
declare module "net.minecraft.client.renderer.texture.DynamicTexture" {
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$IMixinDynamicTexture$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinDynamicTexture"
import {$NativeImage, $NativeImage$$Type} from "com.mojang.blaze3d.platform.NativeImage"
import {$Path$$Type} from "java.nio.file.Path"
import {$Dumpable$$Interface} from "net.minecraft.client.renderer.texture.Dumpable"
import {$TextureAccess$$Interface} from "journeymap.client.texture.TextureAccess"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $DynamicTexture extends $AbstractTexture implements $Dumpable$$Interface, $IMixinDynamicTexture$$Interface, $TextureAccess$$Interface {
static readonly "NOT_ASSIGNED": integer

constructor(arg0: $NativeImage$$Type)
constructor(arg0: integer, arg1: integer, arg2: boolean)

public "getPixels"(): $NativeImage
public "setPixels"(arg0: $NativeImage$$Type): void
public "load"(arg0: $ResourceManager$$Type): void
public "close"(): void
public "dumpContents"(pResourceLocation: $ResourceLocation$$Type, pPath: $Path$$Type): void
public "upload"(): void
public "wrapOperation$ebm000$moonlight$forceMipMap"(instance: $NativeImage$$Type, a: integer, b: integer, c: integer, autoClose: boolean, op: $Operation$$Type): void
public "wrapOperation$ebm000$moonlight$forceMipMap"(a: integer, b: integer, c: integer, op: $Operation$$Type): void
public "journeymap$getWidth"(): integer
public "journeymap$hasImage"(): boolean
public "journeymap$getHeight"(): integer
public "journeymap$setDisplayWidth"(arg0: integer): void
public "journeymap$setDisplayHeight"(arg0: integer): void
public "journeymap$getScaledImage"(arg0: float): $DynamicTexture
public "journeymap$putScale"(arg0: float, arg1: $DynamicTexture$$Type): void
public "getPixelsKonkrete"(): $NativeImage
public "setPixelsKonkrete"(arg0: $NativeImage$$Type): void
get "pixels"(): $NativeImage
set "pixels"(value: $NativeImage$$Type)
get "pixelsKonkrete"(): $NativeImage
set "pixelsKonkrete"(value: $NativeImage$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicTexture$$Type = ($DynamicTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicTexture$$Original = $DynamicTexture;}
declare module "net.minecraft.client.renderer.debug.GameEventListenerRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$PositionSource$$Type} from "net.minecraft.world.level.gameevent.PositionSource"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $GameEventListenerRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "trackGameEvent"(arg0: $ResourceKey$$Type<($GameEvent)>, arg1: $Vec3$$Type): void
public "trackListener"(arg0: $PositionSource$$Type, arg1: integer): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "clear"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GameEventListenerRenderer$$Type = ($GameEventListenerRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GameEventListenerRenderer$$Original = $GameEventListenerRenderer;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteResourceLoader" {
import {$Collection$$Type} from "java.util.Collection"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$SpriteContentsConstructor, $SpriteContentsConstructor$$Type} from "net.neoforged.neoforge.client.textures.SpriteContentsConstructor"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$Logger} from "org.slf4j.Logger"
import {$Resource, $Resource$$Type} from "net.minecraft.server.packs.resources.Resource"

export interface $SpriteResourceLoader$$Interface {

(arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor): $SpriteContents$$Type
}

export class $SpriteResourceLoader implements $SpriteResourceLoader$$Interface {
static readonly "LOGGER": $Logger

 "loadSprite"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type): $SpriteContents
 "loadSprite"(arg0: $ResourceLocation$$Type, arg1: $Resource$$Type, arg2: $SpriteContentsConstructor$$Type): $SpriteContents
static "create"(arg0: $Collection$$Type<($MetadataSectionSerializer$$Type<(never)>)>): $SpriteResourceLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteResourceLoader$$Type = ((arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor) => $SpriteContents$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteResourceLoader$$Original = $SpriteResourceLoader;}
declare module "net.minecraft.client.renderer.block.BlockRenderDispatcher" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$LiquidBlockRenderer} from "net.minecraft.client.renderer.block.LiquidBlockRenderer"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ModelBlockRenderer} from "net.minecraft.client.renderer.block.ModelBlockRenderer"
import {$ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockModelShaper, $BlockModelShaper$$Type} from "net.minecraft.client.renderer.block.BlockModelShaper"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $BlockRenderDispatcher implements $ResourceManagerReloadListener$$Interface {
constructor(arg0: $BlockModelShaper$$Type, arg1: $BlockEntityWithoutLevelRenderer$$Type, arg2: $BlockColors$$Type)

public "getModelRenderer"(): $ModelBlockRenderer
public "handler$cie000$computercraft$renderBlockDamage"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: $ModelData$$Type, arg6: $CallbackInfo$$Type): void
public "renderBatched"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: $RandomSource$$Type): void
public "renderBatched"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: boolean, arg6: $RandomSource$$Type, arg7: $ModelData$$Type, arg8: $RenderType$$Type): void
public "renderLiquid"(arg0: $BlockPos$$Type, arg1: $BlockAndTintGetter$$Type, arg2: $VertexConsumer$$Type, arg3: $BlockState$$Type, arg4: $FluidState$$Type): void
public "getLiquidBlockRenderer"(): $LiquidBlockRenderer
/**
 * 
 * @deprecated
 */
public "renderSingleBlock"(arg0: $BlockState$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): void
public "renderSingleBlock"(arg0: $BlockState$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer, arg5: $ModelData$$Type, arg6: $RenderType$$Type): void
/**
 * 
 * @deprecated
 */
public "renderBreakingTexture"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type): void
public "renderBreakingTexture"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockAndTintGetter$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type, arg5: $ModelData$$Type): void
public "getBlockModelShaper"(): $BlockModelShaper
public "getBlockModel"(arg0: $BlockState$$Type): $BakedModel
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "modelRenderer"(): $ModelBlockRenderer
get "liquidBlockRenderer"(): $LiquidBlockRenderer
get "blockModelShaper"(): $BlockModelShaper
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockRenderDispatcher$$Type = ($BlockRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockRenderDispatcher$$Original = $BlockRenderDispatcher;}
declare module "net.minecraft.client.renderer.entity.ItemRenderer" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ItemFrame$$Type} from "net.minecraft.world.entity.decoration.ItemFrame"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockEntityWithoutLevelRenderer, $BlockEntityWithoutLevelRenderer$$Type} from "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer"
import {$ExtendedItemRenderer$$Interface} from "ca.fxco.moreculling.api.renderers.ExtendedItemRenderer"
import {$ItemRendererAccessor$$Interface} from "net.createmod.ponder.mixin.client.accessor.ItemRendererAccessor"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$BakedQuad$$Type} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$TextureManager, $TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ItemColors$$Type} from "net.minecraft.client.color.item.ItemColors"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$ItemModelShaper} from "net.minecraft.client.renderer.ItemModelShaper"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ItemRenderer implements $ResourceManagerReloadListener$$Interface, $ExtendedItemRenderer$$Interface, $ItemRendererAccessor$$Interface {
static readonly "GUI_SLOT_CENTER_X": integer
static readonly "COMPASS_FOIL_UI_SCALE": float
static readonly "COMPASS_FOIL_FIRST_PERSON_SCALE": float
static readonly "COMPASS_FOIL_TEXTURE_SCALE": float
static readonly "ENCHANTED_GLINT_ENTITY": $ResourceLocation
readonly "blockEntityRenderer": $BlockEntityWithoutLevelRenderer
static readonly "GUI_SLOT_CENTER_Y": integer
static readonly "ITEM_COUNT_BLIT_OFFSET": integer
static readonly "ENCHANTED_GLINT_ITEM": $ResourceLocation
static readonly "SPYGLASS_IN_HAND_MODEL": $ModelResourceLocation
readonly "textureManager": $TextureManager
static readonly "TRIDENT_IN_HAND_MODEL": $ModelResourceLocation

constructor(arg0: $Minecraft$$Type, arg1: $TextureManager$$Type, arg2: $ModelManager$$Type, arg3: $ItemColors$$Type, arg4: $BlockEntityWithoutLevelRenderer$$Type)

public "render"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: boolean, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer, arg7: $BakedModel$$Type): void
public "getModel"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): $BakedModel
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "getItemModelShaper"(): $ItemModelShaper
public "renderModelLists"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type): void
public "renderQuadList"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $List$$Type<($BakedQuad$$Type)>, arg3: $ItemStack$$Type, arg4: integer, arg5: integer): void
public static "getArmorFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean): $VertexConsumer
public static "getCompassFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: $PoseStack$Pose$$Type): $VertexConsumer
public static "getFoilBuffer"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean, arg3: boolean): $VertexConsumer
public static "getFoilBufferDirect"(arg0: $MultiBufferSource$$Type, arg1: $RenderType$$Type, arg2: boolean, arg3: boolean): $VertexConsumer
public "getBlockEntityRenderer"(): $BlockEntityWithoutLevelRenderer
public "moreculling$renderBakedItemModelWithoutFace"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: $Direction$$Type): void
public "moreculling$renderBakedItemModelOnly3Faces"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: $Direction$$Type, arg7: $Direction$$Type, arg8: $Direction$$Type): void
public "moreculling$renderBakedItemModelForFace"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $VertexConsumer$$Type, arg6: $Direction$$Type): void
public "moreculling$renderItemFrameItem"(arg0: $ItemStack$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: $ItemFrame$$Type, arg5: $Camera$$Type): void
public "renderStatic"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: integer, arg3: integer, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: $Level$$Type, arg7: integer): void
public "renderStatic"(arg0: $LivingEntity$$Type, arg1: $ItemStack$$Type, arg2: $ItemDisplayContext$$Type, arg3: boolean, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: $Level$$Type, arg7: integer, arg8: integer, arg9: integer): void
public "catnip$getTextureManager"(): $TextureManager
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "itemModelShaper"(): $ItemModelShaper
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemRenderer$$Type = ($ItemRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemRenderer$$Original = $ItemRenderer;}
declare module "net.minecraft.client.renderer.ItemModelShaper" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$ModelManager, $ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"

export class $ItemModelShaper {
readonly "shapes": $Int2ObjectMap<($ModelResourceLocation)>

constructor(arg0: $ModelManager$$Type)

public "rebuildCache"(): void
public "register"(arg0: $Item$$Type, arg1: $ModelResourceLocation$$Type): void
public "getModelManager"(): $ModelManager
public "getItemModel"(arg0: $ItemStack$$Type): $BakedModel
public "getItemModel"(arg0: $Item$$Type): $BakedModel
get "modelManager"(): $ModelManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemModelShaper$$Type = ($ItemModelShaper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemModelShaper$$Original = $ItemModelShaper;}
declare module "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$TexturingStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$TexturingStateShard$$Type = ($RenderStateShard$TexturingStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$TexturingStateShard$$Original = $RenderStateShard$TexturingStateShard;}
declare module "net.minecraft.client.renderer.block.model.ItemTransforms" {
import {$ItemDisplayContext, $ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemTransform, $ItemTransform$$Type} from "net.minecraft.client.renderer.block.model.ItemTransform"
import {$ImmutableMap, $ImmutableMap$$Type} from "com.google.common.collect.ImmutableMap"

export class $ItemTransforms {
static readonly "NO_TRANSFORMS": $ItemTransforms
readonly "head": $ItemTransform
readonly "firstPersonLeftHand": $ItemTransform
readonly "moddedTransforms": $ImmutableMap<($ItemDisplayContext), ($ItemTransform)>
readonly "firstPersonRightHand": $ItemTransform
readonly "thirdPersonRightHand": $ItemTransform
readonly "thirdPersonLeftHand": $ItemTransform
readonly "gui": $ItemTransform
readonly "ground": $ItemTransform
readonly "fixed": $ItemTransform

constructor(arg0: $ItemTransform$$Type, arg1: $ItemTransform$$Type, arg2: $ItemTransform$$Type, arg3: $ItemTransform$$Type, arg4: $ItemTransform$$Type, arg5: $ItemTransform$$Type, arg6: $ItemTransform$$Type, arg7: $ItemTransform$$Type, arg8: $ImmutableMap$$Type<($ItemDisplayContext$$Type), ($ItemTransform$$Type)>)
constructor(arg0: $ItemTransforms$$Type)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ItemTransform$$Type, arg1: $ItemTransform$$Type, arg2: $ItemTransform$$Type, arg3: $ItemTransform$$Type, arg4: $ItemTransform$$Type, arg5: $ItemTransform$$Type, arg6: $ItemTransform$$Type, arg7: $ItemTransform$$Type)

public "getTransform"(arg0: $ItemDisplayContext$$Type): $ItemTransform
public "hasTransform"(arg0: $ItemDisplayContext$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransforms$$Type = ($ItemTransforms);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTransforms$$Original = $ItemTransforms;}
declare module "net.minecraft.client.renderer.LevelRenderer" {
import {$RenderBuffers, $RenderBuffers$$Type} from "net.minecraft.client.renderer.RenderBuffers"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Particle} from "net.minecraft.client.particle.Particle"
import {$Frustum, $Frustum$$Type} from "net.minecraft.client.renderer.culling.Frustum"
import {$JukeboxSong$$Type} from "net.minecraft.world.item.JukeboxSong"
import {$Camera$$Type} from "net.minecraft.client.Camera"
import {$LevelRendererAccessor$$Interface as $LevelRendererAccessor$2$$Interface} from "com.simibubi.create.foundation.mixin.accessor.LevelRendererAccessor"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$SectionRenderDispatcher$RenderSection$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CullingDataCache$$Interface} from "net.irisshaders.iris.shadows.CullingDataCache"
import {$BlockDestructionProgress} from "net.minecraft.server.level.BlockDestructionProgress"
import {$LevelRendererAccessor$$Interface as $LevelRendererAccessor$0$$Interface} from "net.irisshaders.iris.mixin.LevelRendererAccessor"
import {$GameRenderer$$Type} from "net.minecraft.client.renderer.GameRenderer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$WorldRendererExtended$$Interface} from "org.embeddedt.embeddium.impl.world.WorldRendererExtended"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$WorldRendererAccess$$Interface} from "blusunrize.immersiveengineering.mixin.accessors.client.WorldRendererAccess"
import {$VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$SectionRenderDispatcher} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$DeltaTracker$$Type} from "net.minecraft.client.DeltaTracker"
import {$ViewArea} from "net.minecraft.client.renderer.ViewArea"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$Long2ObjectMap} from "it.unimi.dsi.fastutil.longs.Long2ObjectMap"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$LevelRendererAccessor$$Interface as $LevelRendererAccessor$1$$Interface} from "ca.fxco.moreculling.mixin.accessors.LevelRendererAccessor"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RenderTarget} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$Collection$$Type} from "java.util.Collection"
import {$LightTexture$$Type} from "net.minecraft.client.renderer.LightTexture"
import {$EmbeddiumWorldRenderer} from "org.embeddedt.embeddium.impl.render.EmbeddiumWorldRenderer"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$AccessorLevelRenderer$$Interface} from "com.railwayteam.railways.mixin.client.AccessorLevelRenderer"
import {$LevelRendererAccessor$$Interface} from "dev.engine_room.flywheel.backend.mixin.LevelRendererAccessor"
import {$Int2ObjectMap} from "it.unimi.dsi.fastutil.ints.Int2ObjectMap"
import {$ParticleOptions$$Type} from "net.minecraft.core.particles.ParticleOptions"

export class $LevelRenderer implements $ResourceManagerReloadListener$$Interface, $AutoCloseable$$Interface, $AccessorLevelRenderer$$Interface, $LevelRendererAccessor$0$$Interface, $CullingDataCache$$Interface, $LevelRendererAccessor$1$$Interface, $WorldRendererAccess$$Interface, $LevelRendererAccessor$$Interface, $LevelRendererAccessor$2$$Interface, $WorldRendererExtended$$Interface {
 "renderBuffers": $RenderBuffers
 "renderedEntities": integer
 "level": $ClientLevel
static readonly "HALF_SECTION_SIZE": integer
static readonly "SECTION_SIZE": integer
 "viewArea": $ViewArea
readonly "destroyingBlocks": $Int2ObjectMap<($BlockDestructionProgress)>
 "lastViewDistance": integer
static readonly "DIRECTIONS": ($Direction)[]

constructor(arg0: $Minecraft$$Type, arg1: $EntityRenderDispatcher$$Type, arg2: $BlockEntityRenderDispatcher$$Type, arg3: $RenderBuffers$$Type)

public static "getLightColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type): integer
public static "getLightColor"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): integer
public "entityTarget"(): $RenderTarget
public "tick"(): void
public "getLevel"(): $ClientLevel
public "setLevel"(arg0: $ClientLevel$$Type): void
public "clear"(): void
public "close"(): void
public "resize"(arg0: integer, arg1: integer): void
public "getSectionRenderDispatcher"(): $SectionRenderDispatcher
public "getTotalSections"(): double
public "getLastViewDistance"(): double
public "getEntityStatistics"(): StringJS
public static "offsetFrustum"(arg0: $Frustum$$Type): $Frustum
public "addRecentlyCompiledSection"(arg0: $SectionRenderDispatcher$RenderSection$$Type): void
public "handler$zzi000$geckolib$captureRenderedEntities"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type, arg7: $CallbackInfo$$Type): void
public "renderSky"(arg0: $Matrix4f$$Type, arg1: $Matrix4f$$Type, arg2: float, arg3: $Camera$$Type, arg4: boolean, arg5: $Runnable$$Type): void
public "isSectionCompiled"(arg0: $BlockPos$$Type): boolean
public "renderHitOutline"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Entity$$Type, arg3: double, arg4: double, arg5: double, arg6: $BlockPos$$Type, arg7: $BlockState$$Type): void
public "saveState"(): void
public "restoreState"(): void
public "getEntityRenderDispatcher"(): $EntityRenderDispatcher
public "needsUpdate"(): void
public "graphicsChanged"(): void
public "renderLevel"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type): void
public "allChanged"(): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "sodium$getWorldRenderer"(): $EmbeddiumWorldRenderer
public "iterateVisibleBlockEntities"(arg0: $Consumer$$Type): void
public "getSectionStatistics"(): StringJS
public "callAddParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $Particle
public "invokeRenderSectionLayer"(arg0: $RenderType$$Type, arg1: double, arg2: double, arg3: double, arg4: $Matrix4f$$Type, arg5: $Matrix4f$$Type): void
public "invokeSetupRender"(arg0: $Camera$$Type, arg1: $Frustum$$Type, arg2: boolean, arg3: boolean): void
public "invokeRenderEntity"(arg0: $Entity$$Type, arg1: double, arg2: double, arg3: double, arg4: float, arg5: $PoseStack$$Type, arg6: $MultiBufferSource$$Type): void
public "getRenderBuffers"(): $RenderBuffers
public "setRenderBuffers"(arg0: $RenderBuffers$$Type): void
public "shouldRegenerateClouds"(): boolean
public "setShouldRegenerateClouds"(arg0: boolean): void
public "getDestructionProgress"(): $Long2ObjectMap
public "callRenderHitOutline"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Entity$$Type, arg3: double, arg4: double, arg5: double, arg6: $BlockPos$$Type, arg7: $BlockState$$Type): void
public "flywheel$getTicks"(): integer
public "create$getCullingFrustum"(): $Frustum
public "create$getCapturedFrustum"(): $Frustum
public "captureFrustum"(): void
public "initOutline"(): void
public "shouldShowEntityOutlines"(): boolean
public "tickRain"(arg0: $Camera$$Type): void
public "doEntityOutline"(): void
public "setSectionDirty"(arg0: integer, arg1: integer, arg2: integer): void
public "requestOutlineEffect"(): void
public "playJukeboxSong"(arg0: $Holder$$Type<($JukeboxSong)>, arg1: $BlockPos$$Type): void
public "notifyNearbyEntities"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "stopJukeboxSongAndNotifyNearby"(arg0: $BlockPos$$Type): void
public "addParticleInternal"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): $Particle
public "updateGlobalBlockEntities"(arg0: $Collection$$Type<($BlockEntity$$Type)>, arg1: $Collection$$Type<($BlockEntity$$Type)>): void
public "railways$getRenderBuffers"(): $RenderBuffers
public "invokeDoesMobEffectBlockSky"(arg0: $Camera$$Type): boolean
public "countRenderedSections"(): integer
public "hasRenderedAllSections"(): boolean
public "prepareCullFrustum"(arg0: $Vec3$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type): void
public "getTicks"(): integer
public "getFrustum"(): $Frustum
public "getItemEntityTarget"(): $RenderTarget
public "getCloudsTarget"(): $RenderTarget
public "getWeatherTarget"(): $RenderTarget
public "getParticlesTarget"(): $RenderTarget
public "getTranslucentTarget"(): $RenderTarget
public "handler$ble000$supermartijn642corelib$renderLevel"(deltaTracker: $DeltaTracker$$Type, bl: boolean, camera: $Camera$$Type, gameRenderer: $GameRenderer$$Type, lightTexture: $LightTexture$$Type, matrix4f: $Matrix4f$$Type, matrix4f2: $Matrix4f$$Type, ci: $CallbackInfo$$Type): void
public "renderClouds"(arg0: $PoseStack$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: float, arg4: double, arg5: double, arg6: double): void
public "handler$bmk000$patchouli$onRender"(arg0: $DeltaTracker$$Type, arg1: boolean, arg2: $Camera$$Type, arg3: $GameRenderer$$Type, arg4: $LightTexture$$Type, arg5: $Matrix4f$$Type, arg6: $Matrix4f$$Type, arg7: $CallbackInfo$$Type): void
public "killFrustum"(): void
public "handler$bfa000$embeddium$renderCloudsFast"(arg0: $PoseStack$$Type, arg1: $Matrix4f$$Type, arg2: $Matrix4f$$Type, arg3: float, arg4: double, arg5: double, arg6: double, arg7: $CallbackInfo$$Type): void
public static "renderShape"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float): void
public static "renderVoxelShape"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $VoxelShape$$Type, arg3: double, arg4: double, arg5: double, arg6: float, arg7: float, arg8: float, arg9: float, arg10: boolean): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float, arg13: float, arg14: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $AABB$$Type, arg3: float, arg4: float, arg5: float, arg6: float): void
public static "renderLineBox"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "renderLineBox"(arg0: $VertexConsumer$$Type, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: float, arg8: float, arg9: float, arg10: float): void
public static "addChainedFilledBoxVertices"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "addChainedFilledBoxVertices"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float): void
public static "renderFace"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type, arg2: $Direction$$Type, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float): void
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): void
public "addParticle"(arg0: $ParticleOptions$$Type, arg1: boolean, arg2: boolean, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double, arg8: double): void
public "levelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "globalLevelEvent"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "setBlocksDirty"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): void
public "onChunkLoaded"(arg0: $ChunkPos$$Type): void
public "blockChanged"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: integer): void
public "setBlockDirty"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type): void
public "setSectionDirtyWithNeighbors"(arg0: integer, arg1: integer, arg2: integer): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "sectionRenderDispatcher"(): $SectionRenderDispatcher
get "totalSections"(): double
get "entityStatistics"(): StringJS
get "entityRenderDispatcher"(): $EntityRenderDispatcher
get "sectionStatistics"(): StringJS
get "destructionProgress"(): $Long2ObjectMap
get "ticks"(): integer
get "frustum"(): $Frustum
get "itemEntityTarget"(): $RenderTarget
get "cloudsTarget"(): $RenderTarget
get "weatherTarget"(): $RenderTarget
get "particlesTarget"(): $RenderTarget
get "translucentTarget"(): $RenderTarget
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LevelRenderer$$Type = ($LevelRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LevelRenderer$$Original = $LevelRenderer;}
declare module "net.minecraft.client.renderer.block.model.BlockModel$GuiLight" {
import {$Enum} from "java.lang.Enum"

export class $BlockModel$GuiLight extends $Enum<($BlockModel$GuiLight)> {
static readonly "SIDE": $BlockModel$GuiLight
static readonly "FRONT": $BlockModel$GuiLight

public static "values"(): ($BlockModel$GuiLight)[]
public static "valueOf"(arg0: StringJS): $BlockModel$GuiLight
public static "getByName"(arg0: StringJS): $BlockModel$GuiLight
public "getSerializedName"(): StringJS
public "lightLikeBlock"(): boolean
get "serializedName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockModel$GuiLight$$Type = (("front") | ("side"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockModel$GuiLight$$Original = $BlockModel$GuiLight;}
declare module "net.minecraft.client.renderer.SectionBufferBuilderPack" {
import {$Map} from "java.util.Map"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$ByteBufferBuilder} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$SectionBufferBuilderPackAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.SectionBufferBuilderPackAccessor"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionBufferBuilderPack implements $AutoCloseable$$Interface, $SectionBufferBuilderPackAccessor$$Interface {
static readonly "TOTAL_BUFFERS_SIZE": integer

constructor()

public "getBuffers"(): $Map
public "buffer"(arg0: $RenderType$$Type): $ByteBufferBuilder
public "close"(): void
public "clearAll"(): void
public "discardAll"(): void
get "buffers"(): $Map
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionBufferBuilderPack$$Type = ($SectionBufferBuilderPack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionBufferBuilderPack$$Original = $SectionBufferBuilderPack;}
declare module "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$ColorLogicStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$ColorLogicStateShard$$Type = ($RenderStateShard$ColorLogicStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$ColorLogicStateShard$$Original = $RenderStateShard$ColorLogicStateShard;}
declare module "net.minecraft.client.renderer.GpuWarnlistManager$Preparations" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $GpuWarnlistManager$Preparations {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GpuWarnlistManager$Preparations$$Type = ($GpuWarnlistManager$Preparations);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GpuWarnlistManager$Preparations$$Original = $GpuWarnlistManager$Preparations;}
declare module "net.minecraft.client.renderer.debug.VillageSectionsDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export class $VillageSectionsDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
public "setVillageSection"(arg0: $SectionPos$$Type): void
public "setNotVillageSection"(arg0: $SectionPos$$Type): void
public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
set "villageSection"(value: $SectionPos$$Type)
set "notVillageSection"(value: $SectionPos$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillageSectionsDebugRenderer$$Type = ($VillageSectionsDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillageSectionsDebugRenderer$$Original = $VillageSectionsDebugRenderer;}
declare module "net.minecraft.client.renderer.debug.LightSectionDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $LightSectionDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type, arg1: $LightLayer$$Type)

public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "clear"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightSectionDebugRenderer$$Type = ($LightSectionDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightSectionDebugRenderer$$Original = $LightSectionDebugRenderer;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider" {
import {$BlockEntityRenderer, $BlockEntityRenderer$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$BlockEntityRendererProvider$Context, $BlockEntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BlockEntityRendererProvider$$Interface<T extends $BlockEntity> {

(arg0: $BlockEntityRendererProvider$Context): $BlockEntityRenderer$$Type<(T)>
}

export class $BlockEntityRendererProvider<T extends $BlockEntity> implements $BlockEntityRendererProvider$$Interface {
 "create"(arg0: $BlockEntityRendererProvider$Context$$Type): $BlockEntityRenderer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRendererProvider$$Type<T> = ((arg0: $BlockEntityRendererProvider$Context) => $BlockEntityRenderer$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRendererProvider$$Original<T> = $BlockEntityRendererProvider<(T)>;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Camera, $Camera$$Type} from "net.minecraft.client.Camera"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$BlockEntityRenderer} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderer"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"

export class $BlockEntityRenderDispatcher implements $ResourceManagerReloadListener$$Interface {
 "cameraHitResult": $HitResult
 "level": $Level
 "camera": $Camera

constructor(arg0: $Font$$Type, arg1: $EntityModelSet$$Type, arg2: $Supplier$$Type<($BlockRenderDispatcher$$Type)>, arg3: $Supplier$$Type<($ItemRenderer$$Type)>, arg4: $Supplier$$Type<($EntityRenderDispatcher$$Type)>)

public "handler$ekb000$entityculling$render"(blockEntity: $BlockEntity$$Type, f: float, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, info: $CallbackInfo$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "prepare"(arg0: $Level$$Type, arg1: $Camera$$Type, arg2: $HitResult$$Type): void
public "render"<E extends $BlockEntity>(arg0: E, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type): void
public "renderItem"<E extends $BlockEntity>(arg0: E, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: integer, arg4: integer): boolean
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "getRenderer"(blockEntity: $BlockEntity$$Type): $BlockEntityRenderer
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRenderDispatcher$$Type = ($BlockEntityRenderDispatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRenderDispatcher$$Original = $BlockEntityRenderDispatcher;}
declare module "net.minecraft.client.renderer.entity.RenderLayerParent" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EntityModel} from "net.minecraft.client.model.EntityModel"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $RenderLayerParent$$Interface<T extends $Entity, M extends $EntityModel<(object)>> {
get "model"(): M
}

export class $RenderLayerParent<T extends $Entity, M extends $EntityModel<(object)>> implements $RenderLayerParent$$Interface {
 "getTextureLocation"(arg0: T): $ResourceLocation
 "getModel"(): M
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderLayerParent$$Type<T, M> = ($RenderLayerParent<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderLayerParent$$Original<T, M> = $RenderLayerParent<(T), (M)>;}
declare module "net.minecraft.client.renderer.block.model.FaceBakery" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$BlockFaceUV, $BlockFaceUV$$Type} from "net.minecraft.client.renderer.block.model.BlockFaceUV"
import {$BlockElementRotation$$Type} from "net.minecraft.client.renderer.block.model.BlockElementRotation"
import {$Transformation$$Type} from "com.mojang.math.Transformation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$Vector3f$$Type} from "org.joml.Vector3f"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"

export class $FaceBakery {
static readonly "VERTEX_INT_SIZE": integer
static readonly "UV_INDEX": integer
static readonly "VERTEX_COUNT": integer

constructor()

public "bakeQuad"(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $BlockElementFace$$Type, arg3: $TextureAtlasSprite$$Type, arg4: $Direction$$Type, arg5: $ModelState$$Type, arg6: $BlockElementRotation$$Type, arg7: boolean): $BakedQuad
public static "recomputeUVs"(arg0: $BlockFaceUV$$Type, arg1: $Direction$$Type, arg2: $Transformation$$Type): $BlockFaceUV
public static "calculateFacing"(arg0: (integer)[]): $Direction
public "recalculateWinding"(arg0: (integer)[], arg1: $Direction$$Type): void
public "applyModelRotation"(arg0: $Vector3f$$Type, arg1: $Transformation$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FaceBakery$$Type = ($FaceBakery);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FaceBakery$$Original = $FaceBakery;}
declare module "net.minecraft.client.renderer.entity.LivingEntityRenderer" {
import {$RenderLayer$$Type} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$LivingEntityRendererETFTextureGetter$$Interface} from "journeymap.client.render.draw.LivingEntityRendererETFTextureGetter"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$LivingEntityRendererAccessor$$Interface as $LivingEntityRendererAccessor$1$$Interface} from "net.sweenus.simplyswords.mixin.client.LivingEntityRendererAccessor"
import {$LivingEntityRendererAccessor$$Interface as $LivingEntityRendererAccessor$0$$Interface} from "artifacts.mixin.accessors.client.LivingEntityRendererAccessor"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RenderLayerParent$$Interface} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LivingEntityRendererAccessor$$Interface} from "io.wispforest.accessories.mixin.client.LivingEntityRendererAccessor"
import {$AccessorLivingEntityRenderer$$Interface} from "com.railwayteam.railways.mixin.client.AccessorLivingEntityRenderer"

export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<(object)>> extends $EntityRenderer<(T)> implements $RenderLayerParent$$Interface<(T), (M)>, $AccessorLivingEntityRenderer$$Interface, $LivingEntityRendererAccessor$$Interface, $LivingEntityRendererETFTextureGetter$$Interface, $LivingEntityRendererAccessor$0$$Interface, $LivingEntityRendererAccessor$1$$Interface {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer

constructor(arg0: $EntityRendererProvider$Context$$Type, arg1: M, arg2: float)

public "handler$ego000$enderio$test"(arg0: $LivingEntity$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: $CallbackInfo$$Type): void
public static "isEntityUpsideDown"(arg0: $LivingEntity$$Type): boolean
public "handler$zcd000$immersive_aircraft$render"(entity: $LivingEntity$$Type, poseStack: $PoseStack$$Type, bob: float, yBodyRot: float, partialTick: float, scale: float, ci: $CallbackInfo$$Type): void
public "getETFTextureLocation"(arg0: $LivingEntity$$Type): $ResourceLocation
public "callSetupRotations"(arg0: $LivingEntity$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float): void
public "invokeAddFeature"(arg0: $RenderLayer$$Type): boolean
public static "getOverlayCoords"(arg0: $LivingEntity$$Type, arg1: float): integer
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getModel"(): M
public "getLayers"(): $List
public "addLayer"(arg0: $RenderLayer$$Type<(T), (M)>): boolean
public "getTextureLocation"(arg0: T): $ResourceLocation
get "model"(): M
get "layers"(): $List
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityRenderer$$Type<T, M> = ($LivingEntityRenderer<(T), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityRenderer$$Original<T, M> = $LivingEntityRenderer<(T), (M)>;}
declare module "net.minecraft.client.renderer.MultiBufferSource$BufferSource" {
import {$MemoryTrackingBuffer$$Interface} from "net.irisshaders.batchedentityrendering.impl.MemoryTrackingBuffer"
import {$MultiBufferSource$$Interface} from "net.minecraft.client.renderer.MultiBufferSource"
import {$BufferBuilder$$Type} from "com.mojang.blaze3d.vertex.BufferBuilder"
import {$AccessorMultiBufferSource$$Interface} from "vazkii.patchouli.mixin.client.AccessorMultiBufferSource"
import {$SequencedMap, $SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder, $ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$BufferSourceAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.BufferSourceAccessor"

export class $MultiBufferSource$BufferSource implements $MultiBufferSource$$Interface, $AccessorMultiBufferSource$$Interface, $BufferSourceAccessor$$Interface, $MemoryTrackingBuffer$$Interface {
 "fixedBuffers": $SequencedMap<($RenderType), ($ByteBufferBuilder)>
 "sharedBuffer": $ByteBufferBuilder

constructor(arg0: $ByteBufferBuilder$$Type, arg1: $SequencedMap$$Type<($RenderType$$Type), ($ByteBufferBuilder$$Type)>)

public "getFallbackBuffer"(): $ByteBufferBuilder
public "getFixedBuffers"(): $SequencedMap
public "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "endLastBatch"(): void
public "endBatch"(arg0: $RenderType$$Type, arg1: $BufferBuilder$$Type): void
public "endBatch"(): void
public "endBatch"(arg0: $RenderType$$Type): void
public "getAllocatedSize"(): long
public "getUsedSize"(): long
public "freeAndDeleteBuffer"(): void
public static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(layerBuffers: $SequencedMap$$Type, fallbackBuffer: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
get "fallbackBuffer"(): $ByteBufferBuilder
get "allocatedSize"(): long
get "usedSize"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBufferSource$BufferSource$$Type = ($MultiBufferSource$BufferSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBufferSource$BufferSource$$Original = $MultiBufferSource$BufferSource;}
declare module "net.minecraft.client.renderer.BlockEntityWithoutLevelRenderer" {
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"
import {$EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"

export class $BlockEntityWithoutLevelRenderer implements $ResourceManagerReloadListener$$Interface {
constructor(arg0: $BlockEntityRenderDispatcher$$Type, arg1: $EntityModelSet$$Type)

public "handler$zzg000$geckolib$renderGeckolibItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer, arg6: $CallbackInfo$$Type): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "renderByItem"(arg0: $ItemStack$$Type, arg1: $ItemDisplayContext$$Type, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityWithoutLevelRenderer$$Type = ($BlockEntityWithoutLevelRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityWithoutLevelRenderer$$Original = $BlockEntityWithoutLevelRenderer;}
declare module "net.minecraft.client.renderer.texture.TextureAtlas" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map} from "java.util.Map"
import {$SpriteFinderImpl$SpriteFinderAccess$$Interface as $SpriteFinderImpl$SpriteFinderAccess$0$$Interface} from "appeng.thirdparty.fabric.SpriteFinderImpl$SpriteFinderAccess"
import {$PBRAtlasHolder} from "net.irisshaders.iris.pbr.texture.PBRAtlasHolder"
import {$Tickable$$Interface} from "net.minecraft.client.renderer.texture.Tickable"
import {$SpriteFinderImpl} from "dev.technici4n.moderndynamics.thirdparty.fabric.SpriteFinderImpl"
import {$List} from "java.util.List"
import {$SpriteContents} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$TextureAtlasExtension$$Interface} from "net.irisshaders.iris.pbr.texture.TextureAtlasExtension"
import {$Dumpable$$Interface} from "net.minecraft.client.renderer.texture.Dumpable"
import {$AbstractTexture} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$SpriteLoader$Preparations$$Type} from "net.minecraft.client.renderer.texture.SpriteLoader$Preparations"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$TextureAtlasAccessor$$Interface} from "net.irisshaders.iris.mixin.texture.TextureAtlasAccessor"
import {$Path$$Type} from "java.nio.file.Path"
import {$SpriteFinderImpl$SpriteFinderAccess$$Interface} from "dev.technici4n.moderndynamics.thirdparty.fabric.SpriteFinderImpl$SpriteFinderAccess"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TextureAtlas extends $AbstractTexture implements $Dumpable$$Interface, $Tickable$$Interface, $SpriteFinderImpl$SpriteFinderAccess$$Interface, $TextureAtlasAccessor$$Interface, $TextureAtlasExtension$$Interface, $SpriteFinderImpl$SpriteFinderAccess$0$$Interface {
static readonly "NOT_ASSIGNED": integer
/**
 * 
 * @deprecated
 */
static readonly "LOCATION_BLOCKS": $ResourceLocation
/**
 * 
 * @deprecated
 */
static readonly "LOCATION_PARTICLES": $ResourceLocation
 "texturesByName": $Map<($ResourceLocation), ($TextureAtlasSprite)>
 "sprites": $List<($SpriteContents)>

constructor(arg0: $ResourceLocation$$Type)

public "getWidth"(): integer
public "getHeight"(): integer
public "tick"(): void
public "load"(arg0: $ResourceManager$$Type): void
public "location"(): $ResourceLocation
public "getTexturesByName"(): $Map
public "getMipLevel"(): integer
public "callGetWidth"(): integer
public "callGetHeight"(): integer
public "fabric_spriteFinder"(): $SpriteFinderImpl
public "clearTextureData"(): void
public "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
public "cycleAnimationFrames"(): void
public "updateFilter"(arg0: $SpriteLoader$Preparations$$Type): void
public "getTextures"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
public "getPBRHolder"(): $PBRAtlasHolder
public "getOrCreatePBRHolder"(): $PBRAtlasHolder
public "upload"(arg0: $SpriteLoader$Preparations$$Type): void
public "getSprite"(arg0: $ResourceLocation$$Type): $TextureAtlasSprite
public "maxSupportedTextureSize"(): integer
get "width"(): integer
get "height"(): integer
get "mipLevel"(): integer
get "textures"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
get "PBRHolder"(): $PBRAtlasHolder
get "orCreatePBRHolder"(): $PBRAtlasHolder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlas$$Type = ($TextureAtlas);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlas$$Original = $TextureAtlas;}
declare module "net.minecraft.client.renderer.RenderType$OutlineProperty" {
import {$Enum} from "java.lang.Enum"

export class $RenderType$OutlineProperty extends $Enum<($RenderType$OutlineProperty)> {
static readonly "IS_OUTLINE": $RenderType$OutlineProperty
static readonly "NONE": $RenderType$OutlineProperty
static readonly "AFFECTS_OUTLINE": $RenderType$OutlineProperty

public "toString"(): StringJS
public static "values"(): ($RenderType$OutlineProperty)[]
public static "valueOf"(arg0: StringJS): $RenderType$OutlineProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$OutlineProperty$$Type = (("none") | ("is_outline") | ("affects_outline"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$OutlineProperty$$Original = $RenderType$OutlineProperty;}
declare module "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$LayeringStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$LayeringStateShard$$Type = ($RenderStateShard$LayeringStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$LayeringStateShard$$Original = $RenderStateShard$LayeringStateShard;}
declare module "net.minecraft.client.renderer.block.model.BlockElement" {
import {$EpsilonizableBlockElement$$Interface} from "org.embeddedt.embeddium.impl.model.EpsilonizableBlockElement"
import {$Map, $Map$$Type} from "java.util.Map"
import {$BlockElementRotation, $BlockElementRotation$$Type} from "net.minecraft.client.renderer.block.model.BlockElementRotation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockElementFace, $BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$ExtraFaceData, $ExtraFaceData$$Type} from "net.neoforged.neoforge.client.model.ExtraFaceData"

export class $BlockElement implements $EpsilonizableBlockElement$$Interface {
 "rotation": $BlockElementRotation
readonly "shade": boolean
readonly "from": $Vector3f
readonly "to": $Vector3f
readonly "faces": $Map<($Direction), ($BlockElementFace)>

constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Map$$Type<($Direction$$Type), ($BlockElementFace$$Type)>, arg3: $BlockElementRotation$$Type, arg4: boolean)
constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Map$$Type<($Direction$$Type), ($BlockElementFace$$Type)>, arg3: $BlockElementRotation$$Type, arg4: boolean, arg5: $ExtraFaceData$$Type)

public "getFaceData"(): $ExtraFaceData
public "uvsByFace"(arg0: $Direction$$Type): (float)[]
public "embeddium$epsilonize"(): void
public "setFaceData"(arg0: $ExtraFaceData$$Type): void
get "faceData"(): $ExtraFaceData
set "faceData"(value: $ExtraFaceData$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockElement$$Type = ($BlockElement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockElement$$Original = $BlockElement;}
declare module "net.minecraft.client.renderer.entity.ItemFrameRenderer" {
import {$EntityRenderer} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ItemFrame, $ItemFrame$$Type} from "net.minecraft.world.entity.decoration.ItemFrame"
import {$EntityRendererProvider$Context$$Type} from "net.minecraft.client.renderer.entity.EntityRendererProvider$Context"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<(T)> {
 "shadowRadius": float
static readonly "LEASH_RENDER_STEPS": integer
static readonly "BRIGHT_MAP_LIGHT_ADJUSTMENT": integer
static readonly "GLOW_FRAME_BRIGHTNESS": integer

constructor(arg0: $EntityRendererProvider$Context$$Type)

public "getTextureLocation"(arg0: T): $ResourceLocation
public "getTextureLocation"(arg0: $Entity$$Type): $ResourceLocation
public "render"(arg0: T, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "render"(arg0: $Entity$$Type, arg1: float, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer): void
public "getRenderOffset"(arg0: $Entity$$Type, arg1: float): $Vec3
public "getRenderOffset"(arg0: T, arg1: float): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameRenderer$$Type<T> = ($ItemFrameRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFrameRenderer$$Original<T> = $ItemFrameRenderer<(T)>;}
declare module "net.minecraft.client.renderer.MultiBufferSource" {
import {$MultiBufferSource$BufferSource} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export interface $MultiBufferSource$$Interface {

(arg0: $RenderType): $VertexConsumer$$Type
}

export class $MultiBufferSource implements $MultiBufferSource$$Interface {
 "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
static "immediateWithBuffers"(layerBuffers: $SequencedMap$$Type, fallbackBuffer: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiBufferSource$$Type = ((arg0: $RenderType) => $VertexConsumer$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiBufferSource$$Original = $MultiBufferSource;}
declare module "net.minecraft.client.renderer.entity.layers.HumanoidArmorLayer" {
import {$RenderLayer} from "net.minecraft.client.renderer.entity.layers.RenderLayer"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$ArmorRenderingExtension$$Interface} from "io.wispforest.accessories.api.client.ArmorRenderingExtension"
import {$ModelManager$$Type} from "net.minecraft.client.resources.model.ModelManager"
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$RenderLayerParent$$Type} from "net.minecraft.client.renderer.entity.RenderLayerParent"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$HumanoidArmorLayerAccessor$$Interface} from "com.simibubi.create.foundation.mixin.accessor.HumanoidArmorLayerAccessor"

export class $HumanoidArmorLayer<T extends $LivingEntity, M extends $HumanoidModel<(object)>, A extends $HumanoidModel<(object)>> extends $RenderLayer<(T), (M)> implements $ArmorRenderingExtension$$Interface, $HumanoidArmorLayerAccessor$$Interface {
constructor(arg0: $RenderLayerParent$$Type<(T), (M)>, arg1: A, arg2: A, arg3: $ModelManager$$Type)

public "create$getInnerModel"(): $HumanoidModel
public "create$callSetPartVisibility"(arg0: $HumanoidModel$$Type, arg1: $EquipmentSlot$$Type): void
public "create$getOuterModel"(): $HumanoidModel
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: $Entity$$Type, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer, arg3: T, arg4: float, arg5: float, arg6: float, arg7: float, arg8: float, arg9: float): void
public "wrapWithCondition$zzh000$geckolib$wrapArmorPieceRender"(arg0: $HumanoidArmorLayer$$Type, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: $LivingEntity$$Type, arg4: $EquipmentSlot$$Type, arg5: integer, arg6: $HumanoidModel$$Type, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: float): boolean
public "handler$ccp000$simplehats$renderArmorPiece"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: $LivingEntity$$Type, arg3: $EquipmentSlot$$Type, arg4: integer, arg5: $HumanoidModel$$Type, arg6: float, arg7: float, arg8: float, arg9: float, arg10: float, arg11: float, arg12: $CallbackInfo$$Type): void
public "renderEquipmentStack"(stack: $ItemStack$$Type, poseStack: $PoseStack$$Type, multiBufferSource: $MultiBufferSource$$Type, livingEntity: $LivingEntity$$Type, equipmentSlot: $EquipmentSlot$$Type, light: integer, limbSwing: float, limbSwingAmount: float, partialTicks: float, ageInTicks: float, netHeadYaw: float, headPitch: float): void
public static "getArmorLocationCache$create_$md$a93e73$3"(): $Map
public static "create$getArmorLocationCache"(): $Map<(StringJS), ($ResourceLocation)>
public static get "armorLocationCache$create_$md$a93e73$3"(): $Map
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HumanoidArmorLayer$$Type<T, M, A> = ($HumanoidArmorLayer<(T), (M), (A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HumanoidArmorLayer$$Original<T, M, A> = $HumanoidArmorLayer<(T), (M), (A)>;}
declare module "net.minecraft.client.renderer.texture.SpriteTicker" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"

export interface $SpriteTicker$$Interface extends $AutoCloseable$$Interface {
}

export class $SpriteTicker implements $SpriteTicker$$Interface {
 "close"(): void
 "tickAndUpload"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteTicker$$Type = ($SpriteTicker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteTicker$$Original = $SpriteTicker;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRenderer" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$IBlockEntityRendererExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IBlockEntityRendererExtension"

export interface $BlockEntityRenderer$$Interface<T extends $BlockEntity> extends $IBlockEntityRendererExtension$$Interface<(T)> {

(arg0: T, arg1: float, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: integer, arg5: integer): void
get "viewDistance"(): integer
}

export class $BlockEntityRenderer<T extends $BlockEntity> implements $BlockEntityRenderer$$Interface {
 "getViewDistance"(): integer
 "render"(arg0: T, arg1: float, arg2: $PoseStack$$Type, arg3: $MultiBufferSource$$Type, arg4: integer, arg5: integer): void
 "shouldRenderOffScreen"(arg0: T): boolean
 "shouldRender"(arg0: T, arg1: $Vec3$$Type): boolean
 "getRenderBoundingBox"(arg0: T): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRenderer$$Type<T> = ((arg0: T, arg1: float, arg2: $PoseStack, arg3: $MultiBufferSource, arg4: integer, arg5: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRenderer$$Original<T> = $BlockEntityRenderer<(T)>;}
declare module "net.minecraft.client.renderer.texture.AbstractTexture" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $AbstractTexture implements $AutoCloseable$$Interface {
static readonly "NOT_ASSIGNED": integer

constructor()

public "setFilter"(arg0: boolean, arg1: boolean): void
public "reset"(arg0: $TextureManager$$Type, arg1: $ResourceManager$$Type, arg2: $ResourceLocation$$Type, arg3: $Executor$$Type): void
public "load"(arg0: $ResourceManager$$Type): void
public "getId"(): integer
public "close"(): void
public "bind"(): void
public "setBlurMipmap"(arg0: boolean, arg1: boolean): void
public "restoreLastBlurMipmap"(): void
public "releaseId"(): void
get "id"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTexture$$Type = ($AbstractTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTexture$$Original = $AbstractTexture;}
declare module "net.minecraft.client.renderer.GpuWarnlistManager" {
import {$GpuWarnlistManager$Preparations} from "net.minecraft.client.renderer.GpuWarnlistManager$Preparations"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"

export class $GpuWarnlistManager extends $SimplePreparableReloadListener<($GpuWarnlistManager$Preparations)> {
constructor()

public "dismissWarningAndSkipFabulous"(): void
public "hasWarnings"(): boolean
public "dismissWarning"(): void
public "isShowingWarning"(): boolean
public "resetWarnings"(): void
public "getRendererWarnings"(): StringJS
public "getVersionWarnings"(): StringJS
public "getVendorWarnings"(): StringJS
public "getAllWarnings"(): StringJS
public "showWarning"(): void
public "willShowWarning"(): boolean
public "isSkippingFabulous"(): boolean
get "showingWarning"(): boolean
get "rendererWarnings"(): StringJS
get "versionWarnings"(): StringJS
get "vendorWarnings"(): StringJS
get "allWarnings"(): StringJS
get "skippingFabulous"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GpuWarnlistManager$$Type = ($GpuWarnlistManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GpuWarnlistManager$$Original = $GpuWarnlistManager;}
declare module "net.minecraft.client.renderer.RenderStateShard$CullStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderStateShard$BooleanStateShard} from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$CullStateShard extends $RenderStateShard$BooleanStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean)

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$CullStateShard$$Type = ($RenderStateShard$CullStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$CullStateShard$$Original = $RenderStateShard$CullStateShard;}
declare module "net.minecraft.client.renderer.RenderStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderStateShardAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.RenderStateShardAccessor"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShardAccessor$$Interface as $RenderStateShardAccessor$0$$Interface} from "net.irisshaders.iris.mixin.rendertype.RenderStateShardAccessor"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderTypeAccess$$Interface} from "blusunrize.immersiveengineering.mixin.accessors.client.RenderTypeAccess"

export class $RenderStateShard implements $RenderStateShardAccessor$0$$Interface, $RenderStateShardAccessor$$Interface, $RenderTypeAccess$$Interface {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

public "getName"(): StringJS
public "toString"(): StringJS
public static "getTranslucentTransparency$oculus_$md$a93e73$0"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY$oculus_$md$a93e73$1"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY$oculus_$md$a93e73$2"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY$oculus_$md$a93e73$3"(): $RenderStateShard$TransparencyStateShard
public "setupRenderState"(): void
public "clearRenderState"(): void
public static "setupGlintTexturing"(arg0: float): void
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency$oculus_$md$a93e73$0"(): $RenderStateShard$TransparencyStateShard
public static get "NO_TRANSPARENCY$oculus_$md$a93e73$1"(): $RenderStateShard$TransparencyStateShard
public static get "GLINT_TRANSPARENCY$oculus_$md$a93e73$2"(): $RenderStateShard$TransparencyStateShard
public static get "CRUMBLING_TRANSPARENCY$oculus_$md$a93e73$3"(): $RenderStateShard$TransparencyStateShard
get "upRenderState"(): void
public static set "upGlintTexturing"(value: float)
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$$Type = ($RenderStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$$Original = $RenderStateShard;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask" {
import {$Comparable$$Interface} from "java.lang.Comparable"

export class $SectionRenderDispatcher$RenderSection$CompileTask implements $Comparable$$Interface<($SectionRenderDispatcher$RenderSection$CompileTask)> {
public "compareTo"(arg0: $SectionRenderDispatcher$RenderSection$CompileTask$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$RenderSection$CompileTask$$Type = ($SectionRenderDispatcher$RenderSection$CompileTask);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$RenderSection$CompileTask$$Original = $SectionRenderDispatcher$RenderSection$CompileTask;}
declare module "net.minecraft.client.renderer.texture.SpriteLoader$Preparations" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture, $CompletableFuture$$Type} from "java.util.concurrent.CompletableFuture"
import {$Record} from "java.lang.Record"

export class $SpriteLoader$Preparations extends $Record {
constructor(width: integer, height: integer, mipLevel: integer, missing: $TextureAtlasSprite$$Type, regions: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, readyForUpload: $CompletableFuture$$Type<(void)>)

public "readyForUpload"(): $CompletableFuture<(void)>
public "waitForUpload"(): $CompletableFuture<($SpriteLoader$Preparations)>
public "regions"(): $Map<($ResourceLocation), ($TextureAtlasSprite)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "width"(): integer
public "height"(): integer
public "missing"(): $TextureAtlasSprite
public "mipLevel"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteLoader$Preparations$$Type = ({"width"?: integer, "missing"?: $TextureAtlasSprite$$Type, "height"?: integer, "regions"?: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, "mipLevel"?: integer, "readyForUpload"?: $CompletableFuture$$Type<(void)>}) | ([width?: integer, missing?: $TextureAtlasSprite$$Type, height?: integer, regions?: $Map$$Type<($ResourceLocation$$Type), ($TextureAtlasSprite$$Type)>, mipLevel?: integer, readyForUpload?: $CompletableFuture$$Type<(void)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteLoader$Preparations$$Original = $SpriteLoader$Preparations;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection" {
import {$SectionRenderDispatcher$RenderSection$CompileTask} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$RenderSection$CompileTask"
import {$VertexBuffer} from "com.mojang.blaze3d.vertex.VertexBuffer"
import {$RenderRegionCache$$Type} from "net.minecraft.client.renderer.chunk.RenderRegionCache"
import {$AtomicReference} from "java.util.concurrent.atomic.AtomicReference"
import {$SectionRenderDispatcher$CompiledSection} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$CompiledSection"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SectionRenderDispatcher$$Type} from "net.minecraft.client.renderer.chunk.SectionRenderDispatcher"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionRenderDispatcher$RenderSection {
readonly "compiled": $AtomicReference<($SectionRenderDispatcher$CompiledSection)>
static readonly "SIZE": integer
readonly "index": integer

constructor(arg0: $SectionRenderDispatcher$$Type, arg1: integer, arg2: integer, arg3: integer, arg4: integer)

public "resortTransparency"(arg0: $RenderType$$Type, arg1: $SectionRenderDispatcher$$Type): boolean
public "createCompileTask"(arg0: $RenderRegionCache$$Type): $SectionRenderDispatcher$RenderSection$CompileTask
public "isAxisAlignedWith"(arg0: integer, arg1: integer, arg2: integer): boolean
public "releaseBuffers"(): void
public "compileSync"(arg0: $RenderRegionCache$$Type): void
public "setDirty"(arg0: boolean): void
public "setOrigin"(arg0: integer, arg1: integer, arg2: integer): void
public "getBuffer"(arg0: $RenderType$$Type): $VertexBuffer
public "isDirty"(): boolean
public "getOrigin"(): $BlockPos
public "getCompiled"(): $SectionRenderDispatcher$CompiledSection
public "isDirtyFromPlayer"(): boolean
public "setNotDirty"(): void
public "rebuildSectionAsync"(arg0: $SectionRenderDispatcher$$Type, arg1: $RenderRegionCache$$Type): void
public "getBoundingBox"(): $AABB
public "hasAllNeighbors"(): boolean
public "getRelativeOrigin"(arg0: $Direction$$Type): $BlockPos
set "dirty"(value: boolean)
get "dirty"(): boolean
get "origin"(): $BlockPos
get "dirtyFromPlayer"(): boolean
get "notDirty"(): void
get "boundingBox"(): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$RenderSection$$Type = ($SectionRenderDispatcher$RenderSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$RenderSection$$Original = $SectionRenderDispatcher$RenderSection;}
declare module "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$WriteMaskStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean, arg1: boolean)

public "toString"(): StringJS
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$WriteMaskStateShard$$Type = ($RenderStateShard$WriteMaskStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$WriteMaskStateShard$$Original = $RenderStateShard$WriteMaskStateShard;}
declare module "net.minecraft.client.renderer.block.model.ItemOverrides" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$List$$Type} from "java.util.List"
import {$BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$ItemOverrides$BakedOverride} from "net.minecraft.client.renderer.block.model.ItemOverrides$BakedOverride"
import {$UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$Function$$Type} from "java.util.function.Function"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"
import {$ItemOverride$$Type} from "net.minecraft.client.renderer.block.model.ItemOverride"

export class $ItemOverrides {
static readonly "NO_OVERRIDE": float
static readonly "EMPTY": $ItemOverrides

constructor(arg0: $ModelBaker$$Type, arg1: $UnbakedModel$$Type, arg2: $List$$Type<($ItemOverride$$Type)>, arg3: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>)
/**
 * 
 * @deprecated
 */
constructor(arg0: $ModelBaker$$Type, arg1: $BlockModel$$Type, arg2: $List$$Type<($ItemOverride$$Type)>)

public "resolve"(arg0: $BakedModel$$Type, arg1: $ItemStack$$Type, arg2: $ClientLevel$$Type, arg3: $LivingEntity$$Type, arg4: integer): $BakedModel
public "getOverrides"(): $ImmutableList<($ItemOverrides$BakedOverride)>
get "overrides"(): $ImmutableList<($ItemOverrides$BakedOverride)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverrides$$Type = ($ItemOverrides);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverrides$$Original = $ItemOverrides;}
declare module "net.minecraft.client.renderer.OutlineBufferSource" {
import {$OutlineBufferSourceAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.OutlineBufferSourceAccessor"
import {$MultiBufferSource$$Interface} from "net.minecraft.client.renderer.MultiBufferSource"
import {$MultiBufferSource$BufferSource, $MultiBufferSource$BufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$SequencedMap$$Type} from "java.util.SequencedMap"
import {$ByteBufferBuilder$$Type} from "com.mojang.blaze3d.vertex.ByteBufferBuilder"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $OutlineBufferSource implements $MultiBufferSource$$Interface, $OutlineBufferSourceAccessor$$Interface {
readonly "outlineBufferSource": $MultiBufferSource$BufferSource

constructor(arg0: $MultiBufferSource$BufferSource$$Type)

public "getOutlineBufferSource"(): $MultiBufferSource$BufferSource
public "setColor"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): void
public "getBuffer"(arg0: $RenderType$$Type): $VertexConsumer
public "endOutlineBatch"(): void
public static "immediate"(arg0: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
public static "immediateWithBuffers"(layerBuffers: $SequencedMap$$Type, fallbackBuffer: $ByteBufferBuilder$$Type): $MultiBufferSource$BufferSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutlineBufferSource$$Type = ($OutlineBufferSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutlineBufferSource$$Original = $OutlineBufferSource;}
declare module "net.minecraft.client.renderer.blockentity.BlockEntityRendererProvider$Context" {
import {$BlockEntityRenderDispatcher, $BlockEntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.blockentity.BlockEntityRenderDispatcher"
import {$BlockRenderDispatcher, $BlockRenderDispatcher$$Type} from "net.minecraft.client.renderer.block.BlockRenderDispatcher"
import {$EntityRenderDispatcher, $EntityRenderDispatcher$$Type} from "net.minecraft.client.renderer.entity.EntityRenderDispatcher"
import {$Font, $Font$$Type} from "net.minecraft.client.gui.Font"
import {$ModelLayerLocation$$Type} from "net.minecraft.client.model.geom.ModelLayerLocation"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"
import {$ItemRenderer, $ItemRenderer$$Type} from "net.minecraft.client.renderer.entity.ItemRenderer"
import {$EntityModelSet, $EntityModelSet$$Type} from "net.minecraft.client.model.geom.EntityModelSet"

export class $BlockEntityRendererProvider$Context {
constructor(arg0: $BlockEntityRenderDispatcher$$Type, arg1: $BlockRenderDispatcher$$Type, arg2: $ItemRenderer$$Type, arg3: $EntityRenderDispatcher$$Type, arg4: $EntityModelSet$$Type, arg5: $Font$$Type)

public "getModelSet"(): $EntityModelSet
public "getBlockRenderDispatcher"(): $BlockRenderDispatcher
public "getEntityRenderer"(): $EntityRenderDispatcher
public "getItemRenderer"(): $ItemRenderer
public "getFont"(): $Font
public "getBlockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
public "bakeLayer"(arg0: $ModelLayerLocation$$Type): $ModelPart
get "modelSet"(): $EntityModelSet
get "blockRenderDispatcher"(): $BlockRenderDispatcher
get "entityRenderer"(): $EntityRenderDispatcher
get "itemRenderer"(): $ItemRenderer
get "font"(): $Font
get "blockEntityRenderDispatcher"(): $BlockEntityRenderDispatcher
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityRendererProvider$Context$$Type = ($BlockEntityRendererProvider$Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityRendererProvider$Context$$Original = $BlockEntityRendererProvider$Context;}
declare module "net.minecraft.client.renderer.texture.Dumpable" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Path, $Path$$Type} from "java.nio.file.Path"

export interface $Dumpable$$Interface {

(arg0: $ResourceLocation, arg1: $Path): void
}

export class $Dumpable implements $Dumpable$$Interface {
 "dumpContents"(arg0: $ResourceLocation$$Type, arg1: $Path$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dumpable$$Type = ((arg0: $ResourceLocation, arg1: $Path) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dumpable$$Original = $Dumpable;}
declare module "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$BooleanStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type, arg3: boolean)

public "toString"(): StringJS
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$BooleanStateShard$$Type = ($RenderStateShard$BooleanStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$BooleanStateShard$$Original = $RenderStateShard$BooleanStateShard;}
declare module "net.minecraft.client.renderer.block.model.ItemTransform" {
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"

export class $ItemTransform {
static readonly "NO_TRANSFORM": $ItemTransform
readonly "rotation": $Vector3f
readonly "translation": $Vector3f
readonly "scale": $Vector3f
readonly "rightRotation": $Vector3f

constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Vector3f$$Type)
constructor(arg0: $Vector3f$$Type, arg1: $Vector3f$$Type, arg2: $Vector3f$$Type, arg3: $Vector3f$$Type)

public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(arg0: boolean, arg1: $PoseStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransform$$Type = ($ItemTransform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTransform$$Original = $ItemTransform;}
declare module "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo" {
import {$SpriteContentsAnimationFrameAccessor$$Interface as $SpriteContentsAnimationFrameAccessor$0$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimationFrameAccessor"
import {$SpriteContentsAnimationFrameAccessor$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.tracking.SpriteContentsAnimationFrameAccessor"
import {$SpriteContentsFrameInfoAccessor$$Interface} from "net.irisshaders.iris.mixin.texture.SpriteContentsFrameInfoAccessor"

export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor$$Interface, $SpriteContentsAnimationFrameAccessor$$Interface, $SpriteContentsAnimationFrameAccessor$0$$Interface {
readonly "index": integer
readonly "time": integer

public "getIndex"(): integer
public "getTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$FrameInfo$$Type = ($SpriteContents$FrameInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$FrameInfo$$Original = $SpriteContents$FrameInfo;}
declare module "net.minecraft.client.renderer.debug.StructureRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$BoundingBox$$Type} from "net.minecraft.world.level.levelgen.structure.BoundingBox"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$StructuresDebugPayload$PieceInfo$$Type} from "net.minecraft.network.protocol.common.custom.StructuresDebugPayload$PieceInfo"

export class $StructureRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "addBoundingBox"(arg0: $BoundingBox$$Type, arg1: $List$$Type<($StructuresDebugPayload$PieceInfo$$Type)>, arg2: $ResourceKey$$Type<($Level)>): void
public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureRenderer$$Type = ($StructureRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureRenderer$$Original = $StructureRenderer;}
declare module "net.minecraft.client.renderer.chunk.SectionRenderDispatcher$CompiledSection" {
import {$CompiledSectionAccess$$Interface} from "blusunrize.immersiveengineering.mixin.accessors.client.CompiledSectionAccess"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Set} from "java.util.Set"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $SectionRenderDispatcher$CompiledSection implements $CompiledSectionAccess$$Interface {
static readonly "UNCOMPILED": $SectionRenderDispatcher$CompiledSection
static readonly "EMPTY": $SectionRenderDispatcher$CompiledSection

constructor()

public "getHasBlocks"(): $Set
public "isEmpty"(arg0: $RenderType$$Type): boolean
public "getRenderableBlockEntities"(): $List<($BlockEntity)>
public "hasNoRenderableLayers"(): boolean
public "facesCanSeeEachother"(arg0: $Direction$$Type, arg1: $Direction$$Type): boolean
get "hasBlocks"(): $Set
get "renderableBlockEntities"(): $List<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionRenderDispatcher$CompiledSection$$Type = ($SectionRenderDispatcher$CompiledSection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionRenderDispatcher$CompiledSection$$Original = $SectionRenderDispatcher$CompiledSection;}
declare module "net.minecraft.client.renderer.RenderStateShard$LineStateShard" {
import {$OptionalDouble$$Type} from "java.util.OptionalDouble"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$LineStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: $OptionalDouble$$Type)

public "toString"(): StringJS
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$LineStateShard$$Type = ($RenderStateShard$LineStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$LineStateShard$$Original = $RenderStateShard$LineStateShard;}
declare module "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderStateShard$BooleanStateShard} from "net.minecraft.client.renderer.RenderStateShard$BooleanStateShard"

export class $RenderStateShard$LightmapStateShard extends $RenderStateShard$BooleanStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: boolean)

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$LightmapStateShard$$Type = ($RenderStateShard$LightmapStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$LightmapStateShard$$Original = $RenderStateShard$LightmapStateShard;}
declare module "net.minecraft.client.renderer.RenderStateShard$OutputStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"

export class $RenderStateShard$OutputStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$OutputStateShard$$Type = ($RenderStateShard$OutputStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$OutputStateShard$$Original = $RenderStateShard$OutputStateShard;}
declare module "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$DepthTestStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: integer)

public "toString"(): StringJS
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$DepthTestStateShard$$Type = ($RenderStateShard$DepthTestStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$DepthTestStateShard$$Original = $RenderStateShard$DepthTestStateShard;}
declare module "net.minecraft.client.renderer.texture.atlas.SpriteSource$SpriteSupplier" {
import {$Function, $Function$$Type, $Function$$Interface} from "java.util.function.Function"
import {$SpriteContents, $SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$SpriteResourceLoader, $SpriteResourceLoader$$Type} from "net.minecraft.client.renderer.texture.atlas.SpriteResourceLoader"

export interface $SpriteSource$SpriteSupplier$$Interface extends $Function$$Interface<($SpriteResourceLoader), ($SpriteContents)> {

(arg0: $SpriteResourceLoader): $SpriteContents$$Type
}

export class $SpriteSource$SpriteSupplier implements $SpriteSource$SpriteSupplier$$Interface {
 "discard"(): void
 "apply"(arg0: $SpriteResourceLoader$$Type): $SpriteContents
static "identity"<T>(): $Function<($SpriteResourceLoader), ($SpriteResourceLoader)>
 "compose"<V>(arg0: $Function$$Type<(V), ($SpriteResourceLoader$$Type)>): $Function<(V), ($SpriteContents)>
 "andThen"<V>(arg0: $Function$$Type<($SpriteContents), (V)>): $Function<($SpriteResourceLoader), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteSource$SpriteSupplier$$Type = ((arg0: $SpriteResourceLoader) => $SpriteContents$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteSource$SpriteSupplier$$Original = $SpriteSource$SpriteSupplier;}
declare module "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderStateShard$TransparencyStateShard extends $RenderStateShard {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
 "setupState": $Runnable
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $Runnable$$Type, arg2: $Runnable$$Type)

public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderStateShard$TransparencyStateShard$$Type = ($RenderStateShard$TransparencyStateShard);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderStateShard$TransparencyStateShard$$Original = $RenderStateShard$TransparencyStateShard;}
declare module "net.minecraft.client.renderer.RenderType" {
import {$Optional} from "java.util.Optional"
import {$RenderTypeAccessor$$Interface} from "net.createmod.ponder.mixin.client.accessor.RenderTypeAccessor"
import {$List} from "java.util.List"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Runnable, $Runnable$$Type} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderType$CompositeRenderType} from "net.minecraft.client.renderer.RenderType$CompositeRenderType"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function} from "java.util.function.Function"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderTypeAccessor$$Interface as $RenderTypeAccessor$1$$Interface} from "net.irisshaders.batchedentityrendering.mixin.RenderTypeAccessor"
import {$RenderTypeAccessor$$Interface as $RenderTypeAccessor$0$$Interface} from "net.irisshaders.iris.mixin.rendertype.RenderTypeAccessor"
import {$RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$TransparencyType, $TransparencyType$$Type} from "net.irisshaders.batchedentityrendering.impl.TransparencyType"
import {$BlendingStateHolder$$Interface} from "net.irisshaders.batchedentityrendering.impl.BlendingStateHolder"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$BiFunction} from "java.util.function.BiFunction"
import {$MeshData$$Type} from "com.mojang.blaze3d.vertex.MeshData"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$VertexFormat$Mode, $VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$VertexFormat, $VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $RenderType extends $RenderStateShard implements $RenderTypeAccessor$0$$Interface, $BlendingStateHolder$$Interface, $RenderTypeAccessor$1$$Interface, $RenderTypeAccessor$$Interface {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND_SEE_THROUGH": $RenderType
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_INTENSITY_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SMALL_BUFFER_SIZE": integer
static readonly "GUI": $RenderType$CompositeRenderType
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_DECAL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "ENTITY_GLINT": $RenderType
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "ENTITY_GLINT_DIRECT": $RenderType
 "setupState": $Runnable
static readonly "GUI_GHOST_RECIPE_OVERLAY": $RenderType$CompositeRenderType
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SOLID": $RenderType
static readonly "LINE_STRIP": $RenderType$CompositeRenderType
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "EYES": $BiFunction<($ResourceLocation), ($RenderStateShard$TransparencyStateShard), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSIENT_BUFFER_SIZE": integer
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DRAGON_RAYS_DEPTH": $RenderType
static readonly "BEACON_BEAM": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GLINT_TRANSLUCENT": $RenderType
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TEXT_INTENSITY_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "CHUNK_BUFFER_LAYERS": $ImmutableList<($RenderType)>
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "LEASH": $RenderType
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "GUI_TEXT_HIGHLIGHT": $RenderType$CompositeRenderType
 "chunkLayerId": integer
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CLOUDS": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT_EMISSIVE": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_EXPLOSION_ALPHA": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ARMOR_ENTITY_GLINT": $RenderType
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "TRANSLUCENT_MOVING_BLOCK": $RenderType
static readonly "ENTITY_NO_OUTLINE": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_CUTOUT_NO_CULL_Z_OFFSET": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LINES": $RenderType$CompositeRenderType
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "ENTITY_CUTOUT_NO_CULL": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_RAYS": $RenderType
static readonly "TRANSLUCENT": $RenderType
static readonly "CUTOUT_MIPPED": $RenderType
static readonly "END_PORTAL": $RenderType
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WATER_MASK": $RenderType
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTNING": $RenderType
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "TEXT_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_SHADOW": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GUI_OVERLAY": $RenderType$CompositeRenderType
static readonly "CLOUDS_DEPTH_ONLY": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_STRUCTURE_QUADS": $RenderType$CompositeRenderType
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "DEBUG_SECTION_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_SOLID": $Function<($ResourceLocation), ($RenderType)>
static readonly "GLINT": $RenderType
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "TEXT_INTENSITY": $Function<($ResourceLocation), ($RenderType)>
static readonly "BIG_BUFFER_SIZE": integer
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MEGABYTE": integer
static readonly "ITEM_ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "ARMOR_CUTOUT_NO_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "CUTOUT": $RenderType
static readonly "END_GATEWAY": $RenderType
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TRIPWIRE": $RenderType
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_SMOOTH_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "DEBUG_FILLED_BOX": $RenderType$CompositeRenderType
static readonly "CRUMBLING": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "DEBUG_LINE_STRIP": $Function<(double), ($RenderType$CompositeRenderType)>
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

constructor(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $Runnable$$Type, arg7: $Runnable$$Type)

public static "solid"(): $RenderType
public static "tripwire"(): $RenderType
public static "lightning"(): $RenderType
public static "chunkBufferLayers"(): $List<($RenderType)>
public static "eyes"(arg0: $ResourceLocation$$Type): $RenderType
public "bufferSize"(): integer
public "mode"(): $VertexFormat$Mode
public "toString"(): StringJS
public static "lines"(): $RenderType
public "format"(): $VertexFormat
public static "create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "text"(arg0: $ResourceLocation$$Type): $RenderType
public "isOutline"(): boolean
public static "beaconBeam"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "breezeEyes"(arg0: $ResourceLocation$$Type): $RenderType
public static "breezeWind"(arg0: $ResourceLocation$$Type, arg1: float, arg2: float): $RenderType
public "draw"(arg0: $MeshData$$Type): void
public static "waterMask"(): $RenderType
public "outline"(): $Optional<($RenderType)>
public static "outline"(arg0: $ResourceLocation$$Type): $RenderType
public static "crumbling"(arg0: $ResourceLocation$$Type): $RenderType
public static "debugQuads"(): $RenderType
public static "createArmorDecalCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "glint"(): $RenderType
public static "lineStrip"(): $RenderType
public static "clouds"(): $RenderType
public static "dragonRays"(): $RenderType
public static "endGateway"(): $RenderType
public static "guiOverlay"(): $RenderType
public static "gui"(): $RenderType
public static "leash"(): $RenderType
public static "armorCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "entitySolid"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutout"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCull"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityCutoutNoCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityCutoutNoCullZOffset"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityCutoutNoCullZOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "itemEntityTranslucentCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentCull"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucent"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityTranslucent"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityTranslucentEmissive"(arg0: $ResourceLocation$$Type, arg1: boolean): $RenderType
public static "entityTranslucentEmissive"(arg0: $ResourceLocation$$Type): $RenderType
public static "entitySmoothCutout"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityDecal"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityNoOutline"(arg0: $ResourceLocation$$Type): $RenderType
public static "entityShadow"(arg0: $ResourceLocation$$Type): $RenderType
public static "dragonExplosionAlpha"(arg0: $ResourceLocation$$Type): $RenderType
public static "energySwirl"(arg0: $ResourceLocation$$Type, arg1: float, arg2: float): $RenderType
public static "armorEntityGlint"(): $RenderType
public static "glintTranslucent"(): $RenderType
public static "entityGlint"(): $RenderType
public static "entityGlintDirect"(): $RenderType
public static "textBackground"(): $RenderType
public static "textIntensity"(arg0: $ResourceLocation$$Type): $RenderType
public static "textPolygonOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "textIntensityPolygonOffset"(arg0: $ResourceLocation$$Type): $RenderType
public static "textSeeThrough"(arg0: $ResourceLocation$$Type): $RenderType
public static "textBackgroundSeeThrough"(): $RenderType
public static "textIntensitySeeThrough"(arg0: $ResourceLocation$$Type): $RenderType
public static "dragonRaysDepth"(): $RenderType
public static "cloudsDepthOnly"(): $RenderType
public static "debugLineStrip"(arg0: double): $RenderType
public static "debugFilledBox"(): $RenderType
public static "debugStructureQuads"(): $RenderType
public static "debugSectionQuads"(): $RenderType
public static "guiTextHighlight"(): $RenderType
public static "guiGhostRecipeOverlay"(): $RenderType
public "canConsolidateConsecutiveGeometry"(): boolean
public "getChunkLayerId"(): integer
public "getTransparencyType"(): $TransparencyType
public "setTransparencyType"(arg0: $TransparencyType$$Type): void
public "shouldSortOnUpload"(): boolean
public static "catnip$create$ponder_$md$a93e73$0"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "translucent"(): $RenderType
public static "translucentMovingBlock"(): $RenderType
public static "cutout"(): $RenderType
public static "endPortal"(): $RenderType
public "affectsCrumbling"(): boolean
public "sortOnUpload"(): boolean
public static "cutoutMipped"(): $RenderType
public static "catnip$create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "transparencyType"(): $TransparencyType
set "transparencyType"(value: $TransparencyType$$Type)
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$$Type = ($RenderType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$$Original = $RenderType;}
declare module "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture" {
import {$SpriteContentsAnimatedTextureAccessor$$Interface} from "net.irisshaders.iris.mixin.texture.SpriteContentsAnimatedTextureAccessor"
import {$IntStream} from "java.util.stream.IntStream"
import {$List} from "java.util.List"
import {$SpriteContents$FrameInfo} from "net.minecraft.client.renderer.texture.SpriteContents$FrameInfo"
import {$AnimatedTextureDuck$$Interface} from "com.railwayteam.railways.mixin_interfaces.AnimatedTextureDuck"
import {$SpriteContentsAnimationAccessor$$Interface as $SpriteContentsAnimationAccessor$0$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimationAccessor"
import {$SpriteTicker} from "net.minecraft.client.renderer.texture.SpriteTicker"
import {$SpriteContentsAnimationAccessor$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.tracking.SpriteContentsAnimationAccessor"

export class $SpriteContents$AnimatedTexture implements $AnimatedTextureDuck$$Interface, $SpriteContentsAnimatedTextureAccessor$$Interface, $SpriteContentsAnimationAccessor$$Interface, $SpriteContentsAnimationAccessor$0$$Interface {
readonly "frames": $List<($SpriteContents$FrameInfo)>
readonly "frameRowSize": integer
readonly "interpolateFrames": boolean

public "uploadFrame"(arg0: integer, arg1: integer, arg2: integer): void
public "invokeUploadFrame"(arg0: integer, arg1: integer, arg2: integer): void
public "getFrameRowSize"(): integer
public "getFrameX"(arg0: integer): integer
public "getFrameY"(arg0: integer): integer
public "createTicker"(): $SpriteTicker
public "getFrames"(): $List
public "uploadFirstFrame"(arg0: integer, arg1: integer): void
public "getUniqueFrames"(): $IntStream
public "railways$uploadWithVisibility"(): void
get "uniqueFrames"(): $IntStream
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$AnimatedTexture$$Type = ($SpriteContents$AnimatedTexture);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$AnimatedTexture$$Original = $SpriteContents$AnimatedTexture;}
declare module "net.minecraft.client.renderer.texture.SpriteContents$Ticker" {
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$SpriteContents$AnimatedTexture, $SpriteContents$AnimatedTexture$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$AnimatedTexture"
import {$SpriteContents$$Type} from "net.minecraft.client.renderer.texture.SpriteContents"
import {$SpriteContentsAnimatorImplAccessor$$Interface} from "org.embeddedt.embeddium.impl.mixin.features.textures.animations.upload.SpriteContentsAnimatorImplAccessor"
import {$SpriteTicker$$Interface} from "net.minecraft.client.renderer.texture.SpriteTicker"
import {$SpriteContents$InterpolationData$$Type} from "net.minecraft.client.renderer.texture.SpriteContents$InterpolationData"
import {$SpriteContentsTickerAccessor$$Interface} from "net.irisshaders.iris.mixin.texture.SpriteContentsTickerAccessor"

export class $SpriteContents$Ticker implements $SpriteTicker$$Interface, $SpriteContentsTickerAccessor$$Interface, $SpriteContentsAnimatorImplAccessor$$Interface {
public "getFrameTicks"(): integer
public "getAnimationInfo"(): $SpriteContents$AnimatedTexture
public "getSubFrame"(): integer
public "handler$bfg000$embeddium$assignParent"(arg0: $SpriteContents$$Type, arg1: $SpriteContents$AnimatedTexture$$Type, arg2: $SpriteContents$InterpolationData$$Type, arg3: $CallbackInfo$$Type): void
public "getFrame"(): integer
public "setSubFrame"(arg0: integer): void
public "setFrame"(arg0: integer): void
public "close"(): void
public "getFrameIndex"(): integer
public "tickAndUpload"(arg0: integer, arg1: integer): void
get "frameTicks"(): integer
get "animationInfo"(): $SpriteContents$AnimatedTexture
get "subFrame"(): integer
get "frame"(): integer
set "subFrame"(value: integer)
set "frame"(value: integer)
get "frameIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteContents$Ticker$$Type = ($SpriteContents$Ticker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteContents$Ticker$$Original = $SpriteContents$Ticker;}
declare module "net.minecraft.client.renderer.RenderType$CompositeState" {
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$RenderType$CompositeState$CompositeStateBuilder} from "net.minecraft.client.renderer.RenderType$CompositeState$CompositeStateBuilder"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard} from "net.minecraft.client.renderer.RenderStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$CompositeStateAccessor$$Interface} from "net.irisshaders.batchedentityrendering.mixin.CompositeStateAccessor"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"

export class $RenderType$CompositeState implements $CompositeStateAccessor$$Interface {
readonly "transparencyState": $RenderStateShard$TransparencyStateShard
readonly "overlayState": $RenderStateShard$OverlayStateShard
readonly "outputState": $RenderStateShard$OutputStateShard
readonly "depthTestState": $RenderStateShard$DepthTestStateShard
readonly "lightmapState": $RenderStateShard$LightmapStateShard
readonly "cullState": $RenderStateShard$CullStateShard
readonly "texturingState": $RenderStateShard$TexturingStateShard
readonly "textureState": $RenderStateShard$EmptyTextureStateShard
readonly "states": $ImmutableList<($RenderStateShard)>
readonly "layeringState": $RenderStateShard$LayeringStateShard
readonly "lineState": $RenderStateShard$LineStateShard
readonly "shaderState": $RenderStateShard$ShaderStateShard
readonly "writeMaskState": $RenderStateShard$WriteMaskStateShard

public "getTransparency"(): $RenderStateShard$TransparencyStateShard
public "toString"(): StringJS
public static "builder"(): $RenderType$CompositeState$CompositeStateBuilder
get "transparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$CompositeState$$Type = ($RenderType$CompositeState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$CompositeState$$Original = $RenderType$CompositeState;}
declare module "net.minecraft.client.renderer.SectionBufferBuilderPool" {
import {$List$$Type} from "java.util.List"
import {$SectionBufferBuilderPack, $SectionBufferBuilderPack$$Type} from "net.minecraft.client.renderer.SectionBufferBuilderPack"

export class $SectionBufferBuilderPool {
constructor(arg0: $List$$Type<($SectionBufferBuilderPack$$Type)>)

public "getFreeBufferCount"(): integer
public "isEmpty"(): boolean
public "release"(arg0: $SectionBufferBuilderPack$$Type): void
public "acquire"(): $SectionBufferBuilderPack
public static "allocate"(arg0: integer): $SectionBufferBuilderPool
get "freeBufferCount"(): integer
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SectionBufferBuilderPool$$Type = ($SectionBufferBuilderPool);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SectionBufferBuilderPool$$Original = $SectionBufferBuilderPool;}
declare module "net.minecraft.client.renderer.block.model.ItemOverride$Predicate" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $ItemOverride$Predicate {
constructor(arg0: $ResourceLocation$$Type, arg1: float)

public "getProperty"(): $ResourceLocation
public "getValue"(): float
get "property"(): $ResourceLocation
get "value"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverride$Predicate$$Type = ($ItemOverride$Predicate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverride$Predicate$$Original = $ItemOverride$Predicate;}
declare module "net.minecraft.client.renderer.RenderBuffers" {
import {$DrawCallTrackingRenderBuffers$$Interface} from "net.irisshaders.batchedentityrendering.impl.DrawCallTrackingRenderBuffers"
import {$MultiBufferSource$BufferSource} from "net.minecraft.client.renderer.MultiBufferSource$BufferSource"
import {$MemoryTrackingRenderBuffers$$Interface} from "net.irisshaders.batchedentityrendering.impl.MemoryTrackingRenderBuffers"
import {$SectionBufferBuilderPool} from "net.minecraft.client.renderer.SectionBufferBuilderPool"
import {$SectionBufferBuilderPack} from "net.minecraft.client.renderer.SectionBufferBuilderPack"
import {$RenderBuffersExt$$Interface} from "net.irisshaders.batchedentityrendering.impl.RenderBuffersExt"
import {$OutlineBufferSource} from "net.minecraft.client.renderer.OutlineBufferSource"

export class $RenderBuffers implements $MemoryTrackingRenderBuffers$$Interface, $RenderBuffersExt$$Interface, $DrawCallTrackingRenderBuffers$$Interface {
constructor(arg0: integer)

public "getEntityBufferAllocatedSize"(): long
public "getMiscBufferAllocatedSize"(): long
public "getMaxBegins"(): integer
public "freeAndDeleteBuffers"(): void
public "getDrawCalls"(): integer
public "fixedBufferPack"(): $SectionBufferBuilderPack
public "sectionBufferPool"(): $SectionBufferBuilderPool
public "getRenderTypes"(): integer
public "crumblingBufferSource"(): $MultiBufferSource$BufferSource
public "bufferSource"(): $MultiBufferSource$BufferSource
public "resetDrawCounts"(): void
public "endLevelRendering"(): void
public "outlineBufferSource"(): $OutlineBufferSource
public "beginLevelRendering"(): void
get "entityBufferAllocatedSize"(): long
get "miscBufferAllocatedSize"(): long
get "maxBegins"(): integer
get "drawCalls"(): integer
get "renderTypes"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderBuffers$$Type = ($RenderBuffers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderBuffers$$Original = $RenderBuffers;}
declare module "net.minecraft.client.renderer.PostChain" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PostPass} from "net.minecraft.client.renderer.PostPass"
import {$RenderTarget, $RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"

export class $PostChain implements $AutoCloseable$$Interface {
constructor(arg0: $TextureManager$$Type, arg1: $ResourceProvider$$Type, arg2: $RenderTarget$$Type, arg3: $ResourceLocation$$Type)

public "addTempTarget"(arg0: StringJS, arg1: integer, arg2: integer): void
public "addPass"(arg0: StringJS, arg1: $RenderTarget$$Type, arg2: $RenderTarget$$Type, arg3: boolean): $PostPass
public "process"(arg0: float): void
public "getName"(): StringJS
public "close"(): void
public "resize"(arg0: integer, arg1: integer): void
public "getTempTarget"(arg0: StringJS): $RenderTarget
public "setUniform"(arg0: StringJS, arg1: float): void
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostChain$$Type = ($PostChain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostChain$$Original = $PostChain;}
declare module "net.minecraft.client.renderer.debug.BrainDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$BrainDebugPayload$BrainDump$$Type} from "net.minecraft.network.protocol.common.custom.BrainDebugPayload$BrainDump"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BrainDebugRenderer$PoiInfo$$Type} from "net.minecraft.client.renderer.debug.BrainDebugRenderer$PoiInfo"

export class $BrainDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "setFreeTicketCount"(arg0: $BlockPos$$Type, arg1: integer): void
public "removePoi"(arg0: $BlockPos$$Type): void
public "addOrUpdateBrainDump"(arg0: $BrainDebugPayload$BrainDump$$Type): void
public "addPoi"(arg0: $BrainDebugRenderer$PoiInfo$$Type): void
public "clear"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "removeBrainDump"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrainDebugRenderer$$Type = ($BrainDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrainDebugRenderer$$Original = $BrainDebugRenderer;}
declare module "net.minecraft.client.renderer.PostPass" {
import {$ResourceProvider$$Type} from "net.minecraft.server.packs.resources.ResourceProvider"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$EffectInstance} from "net.minecraft.client.renderer.EffectInstance"
import {$RenderTarget, $RenderTarget$$Type} from "com.mojang.blaze3d.pipeline.RenderTarget"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $PostPass implements $AutoCloseable$$Interface {
readonly "outTarget": $RenderTarget
readonly "inTarget": $RenderTarget

constructor(arg0: $ResourceProvider$$Type, arg1: StringJS, arg2: $RenderTarget$$Type, arg3: $RenderTarget$$Type, arg4: boolean)

public "addAuxAsset"(arg0: StringJS, arg1: $IntSupplier$$Type, arg2: integer, arg3: integer): void
public "setOrthoMatrix"(arg0: $Matrix4f$$Type): void
public "getFilterMode"(): integer
public "process"(arg0: float): void
public "getName"(): StringJS
public "close"(): void
public "getEffect"(): $EffectInstance
set "orthoMatrix"(value: $Matrix4f$$Type)
get "filterMode"(): integer
get "name"(): StringJS
get "effect"(): $EffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostPass$$Type = ($PostPass);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostPass$$Original = $PostPass;}
declare module "net.minecraft.client.renderer.CubeMap" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"

export class $CubeMap {
constructor(arg0: $ResourceLocation$$Type)

public "render"(arg0: $Minecraft$$Type, arg1: float, arg2: float, arg3: float): void
public "preload"(arg0: $TextureManager$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CubeMap$$Type = ($CubeMap);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CubeMap$$Original = $CubeMap;}
declare module "net.minecraft.client.renderer.texture.TextureManager" {
import {$Map} from "java.util.Map"
import {$Tickable$$Interface} from "net.minecraft.client.renderer.texture.Tickable"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$AbstractTexture, $AbstractTexture$$Type} from "net.minecraft.client.renderer.texture.AbstractTexture"
import {$DynamicTexture$$Type} from "net.minecraft.client.renderer.texture.DynamicTexture"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Path$$Type} from "java.nio.file.Path"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TextureManager implements $PreparableReloadListener$$Interface, $Tickable$$Interface, $AutoCloseable$$Interface {
readonly "byPath": $Map<($ResourceLocation), ($AbstractTexture)>
static readonly "INTENTIONAL_MISSING_TEXTURE": $ResourceLocation

constructor(arg0: $ResourceManager$$Type)

public "bindForSetup"(arg0: $ResourceLocation$$Type): void
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "tick"(): void
public "register"(arg0: StringJS, arg1: $DynamicTexture$$Type): $ResourceLocation
public "register"(arg0: $ResourceLocation$$Type, arg1: $AbstractTexture$$Type): void
public "close"(): void
public "release"(arg0: $ResourceLocation$$Type): void
public "getTexture"(arg0: $ResourceLocation$$Type): $AbstractTexture
public "getTexture"(arg0: $ResourceLocation$$Type, arg1: $AbstractTexture$$Type): $AbstractTexture
public "preload"(arg0: $ResourceLocation$$Type, arg1: $Executor$$Type): $CompletableFuture<(void)>
public "dumpAllSheets"(arg0: $Path$$Type): void
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureManager$$Type = ($TextureManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureManager$$Original = $TextureManager;}
declare module "net.minecraft.client.renderer.RenderType$CompositeRenderType" {
import {$Optional} from "java.util.Optional"
import {$RenderStateShard$LayeringStateShard} from "net.minecraft.client.renderer.RenderStateShard$LayeringStateShard"
import {$ImmutableList} from "com.google.common.collect.ImmutableList"
import {$Runnable} from "java.lang.Runnable"
import {$RenderStateShard$WriteMaskStateShard} from "net.minecraft.client.renderer.RenderStateShard$WriteMaskStateShard"
import {$RenderStateShard$DepthTestStateShard} from "net.minecraft.client.renderer.RenderStateShard$DepthTestStateShard"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Function} from "java.util.function.Function"
import {$RenderStateShard$LightmapStateShard} from "net.minecraft.client.renderer.RenderStateShard$LightmapStateShard"
import {$RenderStateShard$TexturingStateShard} from "net.minecraft.client.renderer.RenderStateShard$TexturingStateShard"
import {$RenderType$CompositeState, $RenderType$CompositeState$$Type} from "net.minecraft.client.renderer.RenderType$CompositeState"
import {$RenderStateShard$EmptyTextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$EmptyTextureStateShard"
import {$TransparencyType, $TransparencyType$$Type} from "net.irisshaders.batchedentityrendering.impl.TransparencyType"
import {$BlendingStateHolder$$Interface} from "net.irisshaders.batchedentityrendering.impl.BlendingStateHolder"
import {$RenderStateShard$ColorLogicStateShard} from "net.minecraft.client.renderer.RenderStateShard$ColorLogicStateShard"
import {$RenderStateShard$OverlayStateShard} from "net.minecraft.client.renderer.RenderStateShard$OverlayStateShard"
import {$BiFunction} from "java.util.function.BiFunction"
import {$RenderStateShard$LineStateShard} from "net.minecraft.client.renderer.RenderStateShard$LineStateShard"
import {$RenderStateShard$CullStateShard} from "net.minecraft.client.renderer.RenderStateShard$CullStateShard"
import {$RenderStateShard$ShaderStateShard} from "net.minecraft.client.renderer.RenderStateShard$ShaderStateShard"
import {$RenderStateShard$TextureStateShard} from "net.minecraft.client.renderer.RenderStateShard$TextureStateShard"
import {$RenderStateShard$TransparencyStateShard} from "net.minecraft.client.renderer.RenderStateShard$TransparencyStateShard"
import {$VertexFormat$Mode$$Type} from "com.mojang.blaze3d.vertex.VertexFormat$Mode"
import {$RenderStateShard$OutputStateShard} from "net.minecraft.client.renderer.RenderStateShard$OutputStateShard"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$VertexFormat$$Type} from "com.mojang.blaze3d.vertex.VertexFormat"

export class $RenderType$CompositeRenderType extends $RenderType implements $BlendingStateHolder$$Interface {
static readonly "RENDERTYPE_ARMOR_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND_SEE_THROUGH": $RenderType
static readonly "RENDERTYPE_ENTITY_DECAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_INTENSITY_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_ALPHA_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SMALL_BUFFER_SIZE": integer
static readonly "GUI": $RenderType$CompositeRenderType
static readonly "PARTICLES_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_EMISSIVE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_LIGHTNING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_DECAL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_GUI_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_TEXTURE": $RenderStateShard$EmptyTextureStateShard
static readonly "ENTITY_GLINT": $RenderType
static readonly "LIGHTNING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "ENTITY_GLINT_DIRECT": $RenderType
 "setupState": $Runnable
static readonly "GUI_GHOST_RECIPE_OVERLAY": $RenderType$CompositeRenderType
static readonly "GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "ENTITY_GLINT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "RENDERTYPE_END_GATEWAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "SOLID": $RenderType
static readonly "LINE_STRIP": $RenderType$CompositeRenderType
static readonly "RENDERTYPE_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_TEX_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "EYES": $BiFunction<($ResourceLocation), ($RenderStateShard$TransparencyStateShard), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ADDITIVE_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_DIRECT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TRANSIENT_BUFFER_SIZE": integer
static readonly "DEFAULT_LINE": $RenderStateShard$LineStateShard
static readonly "RENDERTYPE_GUI_SHADER": $RenderStateShard$ShaderStateShard
static readonly "OUTLINE_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GUI_GHOST_RECIPE_OVERLAY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DRAGON_RAYS_DEPTH": $RenderType
static readonly "BEACON_BEAM": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "POLYGON_OFFSET_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "NO_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TEXT_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GLINT_TRANSLUCENT": $RenderType
static readonly "CULL": $RenderStateShard$CullStateShard
static readonly "OR_REVERSE_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
static readonly "NO_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TEXT_INTENSITY_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "CHUNK_BUFFER_LAYERS": $ImmutableList<($RenderType)>
static readonly "VIEW_OFFSET_Z_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "LEASH": $RenderType
static readonly "NO_LAYERING": $RenderStateShard$LayeringStateShard
static readonly "GUI_TEXT_HIGHLIGHT": $RenderType$CompositeRenderType
 "chunkLayerId": integer
static readonly "RENDERTYPE_TEXT_INTENSITY_SEE_THROUGH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CLOUDS": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_MOVING_BLOCK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT_EMISSIVE": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_EXPLOSION_ALPHA": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_SMOOTH_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ARMOR_ENTITY_GLINT": $RenderType
static readonly "RENDERTYPE_LEASH_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "NO_CULL": $RenderStateShard$CullStateShard
static readonly "TRANSLUCENT_MOVING_BLOCK": $RenderType
static readonly "ENTITY_NO_OUTLINE": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_CLOUDS_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_TEX_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_CUTOUT_NO_CULL_Z_OFFSET": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "POSITION_COLOR_LIGHTMAP_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LINES": $RenderType$CompositeRenderType
static readonly "TRANSLUCENT_TARGET": $RenderStateShard$OutputStateShard
static readonly "OVERLAY": $RenderStateShard$OverlayStateShard
static readonly "ENTITY_CUTOUT_NO_CULL": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "DRAGON_RAYS": $RenderType
static readonly "TRANSLUCENT": $RenderType
static readonly "CUTOUT_MIPPED": $RenderType
static readonly "END_PORTAL": $RenderType
static readonly "TRANSLUCENT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_Z_OFFSET_SHADER": $RenderStateShard$ShaderStateShard
static readonly "TEXT_POLYGON_OFFSET": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "POSITION_COLOR_SHADER": $RenderStateShard$ShaderStateShard
static readonly "CRUMBLING_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "RENDERTYPE_CRUMBLING_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WATER_MASK": $RenderType
static readonly "RENDERTYPE_EYES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_WATER_MASK_SHADER": $RenderStateShard$ShaderStateShard
static readonly "LIGHTNING": $RenderType
static readonly "RENDERTYPE_CUTOUT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "COLOR_DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "TEXT_SEE_THROUGH": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_TRIPWIRE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_TRANSLUCENT": $BiFunction<($ResourceLocation), (boolean), ($RenderType)>
static readonly "ENTITY_SHADOW": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ENTITY_CUTOUT_NO_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_SHADOW_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_TEXT_BACKGROUND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GUI_OVERLAY": $RenderType$CompositeRenderType
static readonly "CLOUDS_DEPTH_ONLY": $RenderType
static readonly "RENDERTYPE_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "NO_COLOR_LOGIC": $RenderStateShard$ColorLogicStateShard
readonly "name": StringJS
static readonly "RENDERTYPE_ENERGY_SWIRL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEBUG_STRUCTURE_QUADS": $RenderType$CompositeRenderType
static readonly "POSITION_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BEACON_BEAM_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_CUTOUT_MIPPED_SHADER": $RenderStateShard$ShaderStateShard
static readonly "DEPTH_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "CLOUDS_TARGET": $RenderStateShard$OutputStateShard
static readonly "DEBUG_SECTION_QUADS": $RenderType$CompositeRenderType
static readonly "ENTITY_SOLID": $Function<($ResourceLocation), ($RenderType)>
static readonly "GLINT": $RenderType
static readonly "NO_LIGHTMAP": $RenderStateShard$LightmapStateShard
static readonly "MAIN_TARGET": $RenderStateShard$OutputStateShard
static readonly "RENDERTYPE_GLINT_TRANSLUCENT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ITEM_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_END_PORTAL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "WEATHER_TARGET": $RenderStateShard$OutputStateShard
static readonly "LEQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "TEXT_INTENSITY": $Function<($ResourceLocation), ($RenderType)>
static readonly "BIG_BUFFER_SIZE": integer
static readonly "RENDERTYPE_LINES_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_BREEZE_WIND_SHADER": $RenderStateShard$ShaderStateShard
static readonly "BLOCK_SHEET_MIPPED": $RenderStateShard$TextureStateShard
static readonly "RENDERTYPE_ENTITY_SOLID_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_NO_OUTLINE_SHADER": $RenderStateShard$ShaderStateShard
static readonly "RENDERTYPE_ENTITY_TRANSLUCENT_CULL_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MEGABYTE": integer
static readonly "ITEM_ENTITY_TRANSLUCENT_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "COLOR_WRITE": $RenderStateShard$WriteMaskStateShard
static readonly "ITEM_ENTITY_TARGET": $RenderStateShard$OutputStateShard
static readonly "ARMOR_CUTOUT_NO_CULL": $Function<($ResourceLocation), ($RenderType)>
static readonly "RENDERTYPE_ARMOR_ENTITY_GLINT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "MAX_ENCHANTMENT_GLINT_SPEED_MILLIS": double
static readonly "DEFAULT_TEXTURING": $RenderStateShard$TexturingStateShard
static readonly "EQUAL_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "CUTOUT": $RenderType
static readonly "END_GATEWAY": $RenderType
static readonly "GLINT_TRANSPARENCY": $RenderStateShard$TransparencyStateShard
static readonly "TRIPWIRE": $RenderType
static readonly "VIEW_SCALE_Z_EPSILON": float
readonly "clearState": $Runnable
static readonly "RENDERTYPE_TEXT_INTENSITY_SHADER": $RenderStateShard$ShaderStateShard
static readonly "GREATER_DEPTH_TEST": $RenderStateShard$DepthTestStateShard
static readonly "RENDERTYPE_GUI_TEXT_HIGHLIGHT_SHADER": $RenderStateShard$ShaderStateShard
static readonly "ENTITY_SMOOTH_CUTOUT": $Function<($ResourceLocation), ($RenderType)>
static readonly "DEBUG_FILLED_BOX": $RenderType$CompositeRenderType
static readonly "CRUMBLING": $Function<($ResourceLocation), ($RenderType)>
static readonly "TEXT_BACKGROUND": $RenderType
static readonly "DEBUG_LINE_STRIP": $Function<(double), ($RenderType$CompositeRenderType)>
static readonly "BLOCK_SHEET": $RenderStateShard$TextureStateShard

public "toString"(): StringJS
public "state"(): $RenderType$CompositeState
public "isOutline"(): boolean
public "outline"(): $Optional<($RenderType)>
public "getTransparencyType"(): $TransparencyType
public "setTransparencyType"(arg0: $TransparencyType$$Type): void
public static "catnip$create"(arg0: StringJS, arg1: $VertexFormat$$Type, arg2: $VertexFormat$Mode$$Type, arg3: integer, arg4: boolean, arg5: boolean, arg6: $RenderType$CompositeState$$Type): $RenderType$CompositeRenderType
public static "getTranslucentTransparency"(): $RenderStateShard$TransparencyStateShard
public static "getNO_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getGLINT_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
public static "getCRUMBLING_TRANSPARENCY"(): $RenderStateShard$TransparencyStateShard
get "transparencyType"(): $TransparencyType
set "transparencyType"(value: $TransparencyType$$Type)
public static get "translucentTransparency"(): $RenderStateShard$TransparencyStateShard
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderType$CompositeRenderType$$Type = ($RenderType$CompositeRenderType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderType$CompositeRenderType$$Original = $RenderType$CompositeRenderType;}
declare module "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer" {
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"

export interface $DebugRenderer$SimpleDebugRenderer$$Interface {

(arg0: $PoseStack, arg1: $MultiBufferSource, arg2: double, arg3: double, arg4: double): void
}

export class $DebugRenderer$SimpleDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
 "clear"(): void
 "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DebugRenderer$SimpleDebugRenderer$$Type = ((arg0: $PoseStack, arg1: $MultiBufferSource, arg2: double, arg3: double, arg4: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DebugRenderer$SimpleDebugRenderer$$Original = $DebugRenderer$SimpleDebugRenderer;}
declare module "net.minecraft.client.renderer.block.model.ItemOverride" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$ItemOverride$Predicate, $ItemOverride$Predicate$$Type} from "net.minecraft.client.renderer.block.model.ItemOverride$Predicate"
import {$Stream} from "java.util.stream.Stream"

export class $ItemOverride {
constructor(arg0: $ResourceLocation$$Type, arg1: $List$$Type<($ItemOverride$Predicate$$Type)>)

public "getPredicates"(): $Stream<($ItemOverride$Predicate)>
public "getModel"(): $ResourceLocation
get "predicates"(): $Stream<($ItemOverride$Predicate)>
get "model"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemOverride$$Type = ($ItemOverride);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemOverride$$Original = $ItemOverride;}
declare module "net.minecraft.client.renderer.chunk.RenderRegionCache" {
import {$SectionPos$$Type} from "net.minecraft.core.SectionPos"
import {$RenderChunkRegion} from "net.minecraft.client.renderer.chunk.RenderChunkRegion"
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $RenderRegionCache {
constructor()

public "createRegion"(arg0: $Level$$Type, arg1: $SectionPos$$Type, arg2: boolean): $RenderChunkRegion
public "createRegion"(arg0: $Level$$Type, arg1: $SectionPos$$Type): $RenderChunkRegion
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderRegionCache$$Type = ($RenderRegionCache);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderRegionCache$$Original = $RenderRegionCache;}
declare module "net.minecraft.client.renderer.item.ItemPropertyFunction" {
import {$ClientLevel, $ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

/**
 * 
 * @deprecated
 */
export interface $ItemPropertyFunction$$Interface {

(arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer): float
}

export class $ItemPropertyFunction implements $ItemPropertyFunction$$Interface {
 "call"(arg0: $ItemStack$$Type, arg1: $ClientLevel$$Type, arg2: $LivingEntity$$Type, arg3: integer): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPropertyFunction$$Type = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: integer) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPropertyFunction$$Original = $ItemPropertyFunction;}
declare module "net.minecraft.client.renderer.debug.RaidDebugRenderer" {
import {$DebugRenderer$SimpleDebugRenderer$$Interface} from "net.minecraft.client.renderer.debug.DebugRenderer$SimpleDebugRenderer"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$Collection$$Type} from "java.util.Collection"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $RaidDebugRenderer implements $DebugRenderer$SimpleDebugRenderer$$Interface {
constructor(arg0: $Minecraft$$Type)

public "setRaidCenters"(arg0: $Collection$$Type<($BlockPos$$Type)>): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: double, arg3: double, arg4: double): void
public "clear"(): void
set "raidCenters"(value: $Collection$$Type<($BlockPos$$Type)>)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RaidDebugRenderer$$Type = ($RaidDebugRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RaidDebugRenderer$$Original = $RaidDebugRenderer;}
declare module "net.minecraft.client.renderer.PanoramaRenderer" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$CubeMap$$Type} from "net.minecraft.client.renderer.CubeMap"

export class $PanoramaRenderer {
static readonly "PANORAMA_OVERLAY": $ResourceLocation

constructor(arg0: $CubeMap$$Type)

public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float, arg4: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PanoramaRenderer$$Type = ($PanoramaRenderer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PanoramaRenderer$$Original = $PanoramaRenderer;}
