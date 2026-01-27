declare module "net.mehvahdjukaar.moonlight.api.item.IThirdPersonAnimationProvider" {
import {$HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$HumanoidModel$$Type} from "net.minecraft.client.model.HumanoidModel"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IThirdPersonAnimationProvider$$Interface {
get "twoHanded"(): boolean
}

export class $IThirdPersonAnimationProvider implements $IThirdPersonAnimationProvider$$Interface {
 "poseLeftArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type): boolean
 "poseRightArm"<T extends $LivingEntity>(arg0: $ItemStack$$Type, arg1: $HumanoidModel$$Type<(T)>, arg2: T, arg3: $HumanoidArm$$Type): boolean
 "isTwoHanded"(): boolean
static "attachToItem"(target: $Item$$Type, object: $IThirdPersonAnimationProvider$$Type): void
static "get"(target: $Item$$Type): $IThirdPersonAnimationProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThirdPersonAnimationProvider$$Type = ($IThirdPersonAnimationProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IThirdPersonAnimationProvider$$Original = $IThirdPersonAnimationProvider;}
declare module "net.mehvahdjukaar.moonlight.api.events.neoforge.LightningStruckBlockEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$LightningBolt, $LightningBolt$$Type} from "net.minecraft.world.entity.LightningBolt"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$ILightningStruckBlockEvent, $ILightningStruckBlockEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.ILightningStruckBlockEvent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LightningStruckBlockEvent extends $BlockEvent implements $ILightningStruckBlockEvent$$Interface {
constructor(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type)

public "getEntity"(): $LightningBolt
public "getLevel"(): $LevelAccessor
public "getState"(): $BlockState
public static "create"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
public "getPos"(): $BlockPos
get "entity"(): $LightningBolt
get "level"(): $LevelAccessor
get "state"(): $BlockState
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LightningStruckBlockEvent$$Type = ($LightningStruckBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LightningStruckBlockEvent$$Original = $LightningStruckBlockEvent;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.SoftFluid" {
import {$FoodProvider} from "net.mehvahdjukaar.moonlight.api.fluids.FoodProvider"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$FluidContainerList} from "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SoftFluid$TintMethod} from "net.mehvahdjukaar.moonlight.api.fluids.SoftFluid$TintMethod"
import {$Component} from "net.minecraft.network.chat.Component"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Triplet} from "net.mehvahdjukaar.moonlight.api.misc.Triplet"

export class $SoftFluid {
static readonly "BOTTLE_COUNT": integer
readonly "isGenerated": boolean
static readonly "CODEC": $Codec<($SoftFluid)>
static readonly "BUCKET_COUNT": integer
static readonly "HOLDER_CODEC": $Codec<($Holder<($SoftFluid)>)>
static readonly "TRANSLATABLE_COMPONENT": $Codec<($Component)>
static readonly "BOWL_COUNT": integer
static readonly "WATER_BUCKET_COUNT": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($SoftFluid)>)>

constructor(fluid: $Holder$$Type<($Fluid)>)

public "isFood"(): boolean
public "getContainerList"(): $FluidContainerList
public "getEmptyContainer"(filledContainer: $Item$$Type): $Optional<($Item)>
public "getTranslatedName"(): $Component
public "getFoodProvider"(): $FoodProvider
public "getPreservedComponents"(): $HolderSet<($DataComponentType<(never)>)>
public "getVanillaFluid"(): $Holder<($Fluid)>
public "getTintMethod"(): $SoftFluid$TintMethod
public "getAverageTextureTintColor"(): integer
public static "getRenderingData"(useTexturesFrom: $ResourceLocation$$Type): $Triplet<($ResourceLocation), ($ResourceLocation), (integer)>
public static "getFluidSpecificAttributes"(fluid: $Fluid$$Type): $Pair<(integer), ($Component)>
public "afterInit"(): void
public "getTextureOverride"(): $ResourceLocation
public "getEquivalentFluids"(): $HolderSet<($Fluid)>
/**
 * 
 * @deprecated
 */
public "isEmptyFluid"(): boolean
public "getFilledContainer"(emptyContainer: $Item$$Type): $Optional<($Item)>
public "getEmissivity"(): integer
public "isColored"(): boolean
public "getStillTexture"(): $ResourceLocation
public "getFlowingTexture"(): $ResourceLocation
public "getTintColor"(): integer
public "getLuminosity"(): integer
public "isEnabled"(): boolean
public "isEquivalent"(fluid: $Holder$$Type<($Fluid)>): boolean
get "food"(): boolean
get "containerList"(): $FluidContainerList
get "translatedName"(): $Component
get "foodProvider"(): $FoodProvider
get "preservedComponents"(): $HolderSet<($DataComponentType<(never)>)>
get "vanillaFluid"(): $Holder<($Fluid)>
get "tintMethod"(): $SoftFluid$TintMethod
get "averageTextureTintColor"(): integer
get "textureOverride"(): $ResourceLocation
get "equivalentFluids"(): $HolderSet<($Fluid)>
get "emptyFluid"(): boolean
get "emissivity"(): integer
get "colored"(): boolean
get "stillTexture"(): $ResourceLocation
get "flowingTexture"(): $ResourceLocation
get "tintColor"(): integer
get "luminosity"(): integer
get "enabled"(): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MoonlightSoftFluid
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MoonlightSoftFluidTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluid$$Type = (Special.MoonlightSoftFluid);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoftFluid$$Original = $SoftFluid;}
declare module "net.mehvahdjukaar.moonlight.api.misc.HolderRef$Opt" {
import {$OptHolderRef} from "net.mehvahdjukaar.moonlight.api.misc.OptHolderRef"

/**
 * 
 * @deprecated
 */
export class $HolderRef$Opt<T> extends $OptHolderRef<(T)> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderRef$Opt$$Type<T> = ($HolderRef$Opt<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderRef$Opt$$Original<T> = $HolderRef$Opt<(T)>;}
declare module "net.mehvahdjukaar.moonlight.api.events.neoforge.FireConsumeBlockEvent" {
import {$BlockEvent} from "net.neoforged.neoforge.event.level.BlockEvent"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFireConsumeBlockEvent, $IFireConsumeBlockEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.IFireConsumeBlockEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FireConsumeBlockEvent extends $BlockEvent implements $IFireConsumeBlockEvent$$Interface {
constructor(world: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type, wasTurnedToFire: boolean)

public "getFinalState"(): $BlockState
public "getFace"(): $Direction
public "setFinalState"(state: $BlockState$$Type): void
public "getChance"(): integer
public "wasReplacedByFire"(): boolean
public "getAge"(): integer
public "getLevel"(): $LevelAccessor
public "getState"(): $BlockState
public static "create"(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type, wasReplacedByFire: boolean): $IFireConsumeBlockEvent
public "getPos"(): $BlockPos
get "finalState"(): $BlockState
get "face"(): $Direction
set "finalState"(value: $BlockState$$Type)
get "chance"(): integer
get "age"(): integer
get "level"(): $LevelAccessor
get "state"(): $BlockState
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireConsumeBlockEvent$$Type = ($FireConsumeBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireConsumeBlockEvent$$Original = $FireConsumeBlockEvent;}
declare module "net.mehvahdjukaar.moonlight.api.events.IVillagerBrainEvent" {
import {$Map} from "java.util.Map"
import {$MemoryModuleType} from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import {$Optional} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$SensorType$$Type} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Villager, $Villager$$Type} from "net.minecraft.world.entity.npc.Villager"
import {$Sensor$$Type} from "net.minecraft.world.entity.ai.sensing.Sensor"
import {$ExpirableValue} from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import {$BehaviorControl$$Type} from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import {$Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"
import {$VillagerBrainEventInternal} from "net.mehvahdjukaar.moonlight.core.misc.VillagerBrainEventInternal"
import {$SimpleEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"

export interface $IVillagerBrainEvent$$Interface extends $SimpleEvent$$Interface {
get "villager"(): $Villager
get "memories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
get "internal"(): $VillagerBrainEventInternal
}

export class $IVillagerBrainEvent implements $IVillagerBrainEvent$$Interface {
 "getVillager"(): $Villager
 "getMemories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
 "addOrReplaceActivity"(arg0: $Activity$$Type, arg1: $ImmutableList$$Type<($Pair$$Type<(integer), ($BehaviorControl$$Type<($Villager$$Type)>)>)>): void
 "scheduleActivity"(arg0: $Activity$$Type, arg1: integer, arg2: integer): void
 "addSensor"(arg0: $SensorType$$Type<($Sensor$$Type<($Villager$$Type)>)>): void
 "addTaskToActivity"<P extends $Pair<(object), (object)>>(arg0: $Activity$$Type, arg1: P): boolean
 "getInternal"(): $VillagerBrainEventInternal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVillagerBrainEvent$$Type = ($IVillagerBrainEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVillagerBrainEvent$$Original = $IVillagerBrainEvent;}
declare module "net.mehvahdjukaar.moonlight.api.map.ExpandedMapData" {
import {$CustomMapData$Type, $CustomMapData$Type$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import {$Map} from "java.util.Map"
import {$CustomMapData} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData"
import {$CustomMapData$DirtyCounter} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter"
import {$MLMapMarker, $MLMapMarker$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapItemSavedData} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $ExpandedMapData$$Interface {
}

export class $ExpandedMapData implements $ExpandedMapData$$Interface {
 "ml$getCustomData"(): $Map<($CustomMapData$Type<(never), (never)>), ($CustomMapData<(never), (never)>)>
 "ml$toggleCustomDecoration"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): boolean
 "ml$setCustomDecorationsDirty"(): void
 "ml$setCustomDataDirty"<H extends $CustomMapData$DirtyCounter>(arg0: $CustomMapData$Type$$Type<(never), (never)>, arg1: $Consumer$$Type<(H)>): void
 "ml$getCustomDecorations"(): $Map<(StringJS), ($MLMapDecoration)>
 "ml$getCustomMarkers"(): $Map<(StringJS), ($MLMapMarker<(never)>)>
 "ml$getVanillaDecorationSize"(): integer
 "ml$addCustomMarker"<M extends $MLMapMarker<(object)>>(arg0: M): void
 "ml$removeCustomMarker"(arg0: StringJS): boolean
 "ml$copy"(): $MapItemSavedData
 "ml$resetCustomDecoration"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExpandedMapData$$Type = ($ExpandedMapData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExpandedMapData$$Original = $ExpandedMapData;}
declare module "net.mehvahdjukaar.moonlight.api.block.IRotatable" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IRotatable$$Interface {

(arg0: $BlockState, arg1: $LevelAccessor, arg2: $BlockPos, arg3: $Rotation, arg4: $Direction, arg5: $Vec3): ($BlockState$$Type)?
}

export class $IRotatable implements $IRotatable$$Interface {
 "getRotatedState"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type, arg4: $Direction$$Type, arg5: $Vec3$$Type): $Optional<($BlockState)>
 "rotateOverAxis"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): $Optional<($Direction)>
 "onRotated"(newState: $BlockState$$Type, oldState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, rotation: $Rotation$$Type, axis: $Direction$$Type, hit: $Vec3$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRotatable$$Type = ((arg0: $BlockState, arg1: $LevelAccessor, arg2: $BlockPos, arg3: $Rotation, arg4: $Direction, arg5: $Vec3) => ($BlockState$$Type)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRotatable$$Original = $IRotatable;}
declare module "net.mehvahdjukaar.moonlight.api.events.neoforge.DropItemOnDeathEvent" {
import {$IDropItemOnDeathEvent, $IDropItemOnDeathEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.IDropItemOnDeathEvent"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"

export class $DropItemOnDeathEvent extends $Event implements $IDropItemOnDeathEvent$$Interface, $ICancellableEvent$$Interface {
constructor(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean)

public "getReturnItemStack"(): $ItemStack
public "isBeforeDrop"(): boolean
public "setReturnItemStack"(stack: $ItemStack$$Type): void
public static "create"(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
public "setCanceled"(cancelled: boolean): void
public "isCanceled"(): boolean
public "getItemStack"(): $ItemStack
public "getPlayer"(): $Player
get "returnItemStack"(): $ItemStack
get "beforeDrop"(): boolean
set "returnItemStack"(value: $ItemStack$$Type)
set "canceled"(value: boolean)
get "canceled"(): boolean
get "itemStack"(): $ItemStack
get "player"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DropItemOnDeathEvent$$Type = ($DropItemOnDeathEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DropItemOnDeathEvent$$Original = $DropItemOnDeathEvent;}
declare module "net.mehvahdjukaar.moonlight.api.item.BlockTypeBasedBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockType, $BlockType$$Type} from "net.mehvahdjukaar.moonlight.api.set.BlockType"

export class $BlockTypeBasedBlockItem<T extends $BlockType> extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(pBlock: $Block$$Type, pProperties: $Item$Properties$$Type, blockType: T)

public "getBlockType"(): T
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockType"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTypeBasedBlockItem$$Type<T> = ($BlockTypeBasedBlockItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockTypeBasedBlockItem$$Original<T> = $BlockTypeBasedBlockItem<(T)>;}
declare module "net.mehvahdjukaar.moonlight.api.platform.network.Message$NetworkDir" {
import {$Enum} from "java.lang.Enum"

export class $Message$NetworkDir extends $Enum<($Message$NetworkDir)> {
static readonly "SERVER_BOUND": $Message$NetworkDir
static readonly "CLIENT_BOUND": $Message$NetworkDir

public static "values"(): ($Message$NetworkDir)[]
public static "valueOf"(name: StringJS): $Message$NetworkDir
public "getOpposite"(): $Message$NetworkDir
get "opposite"(): $Message$NetworkDir
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$NetworkDir$$Type = (("server_bound") | ("client_bound"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Message$NetworkDir$$Original = $Message$NetworkDir;}
declare module "net.mehvahdjukaar.moonlight.api.item.ILeftClickReact" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"

export interface $ILeftClickReact$$Interface {

(arg0: $ItemStack, arg1: $Player, arg2: $InteractionHand): boolean
}

export class $ILeftClickReact implements $ILeftClickReact$$Interface {
 "onLeftClick"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILeftClickReact$$Type = ((arg0: $ItemStack, arg1: $Player, arg2: $InteractionHand) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILeftClickReact$$Original = $ILeftClickReact;}
declare module "net.mehvahdjukaar.moonlight.api.misc.OptHolderRef" {
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$HolderRef} from "net.mehvahdjukaar.moonlight.api.misc.HolderRef"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $OptHolderRef<T> extends $HolderRef<(T)> {
public "asOptional"(r: $HolderLookup$Provider$$Type): $Optional<(T)>
public "ifPresent"(r: $HolderLookup$Provider$$Type, consumer: $Consumer$$Type<(T)>): void
public "get"(r: $HolderLookup$Provider$$Type): T
public "get"(level: $Level$$Type): T
public "get"(entity: $Entity$$Type): T
public static "of"<A>(location: $ResourceLocation$$Type, registry: $ResourceKey$$Type<($Registry<(A)>)>): $OptHolderRef<(A)>
public static "of"<A>(key: $ResourceKey$$Type<(A)>): $OptHolderRef<(A)>
public "lookup"(lookup: $HolderGetter$$Type<(T)>): $Holder<(T)>
public "isPresent"(r: $HolderLookup$Provider$$Type): boolean
public "isPresent"(level: $LevelReader$$Type): boolean
public "is"(tag: $TagKey$$Type<(T)>, r: $HolderLookup$Provider$$Type): boolean
public "is"(object: T, r: $HolderLookup$Provider$$Type): boolean
public "getHolder"(entity: $Entity$$Type): $Holder<(T)>
public "getHolder"(level: $Level$$Type): $Holder<(T)>
public "getHolder"(r: $HolderLookup$Provider$$Type): $Holder<(T)>
public "asOptionalHolder"(r: $HolderLookup$Provider$$Type): $Optional<($Holder<(T)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptHolderRef$$Type<T> = ($OptHolderRef<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptHolderRef$$Original<T> = $OptHolderRef<(T)>;}
declare module "net.mehvahdjukaar.moonlight.api.misc.HolderReference" {
import {$HolderRef} from "net.mehvahdjukaar.moonlight.api.misc.HolderRef"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$HolderRef$Opt} from "net.mehvahdjukaar.moonlight.api.misc.HolderRef$Opt"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"

/**
 * 
 * @deprecated
 */
export class $HolderReference<A> extends $HolderRef<(A)> {
public static "of"<A>(key: $ResourceKey$$Type<(A)>): $HolderReference<(A)>
public static "of"<A>(location: $ResourceLocation$$Type, registry: $ResourceKey$$Type<($Registry<(A)>)>): $HolderReference<(A)>
public static "of"<A>(id: StringJS, registry: $ResourceKey$$Type<($Registry<(A)>)>): $HolderReference<(A)>
public static "optional"<A>(location: $ResourceLocation$$Type, registry: $ResourceKey$$Type<($Registry<(A)>)>): $HolderRef$Opt<(A)>
public static "optional"<A>(key: $ResourceKey$$Type<(A)>): $HolderRef$Opt<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderReference$$Type<A> = ($HolderReference<(A)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderReference$$Original<A> = $HolderReference<(A)>;}
declare module "net.mehvahdjukaar.moonlight.api.item.BlockTypeBasedItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockType, $BlockType$$Type} from "net.mehvahdjukaar.moonlight.api.set.BlockType"

export class $BlockTypeBasedItem<T extends $BlockType> extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(pProperties: $Item$Properties$$Type, blockType: T)

public "getBlockType"(): T
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockType"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTypeBasedItem$$Type<T> = ($BlockTypeBasedItem<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockTypeBasedItem$$Original<T> = $BlockTypeBasedItem<(T)>;}
declare module "net.mehvahdjukaar.moonlight.api.block.IColored" {
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export interface $IColored$$Interface {

(): $DyeColor$$Type
get "color"(): $DyeColor
}

export class $IColored implements $IColored$$Interface {
 "supportsBlankColor"(): boolean
 "getColor"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColored$$Type = (() => $DyeColor$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IColored$$Original = $IColored;}
declare module "net.mehvahdjukaar.moonlight.api.events.IFireConsumeBlockEvent" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor} from "net.minecraft.world.level.LevelAccessor"
import {$SimpleEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IFireConsumeBlockEvent$$Interface extends $SimpleEvent$$Interface {
get "finalState"(): $BlockState
get "face"(): $Direction
set "finalState"(value: $BlockState$$Type)
get "chance"(): integer
get "level"(): $LevelAccessor
get "state"(): $BlockState
get "age"(): integer
get "pos"(): $BlockPos
}

export class $IFireConsumeBlockEvent implements $IFireConsumeBlockEvent$$Interface {
 "getFinalState"(): $BlockState
 "getFace"(): $Direction
 "setFinalState"(arg0: $BlockState$$Type): void
 "getChance"(): integer
 "wasReplacedByFire"(): boolean
 "getLevel"(): $LevelAccessor
 "getState"(): $BlockState
static "create"(pos: $BlockPos$$Type, level: $Level$$Type, state: $BlockState$$Type, chance: integer, age: integer, face: $Direction$$Type, wasReplacedByFire: boolean): $IFireConsumeBlockEvent
 "getAge"(): integer
 "getPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFireConsumeBlockEvent$$Type = ($IFireConsumeBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFireConsumeBlockEvent$$Original = $IFireConsumeBlockEvent;}
declare module "net.mehvahdjukaar.moonlight.api.misc.WorldSavedDataType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$WorldSavedData, $WorldSavedData$$Type} from "net.mehvahdjukaar.moonlight.api.misc.WorldSavedData"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec, $Codec$$Type} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$WorldSavedDataType$Scope$$Type} from "net.mehvahdjukaar.moonlight.api.misc.WorldSavedDataType$Scope"
import {$Function$$Type} from "java.util.function.Function"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"

export class $WorldSavedDataType<D extends $WorldSavedData> {
static readonly "CODEC": $Codec<($WorldSavedDataType<($WorldSavedData)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WorldSavedDataType<($WorldSavedData)>)>

constructor(id: $ResourceLocation$$Type, overworldToDataConstructor: $Function$$Type<($ServerLevel), (D)>, codec: $Codec$$Type<(D)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (D)>, scope: $WorldSavedDataType$Scope$$Type)
constructor(id: $ResourceLocation$$Type, overworldToDataConstructor: $Function$$Type<($ServerLevel), (D)>, codec: $Codec$$Type<(D)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (D)>)

public "isSyncable"(): boolean
public "getStreamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
public "getData"(level: $Level$$Type): D
public "setData"(level: $Level$$Type, data: D): void
public "getName"(): StringJS
public "getCodec"(): $Codec<(D)>
get "syncable"(): boolean
get "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
get "name"(): StringJS
get "codec"(): $Codec<(D)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MoonlightWorldSavedDataType
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MoonlightWorldSavedDataTypeTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSavedDataType$$Type<D> = (Special.MoonlightWorldSavedDataType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldSavedDataType$$Original<D> = $WorldSavedDataType<(D)>;}
declare module "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BlockPlacerItem} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.BlockPlacerItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $AdditionalItemPlacement {
constructor(placeable: $Block$$Type)

public "overrideUseOn"(pContext: $UseOnContext$$Type, foodProperties: $FoodProperties$$Type): $InteractionResult
public "overrideGetPlacementState"(pContext: $BlockPlaceContext$$Type): $BlockState
public "overridePlace"(pContext: $BlockPlaceContext$$Type): $InteractionResult
public "overrideUpdatePlacementContext"(context: $BlockPlaceContext$$Type): $BlockPlaceContext
public static "getBlockPlacer"(): $BlockPlacerItem
public "getPlacedBlock"(): $Block
public "toString"(): StringJS
public static get "blockPlacer"(): $BlockPlacerItem
get "placedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdditionalItemPlacement$$Type = ($AdditionalItemPlacement);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdditionalItemPlacement$$Original = $AdditionalItemPlacement;}
declare module "net.mehvahdjukaar.moonlight.api.set.wood.WoodType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$EntityDataSerializer} from "net.minecraft.network.syncher.EntityDataSerializer"
import {$WoodType as $WoodType$0} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$MapColor} from "net.minecraft.world.level.material.MapColor"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Boat$Type} from "net.minecraft.world.entity.vehicle.Boat$Type"
import {$ItemLike} from "net.minecraft.world.level.ItemLike"
import {$Supplier} from "java.util.function.Supplier"
import {$BlockType} from "net.mehvahdjukaar.moonlight.api.set.BlockType"

export class $WoodType extends $BlockType {
static "ENTITY_SERIALIZER": $Supplier<($EntityDataSerializer<($WoodType)>)>
static "CODEC": $Codec<($WoodType)>
readonly "log": $Block
readonly "id": $ResourceLocation
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($WoodType)>
readonly "planks": $Block

constructor(id: $ResourceLocation$$Type, baseBlock: $Block$$Type, logBlock: $Block$$Type)

public "toVanilla"(): $WoodType$0
public "canBurn"(): boolean
public "getTranslationKey"(): StringJS
public "getTexturePath"(): StringJS
public "toVanillaBoatOrOak"(): $Boat$Type
public "initializeChildrenBlocks"(): void
public "initializeChildrenItems"(): void
public "toVanillaBoat"(): $Boat$Type
public "toVanillaOrOak"(): $WoodType$0
public "mainChild"(): $ItemLike
public "copyProperties"(): $BlockBehaviour$Properties
public "getColor"(): $MapColor
get "translationKey"(): StringJS
get "texturePath"(): StringJS
get "color"(): $MapColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodType$$Type = ($WoodType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodType$$Original = $WoodType;}
declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$CustomMapData} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$Record} from "java.lang.Record"

export class $CustomMapData$Type<P, T extends $CustomMapData<(object), (object)>> extends $Record {
static readonly "CODEC": $Codec<($CustomMapData$Type<(never), (never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CustomMapData$Type<(never), (never)>)>

constructor(id: $ResourceLocation$$Type, factory: $Supplier$$Type<(T)>, patchCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>)

public "patchCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (P)>
public "get"(mapData: $MapItemSavedData$$Type): T
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "factory"(): $Supplier<(T)>
public "id"(): $ResourceLocation
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MoonlightCustomMapDataTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MoonlightCustomMapDataTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$Type$$Type<P, T> = (Special.MoonlightCustomMapDataTypes) | ({"factory"?: $Supplier$$Type<(T)>, "id"?: $ResourceLocation$$Type, "patchCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>}) | ([factory?: $Supplier$$Type<(T)>, id?: $ResourceLocation$$Type, patchCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMapData$Type$$Original<P, T> = $CustomMapData$Type<(P), (T)>;}
declare module "net.mehvahdjukaar.moonlight.api.events.IDropItemOnDeathEvent" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SimpleEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"

export interface $IDropItemOnDeathEvent$$Interface extends $SimpleEvent$$Interface {
get "returnItemStack"(): $ItemStack
get "beforeDrop"(): boolean
set "returnItemStack"(value: $ItemStack$$Type)
set "canceled"(value: boolean)
get "canceled"(): boolean
get "itemStack"(): $ItemStack
get "player"(): $Player
}

export class $IDropItemOnDeathEvent implements $IDropItemOnDeathEvent$$Interface {
 "getReturnItemStack"(): $ItemStack
 "isBeforeDrop"(): boolean
 "setReturnItemStack"(arg0: $ItemStack$$Type): void
static "create"(itemStack: $ItemStack$$Type, player: $Player$$Type, beforeDrop: boolean): $IDropItemOnDeathEvent
 "setCanceled"(arg0: boolean): void
 "isCanceled"(): boolean
 "getItemStack"(): $ItemStack
 "getPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDropItemOnDeathEvent$$Type = ($IDropItemOnDeathEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDropItemOnDeathEvent$$Original = $IDropItemOnDeathEvent;}
declare module "net.mehvahdjukaar.moonlight.api.events.neoforge.VillagerBrainEvent" {
import {$Brain$$Type} from "net.minecraft.world.entity.ai.Brain"
import {$Map} from "java.util.Map"
import {$MemoryModuleType} from "net.minecraft.world.entity.ai.memory.MemoryModuleType"
import {$Optional} from "java.util.Optional"
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$Event} from "net.neoforged.bus.api.Event"
import {$SensorType$$Type} from "net.minecraft.world.entity.ai.sensing.SensorType"
import {$ImmutableList$$Type} from "com.google.common.collect.ImmutableList"
import {$Villager, $Villager$$Type} from "net.minecraft.world.entity.npc.Villager"
import {$Sensor$$Type} from "net.minecraft.world.entity.ai.sensing.Sensor"
import {$IVillagerBrainEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.IVillagerBrainEvent"
import {$ExpirableValue} from "net.minecraft.world.entity.ai.memory.ExpirableValue"
import {$BehaviorControl$$Type} from "net.minecraft.world.entity.ai.behavior.BehaviorControl"
import {$Activity$$Type} from "net.minecraft.world.entity.schedule.Activity"
import {$VillagerBrainEventInternal} from "net.mehvahdjukaar.moonlight.core.misc.VillagerBrainEventInternal"

export class $VillagerBrainEvent extends $Event implements $IVillagerBrainEvent$$Interface {
constructor(brain: $Brain$$Type<($Villager$$Type)>, villager: $Villager$$Type)

public "getVillager"(): $Villager
public "getMemories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
public "addOrReplaceActivity"(activity: $Activity$$Type, activityPackage: $ImmutableList$$Type<($Pair$$Type<(integer), ($BehaviorControl$$Type<($Villager$$Type)>)>)>): void
public "scheduleActivity"(activity: $Activity$$Type, startTime: integer, endTime: integer): void
public "addSensor"(newSensor: $SensorType$$Type<($Sensor$$Type<($Villager$$Type)>)>): void
public "addTaskToActivity"<P extends $Pair<(object), (object)>>(activity: $Activity$$Type, task: P): boolean
public "getInternal"(): $VillagerBrainEventInternal
get "villager"(): $Villager
get "memories"(): $Map<($MemoryModuleType<(never)>), ($Optional<($ExpirableValue<(never)>)>)>
get "internal"(): $VillagerBrainEventInternal
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VillagerBrainEvent$$Type = ($VillagerBrainEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VillagerBrainEvent$$Original = $VillagerBrainEvent;}
declare module "net.mehvahdjukaar.moonlight.api.item.IThirdPersonSpecialItemRenderer" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiBufferSource, $MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$EntityModel, $EntityModel$$Type} from "net.minecraft.client.model.EntityModel"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IThirdPersonSpecialItemRenderer$$Interface {

(arg0: M, arg1: $LivingEntity, arg2: $ItemStack, arg3: $HumanoidArm, arg4: $PoseStack, arg5: $MultiBufferSource, arg6: integer): void
}

export class $IThirdPersonSpecialItemRenderer implements $IThirdPersonSpecialItemRenderer$$Interface {
 "renderThirdPersonItem"<T extends $Player, M extends $EntityModel<(object)>>(arg0: M, arg1: $LivingEntity$$Type, arg2: $ItemStack$$Type, arg3: $HumanoidArm$$Type, arg4: $PoseStack$$Type, arg5: $MultiBufferSource$$Type, arg6: integer): void
static "attachToItem"(target: $Item$$Type, object: $IThirdPersonSpecialItemRenderer$$Type): void
static "get"(target: $Item$$Type): $IThirdPersonSpecialItemRenderer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IThirdPersonSpecialItemRenderer$$Type = ((arg0: M, arg1: $LivingEntity, arg2: $ItemStack, arg3: $HumanoidArm, arg4: $PoseStack, arg5: $MultiBufferSource, arg6: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IThirdPersonSpecialItemRenderer$$Original = $IThirdPersonSpecialItemRenderer;}
declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData" {
import {$CustomMapData$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CustomMapData$DirtyCounter, $CustomMapData$DirtyCounter$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$Component} from "net.minecraft.network.chat.Component"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $CustomMapData$$Interface<C extends $CustomMapData$DirtyCounter, P> {
get "type"(): $CustomMapData$Type<(P), (never)>
}

export class $CustomMapData<C extends $CustomMapData$DirtyCounter, P> implements $CustomMapData$$Interface {
 "setDirty"(data: $MapItemSavedData$$Type, dirtySetter: $Consumer$$Type<(C)>): void
 "onItemTooltip"(data: $MapItemSavedData$$Type, stack: $ItemStack$$Type): $Component
 "onItemUpdate"(data: $MapItemSavedData$$Type, entity: $Entity$$Type): boolean
 "createUpdatePatch"(arg0: C): P
 "applyUpdatePatch"(arg0: P): void
 "createDirtyCounter"(): C
 "persistOnRescale"(): boolean
 "persistOnCopyOrLock"(): boolean
 "load"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "save"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
 "getType"(): $CustomMapData$Type<(P), (never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$$Type<C, P> = ($CustomMapData<(C), (P)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMapData$$Original<C, P> = $CustomMapData<(C), (P)>;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList" {
import {$Iterable$$Interface} from "java.lang.Iterable"
import {$Iterator} from "java.util.Iterator"
import {$Collection} from "java.util.Collection"
import {$Optional} from "java.util.Optional"
import {$FluidContainerList$Category, $FluidContainerList$Category$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList$Category"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Spliterator} from "java.util.Spliterator"
import {$List, $List$$Type} from "java.util.List"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FluidContainerList implements $Iterable$$Interface<($FluidContainerList$Category)> {
static readonly "CODEC": $Codec<($FluidContainerList)>

constructor(categoryList: $List$$Type<($FluidContainerList$Category$$Type)>)
constructor()

public "getCategories"(): $List<($FluidContainerList$Category)>
public "getCategoryFromFilled"(filledContainer: $Item$$Type): $Optional<($FluidContainerList$Category)>
public "getCategoryFromEmpty"(emptyContainer: $Item$$Type): $Optional<($FluidContainerList$Category)>
public "getPossibleFilled"(): $Collection<($Item)>
public "getFilled"(emptyContainer: $Item$$Type): $Optional<($Item)>
public "getPossibleEmpty"(): $Collection<($Item)>
public "iterator"(): $Iterator<($FluidContainerList$Category)>
public "getEmpty"(filledContainer: $Item$$Type): $Optional<($Item)>
public "spliterator"(): $Spliterator<($FluidContainerList$Category)>
public "forEach"(arg0: $Consumer$$Type<($FluidContainerList$Category)>): void
[Symbol.iterator](): IterableIterator<$FluidContainerList$Category>;
get "categories"(): $List<($FluidContainerList$Category)>
get "possibleFilled"(): $Collection<($Item)>
get "possibleEmpty"(): $Collection<($Item)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerList$$Type = ($FluidContainerList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidContainerList$$Original = $FluidContainerList;}
declare module "net.mehvahdjukaar.moonlight.api.misc.WorldSavedData" {
import {$WorldSavedDataType} from "net.mehvahdjukaar.moonlight.api.misc.WorldSavedDataType"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SavedData} from "net.minecraft.world.level.saveddata.SavedData"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $WorldSavedData extends $SavedData {
constructor()

public "setDirty"(dirty: boolean): void
public "onReassigned"(level: $Level$$Type): void
public "save"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): $CompoundTag
public "getType"(): $WorldSavedDataType<($WorldSavedData)>
public "sync"(): void
set "dirty"(value: boolean)
get "type"(): $WorldSavedDataType<($WorldSavedData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSavedData$$Type = ($WorldSavedData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldSavedData$$Original = $WorldSavedData;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.MLSpecialMapDecorationType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$TriFunction$$Type} from "net.mehvahdjukaar.moonlight.api.misc.TriFunction"
import {$MLMapDecorationType, $MLMapDecorationType$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType"
import {$MLMapMarker} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"
import {$SimpleMapMarker, $SimpleMapMarker$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.SimpleMapMarker"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $MLSpecialMapDecorationType<D extends $MLMapDecoration, M extends $MLMapMarker<(object)>> extends $MLMapDecorationType<(D), (M)> {
static readonly "CODEC": $Codec<($Holder<($MLMapDecorationType<(never), (never)>)>)>
 "factoryID": $ResourceLocation
static readonly "DIRECT_CODEC": $Codec<($MLMapDecorationType<(never), (never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MLMapDecorationType<(never), (never)>)>)>

public "isFromWorld"(): boolean
public "getCustomFactoryID"(): $ResourceLocation
public "createMarkerFromWorld"(reader: $BlockGetter$$Type, pos: $BlockPos$$Type): M
public static "fromWorldCustomMarker"<D extends $MLMapDecoration, M extends $MLMapMarker<(object)>>(markerCodec: $MapCodec$$Type<(M)>, decorationCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (D)>, markerFromWorldFactory: $TriFunction$$Type<($Holder<($MLMapDecorationType<(never), (never)>)>), ($BlockGetter), ($BlockPos), (M)>): $MLSpecialMapDecorationType<(D), (M)>
public static "fromWorldSimple"(markerFromWorldFactory: $TriFunction$$Type<($Holder<($MLMapDecorationType<(never), (never)>)>), ($BlockGetter), ($BlockPos), ($SimpleMapMarker$$Type)>): $MLSpecialMapDecorationType<($MLMapDecoration), ($SimpleMapMarker)>
public static "standaloneCustomMarker"<D extends $MLMapDecoration, M extends $MLMapMarker<(object)>>(markerCodec: $MapCodec$$Type<(M)>, decorationCode: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (D)>): $MLSpecialMapDecorationType<(D), (M)>
get "fromWorld"(): boolean
get "customFactoryID"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MLSpecialMapDecorationType$$Type<D, M> = ($MLSpecialMapDecorationType<(D), (M)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MLSpecialMapDecorationType$$Original<D, M> = $MLSpecialMapDecorationType<(D), (M)>;}
declare module "net.mehvahdjukaar.moonlight.api.block.IBlockHolder" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockHolder$$Interface {
get "heldBlock"(): $BlockState
set "heldBlock"(value: $BlockState$$Type)
}

export class $IBlockHolder implements $IBlockHolder$$Interface {
 "getHeldBlock"(): $BlockState
 "getHeldBlock"(arg0: integer): $BlockState
 "setHeldBlock"(arg0: $BlockState$$Type, arg1: integer): boolean
 "setHeldBlock"(state: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockHolder$$Type = ($IBlockHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockHolder$$Original = $IBlockHolder;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.SimpleMapMarker" {
import {$Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MLMapDecorationType$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType"
import {$MLMapMarker} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"

export class $SimpleMapMarker extends $MLMapMarker<($MLMapDecoration)> {
static readonly "HAS_SMALL_TEXTURE_FLAG": integer
static readonly "DIRECT_CODEC": $MapCodec<($SimpleMapMarker)>
static readonly "REFERENCE_CODEC": $Codec<($MLMapMarker<(never)>)>

constructor(type: $Holder$$Type<($MLMapDecorationType<(never), (never)>)>, pos: $BlockPos$$Type, rotation: float, name: ($Component$$Type)?)
constructor(type: $Holder$$Type<($MLMapDecorationType<(never), (never)>)>, pos: $BlockPos$$Type, rotation: float, name: ($Component$$Type)?, shouldRefresh: (boolean)?, shouldSave: (boolean)?, preventsExtending: boolean)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleMapMarker$$Type = ($SimpleMapMarker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleMapMarker$$Original = $SimpleMapMarker;}
declare module "net.mehvahdjukaar.moonlight.api.misc.WorldSavedDataType$Scope" {
import {$Enum} from "java.lang.Enum"

export class $WorldSavedDataType$Scope extends $Enum<($WorldSavedDataType$Scope)> {
static readonly "SINGLE_OVERWORLD": $WorldSavedDataType$Scope
static readonly "PER_LEVEL": $WorldSavedDataType$Scope

public static "values"(): ($WorldSavedDataType$Scope)[]
public static "valueOf"(name: StringJS): $WorldSavedDataType$Scope
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorldSavedDataType$Scope$$Type = (("single_overworld") | ("per_level"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorldSavedDataType$Scope$$Original = $WorldSavedDataType$Scope;}
declare module "net.mehvahdjukaar.moonlight.api.events.SimpleEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $SimpleEvent$$Interface {
}

export class $SimpleEvent implements $SimpleEvent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleEvent$$Type = ($SimpleEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleEvent$$Original = $SimpleEvent;}
declare module "net.mehvahdjukaar.moonlight.api.platform.network.Message" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$PacketFlow$$Type} from "net.minecraft.network.protocol.PacketFlow"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$List$$Type} from "java.util.List"
import {$CustomPacketPayload$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$Type"
import {$StreamDecoder$$Type} from "net.minecraft.network.codec.StreamDecoder"
import {$CustomPacketPayload, $CustomPacketPayload$$Interface} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$StreamMemberEncoder$$Type} from "net.minecraft.network.codec.StreamMemberEncoder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ServerboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ServerboundCustomPayloadPacket"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ClientboundCustomPayloadPacket} from "net.minecraft.network.protocol.common.ClientboundCustomPayloadPacket"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ConnectionProtocol$$Type} from "net.minecraft.network.ConnectionProtocol"
import {$CustomPacketPayload$TypeAndCodec, $CustomPacketPayload$TypeAndCodec$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$TypeAndCodec"
import {$CustomPacketPayload$FallbackProvider$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload$FallbackProvider"
import {$Message$Context$$Type} from "net.mehvahdjukaar.moonlight.api.platform.network.Message$Context"

export interface $Message$$Interface extends $CustomPacketPayload$$Interface {
}

export class $Message implements $Message$$Interface {
static "makeType"<T extends $Message>(id: $ResourceLocation$$Type, decoder: $StreamDecoder$$Type<($RegistryFriendlyByteBuf), (T)>): $CustomPacketPayload$TypeAndCodec<($RegistryFriendlyByteBuf), (T)>
 "write"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "handle"(arg0: $Message$Context$$Type): void
 "type"(): $CustomPacketPayload$Type<($CustomPacketPayload)>
static "codec"<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider$$Type<(B)>, arg1: $List$$Type<($CustomPacketPayload$TypeAndCodec$$Type<(B), (never)>)>, arg2: $ConnectionProtocol$$Type, arg3: $PacketFlow$$Type): $StreamCodec<(B), ($CustomPacketPayload)>
static "codec"<B extends $ByteBuf, T extends $CustomPacketPayload>(arg0: $StreamMemberEncoder$$Type<(B), (T)>, arg1: $StreamDecoder$$Type<(B), (T)>): $StreamCodec<(B), (T)>
 "toVanillaClientbound"(): $ClientboundCustomPayloadPacket
 "toVanillaServerbound"(): $ServerboundCustomPayloadPacket
static "createType"<T extends $CustomPacketPayload>(arg0: StringJS): $CustomPacketPayload$Type<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$$Type = ($Message);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Message$$Original = $Message;}
declare module "net.mehvahdjukaar.moonlight.api.worldgen.ISpecialSpawnsStructure" {
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$LongSet, $LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$WeightedRandomList, $WeightedRandomList$$Type} from "net.minecraft.util.random.WeightedRandomList"
import {$StructureManager, $StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $ISpecialSpawnsStructure$$Interface {

(arg0: $StructureManager, arg1: $Structure, arg2: $BlockPos, arg3: $LongSet, arg4: $MobCategory): $WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>
}

export class $ISpecialSpawnsStructure implements $ISpecialSpawnsStructure$$Interface {
 "ml$getSpecialSpawns"(arg0: $StructureManager$$Type, arg1: $Structure$$Type, arg2: $BlockPos$$Type, arg3: $LongSet$$Type, arg4: $MobCategory$$Type): $WeightedRandomList<($MobSpawnSettings$SpawnerData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialSpawnsStructure$$Type = ((arg0: $StructureManager, arg1: $Structure, arg2: $BlockPos, arg3: $LongSet, arg4: $MobCategory) => $WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpecialSpawnsStructure$$Original = $ISpecialSpawnsStructure;}
declare module "net.mehvahdjukaar.moonlight.api.item.additional_placements.BlockPlacerItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map, $Map$$Type} from "java.util.Map"
import {$SoundType$$Type} from "net.minecraft.world.level.block.SoundType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$FoodProperties, $FoodProperties$$Type} from "net.minecraft.world.food.FoodProperties"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockPlacerItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(pBlock: $Block$$Type, pProperties: $Item$Properties$$Type)

public "canPlace"(pContext: $BlockPlaceContext$$Type, pState: $BlockState$$Type): boolean
public "registerBlocks"(pBlockToItemMap: $Map$$Type<($Block$$Type), ($Item$$Type)>, pItem: $Item$$Type): void
public "mimicGetPlacementState"(pContext: $BlockPlaceContext$$Type, toPlace: $Block$$Type): $BlockState
public "mimicUseOn"(pContext: $UseOnContext$$Type, toPlace: $Block$$Type, foodProperties: $FoodProperties$$Type): $InteractionResult
public "mimicPlace"(pContext: $BlockPlaceContext$$Type, toPlace: $Block$$Type, overrideSound: $SoundType$$Type): $InteractionResult
public "getBlock"(): $Block
public static "get"(): $BlockPlacerItem
public "getDescriptionId"(): StringJS
public "getFoodProperties"(stack: $ItemStack$$Type, entity: $LivingEntity$$Type): $FoodProperties
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "block"(): $Block
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerItem$$Type = ($BlockPlacerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPlacerItem$$Original = $BlockPlacerItem;}
declare module "net.mehvahdjukaar.moonlight.api.misc.TriFunction" {
import {$Function$$Type} from "java.util.function.Function"

export interface $TriFunction$$Interface<T, U, V, R> {

(arg0: T, arg1: U, arg2: V): R
}

export class $TriFunction<T, U, V, R> implements $TriFunction$$Interface {
 "apply"(arg0: T, arg1: U, arg2: V): R
 "andThen"<W>(after: $Function$$Type<(R), (W)>): $TriFunction<(T), (U), (V), (W)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$$Type<T, U, V, R> = ((arg0: T, arg1: U, arg2: V) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriFunction$$Original<T, U, V, R> = $TriFunction<(T), (U), (V), (R)>;}
declare module "net.mehvahdjukaar.moonlight.api.block.IWashable" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IWashable$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Vec3): boolean
}

export class $IWashable implements $IWashable$$Interface {
 "tryWash"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Vec3$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWashable$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $Vec3) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWashable$$Original = $IWashable;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList$Category" {
import {$Optional} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$List} from "java.util.List"
import {$Item} from "net.minecraft.world.item.Item"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"

export class $FluidContainerList$Category {
static readonly "CODEC": $Codec<($FluidContainerList$Category)>

public "getEmptySound"(): $SoundEvent
public "getFillSound"(): $SoundEvent
public "getEmptyContainer"(): $Item
public "getFilledItems"(): $List<($Item)>
public "getFirstFilled"(): $Optional<($Item)>
public "getCapacity"(): integer
public "isEmpty"(): boolean
/**
 * 
 * @deprecated
 */
public "getAmount"(): integer
get "emptySound"(): $SoundEvent
get "fillSound"(): $SoundEvent
get "emptyContainer"(): $Item
get "filledItems"(): $List<($Item)>
get "firstFilled"(): $Optional<($Item)>
get "capacity"(): integer
get "empty"(): boolean
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerList$Category$$Type = ($FluidContainerList$Category);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidContainerList$Category$$Original = $FluidContainerList$Category;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.FoodProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FoodProvider {
static readonly "CODEC": $Codec<($FoodProvider)>
static readonly "CUSTOM_PROVIDERS": $Map<($Item), ($FoodProvider)>
static readonly "EMPTY": $FoodProvider

public "getDivider"(): integer
public "getFoodItem"(): $Item
public "consume"(player: $Player$$Type, world: $Level$$Type, nbtApplier: $Consumer$$Type<($ItemStack)>): boolean
public "isEmpty"(): boolean
public static "create"(item: $Item$$Type, divider: integer): $FoodProvider
get "divider"(): integer
get "foodItem"(): $Item
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoodProvider$$Type = ($FoodProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FoodProvider$$Original = $FoodProvider;}
declare module "net.mehvahdjukaar.moonlight.api.worldgen.SpawnBoxSettings" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$MobCategory, $MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$Codec} from "com.mojang.serialization.Codec"
import {$WeightedRandomList, $WeightedRandomList$$Type} from "net.minecraft.util.random.WeightedRandomList"
import {$MobSpawnSettings$SpawnerData, $MobSpawnSettings$SpawnerData$$Type} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$Record} from "java.lang.Record"

export class $SpawnBoxSettings extends $Record {
static readonly "CODEC": $Codec<($SpawnBoxSettings)>
static readonly "EMPTY": $SpawnBoxSettings

constructor(spawnOverrides: $Map$$Type<($MobCategory$$Type), ($Map$$Type<(StringJS), ($WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>)>)>)

public "spawnOverrides"(): $Map<($MobCategory), ($Map<(StringJS), ($WeightedRandomList<($MobSpawnSettings$SpawnerData)>)>)>
public "hasCategory"(category: $MobCategory$$Type): boolean
public "get"(boxID: StringJS, category: $MobCategory$$Type): $WeightedRandomList<($MobSpawnSettings$SpawnerData)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnBoxSettings$$Type = ({"spawnOverrides"?: $Map$$Type<($MobCategory$$Type), ($Map$$Type<(StringJS), ($WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>)>)>}) | ([spawnOverrides?: $Map$$Type<($MobCategory$$Type), ($Map$$Type<(StringJS), ($WeightedRandomList$$Type<($MobSpawnSettings$SpawnerData$$Type)>)>)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnBoxSettings$$Original = $SpawnBoxSettings;}
declare module "net.mehvahdjukaar.moonlight.api.set.BlockTypeRegistry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Iterator} from "java.util.Iterator"
import {$INamedSupplier} from "net.mehvahdjukaar.moonlight.api.util.INamedSupplier"
import {$Collection} from "java.util.Collection"
import {$AfterLanguageLoadEvent$$Type} from "net.mehvahdjukaar.moonlight.api.events.AfterLanguageLoadEvent"
import {$Spliterator} from "java.util.Spliterator"
import {$IdMap$$Interface} from "net.minecraft.core.IdMap"
import {$BlockType$SetFinder, $BlockType$SetFinder$$Type} from "net.mehvahdjukaar.moonlight.api.set.BlockType$SetFinder"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Class} from "java.lang.Class"
import {$BlockType, $BlockType$$Type} from "net.mehvahdjukaar.moonlight.api.set.BlockType"

export class $BlockTypeRegistry<T extends $BlockType> implements $IdMap$$Interface<(T)> {
public "getDefaultType"(): T
public static "getRegistryCodec"(): $Codec<($BlockTypeRegistry<(never)>)>
public static "getRegistryStreamCodec"(): $StreamCodec<($ByteBuf), ($BlockTypeRegistry<(never)>)>
/**
 * 
 * @deprecated
 */
public "getFromNBT"(name: StringJS): T
/**
 * 
 * @deprecated
 */
public "getStreamCodec"(): $StreamCodec<($ByteBuf), (T)>
public "getStreamCodecExplicit"(): $StreamCodec<($ByteBuf), (T)>
/**
 * 
 * @deprecated
 */
public "getFinders"(): $Collection<($BlockType$SetFinder<(T)>)>
public "addFinder"(finder: $BlockType$SetFinder$$Type<(T)>): void
public "addRemover"(id: $ResourceLocation$$Type): void
public "finalizeAndFreeze"(): void
public "buildAll"(): void
public "getBlockTypeOf"(itemLike: $ItemLike$$Type): T
public "makeFutureHolder"(id: $ResourceLocation$$Type): $INamedSupplier<(T)>
public "getValues"(): $Collection<(T)>
public "priority"(): integer
public "size"(): integer
public "get"(res: $ResourceLocation$$Type): T
public "iterator"(): $Iterator<(T)>
public "getKey"(input: T): $ResourceLocation
public "getId"(value: T): integer
public "getId"(arg0: any): integer
public "getOrDefault"(res: $ResourceLocation$$Type): T
public "getType"(): $Class<(T)>
public "typeName"(): StringJS
public "isFrozen"(): boolean
public "getCodec"(): $Codec<(T)>
public "byId"(arg0: integer): any
public "addTypeTranslations"(language: $AfterLanguageLoadEvent$$Type): void
public "byIdOrThrow"(arg0: integer): T
public "getIdOrThrow"(arg0: T): integer
public "spliterator"(): $Spliterator<(T)>
public "forEach"(arg0: $Consumer$$Type<(T)>): void
[Symbol.iterator](): IterableIterator<T>;
get "defaultType"(): T
public static get "registryCodec"(): $Codec<($BlockTypeRegistry<(never)>)>
public static get "registryStreamCodec"(): $StreamCodec<($ByteBuf), ($BlockTypeRegistry<(never)>)>
get "streamCodec"(): $StreamCodec<($ByteBuf), (T)>
get "streamCodecExplicit"(): $StreamCodec<($ByteBuf), (T)>
get "finders"(): $Collection<($BlockType$SetFinder<(T)>)>
get "values"(): $Collection<(T)>
get "type"(): $Class<(T)>
get "frozen"(): boolean
get "codec"(): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTypeRegistry$$Type<T> = ($BlockTypeRegistry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockTypeRegistry$$Original<T> = $BlockTypeRegistry<(T)>;}
declare module "net.mehvahdjukaar.moonlight.api.events.AfterLanguageLoadEvent" {
import {$LangBuilder$$Type} from "net.mehvahdjukaar.moonlight.api.resources.assets.LangBuilder"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$SimpleEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"

export class $AfterLanguageLoadEvent implements $SimpleEvent$$Interface {
constructor(lines: $Map$$Type<(StringJS), (StringJS)>, info: $List$$Type<(StringJS)>)

public "addEntries"(builder: $LangBuilder$$Type): void
public "getLanguageInfo"(): $Collection<(StringJS)>
public "getAllEntries"(): $Collection<(StringJS)>
public "getEntry"(key: StringJS): StringJS
public "addEntry"(key: StringJS, translation: StringJS): void
public "isDefault"(): boolean
public "getExtraLanguageLines"(): $Map<(StringJS), (StringJS)>
get "languageInfo"(): $Collection<(StringJS)>
get "allEntries"(): $Collection<(StringJS)>
get "default"(): boolean
get "extraLanguageLines"(): $Map<(StringJS), (StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AfterLanguageLoadEvent$$Type = ($AfterLanguageLoadEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AfterLanguageLoadEvent$$Original = $AfterLanguageLoadEvent;}
declare module "net.mehvahdjukaar.moonlight.api.misc.Triplet" {
import {$Record} from "java.lang.Record"

export class $Triplet<L, M, R> extends $Record {
constructor(left: L, middle: M, right: R)

public "middle"(): M
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<A, B, C>(left: A, middle: B, right: C): $Triplet<(A), (B), (C)>
public "left"(): L
public "right"(): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Triplet$$Type<L, M, R> = ({"middle"?: M, "left"?: L, "right"?: R}) | ([middle?: M, left?: L, right?: R]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Triplet$$Original<L, M, R> = $Triplet<(L), (M), (R)>;}
declare module "net.mehvahdjukaar.moonlight.api.item.WoodBasedItem" {
import {$BlockTypeBasedItem} from "net.mehvahdjukaar.moonlight.api.item.BlockTypeBasedItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$WoodType, $WoodType$$Type} from "net.mehvahdjukaar.moonlight.api.set.wood.WoodType"

export class $WoodBasedItem extends $BlockTypeBasedItem<($WoodType)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(builder: $Item$Properties$$Type, woodType: $WoodType$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodBasedItem$$Type = ($WoodBasedItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodBasedItem$$Original = $WoodBasedItem;}
declare module "net.mehvahdjukaar.moonlight.api.worldgen.ISpawnBoxStructure" {
import {$SpawnBoxSettings, $SpawnBoxSettings$$Type} from "net.mehvahdjukaar.moonlight.api.worldgen.SpawnBoxSettings"
import {$MobCategory$$Type} from "net.minecraft.world.entity.MobCategory"
import {$Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$LongSet$$Type} from "it.unimi.dsi.fastutil.longs.LongSet"
import {$WeightedRandomList} from "net.minecraft.util.random.WeightedRandomList"
import {$StructureManager$$Type} from "net.minecraft.world.level.StructureManager"
import {$MobSpawnSettings$SpawnerData} from "net.minecraft.world.level.biome.MobSpawnSettings$SpawnerData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ISpecialSpawnsStructure$$Interface} from "net.mehvahdjukaar.moonlight.api.worldgen.ISpecialSpawnsStructure"

export interface $ISpawnBoxStructure$$Interface extends $ISpecialSpawnsStructure$$Interface {

(): $SpawnBoxSettings$$Type
}

export class $ISpawnBoxStructure implements $ISpawnBoxStructure$$Interface {
 "ml$getSpecialSpawns"(structureManager: $StructureManager$$Type, structure: $Structure$$Type, pos: $BlockPos$$Type, chunkPosReferences: $LongSet$$Type, category: $MobCategory$$Type): $WeightedRandomList<($MobSpawnSettings$SpawnerData)>
 "ml$getSpawnBoxSettings"(): $SpawnBoxSettings
 "ml$setSpawnBoxSettings"(settings: $SpawnBoxSettings$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpawnBoxStructure$$Type = (() => $SpawnBoxSettings$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpawnBoxStructure$$Original = $ISpawnBoxStructure;}
declare module "net.mehvahdjukaar.moonlight.api.block.IBeeGrowable" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBeeGrowable$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState): boolean
}

export class $IBeeGrowable implements $IBeeGrowable$$Interface {
 "getPollinated"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
 "isPlantFullyGrown"(state: $BlockState$$Type, pos: $BlockPos$$Type, level: $Level$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBeeGrowable$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBeeGrowable$$Original = $IBeeGrowable;}
declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyDataPatch" {
import {$CustomMapData$Type, $CustomMapData$Type$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData$Type"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Map$$Type} from "java.util.Map"
import {$CustomMapData, $CustomMapData$$Type} from "net.mehvahdjukaar.moonlight.api.map.CustomMapData"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"

export class $CustomMapData$DirtyDataPatch<P, D extends $CustomMapData<(object), (object)>> extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($CustomMapData$DirtyDataPatch<(never), (never)>)>

constructor(type: $CustomMapData$Type$$Type<(P), (D)>, patch: P)

public "patch"(): P
public "type"(): $CustomMapData$Type<(P), (D)>
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "apply"(customData: $Map$$Type<($CustomMapData$Type$$Type<(never), (never)>), ($CustomMapData$$Type<(never), (never)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$DirtyDataPatch$$Type<P, D> = ({"patch"?: P, "type"?: $CustomMapData$Type$$Type<(P), (D)>}) | ([patch?: P, type?: $CustomMapData$Type$$Type<(P), (D)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMapData$DirtyDataPatch$$Original<P, D> = $CustomMapData$DirtyDataPatch<(P), (D)>;}
declare module "net.mehvahdjukaar.moonlight.api.block.ILightable$FireSoundType" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export interface $ILightable$FireSoundType$$Interface {

(arg0: $LevelAccessor, arg1: $BlockPos): void
}

export class $ILightable$FireSoundType implements $ILightable$FireSoundType$$Interface {
static readonly "FLAMING_ARROW": $ILightable$FireSoundType
static readonly "FLINT_AND_STEEL": $ILightable$FireSoundType
static readonly "FIRE_CHANGE": $ILightable$FireSoundType

 "play"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightable$FireSoundType$$Type = ((arg0: $LevelAccessor, arg1: $BlockPos) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILightable$FireSoundType$$Original = $ILightable$FireSoundType;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker" {
import {$RecordCodecBuilder$Instance$$Type} from "com.mojang.serialization.codecs.RecordCodecBuilder$Instance"
import {$Products$P7} from "com.mojang.datafixers.Products$P7"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RecordCodecBuilder$Mu} from "com.mojang.serialization.codecs.RecordCodecBuilder$Mu"
import {$MLMapDecorationType, $MLMapDecorationType$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"

export class $MLMapMarker<D extends $MLMapDecoration> {
static readonly "HAS_SMALL_TEXTURE_FLAG": integer
static readonly "REFERENCE_CODEC": $Codec<($MLMapMarker<(never)>)>

constructor(type: $Holder$$Type<($MLMapDecorationType<(never), (never)>)>, pos: $BlockPos$$Type, rotation: float, component: ($Component$$Type)?, shouldRefresh: (boolean)?, shouldSave: (boolean)?, preventsExtending: boolean)

public "createDecorationFromMarker"(data: $MapItemSavedData$$Type): D
public "getMarkerUniqueId"(): StringJS
public "shouldRefreshFromWorld"(): boolean
public "preventsExtending"(): boolean
public static "baseCodecGroup"<T extends $MLMapMarker<(object)>>(instance: $RecordCodecBuilder$Instance$$Type<(T)>): $Products$P7<($RecordCodecBuilder$Mu<(T)>), ($Holder<($MLMapDecorationType<(never), (never)>)>), ($BlockPos), (float), ($Optional<($Component)>), ($Optional<(boolean)>), ($Optional<(boolean)>), (boolean)>
public "getFlags"(): integer
public "equals"(o: any): boolean
public "hashCode"(): integer
public "getType"(): $Holder<($MLMapDecorationType<(never), (never)>)>
public "getDisplayName"(): $Optional<($Component)>
public "hasFlag"(flag: integer): boolean
public "getRotation"(): float
public "shouldSave"(): boolean
public "getPos"(): $BlockPos
get "markerUniqueId"(): StringJS
get "flags"(): integer
get "type"(): $Holder<($MLMapDecorationType<(never), (never)>)>
get "displayName"(): $Optional<($Component)>
get "rotation"(): float
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MLMapMarker$$Type<D> = ($MLMapMarker<(D)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MLMapMarker$$Original<D> = $MLMapMarker<(D)>;}
declare module "net.mehvahdjukaar.moonlight.api.set.BlockType" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BlockTypeRegistry} from "net.mehvahdjukaar.moonlight.api.set.BlockTypeRegistry"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$ItemLike} from "net.minecraft.world.level.ItemLike"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$Map$Entry} from "java.util.Map$Entry"

export class $BlockType {
readonly "id": $ResourceLocation

public "getTranslationKey"(): StringJS
public "getReadableName"(): StringJS
public "getItemOfThis"(key: StringJS): $Item
public "getVariantId"(postfix: StringJS, prefix: StringJS): StringJS
public "getVariantId"(baseName: StringJS, prefix: boolean): StringJS
public "getVariantId"(baseName: StringJS): StringJS
public static "changeType"<T extends $BlockType>(current: any, originalMat: T, destinationMat: T): any
public static "changeItemType"<T extends $BlockType>(current: $Item$$Type, originalMat: T, destinationMat: T): $Item
public static "changeBlockType"<T extends $BlockType>(current: $Block$$Type, originalMat: T, destinationMat: T): $Block
public "getBlockOfThis"(key: StringJS): $Block
public "getAppendableId"(): StringJS
public "getAppendableIdWith"(suffix: StringJS): StringJS
public "getAppendableIdWith"(prefix: StringJS, suffix: StringJS): StringJS
public "createPathWith"(shortenedId: StringJS, suffix: StringJS): StringJS
public "createPathWith"(shortenedId: StringJS, prefix: StringJS, suffix: StringJS): StringJS
public "createFullIdWith"(modIdOrEmpty: StringJS, folderOrEmpty: StringJS, shortenedIdOrEmpty: StringJS, prefixOrEmpty: StringJS, suffix: StringJS): StringJS
public "hasChild"(key: StringJS): boolean
public "mainChild"(): $ItemLike
public "getChildKey"(child: any): StringJS
public "removeChild"(childKey: StringJS): void
public "addChild"(genericName: StringJS, obj: any): void
public "getChildren"(): $Set<($Map$Entry<(StringJS), (any)>)>
public "getChild"(key: StringJS): any
public "getNamespace"(): StringJS
public "toString"(): StringJS
public "getTypeName"(): StringJS
public "getId"(): $ResourceLocation
public "hasChildren"(...keys: (StringJS)[]): boolean
public "getRegistry"<T extends $BlockType>(): $BlockTypeRegistry<(T)>
public "getSound"(): $SoundType
public "isVanilla"(): boolean
get "translationKey"(): StringJS
get "readableName"(): StringJS
get "appendableId"(): StringJS
get "children"(): $Set<($Map$Entry<(StringJS), (any)>)>
get "namespace"(): StringJS
get "typeName"(): StringJS
get "registry"(): $BlockTypeRegistry<(T)>
get "sound"(): $SoundType
get "vanilla"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$$Type = ($BlockType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockType$$Original = $BlockType;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.MLJsonMapDecorationType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$MLMapDecorationType} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$RuleTest, $RuleTest$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.RuleTest"
import {$Holder} from "net.minecraft.core.Holder"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"
import {$SimpleMapMarker} from "net.mehvahdjukaar.moonlight.api.map.decoration.SimpleMapMarker"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Structure, $Structure$$Type} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HolderSet, $HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $MLJsonMapDecorationType extends $MLMapDecorationType<($MLMapDecoration), ($SimpleMapMarker)> {
static readonly "CODEC": $Codec<($Holder<($MLMapDecorationType<(never), (never)>)>)>
static readonly "DIRECT_CODEC": $Codec<($MLMapDecorationType<(never), (never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MLMapDecorationType<(never), (never)>)>)>

constructor(target: ($RuleTest$$Type)?)
constructor(target: ($RuleTest$$Type)?, name: ($Component$$Type)?, rotation: float, mapColor: integer, structure: ($HolderSet$$Type<($Structure$$Type)>)?)
constructor(target: ($RuleTest$$Type)?, name: ($Component$$Type)?, rotation: float, mapColor: integer)

public "isFromWorld"(): boolean
public "getCustomFactoryID"(): $ResourceLocation
public "createMarkerFromWorld"(reader: $BlockGetter$$Type, pos: $BlockPos$$Type): $SimpleMapMarker
public "getDefaultMapColor"(): integer
public "getAssociatedStructure"(): $Optional<($HolderSet<($Structure)>)>
public "getTarget"(): $Optional<($RuleTest)>
public "getDisplayName"(): $Optional<($Component)>
public "getRotation"(): float
get "fromWorld"(): boolean
get "customFactoryID"(): $ResourceLocation
get "defaultMapColor"(): integer
get "associatedStructure"(): $Optional<($HolderSet<($Structure)>)>
get "target"(): $Optional<($RuleTest)>
get "displayName"(): $Optional<($Component)>
get "rotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MLJsonMapDecorationType$$Type = ($MLJsonMapDecorationType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MLJsonMapDecorationType$$Original = $MLJsonMapDecorationType;}
declare module "net.mehvahdjukaar.moonlight.api.resources.assets.LangBuilder" {
import {$Map} from "java.util.Map"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$AfterLanguageLoadEvent$$Type} from "net.mehvahdjukaar.moonlight.api.events.AfterLanguageLoadEvent"
import {$JsonElement} from "com.google.gson.JsonElement"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockType$$Type} from "net.mehvahdjukaar.moonlight.api.set.BlockType"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $LangBuilder {
constructor()

public "addGenericEntry"(key: StringJS, translation: StringJS): void
public "addSimpleEntry"<T>(reg: $Registry$$Type<(T)>, entry: T): void
public static "getReadableComponent"(key: StringJS, ...arg1: (StringJS)[]): $Component
public static "getReadableName"(name: StringJS): StringJS
public static "addDynamicEntry"(lang: $AfterLanguageLoadEvent$$Type, key: StringJS, type: $BlockType$$Type, entityType: $EntityType$$Type<(never)>): void
public static "addDynamicEntry"(lang: $AfterLanguageLoadEvent$$Type, key: StringJS, type: $BlockType$$Type, item: $Item$$Type): void
public static "addDynamicEntry"(lang: $AfterLanguageLoadEvent$$Type, key: StringJS, type: $BlockType$$Type, block: $Block$$Type): void
public "entries"(): $Map<(StringJS), (StringJS)>
public "addEntry"(block: $Block$$Type, translation: StringJS): void
public "addEntry"<T>(reg: $Registry$$Type<(T)>, entry: T, translation: StringJS): void
public "addEntry"(item: $Item$$Type, translation: StringJS): void
public "addEntry"(entityType: $EntityType$$Type<(never)>, translation: StringJS): void
public "build"(): $JsonElement
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LangBuilder$$Type = ($LangBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LangBuilder$$Original = $LangBuilder;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack" {
import {$FoodProvider} from "net.mehvahdjukaar.moonlight.api.fluids.FoodProvider"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentMap} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidContainerList} from "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$TooltipProvider} from "net.minecraft.world.item.component.TooltipProvider"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderReference$$Type} from "net.mehvahdjukaar.moonlight.api.misc.HolderReference"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$DataComponentHolder$$Type, $DataComponentHolder$$Interface} from "net.minecraft.core.component.DataComponentHolder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$HolderRef$$Type} from "net.mehvahdjukaar.moonlight.api.misc.HolderRef"
import {$DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FluidContainerList$Category} from "net.mehvahdjukaar.moonlight.api.fluids.FluidContainerList$Category"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$SoftFluid, $SoftFluid$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.SoftFluid"

export class $SoftFluidStack implements $DataComponentHolder$$Interface {
static readonly "CODEC": $Codec<($SoftFluidStack)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SoftFluidStack)>

public "fluid"(): $SoftFluid
public static "fromItem"(itemStack: $ItemStack$$Type, reg: $HolderLookup$Provider$$Type): $Pair<($SoftFluidStack), ($FluidContainerList$Category)>
/**
 * 
 * @deprecated
 */
public static "fromItem"(itemStack: $ItemStack$$Type): $Pair<($SoftFluidStack), ($FluidContainerList$Category)>
public static "bowl"(fluid: $Holder$$Type<($SoftFluid)>): $SoftFluidStack
public "isSameFluidSameComponents"(other: $SoftFluidStack$$Type): boolean
public static "hashFluidAndComponents"(stack: $SoftFluidStack$$Type): integer
public "getContainerList"(): $FluidContainerList
/**
 * 
 * @deprecated
 */
public static "fromFluid"(fluid: $Fluid$$Type, amount: integer, component: $DataComponentPatch$$Type): $SoftFluidStack
public static "fromFluid"(fluid: $FluidState$$Type, reg: $HolderLookup$Provider$$Type): $SoftFluidStack
/**
 * 
 * @deprecated
 */
public static "fromFluid"(fluid: $FluidState$$Type): $SoftFluidStack
public static "fromFluid"(fluid: $Fluid$$Type, amount: integer, reg: $HolderLookup$Provider$$Type): $SoftFluidStack
/**
 * 
 * @deprecated
 */
public static "fromFluid"(fluid: $Fluid$$Type, amount: integer): $SoftFluidStack
public static "fromFluid"(fluid: $Fluid$$Type, amount: integer, component: $DataComponentPatch$$Type, reg: $HolderLookup$Provider$$Type): $SoftFluidStack
public "getFoodProvider"(): $FoodProvider
public "getFlowingColor"(world: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
public "getStillColor"(world: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
public static "bottle"(fluid: $Holder$$Type<($SoftFluid)>): $SoftFluidStack
public "toAllPossibleFilledItems"(): $Multimap<($FluidContainerList$Category), ($ItemStack)>
public "getVanillaFluid"(): $Holder<($Fluid)>
public "splitToItem"(emptyContainer: $ItemStack$$Type): $Pair<($ItemStack), ($FluidContainerList$Category)>
public "getParticleColor"(world: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): integer
public "copyComponentsTo"(to: $DataComponentHolder$$Type): void
public "consume"(amount: integer, entity: $LivingEntity$$Type): void
public static "bucket"(fluid: $Holder$$Type<($SoftFluid)>): $SoftFluidStack
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "load"(lookupProvider: $HolderLookup$Provider$$Type, tag: $Tag$$Type): $SoftFluidStack
public "isEmpty"(): boolean
public "split"(amount: integer): $SoftFluidStack
public static "of"(fluid: $Holder$$Type<($SoftFluid)>): $SoftFluidStack
public static "of"(fluid: $Holder$$Type<($SoftFluid)>, count: integer): $SoftFluidStack
public static "of"(fluid: $Holder$$Type<($SoftFluid)>, count: integer, tag: $DataComponentPatch$$Type): $SoftFluidStack
/**
 * 
 * @deprecated
 */
public static "empty"(): $SoftFluidStack
public static "empty"(reg: $HolderGetter$$Type<($SoftFluid$$Type)>): $SoftFluidStack
public static "empty"(lookupProvider: $HolderLookup$Provider$$Type): $SoftFluidStack
public "set"<T>(type: $DataComponentType$$Type<(T)>, component: T): T
public "getCount"(): integer
public "save"(lookupProvider: $HolderLookup$Provider$$Type): $Tag
public "copy"(): $SoftFluidStack
public "is"(fluid: $HolderRef$$Type<($SoftFluid$$Type)>): boolean
public "is"(fluid: $HolderReference$$Type<($SoftFluid$$Type)>): boolean
public "is"(fluid: $Holder$$Type<($SoftFluid)>): boolean
/**
 * 
 * @deprecated
 */
public "is"(fluid: $SoftFluid$$Type): boolean
public "is"(location: $ResourceKey$$Type<($SoftFluid)>): boolean
public "is"(tag: $TagKey$$Type<($SoftFluid)>): boolean
public "grow"(amount: integer): void
public "getDisplayName"(): $Component
public "isEquivalent"(fluid: $Holder$$Type<($Fluid)>, componentPatch: $DataComponentPatch$$Type): boolean
public "isEquivalent"(fluid: $Holder$$Type<($Fluid)>): boolean
public "setCount"(count: integer): void
public "getComponents"(): $DataComponentMap
public "shrink"(amount: integer): void
public "getHolder"(): $Holder<($SoftFluid)>
public "copyWithCount"(count: integer): $SoftFluidStack
public "fluidKey"(): $ResourceKey<($SoftFluid)>
public "toItem"(emptyContainer: $ItemStack$$Type): $Pair<($ItemStack), ($FluidContainerList$Category)>
/**
 * 
 * @deprecated
 */
public "toItem"(emptyContainer: $ItemStack$$Type, dontModifyStack: boolean): $Pair<($ItemStack), ($FluidContainerList$Category)>
public "has"(arg0: $DataComponentType$$Type<(never)>): boolean
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(never)>)>): boolean
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
get "containerList"(): $FluidContainerList
get "foodProvider"(): $FoodProvider
get "vanillaFluid"(): $Holder<($Fluid)>
get "count"(): integer
get "displayName"(): $Component
set "count"(value: integer)
get "components"(): $DataComponentMap
get "holder"(): $Holder<($SoftFluid)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SoftFluidStack$$Type = ($SoftFluidStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoftFluidStack$$Original = $SoftFluidStack;}
declare module "net.mehvahdjukaar.moonlight.api.fluids.SoftFluid$TintMethod" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $SoftFluid$TintMethod extends $Enum<($SoftFluid$TintMethod)> implements $StringRepresentable$$Interface {
static readonly "FLOWING": $SoftFluid$TintMethod
static readonly "CODEC": $Codec<($SoftFluid$TintMethod)>
static readonly "STILL_AND_FLOWING": $SoftFluid$TintMethod
static readonly "NO_TINT": $SoftFluid$TintMethod

public "appliesToFlowing"(): boolean
public "appliesToStill"(): boolean
public static "values"(): ($SoftFluid$TintMethod)[]
public static "valueOf"(name: StringJS): $SoftFluid$TintMethod
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
export type $SoftFluid$TintMethod$$Type = (("no_tint") | ("flowing") | ("still_and_flowing"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SoftFluid$TintMethod$$Original = $SoftFluid$TintMethod;}
declare module "net.mehvahdjukaar.moonlight.api.map.CustomMapData$DirtyCounter" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CustomMapData$DirtyCounter$$Interface {
get "dirty"(): boolean
}

export class $CustomMapData$DirtyCounter implements $CustomMapData$DirtyCounter$$Interface {
 "clearDirty"(): void
 "isDirty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMapData$DirtyCounter$$Type = ($CustomMapData$DirtyCounter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMapData$DirtyCounter$$Original = $CustomMapData$DirtyCounter;}
declare module "net.mehvahdjukaar.moonlight.api.block.MimicBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MimicBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
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

public "getDrops"(state: $BlockState$$Type, builder: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getExplosionResistance"(state: $BlockState$$Type, world: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "getDestroyProgress"(state: $BlockState$$Type, player: $Player$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "getCloneItemStack"(level: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $ItemStack
public "getSoundType"(state: $BlockState$$Type, world: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MimicBlock$$Type = ($MimicBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MimicBlock$$Original = $MimicBlock;}
declare module "net.mehvahdjukaar.moonlight.api.platform.network.Message$Context" {
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$CustomPacketPayload$$Type} from "net.minecraft.network.protocol.common.custom.CustomPacketPayload"
import {$Message$NetworkDir} from "net.mehvahdjukaar.moonlight.api.platform.network.Message$NetworkDir"

export interface $Message$Context$$Interface {
get "direction"(): $Message$NetworkDir
get "player"(): $Player
}

export class $Message$Context implements $Message$Context$$Interface {
 "reply"(arg0: $CustomPacketPayload$$Type): void
 "disconnect"(arg0: $Component$$Type): void
 "getDirection"(): $Message$NetworkDir
 "getPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Message$Context$$Type = ($Message$Context);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Message$Context$$Original = $Message$Context;}
declare module "net.mehvahdjukaar.moonlight.api.set.BlockType$SetFinder" {
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Supplier$$Interface} from "java.util.function.Supplier"
import {$BlockType, $BlockType$$Type} from "net.mehvahdjukaar.moonlight.api.set.BlockType"

export interface $BlockType$SetFinder$$Interface<T extends $BlockType> extends $Supplier$$Interface<($Optional<(T)>)> {

(): (T)?
}

export class $BlockType$SetFinder<T extends $BlockType> implements $BlockType$SetFinder$$Interface {
 "get"(): $Optional<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockType$SetFinder$$Type<T> = (() => (T)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockType$SetFinder$$Original<T> = $BlockType$SetFinder<(T)>;}
declare module "net.mehvahdjukaar.moonlight.api.item.WoodBasedBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BlockTypeBasedBlockItem} from "net.mehvahdjukaar.moonlight.api.item.BlockTypeBasedBlockItem"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$WoodType, $WoodType$$Type} from "net.mehvahdjukaar.moonlight.api.set.wood.WoodType"

export class $WoodBasedBlockItem extends $BlockTypeBasedBlockItem<($WoodType)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(blockIn: $Block$$Type, builder: $Item$Properties$$Type, woodType: $WoodType$$Type)

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
export type $WoodBasedBlockItem$$Type = ($WoodBasedBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodBasedBlockItem$$Original = $WoodBasedBlockItem;}
declare module "net.mehvahdjukaar.moonlight.api.events.ILightningStruckBlockEvent" {
import {$LightningBolt, $LightningBolt$$Type} from "net.minecraft.world.entity.LightningBolt"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$SimpleEvent$$Interface} from "net.mehvahdjukaar.moonlight.api.events.SimpleEvent"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ILightningStruckBlockEvent$$Interface extends $SimpleEvent$$Interface {
get "level"(): $LevelAccessor
get "entity"(): $LightningBolt
get "state"(): $BlockState
get "pos"(): $BlockPos
}

export class $ILightningStruckBlockEvent implements $ILightningStruckBlockEvent$$Interface {
 "getLevel"(): $LevelAccessor
 "getEntity"(): $LightningBolt
 "getState"(): $BlockState
static "create"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, entity: $LightningBolt$$Type): $ILightningStruckBlockEvent
 "getPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightningStruckBlockEvent$$Type = ($ILightningStruckBlockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILightningStruckBlockEvent$$Original = $ILightningStruckBlockEvent;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional$$Type} from "java.util.Optional"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MLMapDecorationType, $MLMapDecorationType$$Type} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"

export class $MLMapDecoration {
static readonly "CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MLMapDecoration)>

constructor(type: $Holder$$Type<($MLMapDecorationType<(never), (never)>)>, x: byte, y: byte, rot: byte, displayName: ($Component$$Type)?)

public "getRot"(): byte
public "getY"(): byte
public "equals"(obj: any): boolean
public "hashCode"(): integer
public "getType"(): $Holder<($MLMapDecorationType<(never), (never)>)>
public "getDisplayName"(): $Component
public "getX"(): byte
get "rot"(): byte
get "y"(): byte
get "type"(): $Holder<($MLMapDecorationType<(never), (never)>)>
get "displayName"(): $Component
get "x"(): byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MLMapDecoration$$Type = ($MLMapDecoration);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MLMapDecoration$$Original = $MLMapDecoration;}
declare module "net.mehvahdjukaar.moonlight.api.item.IFirstPersonAnimationProvider" {
import {$HumanoidArm, $HumanoidArm$$Type} from "net.minecraft.world.entity.HumanoidArm"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Item$$Type} from "net.minecraft.world.item.Item"

export interface $IFirstPersonAnimationProvider$$Interface {

(arg0: $Player, arg1: $ItemStack, arg2: $InteractionHand, arg3: $HumanoidArm, arg4: $PoseStack, arg5: float, arg6: float, arg7: float, arg8: float): void
}

export class $IFirstPersonAnimationProvider implements $IFirstPersonAnimationProvider$$Interface {
 "animateItemFirstPerson"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $InteractionHand$$Type, arg3: $HumanoidArm$$Type, arg4: $PoseStack$$Type, arg5: float, arg6: float, arg7: float, arg8: float): void
static "attachToItem"(target: $Item$$Type, object: $IFirstPersonAnimationProvider$$Type): void
static "get"(target: $Item$$Type): $IFirstPersonAnimationProvider
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFirstPersonAnimationProvider$$Type = ((arg0: $Player, arg1: $ItemStack, arg2: $InteractionHand, arg3: $HumanoidArm, arg4: $PoseStack, arg5: float, arg6: float, arg7: float, arg8: float) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFirstPersonAnimationProvider$$Original = $IFirstPersonAnimationProvider;}
declare module "net.mehvahdjukaar.moonlight.api.util.INamedSupplier" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type, $Supplier$$Interface} from "java.util.function.Supplier"

export interface $INamedSupplier$$Interface<T> extends $Supplier$$Interface<(T)> {
get "id"(): $ResourceLocation
get "orThrow"(): T
}

export class $INamedSupplier<T> implements $INamedSupplier$$Interface {
 "get"(): T
 "getId"(): $ResourceLocation
static "memoize"<T>(id: $ResourceLocation$$Type, supp: $Supplier$$Type<(T)>): $INamedSupplier<(T)>
 "getOrThrow"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $INamedSupplier$$Type<T> = ($INamedSupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $INamedSupplier$$Original<T> = $INamedSupplier<(T)>;}
declare module "net.mehvahdjukaar.moonlight.api.misc.HolderRef" {
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter$$Type} from "net.minecraft.core.HolderGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$OptHolderRef} from "net.mehvahdjukaar.moonlight.api.misc.OptHolderRef"

export class $HolderRef<T> {
public "getID"(): $ResourceLocation
public static "clearCache"(): void
public "get"(level: $Level$$Type): T
public "get"(entity: $Entity$$Type): T
public "get"(level: $LevelReader$$Type): T
public "get"(r: $HolderLookup$Provider$$Type): T
public "equals"(o: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "wrap"<A>(obj: A, registry: $ResourceKey$$Type<($Registry<(A)>)>): $HolderRef<(A)>
public static "of"<A>(key: $ResourceKey$$Type<(A)>): $HolderRef<(A)>
public static "of"<A>(location: $ResourceLocation$$Type, registry: $ResourceKey$$Type<($Registry<(A)>)>): $HolderRef<(A)>
public static "of"<A>(id: StringJS, registry: $ResourceKey$$Type<($Registry<(A)>)>): $HolderRef<(A)>
public "lookup"(lookup: $HolderGetter$$Type<(T)>): $Holder<(T)>
public "getKey"(): $ResourceKey<(T)>
public "is"(predicate: $Predicate$$Type<($ResourceKey<(T)>)>): boolean
public "is"(other: $Holder$$Type<(T)>): boolean
public "is"(location: $ResourceLocation$$Type): boolean
public "is"(resourceKey: $ResourceKey$$Type<(T)>): boolean
public "is"(tag: $TagKey$$Type<(T)>, level: $LevelReader$$Type): boolean
public "is"(tag: $TagKey$$Type<(T)>, r: $HolderLookup$Provider$$Type): boolean
public "is"(object: T, level: $LevelReader$$Type): boolean
public "is"(object: T, r: $HolderLookup$Provider$$Type): boolean
public static "optional"<A>(location: $ResourceLocation$$Type, registry: $ResourceKey$$Type<($Registry<(A)>)>): $OptHolderRef<(A)>
public static "optional"<A>(key: $ResourceKey$$Type<(A)>): $OptHolderRef<(A)>
public "getHolder"(entity: $Entity$$Type): $Holder<(T)>
public "getHolder"(level: $Level$$Type): $Holder<(T)>
public "getHolder"(r: $HolderLookup$Provider$$Type): $Holder<(T)>
public "getHolder"(level: $LevelReader$$Type): $Holder<(T)>
public "getRegisteredName"(): StringJS
get "ID"(): $ResourceLocation
get "key"(): $ResourceKey<(T)>
get "registeredName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HolderRef$$Type<T> = ($HolderRef<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HolderRef$$Original<T> = $HolderRef<(T)>;}
declare module "net.mehvahdjukaar.moonlight.api.block.ModStairBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$StairsShape} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$StairBlock} from "net.minecraft.world.level.block.StairBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ModStairBlock extends $StairBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ModStairBlock)>
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

constructor(baseBlock: $Supplier$$Type<($Block$$Type)>, settings: $BlockBehaviour$Properties$$Type)

public "getBaseBlock"(): $Block
public "codec"(): $MapCodec<($ModStairBlock)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "baseBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModStairBlock$$Type = ($ModStairBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModStairBlock$$Original = $ModStairBlock;}
declare module "net.mehvahdjukaar.moonlight.api.block.WaterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaterBlock extends $Block implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(stateIn: $BlockState$$Type, facing: $Direction$$Type, facingState: $BlockState$$Type, worldIn: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, facingPos: $BlockPos$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterBlock$$Type = ($WaterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaterBlock$$Original = $WaterBlock;}
declare module "net.mehvahdjukaar.moonlight.api.block.ISoftFluidConsumer" {
import {$SoftFluidStack, $SoftFluidStack$$Type} from "net.mehvahdjukaar.moonlight.api.fluids.SoftFluidStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ISoftFluidConsumer$$Interface {

(arg0: $Level, arg1: $BlockState, arg2: $BlockPos, arg3: $SoftFluidStack): boolean
}

export class $ISoftFluidConsumer implements $ISoftFluidConsumer$$Interface {
 "tryAcceptingFluid"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $SoftFluidStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISoftFluidConsumer$$Type = ((arg0: $Level, arg1: $BlockState, arg2: $BlockPos, arg3: $SoftFluidStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISoftFluidConsumer$$Original = $ISoftFluidConsumer;}
declare module "net.mehvahdjukaar.moonlight.api.block.IPistonMotionReact" {
import {$PistonMovingBlockEntity$$Type} from "net.minecraft.world.level.block.piston.PistonMovingBlockEntity"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IPistonMotionReact$$Interface {
}

export class $IPistonMotionReact implements $IPistonMotionReact$$Interface {
 "ticksWhileMoved"(): boolean
 "moveTick"(level: $Level$$Type, pos: $BlockPos$$Type, movedState: $BlockState$$Type, aabb: $AABB$$Type, tile: $PistonMovingBlockEntity$$Type): void
 "onMoved"(level: $Level$$Type, pos: $BlockPos$$Type, movedState: $BlockState$$Type, direction: $Direction$$Type, extending: boolean): void
 "onMagnetMoved"(level: $Level$$Type, blockPos: $BlockPos$$Type, direction: $Direction$$Type, blockState: $BlockState$$Type, blockEntity: $BlockEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPistonMotionReact$$Type = ($IPistonMotionReact);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPistonMotionReact$$Original = $IPistonMotionReact;}
declare module "net.mehvahdjukaar.moonlight.api.block.ILightable" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ILightable$FireSoundType$$Type} from "net.mehvahdjukaar.moonlight.api.block.ILightable$FireSoundType"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ILightable$$Interface {
}

export class $ILightable implements $ILightable$$Interface {
static readonly "FLINT_AND_STEELS": $TagKey<($Item)>

/**
 * 
 * @deprecated
 */
 "interactWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
 "tryLightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
 "tryExtinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
 "canBeExtinguishedBy"(item: $ItemStack$$Type): boolean
 "playExtinguishSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type): void
 "spawnSmokeParticles"(state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): void
 "isLitUp"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
 "setLitUp"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, lit: boolean): void
 "setLitUp"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: boolean): void
 "lightableInteractWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
 "lightableInteractWithEntity"(level: $Level$$Type, state: $BlockState$$Type, projectile: $Entity$$Type, pos: $BlockPos$$Type): boolean
/**
 * 
 * @deprecated
 */
 "lightUp"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type, fireSourceType: $ILightable$FireSoundType$$Type): boolean
 "playLightUpSound"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type, type: $ILightable$FireSoundType$$Type): void
/**
 * 
 * @deprecated
 */
 "interactWithPlayerItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, stack: $ItemStack$$Type): $ItemInteractionResult
/**
 * 
 * @deprecated
 */
 "extinguish"(player: $Entity$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, world: $LevelAccessor$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILightable$$Type = ($ILightable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILightable$$Original = $ILightable;}
declare module "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecorationType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional} from "java.util.Optional"
import {$MLMapMarker} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapMarker"
import {$Holder} from "net.minecraft.core.Holder"
import {$MLMapDecoration} from "net.mehvahdjukaar.moonlight.api.map.decoration.MLMapDecoration"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Structure} from "net.minecraft.world.level.levelgen.structure.Structure"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$HolderSet} from "net.minecraft.core.HolderSet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MLMapDecorationType<D extends $MLMapDecoration, M extends $MLMapMarker<(object)>> {
static readonly "CODEC": $Codec<($Holder<($MLMapDecorationType<(never), (never)>)>)>
static readonly "DIRECT_CODEC": $Codec<($MLMapDecorationType<(never), (never)>)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Holder<($MLMapDecorationType<(never), (never)>)>)>

public "getMarkerCodec"(): $MapCodec<(M)>
public "getCustomFactoryID"(): $ResourceLocation
public "createMarkerFromWorld"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): M
public "getDefaultMapColor"(): integer
public "getAssociatedStructure"(): $Optional<($HolderSet<($Structure)>)>
public "getDecorationCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
get "markerCodec"(): $MapCodec<(M)>
get "customFactoryID"(): $ResourceLocation
get "defaultMapColor"(): integer
get "associatedStructure"(): $Optional<($HolderSet<($Structure)>)>
get "decorationCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (D)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.MoonlightMapMarker
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MoonlightMapMarkerTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MLMapDecorationType$$Type<D, M> = (Special.MoonlightMapMarker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MLMapDecorationType$$Original<D, M> = $MLMapDecorationType<(D), (M)>;}
