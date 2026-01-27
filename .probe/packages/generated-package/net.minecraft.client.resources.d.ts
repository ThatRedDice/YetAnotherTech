declare module "net.minecraft.client.resources.model.ModelBakery$TextureGetter" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"

export interface $ModelBakery$TextureGetter$$Interface {

(arg0: $ModelResourceLocation, arg1: $Material): $TextureAtlasSprite$$Type
}

export class $ModelBakery$TextureGetter implements $ModelBakery$TextureGetter$$Interface {
 "get"(arg0: $ModelResourceLocation$$Type, arg1: $Material$$Type): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakery$TextureGetter$$Type = ((arg0: $ModelResourceLocation, arg1: $Material) => $TextureAtlasSprite$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBakery$TextureGetter$$Original = $ModelBakery$TextureGetter;}
declare module "net.minecraft.client.resources.sounds.Sound" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$SampledFloat, $SampledFloat$$Type} from "net.minecraft.util.valueproviders.SampledFloat"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$SoundEngine$$Type} from "net.minecraft.client.sounds.SoundEngine"
import {$Weighted$$Interface} from "net.minecraft.client.sounds.Weighted"
import {$FileToIdConverter} from "net.minecraft.resources.FileToIdConverter"
import {$Sound$Type, $Sound$Type$$Type} from "net.minecraft.client.resources.sounds.Sound$Type"

