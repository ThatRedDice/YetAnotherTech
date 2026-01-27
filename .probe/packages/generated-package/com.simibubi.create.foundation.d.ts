declare module "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer$Fluid" {
import {$IMultiBlockEntityContainer$$Interface} from "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IFluidTank} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IMultiBlockEntityContainer$Fluid$$Interface extends $IMultiBlockEntityContainer$$Interface {
get "maxWidth"(): integer
get "controllerBE"(): T
get "controller"(): boolean
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "mainConnectionAxis"(): $Direction$Axis
get "lastKnownPos"(): $BlockPos
set "extraData"(value: any)
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "extraData"(): any
}

export class $IMultiBlockEntityContainer$Fluid implements $IMultiBlockEntityContainer$Fluid$$Interface {
 "getTankSize"(arg0: integer): integer
 "setTankSize"(arg0: integer, arg1: integer): void
 "hasTank"(): boolean
 "getFluid"(arg0: integer): $FluidStack
 "getTank"(arg0: integer): $IFluidTank
 "getMaxWidth"(): integer
 "getControllerBE"<T extends $BlockEntity>(): T
 "isController"(): boolean
 "getController"(): $BlockPos
 "setController"(arg0: $BlockPos$$Type): void
 "removeController"(arg0: boolean): void
 "notifyMultiUpdated"(): void
 "getMainConnectionAxis"(): $Direction$Axis
 "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
 "getLastKnownPos"(): $BlockPos
 "preventConnectivityUpdate"(): void
 "setExtraData"(arg0: any): void
 "modifyExtraData"(arg0: any): any
 "getWidth"(): integer
 "getHeight"(): integer
 "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
 "setWidth"(arg0: integer): void
 "setHeight"(arg0: integer): void
 "getExtraData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiBlockEntityContainer$Fluid$$Type = ($IMultiBlockEntityContainer$Fluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiBlockEntityContainer$Fluid$$Original = $IMultiBlockEntityContainer$Fluid;}
declare module "com.simibubi.create.foundation.mixin.accessor.BlockLootSubProviderAccessor" {
import {$LootItemCondition$Builder, $LootItemCondition$Builder$$Type} from "net.minecraft.world.level.storage.loot.predicates.LootItemCondition$Builder"

export interface $BlockLootSubProviderAccessor$$Interface {

(): $LootItemCondition$Builder$$Type
}

export class $BlockLootSubProviderAccessor implements $BlockLootSubProviderAccessor$$Interface {
 "create$hasSilkTouch"(): $LootItemCondition$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockLootSubProviderAccessor$$Type = (() => $LootItemCondition$Builder$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockLootSubProviderAccessor$$Original = $BlockLootSubProviderAccessor;}
declare module "com.simibubi.create.foundation.block.render.BlockDestructionProgressExtension" {
import {$Set, $Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $BlockDestructionProgressExtension$$Interface {
}

export class $BlockDestructionProgressExtension implements $BlockDestructionProgressExtension$$Interface {
 "create$setExtraPositions"(arg0: $Set$$Type<($BlockPos$$Type)>): void
 "create$getExtraPositions"(): $Set<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDestructionProgressExtension$$Type = ($BlockDestructionProgressExtension);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockDestructionProgressExtension$$Original = $BlockDestructionProgressExtension;}
declare module "com.simibubi.create.foundation.mixin.accessor.AgeableListModelAccessor" {
import {$Iterable} from "java.lang.Iterable"
import {$ModelPart} from "net.minecraft.client.model.geom.ModelPart"

export interface $AgeableListModelAccessor$$Interface {
}

export class $AgeableListModelAccessor implements $AgeableListModelAccessor$$Interface {
 "create$callHeadParts"(): $Iterable<($ModelPart)>
 "create$callBodyParts"(): $Iterable<($ModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeableListModelAccessor$$Type = ($AgeableListModelAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AgeableListModelAccessor$$Original = $AgeableListModelAccessor;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsFormatter" {
import {$Function$$Type} from "java.util.function.Function"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$ValueSettingsBehaviour$ValueSettings$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBehaviour$ValueSettings"

export class $ValueSettingsFormatter {
constructor(arg0: $Function$$Type<($ValueSettingsBehaviour$ValueSettings), ($MutableComponent$$Type)>)

public "format"(arg0: $ValueSettingsBehaviour$ValueSettings$$Type): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueSettingsFormatter$$Type = ($ValueSettingsFormatter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueSettingsFormatter$$Original = $ValueSettingsFormatter;}
declare module "com.simibubi.create.foundation.block.connected.CTType" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ConnectedTextureBehaviour$CTContext$$Type} from "com.simibubi.create.foundation.block.connected.ConnectedTextureBehaviour$CTContext"
import {$ConnectedTextureBehaviour$ContextRequirement} from "com.simibubi.create.foundation.block.connected.ConnectedTextureBehaviour$ContextRequirement"

export interface $CTType$$Interface {
get "sheetSize"(): integer
get "contextRequirement"(): $ConnectedTextureBehaviour$ContextRequirement
get "id"(): $ResourceLocation
}

export class $CTType implements $CTType$$Interface {
 "getSheetSize"(): integer
 "getContextRequirement"(): $ConnectedTextureBehaviour$ContextRequirement
 "getTextureIndex"(arg0: $ConnectedTextureBehaviour$CTContext$$Type): integer
 "getId"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CTType$$Type = ($CTType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CTType$$Original = $CTType;}
declare module "com.simibubi.create.foundation.gui.AllIcons" {
import {$ScreenElement$$Interface} from "net.createmod.catnip.gui.element.ScreenElement"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$DelegatedStencilElement} from "net.createmod.catnip.gui.element.DelegatedStencilElement"

export class $AllIcons implements $ScreenElement$$Interface {
static readonly "I_SKIP_BLOCK_ENTITIES": $AllIcons
static readonly "I_PARTIAL_REQUESTS": $AllIcons
static readonly "I_RESPECT_NBT": $AllIcons
static readonly "I_FULL_REQUESTS": $AllIcons
static readonly "I_SEQ_REPEAT": $AllIcons
static readonly "I_3x3": $AllIcons
static readonly "I_INSERTED": $AllIcons
static readonly "I_CONFIG_SAVE": $AllIcons
static readonly "I_FOLLOW_DIAGONAL": $AllIcons
static readonly "I_FX_SURFACE_OFF": $AllIcons
static readonly "I_CART_ROTATE": $AllIcons
static readonly "I_DONT_REPLACE": $AllIcons
static readonly "I_FX_SURFACE_ON": $AllIcons
static readonly "VALUE_BOX_HOVER_8PX": $AllIcons
static readonly "I_TUNNEL_RANDOMIZE": $AllIcons
static readonly "I_MTD_SLOW_MODE": $AllIcons
static readonly "I_ADD_INVERTED_ATTRIBUTE": $AllIcons
static readonly "I_TOOL_DEPLOY": $AllIcons
static readonly "VALUE_BOX_HOVER_4PX": $AllIcons
static readonly "I_ROTATE_CCW": $AllIcons
static readonly "I_PATTERN_SOLID": $AllIcons
static readonly "I_CLEAR": $AllIcons
static readonly "I_WHITELIST_AND": $AllIcons
static readonly "I_REPLACE_EMPTY": $AllIcons
static readonly "I_CONFIRM": $AllIcons
static readonly "I_ROLLER_PAVE": $AllIcons
static readonly "I_PATTERN_CHANCE_75": $AllIcons
static readonly "I_WHITELIST_NOT": $AllIcons
static readonly "I_MTD_CLOSE": $AllIcons
static readonly "I_PAUSE": $AllIcons
static readonly "I_PRIORITY_VERY_HIGH": $AllIcons
static readonly "I_TRASH": $AllIcons
static readonly "I_MOVE_PLACE_RETURNED": $AllIcons
static readonly "I_OPEN_FOLDER": $AllIcons
static readonly "I_DICE": $AllIcons
static readonly "I_MTD_SCAN": $AllIcons
static readonly "I_MOVE_GAUGE": $AllIcons
static readonly "I_CONFIG_DISCARD": $AllIcons
static readonly "I_PLACE": $AllIcons
static readonly "I_TOOL_ROTATE": $AllIcons
static readonly "I_RMB": $AllIcons
static readonly "I_CLEAR_CHECKED": $AllIcons
static readonly "I_TUNNEL_FORCED_ROUND_ROBIN": $AllIcons
static readonly "I_WHITELIST": $AllIcons
static readonly "I_FLIP": $AllIcons
static readonly "I_ROTATE_PLACE": $AllIcons
static readonly "I_PLACEMENT_SETTINGS": $AllIcons
static readonly "I_REFRESH": $AllIcons
static readonly "I_FILL": $AllIcons
static readonly "I_FX_BLEND": $AllIcons
static readonly "I_SKIP_MISSING": $AllIcons
static readonly "I_CONFIG_OPEN": $AllIcons
static readonly "I_PATTERN_CHANCE_50": $AllIcons
static readonly "I_SEND_ONLY": $AllIcons
static readonly "I_PRIORITY_HIGH": $AllIcons
static readonly "I_CART_ROTATE_PAUSED": $AllIcons
static readonly "I_TUNNEL_ROUND_ROBIN": $AllIcons
static readonly "ICON_ATLAS": $ResourceLocation
static readonly "I_CONFIG_PREV": $AllIcons
static readonly "I_ROLLER_FILL": $AllIcons
static readonly "I_TUNNEL_PREFER_NEAREST": $AllIcons
static readonly "I_MTD_USER_MODE": $AllIcons
static readonly "I_WHITELIST_OR": $AllIcons
static readonly "I_ARM_FORCED_ROUND_ROBIN": $AllIcons
static readonly "I_ROLLER_WIDE_FILL": $AllIcons
static readonly "I_CONFIG_LOCKED": $AllIcons
static readonly "I_TUNNEL_FORCED_SPLIT": $AllIcons
static readonly "I_BLACKLIST": $AllIcons
static readonly "I_REPLACE_SOLID": $AllIcons
static readonly "I_REPLACE": $AllIcons
static readonly "I_FX_FIELD_ON": $AllIcons
static readonly "I_ROTATE_NEVER_PLACE": $AllIcons
static readonly "I_TOOL_MOVE_XZ": $AllIcons
static readonly "VALUE_BOX_HOVER_6PX": $AllIcons
static readonly "I_FX_FIELD_OFF": $AllIcons
static readonly "I_PLAY": $AllIcons
static readonly "I_MOVE_NEVER_PLACE": $AllIcons
static readonly "I_FLATTEN": $AllIcons
static readonly "I_SCROLL": $AllIcons
static readonly "I_MTD_RIGHT": $AllIcons
static readonly "I_NONE": $AllIcons
static readonly "I_TUNNEL_SYNCHRONIZE": $AllIcons
static readonly "I_PRIORITY_VERY_LOW": $AllIcons
static readonly "I_TOOL_MIRROR": $AllIcons
static readonly "I_TUNNEL_SPLIT": $AllIcons
static readonly "I_FX_BLEND_OFF": $AllIcons
static readonly "I_CART_ROTATE_LOCKED": $AllIcons
static readonly "ICON_ATLAS_SIZE": integer
static readonly "I_PRIORITY_LOW": $AllIcons
static readonly "I_CONFIG_BACK": $AllIcons
static readonly "I_MTD_REPLAY": $AllIcons
static readonly "I_DISABLE": $AllIcons
static readonly "I_CONFIG_NEXT": $AllIcons
static readonly "I_CONFIG_UNLOCKED": $AllIcons
static readonly "I_TOOL_MOVE_Y": $AllIcons
static readonly "I_PASSIVE": $AllIcons
static readonly "I_MOVE_PLACE": $AllIcons
static readonly "I_ADD": $AllIcons
static readonly "I_MTD_LEFT": $AllIcons
static readonly "I_PATTERN_CHECKERED_INVERSED": $AllIcons
static readonly "I_ATTACHED": $AllIcons
static readonly "I_ROTATE_PLACE_RETURNED": $AllIcons
static readonly "I_SCHEMATIC": $AllIcons
static readonly "I_CENTERED": $AllIcons
static readonly "I_PATTERN_CHANCE_25": $AllIcons
static readonly "I_PATTERN_CHECKERED": $AllIcons
static readonly "I_STOP": $AllIcons
static readonly "I_ARM_ROUND_ROBIN": $AllIcons
static readonly "I_ACTIVE": $AllIcons
static readonly "I_LMB": $AllIcons
static readonly "I_MINUTE_HAND_FIRST": $AllIcons
static readonly "I_SEND_AND_RECEIVE": $AllIcons
static readonly "I_ARM_PREFER_FIRST": $AllIcons
static readonly "I_HOUR_HAND_FIRST": $AllIcons
static readonly "I_IGNORE_NBT": $AllIcons
static readonly "I_OVERLAY": $AllIcons
static readonly "I_VIEW_SCHEDULE": $AllIcons
static readonly "I_TARGET": $AllIcons
static readonly "I_FOLLOW_MATERIAL": $AllIcons
static readonly "I_TOOLBOX": $AllIcons
static readonly "I_HOUR_HAND_FIRST_24": $AllIcons
static readonly "I_CONFIG_RESET": $AllIcons
static readonly "I_REPLACE_ANY": $AllIcons

constructor(arg0: integer, arg1: integer)

public "asStencil"(): $DelegatedStencilElement
public "bind"(): void
public "render"(arg0: $PoseStack$$Type, arg1: $MultiBufferSource$$Type, arg2: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllIcons$$Type = ($AllIcons);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AllIcons$$Original = $AllIcons;}
declare module "com.simibubi.create.foundation.mixin.accessor.GuiAccessor" {
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$SubtitleOverlay} from "net.minecraft.client.gui.components.SubtitleOverlay"

export interface $GuiAccessor$$Interface {
}

export class $GuiAccessor implements $GuiAccessor$$Interface {
 "create$getSubtitleOverlay"(): $SubtitleOverlay
 "create$getToolHighlightTimer"(): integer
 "create$renderTextureOverlay"(arg0: $GuiGraphics$$Type, arg1: $ResourceLocation$$Type, arg2: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GuiAccessor$$Type = ($GuiAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GuiAccessor$$Original = $GuiAccessor;}
declare module "com.simibubi.create.foundation.advancement.CriterionTriggerBase$Instance" {
import {$Optional} from "java.util.Optional"
import {$ContextAwarePredicate} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionValidator$$Type} from "net.minecraft.advancements.critereon.CriterionValidator"
import {$SimpleCriterionTrigger$SimpleInstance$$Interface} from "net.minecraft.advancements.critereon.SimpleCriterionTrigger$SimpleInstance"

export class $CriterionTriggerBase$Instance implements $SimpleCriterionTrigger$SimpleInstance$$Interface {
constructor()

public "validate"(arg0: $CriterionValidator$$Type): void
public "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionTriggerBase$Instance$$Type = ($CriterionTriggerBase$Instance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionTriggerBase$Instance$$Original = $CriterionTriggerBase$Instance;}
declare module "com.simibubi.create.foundation.block.CreateCopperStairBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$StairsShape} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$StairBlock} from "net.minecraft.world.level.block.StairBlock"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $CreateCopperStairBlock extends $StairBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StairBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getExplosionResistance"(): float
public "codec"(): $MapCodec<($StairBlock)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "explosionResistance"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateCopperStairBlock$$Type = ($CreateCopperStairBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateCopperStairBlock$$Original = $CreateCopperStairBlock;}
declare module "com.simibubi.create.foundation.recipe.IRecipeTypeInfo" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"

export interface $IRecipeTypeInfo$$Interface {
get "serializer"(): T
get "id"(): $ResourceLocation
get "type"(): $RecipeType<(R)>
}

export class $IRecipeTypeInfo implements $IRecipeTypeInfo$$Interface {
 "getSerializer"<T extends $RecipeSerializer<(object)>>(): T
 "getId"(): $ResourceLocation
 "getType"<I extends $RecipeInput, R extends $Recipe<(object)>>(): $RecipeType<(R)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeTypeInfo$$Type = ($IRecipeTypeInfo);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRecipeTypeInfo$$Original = $IRecipeTypeInfo;}
declare module "com.simibubi.create.foundation.virtualWorld.VirtualRenderWorld" {
import {$Iterable} from "java.lang.Iterable"
import {$MapId, $MapId$$Type} from "net.minecraft.world.level.saveddata.maps.MapId"
import {$LevelLightEngine} from "net.minecraft.world.level.lighting.LevelLightEngine"
import {$LevelHeightAccessor} from "net.minecraft.world.level.LevelHeightAccessor"
import {$ChunkAccess} from "net.minecraft.world.level.chunk.ChunkAccess"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$WeakReference} from "java.lang.ref.WeakReference"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$GameEvent$$Type} from "net.minecraft.world.level.gameevent.GameEvent"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$Biome} from "net.minecraft.world.level.biome.Biome"
import {$TickRateManager} from "net.minecraft.world.TickRateManager"
import {$MapItemSavedData, $MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ArrayList} from "java.util.ArrayList"
import {$BiomeManager} from "net.minecraft.world.level.biome.BiomeManager"
import {$RecipeManager} from "net.minecraft.world.item.crafting.RecipeManager"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Fluid} from "net.minecraft.world.level.material.Fluid"
import {$LevelChunk} from "net.minecraft.world.level.chunk.LevelChunk"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$PotionBrewing} from "net.minecraft.world.item.alchemy.PotionBrewing"
import {$FeatureFlagSet} from "net.minecraft.world.flag.FeatureFlagSet"
import {$BlockSnapshot} from "net.neoforged.neoforge.common.util.BlockSnapshot"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Trackable} from "dev.uncandango.alltheleaks.mixin.Trackable"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ChunkSource} from "net.minecraft.world.level.chunk.ChunkSource"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$VisualizationLevel$$Interface} from "dev.engine_room.flywheel.api.visualization.VisualizationLevel"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function$$Type} from "java.util.function.Function"
import {$Class} from "java.lang.Class"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$ObjectOpenCustomHashSet} from "it.unimi.dsi.fastutil.objects.ObjectOpenCustomHashSet"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$LightLayer$$Type} from "net.minecraft.world.level.LightLayer"
import {$GameEvent$Context$$Type} from "net.minecraft.world.level.gameevent.GameEvent$Context"
import {$Collection$$Type} from "java.util.Collection"
import {$Map} from "java.util.Map"
import {$TickingBlockEntity} from "net.minecraft.world.level.block.entity.TickingBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$LevelTickAccess} from "net.minecraft.world.ticks.LevelTickAccess"
import {$EntityGetter} from "net.minecraft.world.level.EntityGetter"
import {$Scoreboard} from "net.minecraft.world.scores.Scoreboard"

export class $VirtualRenderWorld extends $Level implements $VisualizationLevel$$Interface {
 "restoringBlockSnapshots": boolean
 "oThunderLevel": float
static readonly "LONG_PARTICLE_CLIP_RANGE": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "thunderLevel": float
readonly "random": $RandomSource
 "capturedBlockSnapshots": $ArrayList<($BlockSnapshot)>
static readonly "OVERWORLD": $ResourceKey<($Level)>
static readonly "TICKS_PER_DAY": integer
static readonly "MAX_ENTITY_SPAWN_Y": integer
static readonly "NETHER": $ResourceKey<($Level)>
 "oRainLevel": float
static readonly "RESOURCE_KEY_CODEC": $Codec<($ResourceKey<($Level)>)>
static readonly "MAX_BRIGHTNESS": integer
static readonly "END": $ResourceKey<($Level)>
static readonly "MAX_LEVEL_SIZE": integer
static readonly "SHORT_PARTICLE_CLIP_RANGE": integer
static readonly "MIN_ENTITY_SPAWN_Y": integer
readonly "blockEntityTickers": $List<($TickingBlockEntity)>
 "rainLevel": float
 "captureBlockSnapshots": boolean

constructor(arg0: $Level$$Type, arg1: integer, arg2: integer, arg3: $Vec3i$$Type, arg4: $Runnable$$Type)

public "setExternalLight"(arg0: integer): void
public "resetExternalLight"(): void
public static "nextMultipleOf16"(arg0: integer): integer
public "runLightEngine"(): void
public "getHeight"(): integer
public "getEntity"(arg0: integer): $Entity
public "clear"(): void
public "isLoaded"(arg0: $BlockPos$$Type): boolean
public "setBlock"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: integer, arg3: integer): boolean
public "getFluidState"(arg0: $BlockPos$$Type): $FluidState
public "getBlockState"(arg0: integer, arg1: integer, arg2: integer): $BlockState
public "getBlockState"(arg0: $BlockPos$$Type): $BlockState
public "enabledFeatures"(): $FeatureFlagSet
public "tickRateManager"(): $TickRateManager
public "getBlockEntity"(arg0: $BlockPos$$Type): $BlockEntity
public "getBiome"(arg0: $BlockPos$$Type): $Holder<($Biome)>
public "getChunkSource"(): $ChunkSource
public "playSeededSound"(arg0: $Player$$Type, arg1: double, arg2: double, arg3: double, arg4: $Holder$$Type<($SoundEvent)>, arg5: $SoundSource$$Type, arg6: float, arg7: float, arg8: long): void
public "playSeededSound"(arg0: $Player$$Type, arg1: $Entity$$Type, arg2: $Holder$$Type<($SoundEvent)>, arg3: $SoundSource$$Type, arg4: float, arg5: float, arg6: long): void
public "gameEvent"(arg0: $Holder$$Type<($GameEvent)>, arg1: $Vec3$$Type, arg2: $GameEvent$Context$$Type): void
public "getScoreboard"(): $Scoreboard
public "getMinBuildHeight"(): integer
public "getDayTimeFraction"(): float
public "levelEvent"(arg0: $Player$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: integer): void
public "getChunk"(arg0: $BlockPos$$Type): $ChunkAccess
public "getChunk"(arg0: integer, arg1: integer): $ChunkAccess
public "getBiomeManager"(): $BiomeManager
public "getLightEngine"(): $LevelLightEngine
public "gatherChunkSourceStats"(): StringJS
public "setBlockEntity"(arg0: $BlockEntity$$Type): void
public "removeBlockEntity"(arg0: $BlockPos$$Type): void
public "getMapData"(arg0: $MapId$$Type): $MapItemSavedData
public "setMapData"(arg0: $MapId$$Type, arg1: $MapItemSavedData$$Type): void
public "getFreeMapId"(): $MapId
public "destroyBlockProgress"(arg0: integer, arg1: $BlockPos$$Type, arg2: integer): void
public "getRecipeManager"(): $RecipeManager
public "getMaxBuildHeight"(): integer
public "isOutsideBuildHeight"(arg0: $BlockPos$$Type): boolean
public "isOutsideBuildHeight"(arg0: integer): boolean
public "sendBlockUpdated"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: integer): void
public "updateNeighbourForOutputSignal"(arg0: $BlockPos$$Type, arg1: $Block$$Type): void
public "potionBrewing"(): $PotionBrewing
public "setDayTimeFraction"(arg0: float): void
public "getDayTimePerTick"(): float
public "setDayTimePerTick"(arg0: float): void
public "getChunkAtImmediately"(arg0: integer, arg1: integer): $LevelChunk
public "getAnyChunkImmediately"(arg0: integer, arg1: integer): $ChunkAccess
public "getSectionIndex"(arg0: integer): integer
public "getBlockTicks"(): $LevelTickAccess<($Block)>
public "getFluidTicks"(): $LevelTickAccess<($Fluid)>
public "getBrightness"(arg0: $LightLayer$$Type, arg1: $BlockPos$$Type): integer
public "getShade"(arg0: $Direction$$Type, arg1: boolean): float
public "getNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getUncachedNoiseBiome"(arg0: integer, arg1: integer, arg2: integer): $Holder<($Biome)>
public "getMaxLocalRawBrightness"(arg0: $BlockPos$$Type): integer
public "isAreaLoaded"(arg0: $BlockPos$$Type, arg1: integer): boolean
public "getSectionsCount"(): integer
public "getMaxSection"(): integer
public "getMinSection"(): integer
public "getSectionIndexFromSectionY"(arg0: integer): integer
public "getSectionYFromSectionIndex"(arg0: integer): integer
public "getModelData"(arg0: $BlockPos$$Type): $ModelData
public "setBlockEntities"(arg0: $Collection$$Type<($BlockEntity$$Type)>): void
public "supportsVisualization"(): boolean
public "self"(): $EntityGetter
public static "create"(arg0: integer, arg1: integer): $LevelHeightAccessor
public static "startTracking"(arg0: any): void
public static "createWeakRefBasedSet"(): $ObjectOpenCustomHashSet<($WeakReference<($Trackable)>)>
public static "clearNullReferences"(): void
public static "getSummary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
public static "getAllLoadedEntities"(level: $Level$$Type): $Iterable<($Entity)>
public static "traverseBlocks"<T, C>(arg0: $Vec3$$Type, arg1: $Vec3$$Type, arg2: C, arg3: $BiFunction$$Type<(C), ($BlockPos), (T)>, arg4: $Function$$Type<(C), (T)>): T
set "externalLight"(value: integer)
get "height"(): integer
get "chunkSource"(): $ChunkSource
get "scoreboard"(): $Scoreboard
get "minBuildHeight"(): integer
get "dayTimeFraction"(): float
get "biomeManager"(): $BiomeManager
get "lightEngine"(): $LevelLightEngine
set "blockEntity"(value: $BlockEntity$$Type)
get "freeMapId"(): $MapId
get "recipeManager"(): $RecipeManager
get "maxBuildHeight"(): integer
set "dayTimeFraction"(value: float)
get "dayTimePerTick"(): float
set "dayTimePerTick"(value: float)
get "blockTicks"(): $LevelTickAccess<($Block)>
get "fluidTicks"(): $LevelTickAccess<($Fluid)>
get "sectionsCount"(): integer
get "maxSection"(): integer
get "minSection"(): integer
set "blockEntities"(value: $Collection$$Type<($BlockEntity$$Type)>)
public static get "summary"(): $Map<($Class<(never)>), ($Map<($Class<(never)>), (long)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VirtualRenderWorld$$Type = ($VirtualRenderWorld);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VirtualRenderWorld$$Original = $VirtualRenderWorld;}
declare module "com.simibubi.create.foundation.mixin.accessor.NbtAccounterAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $NbtAccounterAccessor$$Interface {

(): long
}

export class $NbtAccounterAccessor implements $NbtAccounterAccessor$$Interface {
 "create$getUsage"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NbtAccounterAccessor$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NbtAccounterAccessor$$Original = $NbtAccounterAccessor;}
declare module "com.simibubi.create.foundation.item.UncontainableBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $UncontainableBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "canFitInsideContainerItems"(): boolean
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UncontainableBlockItem$$Type = ($UncontainableBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UncontainableBlockItem$$Original = $UncontainableBlockItem;}
declare module "com.simibubi.create.foundation.gui.ModularGuiLineBuilder" {
import {$EditBox$$Type} from "net.minecraft.client.gui.components.EditBox"
import {$ModularGuiLine$$Type} from "com.simibubi.create.foundation.gui.ModularGuiLine"
import {$TooltipArea$$Type} from "com.simibubi.create.foundation.gui.widget.TooltipArea"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ScrollInput$$Type} from "com.simibubi.create.foundation.gui.widget.ScrollInput"
import {$Font$$Type} from "net.minecraft.client.gui.Font"
import {$SelectionScrollInput$$Type} from "com.simibubi.create.foundation.gui.widget.SelectionScrollInput"
import {$Label$$Type} from "com.simibubi.create.foundation.gui.widget.Label"

export class $ModularGuiLineBuilder {
constructor(arg0: $Font$$Type, arg1: $ModularGuiLine$$Type, arg2: integer, arg3: integer)

public "addTextInput"(arg0: integer, arg1: integer, arg2: $BiConsumer$$Type<($EditBox), ($TooltipArea)>, arg3: StringJS): $ModularGuiLineBuilder
public "addSelectionScrollInput"(arg0: integer, arg1: integer, arg2: $BiConsumer$$Type<($SelectionScrollInput), ($Label)>, arg3: StringJS): $ModularGuiLineBuilder
public "addScrollInput"(arg0: integer, arg1: integer, arg2: $BiConsumer$$Type<($ScrollInput), ($Label)>, arg3: StringJS): $ModularGuiLineBuilder
public "customArea"(arg0: integer, arg1: integer): $ModularGuiLineBuilder
public "addIntegerTextInput"(arg0: integer, arg1: integer, arg2: $BiConsumer$$Type<($EditBox), ($TooltipArea)>, arg3: StringJS): $ModularGuiLineBuilder
public "speechBubble"(): $ModularGuiLineBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularGuiLineBuilder$$Type = ($ModularGuiLineBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModularGuiLineBuilder$$Original = $ModularGuiLineBuilder;}
declare module "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"

export class $SyncedBlockEntity extends $BlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "notifyUpdate"(): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public "readClient"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeClient"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "sendData"(): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SyncedBlockEntity$$Type = ($SyncedBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SyncedBlockEntity$$Original = $SyncedBlockEntity;}
declare module "com.simibubi.create.foundation.item.LayeredArmorItem" {
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$CustomRenderedArmorItem$$Interface} from "com.simibubi.create.foundation.item.CustomRenderedArmorItem"
import {$HumanoidArmorLayer$$Type} from "net.minecraft.client.renderer.entity.layers.HumanoidArmorLayer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $LayeredArmorItem$$Interface extends $CustomRenderedArmorItem$$Interface {

(arg0: $LivingEntity, arg1: $EquipmentSlot, arg2: $ItemStack, arg3: integer): StringJS
}

export class $LayeredArmorItem implements $LayeredArmorItem$$Interface {
 "getArmorTextureLocation"(arg0: $LivingEntity$$Type, arg1: $EquipmentSlot$$Type, arg2: $ItemStack$$Type, arg3: integer): StringJS
 "renderArmorPiece"(arg0: $HumanoidArmorLayer$$Type<(never), (never), (never)>, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: $LivingEntity$$Type, arg4: $EquipmentSlot$$Type, arg5: integer, arg6: $HumanoidModel$$Type<(never)>, arg7: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LayeredArmorItem$$Type = ((arg0: $LivingEntity, arg1: $EquipmentSlot, arg2: $ItemStack, arg3: integer) => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LayeredArmorItem$$Original = $LayeredArmorItem;}
declare module "com.simibubi.create.foundation.blockEntity.ItemHandlerContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$IItemHandlerModifiable$$Type} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ItemHandlerContainer implements $Container$$Interface {
constructor(arg0: $IItemHandlerModifiable$$Type)

public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getItem"(arg0: integer): $ItemStack
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "getMaxStackSize"(): integer
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public static "tryClear"(arg0: any): void
public "self"(): $Container
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setChanged"(): void
public "asContainer"(): $Container
public "setTransferCooldown"(arg0: long): void
public "canReceiveTransferCooldown"(): boolean
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "clear"(match: $ItemPredicate$$Type): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
get "empty"(): boolean
get "maxStackSize"(): integer
get "changed"(): void
get "containerSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHandlerContainer$$Type = ($ItemHandlerContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemHandlerContainer$$Original = $ItemHandlerContainer;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.INamedIconOptions" {
import {$AllIcons} from "com.simibubi.create.foundation.gui.AllIcons"

export interface $INamedIconOptions$$Interface {
get "translationKey"(): StringJS
get "icon"(): $AllIcons
}

export class $INamedIconOptions implements $INamedIconOptions$$Interface {
 "getTranslationKey"(): StringJS
 "getIcon"(): $AllIcons
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INamedIconOptions$$Type = ($INamedIconOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $INamedIconOptions$$Original = $INamedIconOptions;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.inventory.CapManipulationBehaviourBase" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockFace} from "net.createmod.catnip.math.BlockFace"
import {$ItemHelper$ExtractionCountMode} from "com.simibubi.create.foundation.item.ItemHelper$ExtractionCountMode"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Predicate$$Type} from "com.google.common.base.Predicate"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CapManipulationBehaviourBase$InterfaceProvider$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.inventory.CapManipulationBehaviourBase$InterfaceProvider"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $CapManipulationBehaviourBase<T, S extends $CapManipulationBehaviourBase<(object), (object)>> extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity

constructor(arg0: $SmartBlockEntity$$Type, arg1: $CapManipulationBehaviourBase$InterfaceProvider$$Type)

public "findNewCapability"(): void
public "lazyTick"(): void
public "getModeFromFilter"(): $ItemHelper$ExtractionCountMode
public "getAmountFromFilter"(): integer
public "onNeighborChanged"(arg0: $BlockPos$$Type): void
public "bypassSidedness"(): S
public "hasInventory"(): boolean
public "tick"(): void
public "initialize"(): void
public "getTarget"(): $BlockFace
public "withFilter"(arg0: $Predicate$$Type<($BlockEntity)>): S
public "getInventory"(): T
public "simulate"(): S
get "modeFromFilter"(): $ItemHelper$ExtractionCountMode
get "amountFromFilter"(): integer
get "target"(): $BlockFace
get "inventory"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapManipulationBehaviourBase$$Type<T, S> = ($CapManipulationBehaviourBase<(T), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapManipulationBehaviourBase$$Original<T, S> = $CapManipulationBehaviourBase<(T), (S)>;}
declare module "com.simibubi.create.foundation.advancement.CreateAdvancement$Builder" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CreateAdvancement$Builder {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateAdvancement$Builder$$Type = ($CreateAdvancement$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateAdvancement$Builder$$Original = $CreateAdvancement$Builder;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.ValueBoxTransform" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ValueBoxTransform {
constructor()

public "getLocalOffset"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $Vec3
public "testHit"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): boolean
public "getOverrideColor"(): integer
public "getFontScale"(): float
public "transform"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $PoseStack$$Type): void
public "rotate"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $PoseStack$$Type): void
public "getScale"(): float
public "shouldRender"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
get "overrideColor"(): integer
get "fontScale"(): float
get "scale"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueBoxTransform$$Type = ($ValueBoxTransform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueBoxTransform$$Original = $ValueBoxTransform;}
declare module "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer" {
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IMultiBlockEntityContainer$$Interface {
get "maxWidth"(): integer
get "controllerBE"(): T
get "controller"(): boolean
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "mainConnectionAxis"(): $Direction$Axis
get "lastKnownPos"(): $BlockPos
set "extraData"(value: any)
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "extraData"(): any
}

export class $IMultiBlockEntityContainer implements $IMultiBlockEntityContainer$$Interface {
 "getMaxWidth"(): integer
 "getControllerBE"<T extends $BlockEntity>(): T
 "isController"(): boolean
 "getController"(): $BlockPos
 "setController"(arg0: $BlockPos$$Type): void
 "removeController"(arg0: boolean): void
 "notifyMultiUpdated"(): void
 "getMainConnectionAxis"(): $Direction$Axis
 "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
 "getLastKnownPos"(): $BlockPos
 "preventConnectivityUpdate"(): void
 "setExtraData"(arg0: any): void
 "modifyExtraData"(arg0: any): any
 "getWidth"(): integer
 "getHeight"(): integer
 "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
 "setWidth"(arg0: integer): void
 "setHeight"(arg0: integer): void
 "getExtraData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiBlockEntityContainer$$Type = ($IMultiBlockEntityContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiBlockEntityContainer$$Original = $IMultiBlockEntityContainer;}
declare module "com.simibubi.create.foundation.mixin.accessor.UseOnContextAccessor" {
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"

export interface $UseOnContextAccessor$$Interface {

(): $BlockHitResult$$Type
}

export class $UseOnContextAccessor implements $UseOnContextAccessor$$Interface {
 "create$getHitResult"(): $BlockHitResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UseOnContextAccessor$$Type = (() => $BlockHitResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UseOnContextAccessor$$Original = $UseOnContextAccessor;}
declare module "com.simibubi.create.foundation.block.connected.CTSpriteShiftEntry" {
import {$CTType, $CTType$$Type} from "com.simibubi.create.foundation.block.connected.CTType"
import {$SpriteShiftEntry} from "net.createmod.catnip.render.SpriteShiftEntry"

export class $CTSpriteShiftEntry extends $SpriteShiftEntry {
constructor(arg0: $CTType$$Type)

public "getTargetU"(arg0: float, arg1: integer): float
public "getTargetV"(arg0: float, arg1: integer): float
public "getType"(): $CTType
get "type"(): $CTType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CTSpriteShiftEntry$$Type = ($CTSpriteShiftEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CTSpriteShiftEntry$$Original = $CTSpriteShiftEntry;}
declare module "com.simibubi.create.foundation.mixin.accessor.FallingBlockEntityAccessor" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FallingBlockEntity} from "net.minecraft.world.entity.item.FallingBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FallingBlockEntityAccessor$$Interface {
}

export class $FallingBlockEntityAccessor implements $FallingBlockEntityAccessor$$Interface {
static "create$callInit"(arg0: $Level$$Type, arg1: double, arg2: double, arg3: double, arg4: $BlockState$$Type): $FallingBlockEntity
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FallingBlockEntityAccessor$$Type = ($FallingBlockEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FallingBlockEntityAccessor$$Original = $FallingBlockEntityAccessor;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.fluid.SmartFluidTankBehaviour$TankSegment" {
import {$SmartFluidTankBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.fluid.SmartFluidTankBehaviour"
import {$LerpedFloat} from "net.createmod.catnip.animation.LerpedFloat"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $SmartFluidTankBehaviour$TankSegment {
constructor(arg0: $SmartFluidTankBehaviour$$Type, arg1: integer)

public "onFluidStackChanged"(): void
public "writeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "readNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getRenderedFluid"(): $FluidStack
public "getTotalUnits"(arg0: float): float
public "getFluidLevel"(): $LerpedFloat
public "isEmpty"(arg0: float): boolean
get "renderedFluid"(): $FluidStack
get "fluidLevel"(): $LerpedFloat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartFluidTankBehaviour$TankSegment$$Type = ($SmartFluidTankBehaviour$TankSegment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartFluidTankBehaviour$TankSegment$$Original = $SmartFluidTankBehaviour$TankSegment;}
declare module "com.simibubi.create.foundation.block.IBE" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Class} from "java.lang.Class"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBE$$Interface<T extends $BlockEntity> extends $EntityBlock$$Interface {
get "blockEntityType"(): $BlockEntityType<(T)>
get "blockEntityClass"(): $Class<(T)>
}

export class $IBE<T extends $BlockEntity> implements $IBE$$Interface {
 "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
 "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
 "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
 "getBlockEntityType"(): $BlockEntityType<(T)>
 "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<(T)>): void
 "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($InteractionResult$$Type)>): $InteractionResult
 "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
 "getBlockEntityClass"(): $Class<(T)>
 "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBE$$Type<T> = ($IBE<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBE$$Original<T> = $IBE<(T)>;}
declare module "com.simibubi.create.foundation.mixin.accessor.MouseHandlerAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MouseHandlerAccessor$$Interface {
}

export class $MouseHandlerAccessor implements $MouseHandlerAccessor$$Interface {
 "create$setXPos"(arg0: double): void
 "create$setYPos"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MouseHandlerAccessor$$Type = ($MouseHandlerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MouseHandlerAccessor$$Original = $MouseHandlerAccessor;}
declare module "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer$Inventory" {
import {$IMultiBlockEntityContainer$$Interface} from "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IMultiBlockEntityContainer$Inventory$$Interface extends $IMultiBlockEntityContainer$$Interface {
get "maxWidth"(): integer
get "controllerBE"(): T
get "controller"(): boolean
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "mainConnectionAxis"(): $Direction$Axis
get "lastKnownPos"(): $BlockPos
set "extraData"(value: any)
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "extraData"(): any
}

export class $IMultiBlockEntityContainer$Inventory implements $IMultiBlockEntityContainer$Inventory$$Interface {
 "hasInventory"(): boolean
 "getMaxWidth"(): integer
 "getControllerBE"<T extends $BlockEntity>(): T
 "isController"(): boolean
 "getController"(): $BlockPos
 "setController"(arg0: $BlockPos$$Type): void
 "removeController"(arg0: boolean): void
 "notifyMultiUpdated"(): void
 "getMainConnectionAxis"(): $Direction$Axis
 "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
 "getLastKnownPos"(): $BlockPos
 "preventConnectivityUpdate"(): void
 "setExtraData"(arg0: any): void
 "modifyExtraData"(arg0: any): any
 "getWidth"(): integer
 "getHeight"(): integer
 "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
 "setWidth"(arg0: integer): void
 "setHeight"(arg0: integer): void
 "getExtraData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiBlockEntityContainer$Inventory$$Type = ($IMultiBlockEntityContainer$Inventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiBlockEntityContainer$Inventory$$Original = $IMultiBlockEntityContainer$Inventory;}
declare module "com.simibubi.create.foundation.block.WrenchableDirectionalBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WrenchableDirectionalBlock extends $DirectionalBlock implements $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WrenchableDirectionalBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchableDirectionalBlock$$Type = ($WrenchableDirectionalBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrenchableDirectionalBlock$$Original = $WrenchableDirectionalBlock;}
declare module "com.simibubi.create.foundation.mixin.accessor.BlockBehaviourAccessor" {
import {$BlockGetter, $BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $BlockBehaviourAccessor$$Interface {

(arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext): $VoxelShape$$Type
}

export class $BlockBehaviourAccessor implements $BlockBehaviourAccessor$$Interface {
 "create$getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBehaviourAccessor$$Type = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext) => $VoxelShape$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBehaviourAccessor$$Original = $BlockBehaviourAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.StateHolderAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $StateHolderAccessor$$Interface<O, S> {

(): O
get "owner"(): O
}

export class $StateHolderAccessor<O, S> implements $StateHolderAccessor$$Interface {
 "getOwner"(): O
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateHolderAccessor$$Type<O, S> = (() => O);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StateHolderAccessor$$Original<O, S> = $StateHolderAccessor<(O), (S)>;}
declare module "com.simibubi.create.foundation.mixin.accessor.DispenserBlockAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$DispenseItemBehavior, $DispenseItemBehavior$$Type} from "net.minecraft.core.dispenser.DispenseItemBehavior"

export interface $DispenserBlockAccessor$$Interface {

(arg0: $Level, arg1: $ItemStack): $DispenseItemBehavior$$Type
}

export class $DispenserBlockAccessor implements $DispenserBlockAccessor$$Interface {
 "create$callGetDispenseMethod"(arg0: $Level$$Type, arg1: $ItemStack$$Type): $DispenseItemBehavior
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserBlockAccessor$$Type = ((arg0: $Level, arg1: $ItemStack) => $DispenseItemBehavior$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispenserBlockAccessor$$Original = $DispenserBlockAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.ShapedRecipeAccessor" {
import {$ShapedRecipePattern, $ShapedRecipePattern$$Type} from "net.minecraft.world.item.crafting.ShapedRecipePattern"

export interface $ShapedRecipeAccessor$$Interface {

(): $ShapedRecipePattern$$Type
}

export class $ShapedRecipeAccessor implements $ShapedRecipeAccessor$$Interface {
 "create$getPattern"(): $ShapedRecipePattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeAccessor$$Type = (() => $ShapedRecipePattern$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipeAccessor$$Original = $ShapedRecipeAccessor;}
declare module "com.simibubi.create.foundation.block.connected.ConnectedTextureBehaviour$CTContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ConnectedTextureBehaviour$CTContext {
 "bottomLeft": boolean
 "left": boolean
 "bottomRight": boolean
 "topLeft": boolean
 "topRight": boolean
 "up": boolean
 "right": boolean
static readonly "EMPTY": $ConnectedTextureBehaviour$CTContext
 "down": boolean

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedTextureBehaviour$CTContext$$Type = ($ConnectedTextureBehaviour$CTContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectedTextureBehaviour$CTContext$$Original = $ConnectedTextureBehaviour$CTContext;}
declare module "com.simibubi.create.foundation.mixin.accessor.MinecartFurnaceAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecartFurnaceAccessor$$Interface {
}

export class $MinecartFurnaceAccessor implements $MinecartFurnaceAccessor$$Interface {
 "create$getFuel"(): integer
 "create$setFuel"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartFurnaceAccessor$$Type = ($MinecartFurnaceAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecartFurnaceAccessor$$Original = $MinecartFurnaceAccessor;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.simple.DeferralBehaviour" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $DeferralBehaviour extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($DeferralBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type, arg1: $Supplier$$Type<(boolean)>)

public "isSafeNBT"(): boolean
public "scheduleUpdate"(): void
public "tick"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getType"(): $BehaviourType<(never)>
get "safeNBT"(): boolean
get "type"(): $BehaviourType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeferralBehaviour$$Type = ($DeferralBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeferralBehaviour$$Original = $DeferralBehaviour;}
declare module "com.simibubi.create.foundation.collision.Matrix3d" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Matrix4f} from "org.joml.Matrix4f"

export class $Matrix3d {
constructor()

public "asYRotation"(arg0: float): $Matrix3d
public "transpose"(): $Matrix3d
public "asIdentity"(): $Matrix3d
public "asXRotation"(arg0: float): $Matrix3d
public "asZRotation"(arg0: float): $Matrix3d
public "scale"(arg0: double): $Matrix3d
public "add"(arg0: $Matrix3d$$Type): $Matrix3d
public "transform"(arg0: $Vec3$$Type): $Vec3
public "copy"(): $Matrix3d
public "multiply"(arg0: $Matrix3d$$Type): $Matrix3d
public "getAsMatrix4f"(): $Matrix4f
get "asMatrix4f"(): $Matrix4f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Matrix3d$$Type = ($Matrix3d);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Matrix3d$$Original = $Matrix3d;}
declare module "com.simibubi.create.foundation.gui.widget.TooltipArea" {
import {$Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractSimiWidget} from "net.createmod.catnip.gui.widget.AbstractSimiWidget"
import {$Color} from "net.createmod.catnip.theme.Color"
import {$List$$Type} from "java.util.List"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $TooltipArea extends $AbstractSimiWidget {
static readonly "COLOR_SUCCESS": $Couple<($Color)>
 "visible": boolean
static readonly "HEADER_RGB": $Color
 "lockedTooltipY": integer
static readonly "COLOR_HOVER": $Couple<($Color)>
 "active": boolean
static readonly "COLOR_CLICK": $Couple<($Color)>
static readonly "UNSET_FG_COLOR": integer
static readonly "HINT_RGB": $Color
static readonly "COLOR_IDLE": $Couple<($Color)>
 "lockedTooltipX": integer
static readonly "COLOR_DISABLED": $Couple<($Color)>
static readonly "COLOR_FAIL": $Couple<($Color)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "withTooltip"(arg0: $List$$Type<($Component$$Type)>): $TooltipArea
public "renderWidget"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: float): void
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipArea$$Type = ($TooltipArea);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipArea$$Original = $TooltipArea;}
declare module "com.simibubi.create.foundation.advancement.AdvancementBehaviour" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID$$Type} from "java.util.UUID"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CreateAdvancement$$Type} from "com.simibubi.create.foundation.advancement.CreateAdvancement"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $AdvancementBehaviour extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($AdvancementBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type, ...arg1: ($CreateAdvancement$$Type)[])

public "setPlayer"(arg0: $UUID$$Type): void
public static "tryAward"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $CreateAdvancement$$Type): void
public "isOwnerPresent"(): boolean
public static "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $LivingEntity$$Type): void
public "awardPlayer"(arg0: $CreateAdvancement$$Type): void
public "awardPlayerIfNear"(arg0: $CreateAdvancement$$Type, arg1: integer): void
public "add"(...arg0: ($CreateAdvancement$$Type)[]): void
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getType"(): $BehaviourType<(never)>
set "player"(value: $UUID$$Type)
get "ownerPresent"(): boolean
get "type"(): $BehaviourType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancementBehaviour$$Type = ($AdvancementBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancementBehaviour$$Original = $AdvancementBehaviour;}
declare module "com.simibubi.create.foundation.gui.AllGuiTextures" {
import {$ScreenElement$$Interface} from "net.createmod.catnip.gui.element.ScreenElement"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Enum} from "java.lang.Enum"
import {$Color$$Type} from "net.createmod.catnip.theme.Color"
import {$TextureSheetSegment$$Interface} from "net.createmod.catnip.gui.TextureSheetSegment"

export class $AllGuiTextures extends $Enum<($AllGuiTextures)> implements $ScreenElement$$Interface, $TextureSheetSegment$$Interface {
static readonly "FROGPORT_HEADER": $AllGuiTextures
static readonly "CURSEFORGE_LOGO": $AllGuiTextures
static readonly "THRESHOLD_SWITCH": $AllGuiTextures
static readonly "TRADE_OVERLAY": $AllGuiTextures
static readonly "STATION_TEXTBOX_BOTTOM": $AllGuiTextures
static readonly "WAND_OF_SYMMETRY": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY": $AllGuiTextures
static readonly "JEI_SHADOW": $AllGuiTextures
static readonly "FONT_COLOR": integer
static readonly "SCHEDULE_EDITOR_ADDITIONAL_SLOT": $AllGuiTextures
static readonly "DATA_AREA": $AllGuiTextures
static readonly "BRASS_FRAME_TR": $AllGuiTextures
static readonly "BRASS_FRAME_TL": $AllGuiTextures
static readonly "JEI_ARROW": $AllGuiTextures
static readonly "VALUE_SETTINGS_MILESTONE": $AllGuiTextures
static readonly "JEI_SLOT": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SCROLL_TOP": $AllGuiTextures
static readonly "TRAIN_HUD_SPEED_BG": $AllGuiTextures
static readonly "SCHEDULE_EDITOR_INACTIVE_SLOT": $AllGuiTextures
static readonly "SCHEDULE_POINTER_OFFSCREEN": $AllGuiTextures
static readonly "TRAINMAP_SIGNAL": $AllGuiTextures
static readonly "HOTSLOT_ARROW_BAD": $AllGuiTextures
static readonly "SCHEDULE_CARD_MOVE_UP": $AllGuiTextures
static readonly "REDSTONE_REQUESTER": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_HEADER": $AllGuiTextures
static readonly "BUTTON": $AllGuiTextures
static readonly "INDICATOR": $AllGuiTextures
static readonly "STATION_TEXTBOX_TOP": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SAYS": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BLUEPRINT_RIGHT": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_HIDDEN": $AllGuiTextures
static readonly "SCHEDULE_CARD_MEDIUM": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_UP": $AllGuiTextures
static readonly "SCHEMATIC_SLOT": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BLUEPRINT_MIDDLE": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_DOWN": $AllGuiTextures
static readonly "HOTSLOT_ACTIVE": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_RIGHT": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_FOOTER": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SLOT": $AllGuiTextures
static readonly "ATTRIBUTE_FILTER": $AllGuiTextures
static readonly "INDICATOR_GREEN": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BANNER_M": $AllGuiTextures
static readonly "JEI_LIGHT": $AllGuiTextures
static readonly "JEI_DOWN_ARROW": $AllGuiTextures
static readonly "INDICATOR_WHITE": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BANNER_L": $AllGuiTextures
static readonly "INDICATOR_RED": $AllGuiTextures
static readonly "THRESHOLD_SWITCH_CURRENT_STATE": $AllGuiTextures
static readonly "TRAINMAP_TOGGLE_OFF": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_ITEM": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BANNER_R": $AllGuiTextures
static readonly "SCHEDULE_STRIP_ACTION": $AllGuiTextures
static readonly "BUTTON_GREEN": $AllGuiTextures
static readonly "TOOLBELT_SLOT_HIGHLIGHT": $AllGuiTextures
static readonly "SCHEMATICANNON_CHECKLIST_PROGRESS": $AllGuiTextures
static readonly "FROGPORT_BG": $AllGuiTextures
static readonly "PLACEMENT_INDICATOR_SHEET": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SEARCH": $AllGuiTextures
static readonly "SCHEDULE_CARD_NEW": $AllGuiTextures
static readonly "SCHEDULE_STRIP_END": $AllGuiTextures
static readonly "STATION": $AllGuiTextures
static readonly "JEI_CATALYST_SLOT": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_LEFT_CLEAN": $AllGuiTextures
static readonly "VALUE_SETTINGS_BAR": $AllGuiTextures
static readonly "BUTTON_DOWN": $AllGuiTextures
static readonly "STATION_TEXTBOX_SPEECH": $AllGuiTextures
static readonly "JEI_NO_HEAT_BAR": $AllGuiTextures
static readonly "FACTORY_GAUGE_RECIPE": $AllGuiTextures
static readonly "TRAIN_HUD_SPEED": $AllGuiTextures
static readonly "TRAINMAP_STATION_ORTHO_HIGHLIGHT": $AllGuiTextures
static readonly "VALUE_SETTINGS_CURSOR": $AllGuiTextures
static readonly "SCHEMATICANNON_FUEL": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_ENTRY": $AllGuiTextures
static readonly "STATION_ASSEMBLING": $AllGuiTextures
static readonly "DATA_AREA_START": $AllGuiTextures
static readonly "SCHEDULE_CARD_MOVE_DOWN": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_LOCKED": $AllGuiTextures
static readonly "PACKAGE_FILTER": $AllGuiTextures
static readonly "SCHEMATIC_TABLE_PROGRESS": $AllGuiTextures
static readonly "FILTER": $AllGuiTextures
static readonly "HUD_BACKGROUND": $AllGuiTextures
static readonly "SCHEDULE_SCROLL_RIGHT": $AllGuiTextures
static readonly "THRESHOLD_SWITCH_ITEMCOUNT_INPUTS": $AllGuiTextures
static readonly "FACTORY_GAUGE_SET_ITEM": $AllGuiTextures
static readonly "BUTTON_HOVER": $AllGuiTextures
static readonly "FACTORY_GAUGE_BOTTOM": $AllGuiTextures
static readonly "SCHEDULE_CARD_REMOVE": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_MIDDLE": $AllGuiTextures
readonly "location": $ResourceLocation
static readonly "SCHEDULE_STRIP_DARK": $AllGuiTextures
static readonly "CLIPBOARD_ADDRESS": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SCROLL_PAD": $AllGuiTextures
static readonly "SCHEDULE_STRIP_WAIT": $AllGuiTextures
static readonly "SEQUENCER": $AllGuiTextures
static readonly "SCHEDULE_STRIP_LIGHT": $AllGuiTextures
static readonly "SCHEDULE_EDITOR": $AllGuiTextures
static readonly "BRASS_FRAME_LEFT": $AllGuiTextures
static readonly "TERRAINZAPPER": $AllGuiTextures
static readonly "INDICATOR_YELLOW": $AllGuiTextures
static readonly "STATION_EDIT_NAME": $AllGuiTextures
static readonly "BRASS_FRAME_TOP": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SCROLL_MID": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BG": $AllGuiTextures
static readonly "JEI_QUESTION_MARK": $AllGuiTextures
static readonly "SCHEDULE_SCROLL_LEFT": $AllGuiTextures
static readonly "STATION_TEXTBOX_MIDDLE": $AllGuiTextures
static readonly "TOOLBELT_INACTIVE_SLOT": $AllGuiTextures
static readonly "VALUE_SETTINGS_CURSOR_ICON": $AllGuiTextures
static readonly "SCHEDULE_POINTER": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_HEADER": $AllGuiTextures
static readonly "SCHEMATIC_TABLE": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BLUEPRINT_LEFT": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_FOOTER": $AllGuiTextures
static readonly "VALUE_SETTINGS_BAR_BG": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_UNLOCKED": $AllGuiTextures
static readonly "MODRINTH_LOGO": $AllGuiTextures
static readonly "VALUE_SETTINGS_LABEL_BG": $AllGuiTextures
static readonly "BLUEPRINT": $AllGuiTextures
static readonly "SPEECH_TOOLTIP_BACKGROUND": $AllGuiTextures
static readonly "BUTTON_DISABLED": $AllGuiTextures
static readonly "POSTBOX_HEADER": $AllGuiTextures
static readonly "SCHEMATICANNON_TOP": $AllGuiTextures
static readonly "SCHEMATICANNON_FUEL_CREATIVE": $AllGuiTextures
static readonly "SCHEDULE_STRIP_TRAVEL": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_APPEND": $AllGuiTextures
static readonly "TRAINMAP_SPRITES": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_LEFT": $AllGuiTextures
static readonly "I_ASSEMBLE_TRAIN": $AllGuiTextures
static readonly "TRAIN_HUD_FRAME": $AllGuiTextures
static readonly "TERRAINZAPPER_INACTIVE_PARAM": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_SHOWN": $AllGuiTextures
static readonly "TOOLBELT_EMPTY_SLOT": $AllGuiTextures
static readonly "TRAIN_PROMPT": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_NEW": $AllGuiTextures
static readonly "TRAIN_HUD_THROTTLE": $AllGuiTextures
static readonly "TOOLBELT_SELECTED_ON": $AllGuiTextures
static readonly "SCHEMATIC_TITLE": $AllGuiTextures
static readonly "TOOLBELT_SLOT": $AllGuiTextures
static readonly "VALUE_SETTINGS_CURSOR_LEFT": $AllGuiTextures
static readonly "DATA_AREA_SPEECH": $AllGuiTextures
static readonly "VALUE_SETTINGS_OUTER_BG": $AllGuiTextures
static readonly "JEI_CHANCE_SLOT": $AllGuiTextures
static readonly "LOGO": $AllGuiTextures
static readonly "DATA_GATHERER": $AllGuiTextures
static readonly "TRAIN_PROMPT_R": $AllGuiTextures
static readonly "TRAINMAP_TOGGLE_ON": $AllGuiTextures
static readonly "SPEECH_TOOLTIP_COLOR": $AllGuiTextures
static readonly "TRAIN_PROMPT_L": $AllGuiTextures
static readonly "TOOLBELT_SELECTED_OFF": $AllGuiTextures
static readonly "BLOCKZAPPER": $AllGuiTextures
static readonly "I_DISASSEMBLE_TRAIN": $AllGuiTextures
static readonly "DATA_AREA_END": $AllGuiTextures
static readonly "SCHEMATICANNON_HIGHLIGHT": $AllGuiTextures
static readonly "SCHEDULE": $AllGuiTextures
static readonly "THRESHOLD_SWITCH_MISC_INPUTS": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_BODY": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SCROLL_BOT": $AllGuiTextures
static readonly "SCHEDULE_CARD_DUPLICATE": $AllGuiTextures
static readonly "ELEVATOR_CONTACT": $AllGuiTextures
static readonly "BLOCKZAPPER_UPGRADE_RECIPE": $AllGuiTextures
static readonly "LINKED_CONTROLLER": $AllGuiTextures
static readonly "NUMBERS": $AllGuiTextures
static readonly "SCHEMATIC_PROMPT": $AllGuiTextures
static readonly "VALUE_SETTINGS_CURSOR_RIGHT": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_SAYS": $AllGuiTextures
static readonly "TRAIN_HUD_THROTTLE_POINTER": $AllGuiTextures
static readonly "SCHEDULE_CARD_DARK": $AllGuiTextures
static readonly "TRAINMAP_TOGGLE_PANEL": $AllGuiTextures
static readonly "TRAINMAP_STATION_ORTHO": $AllGuiTextures
static readonly "SCHEDULE_STRIP_DOTTED": $AllGuiTextures
static readonly "JEI_HEAT_BAR": $AllGuiTextures
static readonly "SEQUENCER_AWAIT": $AllGuiTextures
static readonly "FACTORY_GAUGE_RESTOCK": $AllGuiTextures
static readonly "FROGPORT_EDIT_NAME": $AllGuiTextures
static readonly "TRAINMAP_STATION_DIAGO": $AllGuiTextures
static readonly "BRASS_FRAME_BOTTOM": $AllGuiTextures
static readonly "STOCK_KEEPER_CATEGORY_EDIT": $AllGuiTextures
static readonly "TOOLBOX": $AllGuiTextures
static readonly "CLIPBOARD": $AllGuiTextures
static readonly "BRASS_FRAME_BR": $AllGuiTextures
static readonly "CLIPBOARD_ADDRESS_INACTIVE": $AllGuiTextures
static readonly "SCHEDULE_CARD_LIGHT": $AllGuiTextures
static readonly "HOTSLOT_SUPER_ACTIVE": $AllGuiTextures
static readonly "SEQUENCER_INSTRUCTION": $AllGuiTextures
static readonly "SCHEDULE_CONDITION_NEW": $AllGuiTextures
static readonly "STOCK_KEEPER_REQUEST_SEND_HOVER": $AllGuiTextures
static readonly "I_NEW_TRAIN": $AllGuiTextures
static readonly "SCHEMATIC": $AllGuiTextures
static readonly "BRASS_FRAME_RIGHT": $AllGuiTextures
static readonly "SEQUENCER_EMPTY": $AllGuiTextures
static readonly "SCHEMATICANNON_BOTTOM": $AllGuiTextures
static readonly "FROGPORT_SLOT": $AllGuiTextures
static readonly "BRASS_FRAME_BL": $AllGuiTextures
static readonly "SEQUENCER_DELAY": $AllGuiTextures
static readonly "VALUE_SETTINGS_WIDE_MILESTONE": $AllGuiTextures
static readonly "HOTSLOT_ARROW": $AllGuiTextures
static readonly "STATION_EDIT_TRAIN_NAME": $AllGuiTextures
static readonly "TOOLBELT_HOTBAR_ON": $AllGuiTextures
static readonly "SCHEMATICANNON_PROGRESS": $AllGuiTextures
static readonly "TRAIN_HUD_DIRECTION": $AllGuiTextures
static readonly "TOOLBELT_MAIN_SLOT": $AllGuiTextures
static readonly "SEQUENCER_END": $AllGuiTextures
static readonly "TRAINMAP_STATION_DIAGO_HIGHLIGHT": $AllGuiTextures
static readonly "COMPUTER": $AllGuiTextures
static readonly "JEI_LONG_ARROW": $AllGuiTextures
static readonly "PLAYER_INVENTORY": $AllGuiTextures
static readonly "HOTSLOT": $AllGuiTextures
static readonly "TOOLBELT_HOTBAR_OFF": $AllGuiTextures

public "getStartX"(): integer
public "getStartY"(): integer
public "getWidth"(): integer
public "getHeight"(): integer
public static "values"(): ($AllGuiTextures)[]
public static "valueOf"(arg0: StringJS): $AllGuiTextures
public "getLocation"(): $ResourceLocation
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer): void
public "render"(arg0: $GuiGraphics$$Type, arg1: integer, arg2: integer, arg3: $Color$$Type): void
public "bind"(): void
get "startX"(): integer
get "startY"(): integer
get "width"(): integer
get "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AllGuiTextures$$Type = (("player_inventory") | ("wand_of_symmetry") | ("blockzapper") | ("terrainzapper") | ("terrainzapper_inactive_param") | ("logo") | ("curseforge_logo") | ("modrinth_logo") | ("schematic") | ("schematic_title") | ("schematic_slot") | ("schematic_prompt") | ("hud_background") | ("schematic_table") | ("schematic_table_progress") | ("schematicannon_top") | ("schematicannon_bottom") | ("schematicannon_progress") | ("schematicannon_checklist_progress") | ("schematicannon_highlight") | ("schematicannon_fuel") | ("schematicannon_fuel_creative") | ("threshold_switch") | ("threshold_switch_itemcount_inputs") | ("threshold_switch_misc_inputs") | ("threshold_switch_current_state") | ("filter") | ("attribute_filter") | ("package_filter") | ("postbox_header") | ("frogport_header") | ("frogport_slot") | ("frogport_edit_name") | ("frogport_bg") | ("toolbox") | ("toolbelt_slot") | ("toolbelt_slot_highlight") | ("toolbelt_main_slot") | ("toolbelt_empty_slot") | ("toolbelt_inactive_slot") | ("toolbelt_hotbar_off") | ("toolbelt_hotbar_on") | ("toolbelt_selected_off") | ("toolbelt_selected_on") | ("sequencer") | ("sequencer_instruction") | ("sequencer_delay") | ("sequencer_end") | ("sequencer_empty") | ("sequencer_await") | ("linked_controller") | ("blueprint") | ("clipboard") | ("clipboard_address") | ("clipboard_address_inactive") | ("data_gatherer") | ("data_area_start") | ("data_area_speech") | ("data_area") | ("data_area_end") | ("schedule") | ("schedule_card_dark") | ("schedule_card_medium") | ("schedule_card_light") | ("schedule_card_move_up") | ("schedule_card_move_down") | ("schedule_card_remove") | ("schedule_card_duplicate") | ("schedule_card_new") | ("schedule_condition_new") | ("schedule_condition_left") | ("schedule_condition_left_clean") | ("schedule_condition_middle") | ("schedule_condition_item") | ("schedule_condition_right") | ("schedule_condition_append") | ("schedule_scroll_left") | ("schedule_scroll_right") | ("schedule_strip_dark") | ("schedule_strip_light") | ("schedule_strip_wait") | ("schedule_strip_travel") | ("schedule_strip_dotted") | ("schedule_strip_end") | ("schedule_strip_action") | ("schedule_editor") | ("schedule_editor_additional_slot") | ("schedule_editor_inactive_slot") | ("schedule_pointer") | ("schedule_pointer_offscreen") | ("station") | ("station_assembling") | ("station_textbox_top") | ("station_textbox_middle") | ("station_textbox_bottom") | ("station_textbox_speech") | ("station_edit_name") | ("station_edit_train_name") | ("i_new_train") | ("i_disassemble_train") | ("i_assemble_train") | ("elevator_contact") | ("brass_frame_tl") | ("brass_frame_tr") | ("brass_frame_bl") | ("brass_frame_br") | ("brass_frame_left") | ("brass_frame_right") | ("brass_frame_top") | ("brass_frame_bottom") | ("value_settings_milestone") | ("value_settings_wide_milestone") | ("value_settings_bar") | ("value_settings_bar_bg") | ("value_settings_outer_bg") | ("value_settings_cursor_left") | ("value_settings_cursor") | ("value_settings_cursor_right") | ("value_settings_cursor_icon") | ("value_settings_label_bg") | ("factory_gauge_recipe") | ("factory_gauge_restock") | ("factory_gauge_bottom") | ("factory_gauge_set_item") | ("stock_keeper_request_header") | ("stock_keeper_request_body") | ("stock_keeper_request_footer") | ("stock_keeper_request_search") | ("stock_keeper_request_says") | ("stock_keeper_request_locked") | ("stock_keeper_request_unlocked") | ("stock_keeper_request_slot") | ("stock_keeper_request_blueprint_left") | ("stock_keeper_request_blueprint_middle") | ("stock_keeper_request_blueprint_right") | ("stock_keeper_request_send_hover") | ("stock_keeper_request_scroll_top") | ("stock_keeper_request_scroll_pad") | ("stock_keeper_request_scroll_mid") | ("stock_keeper_request_scroll_bot") | ("stock_keeper_request_banner_l") | ("stock_keeper_request_banner_m") | ("stock_keeper_request_banner_r") | ("stock_keeper_request_bg") | ("stock_keeper_category_hidden") | ("stock_keeper_category_shown") | ("numbers") | ("stock_keeper_category") | ("stock_keeper_category_says") | ("stock_keeper_category_header") | ("stock_keeper_category_edit") | ("stock_keeper_category_footer") | ("stock_keeper_category_new") | ("stock_keeper_category_entry") | ("stock_keeper_category_up") | ("stock_keeper_category_down") | ("redstone_requester") | ("jei_slot") | ("jei_chance_slot") | ("jei_catalyst_slot") | ("jei_arrow") | ("jei_long_arrow") | ("jei_down_arrow") | ("jei_light") | ("jei_question_mark") | ("jei_shadow") | ("blockzapper_upgrade_recipe") | ("jei_heat_bar") | ("jei_no_heat_bar") | ("button") | ("button_hover") | ("button_down") | ("button_green") | ("button_disabled") | ("indicator") | ("indicator_white") | ("indicator_green") | ("indicator_yellow") | ("indicator_red") | ("hotslot_arrow") | ("hotslot_arrow_bad") | ("hotslot") | ("hotslot_active") | ("hotslot_super_active") | ("speech_tooltip_background") | ("speech_tooltip_color") | ("train_hud_speed_bg") | ("train_hud_speed") | ("train_hud_throttle") | ("train_hud_throttle_pointer") | ("train_hud_frame") | ("train_hud_direction") | ("train_prompt_l") | ("train_prompt_r") | ("train_prompt") | ("trade_overlay") | ("placement_indicator_sheet") | ("trainmap_sprites") | ("trainmap_signal") | ("trainmap_station_ortho") | ("trainmap_station_diago") | ("trainmap_station_ortho_highlight") | ("trainmap_station_diago_highlight") | ("trainmap_toggle_panel") | ("trainmap_toggle_on") | ("trainmap_toggle_off") | ("computer"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AllGuiTextures$$Original = $AllGuiTextures;}
declare module "com.simibubi.create.foundation.mixin.accessor.SystemReportAccessor" {
import {$Map, $Map$$Type} from "java.util.Map"

export interface $SystemReportAccessor$$Interface {

(): $Map$$Type<(StringJS), (StringJS)>
get "entries"(): $Map<(StringJS), (StringJS)>
public static get "OPERATING_SYSTEM"(): StringJS
public static get "JAVA_VERSION"(): StringJS
}

export class $SystemReportAccessor implements $SystemReportAccessor$$Interface {
 "getEntries"(): $Map<(StringJS), (StringJS)>
static "getOPERATING_SYSTEM"(): StringJS
static "getJAVA_VERSION"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SystemReportAccessor$$Type = (() => $Map$$Type<(StringJS), (StringJS)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SystemReportAccessor$$Original = $SystemReportAccessor;}
declare module "com.simibubi.create.foundation.item.ItemHelper$ExtractionCountMode" {
import {$Enum} from "java.lang.Enum"

export class $ItemHelper$ExtractionCountMode extends $Enum<($ItemHelper$ExtractionCountMode)> {
static readonly "EXACTLY": $ItemHelper$ExtractionCountMode
static readonly "UPTO": $ItemHelper$ExtractionCountMode

public static "values"(): ($ItemHelper$ExtractionCountMode)[]
public static "valueOf"(arg0: StringJS): $ItemHelper$ExtractionCountMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHelper$ExtractionCountMode$$Type = (("exactly") | ("upto"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemHelper$ExtractionCountMode$$Original = $ItemHelper$ExtractionCountMode;}
declare module "com.simibubi.create.foundation.gui.widget.Label" {
import {$Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$AbstractSimiWidget} from "net.createmod.catnip.gui.widget.AbstractSimiWidget"
import {$Color} from "net.createmod.catnip.theme.Color"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $Label extends $AbstractSimiWidget {
static readonly "COLOR_SUCCESS": $Couple<($Color)>
 "visible": boolean
static readonly "HEADER_RGB": $Color
 "lockedTooltipY": integer
static readonly "COLOR_HOVER": $Couple<($Color)>
 "active": boolean
 "suffix": StringJS
static readonly "COLOR_CLICK": $Couple<($Color)>
static readonly "UNSET_FG_COLOR": integer
static readonly "HINT_RGB": $Color
static readonly "COLOR_IDLE": $Couple<($Color)>
 "lockedTooltipX": integer
static readonly "COLOR_DISABLED": $Couple<($Color)>
 "text": $Component
static readonly "COLOR_FAIL": $Couple<($Color)>

constructor(arg0: integer, arg1: integer, arg2: $Component$$Type)

public "colored"(arg0: integer): $Label
public "withShadow"(): $Label
public "setTextAndTrim"(arg0: $Component$$Type, arg1: boolean, arg2: integer): void
public "withSuffix"(arg0: StringJS): $Label
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Label$$Type = ($Label);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Label$$Original = $Label;}
declare module "com.simibubi.create.foundation.blockEntity.SmartBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$IInteractionChecker$$Interface} from "com.simibubi.create.foundation.utility.IInteractionChecker"
import {$List$$Type} from "java.util.List"
import {$CachedRenderBBBlockEntity} from "com.simibubi.create.foundation.blockEntity.CachedRenderBBBlockEntity"
import {$BehaviourType$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VirtualBlockEntity$$Interface} from "net.createmod.ponder.api.VirtualBlockEntity"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockEntityItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockEntityItemRequirement"
import {$PartialSafeNBT$$Interface} from "com.simibubi.create.api.schematic.nbt.PartialSafeNBT"
import {$CreateAdvancement$$Type} from "com.simibubi.create.foundation.advancement.CreateAdvancement"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmartBlockEntity extends $CachedRenderBBBlockEntity implements $PartialSafeNBT$$Interface, $IInteractionChecker$$Interface, $SpecialBlockEntityItemRequirement$$Interface, $VirtualBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChunkUnloaded"(): void
public "setLazyTickRate"(arg0: integer): void
public "getRequiredItems"(arg0: $BlockState$$Type): $ItemRequirement
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "lazyTick"(): void
public "forEachBehaviour"(arg0: $Consumer$$Type<($BlockEntityBehaviour)>): void
public "addBehavioursDeferred"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getAllBehaviours"(): $Collection<($BlockEntityBehaviour)>
public "getBehaviour"<T extends $BlockEntityBehaviour>(arg0: $BehaviourType$$Type<(T)>): T
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "readClient"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeClient"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "attachBehaviourLate"(arg0: $BlockEntityBehaviour$$Type): void
public "removeBehaviour"(arg0: $BehaviourType$$Type<(never)>): void
public "markVirtual"(): void
public "isChunkUnloaded"(): boolean
public "canPlayerUse"(arg0: $Player$$Type): boolean
public "sendToMenu"(arg0: $RegistryFriendlyByteBuf$$Type): void
public "refreshBlockState"(): void
public "registerAwardables"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>, ...arg1: ($CreateAdvancement$$Type)[]): void
public "awardIfNear"(arg0: $CreateAdvancement$$Type, arg1: integer): void
public "invalidate"(): void
public "tick"(): void
public "remove"(): void
public "isVirtual"(): boolean
public "initialize"(): void
public "destroy"(): void
public "award"(arg0: $CreateAdvancement$$Type): void
public "setRemoved"(): void
set "lazyTickRate"(value: integer)
get "allBehaviours"(): $Collection<($BlockEntityBehaviour)>
get "chunkUnloaded"(): boolean
get "virtual"(): boolean
get "removed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartBlockEntity$$Type = ($SmartBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartBlockEntity$$Original = $SmartBlockEntity;}
declare module "com.simibubi.create.foundation.advancement.SimpleCreateTrigger" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$SimpleCreateTrigger$Instance} from "com.simibubi.create.foundation.advancement.SimpleCreateTrigger$Instance"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$CriterionTriggerBase} from "com.simibubi.create.foundation.advancement.CriterionTriggerBase"

export class $SimpleCreateTrigger extends $CriterionTriggerBase<($SimpleCreateTrigger$Instance)> {
constructor(arg0: StringJS)

public "trigger"(arg0: $ServerPlayer$$Type): void
public "instance"(): $SimpleCreateTrigger$Instance
public "codec"(): $Codec<($SimpleCreateTrigger$Instance)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCreateTrigger$$Type = ($SimpleCreateTrigger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCreateTrigger$$Original = $SimpleCreateTrigger;}
declare module "com.simibubi.create.foundation.item.SmartInventory" {
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemHandlerContainer} from "com.simibubi.create.foundation.blockEntity.ItemHandlerContainer"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$SyncedBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$IItemHandlerModifiable$$Type, $IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $SmartInventory extends $ItemHandlerContainer implements $IItemHandlerModifiable$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
constructor(arg0: integer, arg1: $SyncedBlockEntity$$Type)
constructor(arg0: integer, arg1: $SyncedBlockEntity$$Type, arg2: $BiPredicate$$Type<(integer), ($ItemStack)>)
constructor(arg0: integer, arg1: $SyncedBlockEntity$$Type, arg2: integer, arg3: boolean)
constructor(arg0: integer, arg1: $SyncedBlockEntity$$Type, arg2: integer, arg3: boolean, arg4: $BiPredicate$$Type<(integer), ($ItemStack)>)
constructor(arg0: $IItemHandlerModifiable$$Type, arg1: integer, arg2: boolean)

public "getStackLimit"(arg0: integer, arg1: $ItemStack$$Type): integer
public "forbidExtraction"(): $SmartInventory
public "whenContentsChanged"(arg0: $Consumer$$Type<(integer)>): $SmartInventory
public "forbidInsertion"(): $SmartInventory
public "withMaxStackSize"(arg0: integer): $SmartInventory
public "allowInsertion"(): $SmartInventory
public "allowExtraction"(): $SmartInventory
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "self"(): $IItemHandler
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getBlock"(level: $Level$$Type): $LevelBlock
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "asContainer"(): $Container
public static "tryClear"(arg0: any): void
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartInventory$$Type = ($SmartInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartInventory$$Original = $SmartInventory;}
declare module "com.simibubi.create.foundation.item.CustomArmPoseItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$AbstractClientPlayer, $AbstractClientPlayer$$Type} from "net.minecraft.client.player.AbstractClientPlayer"
import {$HumanoidModel$ArmPose, $HumanoidModel$ArmPose$$Type} from "net.minecraft.client.model.HumanoidModel$ArmPose"

export interface $CustomArmPoseItem$$Interface {

(arg0: $ItemStack, arg1: $AbstractClientPlayer, arg2: $InteractionHand): $HumanoidModel$ArmPose$$Type
}

export class $CustomArmPoseItem implements $CustomArmPoseItem$$Interface {
 "getArmPose"(arg0: $ItemStack$$Type, arg1: $AbstractClientPlayer$$Type, arg2: $InteractionHand$$Type): $HumanoidModel$ArmPose
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomArmPoseItem$$Type = ((arg0: $ItemStack, arg1: $AbstractClientPlayer, arg2: $InteractionHand) => $HumanoidModel$ArmPose$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomArmPoseItem$$Original = $CustomArmPoseItem;}
declare module "com.simibubi.create.foundation.advancement.SimpleCreateTrigger$Instance" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$ContextAwarePredicate, $ContextAwarePredicate$$Type} from "net.minecraft.advancements.critereon.ContextAwarePredicate"
import {$CriterionTriggerBase$Instance} from "com.simibubi.create.foundation.advancement.CriterionTriggerBase$Instance"

export class $SimpleCreateTrigger$Instance extends $CriterionTriggerBase$Instance {
constructor()
constructor(arg0: ($ContextAwarePredicate$$Type)?)

public "player"(): $Optional<($ContextAwarePredicate)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCreateTrigger$Instance$$Type = ($SimpleCreateTrigger$Instance);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCreateTrigger$Instance$$Original = $SimpleCreateTrigger$Instance;}
declare module "com.simibubi.create.foundation.block.ProperWaterloggedBlock" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ProperWaterloggedBlock$$Interface extends $SimpleWaterloggedBlock$$Interface {
get "pickupSound"(): $Optional<($SoundEvent)>
}

export class $ProperWaterloggedBlock implements $ProperWaterloggedBlock$$Interface {
static readonly "WATERLOGGED": $BooleanProperty

 "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
 "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
 "fluidState"(arg0: $BlockState$$Type): $FluidState
 "getPickupSound"(): $Optional<($SoundEvent)>
 "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
 "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
 "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
 "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProperWaterloggedBlock$$Type = ($ProperWaterloggedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProperWaterloggedBlock$$Original = $ProperWaterloggedBlock;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollOptionBehaviour" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ValueSettingsBoard} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBoard"
import {$Enum} from "java.lang.Enum"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$Class$$Type} from "java.lang.Class"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ScrollValueBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour"
import {$ValueBoxTransform$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueBoxTransform"

export class $ScrollOptionBehaviour<E extends $Enum<(object)>> extends $ScrollValueBehaviour {
 "blockEntity": $SmartBlockEntity
 "label": $Component
static readonly "TYPE": $BehaviourType<($ScrollValueBehaviour)>
 "value": integer

constructor(arg0: $Class$$Type<(E)>, arg1: $Component$$Type, arg2: $SmartBlockEntity$$Type, arg3: $ValueBoxTransform$$Type)

public "createBoard"(arg0: $Player$$Type, arg1: $BlockHitResult$$Type): $ValueSettingsBoard
public "getClipboardKey"(): StringJS
public "get"(): E
get "clipboardKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollOptionBehaviour$$Type<E> = ($ScrollOptionBehaviour<(E)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScrollOptionBehaviour$$Original<E> = $ScrollOptionBehaviour<(E)>;}
declare module "com.simibubi.create.foundation.mixin.accessor.ItemFrameAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ItemFrameAccessor$$Interface {

(): $ItemStack$$Type
}

export class $ItemFrameAccessor implements $ItemFrameAccessor$$Interface {
 "create$getFrameItemStack"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFrameAccessor$$Type = (() => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFrameAccessor$$Original = $ItemFrameAccessor;}
declare module "com.simibubi.create.foundation.collision.CollisionList" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CollisionList {
 "centerY": (double)[]
 "centerZ": (double)[]
 "size": integer
 "centerX": (double)[]
 "extentsZ": (double)[]
 "extentsY": (double)[]
 "extentsX": (double)[]
static readonly "DEFAULT_CAPACITY": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CollisionList$$Type = ($CollisionList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CollisionList$$Original = $CollisionList;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.fluid.SmartFluidTankBehaviour" {
import {$SmartFluidTankBehaviour$TankSegment, $SmartFluidTankBehaviour$TankSegment$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.fluid.SmartFluidTankBehaviour$TankSegment"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SmartFluidTank} from "com.simibubi.create.foundation.fluid.SmartFluidTank"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BehaviourType, $BehaviourType$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $SmartFluidTankBehaviour extends $BlockEntityBehaviour {
static readonly "INPUT": $BehaviourType<($SmartFluidTankBehaviour)>
static readonly "OUTPUT": $BehaviourType<($SmartFluidTankBehaviour)>
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($SmartFluidTankBehaviour)>

constructor(arg0: $BehaviourType$$Type<($SmartFluidTankBehaviour$$Type)>, arg1: $SmartBlockEntity$$Type, arg2: integer, arg3: integer, arg4: boolean)

public "sendDataImmediately"(): void
public "sendDataLazily"(): void
public "getTanks"(): ($SmartFluidTankBehaviour$TankSegment)[]
public "getPrimaryTank"(): $SmartFluidTankBehaviour$TankSegment
public "forbidExtraction"(): $SmartFluidTankBehaviour
public "forbidInsertion"(): $SmartFluidTankBehaviour
public "whenFluidUpdates"(arg0: $Runnable$$Type): $SmartFluidTankBehaviour
public "allowInsertion"(): $SmartFluidTankBehaviour
public "allowExtraction"(): $SmartFluidTankBehaviour
public "getPrimaryHandler"(): $SmartFluidTank
public "tick"(): void
public "isEmpty"(): boolean
public static "single"(arg0: $SmartBlockEntity$$Type, arg1: integer): $SmartFluidTankBehaviour
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "forEach"(arg0: $Consumer$$Type<($SmartFluidTankBehaviour$TankSegment)>): void
public "getType"(): $BehaviourType<(never)>
public "unload"(): void
public "getCapability"(): $IFluidHandler
get "tanks"(): ($SmartFluidTankBehaviour$TankSegment)[]
get "primaryTank"(): $SmartFluidTankBehaviour$TankSegment
get "primaryHandler"(): $SmartFluidTank
get "empty"(): boolean
get "type"(): $BehaviourType<(never)>
get "capability"(): $IFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartFluidTankBehaviour$$Type = ($SmartFluidTankBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartFluidTankBehaviour$$Original = $SmartFluidTankBehaviour;}
declare module "com.simibubi.create.foundation.utility.IInteractionChecker" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"

export interface $IInteractionChecker$$Interface {

(arg0: $Player): boolean
}

export class $IInteractionChecker implements $IInteractionChecker$$Interface {
 "canPlayerUse"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInteractionChecker$$Type = ((arg0: $Player) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInteractionChecker$$Original = $IInteractionChecker;}
declare module "com.simibubi.create.foundation.mixin.accessor.LevelRendererAccessor" {
import {$Frustum} from "net.minecraft.client.renderer.culling.Frustum"

export interface $LevelRendererAccessor$$Interface {
}

export class $LevelRendererAccessor implements $LevelRendererAccessor$$Interface {
 "create$getCullingFrustum"(): $Frustum
 "create$getCapturedFrustum"(): $Frustum
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
declare module "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBehaviour$ValueSettings" {
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Record} from "java.lang.Record"

export class $ValueSettingsBehaviour$ValueSettings extends $Record {
constructor(row: integer, value: integer)

public "row"(): integer
public "value"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "format"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueSettingsBehaviour$ValueSettings$$Type = ({"value"?: integer, "row"?: integer}) | ([value?: integer, row?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueSettingsBehaviour$ValueSettings$$Original = $ValueSettingsBehaviour$ValueSettings;}
declare module "com.simibubi.create.foundation.block.connected.ConnectedTextureBehaviour$ContextRequirement$Builder" {
import {$ConnectedTextureBehaviour$ContextRequirement} from "com.simibubi.create.foundation.block.connected.ConnectedTextureBehaviour$ContextRequirement"

export class $ConnectedTextureBehaviour$ContextRequirement$Builder {
constructor()

public "bottomLeft"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "bottomRight"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "topLeft"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "topRight"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "corners"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "axisAligned"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "down"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "up"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "left"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "right"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "build"(): $ConnectedTextureBehaviour$ContextRequirement
public "all"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "horizontal"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
public "vertical"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedTextureBehaviour$ContextRequirement$Builder$$Type = ($ConnectedTextureBehaviour$ContextRequirement$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectedTextureBehaviour$ContextRequirement$Builder$$Original = $ConnectedTextureBehaviour$ContextRequirement$Builder;}
declare module "com.simibubi.create.foundation.mixin.accessor.PotionBrewingAccessor" {
import {$Potion} from "net.minecraft.world.item.alchemy.Potion"
import {$PotionBrewing$Mix} from "net.minecraft.world.item.alchemy.PotionBrewing$Mix"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Item} from "net.minecraft.world.item.Item"

export interface $PotionBrewingAccessor$$Interface {
}

export class $PotionBrewingAccessor implements $PotionBrewingAccessor$$Interface {
 "create$getPotionMixes"(): $List<($PotionBrewing$Mix<($Potion)>)>
 "create$getContainerMixes"(): $List<($PotionBrewing$Mix<($Item)>)>
 "create$isContainer"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewingAccessor$$Type = ($PotionBrewingAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewingAccessor$$Original = $PotionBrewingAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.FontAccessor" {
import {$FontSet, $FontSet$$Type} from "net.minecraft.client.gui.font.FontSet"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Function, $Function$$Type} from "java.util.function.Function"

export interface $FontAccessor$$Interface {

(): $Function$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>
}

export class $FontAccessor implements $FontAccessor$$Interface {
 "create$getFonts"(): $Function<($ResourceLocation), ($FontSet)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FontAccessor$$Type = (() => $Function$$Type<($ResourceLocation$$Type), ($FontSet$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FontAccessor$$Original = $FontAccessor;}
declare module "com.simibubi.create.foundation.advancement.CriterionTriggerBase" {
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$PlayerAdvancements$$Type} from "net.minecraft.server.PlayerAdvancements"
import {$CriterionTrigger$Listener$$Type} from "net.minecraft.advancements.CriterionTrigger$Listener"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$CriterionTriggerBase$Instance, $CriterionTriggerBase$Instance$$Type} from "com.simibubi.create.foundation.advancement.CriterionTriggerBase$Instance"
import {$CriterionTrigger$$Interface} from "net.minecraft.advancements.CriterionTrigger"

export class $CriterionTriggerBase<T extends $CriterionTriggerBase$Instance> implements $CriterionTrigger$$Interface<(T)> {
constructor(arg0: StringJS)

public "addPlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<(T)>): void
public "removePlayerListener"(arg0: $PlayerAdvancements$$Type, arg1: $CriterionTrigger$Listener$$Type<(T)>): void
public "removePlayerListeners"(arg0: $PlayerAdvancements$$Type): void
public "getId"(): $ResourceLocation
public "createCriterion"(arg0: T): $Criterion<(T)>
public "codec"(): $Codec<(T)>
get "id"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CriterionTriggerBase$$Type<T> = ($CriterionTriggerBase<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CriterionTriggerBase$$Original<T> = $CriterionTriggerBase<(T)>;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.inventory.InvManipulationBehaviour" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IdentifiedInventory} from "com.simibubi.create.content.logistics.packager.IdentifiedInventory"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$ItemHelper$ExtractionCountMode$$Type} from "com.simibubi.create.foundation.item.ItemHelper$ExtractionCountMode"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$CapManipulationBehaviourBase$InterfaceProvider$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.inventory.CapManipulationBehaviourBase$InterfaceProvider"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$CapManipulationBehaviourBase} from "com.simibubi.create.foundation.blockEntity.behaviour.inventory.CapManipulationBehaviourBase"

export class $InvManipulationBehaviour extends $CapManipulationBehaviourBase<($IItemHandler), ($InvManipulationBehaviour)> {
 "blockEntity": $SmartBlockEntity
static readonly "INSERT": $BehaviourType<($InvManipulationBehaviour)>
static readonly "TYPE": $BehaviourType<($InvManipulationBehaviour)>
static readonly "EXTRACT": $BehaviourType<($InvManipulationBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type, arg1: $CapManipulationBehaviourBase$InterfaceProvider$$Type)

public static "forExtraction"(arg0: $SmartBlockEntity$$Type, arg1: $CapManipulationBehaviourBase$InterfaceProvider$$Type): $InvManipulationBehaviour
public static "forInsertion"(arg0: $SmartBlockEntity$$Type, arg1: $CapManipulationBehaviourBase$InterfaceProvider$$Type): $InvManipulationBehaviour
public "getIdentifiedInventory"(): $IdentifiedInventory
public "extract"(): $ItemStack
public "extract"(arg0: $ItemHelper$ExtractionCountMode$$Type, arg1: integer, arg2: $Predicate$$Type<($ItemStack)>): $ItemStack
public "extract"(arg0: $ItemHelper$ExtractionCountMode$$Type, arg1: integer): $ItemStack
public "insert"(arg0: $ItemStack$$Type): $ItemStack
public "getType"(): $BehaviourType<(never)>
get "identifiedInventory"(): $IdentifiedInventory
get "type"(): $BehaviourType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvManipulationBehaviour$$Type = ($InvManipulationBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvManipulationBehaviour$$Original = $InvManipulationBehaviour;}
declare module "com.simibubi.create.foundation.item.CustomUseEffectsItem" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TriState} from "net.createmod.catnip.data.TriState"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $CustomUseEffectsItem$$Interface {

(arg0: $ItemStack, arg1: $LivingEntity, arg2: integer, arg3: $RandomSource): boolean
}

export class $CustomUseEffectsItem implements $CustomUseEffectsItem$$Interface {
 "shouldTriggerUseEffects"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): $TriState
 "triggerUseEffects"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: integer, arg3: $RandomSource$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomUseEffectsItem$$Type = ((arg0: $ItemStack, arg1: $LivingEntity, arg2: integer, arg3: $RandomSource) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomUseEffectsItem$$Original = $CustomUseEffectsItem;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.inventory.VersionedInventoryTrackerBehaviour" {
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$InvManipulationBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.inventory.InvManipulationBehaviour"
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export class $VersionedInventoryTrackerBehaviour extends $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity
static readonly "TYPE": $BehaviourType<($VersionedInventoryTrackerBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type)

public "stillWaiting"(arg0: $IItemHandler$$Type): boolean
public "stillWaiting"(arg0: $InvManipulationBehaviour$$Type): boolean
public "awaitNewVersion"(arg0: $InvManipulationBehaviour$$Type): void
public "awaitNewVersion"(arg0: $IItemHandler$$Type): void
public "reset"(): void
public "getType"(): $BehaviourType<(never)>
get "type"(): $BehaviourType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VersionedInventoryTrackerBehaviour$$Type = ($VersionedInventoryTrackerBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VersionedInventoryTrackerBehaviour$$Original = $VersionedInventoryTrackerBehaviour;}
declare module "com.simibubi.create.foundation.item.CustomRenderedArmorItem" {
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$HumanoidArmorLayer, $HumanoidArmorLayer$$Type} from "net.minecraft.client.renderer.entity.layers.HumanoidArmorLayer"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $CustomRenderedArmorItem$$Interface {

(arg0: $HumanoidArmorLayer<(never), (never), (never)>, arg1: $PoseStack, arg2: $MultiBufferSource, arg3: $LivingEntity, arg4: $EquipmentSlot, arg5: integer, arg6: $HumanoidModel<(never)>, arg7: $ItemStack): void
}

export class $CustomRenderedArmorItem implements $CustomRenderedArmorItem$$Interface {
 "renderArmorPiece"(arg0: $HumanoidArmorLayer$$Type<(never), (never), (never)>, arg1: $PoseStack$$Type, arg2: $MultiBufferSource$$Type, arg3: $LivingEntity$$Type, arg4: $EquipmentSlot$$Type, arg5: integer, arg6: $HumanoidModel$$Type<(never)>, arg7: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomRenderedArmorItem$$Type = ((arg0: $HumanoidArmorLayer<(never), (never), (never)>, arg1: $PoseStack, arg2: $MultiBufferSource, arg3: $LivingEntity, arg4: $EquipmentSlot, arg5: integer, arg6: $HumanoidModel<(never)>, arg7: $ItemStack) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomRenderedArmorItem$$Original = $CustomRenderedArmorItem;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$ValueSettingsBehaviour$$Interface} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBehaviour"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ValueSettingsBehaviour$ValueSettings, $ValueSettingsBehaviour$ValueSettings$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBehaviour$ValueSettings"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ValueBoxTransform, $ValueBoxTransform$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueBoxTransform"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ValueSettingsBoard} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBoard"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"

export class $ScrollValueBehaviour extends $BlockEntityBehaviour implements $ValueSettingsBehaviour$$Interface {
 "blockEntity": $SmartBlockEntity
 "label": $Component
static readonly "TYPE": $BehaviourType<($ScrollValueBehaviour)>
 "value": integer

constructor(arg0: $Component$$Type, arg1: $SmartBlockEntity$$Type, arg2: $ValueBoxTransform$$Type)

public "withFormatter"(arg0: $Function$$Type<(integer), (StringJS)>): $ScrollValueBehaviour
public "getValueSettings"(): $ValueSettingsBehaviour$ValueSettings
public "withClientCallback"(arg0: $Consumer$$Type<(integer)>): $ScrollValueBehaviour
public "onlyActiveWhen"(arg0: $Supplier$$Type<(boolean)>): $ScrollValueBehaviour
public "getSlotPositioning"(): $ValueBoxTransform
public "createBoard"(arg0: $Player$$Type, arg1: $BlockHitResult$$Type): $ValueSettingsBoard
public "setValueSettings"(arg0: $Player$$Type, arg1: $ValueSettingsBehaviour$ValueSettings$$Type, arg2: boolean): void
public "onlyVisibleWithWrench"(): boolean
public "onShortInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: $BlockHitResult$$Type): void
public "formatValue"(): StringJS
public "withCallback"(arg0: $Consumer$$Type<(integer)>): $ScrollValueBehaviour
public "isSafeNBT"(): boolean
public "requiresWrench"(): $ScrollValueBehaviour
public "testHit"(arg0: $Vec3$$Type): boolean
public "setLabel"(arg0: $Component$$Type): void
public "getValue"(): integer
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "setValue"(arg0: integer): void
public "getType"(): $BehaviourType<(never)>
public "isActive"(): boolean
public "between"(arg0: integer, arg1: integer): $ScrollValueBehaviour
public "acceptsValueSettings"(): boolean
public "playFeedbackSound"(arg0: $BlockEntityBehaviour$$Type): void
public "newSettingHovered"(arg0: $ValueSettingsBehaviour$ValueSettings$$Type): void
public "getClipboardKey"(): StringJS
public "writeToClipboard"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: $Direction$$Type): boolean
public "readFromClipboard"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: $Player$$Type, arg3: $Direction$$Type, arg4: boolean): boolean
public "bypassesInput"(arg0: $ItemStack$$Type): boolean
public "netId"(): integer
public "mayInteract"(arg0: $Player$$Type): boolean
get "valueSettings"(): $ValueSettingsBehaviour$ValueSettings
get "slotPositioning"(): $ValueBoxTransform
get "safeNBT"(): boolean
get "type"(): $BehaviourType<(never)>
get "active"(): boolean
get "clipboardKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollValueBehaviour$$Type = ($ScrollValueBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScrollValueBehaviour$$Original = $ScrollValueBehaviour;}
declare module "com.simibubi.create.foundation.blockEntity.CachedRenderBBBlockEntity" {
import {$SyncedBlockEntity} from "com.simibubi.create.foundation.blockEntity.SyncedBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CachedRenderBBBlockEntity extends $SyncedBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getRenderBoundingBox"(): $AABB
get "renderBoundingBox"(): $AABB
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CachedRenderBBBlockEntity$$Type = ($CachedRenderBBBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CachedRenderBBBlockEntity$$Original = $CachedRenderBBBlockEntity;}
declare module "com.simibubi.create.foundation.gui.widget.SelectionScrollInput" {
import {$Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$Color} from "net.createmod.catnip.theme.Color"
import {$List$$Type} from "java.util.List"
import {$ScrollInput} from "com.simibubi.create.foundation.gui.widget.ScrollInput"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $SelectionScrollInput extends $ScrollInput {
static readonly "COLOR_SUCCESS": $Couple<($Color)>
 "visible": boolean
static readonly "HEADER_RGB": $Color
 "lockedTooltipY": integer
static readonly "COLOR_HOVER": $Couple<($Color)>
 "active": boolean
static readonly "COLOR_CLICK": $Couple<($Color)>
static readonly "UNSET_FG_COLOR": integer
static readonly "HINT_RGB": $Color
static readonly "COLOR_IDLE": $Couple<($Color)>
 "lockedTooltipX": integer
static readonly "COLOR_DISABLED": $Couple<($Color)>
static readonly "COLOR_FAIL": $Couple<($Color)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "forOptions"(arg0: $List$$Type<($Component$$Type)>): $ScrollInput
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SelectionScrollInput$$Type = ($SelectionScrollInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SelectionScrollInput$$Original = $SelectionScrollInput;}
declare module "com.simibubi.create.foundation.block.CreateWeatheringCopperStairBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$StairsShape} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Enum} from "java.lang.Enum"
import {$Optional} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$WeatheringCopperStairBlock} from "net.minecraft.world.level.block.WeatheringCopperStairBlock"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$WeatheringCopper$WeatherState$$Type} from "net.minecraft.world.level.block.WeatheringCopper$WeatherState"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreateWeatheringCopperStairBlock extends $WeatheringCopperStairBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WeatheringCopperStairBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "SHAPE": $EnumProperty<($StairsShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $WeatheringCopper$WeatherState$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getExplosionResistance"(): float
public "codec"(): $MapCodec<($WeatheringCopperStairBlock)>
public "getAge"(): $Enum
public static "getNext"(arg0: $Block$$Type): $Optional<($Block)>
public static "getFirst"(arg0: $BlockState$$Type): $BlockState
public static "getFirst"(arg0: $Block$$Type): $Block
public static "getPrevious"(arg0: $BlockState$$Type): $Optional<($BlockState)>
public static "getPrevious"(arg0: $Block$$Type): $Optional<($Block)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "explosionResistance"(): float
get "age"(): $Enum
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateWeatheringCopperStairBlock$$Type = ($CreateWeatheringCopperStairBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateWeatheringCopperStairBlock$$Original = $CreateWeatheringCopperStairBlock;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour$StepContext" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $ScrollValueBehaviour$StepContext {
 "forward": boolean
 "shift": boolean
 "control": boolean
 "currentValue": integer

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollValueBehaviour$StepContext$$Type = ($ScrollValueBehaviour$StepContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScrollValueBehaviour$StepContext$$Original = $ScrollValueBehaviour$StepContext;}
declare module "com.simibubi.create.foundation.mixin.accessor.ItemStackHandlerAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ItemStackHandlerAccessor$$Interface {

(): $NonNullList$$Type<($ItemStack$$Type)>
}

export class $ItemStackHandlerAccessor implements $ItemStackHandlerAccessor$$Interface {
 "create$getStacks"(): $NonNullList<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHandlerAccessor$$Type = (() => $NonNullList$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackHandlerAccessor$$Original = $ItemStackHandlerAccessor;}
declare module "com.simibubi.create.foundation.block.IHaveBigOutline" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IHaveBigOutline$$Interface {
}

export class $IHaveBigOutline implements $IHaveBigOutline$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHaveBigOutline$$Type = ($IHaveBigOutline);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHaveBigOutline$$Original = $IHaveBigOutline;}
declare module "com.simibubi.create.foundation.blockEntity.IMergeableBE" {
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IMergeableBE$$Interface {

(arg0: $BlockEntity): void
}

export class $IMergeableBE implements $IMergeableBE$$Interface {
 "accept"(arg0: $BlockEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMergeableBE$$Type = ((arg0: $BlockEntity) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMergeableBE$$Original = $IMergeableBE;}
declare module "com.simibubi.create.foundation.item.TagDependentIngredientItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export class $TagDependentIngredientItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $TagKey$$Type<($Item)>)

public "shouldHide"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TagDependentIngredientItem$$Type = ($TagDependentIngredientItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TagDependentIngredientItem$$Original = $TagDependentIngredientItem;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.filtering.FilteringBehaviour" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$ValueSettingsBehaviour$$Interface} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBehaviour"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$ValueSettingsBehaviour$ValueSettings, $ValueSettingsBehaviour$ValueSettings$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBehaviour$ValueSettings"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ValueBoxTransform, $ValueBoxTransform$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueBoxTransform"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ValueSettingsBoard} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBoard"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$BlockEntityBehaviour, $BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"

export class $FilteringBehaviour extends $BlockEntityBehaviour implements $ValueSettingsBehaviour$$Interface {
 "upTo": boolean
 "blockEntity": $SmartBlockEntity
 "count": integer
 "customLabel": $MutableComponent
static readonly "TYPE": $BehaviourType<($FilteringBehaviour)>

constructor(arg0: $SmartBlockEntity$$Type, arg1: $ValueBoxTransform$$Type)

public "acceptsValueSettings"(): boolean
public "getValueSettings"(): $ValueSettingsBehaviour$ValueSettings
public "onlyActiveWhen"(arg0: $Supplier$$Type<(boolean)>): $FilteringBehaviour
public "getSlotPositioning"(): $ValueBoxTransform
public "createBoard"(arg0: $Player$$Type, arg1: $BlockHitResult$$Type): $ValueSettingsBoard
public "setValueSettings"(arg0: $Player$$Type, arg1: $ValueSettingsBehaviour$ValueSettings$$Type, arg2: boolean): void
public "onShortInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: $BlockHitResult$$Type): void
public "getClipboardKey"(): StringJS
public "writeToClipboard"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: $Direction$$Type): boolean
public "readFromClipboard"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: $Player$$Type, arg3: $Direction$$Type, arg4: boolean): boolean
public "showCount"(): $FilteringBehaviour
public "isCountVisible"(): boolean
public "canShortInteract"(arg0: $ItemStack$$Type): boolean
public "withPredicate"(arg0: $Predicate$$Type<($ItemStack)>): $FilteringBehaviour
public "showCountWhen"(arg0: $Supplier$$Type<(boolean)>): $FilteringBehaviour
public "anyAmount"(): boolean
public "getTip"(): $MutableComponent
public "getAmountTip"(): $MutableComponent
public "getCountLabelForValueBox"(): $MutableComponent
public "netId"(): integer
public "formatValue"(arg0: $ValueSettingsBehaviour$ValueSettings$$Type): $MutableComponent
public "withCallback"(arg0: $Consumer$$Type<($ItemStack)>): $FilteringBehaviour
public "getRequiredItems"(): $ItemRequirement
public "isSafeNBT"(): boolean
public "forFluids"(): $FilteringBehaviour
public "forRecipes"(): $FilteringBehaviour
public "isRecipeFilter"(): boolean
public "testHit"(arg0: $Vec3$$Type): boolean
public "getFilter"(arg0: $Direction$$Type): $ItemStack
public "getFilter"(): $ItemStack
public "setLabel"(arg0: $MutableComponent$$Type): void
public "setFilter"(arg0: $ItemStack$$Type): boolean
public "setFilter"(arg0: $Direction$$Type, arg1: $ItemStack$$Type): boolean
public "getLabel"(): $MutableComponent
public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: $FluidStack$$Type): boolean
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "destroy"(): void
public "getType"(): $BehaviourType<(never)>
public "isActive"(): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getMaxStackSize"(arg0: $Direction$$Type): integer
public "getRenderDistance"(): float
public "getAmount"(): integer
public "playFeedbackSound"(arg0: $BlockEntityBehaviour$$Type): void
public "newSettingHovered"(arg0: $ValueSettingsBehaviour$ValueSettings$$Type): void
public "onlyVisibleWithWrench"(): boolean
public "bypassesInput"(arg0: $ItemStack$$Type): boolean
public "mayInteract"(arg0: $Player$$Type): boolean
get "valueSettings"(): $ValueSettingsBehaviour$ValueSettings
get "slotPositioning"(): $ValueBoxTransform
get "clipboardKey"(): StringJS
get "countVisible"(): boolean
get "tip"(): $MutableComponent
get "amountTip"(): $MutableComponent
get "countLabelForValueBox"(): $MutableComponent
get "requiredItems"(): $ItemRequirement
get "safeNBT"(): boolean
get "recipeFilter"(): boolean
get "filter"(): $ItemStack
set "label"(value: $MutableComponent$$Type)
set "filter"(value: $ItemStack$$Type)
get "label"(): $MutableComponent
get "type"(): $BehaviourType<(never)>
get "active"(): boolean
get "maxStackSize"(): integer
get "renderDistance"(): float
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilteringBehaviour$$Type = ($FilteringBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilteringBehaviour$$Original = $FilteringBehaviour;}
declare module "com.simibubi.create.foundation.fluid.SmartFluidTank" {
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $SmartFluidTank extends $FluidTank {
constructor(arg0: integer, arg1: $Consumer$$Type<($FluidStack)>)

public "setFluid"(arg0: $FluidStack$$Type): void
set "fluid"(value: $FluidStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartFluidTank$$Type = ($SmartFluidTank);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartFluidTank$$Original = $SmartFluidTank;}
declare module "com.simibubi.create.foundation.advancement.CreateAdvancement" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$CreateAdvancement$Builder$$Type} from "com.simibubi.create.foundation.advancement.CreateAdvancement$Builder"

export class $CreateAdvancement {
constructor(arg0: StringJS, arg1: $UnaryOperator$$Type<($CreateAdvancement$Builder)>)

public "isAlreadyAwardedTo"(arg0: $Player$$Type): boolean
public "awardTo"(arg0: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreateAdvancement$$Type = ($CreateAdvancement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreateAdvancement$$Original = $CreateAdvancement;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType" {
import {$BlockEntityBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"

export class $BehaviourType<T extends $BlockEntityBehaviour> {
constructor(arg0: StringJS)
constructor()

public "getName"(): StringJS
public "hashCode"(): integer
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BehaviourType$$Type<T> = ($BehaviourType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BehaviourType$$Original<T> = $BehaviourType<(T)>;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level} from "net.minecraft.world.level.Level"
import {$BehaviourType, $BehaviourType$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityBehaviour {
 "blockEntity": $SmartBlockEntity

constructor(arg0: $SmartBlockEntity$$Type)

public "getWorld"(): $Level
public "onBlockChanged"(arg0: $BlockState$$Type): void
public "setLazyTickRate"(arg0: integer): void
public "getRequiredItems"(): $ItemRequirement
public "lazyTick"(): void
public "isSafeNBT"(): boolean
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onNeighborChanged"(arg0: $BlockPos$$Type): void
public "tick"(): void
public static "get"<T extends $BlockEntityBehaviour>(arg0: $BlockEntity$$Type, arg1: $BehaviourType$$Type<(T)>): T
public static "get"<T extends $BlockEntityBehaviour>(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BehaviourType$$Type<(T)>): T
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "destroy"(): void
public "getType"(): $BehaviourType<(never)>
public "unload"(): void
public "getPos"(): $BlockPos
get "world"(): $Level
set "lazyTickRate"(value: integer)
get "requiredItems"(): $ItemRequirement
get "safeNBT"(): boolean
get "type"(): $BehaviourType<(never)>
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityBehaviour$$Type = ($BlockEntityBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityBehaviour$$Original = $BlockEntityBehaviour;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBoard" {
import {$ValueSettingsFormatter, $ValueSettingsFormatter$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsFormatter"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $ValueSettingsBoard extends $Record {
constructor(title: $Component$$Type, maxValue: integer, milestoneInterval: integer, rows: $List$$Type<($Component$$Type)>, formatter: $ValueSettingsFormatter$$Type)

public "milestoneInterval"(): integer
public "maxValue"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "formatter"(): $ValueSettingsFormatter
public "rows"(): $List<($Component)>
public "title"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueSettingsBoard$$Type = ({"rows"?: $List$$Type<($Component$$Type)>, "formatter"?: $ValueSettingsFormatter$$Type, "maxValue"?: integer, "milestoneInterval"?: integer, "title"?: $Component$$Type}) | ([rows?: $List$$Type<($Component$$Type)>, formatter?: $ValueSettingsFormatter$$Type, maxValue?: integer, milestoneInterval?: integer, title?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueSettingsBoard$$Original = $ValueSettingsBoard;}
declare module "com.simibubi.create.foundation.mixin.accessor.FlowingFluidAccessor" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FlowingFluidAccessor$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState): $FluidState$$Type
}

export class $FlowingFluidAccessor implements $FlowingFluidAccessor$$Interface {
 "create$getNewLiquid"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $FluidState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowingFluidAccessor$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $FluidState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlowingFluidAccessor$$Original = $FlowingFluidAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.MinecraftAccessor" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MinecraftAccessor$$Interface {

(arg0: integer): void
}

export class $MinecraftAccessor implements $MinecraftAccessor$$Interface {
 "create$setMissTime"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecraftAccessor$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecraftAccessor$$Original = $MinecraftAccessor;}
declare module "com.simibubi.create.foundation.gui.ModularGuiLine" {
import {$GuiEventListener, $GuiEventListener$$Type} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$AbstractWidget$$Type} from "net.minecraft.client.gui.components.AbstractWidget"
import {$Pair$$Type} from "net.createmod.catnip.data.Pair"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ModularGuiLine {
constructor()

public "renderWidgetBG"(arg0: integer, arg1: $GuiGraphics$$Type): void
public "saveValues"(arg0: $CompoundTag$$Type): void
public "loadValues"<T extends $GuiEventListener>(arg0: $CompoundTag$$Type, arg1: $Consumer$$Type<(T)>, arg2: $Consumer$$Type<(T)>): void
public "clear"(): void
public "add"(arg0: $Pair$$Type<($AbstractWidget$$Type), (StringJS)>): void
public "forEach"(arg0: $Consumer$$Type<($GuiEventListener)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularGuiLine$$Type = ($ModularGuiLine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModularGuiLine$$Original = $ModularGuiLine;}
declare module "com.simibubi.create.foundation.block.connected.ConnectedTextureBehaviour$ContextRequirement" {
import {$ConnectedTextureBehaviour$ContextRequirement$Builder} from "com.simibubi.create.foundation.block.connected.ConnectedTextureBehaviour$ContextRequirement$Builder"

export class $ConnectedTextureBehaviour$ContextRequirement {
readonly "bottomLeft": boolean
readonly "left": boolean
readonly "bottomRight": boolean
readonly "topLeft": boolean
readonly "topRight": boolean
readonly "up": boolean
readonly "right": boolean
readonly "down": boolean

constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean, arg6: boolean, arg7: boolean)

public static "builder"(): $ConnectedTextureBehaviour$ContextRequirement$Builder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectedTextureBehaviour$ContextRequirement$$Type = ($ConnectedTextureBehaviour$ContextRequirement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectedTextureBehaviour$ContextRequirement$$Original = $ConnectedTextureBehaviour$ContextRequirement;}
declare module "com.simibubi.create.foundation.gui.widget.ScrollInput" {
import {$PositionedRectangle} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$AbstractSimiWidget} from "net.createmod.catnip.gui.widget.AbstractSimiWidget"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ScrollValueBehaviour$StepContext, $ScrollValueBehaviour$StepContext$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour$StepContext"
import {$Label$$Type} from "com.simibubi.create.foundation.gui.widget.Label"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Component$$Type as $Component$0$$Type} from "io.wispforest.owo.ui.core.Component"
import {$Color} from "net.createmod.catnip.theme.Color"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Couple} from "net.createmod.catnip.data.Couple"
import {$Size$$Type} from "io.wispforest.owo.ui.core.Size"

export class $ScrollInput extends $AbstractSimiWidget {
static readonly "COLOR_SUCCESS": $Couple<($Color)>
 "visible": boolean
static readonly "HEADER_RGB": $Color
 "lockedTooltipY": integer
static readonly "COLOR_HOVER": $Couple<($Color)>
 "active": boolean
static readonly "COLOR_CLICK": $Couple<($Color)>
static readonly "UNSET_FG_COLOR": integer
static readonly "HINT_RGB": $Color
static readonly "COLOR_IDLE": $Couple<($Color)>
 "lockedTooltipX": integer
static readonly "COLOR_DISABLED": $Couple<($Color)>
static readonly "COLOR_FAIL": $Couple<($Color)>

constructor(arg0: integer, arg1: integer, arg2: integer, arg3: integer)

public "withStepFunction"(arg0: $Function$$Type<($ScrollValueBehaviour$StepContext), (integer)>): $ScrollInput
public "standardStep"(): $Function<($ScrollValueBehaviour$StepContext), (integer)>
public "addHint"(arg0: $MutableComponent$$Type): $ScrollInput
public "calling"(arg0: $Consumer$$Type<(integer)>): $ScrollInput
public "withShiftStep"(arg0: integer): $ScrollInput
public "removeCallback"(): $ScrollInput
public "onChanged"(): void
public "titled"(arg0: $MutableComponent$$Type): $ScrollInput
public "writingTo"(arg0: $Label$$Type): $ScrollInput
public "withRange"(arg0: integer, arg1: integer): $ScrollInput
public "tick"(): void
public "format"(arg0: $Function$$Type<(integer), ($Component$$Type)>): $ScrollInput
public "getState"(): integer
public "setState"(arg0: integer): $ScrollInput
public "inverted"(): $ScrollInput
public "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public static "bypassCheck"(component: $Component$0$$Type, runnable: $Runnable$$Type): void
public static "of"(x: integer, y: integer, size: $Size$$Type): $PositionedRectangle
public static "of"(x: integer, y: integer, width: integer, height: integer): $PositionedRectangle
get "state"(): integer
set "state"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScrollInput$$Type = ($ScrollInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScrollInput$$Original = $ScrollInput;}
declare module "com.simibubi.create.foundation.mixin.accessor.EntityRenderDispatcherAccessor" {
import {$EntityRenderer, $EntityRenderer$$Type} from "net.minecraft.client.renderer.entity.EntityRenderer"
import {$Map, $Map$$Type} from "java.util.Map"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export interface $EntityRenderDispatcherAccessor$$Interface {

(): $Map$$Type<($EntityType$$Type<(never)>), ($EntityRenderer$$Type<(never)>)>
}

export class $EntityRenderDispatcherAccessor implements $EntityRenderDispatcherAccessor$$Interface {
 "create$getRenderers"(): $Map<($EntityType<(never)>), ($EntityRenderer<(never)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityRenderDispatcherAccessor$$Type = (() => $Map$$Type<($EntityType$$Type<(never)>), ($EntityRenderer$$Type<(never)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityRenderDispatcherAccessor$$Original = $EntityRenderDispatcherAccessor;}
declare module "com.simibubi.create.foundation.fluid.CombinedTankWrapper" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$IFluidHandler$$Type, $IFluidHandler$$Interface} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $CombinedTankWrapper implements $IFluidHandler$$Interface {
constructor(...arg0: ($IFluidHandler$$Type)[])

public "enforceVariety"(): $CombinedTankWrapper
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
get "tanks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombinedTankWrapper$$Type = ($CombinedTankWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CombinedTankWrapper$$Original = $CombinedTankWrapper;}
declare module "com.simibubi.create.foundation.recipe.ItemCopyingRecipe$SupportsItemCopying" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export interface $ItemCopyingRecipe$SupportsItemCopying$$Interface {

(): $DataComponentType$$Type<(never)>
get "componentType"(): $DataComponentType<(never)>
}

export class $ItemCopyingRecipe$SupportsItemCopying implements $ItemCopyingRecipe$SupportsItemCopying$$Interface {
 "createCopy"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
 "canCopyFromItem"(arg0: $ItemStack$$Type): boolean
 "canCopyToItem"(arg0: $ItemStack$$Type): boolean
 "getComponentType"(): $DataComponentType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCopyingRecipe$SupportsItemCopying$$Type = (() => $DataComponentType$$Type<(never)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCopyingRecipe$SupportsItemCopying$$Original = $ItemCopyingRecipe$SupportsItemCopying;}
declare module "com.simibubi.create.foundation.mixin.accessor.LivingEntityAccessor" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $LivingEntityAccessor$$Interface {

(arg0: $ItemStack, arg1: integer): void
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "create$callSpawnItemParticles"(arg0: $ItemStack$$Type, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ((arg0: $ItemStack, arg1: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.HumanoidArmorLayerAccessor" {
import {$HumanoidModel, $HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"

export interface $HumanoidArmorLayerAccessor$$Interface {
}

export class $HumanoidArmorLayerAccessor implements $HumanoidArmorLayerAccessor$$Interface {
 "create$getInnerModel"(): $HumanoidModel<(never)>
 "create$callSetPartVisibility"(arg0: $HumanoidModel$$Type<(never)>, arg1: $EquipmentSlot$$Type): void
 "create$getOuterModel"(): $HumanoidModel<(never)>
static "create$getArmorLocationCache"(): $Map<(StringJS), ($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HumanoidArmorLayerAccessor$$Type = ($HumanoidArmorLayerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HumanoidArmorLayerAccessor$$Original = $HumanoidArmorLayerAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.MobEffectInstanceAccessor" {
import {$MobEffectInstance, $MobEffectInstance$$Type} from "net.minecraft.world.effect.MobEffectInstance"

export interface $MobEffectInstanceAccessor$$Interface {

(): $MobEffectInstance$$Type
}

export class $MobEffectInstanceAccessor implements $MobEffectInstanceAccessor$$Interface {
 "create$getHiddenEffect"(): $MobEffectInstance
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobEffectInstanceAccessor$$Type = (() => $MobEffectInstance$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobEffectInstanceAccessor$$Original = $MobEffectInstanceAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.ServerLevelAccessor" {
import {$EntityTickList, $EntityTickList$$Type} from "net.minecraft.world.level.entity.EntityTickList"

export interface $ServerLevelAccessor$$Interface {

(): $EntityTickList$$Type
}

export class $ServerLevelAccessor implements $ServerLevelAccessor$$Interface {
 "create$getEntityTickList"(): $EntityTickList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerLevelAccessor$$Type = (() => $EntityTickList$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerLevelAccessor$$Original = $ServerLevelAccessor;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBehaviour" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ValueSettingsBehaviour$ValueSettings, $ValueSettingsBehaviour$ValueSettings$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBehaviour$ValueSettings"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ValueBoxTransform} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueBoxTransform"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ValueSettingsBoard} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBoard"
import {$ClipboardCloneable$$Interface} from "com.simibubi.create.content.equipment.clipboard.ClipboardCloneable"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"

export interface $ValueSettingsBehaviour$$Interface extends $ClipboardCloneable$$Interface {
get "valueSettings"(): $ValueSettingsBehaviour$ValueSettings
get "slotPositioning"(): $ValueBoxTransform
get "clipboardKey"(): StringJS
get "active"(): boolean
}

export class $ValueSettingsBehaviour implements $ValueSettingsBehaviour$$Interface {
 "acceptsValueSettings"(): boolean
 "getValueSettings"(): $ValueSettingsBehaviour$ValueSettings
 "playFeedbackSound"(arg0: $BlockEntityBehaviour$$Type): void
 "newSettingHovered"(arg0: $ValueSettingsBehaviour$ValueSettings$$Type): void
 "getSlotPositioning"(): $ValueBoxTransform
 "createBoard"(arg0: $Player$$Type, arg1: $BlockHitResult$$Type): $ValueSettingsBoard
 "setValueSettings"(arg0: $Player$$Type, arg1: $ValueSettingsBehaviour$ValueSettings$$Type, arg2: boolean): void
 "onlyVisibleWithWrench"(): boolean
 "onShortInteract"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: $BlockHitResult$$Type): void
 "getClipboardKey"(): StringJS
 "writeToClipboard"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: $Direction$$Type): boolean
 "readFromClipboard"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type, arg2: $Player$$Type, arg3: $Direction$$Type, arg4: boolean): boolean
 "bypassesInput"(arg0: $ItemStack$$Type): boolean
 "netId"(): integer
 "testHit"(arg0: $Vec3$$Type): boolean
 "isActive"(): boolean
 "mayInteract"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ValueSettingsBehaviour$$Type = ($ValueSettingsBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ValueSettingsBehaviour$$Original = $ValueSettingsBehaviour;}
declare module "com.simibubi.create.foundation.blockEntity.behaviour.inventory.CapManipulationBehaviourBase$InterfaceProvider" {
import {$BlockFace, $BlockFace$$Type} from "net.createmod.catnip.math.BlockFace"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $CapManipulationBehaviourBase$InterfaceProvider$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState): $BlockFace$$Type
}

export class $CapManipulationBehaviourBase$InterfaceProvider implements $CapManipulationBehaviourBase$InterfaceProvider$$Interface {
static "towardBlockFacing"(): $CapManipulationBehaviourBase$InterfaceProvider
static "oppositeOfBlockFacing"(): $CapManipulationBehaviourBase$InterfaceProvider
 "getTarget"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $BlockFace
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapManipulationBehaviourBase$InterfaceProvider$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $BlockFace$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapManipulationBehaviourBase$InterfaceProvider$$Original = $CapManipulationBehaviourBase$InterfaceProvider;}
declare module "com.simibubi.create.foundation.mixin.accessor.CropBlockAccessor" {
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"

export interface $CropBlockAccessor$$Interface {

(): $IntegerProperty$$Type
}

export class $CropBlockAccessor implements $CropBlockAccessor$$Interface {
 "create$callGetAgeProperty"(): $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CropBlockAccessor$$Type = (() => $IntegerProperty$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CropBlockAccessor$$Original = $CropBlockAccessor;}
declare module "com.simibubi.create.foundation.mixin.accessor.ConcretePowderBlockAccessor" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"

export interface $ConcretePowderBlockAccessor$$Interface {

(): $Block$$Type
}

export class $ConcretePowderBlockAccessor implements $ConcretePowderBlockAccessor$$Interface {
 "create$getConcrete"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConcretePowderBlockAccessor$$Type = (() => $Block$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConcretePowderBlockAccessor$$Original = $ConcretePowderBlockAccessor;}
