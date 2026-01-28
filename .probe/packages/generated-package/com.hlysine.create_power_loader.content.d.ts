declare module "com.hlysine.create_power_loader.content.trains.CPLGlobalStation" {
import {$StationChunkLoader, $StationChunkLoader$$Type} from "com.hlysine.create_power_loader.content.trains.StationChunkLoader"

export interface $CPLGlobalStation$$Interface {
set "loader"(value: $StationChunkLoader$$Type)
get "loader"(): $StationChunkLoader
}

export class $CPLGlobalStation implements $CPLGlobalStation$$Interface {
 "setLoader"(arg0: $StationChunkLoader$$Type): void
 "getLoader"(): $StationChunkLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPLGlobalStation$$Type = ($CPLGlobalStation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CPLGlobalStation$$Original = $CPLGlobalStation;}
declare module "com.hlysine.create_power_loader.content.emptychunkloader.EmptyChunkLoaderBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $EmptyChunkLoaderBlockEntity extends $KineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyChunkLoaderBlockEntity$$Type = ($EmptyChunkLoaderBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyChunkLoaderBlockEntity$$Original = $EmptyChunkLoaderBlockEntity;}
declare module "com.hlysine.create_power_loader.content.andesitechunkloader.AndesiteChunkLoaderBlockEntity" {
import {$AbstractChunkLoaderBlockEntity} from "com.hlysine.create_power_loader.content.AbstractChunkLoaderBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LoaderType} from "com.hlysine.create_power_loader.content.LoaderType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $AndesiteChunkLoaderBlockEntity extends $AbstractChunkLoaderBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
 "isLoaderActive": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
readonly "type": $LoaderType
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getLoadingRange"(): integer
get "loadingRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AndesiteChunkLoaderBlockEntity$$Type = ($AndesiteChunkLoaderBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AndesiteChunkLoaderBlockEntity$$Original = $AndesiteChunkLoaderBlockEntity;}
declare module "com.hlysine.create_power_loader.content.trains.CarriageChunkLoader" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Carriage, $Carriage$$Type} from "com.simibubi.create.content.trains.entity.Carriage"
import {$LoaderType} from "com.hlysine.create_power_loader.content.LoaderType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Set} from "java.util.Set"
import {$LoaderMode} from "com.hlysine.create_power_loader.content.LoaderMode"
import {$ChunkLoader$$Interface} from "com.hlysine.create_power_loader.content.ChunkLoader"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ChunkLoadManager$LoadedChunkPos} from "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos"

export class $CarriageChunkLoader implements $ChunkLoader$$Interface {
readonly "carriage": $Carriage
 "known": boolean
readonly "forcedChunks": $Set<($ChunkLoadManager$LoadedChunkPos)>
 "brass": boolean
 "andesite": boolean

constructor(arg0: $Carriage$$Type, arg1: boolean, arg2: boolean, arg3: boolean)

public "getLoaderMode"(): $LoaderMode
public "getLoaderType"(): $LoaderType
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "tick"(arg0: $Level$$Type): void
public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "write"(): $CompoundTag
public static "read"(arg0: $Carriage$$Type, arg1: $CompoundTag$$Type): $CarriageChunkLoader
public "onRemove"(): void
public "removeFromManager"(): void
public "addToManager"(): void
get "loaderMode"(): $LoaderMode
get "loaderType"(): $LoaderType
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarriageChunkLoader$$Type = ($CarriageChunkLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarriageChunkLoader$$Original = $CarriageChunkLoader;}
declare module "com.hlysine.create_power_loader.content.AbstractChunkLoaderBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IRotate$SpeedLevel} from "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel"
import {$LoaderType, $LoaderType$$Type} from "com.hlysine.create_power_loader.content.LoaderType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractChunkLoaderBlock extends $DirectionalKineticBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ATTACHED": $BooleanProperty
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
readonly "loaderType": $LoaderType

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $LoaderType$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChunkLoaderBlock$$Type = ($AbstractChunkLoaderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractChunkLoaderBlock$$Original = $AbstractChunkLoaderBlock;}
declare module "com.hlysine.create_power_loader.content.trains.TrainChunkLoader" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List} from "java.util.List"
import {$Train$$Type} from "com.simibubi.create.content.trains.entity.Train"
import {$LoaderType} from "com.hlysine.create_power_loader.content.LoaderType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LoaderMode} from "com.hlysine.create_power_loader.content.LoaderMode"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$CarriageChunkLoader} from "com.hlysine.create_power_loader.content.trains.CarriageChunkLoader"
import {$ChunkLoadManager$LoadedChunkPos} from "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Set} from "java.util.Set"
import {$ChunkLoader$$Interface} from "com.hlysine.create_power_loader.content.ChunkLoader"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $TrainChunkLoader implements $ChunkLoader$$Interface {
readonly "carriageLoaders": $List<($CarriageChunkLoader)>

constructor(arg0: $Train$$Type)

public "addToManager"(): void
public "getLoaderMode"(): $LoaderMode
public "getLoaderType"(): $LoaderType
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "tick"(arg0: $Level$$Type): void
public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "write"(): $CompoundTag
public static "read"(arg0: $Train$$Type, arg1: $CompoundTag$$Type): $TrainChunkLoader
public "onRemove"(): void
public "removeFromManager"(): void
get "loaderMode"(): $LoaderMode
get "loaderType"(): $LoaderType
get "forcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TrainChunkLoader$$Type = ($TrainChunkLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TrainChunkLoader$$Original = $TrainChunkLoader;}
declare module "com.hlysine.create_power_loader.content.andesitechunkloader.AndesiteChunkLoaderBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$LoaderType} from "com.hlysine.create_power_loader.content.LoaderType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$AndesiteChunkLoaderBlockEntity, $AndesiteChunkLoaderBlockEntity$$Type} from "com.hlysine.create_power_loader.content.andesitechunkloader.AndesiteChunkLoaderBlockEntity"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$AbstractChunkLoaderBlock} from "com.hlysine.create_power_loader.content.AbstractChunkLoaderBlock"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AndesiteChunkLoaderBlock extends $AbstractChunkLoaderBlock implements $IBE$$Interface<($AndesiteChunkLoaderBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ATTACHED": $BooleanProperty
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
readonly "loaderType": $LoaderType

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($AndesiteChunkLoaderBlockEntity)>
public "getBlockEntityClass"(): $Class<($AndesiteChunkLoaderBlockEntity)>
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($AndesiteChunkLoaderBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($AndesiteChunkLoaderBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($AndesiteChunkLoaderBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($AndesiteChunkLoaderBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $AndesiteChunkLoaderBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($AndesiteChunkLoaderBlockEntity)>
get "blockEntityClass"(): $Class<($AndesiteChunkLoaderBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AndesiteChunkLoaderBlock$$Type = ($AndesiteChunkLoaderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AndesiteChunkLoaderBlock$$Original = $AndesiteChunkLoaderBlock;}
declare module "com.hlysine.create_power_loader.content.LoaderType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $LoaderType extends $Enum<($LoaderType)> implements $StringRepresentable$$Interface {
static readonly "BRASS": $LoaderType
static readonly "ANDESITE": $LoaderType

public static "values"(): ($LoaderType)[]
public static "valueOf"(arg0: StringJS): $LoaderType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoaderType$$Type = (("andesite") | ("brass"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoaderType$$Original = $LoaderType;}
declare module "com.hlysine.create_power_loader.content.trains.CPLTrain" {
import {$TrainChunkLoader, $TrainChunkLoader$$Type} from "com.hlysine.create_power_loader.content.trains.TrainChunkLoader"

export interface $CPLTrain$$Interface {
set "loader"(value: $TrainChunkLoader$$Type)
get "loader"(): $TrainChunkLoader
}

export class $CPLTrain implements $CPLTrain$$Interface {
 "setLoader"(arg0: $TrainChunkLoader$$Type): void
 "getLoader"(): $TrainChunkLoader
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CPLTrain$$Type = ($CPLTrain);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CPLTrain$$Original = $CPLTrain;}
declare module "com.hlysine.create_power_loader.content.emptychunkloader.EmptyChunkLoaderBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntry} from "com.tterrag.registrate.util.entry.BlockEntry"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $EmptyChunkLoaderBlockItem extends $BlockItem {
readonly "reward": $BlockEntry<($Block)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

public static "createAndesite"(arg0: $Block$$Type, arg1: $Item$Properties$$Type): $EmptyChunkLoaderBlockItem
public static "createBrass"(arg0: $Block$$Type, arg1: $Item$Properties$$Type): $EmptyChunkLoaderBlockItem
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
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
export type $EmptyChunkLoaderBlockItem$$Type = ($EmptyChunkLoaderBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyChunkLoaderBlockItem$$Original = $EmptyChunkLoaderBlockItem;}
declare module "com.hlysine.create_power_loader.content.trains.StationChunkLoader" {
import {$StationChunkLoader$AttachedLoader} from "com.hlysine.create_power_loader.content.trains.StationChunkLoader$AttachedLoader"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LoaderType, $LoaderType$$Type} from "com.hlysine.create_power_loader.content.LoaderType"
import {$LoaderMode} from "com.hlysine.create_power_loader.content.LoaderMode"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$ChunkLoadManager$LoadedChunkPos} from "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos"
import {$TrackGraph$$Type} from "com.simibubi.create.content.trains.graph.TrackGraph"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Set} from "java.util.Set"
import {$ChunkLoader$$Interface} from "com.hlysine.create_power_loader.content.ChunkLoader"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GlobalStation$$Type} from "com.simibubi.create.content.trains.station.GlobalStation"

export class $StationChunkLoader implements $ChunkLoader$$Interface {
readonly "attachments": $Set<($StationChunkLoader$AttachedLoader)>
readonly "forcedChunks": $Set<($ChunkLoadManager$LoadedChunkPos)>

constructor(arg0: $GlobalStation$$Type)

public "removeAttachment"(arg0: $BlockPos$$Type): void
public "addAttachment"(arg0: $LoaderType$$Type, arg1: $BlockPos$$Type): void
public "addToManager"(): void
public static "isEnabledForStation"(arg0: $LoaderType$$Type): boolean
public "getLoaderMode"(): $LoaderMode
public "getLoaderType"(): $LoaderType
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "tick"(arg0: $TrackGraph$$Type, arg1: boolean): void
public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "write"(): $CompoundTag
public static "read"(arg0: $GlobalStation$$Type, arg1: $CompoundTag$$Type): $StationChunkLoader
public "onRemove"(): void
public "removeFromManager"(): void
get "loaderMode"(): $LoaderMode
get "loaderType"(): $LoaderType
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StationChunkLoader$$Type = ($StationChunkLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StationChunkLoader$$Original = $StationChunkLoader;}
declare module "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ChunkPos, $ChunkPos$$Type} from "net.minecraft.world.level.ChunkPos"
import {$Record} from "java.lang.Record"

export class $ChunkLoadManager$LoadedChunkPos extends $Record {
constructor(dimension: $ResourceLocation$$Type, chunkPos: $ChunkPos$$Type)
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type)
constructor(arg0: $Level$$Type, arg1: long)
constructor(arg0: $ResourceLocation$$Type, arg1: integer, arg2: integer)

public "dimension"(): $ResourceLocation
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "z"(): integer
public "chunkPos"(): $ChunkPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoadManager$LoadedChunkPos$$Type = ({"dimension"?: $ResourceLocation$$Type, "chunkPos"?: $ChunkPos$$Type}) | ([dimension?: $ResourceLocation$$Type, chunkPos?: $ChunkPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkLoadManager$LoadedChunkPos$$Original = $ChunkLoadManager$LoadedChunkPos;}
declare module "com.hlysine.create_power_loader.content.trains.StationChunkLoader$AttachedLoader" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LoaderType, $LoaderType$$Type} from "com.hlysine.create_power_loader.content.LoaderType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $StationChunkLoader$AttachedLoader extends $Record {
constructor(type: $LoaderType$$Type, pos: $BlockPos$$Type)

public "type"(): $LoaderType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "write"(): $CompoundTag
public static "read"(arg0: $CompoundTag$$Type): $StationChunkLoader$AttachedLoader
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StationChunkLoader$AttachedLoader$$Type = ({"pos"?: $BlockPos$$Type, "type"?: $LoaderType$$Type}) | ([pos?: $BlockPos$$Type, type?: $LoaderType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StationChunkLoader$AttachedLoader$$Original = $StationChunkLoader$AttachedLoader;}
declare module "com.hlysine.create_power_loader.content.brasschunkloader.BrassChunkLoaderBlockEntity" {
import {$AbstractChunkLoaderBlockEntity} from "com.hlysine.create_power_loader.content.AbstractChunkLoaderBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$LoaderType} from "com.hlysine.create_power_loader.content.LoaderType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $BrassChunkLoaderBlockEntity extends $AbstractChunkLoaderBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
 "isLoaderActive": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
readonly "type": $LoaderType
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setLoadingRange"(arg0: integer): void
public "getLoadingRange"(): integer
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
set "loadingRange"(value: integer)
get "loadingRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrassChunkLoaderBlockEntity$$Type = ($BrassChunkLoaderBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrassChunkLoaderBlockEntity$$Original = $BrassChunkLoaderBlockEntity;}
declare module "com.hlysine.create_power_loader.content.ChunkLoader" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$LoaderType} from "com.hlysine.create_power_loader.content.LoaderType"
import {$Set} from "java.util.Set"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$LoaderMode} from "com.hlysine.create_power_loader.content.LoaderMode"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ChunkLoadManager$LoadedChunkPos} from "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos"

export interface $ChunkLoader$$Interface {
get "loaderMode"(): $LoaderMode
get "loaderType"(): $LoaderType
get "forcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
}

export class $ChunkLoader implements $ChunkLoader$$Interface {
 "removeFromManager"(): void
 "addToManager"(): void
 "getLoaderMode"(): $LoaderMode
 "getLoaderType"(): $LoaderType
 "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
 "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChunkLoader$$Type = ($ChunkLoader);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChunkLoader$$Original = $ChunkLoader;}
declare module "com.hlysine.create_power_loader.content.emptychunkloader.EmptyChunkLoaderBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$EmptyChunkLoaderBlockEntity, $EmptyChunkLoaderBlockEntity$$Type} from "com.hlysine.create_power_loader.content.emptychunkloader.EmptyChunkLoaderBlockEntity"
import {$BlockEntityEntry$$Type} from "com.tterrag.registrate.util.entry.BlockEntityEntry"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $EmptyChunkLoaderBlock extends $DirectionalKineticBlock implements $IBE$$Interface<($EmptyChunkLoaderBlockEntity)> {
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
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BlockEntityEntry$$Type<($EmptyChunkLoaderBlockEntity$$Type)>)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($EmptyChunkLoaderBlockEntity)>
public "getBlockEntityClass"(): $Class<($EmptyChunkLoaderBlockEntity)>
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($EmptyChunkLoaderBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($EmptyChunkLoaderBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($EmptyChunkLoaderBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($EmptyChunkLoaderBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $EmptyChunkLoaderBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($EmptyChunkLoaderBlockEntity)>
get "blockEntityClass"(): $Class<($EmptyChunkLoaderBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EmptyChunkLoaderBlock$$Type = ($EmptyChunkLoaderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EmptyChunkLoaderBlock$$Original = $EmptyChunkLoaderBlock;}
declare module "com.hlysine.create_power_loader.content.LoaderMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $LoaderMode extends $Enum<($LoaderMode)> implements $StringRepresentable$$Interface {
static readonly "STATION": $LoaderMode
static readonly "CONTRAPTION": $LoaderMode
static readonly "TRAIN": $LoaderMode
static readonly "STATIC": $LoaderMode

public static "values"(): ($LoaderMode)[]
public static "valueOf"(arg0: StringJS): $LoaderMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoaderMode$$Type = (("static") | ("contraption") | ("train") | ("station"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoaderMode$$Original = $LoaderMode;}
declare module "com.hlysine.create_power_loader.content.AbstractChunkLoaderBlockEntity" {
import {$LoaderType, $LoaderType$$Type} from "com.hlysine.create_power_loader.content.LoaderType"
import {$LoaderMode} from "com.hlysine.create_power_loader.content.LoaderMode"
import {$Pair} from "net.createmod.catnip.data.Pair"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ChunkLoadManager$LoadedChunkPos, $ChunkLoadManager$LoadedChunkPos$$Type} from "com.hlysine.create_power_loader.content.ChunkLoadManager$LoadedChunkPos"
import {$StationBlockEntity, $StationBlockEntity$$Type} from "com.simibubi.create.content.trains.station.StationBlockEntity"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Set, $Set$$Type} from "java.util.Set"
import {$ChunkLoader$$Interface} from "com.hlysine.create_power_loader.content.ChunkLoader"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractChunkLoaderBlockEntity extends $KineticBlockEntity implements $ChunkLoader$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
 "isLoaderActive": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
readonly "type": $LoaderType
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LoaderType$$Type)

public "isSpeedRequirementFulfilled"(): boolean
public "updateAttachedStation"(arg0: $StationBlockEntity$$Type): void
public "canLoadChunks"(): boolean
public "getLoadingRange"(): integer
public "getLoaderMode"(): $LoaderMode
public "getLoaderType"(): $LoaderType
public "getAttachedStation"(): $StationBlockEntity
public "reclaimChunks"(arg0: $Set$$Type<($ChunkLoadManager$LoadedChunkPos$$Type)>): void
public "getForcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
public "tick"(): void
public "remove"(): void
public "initialize"(): void
public "getLocation"(): $Pair<($ResourceLocation), ($BlockPos)>
public "destroy"(): void
public "removeFromManager"(): void
public "addToManager"(): void
get "speedRequirementFulfilled"(): boolean
get "loadingRange"(): integer
get "loaderMode"(): $LoaderMode
get "loaderType"(): $LoaderType
get "attachedStation"(): $StationBlockEntity
get "forcedChunks"(): $Set<($ChunkLoadManager$LoadedChunkPos)>
get "location"(): $Pair<($ResourceLocation), ($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractChunkLoaderBlockEntity$$Type = ($AbstractChunkLoaderBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractChunkLoaderBlockEntity$$Original = $AbstractChunkLoaderBlockEntity;}
declare module "com.hlysine.create_power_loader.content.brasschunkloader.BrassChunkLoaderBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$LoaderType} from "com.hlysine.create_power_loader.content.LoaderType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BrassChunkLoaderBlockEntity, $BrassChunkLoaderBlockEntity$$Type} from "com.hlysine.create_power_loader.content.brasschunkloader.BrassChunkLoaderBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$AbstractChunkLoaderBlock} from "com.hlysine.create_power_loader.content.AbstractChunkLoaderBlock"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BrassChunkLoaderBlock extends $AbstractChunkLoaderBlock implements $IBE$$Interface<($BrassChunkLoaderBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ATTACHED": $BooleanProperty
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
readonly "loaderType": $LoaderType

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($BrassChunkLoaderBlockEntity)>
public "getBlockEntityClass"(): $Class<($BrassChunkLoaderBlockEntity)>
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($BrassChunkLoaderBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($BrassChunkLoaderBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($BrassChunkLoaderBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($BrassChunkLoaderBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BrassChunkLoaderBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($BrassChunkLoaderBlockEntity)>
get "blockEntityClass"(): $Class<($BrassChunkLoaderBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrassChunkLoaderBlock$$Type = ($BrassChunkLoaderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrassChunkLoaderBlock$$Original = $BrassChunkLoaderBlock;}