export class $Sound implements $Weighted$$Interface<($Sound)> {
static readonly "SOUND_LISTER": $FileToIdConverter

constructor(arg0: $ResourceLocation$$Type, arg1: $SampledFloat$$Type, arg2: $SampledFloat$$Type, arg3: integer, arg4: $Sound$Type$$Type, arg5: boolean, arg6: boolean, arg7: integer)

public "toString"(): StringJS
public "getLocation"(): $ResourceLocation
public "getType"(): $Sound$Type
public "getPath"(): $ResourceLocation
public "getWeight"(): integer
public "preloadIfRequired"(arg0: $SoundEngine$$Type): void
public "shouldStream"(): boolean
public "shouldPreload"(): boolean
public "getAttenuationDistance"(): integer
public "getVolume"(): $SampledFloat
public "getPitch"(): $SampledFloat
public "getSound"(arg0: $RandomSource$$Type): any
get "location"(): $ResourceLocation
get "type"(): $Sound$Type
get "path"(): $ResourceLocation
get "weight"(): integer
get "attenuationDistance"(): integer
get "volume"(): $SampledFloat
get "pitch"(): $SampledFloat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sound$$Type = ($Sound);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Sound$$Original = $Sound;}
declare module "net.minecraft.client.resources.sounds.Sound$Type" {
import {$Enum} from "java.lang.Enum"

export class $Sound$Type extends $Enum<($Sound$Type)> {
static readonly "SOUND_EVENT": $Sound$Type
static readonly "FILE": $Sound$Type

public static "values"(): ($Sound$Type)[]
public static "valueOf"(arg0: StringJS): $Sound$Type
public static "getByName"(arg0: StringJS): $Sound$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Sound$Type$$Type = (("file") | ("sound_event"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Sound$Type$$Original = $Sound$Type;}
declare module "net.minecraft.client.resources.language.LanguageManager" {
import {$LanguageInfo} from "net.minecraft.client.resources.language.LanguageInfo"
import {$ResourceManagerReloadListener$$Interface} from "net.minecraft.server.packs.resources.ResourceManagerReloadListener"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$ClientLanguage$$Type} from "net.minecraft.client.resources.language.ClientLanguage"
import {$Locale} from "java.util.Locale"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$SortedMap} from "java.util.SortedMap"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $LanguageManager implements $ResourceManagerReloadListener$$Interface {
constructor(arg0: StringJS, arg1: $Consumer$$Type<($ClientLanguage)>)

public "getLanguages"(): $SortedMap<(StringJS), ($LanguageInfo)>
public "getSelected"(): StringJS
public "getLanguage"(arg0: StringJS): $LanguageInfo
public "setSelected"(arg0: StringJS): void
public "onResourceManagerReload"(arg0: $ResourceManager$$Type): void
public "getJavaLocale"(): $Locale
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "getName"(): StringJS
get "languages"(): $SortedMap<(StringJS), ($LanguageInfo)>
get "selected"(): StringJS
set "selected"(value: StringJS)
get "javaLocale"(): $Locale
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanguageManager$$Type = ($LanguageManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LanguageManager$$Original = $LanguageManager;}
declare module "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$Type" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$GuiSpriteScaling} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GuiSpriteScaling$Type extends $Enum<($GuiSpriteScaling$Type)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($GuiSpriteScaling$Type)>
static readonly "STRETCH": $GuiSpriteScaling$Type
static readonly "TILE": $GuiSpriteScaling$Type
static readonly "NINE_SLICE": $GuiSpriteScaling$Type

public static "values"(): ($GuiSpriteScaling$Type)[]
public static "valueOf"(arg0: StringJS): $GuiSpriteScaling$Type
public "codec"(): $MapCodec<($GuiSpriteScaling)>
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSpriteScaling$Type$$Type = (("stretch") | ("tile") | ("nine_slice"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSpriteScaling$Type$$Original = $GuiSpriteScaling$Type;}
declare module "net.minecraft.client.resources.model.ModelState" {
import {$ModelStateExtension$$Interface} from "net.neoforged.neoforge.client.extensions.ModelStateExtension"
import {$Transformation} from "com.mojang.math.Transformation"

export interface $ModelState$$Interface extends $ModelStateExtension$$Interface {
get "uvLocked"(): boolean
get "rotation"(): $Transformation
}

export class $ModelState implements $ModelState$$Interface {
 "isUvLocked"(): boolean
 "getRotation"(): $Transformation
 "mayApplyArbitraryRotation"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelState$$Type = ($ModelState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelState$$Original = $ModelState;}
declare module "net.minecraft.client.resources.MapDecorationTextureManager" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MapDecoration$$Type} from "net.minecraft.world.level.saveddata.maps.MapDecoration"
import {$TextureAtlasHolder} from "net.minecraft.client.resources.TextureAtlasHolder"

export class $MapDecorationTextureManager extends $TextureAtlasHolder {
constructor(arg0: $TextureManager$$Type)

public "get"(arg0: $MapDecoration$$Type): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MapDecorationTextureManager$$Type = ($MapDecorationTextureManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MapDecorationTextureManager$$Original = $MapDecorationTextureManager;}
declare module "net.minecraft.client.resources.model.BlockStateModelLoader$LoadedJson" {
import {$JsonElement, $JsonElement$$Type} from "com.google.gson.JsonElement"
import {$Record} from "java.lang.Record"

export class $BlockStateModelLoader$LoadedJson extends $Record {
constructor(arg0: StringJS, arg1: $JsonElement$$Type)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "data"(): $JsonElement
public "source"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockStateModelLoader$LoadedJson$$Type = ({"source"?: StringJS, "data"?: $JsonElement$$Type}) | ([source?: StringJS, data?: $JsonElement$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockStateModelLoader$LoadedJson$$Original = $BlockStateModelLoader$LoadedJson;}
declare module "net.minecraft.client.resources.SkinManager" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Supplier} from "java.util.function.Supplier"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$MinecraftSessionService$$Type} from "com.mojang.authlib.minecraft.MinecraftSessionService"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$Path$$Type} from "java.nio.file.Path"
import {$PlayerSkin} from "net.minecraft.client.resources.PlayerSkin"

export class $SkinManager {
constructor(arg0: $TextureManager$$Type, arg1: $Path$$Type, arg2: $MinecraftSessionService$$Type, arg3: $Executor$$Type)

public "lookupInsecure"(arg0: $GameProfile$$Type): $Supplier<($PlayerSkin)>
public "getInsecureSkin"(arg0: $GameProfile$$Type): $PlayerSkin
public "getOrLoad"(arg0: $GameProfile$$Type): $CompletableFuture<($PlayerSkin)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SkinManager$$Type = ($SkinManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SkinManager$$Original = $SkinManager;}
declare module "net.minecraft.client.resources.model.BakedModel" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ItemDisplayContext$$Type} from "net.minecraft.world.item.ItemDisplayContext"
import {$BakedOpacity$$Interface} from "ca.fxco.moreculling.api.model.BakedOpacity"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemOverrides} from "net.minecraft.client.renderer.block.model.ItemOverrides"
import {$IBakedModelExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IBakedModelExtension"
import {$List} from "java.util.List"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BakedQuad} from "net.minecraft.client.renderer.block.model.BakedQuad"
import {$ItemTransforms} from "net.minecraft.client.renderer.block.model.ItemTransforms"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BakedModel_extendsMixin$$Interface} from "ca.fxco.moreculling.mixin.models.BakedModel_extendsMixin"
import {$ChunkRenderTypeSet} from "net.neoforged.neoforge.client.ChunkRenderTypeSet"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BakedModel$$Interface extends $IBakedModelExtension$$Interface, $BakedOpacity$$Interface, $BakedModel_extendsMixin$$Interface {
get "customRenderer"(): boolean
get "transforms"(): $ItemTransforms
get "overrides"(): $ItemOverrides
get "gui3d"(): boolean
get "particleIcon"(): $TextureAtlasSprite
}

export class $BakedModel implements $BakedModel$$Interface {
 "isCustomRenderer"(): boolean
/**
 * 
 * @deprecated
 */
 "getTransforms"(): $ItemTransforms
/**
 * 
 * @deprecated
 */
 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type): $List<($BakedQuad)>
 "getOverrides"(): $ItemOverrides
 "isGui3d"(): boolean
 "usesBlockLight"(): boolean
/**
 * 
 * @deprecated
 */
 "getParticleIcon"(): $TextureAtlasSprite
 "useAmbientOcclusion"(): boolean
 "applyTransform"(arg0: $ItemDisplayContext$$Type, arg1: $PoseStack$$Type, arg2: boolean): $BakedModel
 "getRenderTypes"(arg0: $BlockState$$Type, arg1: $RandomSource$$Type, arg2: $ModelData$$Type): $ChunkRenderTypeSet
 "getRenderTypes"(arg0: $ItemStack$$Type, arg1: boolean): $List<($RenderType)>
 "getRenderPasses"(arg0: $ItemStack$$Type, arg1: boolean): $List<($BakedModel)>
 "getQuads"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $RandomSource$$Type, arg3: $ModelData$$Type, arg4: $RenderType$$Type): $List<($BakedQuad)>
 "getParticleIcon"(arg0: $ModelData$$Type): $TextureAtlasSprite
 "useAmbientOcclusion"(arg0: $BlockState$$Type, arg1: $ModelData$$Type, arg2: $RenderType$$Type): $TriState
 "getModelData"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ModelData$$Type): $ModelData
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
export type $BakedModel$$Type = ($BakedModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedModel$$Original = $BakedModel;}
declare module "net.minecraft.client.resources.sounds.SoundInstance$Attenuation" {
import {$Enum} from "java.lang.Enum"

export class $SoundInstance$Attenuation extends $Enum<($SoundInstance$Attenuation)> {
static readonly "NONE": $SoundInstance$Attenuation
static readonly "LINEAR": $SoundInstance$Attenuation

public static "values"(): ($SoundInstance$Attenuation)[]
public static "valueOf"(arg0: StringJS): $SoundInstance$Attenuation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundInstance$Attenuation$$Type = (("none") | ("linear"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundInstance$Attenuation$$Original = $SoundInstance$Attenuation;}
declare module "net.minecraft.client.resources.model.ModelBaker" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Material, $Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$IModelBakerExtension$$Interface} from "net.neoforged.neoforge.client.extensions.IModelBakerExtension"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$UnbakedModel, $UnbakedModel$$Type} from "net.minecraft.client.resources.model.UnbakedModel"

export interface $ModelBaker$$Interface extends $IModelBakerExtension$$Interface {
get "modelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
}

export class $ModelBaker implements $ModelBaker$$Interface {
 "getModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
/**
 * 
 * @deprecated
 */
 "bake"(arg0: $ResourceLocation$$Type, arg1: $ModelState$$Type): $BakedModel
 "getTopLevelModel"(arg0: $ModelResourceLocation$$Type): $UnbakedModel
 "bakeUncached"(arg0: $UnbakedModel$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
 "getModelTextureGetter"(): $Function<($Material), ($TextureAtlasSprite)>
 "bake"(arg0: $ResourceLocation$$Type, arg1: $ModelState$$Type, arg2: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>): $BakedModel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBaker$$Type = ($ModelBaker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBaker$$Original = $ModelBaker;}
declare module "net.minecraft.client.resources.metadata.animation.FrameSize" {
import {$Record} from "java.lang.Record"

export class $FrameSize extends $Record {
constructor(arg0: integer, arg1: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FrameSize$$Type = ({"height"?: integer, "width"?: integer}) | ([height?: integer, width?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FrameSize$$Original = $FrameSize;}
declare module "net.minecraft.client.resources.PaintingTextureManager" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$PaintingVariant$$Type} from "net.minecraft.world.entity.decoration.PaintingVariant"
import {$TextureAtlasHolder} from "net.minecraft.client.resources.TextureAtlasHolder"

export class $PaintingTextureManager extends $TextureAtlasHolder {
constructor(arg0: $TextureManager$$Type)

public "getBackSprite"(): $TextureAtlasSprite
public "get"(arg0: $PaintingVariant$$Type): $TextureAtlasSprite
get "backSprite"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PaintingTextureManager$$Type = ($PaintingTextureManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PaintingTextureManager$$Original = $PaintingTextureManager;}
declare module "net.minecraft.client.resources.language.ClientLanguage" {
import {$IMixinClientLanguage$$Interface} from "de.keksuccino.konkrete.mixin.mixins.client.IMixinClientLanguage"
import {$FormattedCharSequence} from "net.minecraft.util.FormattedCharSequence"
import {$Map} from "java.util.Map"
import {$FormattedText$$Type} from "net.minecraft.network.chat.FormattedText"
import {$List$$Type} from "java.util.List"
import {$IMixinClientLanguage$$Interface as $IMixinClientLanguage$0$$Interface} from "de.keksuccino.fancymenu.mixin.mixins.common.client.IMixinClientLanguage"
import {$Language} from "net.minecraft.locale.Language"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ClientLanguage extends $Language implements $IMixinClientLanguage$$Interface, $IMixinClientLanguage$0$$Interface {
 "storage": $Map<(StringJS), (StringJS)>
static readonly "DEFAULT": StringJS

public "has"(arg0: StringJS): boolean
public "getOrDefault"(arg0: StringJS, arg1: StringJS): StringJS
public "getComponent"(arg0: StringJS): $Component
public static "loadFrom"(arg0: $ResourceManager$$Type, arg1: $List$$Type<(StringJS)>, arg2: boolean): $ClientLanguage
public "isDefaultRightToLeft"(): boolean
public "getVisualOrder"(arg0: $FormattedText$$Type): $FormattedCharSequence
public "getLanguageData"(): $Map<(StringJS), (StringJS)>
public "getStorageKonkrete"(): $Map
public "getStorageFancyMenu"(): $Map
get "defaultRightToLeft"(): boolean
get "languageData"(): $Map<(StringJS), (StringJS)>
get "storageKonkrete"(): $Map
get "storageFancyMenu"(): $Map
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClientLanguage$$Type = ($ClientLanguage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClientLanguage$$Original = $ClientLanguage;}
declare module "net.minecraft.client.resources.model.ModelBakery" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Material} from "net.minecraft.client.resources.model.Material"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$BlockModel, $BlockModel$$Type} from "net.minecraft.client.renderer.block.model.BlockModel"
import {$UnbakedModel} from "net.minecraft.client.resources.model.UnbakedModel"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$Object2IntMap} from "it.unimi.dsi.fastutil.objects.Object2IntMap"
import {$ModelBakery$TextureGetter$$Type} from "net.minecraft.client.resources.model.ModelBakery$TextureGetter"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FileToIdConverter} from "net.minecraft.resources.FileToIdConverter"
import {$RenderType} from "net.minecraft.client.renderer.RenderType"
import {$BlockStateModelLoader$LoadedJson$$Type} from "net.minecraft.client.resources.model.BlockStateModelLoader$LoadedJson"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ModelBakery {
static readonly "BLOCK_ENTITY_MARKER": $BlockModel
static readonly "NO_PATTERN_SHIELD": $Material
static readonly "DESTROY_STAGE_COUNT": integer
static readonly "DESTROY_STAGES": $List<($ResourceLocation)>
static readonly "BANNER_BASE": $Material
static readonly "GENERATION_MARKER": $BlockModel
static readonly "BREAKING_LOCATIONS": $List<($ResourceLocation)>
static readonly "MISSING_MODEL_LOCATION": $ResourceLocation
static readonly "DESTROY_TYPES": $List<($RenderType)>
static readonly "MISSING_MODEL_MESH": StringJS
static readonly "FIRE_1": $Material
static readonly "LAVA_FLOW": $Material
static readonly "SHIELD_BASE": $Material
static readonly "FIRE_0": $Material
static readonly "WATER_FLOW": $Material
static readonly "MODEL_LISTER": $FileToIdConverter
static readonly "WATER_OVERLAY": $Material
static readonly "MISSING_MODEL_VARIANT": $ModelResourceLocation

constructor(arg0: $BlockColors$$Type, arg1: $ProfilerFiller$$Type, arg2: $Map$$Type<($ResourceLocation$$Type), ($BlockModel$$Type)>, arg3: $Map$$Type<($ResourceLocation$$Type), ($List$$Type<($BlockStateModelLoader$LoadedJson$$Type)>)>)

public "bakeModels"(arg0: $ModelBakery$TextureGetter$$Type): void
public "getBakedTopLevelModels"(): $Map<($ModelResourceLocation), ($BakedModel)>
public "getModelGroups"(): $Object2IntMap<($BlockState)>
public "getModel"(arg0: $ResourceLocation$$Type): $UnbakedModel
get "bakedTopLevelModels"(): $Map<($ModelResourceLocation), ($BakedModel)>
get "modelGroups"(): $Object2IntMap<($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelBakery$$Type = ($ModelBakery);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelBakery$$Original = $ModelBakery;}
declare module "net.minecraft.client.resources.MobEffectTextureManager" {
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$TextureAtlasHolder} from "net.minecraft.client.resources.TextureAtlasHolder"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"

export class $MobEffectTextureManager extends $TextureAtlasHolder {
constructor(arg0: $TextureManager$$Type)

public "get"(arg0: $Holder$$Type<($MobEffect)>): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectTextureManager$$Type = ($MobEffectTextureManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectTextureManager$$Original = $MobEffectTextureManager;}
declare module "net.minecraft.client.resources.TextureAtlasHolder" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MetadataSectionSerializer$$Type} from "net.minecraft.server.packs.metadata.MetadataSectionSerializer"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$Set$$Type} from "java.util.Set"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $TextureAtlasHolder implements $PreparableReloadListener$$Interface, $AutoCloseable$$Interface {
constructor(arg0: $TextureManager$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type)
constructor(arg0: $TextureManager$$Type, arg1: $ResourceLocation$$Type, arg2: $ResourceLocation$$Type, arg3: $Set$$Type<($MetadataSectionSerializer$$Type<(never)>)>)

public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "close"(): void
public "getSprite"(arg0: $ResourceLocation$$Type): $TextureAtlasSprite
public "getName"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TextureAtlasHolder$$Type = ($TextureAtlasHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TextureAtlasHolder$$Original = $TextureAtlasHolder;}
declare module "net.minecraft.client.resources.model.Material" {
import {$TextureAtlasSprite} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Comparator} from "java.util.Comparator"
import {$Function$$Type} from "java.util.function.Function"
import {$VertexConsumer} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$RenderType, $RenderType$$Type} from "net.minecraft.client.renderer.RenderType"

export class $Material {
static readonly "COMPARATOR": $Comparator<($Material)>

constructor(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type)

public "texture"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "buffer"(arg0: $MultiBufferSource$$Type, arg1: $Function$$Type<($ResourceLocation), ($RenderType$$Type)>): $VertexConsumer
public "buffer"(arg0: $MultiBufferSource$$Type, arg1: $Function$$Type<($ResourceLocation), ($RenderType$$Type)>, arg2: boolean): $VertexConsumer
public "atlasLocation"(): $ResourceLocation
public "sprite"(): $TextureAtlasSprite
public "renderType"(arg0: $Function$$Type<($ResourceLocation), ($RenderType$$Type)>): $RenderType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Material$$Type = ($Material);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Material$$Original = $Material;}
declare module "net.minecraft.client.resources.PlayerSkin$Model" {
import {$Enum} from "java.lang.Enum"

export class $PlayerSkin$Model extends $Enum<($PlayerSkin$Model)> {
static readonly "SLIM": $PlayerSkin$Model
static readonly "WIDE": $PlayerSkin$Model

public static "values"(): ($PlayerSkin$Model)[]
public static "valueOf"(arg0: StringJS): $PlayerSkin$Model
public "id"(): StringJS
public static "byName"(arg0: StringJS): $PlayerSkin$Model
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSkin$Model$$Type = (("slim") | ("wide"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSkin$Model$$Original = $PlayerSkin$Model;}
declare module "net.minecraft.client.resources.sounds.TickableSoundInstance" {
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Sound, $Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$SoundInstance$Attenuation} from "net.minecraft.client.resources.sounds.SoundInstance$Attenuation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$SoundSource} from "net.minecraft.sounds.SoundSource"
import {$WeighedSoundEvents} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$SoundInstance$$Interface} from "net.minecraft.client.resources.sounds.SoundInstance"
import {$SoundBufferLibrary$$Type} from "net.minecraft.client.sounds.SoundBufferLibrary"
import {$AudioStream} from "net.minecraft.client.sounds.AudioStream"

export interface $TickableSoundInstance$$Interface extends $SoundInstance$$Interface {
get "stopped"(): boolean
get "source"(): $SoundSource
get "y"(): double
get "delay"(): integer
get "location"(): $ResourceLocation
get "relative"(): boolean
get "x"(): double
get "z"(): double
get "looping"(): boolean
get "attenuation"(): $SoundInstance$Attenuation
get "volume"(): float
get "pitch"(): float
get "sound"(): $Sound
}

export class $TickableSoundInstance implements $TickableSoundInstance$$Interface {
 "tick"(): void
 "isStopped"(): boolean
 "getSource"(): $SoundSource
 "getStream"(arg0: $SoundBufferLibrary$$Type, arg1: $Sound$$Type, arg2: boolean): $CompletableFuture<($AudioStream)>
 "getY"(): double
 "getDelay"(): integer
 "getLocation"(): $ResourceLocation
 "resolve"(arg0: $SoundManager$$Type): $WeighedSoundEvents
 "isRelative"(): boolean
 "getX"(): double
 "getZ"(): double
static "createUnseededRandom"(): $RandomSource
 "isLooping"(): boolean
 "getAttenuation"(): $SoundInstance$Attenuation
 "canStartSilent"(): boolean
 "canPlaySound"(): boolean
 "getVolume"(): float
 "getPitch"(): float
 "getSound"(): $Sound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TickableSoundInstance$$Type = ($TickableSoundInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TickableSoundInstance$$Original = $TickableSoundInstance;}
declare module "net.minecraft.client.resources.SplashManager" {
import {$User$$Type} from "net.minecraft.client.User"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$SimplePreparableReloadListener} from "net.minecraft.server.packs.resources.SimplePreparableReloadListener"
import {$SplashRenderer} from "net.minecraft.client.gui.components.SplashRenderer"

export class $SplashManager extends $SimplePreparableReloadListener<($List<(StringJS)>)> {
static readonly "SPLASHES_LOCATION": $ResourceLocation

constructor(arg0: $User$$Type)

public "getSplash"(): $SplashRenderer
get "splash"(): $SplashRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SplashManager$$Type = ($SplashManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SplashManager$$Original = $SplashManager;}
declare module "net.minecraft.client.resources.model.UnbakedModel" {
import {$TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$Collection} from "java.util.Collection"
import {$Material$$Type} from "net.minecraft.client.resources.model.Material"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$List, $List$$Type} from "java.util.List"
import {$BlockElementFace, $BlockElementFace$$Type} from "net.minecraft.client.renderer.block.model.BlockElementFace"
import {$CullShapeElement, $CullShapeElement$$Type} from "ca.fxco.moreculling.api.model.CullShapeElement"
import {$ModelState$$Type} from "net.minecraft.client.resources.model.ModelState"
import {$ExtendedUnbakedModel$$Interface} from "ca.fxco.moreculling.api.model.ExtendedUnbakedModel"
import {$UnbakedModel_extendsMixin$$Interface} from "ca.fxco.moreculling.mixin.models.cullshape.UnbakedModel_extendsMixin"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function$$Type} from "java.util.function.Function"
import {$ModelBaker$$Type} from "net.minecraft.client.resources.model.ModelBaker"

export interface $UnbakedModel$$Interface extends $ExtendedUnbakedModel$$Interface, $UnbakedModel_extendsMixin$$Interface {
get "dependencies"(): $Collection<($ResourceLocation)>
}

export class $UnbakedModel implements $UnbakedModel$$Interface {
 "resolveParents"(arg0: $Function$$Type<($ResourceLocation), ($UnbakedModel$$Type)>): void
 "getDependencies"(): $Collection<($ResourceLocation)>
 "bake"(arg0: $ModelBaker$$Type, arg1: $Function$$Type<($Material), ($TextureAtlasSprite$$Type)>, arg2: $ModelState$$Type): $BakedModel
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
export type $UnbakedModel$$Type = ($UnbakedModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnbakedModel$$Original = $UnbakedModel;}
declare module "net.minecraft.client.resources.PlayerSkin" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$PlayerSkin$Model, $PlayerSkin$Model$$Type} from "net.minecraft.client.resources.PlayerSkin$Model"
import {$Record} from "java.lang.Record"

export class $PlayerSkin extends $Record {
constructor(arg0: $ResourceLocation$$Type, arg1: StringJS, arg2: $ResourceLocation$$Type, arg3: $ResourceLocation$$Type, arg4: $PlayerSkin$Model$$Type, arg5: boolean)

public "textureUrl"(): StringJS
public "elytraTexture"(): $ResourceLocation
public "capeTexture"(): $ResourceLocation
public "texture"(): $ResourceLocation
public "secure"(): boolean
public "model"(): $PlayerSkin$Model
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerSkin$$Type = ({"secure"?: boolean, "model"?: $PlayerSkin$Model$$Type, "elytraTexture"?: $ResourceLocation$$Type, "capeTexture"?: $ResourceLocation$$Type, "texture"?: $ResourceLocation$$Type, "textureUrl"?: StringJS}) | ([secure?: boolean, model?: $PlayerSkin$Model$$Type, elytraTexture?: $ResourceLocation$$Type, capeTexture?: $ResourceLocation$$Type, texture?: $ResourceLocation$$Type, textureUrl?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerSkin$$Original = $PlayerSkin;}
declare module "net.minecraft.client.resources.server.DownloadedPackSource" {
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$UUID$$Type} from "java.util.UUID"
import {$GameConfig$UserData$$Type} from "net.minecraft.client.main.GameConfig$UserData"
import {$URL$$Type} from "java.net.URL"
import {$ServerPackManager$PackPromptStatus$$Type} from "net.minecraft.client.resources.server.ServerPackManager$PackPromptStatus"
import {$Minecraft$$Type} from "net.minecraft.client.Minecraft"
import {$Path$$Type} from "java.nio.file.Path"
import {$RepositorySource} from "net.minecraft.server.packs.repository.RepositorySource"
import {$Connection$$Type} from "net.minecraft.network.Connection"

export class $DownloadedPackSource implements $AutoCloseable$$Interface {
constructor(arg0: $Minecraft$$Type, arg1: $Path$$Type, arg2: $GameConfig$UserData$$Type)

public "popAll"(): void
public "close"(): void
public "createRepositorySource"(): $RepositorySource
public "onRecovery"(): void
public "cleanupAfterDisconnect"(): void
public "onReloadSuccess"(): void
public "onRecoveryFailure"(): void
public "pushPack"(arg0: $UUID$$Type, arg1: $URL$$Type, arg2: StringJS): void
public "pushLocalPack"(arg0: $UUID$$Type, arg1: $Path$$Type): void
public "popPack"(arg0: $UUID$$Type): void
public "configureForServerControl"(arg0: $Connection$$Type, arg1: $ServerPackManager$PackPromptStatus$$Type): void
public "allowServerPacks"(): void
public "rejectServerPacks"(): void
public "configureForLocalWorld"(): void
public "waitForPackFeedback"(arg0: $UUID$$Type): $CompletableFuture<(void)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DownloadedPackSource$$Type = ($DownloadedPackSource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DownloadedPackSource$$Original = $DownloadedPackSource;}
declare module "net.minecraft.client.resources.sounds.SoundInstance" {
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Sound, $Sound$$Type} from "net.minecraft.client.resources.sounds.Sound"
import {$SoundInstance$Attenuation} from "net.minecraft.client.resources.sounds.SoundInstance$Attenuation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$SoundSource} from "net.minecraft.sounds.SoundSource"
import {$WeighedSoundEvents} from "net.minecraft.client.sounds.WeighedSoundEvents"
import {$SoundManager$$Type} from "net.minecraft.client.sounds.SoundManager"
import {$SoundBufferLibrary$$Type} from "net.minecraft.client.sounds.SoundBufferLibrary"
import {$AudioStream} from "net.minecraft.client.sounds.AudioStream"

export interface $SoundInstance$$Interface {
get "source"(): $SoundSource
get "y"(): double
get "delay"(): integer
get "location"(): $ResourceLocation
get "relative"(): boolean
get "x"(): double
get "z"(): double
get "looping"(): boolean
get "attenuation"(): $SoundInstance$Attenuation
get "volume"(): float
get "pitch"(): float
get "sound"(): $Sound
}

export class $SoundInstance implements $SoundInstance$$Interface {
 "getSource"(): $SoundSource
 "getStream"(arg0: $SoundBufferLibrary$$Type, arg1: $Sound$$Type, arg2: boolean): $CompletableFuture<($AudioStream)>
 "getY"(): double
 "getDelay"(): integer
 "getLocation"(): $ResourceLocation
 "resolve"(arg0: $SoundManager$$Type): $WeighedSoundEvents
 "isRelative"(): boolean
 "getX"(): double
 "getZ"(): double
static "createUnseededRandom"(): $RandomSource
 "isLooping"(): boolean
 "getAttenuation"(): $SoundInstance$Attenuation
 "canStartSilent"(): boolean
 "canPlaySound"(): boolean
 "getVolume"(): float
 "getPitch"(): float
 "getSound"(): $Sound
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoundInstance$$Type = ($SoundInstance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoundInstance$$Original = $SoundInstance;}
declare module "net.minecraft.client.resources.model.ModelManager" {
import {$Map} from "java.util.Map"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$BakedModel} from "net.minecraft.client.resources.model.BakedModel"
import {$ModelResourceLocation, $ModelResourceLocation$$Type} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$PreparableReloadListener$$Interface} from "net.minecraft.server.packs.resources.PreparableReloadListener"
import {$TextureAtlas} from "net.minecraft.client.renderer.texture.TextureAtlas"
import {$PreparableReloadListener$PreparationBarrier$$Type} from "net.minecraft.server.packs.resources.PreparableReloadListener$PreparationBarrier"
import {$ProfilerFiller$$Type} from "net.minecraft.util.profiling.ProfilerFiller"
import {$BlockColors$$Type} from "net.minecraft.client.color.block.BlockColors"
import {$TextureManager$$Type} from "net.minecraft.client.renderer.texture.TextureManager"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$ModelBakery} from "net.minecraft.client.resources.model.ModelBakery"
import {$Executor$$Type} from "java.util.concurrent.Executor"
import {$BlockModelShaper} from "net.minecraft.client.renderer.block.BlockModelShaper"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ResourceManager$$Type} from "net.minecraft.server.packs.resources.ResourceManager"

export class $ModelManager implements $PreparableReloadListener$$Interface, $AutoCloseable$$Interface {
 "bakedRegistry": $Map<($ModelResourceLocation), ($BakedModel)>

constructor(arg0: $TextureManager$$Type, arg1: $BlockColors$$Type, arg2: integer)

public "getModelBakery"(): $ModelBakery
public "reload"(arg0: $PreparableReloadListener$PreparationBarrier$$Type, arg1: $ResourceManager$$Type, arg2: $ProfilerFiller$$Type, arg3: $ProfilerFiller$$Type, arg4: $Executor$$Type, arg5: $Executor$$Type): $CompletableFuture<(void)>
public "close"(): void
public "getModel"(arg0: $ModelResourceLocation$$Type): $BakedModel
public "getBlockModelShaper"(): $BlockModelShaper
public "getMissingModel"(): $BakedModel
public "getAtlas"(arg0: $ResourceLocation$$Type): $TextureAtlas
public "updateMaxMipLevel"(arg0: integer): void
public "requiresRender"(arg0: $BlockState$$Type, arg1: $BlockState$$Type): boolean
public "getName"(): StringJS
get "modelBakery"(): $ModelBakery
get "blockModelShaper"(): $BlockModelShaper
get "missingModel"(): $BakedModel
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelManager$$Type = ($ModelManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelManager$$Original = $ModelManager;}
declare module "net.minecraft.client.resources.server.ServerPackManager$PackPromptStatus" {
import {$Enum} from "java.lang.Enum"

export class $ServerPackManager$PackPromptStatus extends $Enum<($ServerPackManager$PackPromptStatus)> {
static readonly "ALLOWED": $ServerPackManager$PackPromptStatus
static readonly "PENDING": $ServerPackManager$PackPromptStatus
static readonly "DECLINED": $ServerPackManager$PackPromptStatus

public static "values"(): ($ServerPackManager$PackPromptStatus)[]
public static "valueOf"(arg0: StringJS): $ServerPackManager$PackPromptStatus
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPackManager$PackPromptStatus$$Type = (("pending") | ("allowed") | ("declined"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPackManager$PackPromptStatus$$Original = $ServerPackManager$PackPromptStatus;}
declare module "net.minecraft.client.resources.model.ModelResourceLocation" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $ModelResourceLocation extends $Record {
static readonly "INVENTORY_VARIANT": StringJS
static readonly "STANDALONE_VARIANT": StringJS

constructor(id: $ResourceLocation$$Type, variant: StringJS)

public static "standalone"(arg0: $ResourceLocation$$Type): $ModelResourceLocation
public "variant"(): StringJS
public "getVariant"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "id"(): $ResourceLocation
public static "vanilla"(arg0: StringJS, arg1: StringJS): $ModelResourceLocation
public static "inventory"(arg0: $ResourceLocation$$Type): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModelResourceLocation$$Type = ({"id"?: $ResourceLocation$$Type, "variant"?: StringJS}) | ([id?: $ResourceLocation$$Type, variant?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModelResourceLocation$$Original = $ModelResourceLocation;}
declare module "net.minecraft.client.resources.language.LanguageInfo" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $LanguageInfo extends $Record {
static readonly "CODEC": $Codec<($LanguageInfo)>

constructor(arg0: StringJS, arg1: StringJS, arg2: boolean)

public "bidirectional"(): boolean
public "toComponent"(): $Component
public "region"(): StringJS
public "name"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanguageInfo$$Type = ({"bidirectional"?: boolean, "name"?: StringJS, "region"?: StringJS}) | ([bidirectional?: boolean, name?: StringJS, region?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LanguageInfo$$Original = $LanguageInfo;}
declare module "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$GuiSpriteScaling$Type, $GuiSpriteScaling$Type$$Type} from "net.minecraft.client.resources.metadata.gui.GuiSpriteScaling$Type"

export interface $GuiSpriteScaling$$Interface {

(): $GuiSpriteScaling$Type$$Type
}

export class $GuiSpriteScaling implements $GuiSpriteScaling$$Interface {
static readonly "CODEC": $Codec<($GuiSpriteScaling)>
static readonly "DEFAULT": $GuiSpriteScaling

 "type"(): $GuiSpriteScaling$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiSpriteScaling$$Type = (() => $GuiSpriteScaling$Type$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiSpriteScaling$$Original = $GuiSpriteScaling;}
