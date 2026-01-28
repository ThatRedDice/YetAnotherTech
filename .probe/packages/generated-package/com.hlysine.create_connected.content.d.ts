declare module "com.hlysine.create_connected.content.copycat.IWrappedBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IWrappedBlock$$Interface {
}

export class $IWrappedBlock implements $IWrappedBlock$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IWrappedBlock$$Type = ($IWrappedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IWrappedBlock$$Original = $IWrappedBlock;}
declare module "com.hlysine.create_connected.content.fluidvessel.FluidVesselBlock$Shape" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FluidVesselBlock$Shape extends $Enum<($FluidVesselBlock$Shape)> implements $StringRepresentable$$Interface {
static readonly "PLAIN": $FluidVesselBlock$Shape
static readonly "WINDOW_TOP_SINGLE": $FluidVesselBlock$Shape
static readonly "WINDOW_BOTTOM_SINGLE": $FluidVesselBlock$Shape
static readonly "WINDOW_TOP": $FluidVesselBlock$Shape
static readonly "WINDOW_SINGLE": $FluidVesselBlock$Shape
static readonly "WINDOW_MIDDLE_SINGLE": $FluidVesselBlock$Shape
static readonly "WINDOW_MIDDLE": $FluidVesselBlock$Shape
static readonly "WINDOW": $FluidVesselBlock$Shape
static readonly "WINDOW_BOTTOM": $FluidVesselBlock$Shape

public "nonSingleVariant"(): $FluidVesselBlock$Shape
public static "values"(): ($FluidVesselBlock$Shape)[]
public static "valueOf"(arg0: StringJS): $FluidVesselBlock$Shape
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
export type $FluidVesselBlock$Shape$$Type = (("plain") | ("window") | ("window_top") | ("window_middle") | ("window_bottom") | ("window_single") | ("window_top_single") | ("window_middle_single") | ("window_bottom_single"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVesselBlock$Shape$$Original = $FluidVesselBlock$Shape;}
declare module "com.hlysine.create_connected.content.invertedgearshift.InvertedGearshiftBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$GearshiftBlock} from "com.simibubi.create.content.kinetics.transmission.GearshiftBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SplitShaftBlockEntity} from "com.simibubi.create.content.kinetics.transmission.SplitShaftBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InvertedGearshiftBlock extends $GearshiftBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($SplitShaftBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SplitShaftBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvertedGearshiftBlock$$Type = ($InvertedGearshiftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvertedGearshiftBlock$$Original = $InvertedGearshiftBlock;}
declare module "com.hlysine.create_connected.content.inventoryaccessport.InventoryAccessPortBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IBlockExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$DirectedDirectionalBlock} from "com.simibubi.create.content.redstone.DirectedDirectionalBlock"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$InventoryAccessPortBlockEntity, $InventoryAccessPortBlockEntity$$Type} from "com.hlysine.create_connected.content.inventoryaccessport.InventoryAccessPortBlockEntity"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $InventoryAccessPortBlock extends $DirectedDirectionalBlock implements $IBE$$Interface<($InventoryAccessPortBlockEntity)>, $IWrenchable$$Interface, $IBlockExtension$$Interface {
static readonly "TARGET": $EnumProperty<($AttachFace)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DirectedDirectionalBlock)>
static "ATTACHED": $BooleanProperty
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
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($InventoryAccessPortBlockEntity)>
public "getBlockEntityClass"(): $Class<($InventoryAccessPortBlockEntity)>
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($InventoryAccessPortBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($InventoryAccessPortBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($InventoryAccessPortBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($InventoryAccessPortBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $InventoryAccessPortBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($InventoryAccessPortBlockEntity)>
get "blockEntityClass"(): $Class<($InventoryAccessPortBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryAccessPortBlock$$Type = ($InventoryAccessPortBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryAccessPortBlock$$Original = $InventoryAccessPortBlock;}
declare module "com.hlysine.create_connected.content.brake.BrakeBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SplitShaftBlockEntity} from "com.simibubi.create.content.kinetics.transmission.SplitShaftBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $BrakeBlockEntity extends $SplitShaftBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "calculateStressApplied"(): float
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getRotationSpeedModifier"(arg0: $Direction$$Type): float
public "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrakeBlockEntity$$Type = ($BrakeBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrakeBlockEntity$$Original = $BrakeBlockEntity;}
declare module "com.hlysine.create_connected.content.crankwheel.CrankWheelBlock$Large" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CrankWheelBlock} from "com.hlysine.create_connected.content.crankwheel.CrankWheelBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrankWheelBlock$Large extends $CrankWheelBlock {
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
readonly "largeCog": boolean
static "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankWheelBlock$Large$$Type = ($CrankWheelBlock$Large);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrankWheelBlock$Large$$Original = $CrankWheelBlock$Large;}
declare module "com.hlysine.create_connected.content.freewheelclutch.FreewheelClutchBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SplitShaftBlockEntity} from "com.simibubi.create.content.kinetics.transmission.SplitShaftBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $FreewheelClutchBlockEntity extends $SplitShaftBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "reattachNextTick": boolean
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "updateFromNetwork"(arg0: float, arg1: float, arg2: integer): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "onSpeedChanged"(arg0: float): void
public "getRotationSpeedModifier"(arg0: $Direction$$Type): float
public "tick"(): void
public "initialize"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreewheelClutchBlockEntity$$Type = ($FreewheelClutchBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreewheelClutchBlockEntity$$Original = $FreewheelClutchBlockEntity;}
declare module "com.hlysine.create_connected.content.parallelgearbox.ParallelGearboxBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$ParallelGearboxBlockEntity, $ParallelGearboxBlockEntity$$Type} from "com.hlysine.create_connected.content.parallelgearbox.ParallelGearboxBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RotatedPillarKineticBlock} from "com.simibubi.create.content.kinetics.base.RotatedPillarKineticBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export class $ParallelGearboxBlock extends $RotatedPillarKineticBlock implements $IBE$$Interface<($ParallelGearboxBlockEntity)> {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($ParallelGearboxBlockEntity)>
public "getBlockEntityClass"(): $Class<($ParallelGearboxBlockEntity)>
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($ParallelGearboxBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($ParallelGearboxBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ParallelGearboxBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ParallelGearboxBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ParallelGearboxBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($ParallelGearboxBlockEntity)>
get "blockEntityClass"(): $Class<($ParallelGearboxBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParallelGearboxBlock$$Type = ($ParallelGearboxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParallelGearboxBlock$$Original = $ParallelGearboxBlock;}
declare module "com.hlysine.create_connected.content.sequencedpulsegenerator.instructions.Instruction" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Instruction$ParameterConfig, $Instruction$ParameterConfig$$Type} from "com.hlysine.create_connected.content.sequencedpulsegenerator.instructions.Instruction$ParameterConfig"
import {$SequencedPulseGeneratorBlockEntity$$Type} from "com.hlysine.create_connected.content.sequencedpulsegenerator.SequencedPulseGeneratorBlockEntity"
import {$List} from "java.util.List"
import {$CCGuiTextures, $CCGuiTextures$$Type} from "com.hlysine.create_connected.CCGuiTextures"
import {$Vector, $Vector$$Type} from "java.util.Vector"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$InstructionResult} from "com.hlysine.create_connected.content.sequencedpulsegenerator.instructions.InstructionResult"

export class $Instruction {
readonly "hasSignal": boolean
readonly "parameter": $Instruction$ParameterConfig
readonly "terminal": boolean

constructor(arg0: StringJS, arg1: $CCGuiTextures$$Type, arg2: $Instruction$ParameterConfig$$Type, arg3: boolean, arg4: boolean)

public static "serializeAll"(arg0: $Vector$$Type<($Instruction$$Type)>): $ListTag
public "getParameterLangKey"(): StringJS
public "getBackground"(): $CCGuiTextures
public "getLangKey"(): StringJS
public static "getByOrdinal"(arg0: integer): $Instruction
public "setSignal"(arg0: integer): void
public static "deserializeAll"(arg0: $ListTag$$Type): $Vector<($Instruction)>
public "onFallingEdge"(arg0: $SequencedPulseGeneratorBlockEntity$$Type): $InstructionResult
public "onRisingEdge"(arg0: $SequencedPulseGeneratorBlockEntity$$Type): $InstructionResult
public "getDescriptiveLangKey"(): StringJS
public static "deserializeParams"(arg0: $CompoundTag$$Type): $Instruction
public "readState"(arg0: $CompoundTag$$Type): void
public "serializeParams"(): $CompoundTag
public "writeState"(arg0: $CompoundTag$$Type): void
public "tick"(arg0: $SequencedPulseGeneratorBlockEntity$$Type): $InstructionResult
public "getValue"(): integer
public static "register"(arg0: $Instruction$$Type): void
public "getId"(): StringJS
public "setValue"(arg0: integer): void
public "copy"(): $Instruction
public static "create"(arg0: StringJS): $Instruction
public static "getOptions"(): $List<($Component)>
public "getOrdinal"(): integer
public static "createDefault"(): $Vector<($Instruction)>
public "getSignal"(): integer
get "parameterLangKey"(): StringJS
get "background"(): $CCGuiTextures
get "langKey"(): StringJS
set "signal"(value: integer)
get "descriptiveLangKey"(): StringJS
get "value"(): integer
get "id"(): StringJS
set "value"(value: integer)
public static get "options"(): $List<($Component)>
get "ordinal"(): integer
get "signal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instruction$$Type = ($Instruction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instruction$$Original = $Instruction;}
declare module "com.hlysine.create_connected.content.parallelgearbox.VerticalParallelGearboxItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $VerticalParallelGearboxItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalParallelGearboxItem$$Type = ($VerticalParallelGearboxItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VerticalParallelGearboxItem$$Original = $VerticalParallelGearboxItem;}
declare module "com.hlysine.create_connected.content.copycat.wall.WrappedWallBlock" {
import {$WallSide} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$WallBlock} from "net.minecraft.world.level.block.WallBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IWrappedBlock$$Interface} from "com.hlysine.create_connected.content.copycat.IWrappedBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $WrappedWallBlock extends $WallBlock implements $IWrappedBlock$$Interface {
static readonly "SOUTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WEST_WALL": $EnumProperty<($WallSide)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "NORTH_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "EAST_WALL": $EnumProperty<($WallSide)>
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UP": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedWallBlock$$Type = ($WrappedWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedWallBlock$$Original = $WrappedWallBlock;}
declare module "com.hlysine.create_connected.content.linkedtransmitter.LinkedTransmitterItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBuilder} from "com.tterrag.registrate.builders.BlockBuilder"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$LinkedTransmitterBlock} from "com.hlysine.create_connected.content.linkedtransmitter.LinkedTransmitterBlock"

export class $LinkedTransmitterItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "MODULE_BLOCKS": $List<($LinkedTransmitterBlock)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "register"<T extends $Block, P, S extends $BlockBuilder<(object), (object)>>(): $NonNullUnaryOperator<(S)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedTransmitterItem$$Type = ($LinkedTransmitterItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedTransmitterItem$$Original = $LinkedTransmitterItem;}
declare module "com.hlysine.create_connected.content.freewheelclutch.FreewheelClutchBlock" {
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
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$FreewheelClutchBlockEntity, $FreewheelClutchBlockEntity$$Type} from "com.hlysine.create_connected.content.freewheelclutch.FreewheelClutchBlockEntity"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FreewheelClutchBlock extends $DirectionalKineticBlock implements $IBE$$Interface<($FreewheelClutchBlockEntity)> {
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
static readonly "UNCOUPLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($FreewheelClutchBlockEntity)>
public "getBlockEntityClass"(): $Class<($FreewheelClutchBlockEntity)>
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($FreewheelClutchBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($FreewheelClutchBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($FreewheelClutchBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($FreewheelClutchBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $FreewheelClutchBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($FreewheelClutchBlockEntity)>
get "blockEntityClass"(): $Class<($FreewheelClutchBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FreewheelClutchBlock$$Type = ($FreewheelClutchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FreewheelClutchBlock$$Original = $FreewheelClutchBlock;}
declare module "com.hlysine.create_connected.content.linkedtransmitter.LinkedButtonBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ButtonBlock, $ButtonBlock$$Type} from "net.minecraft.world.level.block.ButtonBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$LinkedTransmitterBlock$$Interface} from "com.hlysine.create_connected.content.linkedtransmitter.LinkedTransmitterBlock"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockSetType} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$LinkedTransmitterBlockEntity, $LinkedTransmitterBlockEntity$$Type} from "com.hlysine.create_connected.content.linkedtransmitter.LinkedTransmitterBlockEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LinkedButtonBlock extends $ButtonBlock implements $IBE$$Interface<($LinkedTransmitterBlockEntity)>, $SpecialBlockItemRequirement$$Interface, $IWrenchable$$Interface, $LinkedTransmitterBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static "LOCKED": $BooleanProperty
static readonly "CODEC": $MapCodec<($ButtonBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
readonly "type": $BlockSetType
readonly "ticksToStayPressed": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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
static readonly "FACE": $EnumProperty<($AttachFace)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $ButtonBlock$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public "getBlockEntityType"(): $BlockEntityType<($LinkedTransmitterBlockEntity)>
public "replaceWithBase"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "updateTransmittedSignal"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "replaceBase"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getBlockEntityClass"(): $Class<($LinkedTransmitterBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getBlock"(): $Block
public "getBase"(): $Block
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "press"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($LinkedTransmitterBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($LinkedTransmitterBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($LinkedTransmitterBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($LinkedTransmitterBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $LinkedTransmitterBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getTransmitterShape"(arg0: $BlockState$$Type): $VoxelShape
public "isHittingBase"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $HitResult$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($LinkedTransmitterBlockEntity)>
get "blockEntityClass"(): $Class<($LinkedTransmitterBlockEntity)>
get "block"(): $Block
get "base"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedButtonBlock$$Type = ($LinkedButtonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedButtonBlock$$Original = $LinkedButtonBlock;}
declare module "com.hlysine.create_connected.content.overstressclutch.OverstressClutchBlock$ClutchState" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $OverstressClutchBlock$ClutchState extends $Enum<($OverstressClutchBlock$ClutchState)> implements $StringRepresentable$$Interface {
static readonly "UNCOUPLED": $OverstressClutchBlock$ClutchState
static readonly "COUPLED": $OverstressClutchBlock$ClutchState
static readonly "UNCOUPLING": $OverstressClutchBlock$ClutchState

public static "values"(): ($OverstressClutchBlock$ClutchState)[]
public static "valueOf"(arg0: StringJS): $OverstressClutchBlock$ClutchState
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
export type $OverstressClutchBlock$ClutchState$$Type = (("coupled") | ("uncoupling") | ("uncoupled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverstressClutchBlock$ClutchState$$Original = $OverstressClutchBlock$ClutchState;}
declare module "com.hlysine.create_connected.content.brassgearbox.VerticalBrassGearboxItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $VerticalBrassGearboxItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalBrassGearboxItem$$Type = ($VerticalBrassGearboxItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VerticalBrassGearboxItem$$Original = $VerticalBrassGearboxItem;}
declare module "com.hlysine.create_connected.content.copycat.board.CopycatBoardBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MigratingWaterloggedCopycatBlock} from "com.hlysine.create_connected.content.copycat.MigratingWaterloggedCopycatBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatBoardBlock extends $MigratingWaterloggedCopycatBlock implements $SpecialBlockItemRequirement$$Interface {
static "DOWN": $BooleanProperty
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "UP": $BooleanProperty
static "SOUTH": $BooleanProperty
static "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public static "byDirection"(arg0: $Direction$$Type): $BooleanProperty
public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isIgnoredConnectivitySide"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "shouldFaceAlwaysRender"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBoardBlock$$Type = ($CopycatBoardBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatBoardBlock$$Original = $CopycatBoardBlock;}
declare module "com.hlysine.create_connected.content.copycat.board.CopycatBoxItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $CopycatBoxItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBoxItem$$Type = ($CopycatBoxItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatBoxItem$$Original = $CopycatBoxItem;}
declare module "com.hlysine.create_connected.content.sequencedpulsegenerator.instructions.Instruction$ParameterConfig" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ScrollValueBehaviour$StepContext, $ScrollValueBehaviour$StepContext$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour$StepContext"
import {$Record} from "java.lang.Record"

export class $Instruction$ParameterConfig extends $Record {
static readonly "timeStep": $Function<($ScrollValueBehaviour$StepContext), (integer)>
static readonly "timeFormat": $Function<(integer), (StringJS)>
static readonly "booleanFormat": $Function<(integer), (StringJS)>

constructor(parameterId: StringJS, minValue: integer, maxValue: integer, stepFunction: $Function$$Type<($ScrollValueBehaviour$StepContext), (integer)>, shiftStepValue: integer, defaultValue: integer, formatter: $Function$$Type<(integer), (StringJS)>)

public "shiftStepValue"(): integer
public "stepFunction"(): $Function<($ScrollValueBehaviour$StepContext), (integer)>
public "parameterId"(): StringJS
public "maxValue"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "defaultValue"(): integer
public "formatter"(): $Function<(integer), (StringJS)>
public "minValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instruction$ParameterConfig$$Type = ({"maxValue"?: integer, "parameterId"?: StringJS, "minValue"?: integer, "formatter"?: $Function$$Type<(integer), (StringJS)>, "stepFunction"?: $Function$$Type<($ScrollValueBehaviour$StepContext$$Type), (integer)>, "defaultValue"?: integer, "shiftStepValue"?: integer}) | ([maxValue?: integer, parameterId?: StringJS, minValue?: integer, formatter?: $Function$$Type<(integer), (StringJS)>, stepFunction?: $Function$$Type<($ScrollValueBehaviour$StepContext$$Type), (integer)>, defaultValue?: integer, shiftStepValue?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instruction$ParameterConfig$$Original = $Instruction$ParameterConfig;}
declare module "com.hlysine.create_connected.content.kineticbattery.ChargedKineticBatteryItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ChargedKineticBatteryItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargedKineticBatteryItem$$Type = ($ChargedKineticBatteryItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargedKineticBatteryItem$$Original = $ChargedKineticBatteryItem;}
declare module "com.hlysine.create_connected.content.WrenchableBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WrenchableBlock extends $Block implements $IWrenchable$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrenchableBlock$$Type = ($WrenchableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrenchableBlock$$Original = $WrenchableBlock;}
declare module "com.hlysine.create_connected.content.brassgearbox.BrassGearboxBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BrassGearboxBlockEntity, $BrassGearboxBlockEntity$$Type} from "com.hlysine.create_connected.content.brassgearbox.BrassGearboxBlockEntity"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
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
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RotatedPillarKineticBlock} from "com.simibubi.create.content.kinetics.base.RotatedPillarKineticBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export class $BrassGearboxBlock extends $RotatedPillarKineticBlock implements $IBE$$Interface<($BrassGearboxBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "FACE_4_FLIPPED": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "FACE_1_FLIPPED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "FACE_3_FLIPPED": $BooleanProperty
static readonly "FACE_2_FLIPPED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($BrassGearboxBlockEntity)>
public static "getFaceId"(arg0: $Direction$$Type, arg1: $Direction$Axis$$Type): integer
public static "isFaceFlipped"(arg0: integer, arg1: $BlockState$$Type): boolean
public static "setFaceFlipped"(arg0: integer, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public "getBlockEntityClass"(): $Class<($BrassGearboxBlockEntity)>
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($BrassGearboxBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($BrassGearboxBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($BrassGearboxBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($BrassGearboxBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BrassGearboxBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($BrassGearboxBlockEntity)>
get "blockEntityClass"(): $Class<($BrassGearboxBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrassGearboxBlock$$Type = ($BrassGearboxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrassGearboxBlock$$Original = $BrassGearboxBlock;}
declare module "com.hlysine.create_connected.content.chaincogwheel.ChainCogwheelBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ICogWheel$$Interface} from "com.simibubi.create.content.kinetics.simpleRelays.ICogWheel"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ChainDriveBlock$Part} from "com.simibubi.create.content.kinetics.chainDrive.ChainDriveBlock$Part"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ChainDriveBlock} from "com.simibubi.create.content.kinetics.chainDrive.ChainDriveBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ChainCogwheelBlock extends $ChainDriveBlock implements $ICogWheel$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "CONNECTED_ALONG_FIRST_COORDINATE": $BooleanProperty
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
static readonly "PART": $Property<($ChainDriveBlock$Part)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public "isSmallCog"(): boolean
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public "isDedicatedCogWheel"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
get "smallCog"(): boolean
get "largeCog"(): boolean
get "dedicatedCogWheel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChainCogwheelBlock$$Type = ($ChainCogwheelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChainCogwheelBlock$$Original = $ChainCogwheelBlock;}
declare module "com.hlysine.create_connected.content.copycat.slab.CopycatSlabBlock$FaceShape" {
import {$Enum} from "java.lang.Enum"

export class $CopycatSlabBlock$FaceShape extends $Enum<($CopycatSlabBlock$FaceShape)> {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlabBlock$FaceShape$$Type = (("full") | ("top") | ("bottom") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatSlabBlock$FaceShape$$Original = $CopycatSlabBlock$FaceShape;}
declare module "com.hlysine.create_connected.content.attributefilter.ItemStackCountAttribute$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAttribute} from "com.simibubi.create.content.logistics.item.filter.attribute.ItemAttribute"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ItemAttributeType$$Interface} from "com.simibubi.create.content.logistics.item.filter.attribute.ItemAttributeType"

export class $ItemStackCountAttribute$Type implements $ItemAttributeType$$Interface {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemAttribute)>
public "getAllAttributes"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $List<($ItemAttribute)>
public "createAttribute"(): $ItemAttribute
public "codec"(): $MapCodec<($ItemAttribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackCountAttribute$Type$$Type = ($ItemStackCountAttribute$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackCountAttribute$Type$$Original = $ItemStackCountAttribute$Type;}
declare module "com.hlysine.create_connected.content.overstressclutch.OverstressClutchBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$OverstressClutchBlockEntity, $OverstressClutchBlockEntity$$Type} from "com.hlysine.create_connected.content.overstressclutch.OverstressClutchBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$OverstressClutchBlock$ClutchState} from "com.hlysine.create_connected.content.overstressclutch.OverstressClutchBlock$ClutchState"
import {$AbstractEncasedShaftBlock} from "com.simibubi.create.content.kinetics.base.AbstractEncasedShaftBlock"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $OverstressClutchBlock extends $AbstractEncasedShaftBlock implements $IWrenchable$$Interface, $IBE$$Interface<($OverstressClutchBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STATE": $EnumProperty<($OverstressClutchBlock$ClutchState)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getBlockEntityType"(): $BlockEntityType<($OverstressClutchBlockEntity)>
public "getBlockEntityClass"(): $Class<($OverstressClutchBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($OverstressClutchBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($OverstressClutchBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($OverstressClutchBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($OverstressClutchBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $OverstressClutchBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($OverstressClutchBlockEntity)>
get "blockEntityClass"(): $Class<($OverstressClutchBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverstressClutchBlock$$Type = ($OverstressClutchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverstressClutchBlock$$Original = $OverstressClutchBlock;}
declare module "com.hlysine.create_connected.content.shearpin.ShearPinBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractBEShaftBlock} from "com.hlysine.create_connected.content.AbstractBEShaftBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ShearPinBlockEntity} from "com.hlysine.create_connected.content.shearpin.ShearPinBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ShearPinBlock extends $AbstractBEShaftBlock<($ShearPinBlockEntity)> {
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
static readonly "placementHelperId": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getParticleTargetRadius"(): float
public "getParticleInitialRadius"(): float
public "getBlockEntityType"(): $BlockEntityType<($ShearPinBlockEntity)>
public "getBlockEntityClass"(): $Class<($ShearPinBlockEntity)>
public static "isShaft"(arg0: $BlockState$$Type): boolean
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "particleTargetRadius"(): float
get "particleInitialRadius"(): float
get "blockEntityType"(): $BlockEntityType<($ShearPinBlockEntity)>
get "blockEntityClass"(): $Class<($ShearPinBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShearPinBlock$$Type = ($ShearPinBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShearPinBlock$$Original = $ShearPinBlock;}
declare module "com.hlysine.create_connected.content.copycat.MigratingCopycatBlock" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CopycatBlock} from "com.simibubi.create.content.decoration.copycat.CopycatBlock"
import {$CopycatBlockEntity} from "com.simibubi.create.content.decoration.copycat.CopycatBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MigratingCopycatBlock extends $CopycatBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getBlockEntityType"(): $BlockEntityType<($CopycatBlockEntity)>
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MigratingCopycatBlock$$Type = ($MigratingCopycatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MigratingCopycatBlock$$Original = $MigratingCopycatBlock;}
declare module "com.hlysine.create_connected.content.kineticbridge.KineticBridgeBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ScrollValueBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $KineticBridgeBlockEntity extends $KineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "stressMultiplier": $ScrollValueBehaviour
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "calculateStressApplied"(): float
public "updateFromNetwork"(arg0: float, arg1: float, arg2: integer): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "updateDestinationKinetic"(): void
public "updateSelfKinetic"(): void
public "onSpeedChanged"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBridgeBlockEntity$$Type = ($KineticBridgeBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBridgeBlockEntity$$Original = $KineticBridgeBlockEntity;}
declare module "com.hlysine.create_connected.content.centrifugalclutch.CentrifugalClutchBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CentrifugalClutchBlockEntity, $CentrifugalClutchBlockEntity$$Type} from "com.hlysine.create_connected.content.centrifugalclutch.CentrifugalClutchBlockEntity"
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
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CentrifugalClutchBlock extends $DirectionalKineticBlock implements $IBE$$Interface<($CentrifugalClutchBlockEntity)> {
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
static readonly "UNCOUPLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($CentrifugalClutchBlockEntity)>
public "getBlockEntityClass"(): $Class<($CentrifugalClutchBlockEntity)>
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CentrifugalClutchBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CentrifugalClutchBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CentrifugalClutchBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CentrifugalClutchBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CentrifugalClutchBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CentrifugalClutchBlockEntity)>
get "blockEntityClass"(): $Class<($CentrifugalClutchBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CentrifugalClutchBlock$$Type = ($CentrifugalClutchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CentrifugalClutchBlock$$Original = $CentrifugalClutchBlock;}
declare module "com.hlysine.create_connected.content.linkedtransmitter.LinkedLeverBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$LeverBlock, $LeverBlock$$Type} from "net.minecraft.world.level.block.LeverBlock"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$LinkedTransmitterBlock$$Interface} from "com.hlysine.create_connected.content.linkedtransmitter.LinkedTransmitterBlock"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$LinkedTransmitterBlockEntity, $LinkedTransmitterBlockEntity$$Type} from "com.hlysine.create_connected.content.linkedtransmitter.LinkedTransmitterBlockEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LinkedLeverBlock extends $LeverBlock implements $IBE$$Interface<($LinkedTransmitterBlockEntity)>, $SpecialBlockItemRequirement$$Interface, $IWrenchable$$Interface, $LinkedTransmitterBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static "LOCKED": $BooleanProperty
static readonly "CODEC": $MapCodec<($LeverBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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
static readonly "FACE": $EnumProperty<($AttachFace)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $LeverBlock$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public "getBlockEntityType"(): $BlockEntityType<($LinkedTransmitterBlockEntity)>
public "replaceWithBase"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "updateTransmittedSignal"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "replaceBase"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "getBlockEntityClass"(): $Class<($LinkedTransmitterBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "pull"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getBlock"(): $Block
public "getBase"(): $Block
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($LinkedTransmitterBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($LinkedTransmitterBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($LinkedTransmitterBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($LinkedTransmitterBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $LinkedTransmitterBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getTransmitterShape"(arg0: $BlockState$$Type): $VoxelShape
public "isHittingBase"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $HitResult$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($LinkedTransmitterBlockEntity)>
get "blockEntityClass"(): $Class<($LinkedTransmitterBlockEntity)>
get "block"(): $Block
get "base"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedLeverBlock$$Type = ($LinkedLeverBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedLeverBlock$$Original = $LinkedLeverBlock;}
declare module "com.hlysine.create_connected.content.sequencedpulsegenerator.SequencedPulseGeneratorBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$SequencedPulseGeneratorBlockEntity, $SequencedPulseGeneratorBlockEntity$$Type} from "com.hlysine.create_connected.content.sequencedpulsegenerator.SequencedPulseGeneratorBlockEntity"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
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
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractDiodeBlock} from "com.simibubi.create.content.redstone.diodes.AbstractDiodeBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SequencedPulseGeneratorBlock extends $AbstractDiodeBlock implements $IBE$$Interface<($SequencedPulseGeneratorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SequencedPulseGeneratorBlock)>
static readonly "POWERED_SIDE": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERING": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "updateNeighborsInFront"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "getBlockEntityType"(): $BlockEntityType<($SequencedPulseGeneratorBlockEntity)>
public "getBlockEntityClass"(): $Class<($SequencedPulseGeneratorBlockEntity)>
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($SequencedPulseGeneratorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($SequencedPulseGeneratorBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SequencedPulseGeneratorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SequencedPulseGeneratorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $SequencedPulseGeneratorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SequencedPulseGeneratorBlockEntity)>
get "blockEntityClass"(): $Class<($SequencedPulseGeneratorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedPulseGeneratorBlock$$Type = ($SequencedPulseGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SequencedPulseGeneratorBlock$$Original = $SequencedPulseGeneratorBlock;}
declare module "com.hlysine.create_connected.content.redstonelinkwildcard.ILinkWildcard" {
import {$RedstoneLinkNetworkHandler$Frequency, $RedstoneLinkNetworkHandler$Frequency$$Type} from "com.simibubi.create.content.redstone.link.RedstoneLinkNetworkHandler$Frequency"

export interface $ILinkWildcard$$Interface {

(arg0: $RedstoneLinkNetworkHandler$Frequency): boolean
}

export class $ILinkWildcard implements $ILinkWildcard$$Interface {
 "test"(arg0: $RedstoneLinkNetworkHandler$Frequency$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILinkWildcard$$Type = ((arg0: $RedstoneLinkNetworkHandler$Frequency) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILinkWildcard$$Original = $ILinkWildcard;}
declare module "com.hlysine.create_connected.content.attributefilter.ItemDamageAttribute$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAttribute} from "com.simibubi.create.content.logistics.item.filter.attribute.ItemAttribute"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ItemAttributeType$$Interface} from "com.simibubi.create.content.logistics.item.filter.attribute.ItemAttributeType"

export class $ItemDamageAttribute$Type implements $ItemAttributeType$$Interface {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemAttribute)>
public "getAllAttributes"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $List<($ItemAttribute)>
public "createAttribute"(): $ItemAttribute
public "codec"(): $MapCodec<($ItemAttribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemDamageAttribute$Type$$Type = ($ItemDamageAttribute$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemDamageAttribute$Type$$Original = $ItemDamageAttribute$Type;}
declare module "com.hlysine.create_connected.content.itemsilo.ItemSiloMountedStorageType" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder$Reference} from "net.minecraft.core.Holder$Reference"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ItemSiloMountedStorage} from "com.hlysine.create_connected.content.itemsilo.ItemSiloMountedStorage"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemSiloMountedStorageType extends $MountedItemStorageType<($ItemSiloMountedStorage)> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedItemStorageType<(never)>)>
readonly "holder": $Holder$Reference<($MountedItemStorageType<(never)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedItemStorageType<(never)>)>

constructor()

public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): $ItemSiloMountedStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSiloMountedStorageType$$Type = ($ItemSiloMountedStorageType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemSiloMountedStorageType$$Original = $ItemSiloMountedStorageType;}
declare module "com.hlysine.create_connected.content.sixwaygearbox.SixWayGearboxBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SplitShaftBlockEntity} from "com.simibubi.create.content.kinetics.transmission.SplitShaftBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $SixWayGearboxBlockEntity extends $SplitShaftBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getRotationSpeedModifier"(arg0: $Direction$$Type): float
public static "getRotationSpeedModifier"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $Direction$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SixWayGearboxBlockEntity$$Type = ($SixWayGearboxBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SixWayGearboxBlockEntity$$Original = $SixWayGearboxBlockEntity;}
declare module "com.hlysine.create_connected.content.copycat.beam.CopycatBeamBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MigratingWaterloggedCopycatBlock} from "com.hlysine.create_connected.content.copycat.MigratingWaterloggedCopycatBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatBeamBlock extends $MigratingWaterloggedCopycatBlock {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isIgnoredConnectivitySide"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "shouldFaceAlwaysRender"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBeamBlock$$Type = ($CopycatBeamBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatBeamBlock$$Original = $CopycatBeamBlock;}
declare module "com.hlysine.create_connected.content.overstressclutch.OverstressClutchBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ScrollValueBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour"
import {$SplitShaftBlockEntity} from "com.simibubi.create.content.kinetics.transmission.SplitShaftBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $OverstressClutchBlockEntity extends $SplitShaftBlockEntity {
 "maxDelay": $ScrollValueBehaviour
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "delay": integer
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "updateFromNetwork"(arg0: float, arg1: float, arg2: integer): void
public "addToTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "isIdle"(): boolean
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "onKineticUpdate"(): void
public "resetClutch"(): void
public "getRotationSpeedModifier"(arg0: $Direction$$Type): float
public "tick"(): void
public "initialize"(): void
get "idle"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OverstressClutchBlockEntity$$Type = ($OverstressClutchBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OverstressClutchBlockEntity$$Original = $OverstressClutchBlockEntity;}
declare module "com.hlysine.create_connected.content.inventorybridge.InventoryBridgeBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$InventoryBridgeBlockEntity, $InventoryBridgeBlockEntity$$Type} from "com.hlysine.create_connected.content.inventorybridge.InventoryBridgeBlockEntity"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $InventoryBridgeBlock extends $Block implements $IBE$$Interface<($InventoryBridgeBlockEntity)>, $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "ATTACHED_POSITIVE": $BooleanProperty
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
static "ATTACHED_NEGATIVE": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($InventoryBridgeBlockEntity)>
public static "getNegativeTarget"(arg0: $BlockState$$Type): $Direction
public static "getPositiveTarget"(arg0: $BlockState$$Type): $Direction
public "getBlockEntityClass"(): $Class<($InventoryBridgeBlockEntity)>
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($InventoryBridgeBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($InventoryBridgeBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($InventoryBridgeBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($InventoryBridgeBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $InventoryBridgeBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($InventoryBridgeBlockEntity)>
get "blockEntityClass"(): $Class<($InventoryBridgeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryBridgeBlock$$Type = ($InventoryBridgeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryBridgeBlock$$Original = $InventoryBridgeBlock;}
declare module "com.hlysine.create_connected.content.copycat.board.CopycatCatwalkItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $CopycatCatwalkItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCatwalkItem$$Type = ($CopycatCatwalkItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatCatwalkItem$$Original = $CopycatCatwalkItem;}
declare module "com.hlysine.create_connected.content.copycat.ICopycatWithWrappedBlock" {
import {$Comparable} from "java.lang.Comparable"
import {$Function$$Type} from "java.util.function.Function"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $ICopycatWithWrappedBlock$$Interface {

(): $Block$$Type
get "wrappedBlock"(): $Block
}

export class $ICopycatWithWrappedBlock implements $ICopycatWithWrappedBlock$$Interface {
static "wrappedState"(arg0: $Block$$Type, arg1: $BlockState$$Type): $BlockState
 "getWrappedBlock"(): $Block
static "tryCopyProperty"<T extends $Comparable<(object)>>(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Property$$Type<(T)>): $BlockState
static "unwrapForOperation"(arg0: $Block$$Type, arg1: $BlockState$$Type, arg2: $Function$$Type<($BlockState), ($BlockState$$Type)>): $BlockState
static "unwrap"(arg0: $Block$$Type): $Block
static "copyState"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatWithWrappedBlock$$Type = (() => $Block$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICopycatWithWrappedBlock$$Original = $ICopycatWithWrappedBlock;}
declare module "com.hlysine.create_connected.content.sixwaygearbox.SixWayGearboxBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
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
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RotatedPillarKineticBlock} from "com.simibubi.create.content.kinetics.base.RotatedPillarKineticBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$SixWayGearboxBlockEntity, $SixWayGearboxBlockEntity$$Type} from "com.hlysine.create_connected.content.sixwaygearbox.SixWayGearboxBlockEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export class $SixWayGearboxBlock extends $RotatedPillarKineticBlock implements $IBE$$Interface<($SixWayGearboxBlockEntity)> {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($SixWayGearboxBlockEntity)>
public "getBlockEntityClass"(): $Class<($SixWayGearboxBlockEntity)>
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($SixWayGearboxBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($SixWayGearboxBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SixWayGearboxBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SixWayGearboxBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $SixWayGearboxBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SixWayGearboxBlockEntity)>
get "blockEntityClass"(): $Class<($SixWayGearboxBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SixWayGearboxBlock$$Type = ($SixWayGearboxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SixWayGearboxBlock$$Original = $SixWayGearboxBlock;}
declare module "com.hlysine.create_connected.content.copycat.MigratingWaterloggedCopycatBlock" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CopycatBlockEntity} from "com.simibubi.create.content.decoration.copycat.CopycatBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$WaterloggedCopycatBlock} from "com.simibubi.create.content.decoration.copycat.WaterloggedCopycatBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MigratingWaterloggedCopycatBlock extends $WaterloggedCopycatBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getBlockEntityType"(): $BlockEntityType<($CopycatBlockEntity)>
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MigratingWaterloggedCopycatBlock$$Type = ($MigratingWaterloggedCopycatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MigratingWaterloggedCopycatBlock$$Original = $MigratingWaterloggedCopycatBlock;}
declare module "com.hlysine.create_connected.content.redstonelinkwildcard.RedstoneLinkWildcardItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ILinkWildcard$$Interface} from "com.hlysine.create_connected.content.redstonelinkwildcard.ILinkWildcard"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$RedstoneLinkNetworkHandler$Frequency$$Type} from "com.simibubi.create.content.redstone.link.RedstoneLinkNetworkHandler$Frequency"

export class $RedstoneLinkWildcardItem extends $Item implements $ILinkWildcard$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "test"(arg0: $RedstoneLinkNetworkHandler$Frequency$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneLinkWildcardItem$$Type = ($RedstoneLinkWildcardItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneLinkWildcardItem$$Original = $RedstoneLinkWildcardItem;}
declare module "com.hlysine.create_connected.content.linkedtransmitter.LinkedAnalogLeverBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$LinkedTransmitterBlock$$Interface} from "com.hlysine.create_connected.content.linkedtransmitter.LinkedTransmitterBlock"
import {$LinkedAnalogLeverBlockEntity} from "com.hlysine.create_connected.content.linkedtransmitter.LinkedAnalogLeverBlockEntity"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$AnalogLeverBlock, $AnalogLeverBlock$$Type} from "com.simibubi.create.content.redstone.analogLever.AnalogLeverBlock"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LinkedAnalogLeverBlock extends $AnalogLeverBlock implements $SpecialBlockItemRequirement$$Interface, $IWrenchable$$Interface, $LinkedTransmitterBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static "LOCKED": $BooleanProperty
static readonly "CODEC": $MapCodec<($AnalogLeverBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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
static readonly "FACE": $EnumProperty<($AttachFace)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $NonNullSupplier$$Type<($AnalogLeverBlock$$Type)>)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public "getBlockEntityType"(): $BlockEntityType<($LinkedAnalogLeverBlockEntity)>
public "replaceWithBase"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "replaceBase"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getBlock"(): $Block
public "getBase"(): $Block
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getTransmitterShape"(arg0: $BlockState$$Type): $VoxelShape
public "isHittingBase"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $HitResult$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($LinkedAnalogLeverBlockEntity)>
get "block"(): $Block
get "base"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedAnalogLeverBlock$$Type = ($LinkedAnalogLeverBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedAnalogLeverBlock$$Original = $LinkedAnalogLeverBlock;}
declare module "com.hlysine.create_connected.content.copycat.WaterloggedCopycatWrappedBlock" {
import {$MigratingWaterloggedCopycatBlock} from "com.hlysine.create_connected.content.copycat.MigratingWaterloggedCopycatBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Comparable} from "java.lang.Comparable"
import {$ICopycatWithWrappedBlock$$Interface} from "com.hlysine.create_connected.content.copycat.ICopycatWithWrappedBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaterloggedCopycatWrappedBlock extends $MigratingWaterloggedCopycatBlock implements $ICopycatWithWrappedBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "wrappedState"(arg0: $Block$$Type, arg1: $BlockState$$Type): $BlockState
public "getWrappedBlock"(): $Block
public static "tryCopyProperty"<T extends $Comparable<(object)>>(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Property$$Type<(T)>): $BlockState
public static "unwrapForOperation"(arg0: $Block$$Type, arg1: $BlockState$$Type, arg2: $Function$$Type<($BlockState), ($BlockState$$Type)>): $BlockState
public static "unwrap"(arg0: $Block$$Type): $Block
public static "copyState"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wrappedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterloggedCopycatWrappedBlock$$Type = ($WaterloggedCopycatWrappedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaterloggedCopycatWrappedBlock$$Original = $WaterloggedCopycatWrappedBlock;}
declare module "com.hlysine.create_connected.content.kineticbridge.KineticBridgeBlockItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $KineticBridgeBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "showBounds"(arg0: $BlockPlaceContext$$Type): void
public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
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
export type $KineticBridgeBlockItem$$Type = ($KineticBridgeBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBridgeBlockItem$$Original = $KineticBridgeBlockItem;}
declare module "com.hlysine.create_connected.content.fluidvessel.FluidVesselMountedStorageType" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$FluidVesselMountedStorage} from "com.hlysine.create_connected.content.fluidvessel.FluidVesselMountedStorage"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MountedFluidStorageType} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageType"
import {$SimpleRegistry} from "com.simibubi.create.api.registry.SimpleRegistry"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidVesselMountedStorageType extends $MountedFluidStorageType<($FluidVesselMountedStorage)> {
readonly "codec": $MapCodec<(T)>
static readonly "CODEC": $Codec<($MountedFluidStorageType<(never)>)>
static readonly "REGISTRY": $SimpleRegistry<($Block), ($MountedFluidStorageType<(never)>)>

constructor()

public "mount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): $FluidVesselMountedStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVesselMountedStorageType$$Type = ($FluidVesselMountedStorageType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVesselMountedStorageType$$Original = $FluidVesselMountedStorageType;}
declare module "com.hlysine.create_connected.content.linkedtransmitter.LinkedAnalogLeverBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AnalogLeverBlockEntity} from "com.simibubi.create.content.redstone.analogLever.AnalogLeverBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LinkedAnalogLeverBlockEntity extends $AnalogLeverBlockEntity {
 "containsBase": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "transmit"(arg0: integer): void
public "tick"(): void
public "remove"(): void
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getSignal"(): integer
get "signal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedAnalogLeverBlockEntity$$Type = ($LinkedAnalogLeverBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedAnalogLeverBlockEntity$$Original = $LinkedAnalogLeverBlockEntity;}
declare module "com.hlysine.create_connected.content.kineticbridge.KineticBridgeDestinationBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$KineticBridgeDestinationBlockEntity, $KineticBridgeDestinationBlockEntity$$Type} from "com.hlysine.create_connected.content.kineticbridge.KineticBridgeDestinationBlockEntity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $KineticBridgeDestinationBlock extends $DirectionalKineticBlock implements $IBE$$Interface<($KineticBridgeDestinationBlockEntity)> {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getPreferredFacing"(arg0: $BlockPlaceContext$$Type): $Direction
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($KineticBridgeDestinationBlockEntity)>
public "getBlockEntityClass"(): $Class<($KineticBridgeDestinationBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "getSource"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockPos
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "stillValid"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($KineticBridgeDestinationBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($KineticBridgeDestinationBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($KineticBridgeDestinationBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($KineticBridgeDestinationBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $KineticBridgeDestinationBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBridgeDestinationBlockEntity)>
get "blockEntityClass"(): $Class<($KineticBridgeDestinationBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBridgeDestinationBlock$$Type = ($KineticBridgeDestinationBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBridgeDestinationBlock$$Original = $KineticBridgeDestinationBlock;}
declare module "com.hlysine.create_connected.content.centrifugalclutch.CentrifugalClutchBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ScrollValueBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour"
import {$SplitShaftBlockEntity} from "com.simibubi.create.content.kinetics.transmission.SplitShaftBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $CentrifugalClutchBlockEntity extends $SplitShaftBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "reattachNextTick": boolean
 "networkDirty": boolean
static readonly "MAX_SPEED": integer
static readonly "DEFAULT_SPEED": integer
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "speedThreshold": $ScrollValueBehaviour
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "updateFromNetwork"(arg0: float, arg1: float, arg2: integer): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "onSpeedChanged"(arg0: float): void
public "getRotationSpeedModifier"(arg0: $Direction$$Type): float
public "tick"(): void
public "initialize"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CentrifugalClutchBlockEntity$$Type = ($CentrifugalClutchBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CentrifugalClutchBlockEntity$$Original = $CentrifugalClutchBlockEntity;}
declare module "com.hlysine.create_connected.content.fluidvessel.FluidVesselBlockEntity" {
import {$BoilerData} from "com.simibubi.create.content.fluids.tank.BoilerData"
import {$LerpedFloat, $LerpedFloat$$Type} from "net.createmod.catnip.animation.LerpedFloat"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$List$$Type} from "java.util.List"
import {$IFluidTank} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$FluidVesselBlock$WindowType, $FluidVesselBlock$WindowType$$Type} from "com.hlysine.create_connected.content.fluidvessel.FluidVesselBlock$WindowType"
import {$FluidTankBlockEntity} from "com.simibubi.create.content.fluids.tank.FluidTankBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$IMultiBlockEntityContainer$Fluid$$Interface} from "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer$Fluid"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidVesselBlockEntity extends $FluidTankBlockEntity implements $IHaveGoggleInformation$$Interface, $IMultiBlockEntityContainer$Fluid$$Interface {
 "boiler": $BoilerData
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getMaxWidth"(): integer
public static "getMaxHeight"(): integer
public "hasWindow"(): boolean
public static "getCapacityMultiplier"(): integer
public "updateBoilerState"(): void
public "toggleWindows"(): void
public "getOtherFluidTankBlockEntity"(arg0: $Direction$$Type): $FluidTankBlockEntity
public "setWindowType"(arg0: $FluidVesselBlock$WindowType$$Type): void
public "setWindows"(arg0: boolean): void
public "isWindowTypeAllowed"(arg0: $FluidVesselBlock$WindowType$$Type): boolean
public "getWindowType"(): $FluidVesselBlock$WindowType
public "getTankSize"(arg0: integer): integer
public "setTankSize"(arg0: integer, arg1: integer): void
public "getController"(): $BlockPos
public "setController"(arg0: $BlockPos$$Type): void
public "getControllerBE"(): $FluidVesselBlockEntity
public "isController"(): boolean
public "getLuminosity"(): integer
public "removeController"(arg0: boolean): void
public "getFluidLevel"(): $LerpedFloat
public "setFluidLevel"(arg0: $LerpedFloat$$Type): void
public "notifyMultiUpdated"(): void
public "getMainConnectionAxis"(): $Direction$Axis
public "getLastKnownPos"(): $BlockPos
public "preventConnectivityUpdate"(): void
public "setExtraData"(arg0: any): void
public "modifyExtraData"(arg0: any): any
public static "getMaxSize"(): integer
public "tick"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public "getAxis"(): $Direction$Axis
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getExtraData"(): any
public "getFluid"(arg0: integer): $FluidStack
public "hasTank"(): boolean
public "getTank"(arg0: integer): $IFluidTank
get "maxWidth"(): integer
public static get "maxHeight"(): integer
public static get "capacityMultiplier"(): integer
set "windowType"(value: $FluidVesselBlock$WindowType$$Type)
set "windows"(value: boolean)
get "windowType"(): $FluidVesselBlock$WindowType
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "controllerBE"(): $FluidVesselBlockEntity
get "controller"(): boolean
get "luminosity"(): integer
get "fluidLevel"(): $LerpedFloat
set "fluidLevel"(value: $LerpedFloat$$Type)
get "mainConnectionAxis"(): $Direction$Axis
get "lastKnownPos"(): $BlockPos
set "extraData"(value: any)
public static get "maxSize"(): integer
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
get "axis"(): $Direction$Axis
get "extraData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVesselBlockEntity$$Type = ($FluidVesselBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVesselBlockEntity$$Original = $FluidVesselBlockEntity;}
declare module "com.hlysine.create_connected.content.fluidvessel.FluidVesselItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $FluidVesselItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
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
export type $FluidVesselItem$$Type = ($FluidVesselItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVesselItem$$Original = $FluidVesselItem;}
declare module "com.hlysine.create_connected.content.fluidvessel.FluidVesselMountedStorage$Handler" {
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $FluidVesselMountedStorage$Handler extends $FluidTank {
constructor(arg0: integer, arg1: $FluidStack$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVesselMountedStorage$Handler$$Type = ($FluidVesselMountedStorage$Handler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVesselMountedStorage$Handler$$Original = $FluidVesselMountedStorage$Handler;}
declare module "com.hlysine.create_connected.content.copycat.slab.CopycatSlabBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Comparable} from "java.lang.Comparable"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SlabType} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CopycatSlabBlock$FaceShape} from "com.hlysine.create_connected.content.copycat.slab.CopycatSlabBlock$FaceShape"
import {$MigratingWaterloggedCopycatBlock} from "com.hlysine.create_connected.content.copycat.MigratingWaterloggedCopycatBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ICopycatWithWrappedBlock$$Interface} from "com.hlysine.create_connected.content.copycat.ICopycatWithWrappedBlock"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $CopycatSlabBlock extends $MigratingWaterloggedCopycatBlock implements $ICopycatWithWrappedBlock$$Interface {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>
static readonly "SLAB_TYPE": $EnumProperty<($SlabType)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public static "getFaceShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $CopycatSlabBlock$FaceShape
public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isIgnoredConnectivitySide"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "shouldFaceAlwaysRender"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public static "getApparentDirection"(arg0: $BlockState$$Type): $Direction
public static "setApparentDirection"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "getWrappedBlock"(): $Block
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "getMaterial"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public static "wrappedState"(arg0: $Block$$Type, arg1: $BlockState$$Type): $BlockState
public static "tryCopyProperty"<T extends $Comparable<(object)>>(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Property$$Type<(T)>): $BlockState
public static "unwrapForOperation"(arg0: $Block$$Type, arg1: $BlockState$$Type, arg2: $Function$$Type<($BlockState), ($BlockState$$Type)>): $BlockState
public static "unwrap"(arg0: $Block$$Type): $Block
public static "copyState"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wrappedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlabBlock$$Type = ($CopycatSlabBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatSlabBlock$$Original = $CopycatSlabBlock;}
declare module "com.hlysine.create_connected.content.kineticbridge.KineticBridgeBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$KineticBridgeBlockEntity, $KineticBridgeBlockEntity$$Type} from "com.hlysine.create_connected.content.kineticbridge.KineticBridgeBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $KineticBridgeBlock extends $DirectionalKineticBlock implements $IBE$$Interface<($KineticBridgeBlockEntity)> {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($KineticBridgeBlockEntity)>
public "getDirectionForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getBlockEntityClass"(): $Class<($KineticBridgeBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($KineticBridgeBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($KineticBridgeBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($KineticBridgeBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($KineticBridgeBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $KineticBridgeBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBridgeBlockEntity)>
get "blockEntityClass"(): $Class<($KineticBridgeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBridgeBlock$$Type = ($KineticBridgeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBridgeBlock$$Original = $KineticBridgeBlock;}
declare module "com.hlysine.create_connected.content.fluidvessel.FluidVesselBlock$WindowType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $FluidVesselBlock$WindowType extends $Enum<($FluidVesselBlock$WindowType)> implements $StringRepresentable$$Interface {
static readonly "SIDE_HORIZONTAL": $FluidVesselBlock$WindowType
static readonly "SIDE_WIDE": $FluidVesselBlock$WindowType
static readonly "SIDE_NARROW_ENDS": $FluidVesselBlock$WindowType
static readonly "SIDE_NARROW_THIRDS": $FluidVesselBlock$WindowType

public static "values"(): ($FluidVesselBlock$WindowType)[]
public static "valueOf"(arg0: StringJS): $FluidVesselBlock$WindowType
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
export type $FluidVesselBlock$WindowType$$Type = (("side_wide") | ("side_narrow_ends") | ("side_narrow_thirds") | ("side_horizontal"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVesselBlock$WindowType$$Original = $FluidVesselBlock$WindowType;}
declare module "com.hlysine.create_connected.content.kineticbattery.KineticBatteryBlockEntity" {
import {$GeneratingKineticBlockEntity} from "com.simibubi.create.content.kinetics.base.GeneratingKineticBlockEntity"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ISplitShaftBlockEntity$$Interface} from "com.hlysine.create_connected.content.ISplitShaftBlockEntity"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$ThresholdSwitchObservable$$Interface} from "com.simibubi.create.content.redstone.thresholdSwitch.ThresholdSwitchObservable"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $KineticBatteryBlockEntity extends $GeneratingKineticBlockEntity implements $ISplitShaftBlockEntity$$Interface, $ThresholdSwitchObservable$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
 "reActivateSource": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
static readonly "CHARGE_THRESHOlD": double
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "calculateStressApplied"(): float
public "getGeneratedSpeed"(): float
public "calculateAddedStressCapacity"(): float
public "getBatteryStatusTextComponent"(): $MutableComponent
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "sendData"(): void
public "getBatteryLevel"(): double
public static "getMaxBatteryLevel"(): double
public "setBatteryLevel"(arg0: double): void
public "getCrudeBatteryLevel"(arg0: integer): integer
public "sendDataImmediately"(): void
public static "getDischargeRPM"(): integer
public "getCurrentValue"(): integer
public "getRotationSpeedModifier"(arg0: $Direction$$Type): float
public "getMinValue"(): integer
public "getMaxValue"(): integer
public "tick"(): void
public "format"(arg0: integer): $MutableComponent
public "initialize"(): void
get "generatedSpeed"(): float
get "batteryStatusTextComponent"(): $MutableComponent
get "batteryLevel"(): double
public static get "maxBatteryLevel"(): double
set "batteryLevel"(value: double)
public static get "dischargeRPM"(): integer
get "currentValue"(): integer
get "minValue"(): integer
get "maxValue"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBatteryBlockEntity$$Type = ($KineticBatteryBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBatteryBlockEntity$$Original = $KineticBatteryBlockEntity;}
declare module "com.hlysine.create_connected.content.brake.BrakeBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BrakeBlockEntity, $BrakeBlockEntity$$Type} from "com.hlysine.create_connected.content.brake.BrakeBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
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
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractEncasedShaftBlock} from "com.simibubi.create.content.kinetics.base.AbstractEncasedShaftBlock"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $BrakeBlock extends $AbstractEncasedShaftBlock implements $IBE$$Interface<($BrakeBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<($BrakeBlockEntity)>
public "getBlockEntityClass"(): $Class<($BrakeBlockEntity)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($BrakeBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($BrakeBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($BrakeBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($BrakeBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BrakeBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($BrakeBlockEntity)>
get "blockEntityClass"(): $Class<($BrakeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrakeBlock$$Type = ($BrakeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrakeBlock$$Original = $BrakeBlock;}
declare module "com.hlysine.create_connected.content.itemsilo.ItemSiloBlockEntity" {
import {$IMultiBlockEntityContainer$Inventory$$Interface} from "com.simibubi.create.foundation.blockEntity.IMultiBlockEntityContainer$Inventory"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$List$$Type} from "java.util.List"
import {$InventoryIdentifier} from "com.simibubi.create.api.packager.InventoryIdentifier"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $ItemSiloBlockEntity extends $SmartBlockEntity implements $IMultiBlockEntityContainer$Inventory$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getMaxWidth"(): integer
public "getController"(): $BlockPos
public "setController"(arg0: $BlockPos$$Type): void
public "getControllerBE"(): $ItemSiloBlockEntity
public "isController"(): boolean
public "removeController"(arg0: boolean): void
public "applyInventoryToBlock"(arg0: $ItemStackHandler$$Type): void
public "getInventoryOfBlock"(): $ItemStackHandler
public "notifyMultiUpdated"(): void
public "getInvId"(): $InventoryIdentifier
public "getMainConnectionAxis"(): $Direction$Axis
public "getLastKnownPos"(): $BlockPos
public "preventConnectivityUpdate"(): void
public "hasInventory"(): boolean
public "tick"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
public static "getMaxLength"(arg0: integer): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
public "setExtraData"(arg0: any): void
public "modifyExtraData"(arg0: any): any
public "getExtraData"(): any
get "maxWidth"(): integer
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "controllerBE"(): $ItemSiloBlockEntity
get "controller"(): boolean
get "inventoryOfBlock"(): $ItemStackHandler
get "invId"(): $InventoryIdentifier
get "mainConnectionAxis"(): $Direction$Axis
get "lastKnownPos"(): $BlockPos
get "width"(): integer
get "height"(): integer
set "width"(value: integer)
set "height"(value: integer)
set "extraData"(value: any)
get "extraData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSiloBlockEntity$$Type = ($ItemSiloBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemSiloBlockEntity$$Original = $ItemSiloBlockEntity;}
declare module "com.hlysine.create_connected.content.fluidvessel.FluidVesselBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FluidVesselBlock$Shape} from "com.hlysine.create_connected.content.fluidvessel.FluidVesselBlock$Shape"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$FluidVesselBlockEntity, $FluidVesselBlockEntity$$Type} from "com.hlysine.create_connected.content.fluidvessel.FluidVesselBlockEntity"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $FluidVesselBlock extends $Block implements $IWrenchable$$Interface, $IBE$$Interface<($FluidVesselBlockEntity)> {
static readonly "POSITIVE": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SILENCED_METAL": $SoundType
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($FluidVesselBlock$Shape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "NEGATIVE": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($FluidVesselBlockEntity)>
public static "updateBoilerState"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public static "isVessel"(arg0: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($FluidVesselBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "regular"(arg0: $BlockBehaviour$Properties$$Type): $FluidVesselBlock
public static "creative"(arg0: $BlockBehaviour$Properties$$Type): $FluidVesselBlock
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($FluidVesselBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($FluidVesselBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($FluidVesselBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($FluidVesselBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $FluidVesselBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($FluidVesselBlockEntity)>
get "blockEntityClass"(): $Class<($FluidVesselBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVesselBlock$$Type = ($FluidVesselBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVesselBlock$$Original = $FluidVesselBlock;}
declare module "com.hlysine.create_connected.content.sequencedpulsegenerator.instructions.InstructionResult" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $InstructionResult {
constructor(arg0: boolean)

public "getNextInstruction"(arg0: integer): integer
public "isImmediate"(): boolean
public static "incomplete"(): $InstructionResult
public static "backToTop"(arg0: boolean): $InstructionResult
public static "next"(arg0: boolean): $InstructionResult
public static "terminate"(): $InstructionResult
get "immediate"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstructionResult$$Type = ($InstructionResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstructionResult$$Original = $InstructionResult;}
declare module "com.hlysine.create_connected.content.copycat.fence.WrappedFenceBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map} from "java.util.Map"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FenceBlock} from "net.minecraft.world.level.block.FenceBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IWrappedBlock$$Interface} from "com.hlysine.create_connected.content.copycat.IWrappedBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $WrappedFenceBlock extends $FenceBlock implements $IWrappedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SOUTH": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "EAST": $BooleanProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedFenceBlock$$Type = ($WrappedFenceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedFenceBlock$$Original = $WrappedFenceBlock;}
declare module "com.hlysine.create_connected.content.ISplitShaftBlockEntity" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $ISplitShaftBlockEntity$$Interface {

(arg0: $Direction): float
}

export class $ISplitShaftBlockEntity implements $ISplitShaftBlockEntity$$Interface {
 "getRotationSpeedModifier"(arg0: $Direction$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISplitShaftBlockEntity$$Type = ((arg0: $Direction) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISplitShaftBlockEntity$$Original = $ISplitShaftBlockEntity;}
declare module "com.hlysine.create_connected.content.AbstractBEShaftBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
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
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RotatedPillarKineticBlock} from "com.simibubi.create.content.kinetics.base.RotatedPillarKineticBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractBEShaftBlock<T extends $KineticBlockEntity> extends $RotatedPillarKineticBlock implements $IBE$$Interface<(T)>, $ProperWaterloggedBlock$$Interface {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
public "getBlockEntityType"(): $BlockEntityType<(T)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<(T)>): void
public "getBlockEntityClass"(): $Class<(T)>
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(T), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<(T)>
get "blockEntityClass"(): $Class<(T)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBEShaftBlock$$Type<T> = ($AbstractBEShaftBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBEShaftBlock$$Original<T> = $AbstractBEShaftBlock<(T)>;}
declare module "com.hlysine.create_connected.content.copycat.fencegate.CopycatFenceGateBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Comparable} from "java.lang.Comparable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$WaterloggedCopycatWrappedBlock} from "com.hlysine.create_connected.content.copycat.WaterloggedCopycatWrappedBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$FenceGateBlock} from "net.minecraft.world.level.block.FenceGateBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $CopycatFenceGateBlock extends $WaterloggedCopycatWrappedBlock {
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
static "fenceGate": $FenceGateBlock
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isIgnoredConnectivitySide"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "shouldFaceAlwaysRender"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "getWrappedBlock"(): $Block
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "wrappedState"(arg0: $Block$$Type, arg1: $BlockState$$Type): $BlockState
public static "tryCopyProperty"<T extends $Comparable<(object)>>(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Property$$Type<(T)>): $BlockState
public static "unwrapForOperation"(arg0: $Block$$Type, arg1: $BlockState$$Type, arg2: $Function$$Type<($BlockState), ($BlockState$$Type)>): $BlockState
public static "unwrap"(arg0: $Block$$Type): $Block
public static "copyState"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wrappedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFenceGateBlock$$Type = ($CopycatFenceGateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatFenceGateBlock$$Original = $CopycatFenceGateBlock;}
declare module "com.hlysine.create_connected.content.kineticbattery.KineticBatteryInteractionPoint$Type" {
import {$ArmInteractionPointType} from "com.simibubi.create.content.kinetics.mechanicalArm.ArmInteractionPointType"
import {$ArmInteractionPoint} from "com.simibubi.create.content.kinetics.mechanicalArm.ArmInteractionPoint"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $KineticBatteryInteractionPoint$Type extends $ArmInteractionPointType {
static readonly "SORTED_TYPES_VIEW": $List<($ArmInteractionPointType)>

constructor()

public "canCreatePoint"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "createPoint"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ArmInteractionPoint
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBatteryInteractionPoint$Type$$Type = ($KineticBatteryInteractionPoint$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBatteryInteractionPoint$Type$$Original = $KineticBatteryInteractionPoint$Type;}
declare module "com.hlysine.create_connected.content.crossconnector.CrossConnectorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IRotate$SpeedLevel} from "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EncasableBlock$$Interface} from "com.simibubi.create.content.decoration.encasing.EncasableBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$IRotate$$Interface} from "com.simibubi.create.content.kinetics.base.IRotate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IConnectionForwardingBlock$$Interface} from "com.hlysine.create_connected.content.IConnectionForwardingBlock"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CrossConnectorBlock extends $Block implements $IWrenchable$$Interface, $IConnectionForwardingBlock$$Interface, $IRotate$$Interface, $EncasableBlock$$Interface {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public static "getPreferredAxis"(arg0: $BlockPlaceContext$$Type): $Direction$Axis
public "updateConnections"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "forwardConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type): $BlockPos
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "hideStressImpact"(): boolean
public "showCapacityWithAnnotation"(): boolean
public "playEncaseSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "tryEncase"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrossConnectorBlock$$Type = ($CrossConnectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrossConnectorBlock$$Original = $CrossConnectorBlock;}
declare module "com.hlysine.create_connected.content.itemsilo.ItemSiloItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ItemSiloItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
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
export type $ItemSiloItem$$Type = ($ItemSiloItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemSiloItem$$Original = $ItemSiloItem;}
declare module "com.hlysine.create_connected.content.crankwheel.CrankWheelBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ICogWheel$$Interface} from "com.simibubi.create.content.kinetics.simpleRelays.ICogWheel"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$CrankWheelBlockEntity} from "com.hlysine.create_connected.content.crankwheel.CrankWheelBlockEntity"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$HandCrankBlock} from "com.simibubi.create.content.kinetics.crank.HandCrankBlock"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CrankWheelBlock extends $HandCrankBlock implements $ICogWheel$$Interface {
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
readonly "largeCog": boolean
static "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: boolean)

public "getPreferredFacing"(arg0: $BlockPlaceContext$$Type): $Direction
public "isSmallCog"(): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<($CrankWheelBlockEntity)>
public "isLargeCog"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public "isDedicatedCogWheel"(): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "smallCog"(): boolean
get "blockEntityType"(): $BlockEntityType<($CrankWheelBlockEntity)>
get "dedicatedCogWheel"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankWheelBlock$$Type = ($CrankWheelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrankWheelBlock$$Original = $CrankWheelBlock;}
declare module "com.hlysine.create_connected.content.fancatalyst.FanEndingCatalystDragonHeadBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FanEndingCatalystDragonHeadBlockEntity, $FanEndingCatalystDragonHeadBlockEntity$$Type} from "com.hlysine.create_connected.content.fancatalyst.FanEndingCatalystDragonHeadBlockEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $FanEndingCatalystDragonHeadBlock extends $Block implements $IBE$$Interface<($FanEndingCatalystDragonHeadBlockEntity)>, $IWrenchable$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($FanEndingCatalystDragonHeadBlockEntity)>
public "getBlockEntityClass"(): $Class<($FanEndingCatalystDragonHeadBlockEntity)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($FanEndingCatalystDragonHeadBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($FanEndingCatalystDragonHeadBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($FanEndingCatalystDragonHeadBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($FanEndingCatalystDragonHeadBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $FanEndingCatalystDragonHeadBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($FanEndingCatalystDragonHeadBlockEntity)>
get "blockEntityClass"(): $Class<($FanEndingCatalystDragonHeadBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FanEndingCatalystDragonHeadBlock$$Type = ($FanEndingCatalystDragonHeadBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FanEndingCatalystDragonHeadBlock$$Original = $FanEndingCatalystDragonHeadBlock;}
declare module "com.hlysine.create_connected.content.crossconnector.EncasedCrossConnectorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$EncasedBlock$$Interface} from "com.simibubi.create.content.decoration.encasing.EncasedBlock"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$CrossConnectorBlock} from "com.hlysine.create_connected.content.crossconnector.CrossConnectorBlock"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $EncasedCrossConnectorBlock extends $CrossConnectorBlock implements $SpecialBlockItemRequirement$$Interface, $EncasedBlock$$Interface {
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
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>)

public "getRequiredItems"(arg0: $BlockState$$Type, arg1: $BlockEntity$$Type): $ItemRequirement
public "getCasing"(): $Block
public "handleEncasing"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "casing"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncasedCrossConnectorBlock$$Type = ($EncasedCrossConnectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EncasedCrossConnectorBlock$$Original = $EncasedCrossConnectorBlock;}
declare module "com.hlysine.create_connected.content.inventorybridge.InventoryBridgeBlockEntity" {
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$FilteringBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.filtering.FilteringBehaviour"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InventoryBridgeBlockEntity extends $SmartBlockEntity {
 "positiveFilter": $FilteringBehaviour
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "negativeFilter": $FilteringBehaviour

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "updateConnectedInventory"(): void
public "isAttachedNegative"(): boolean
public "isAttachedPositive"(): boolean
public "initialize"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
get "attachedNegative"(): boolean
get "attachedPositive"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryBridgeBlockEntity$$Type = ($InventoryBridgeBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryBridgeBlockEntity$$Original = $InventoryBridgeBlockEntity;}
declare module "com.hlysine.create_connected.content.copycat.stairs.CopycatStairsBlock$FaceShape" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CopycatStairsBlock$FaceShape {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStairsBlock$FaceShape$$Type = ($CopycatStairsBlock$FaceShape);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatStairsBlock$FaceShape$$Original = $CopycatStairsBlock$FaceShape;}
declare module "com.hlysine.create_connected.content.itemsilo.ItemSiloMountedStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$WrapperMountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.WrapperMountedItemStorage"
import {$MountedItemStorage} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorage"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$StructureTemplate$StructureBlockInfo$$Type} from "net.minecraft.world.level.levelgen.structure.templatesystem.StructureTemplate$StructureBlockInfo"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ItemSiloBlockEntity$$Type} from "com.hlysine.create_connected.content.itemsilo.ItemSiloBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$MountedItemStorageType} from "com.simibubi.create.api.contraption.storage.item.MountedItemStorageType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $ItemSiloMountedStorage extends $WrapperMountedItemStorage<($ItemStackHandler)> {
static readonly "CODEC": $MapCodec<($ItemSiloMountedStorage)>
readonly "type": $MountedItemStorageType<($MountedItemStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedItemStorage)>

public "handleInteraction"(arg0: $ServerPlayer$$Type, arg1: $Contraption$$Type, arg2: $StructureTemplate$StructureBlockInfo$$Type): boolean
public static "fromLegacy"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $ItemSiloMountedStorage
public static "fromVault"(arg0: $ItemSiloBlockEntity$$Type): $ItemSiloMountedStorage
public "unmount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSiloMountedStorage$$Type = ($ItemSiloMountedStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemSiloMountedStorage$$Original = $ItemSiloMountedStorage;}
declare module "com.hlysine.create_connected.content.crankwheel.CrankWheelBlock$Small" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CrankWheelBlock} from "com.hlysine.create_connected.content.crankwheel.CrankWheelBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrankWheelBlock$Small extends $CrankWheelBlock {
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
readonly "largeCog": boolean
static "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankWheelBlock$Small$$Type = ($CrankWheelBlock$Small);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrankWheelBlock$Small$$Original = $CrankWheelBlock$Small;}
declare module "com.hlysine.create_connected.content.sequencedpulsegenerator.SequencedPulseGeneratorBlockEntity" {
import {$Instruction} from "com.hlysine.create_connected.content.sequencedpulsegenerator.instructions.Instruction"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SequencedPulseGeneratorBlockEntity extends $SmartBlockEntity {
static readonly "INSTRUCTION_CAPACITY": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "isPowered"(): boolean
public "isIdle"(): boolean
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getCurrentSignal"(): integer
public "onRedstoneUpdate"(arg0: boolean): void
public "getCurrentInstruction"(): $Instruction
public "isPoweredPreviously"(): boolean
public "tick"(): void
public "reset"(): void
get "powered"(): boolean
get "idle"(): boolean
get "currentSignal"(): integer
get "currentInstruction"(): $Instruction
get "poweredPreviously"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SequencedPulseGeneratorBlockEntity$$Type = ($SequencedPulseGeneratorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SequencedPulseGeneratorBlockEntity$$Original = $SequencedPulseGeneratorBlockEntity;}
declare module "com.hlysine.create_connected.content.copycat.stairs.WrappedStairsBlock" {
import {$StairsShape} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$StairBlock} from "net.minecraft.world.level.block.StairBlock"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$IWrappedBlock$$Interface} from "com.hlysine.create_connected.content.copycat.IWrappedBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WrappedStairsBlock extends $StairBlock implements $IWrappedBlock$$Interface {
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

constructor(arg0: $BlockState$$Type, arg1: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedStairsBlock$$Type = ($WrappedStairsBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedStairsBlock$$Original = $WrappedStairsBlock;}
declare module "com.hlysine.create_connected.content.linkedtransmitter.LinkedTransmitterBlock" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $LinkedTransmitterBlock$$Interface {
get "block"(): $Block
get "base"(): $Block
}

export class $LinkedTransmitterBlock implements $LinkedTransmitterBlock$$Interface {
 "getTransmitterShape"(arg0: $BlockState$$Type): $VoxelShape
 "isHittingBase"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $HitResult$$Type): boolean
 "replaceBase"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
 "getBlock"(): $Block
 "getBase"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedTransmitterBlock$$Type = ($LinkedTransmitterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedTransmitterBlock$$Original = $LinkedTransmitterBlock;}
declare module "com.hlysine.create_connected.content.sixwaygearbox.VerticalSixWayGearboxItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $VerticalSixWayGearboxItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "registerBlocks"(arg0: $Map$$Type<($Block$$Type), ($Item$$Type)>, arg1: $Item$$Type): void
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalSixWayGearboxItem$$Type = ($VerticalSixWayGearboxItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VerticalSixWayGearboxItem$$Original = $VerticalSixWayGearboxItem;}
declare module "com.hlysine.create_connected.content.invertedclutch.InvertedClutchBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SplitShaftBlockEntity} from "com.simibubi.create.content.kinetics.transmission.SplitShaftBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ClutchBlock} from "com.simibubi.create.content.kinetics.transmission.ClutchBlock"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InvertedClutchBlock extends $ClutchBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($SplitShaftBlockEntity)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SplitShaftBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InvertedClutchBlock$$Type = ($InvertedClutchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InvertedClutchBlock$$Original = $InvertedClutchBlock;}
declare module "com.hlysine.create_connected.content.attributefilter.ItemIdAttribute$Type" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemAttribute} from "com.simibubi.create.content.logistics.item.filter.attribute.ItemAttribute"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ItemAttributeType$$Interface} from "com.simibubi.create.content.logistics.item.filter.attribute.ItemAttributeType"

export class $ItemIdAttribute$Type implements $ItemAttributeType$$Interface {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($ItemAttribute)>
public "getAllAttributes"(arg0: $ItemStack$$Type, arg1: $Level$$Type): $List<($ItemAttribute)>
public "createAttribute"(): $ItemAttribute
public "codec"(): $MapCodec<($ItemAttribute)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemIdAttribute$Type$$Type = ($ItemIdAttribute$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemIdAttribute$Type$$Original = $ItemIdAttribute$Type;}
declare module "com.hlysine.create_connected.content.copycat.verticalstep.CopycatVerticalStepBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MigratingWaterloggedCopycatBlock} from "com.hlysine.create_connected.content.copycat.MigratingWaterloggedCopycatBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatVerticalStepBlock extends $MigratingWaterloggedCopycatBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isIgnoredConnectivitySide"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "shouldFaceAlwaysRender"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalStepBlock$$Type = ($CopycatVerticalStepBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatVerticalStepBlock$$Original = $CopycatVerticalStepBlock;}
declare module "com.hlysine.create_connected.content.copycat.stairs.CopycatStairsBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$StairBlock} from "net.minecraft.world.level.block.StairBlock"
import {$Comparable} from "java.lang.Comparable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$WaterloggedCopycatWrappedBlock} from "com.hlysine.create_connected.content.copycat.WaterloggedCopycatWrappedBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CopycatStairsBlock$FaceShape} from "com.hlysine.create_connected.content.copycat.stairs.CopycatStairsBlock$FaceShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $CopycatStairsBlock extends $WaterloggedCopycatWrappedBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "stairs": $StairBlock
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public static "getFaceShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $CopycatStairsBlock$FaceShape
public "getExplosionResistance"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): float
public "isRandomlyTicking"(arg0: $BlockState$$Type): boolean
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isIgnoredConnectivitySide"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "shouldFaceAlwaysRender"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "getWrappedBlock"(): $Block
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "getMaterial"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public static "wrappedState"(arg0: $Block$$Type, arg1: $BlockState$$Type): $BlockState
public static "tryCopyProperty"<T extends $Comparable<(object)>>(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Property$$Type<(T)>): $BlockState
public static "unwrapForOperation"(arg0: $Block$$Type, arg1: $BlockState$$Type, arg2: $Function$$Type<($BlockState), ($BlockState$$Type)>): $BlockState
public static "unwrap"(arg0: $Block$$Type): $Block
public static "copyState"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wrappedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStairsBlock$$Type = ($CopycatStairsBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatStairsBlock$$Original = $CopycatStairsBlock;}
declare module "com.hlysine.create_connected.content.inventoryaccessport.InventoryAccessPortBlockEntity" {
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InventoryAccessPortBlockEntity extends $SmartBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "updateConnectedInventory"(): void
public "isAttached"(): boolean
public "initialize"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
get "attached"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryAccessPortBlockEntity$$Type = ($InventoryAccessPortBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryAccessPortBlockEntity$$Original = $InventoryAccessPortBlockEntity;}
declare module "com.hlysine.create_connected.content.brassgearbox.BrassGearboxBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SplitShaftBlockEntity} from "com.simibubi.create.content.kinetics.transmission.SplitShaftBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $BrassGearboxBlockEntity extends $SplitShaftBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getRotationSpeedModifier"(arg0: $Direction$$Type): float
public static "getRotationSpeedModifier"(arg0: $Direction$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrassGearboxBlockEntity$$Type = ($BrassGearboxBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrassGearboxBlockEntity$$Original = $BrassGearboxBlockEntity;}
declare module "com.hlysine.create_connected.content.copycat.block.CopycatBlockBlock" {
import {$MigratingCopycatBlock} from "com.hlysine.create_connected.content.copycat.MigratingCopycatBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Comparable} from "java.lang.Comparable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ICopycatWithWrappedBlock$$Interface} from "com.hlysine.create_connected.content.copycat.ICopycatWithWrappedBlock"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $CopycatBlockBlock extends $MigratingCopycatBlock implements $ICopycatWithWrappedBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "getWrappedBlock"(): $Block
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "wrappedState"(arg0: $Block$$Type, arg1: $BlockState$$Type): $BlockState
public static "tryCopyProperty"<T extends $Comparable<(object)>>(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Property$$Type<(T)>): $BlockState
public static "unwrapForOperation"(arg0: $Block$$Type, arg1: $BlockState$$Type, arg2: $Function$$Type<($BlockState), ($BlockState$$Type)>): $BlockState
public static "unwrap"(arg0: $Block$$Type): $Block
public static "copyState"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wrappedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBlockBlock$$Type = ($CopycatBlockBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatBlockBlock$$Original = $CopycatBlockBlock;}
declare module "com.hlysine.create_connected.content.fluidvessel.FluidVesselMountedStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$MountedFluidStorageType} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorageType"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MountedFluidStorage} from "com.simibubi.create.api.contraption.storage.fluid.MountedFluidStorage"
import {$FluidTankBlockEntity$$Type} from "com.simibubi.create.content.fluids.tank.FluidTankBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$WrapperMountedFluidStorage} from "com.simibubi.create.api.contraption.storage.fluid.WrapperMountedFluidStorage"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidVesselMountedStorage$Handler} from "com.hlysine.create_connected.content.fluidvessel.FluidVesselMountedStorage$Handler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SyncedMountedStorage$$Interface} from "com.simibubi.create.api.contraption.storage.SyncedMountedStorage"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidVesselMountedStorage extends $WrapperMountedFluidStorage<($FluidVesselMountedStorage$Handler)> implements $SyncedMountedStorage$$Interface {
static readonly "CODEC": $MapCodec<($FluidVesselMountedStorage)>
readonly "type": $MountedFluidStorageType<($MountedFluidStorage)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($MountedFluidStorage)>

public "getFluid"(): $FluidStack
public static "fromLegacy"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $FluidVesselMountedStorage
public "markClean"(): void
public "afterSync"(arg0: $Contraption$$Type, arg1: $BlockPos$$Type): void
public static "fromTank"(arg0: $FluidTankBlockEntity$$Type): $FluidVesselMountedStorage
public "isDirty"(): boolean
public "unmount"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $BlockEntity$$Type): void
public "getCapacity"(): integer
get "fluid"(): $FluidStack
get "dirty"(): boolean
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidVesselMountedStorage$$Type = ($FluidVesselMountedStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidVesselMountedStorage$$Original = $FluidVesselMountedStorage;}
declare module "com.hlysine.create_connected.content.crankwheel.CrankWheelBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List, $List$$Type} from "java.util.List"
import {$HandCrankBlockEntity} from "com.simibubi.create.content.kinetics.crank.HandCrankBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SuperByteBuffer} from "net.createmod.catnip.render.SuperByteBuffer"
import {$IRotate$$Type} from "com.simibubi.create.content.kinetics.base.IRotate"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $CrankWheelBlockEntity extends $HandCrankBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "independentAngle": float
 "chasingVelocity": float
 "inUse": integer
 "updateSpeed": boolean
 "reActivateSource": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "backwards": boolean
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addPropagationLocations"(arg0: $IRotate$$Type, arg1: $BlockState$$Type, arg2: $List$$Type<($BlockPos$$Type)>): $List<($BlockPos)>
public "getRenderedHandle"(): $SuperByteBuffer
get "renderedHandle"(): $SuperByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrankWheelBlockEntity$$Type = ($CrankWheelBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrankWheelBlockEntity$$Original = $CrankWheelBlockEntity;}
declare module "com.hlysine.create_connected.content.copycat.fencegate.WrappedFenceGateBlock" {
import {$WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$FenceGateBlock} from "net.minecraft.world.level.block.FenceGateBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$IWrappedBlock$$Interface} from "com.hlysine.create_connected.content.copycat.IWrappedBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $WrappedFenceGateBlock extends $FenceGateBlock implements $IWrappedBlock$$Interface {
static readonly "IN_WALL": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FenceGateBlock)>
readonly "closeSound": $SoundEvent
readonly "openSound": $SoundEvent
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedFenceGateBlock$$Type = ($WrappedFenceGateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedFenceGateBlock$$Original = $WrappedFenceGateBlock;}
declare module "com.hlysine.create_connected.content.fancatalyst.FanEndingCatalystDragonHeadBlockEntity" {
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FanEndingCatalystDragonHeadBlockEntity extends $SmartBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FanEndingCatalystDragonHeadBlockEntity$$Type = ($FanEndingCatalystDragonHeadBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FanEndingCatalystDragonHeadBlockEntity$$Original = $FanEndingCatalystDragonHeadBlockEntity;}
declare module "com.hlysine.create_connected.content.shearpin.ShearPinBlockEntity" {
import {$BracketedKineticBlockEntity} from "com.simibubi.create.content.kinetics.simpleRelays.BracketedKineticBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $ShearPinBlockEntity extends $BracketedKineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "updateFromNetwork"(arg0: float, arg1: float, arg2: integer): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "initialize"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShearPinBlockEntity$$Type = ($ShearPinBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShearPinBlockEntity$$Original = $ShearPinBlockEntity;}
declare module "com.hlysine.create_connected.content.copycat.fence.CopycatFenceBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Comparable} from "java.lang.Comparable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FenceBlock} from "net.minecraft.world.level.block.FenceBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$WaterloggedCopycatWrappedBlock} from "com.hlysine.create_connected.content.copycat.WaterloggedCopycatWrappedBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $CopycatFenceBlock extends $WaterloggedCopycatWrappedBlock {
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
static "fence": $FenceBlock

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getOcclusionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public "getVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "byDirection"(arg0: $Direction$$Type): $BooleanProperty
public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isIgnoredConnectivitySide"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "shouldFaceAlwaysRender"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "getWrappedBlock"(): $Block
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public static "getMaterial"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public static "wrappedState"(arg0: $Block$$Type, arg1: $BlockState$$Type): $BlockState
public static "tryCopyProperty"<T extends $Comparable<(object)>>(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Property$$Type<(T)>): $BlockState
public static "unwrapForOperation"(arg0: $Block$$Type, arg1: $BlockState$$Type, arg2: $Function$$Type<($BlockState), ($BlockState$$Type)>): $BlockState
public static "unwrap"(arg0: $Block$$Type): $Block
public static "copyState"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wrappedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFenceBlock$$Type = ($CopycatFenceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatFenceBlock$$Original = $CopycatFenceBlock;}
declare module "com.hlysine.create_connected.content.parallelgearbox.ParallelGearboxBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SplitShaftBlockEntity} from "com.simibubi.create.content.kinetics.transmission.SplitShaftBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $ParallelGearboxBlockEntity extends $SplitShaftBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getRotationSpeedModifier"(arg0: $Direction$$Type): float
public static "getRotationSpeedModifier"(arg0: $Direction$$Type, arg1: $Direction$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParallelGearboxBlockEntity$$Type = ($ParallelGearboxBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParallelGearboxBlockEntity$$Original = $ParallelGearboxBlockEntity;}
declare module "com.hlysine.create_connected.content.linkedtransmitter.LinkedTransmitterBlockEntity" {
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LinkedTransmitterBlockEntity extends $SmartBlockEntity {
 "containsBase": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "transmit"(arg0: integer): void
public "initialize"(): void
public "getSignal"(): integer
get "signal"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkedTransmitterBlockEntity$$Type = ($LinkedTransmitterBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkedTransmitterBlockEntity$$Original = $LinkedTransmitterBlockEntity;}
declare module "com.hlysine.create_connected.content.IConnectionForwardingBlock" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IConnectionForwardingBlock$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockPos): $BlockPos$$Type
}

export class $IConnectionForwardingBlock implements $IConnectionForwardingBlock$$Interface {
 "forwardConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConnectionForwardingBlock$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState, arg3: $BlockPos) => $BlockPos$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConnectionForwardingBlock$$Original = $IConnectionForwardingBlock;}
declare module "com.hlysine.create_connected.content.kineticbridge.KineticBridgeDestinationBlockEntity" {
import {$GeneratingKineticBlockEntity} from "com.simibubi.create.content.kinetics.base.GeneratingKineticBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $KineticBridgeDestinationBlockEntity extends $GeneratingKineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
 "reActivateSource": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getGeneratedSpeed"(): float
public "calculateAddedStressCapacity"(): float
public "tick"(): void
get "generatedSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBridgeDestinationBlockEntity$$Type = ($KineticBridgeDestinationBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBridgeDestinationBlockEntity$$Original = $KineticBridgeDestinationBlockEntity;}
declare module "com.hlysine.create_connected.content.kineticbattery.KineticBatteryBlock" {
import {$KineticBatteryBlockEntity, $KineticBatteryBlockEntity$$Type} from "com.hlysine.create_connected.content.kineticbattery.KineticBatteryBlockEntity"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $KineticBatteryBlock extends $DirectionalKineticBlock implements $IBE$$Interface<($KineticBatteryBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "LEVEL": $IntegerProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
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

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public static "tryInsert"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: boolean, arg5: boolean, arg6: boolean): $InteractionResultHolder<($ItemStack)>
public "getBlockEntityType"(): $BlockEntityType<($KineticBatteryBlockEntity)>
public static "isDischarging"(arg0: $BlockState$$Type): boolean
public static "isCurrentStageComplete"(arg0: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($KineticBatteryBlockEntity)>
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($KineticBatteryBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($KineticBatteryBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($KineticBatteryBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($KineticBatteryBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $KineticBatteryBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBatteryBlockEntity)>
get "blockEntityClass"(): $Class<($KineticBatteryBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticBatteryBlock$$Type = ($KineticBatteryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticBatteryBlock$$Original = $KineticBatteryBlock;}
declare module "com.hlysine.create_connected.content.copycat.wall.CopycatWallBlock" {
import {$WallSide} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Comparable} from "java.lang.Comparable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$WaterloggedCopycatWrappedBlock} from "com.hlysine.create_connected.content.copycat.WaterloggedCopycatWrappedBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$WallBlock} from "net.minecraft.world.level.block.WallBlock"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $CopycatWallBlock extends $WaterloggedCopycatWrappedBlock {
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
static "wall": $WallBlock

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "hidesNeighborFace"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockState$$Type, arg4: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(arg0: $BlockState$$Type): boolean
public static "byDirection"(arg0: $Direction$$Type): $EnumProperty<($WallSide)>
public "canFaceBeOccluded"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "isIgnoredConnectivitySide"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(arg0: $BlockAndTintGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "shouldFaceAlwaysRender"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "getWrappedBlock"(): $Block
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "collisionExtendsVertically"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public static "getMaterial"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $BlockState
public static "wrappedState"(arg0: $Block$$Type, arg1: $BlockState$$Type): $BlockState
public static "tryCopyProperty"<T extends $Comparable<(object)>>(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Property$$Type<(T)>): $BlockState
public static "unwrapForOperation"(arg0: $Block$$Type, arg1: $BlockState$$Type, arg2: $Function$$Type<($BlockState), ($BlockState$$Type)>): $BlockState
public static "unwrap"(arg0: $Block$$Type): $Block
public static "copyState"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: boolean): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wrappedBlock"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatWallBlock$$Type = ($CopycatWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatWallBlock$$Original = $CopycatWallBlock;}
declare module "com.hlysine.create_connected.content.itemsilo.ItemSiloBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ItemSiloBlockEntity, $ItemSiloBlockEntity$$Type} from "com.hlysine.create_connected.content.itemsilo.ItemSiloBlockEntity"

export class $ItemSiloBlock extends $Block implements $IWrenchable$$Interface, $IBE$$Interface<($ItemSiloBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SILENCED_METAL": $SoundType
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "LARGE": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($ItemSiloBlockEntity)>
public static "isLarge"(arg0: $BlockState$$Type): boolean
public "getBlockEntityClass"(): $Class<($ItemSiloBlockEntity)>
public static "isVault"(arg0: $BlockState$$Type): boolean
public static "getVaultBlockAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($ItemSiloBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($ItemSiloBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ItemSiloBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ItemSiloBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ItemSiloBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($ItemSiloBlockEntity)>
get "blockEntityClass"(): $Class<($ItemSiloBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemSiloBlock$$Type = ($ItemSiloBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemSiloBlock$$Original = $ItemSiloBlock;}
