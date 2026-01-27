declare module "com.mrh0.createaddition.blocks.rolling_mill.RollingMillBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$RollingRecipe} from "com.mrh0.createaddition.recipe.rolling.RollingRecipe"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $RollingMillBlockEntity extends $KineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "timer": integer
 "networkDirty": boolean
 "capability": $IItemHandler
 "updateSpeed": boolean
 "inputInv": $ItemStackHandler
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "outputInv": $ItemStackHandler
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "spawnParticles"(): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getProcessingSpeed"(): integer
public "tickAudio"(): void
public "invalidate"(): void
public "tick"(): void
public "find"(arg0: $RecipeWrapper$$Type, arg1: $Level$$Type): $Optional<($RecipeHolder<($RollingRecipe)>)>
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "destroy"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
get "processingSpeed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingMillBlockEntity$$Type = ($RollingMillBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RollingMillBlockEntity$$Original = $RollingMillBlockEntity;}
declare module "com.mrh0.createaddition.blocks.connector.LargeConnectorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$WireConnectResult} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IWireNode, $IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"
import {$ConnectorType} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$AbstractConnectorBlockEntity$InterfaceEnergyHandler} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractConnectorBlockEntity} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity"
import {$LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeConnectorBlockEntity extends $AbstractConnectorBlockEntity {
static readonly "OFFSET_NORTH": $Vec3
static readonly "OFFSET_DOWN": $Vec3
 "internal": $AbstractConnectorBlockEntity$InterfaceEnergyHandler
static readonly "OFFSET_WEST": $Vec3
static readonly "OFFSET_EAST": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "OFFSET_UP": $Vec3
static readonly "OFFSET_SOUTH": $Vec3

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getNodeCount"(): integer
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "getNodeOffset"(arg0: integer): $Vec3
public "getConnectorType"(): $ConnectorType
public "getMaxWireLength"(): integer
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
get "nodeCount"(): integer
get "maxIn"(): integer
get "maxOut"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeConnectorBlockEntity$$Type = ($LargeConnectorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeConnectorBlockEntity$$Original = $LargeConnectorBlockEntity;}
declare module "com.mrh0.createaddition.blocks.redstone_relay.RedstoneRelayBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper} from "net.createmod.catnip.math.VoxelShaper"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$RedstoneRelayBlockEntity, $RedstoneRelayBlockEntity$$Type} from "com.mrh0.createaddition.blocks.redstone_relay.RedstoneRelayBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$TransformableBlock$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlock"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RedstoneRelayBlock extends $Block implements $IBE$$Interface<($RedstoneRelayBlockEntity)>, $IWrenchable$$Interface, $TransformableBlock$$Interface {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VERTICAL_SHAPE": $VoxelShaper
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "HORIZONTAL_SHAPE_Z": $VoxelShape
static readonly "VERTICAL": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "HORIZONTAL_SHAPE_MAIN": $VoxelShape
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "HORIZONTAL_FACING": $DirectionProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "HORIZONTAL_SHAPE_X": $VoxelShape
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityType"(): $BlockEntityType<($RedstoneRelayBlockEntity)>
public "getBlockEntityClass"(): $Class<($RedstoneRelayBlockEntity)>
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($RedstoneRelayBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "transform"(arg0: $BlockState$$Type, arg1: $StructureTransform$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($RedstoneRelayBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($RedstoneRelayBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($RedstoneRelayBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($RedstoneRelayBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $RedstoneRelayBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($RedstoneRelayBlockEntity)>
get "blockEntityClass"(): $Class<($RedstoneRelayBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneRelayBlock$$Type = ($RedstoneRelayBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneRelayBlock$$Original = $RedstoneRelayBlock;}
declare module "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorBlockEntity" {
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IObserveBlockEntity$$Interface} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$IDebugDrawer$$Interface} from "com.mrh0.createaddition.debug.IDebugDrawer"
import {$ThresholdSwitchObservable$$Interface} from "com.simibubi.create.content.redstone.thresholdSwitch.ThresholdSwitchObservable"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InternalEnergyStorage} from "com.mrh0.createaddition.energy.InternalEnergyStorage"
import {$LerpedFloat} from "net.createmod.catnip.animation.LerpedFloat"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$IMultiTileEnergyContainer$$Interface} from "com.mrh0.createaddition.energy.IMultiTileEnergyContainer"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Direction$Axis, $Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ModularAccumulatorBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation$$Interface, $IMultiTileEnergyContainer$$Interface, $IObserveBlockEntity$$Interface, $IDebugDrawer$$Interface, $ThresholdSwitchObservable$$Interface {
 "gauge": $LerpedFloat
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getEnergy"(): $InternalEnergyStorage
public static "getCapacityMultiplier"(): integer
public "sendDataImmediately"(): void
public "getFillState"(): float
public "getCurrentValue"(): integer
public "onChunkUnloaded"(): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "sendData"(): void
public "getMaxWidth"(): integer
public static "getMaxHeight"(): integer
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "getControllerBE"(): $ModularAccumulatorBlockEntity
public "isController"(): boolean
public "getController"(): $BlockPos
public "setController"(arg0: $BlockPos$$Type): void
public "updateCache"(): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "tickAudio"(): void
public "observe"(): void
public "tickOutput"(): void
public "tickOutputSide"(arg0: $Direction$$Type): void
public "getTotalAccumulatorSize"(): integer
public "applySize"(arg0: integer): void
public "hasAccumulator"(): boolean
public "drawDebug"(): void
public "removeController"(arg0: boolean): void
public "notifyMultiUpdated"(): void
public "getMainConnectionAxis"(): $Direction$Axis
public "getLastKnownPos"(): $BlockPos
public "preventConnectivityUpdate"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "setSize"(arg0: integer, arg1: integer): void
public "tick"(): void
public "getMinValue"(): integer
public "getMaxValue"(): integer
public "format"(arg0: integer): $MutableComponent
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getSize"(arg0: integer): integer
public "getMaxLength"(arg0: $Direction$Axis$$Type, arg1: integer): integer
public "setWidth"(arg0: integer): void
public "setHeight"(arg0: integer): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
public "getMainAxisOf"(arg0: $BlockEntity$$Type): $Direction$Axis
public "setExtraData"(arg0: any): void
public "modifyExtraData"(arg0: any): any
public "getExtraData"(): any
get "energy"(): $InternalEnergyStorage
public static get "capacityMultiplier"(): integer
get "fillState"(): float
get "currentValue"(): integer
get "maxWidth"(): integer
public static get "maxHeight"(): integer
get "controllerBE"(): $ModularAccumulatorBlockEntity
get "controller"(): boolean
get "controller"(): $BlockPos
set "controller"(value: $BlockPos$$Type)
get "totalAccumulatorSize"(): integer
get "mainConnectionAxis"(): $Direction$Axis
get "lastKnownPos"(): $BlockPos
get "width"(): integer
get "height"(): integer
get "minValue"(): integer
get "maxValue"(): integer
set "width"(value: integer)
set "height"(value: integer)
set "extraData"(value: any)
get "extraData"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAccumulatorBlockEntity$$Type = ($ModularAccumulatorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModularAccumulatorBlockEntity$$Original = $ModularAccumulatorBlockEntity;}
declare module "com.mrh0.createaddition.blocks.electric_motor.ElectricMotorBlockEntity" {
import {$GeneratingKineticBlockEntity} from "com.simibubi.create.content.kinetics.base.GeneratingKineticBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ScrollValueBehaviour$StepContext$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour$StepContext"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ElectricMotorBlockEntity extends $GeneratingKineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
 "reActivateSource": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<($ElectricMotorBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "lazyTick"(): void
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateGeneratedRotation"(arg0: integer): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getGeneratedSpeed"(): float
public "tickAudio"(): void
public "calculateAddedStressCapacity"(): float
public static "getEnergyConsumptionRate"(arg0: float): integer
public static "getDurationAngle"(arg0: float, arg1: float, arg2: float): float
public "setRPM"(arg0: float): boolean
public static "getDurationDistance"(arg0: float, arg1: float, arg2: float): float
public "getRPM"(): float
public "getGeneratedStress"(): integer
public "getEnergyConsumption"(): integer
public "isPoweredState"(): boolean
public "tick"(): void
public "initialize"(): void
public static "step"(arg0: $ScrollValueBehaviour$StepContext$$Type): integer
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
get "generatedSpeed"(): float
set "RPM"(value: float)
get "RPM"(): float
get "generatedStress"(): integer
get "energyConsumption"(): integer
get "poweredState"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricMotorBlockEntity$$Type = ($ElectricMotorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricMotorBlockEntity$$Original = $ElectricMotorBlockEntity;}
declare module "com.mrh0.createaddition.blocks.alternator.AlternatorBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper} from "net.createmod.catnip.math.VoxelShaper"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$AlternatorBlockEntity, $AlternatorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.alternator.AlternatorBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$IRotate$$Interface} from "com.simibubi.create.content.kinetics.base.IRotate"
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
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AlternatorBlock extends $DirectionalKineticBlock implements $IBE$$Interface<($AlternatorBlockEntity)>, $IRotate$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "ALTERNATOR_SHAPE": $VoxelShaper
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
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($AlternatorBlockEntity)>
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getBlockEntityClass"(): $Class<($AlternatorBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($AlternatorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($AlternatorBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($AlternatorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($AlternatorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $AlternatorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($AlternatorBlockEntity)>
get "blockEntityClass"(): $Class<($AlternatorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlternatorBlock$$Type = ($AlternatorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlternatorBlock$$Original = $AlternatorBlock;}
declare module "com.mrh0.createaddition.blocks.connector.SmallLightConnectorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AbstractConnectorBlock} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper} from "net.createmod.catnip.math.VoxelShaper"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ConnectorMode} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ConnectorVariant} from "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$SmallLightConnectorBlockEntity} from "com.mrh0.createaddition.blocks.connector.SmallLightConnectorBlockEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SmallLightConnectorBlock extends $AbstractConnectorBlock<($SmallLightConnectorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "CONNECTOR_SHAPE": $VoxelShaper
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityType"(): $BlockEntityType<($SmallLightConnectorBlockEntity)>
public "getBlockEntityClass"(): $Class<($SmallLightConnectorBlockEntity)>
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($SmallLightConnectorBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SmallLightConnectorBlockEntity)>
get "blockEntityClass"(): $Class<($SmallLightConnectorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallLightConnectorBlock$$Type = ($SmallLightConnectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallLightConnectorBlock$$Original = $SmallLightConnectorBlock;}
declare module "com.mrh0.createaddition.blocks.connector.SmallLightConnectorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$WireConnectResult} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IWireNode, $IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"
import {$ConnectorType} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$AbstractConnectorBlockEntity$InterfaceEnergyHandler} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractConnectorBlockEntity} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity"
import {$LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmallLightConnectorBlockEntity extends $AbstractConnectorBlockEntity {
static readonly "OFFSET_NORTH": $Vec3
static readonly "OFFSET_DOWN": $Vec3
 "internal": $AbstractConnectorBlockEntity$InterfaceEnergyHandler
static readonly "OFFSET_WEST": $Vec3
static readonly "OFFSET_EAST": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "OFFSET_UP": $Vec3
static readonly "OFFSET_SOUTH": $Vec3

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getNodeCount"(): integer
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "getNodeOffset"(arg0: integer): $Vec3
public "getConnectorType"(): $ConnectorType
public "getMaxWireLength"(): integer
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
get "nodeCount"(): integer
get "maxIn"(): integer
get "maxOut"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallLightConnectorBlockEntity$$Type = ($SmallLightConnectorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallLightConnectorBlockEntity$$Original = $SmallLightConnectorBlockEntity;}
declare module "com.mrh0.createaddition.blocks.creative_energy.CreativeEnergyBlockEntity" {
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CrateBlockEntity} from "com.simibubi.create.content.logistics.crate.CrateBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreativeEnergyBlockEntity extends $CrateBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "updateCache"(): void
public "tick"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "firstTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyBlockEntity$$Type = ($CreativeEnergyBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeEnergyBlockEntity$$Original = $CreativeEnergyBlockEntity;}
declare module "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LiquidBlazeBurnerBlockEntity$FuelType} from "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlockEntity$FuelType"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IObserveBlockEntity$$Interface} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlazeBurnerBlock$HeatLevel} from "com.simibubi.create.content.processing.burner.BlazeBurnerBlock$HeatLevel"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$LiquidBurningRecipe} from "com.mrh0.createaddition.recipe.liquid_burning.LiquidBurningRecipe"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LiquidBlazeBurnerBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation$$Interface, $IObserveBlockEntity$$Interface {
readonly "stockKeeper": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "first": boolean
static readonly "MAX_HEAT_CAPACITY": integer

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public static "registerCapability"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "updateBlockState"(): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "lazyTick"(): void
public "getActiveFuel"(): $LiquidBlazeBurnerBlockEntity$FuelType
public "getRemainingBurnTime"(): integer
public "getHeatLevelFromBlock"(): $BlazeBurnerBlock$HeatLevel
public "isValidBlockAbove"(): boolean
public "getHeatLevelForRender"(): $BlazeBurnerBlock$HeatLevel
public "spawnParticleBurst"(arg0: boolean): void
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "isCreativeFuel"(arg0: $ItemStack$$Type): boolean
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "burningTick"(): void
public "tick"(): void
public "find"(arg0: $FluidStack$$Type, arg1: $Level$$Type): $Optional<($RecipeHolder<($LiquidBurningRecipe)>)>
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "isCreative"(): boolean
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "activeFuel"(): $LiquidBlazeBurnerBlockEntity$FuelType
get "remainingBurnTime"(): integer
get "heatLevelFromBlock"(): $BlazeBurnerBlock$HeatLevel
get "validBlockAbove"(): boolean
get "heatLevelForRender"(): $BlazeBurnerBlock$HeatLevel
get "creative"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlazeBurnerBlockEntity$$Type = ($LiquidBlazeBurnerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBlazeBurnerBlockEntity$$Original = $LiquidBlazeBurnerBlockEntity;}
declare module "com.mrh0.createaddition.blocks.cake.CACakeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$CakeBlock} from "net.minecraft.world.level.block.CakeBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $CACakeBlock extends $CakeBlock {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "FULL_CAKE_SIGNAL": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CakeBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MAX_BITES": integer
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
static readonly "BITES": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "makeBlockState"<T extends $Block>(arg0: $DataGenContext$$Type<($Block$$Type), (T)>, arg1: $RegistrateBlockstateProvider$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CACakeBlock$$Type = ($CACakeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CACakeBlock$$Original = $CACakeBlock;}
declare module "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlazeBurnerBlock} from "com.simibubi.create.content.processing.burner.BlazeBurnerBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$Random$$Type} from "java.util.Random"
import {$BlazeBurnerBlock$HeatLevel} from "com.simibubi.create.content.processing.burner.BlazeBurnerBlock$HeatLevel"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$LiquidBlazeBurnerBlockEntity, $LiquidBlazeBurnerBlockEntity$$Type} from "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlockEntity"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LiquidBlazeBurnerBlock extends $HorizontalDirectionalBlock implements $IBE$$Interface<($LiquidBlazeBurnerBlockEntity)>, $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($BlazeBurnerBlock)>
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

public "asItem"(): $Item
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "tryInsert"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type, arg4: boolean, arg5: boolean, arg6: boolean): $InteractionResultHolder<($ItemStack)>
public static "getLight"(arg0: $BlockState$$Type): integer
public "getBlockEntityType"(): $BlockEntityType<($LiquidBlazeBurnerBlockEntity)>
public static "getHeatLevelOf"(arg0: $BlockState$$Type): $BlazeBurnerBlock$HeatLevel
public "getBlockEntityClass"(): $Class<($LiquidBlazeBurnerBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Random$$Type): void
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($LiquidBlazeBurnerBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($LiquidBlazeBurnerBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($LiquidBlazeBurnerBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($LiquidBlazeBurnerBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $LiquidBlazeBurnerBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($LiquidBlazeBurnerBlockEntity)>
get "blockEntityClass"(): $Class<($LiquidBlazeBurnerBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlazeBurnerBlock$$Type = ($LiquidBlazeBurnerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBlazeBurnerBlock$$Original = $LiquidBlazeBurnerBlock;}
declare module "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler" {
import {$IEnergyStorage$$Interface} from "net.neoforged.neoforge.energy.IEnergyStorage"

export class $AbstractConnectorBlockEntity$InterfaceEnergyHandler implements $IEnergyStorage$$Interface {
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canExtract"(): boolean
public "canReceive"(): boolean
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConnectorBlockEntity$InterfaceEnergyHandler$$Type = ($AbstractConnectorBlockEntity$InterfaceEnergyHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractConnectorBlockEntity$InterfaceEnergyHandler$$Original = $AbstractConnectorBlockEntity$InterfaceEnergyHandler;}
declare module "com.mrh0.createaddition.blocks.portable_energy_interface.PortableEnergyInterfaceBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WrenchableDirectionalBlock} from "com.simibubi.create.foundation.block.WrenchableDirectionalBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PortableEnergyInterfaceBlockEntity, $PortableEnergyInterfaceBlockEntity$$Type} from "com.mrh0.createaddition.blocks.portable_energy_interface.PortableEnergyInterfaceBlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PortableEnergyInterfaceBlock extends $WrenchableDirectionalBlock implements $IBE$$Interface<($PortableEnergyInterfaceBlockEntity)> {
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
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityType"(): $BlockEntityType<($PortableEnergyInterfaceBlockEntity)>
public "getBlockEntityClass"(): $Class<($PortableEnergyInterfaceBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($PortableEnergyInterfaceBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($PortableEnergyInterfaceBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($PortableEnergyInterfaceBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($PortableEnergyInterfaceBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $PortableEnergyInterfaceBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($PortableEnergyInterfaceBlockEntity)>
get "blockEntityClass"(): $Class<($PortableEnergyInterfaceBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableEnergyInterfaceBlock$$Type = ($PortableEnergyInterfaceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableEnergyInterfaceBlock$$Original = $PortableEnergyInterfaceBlock;}
declare module "com.mrh0.createaddition.blocks.alternator.AlternatorBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$IEnergyProvider$$Interface} from "com.mrh0.createaddition.energy.IEnergyProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AlternatorBlockEntity extends $KineticBlockEntity implements $IEnergyProvider$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage
public "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "updateCache"(): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "calculateStressApplied"(): float
public "tickAudio"(): void
public static "getEnergyProductionRate"(arg0: integer): integer
public "isEnergyOutput"(arg0: $Direction$$Type): boolean
public "isEnergyInput"(arg0: $Direction$$Type): boolean
public "tick"(): void
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "firstTick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AlternatorBlockEntity$$Type = ($AlternatorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AlternatorBlockEntity$$Original = $AlternatorBlockEntity;}
declare module "com.mrh0.createaddition.blocks.portable_energy_interface.PortableEnergyInterfaceBlockEntity" {
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Contraption$$Type} from "com.simibubi.create.content.contraptions.Contraption"
import {$PortableStorageInterfaceBlockEntity} from "com.simibubi.create.content.contraptions.actors.psi.PortableStorageInterfaceBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PortableEnergyInterfaceBlockEntity extends $PortableStorageInterfaceBlockEntity {
 "keepAlive": integer
static readonly "ANIMATION": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getEnergy"(): integer
public "startTransferringTo"(arg0: $Contraption$$Type, arg1: float): void
public "getCapacity"(): integer
public "isConnected"(): boolean
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
get "energy"(): integer
get "capacity"(): integer
get "connected"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PortableEnergyInterfaceBlockEntity$$Type = ($PortableEnergyInterfaceBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PortableEnergyInterfaceBlockEntity$$Original = $PortableEnergyInterfaceBlockEntity;}
declare module "com.mrh0.createaddition.blocks.rolling_mill.RollingMillBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$RollingMillBlockEntity, $RollingMillBlockEntity$$Type} from "com.mrh0.createaddition.blocks.rolling_mill.RollingMillBlockEntity"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$HorizontalKineticBlock} from "com.simibubi.create.content.kinetics.base.HorizontalKineticBlock"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $RollingMillBlock extends $HorizontalKineticBlock implements $IBE$$Interface<($RollingMillBlockEntity)> {
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
static readonly "ROLLING_MILL_SHAPE": $VoxelShape
static readonly "UPDATE_CLIENTS": integer
static readonly "HORIZONTAL_FACING": $Property<($Direction)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($RollingMillBlockEntity)>
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getBlockEntityClass"(): $Class<($RollingMillBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "updateEntityAfterFallOn"(arg0: $BlockGetter$$Type, arg1: $Entity$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($RollingMillBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($RollingMillBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($RollingMillBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($RollingMillBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $RollingMillBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($RollingMillBlockEntity)>
get "blockEntityClass"(): $Class<($RollingMillBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RollingMillBlock$$Type = ($RollingMillBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RollingMillBlock$$Original = $RollingMillBlock;}
declare module "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ModularAccumulatorBlockEntity, $ModularAccumulatorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
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
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ModularAccumulatorBlock extends $Block implements $IWrenchable$$Interface, $IBE$$Interface<($ModularAccumulatorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SILENCED_METAL": $SoundType
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "BOTTOM": $BooleanProperty
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "TOP": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityType"(): $BlockEntityType<($ModularAccumulatorBlockEntity)>
public "getBlockEntityClass"(): $Class<($ModularAccumulatorBlockEntity)>
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($ModularAccumulatorBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public static "isAccumulator"(arg0: $BlockState$$Type): boolean
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "regular"(arg0: $BlockBehaviour$Properties$$Type): $ModularAccumulatorBlock
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getSoundType"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): $SoundType
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($ModularAccumulatorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($ModularAccumulatorBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ModularAccumulatorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ModularAccumulatorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ModularAccumulatorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($ModularAccumulatorBlockEntity)>
get "blockEntityClass"(): $Class<($ModularAccumulatorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAccumulatorBlock$$Type = ($ModularAccumulatorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModularAccumulatorBlock$$Original = $ModularAccumulatorBlock;}
declare module "com.mrh0.createaddition.blocks.redstone_relay.RedstoneRelayBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IObserveBlockEntity$$Interface} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$EnergyNetwork, $EnergyNetwork$$Type} from "com.mrh0.createaddition.energy.network.EnergyNetwork"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Set$$Type} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$WireConnectResult} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$IWireNode, $IWireNode$$Type, $IWireNode$$Interface} from "com.mrh0.createaddition.energy.IWireNode"
import {$ConnectorType} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LocalNode, $LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"

export class $RedstoneRelayBlockEntity extends $SmartBlockEntity implements $IWireNode$$Interface, $IHaveGoggleInformation$$Interface, $IObserveBlockEntity$$Interface {
static "OUT_VERTICAL_OFFSET_SOUTH": $Vec3
static "OUT_VERTICAL_OFFSET_NORTH": $Vec3
static "OFFSET_EAST": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static "IN_VERTICAL_OFFSET_SOUTH": $Vec3
static "OUT_VERTICAL_OFFSET_WEST": $Vec3
static "OFFSET_SOUTH": $Vec3
static "OFFSET_NORTH": $Vec3
static "OUT_VERTICAL_OFFSET_EAST": $Vec3
static "OFFSET_WEST": $Vec3
static "IN_VERTICAL_OFFSET_WEST": $Vec3
static "IN_VERTICAL_OFFSET_EAST": $Vec3
static readonly "NODE_COUNT": integer
static "IN_VERTICAL_OFFSET_NORTH": $Vec3

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getNodeCount"(): integer
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "getDemand"(): integer
public "getNetwork"(arg0: integer): $EnergyNetwork
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "setNetwork"(arg0: integer, arg1: $EnergyNetwork$$Type): void
public "getAvailableNode"(arg0: $Vec3$$Type): integer
public "isNodeInput"(arg0: integer): boolean
public "isNodeOutput"(arg0: integer): boolean
public "getNodeOffset"(arg0: integer): $Vec3
public "getConnectorType"(): $ConnectorType
public "getMaxWireLength"(): integer
public "invalidateNodeCache"(): void
public "invalidateLocalNodes"(): void
public "getLocalNode"(arg0: integer): $LocalNode
public "getWireNode"(arg0: integer): $IWireNode
public "getThroughput"(): integer
public "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
public "tick"(): void
public "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$$Type, arg3: $WireType$$Type): void
public "remove"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "removeNode"(arg0: integer, arg1: boolean): void
public "getPos"(): $BlockPos
public "getNodePos"(arg0: integer): $BlockPos
public "hasConnection"(arg0: integer): boolean
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public "getAvailableNode"(): integer
public "hasAnyConnection"(): boolean
public "dropWires"(arg0: $Level$$Type, arg1: boolean): void
public "dropWires"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: boolean): void
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public "convertOldNbt"(arg0: $CompoundTag$$Type): void
public "validateLocalNodes"(arg0: ($LocalNode$$Type)[]): boolean
public "handleWireCache"(arg0: $Level$$Type, arg1: $Set$$Type<($LocalNode$$Type)>): void
public "awakeNetwork"(arg0: $Level$$Type): boolean
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public "isNetworkValid"(arg0: integer): boolean
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "dropWire"(arg0: $Level$$Type, arg1: $LocalNode$$Type): void
public "hasConnectionTo"(arg0: $BlockPos$$Type): boolean
public "disconnectWires"(): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public "getConnectionTo"(arg0: $BlockPos$$Type): $LocalNode
public "getOtherNodeIndex"(arg0: integer): integer
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public "getNodeType"(arg0: integer): $WireType
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public "removeNode"(arg0: $LocalNode$$Type, arg1: boolean): void
public "removeNode"(arg0: integer): void
public "removeNode"(arg0: $LocalNode$$Type): void
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "nodeCount"(): integer
get "demand"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
get "throughput"(): integer
get "pos"(): $BlockPos
get "availableNode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneRelayBlockEntity$$Type = ($RedstoneRelayBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneRelayBlockEntity$$Original = $RedstoneRelayBlockEntity;}
declare module "com.mrh0.createaddition.blocks.digital_adapter.DigitalAdapterBlockEntity" {
import {$SpeedControllerBlockEntity} from "com.simibubi.create.content.kinetics.speedController.SpeedControllerBlockEntity"
import {$List} from "java.util.List"
import {$HosePulleyBlockEntity} from "com.simibubi.create.content.fluids.hosePulley.HosePulleyBlockEntity"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$MechanicalBearingBlockEntity} from "com.simibubi.create.content.contraptions.bearing.MechanicalBearingBlockEntity"
import {$MechanicalPistonBlockEntity} from "com.simibubi.create.content.contraptions.piston.MechanicalPistonBlockEntity"
import {$StressGaugeBlockEntity} from "com.simibubi.create.content.kinetics.gauge.StressGaugeBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$PulleyBlockEntity} from "com.simibubi.create.content.contraptions.pulley.PulleyBlockEntity"
import {$ElevatorPulleyBlockEntity} from "com.simibubi.create.content.contraptions.elevator.ElevatorPulleyBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpeedGaugeBlockEntity} from "com.simibubi.create.content.kinetics.gauge.SpeedGaugeBlockEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DigitalAdapterBlockEntity extends $BlockEntity {
readonly "textLines": $List<($MutableComponent)>
static readonly "MAX_LINES": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "EMPTY_LINE": $MutableComponent

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getTargetSpeed"(arg0: $Direction$$Type): integer
public "setTextLine"(arg0: integer, arg1: $MutableComponent$$Type): void
public "clearLine"(arg0: integer): void
public "getTextLine"(arg0: integer): $MutableComponent
public "getSpeedController"(arg0: $Direction$$Type): $SpeedControllerBlockEntity
public "incrementLine"(): void
public "getRopePulley"(arg0: $Direction$$Type): $PulleyBlockEntity
public "getHosePulley"(arg0: $Direction$$Type): $HosePulleyBlockEntity
public "getElevatorPulley"(arg0: $Direction$$Type): $ElevatorPulleyBlockEntity
public "getMechanicalPiston"(arg0: $Direction$$Type): $MechanicalPistonBlockEntity
public "getMechanicalBearing"(arg0: $Direction$$Type): $MechanicalBearingBlockEntity
public "getStressGauge"(arg0: $Direction$$Type): $StressGaugeBlockEntity
public "getSpeedGauge"(arg0: $Direction$$Type): $SpeedGaugeBlockEntity
public "setTargetSpeed"(arg0: $Direction$$Type, arg1: integer): void
public "append"(arg0: integer, arg1: $MutableComponent$$Type): void
public "clearAll"(): void
public "getLine"(): integer
public "setLine"(arg0: integer): integer
get "line"(): integer
set "line"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitalAdapterBlockEntity$$Type = ($DigitalAdapterBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DigitalAdapterBlockEntity$$Original = $DigitalAdapterBlockEntity;}
declare module "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ConnectorVariant extends $Enum<($ConnectorVariant)> implements $StringRepresentable$$Interface {
static readonly "Girder": $ConnectorVariant
static readonly "Default": $ConnectorVariant

public static "values"(): ($ConnectorVariant)[]
public static "test"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ConnectorVariant
public static "valueOf"(arg0: StringJS): $ConnectorVariant
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
export type $ConnectorVariant$$Type = (("default") | ("girder"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectorVariant$$Original = $ConnectorVariant;}
declare module "com.mrh0.createaddition.blocks.connector.SmallConnectorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AbstractConnectorBlock} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper} from "net.createmod.catnip.math.VoxelShaper"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SmallConnectorBlockEntity} from "com.mrh0.createaddition.blocks.connector.SmallConnectorBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ConnectorMode} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ConnectorVariant} from "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SmallConnectorBlock extends $AbstractConnectorBlock<($SmallConnectorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "CONNECTOR_SHAPE": $VoxelShaper
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityType"(): $BlockEntityType<($SmallConnectorBlockEntity)>
public "getBlockEntityClass"(): $Class<($SmallConnectorBlockEntity)>
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($SmallConnectorBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SmallConnectorBlockEntity)>
get "blockEntityClass"(): $Class<($SmallConnectorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallConnectorBlock$$Type = ($SmallConnectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallConnectorBlock$$Original = $SmallConnectorBlock;}
declare module "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorDisplaySource" {
import {$ModularGuiLineBuilder$$Type} from "com.simibubi.create.foundation.gui.ModularGuiLineBuilder"
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$PercentOrProgressBarDisplaySource} from "com.simibubi.create.content.redstone.displayLink.source.PercentOrProgressBarDisplaySource"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $ModularAccumulatorDisplaySource extends $PercentOrProgressBarDisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public "initConfigurationWidgets"(arg0: $DisplayLinkContext$$Type, arg1: $ModularGuiLineBuilder$$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModularAccumulatorDisplaySource$$Type = ($ModularAccumulatorDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModularAccumulatorDisplaySource$$Original = $ModularAccumulatorDisplaySource;}
declare module "com.mrh0.createaddition.blocks.modular_accumulator.ModularAccumulatorBlockItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $ModularAccumulatorBlockItem extends $BlockItem {
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
export type $ModularAccumulatorBlockItem$$Type = ($ModularAccumulatorBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModularAccumulatorBlockItem$$Original = $ModularAccumulatorBlockItem;}
declare module "com.mrh0.createaddition.blocks.connector.LargeConnectorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AbstractConnectorBlock} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper} from "net.createmod.catnip.math.VoxelShaper"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$LargeConnectorBlockEntity} from "com.mrh0.createaddition.blocks.connector.LargeConnectorBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ConnectorMode} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ConnectorVariant} from "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LargeConnectorBlock extends $AbstractConnectorBlock<($LargeConnectorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "CONNECTOR_SHAPE": $VoxelShaper
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityType"(): $BlockEntityType<($LargeConnectorBlockEntity)>
public "getBlockEntityClass"(): $Class<($LargeConnectorBlockEntity)>
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($LargeConnectorBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($LargeConnectorBlockEntity)>
get "blockEntityClass"(): $Class<($LargeConnectorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeConnectorBlock$$Type = ($LargeConnectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeConnectorBlock$$Original = $LargeConnectorBlock;}
declare module "com.mrh0.createaddition.blocks.creative_energy.CreativeEnergyBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$CrateBlock} from "com.simibubi.create.content.logistics.crate.CrateBlock"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CreativeEnergyBlockEntity, $CreativeEnergyBlockEntity$$Type} from "com.mrh0.createaddition.blocks.creative_energy.CreativeEnergyBlockEntity"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CreativeEnergyBlock extends $CrateBlock implements $IBE$$Interface<($CreativeEnergyBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CrateBlock)>
static readonly "CREATIVE_ENERGY_SHAPE": $VoxelShape
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityType"(): $BlockEntityType<($CreativeEnergyBlockEntity)>
public "getBlockEntityClass"(): $Class<($CreativeEnergyBlockEntity)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CreativeEnergyBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CreativeEnergyBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CreativeEnergyBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CreativeEnergyBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CreativeEnergyBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CreativeEnergyBlockEntity)>
get "blockEntityClass"(): $Class<($CreativeEnergyBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeEnergyBlock$$Type = ($CreativeEnergyBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeEnergyBlock$$Original = $CreativeEnergyBlock;}
declare module "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IObserveBlockEntity$$Interface} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$EnergyNetwork, $EnergyNetwork$$Type} from "com.mrh0.createaddition.energy.network.EnergyNetwork"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$IDebugDrawer$$Interface} from "com.mrh0.createaddition.debug.IDebugDrawer"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Set$$Type} from "java.util.Set"
import {$AbstractConnectorBlockEntity$InterfaceEnergyHandler} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConnectorMode} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$IEnergyProvider$$Interface} from "com.mrh0.createaddition.energy.IEnergyProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$WireConnectResult} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IWireNode, $IWireNode$$Type, $IWireNode$$Interface} from "com.mrh0.createaddition.energy.IWireNode"
import {$ConnectorType} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$LocalNode, $LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"

export class $AbstractConnectorBlockEntity extends $SmartBlockEntity implements $IWireNode$$Interface, $IObserveBlockEntity$$Interface, $IHaveGoggleInformation$$Interface, $IDebugDrawer$$Interface, $IEnergyProvider$$Interface {
 "internal": $AbstractConnectorBlockEntity$InterfaceEnergyHandler
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getEnergyStorage"(arg0: $Direction$$Type): $IEnergyStorage
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "getNetwork"(arg0: integer): $EnergyNetwork
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "setNetwork"(arg0: integer, arg1: $EnergyNetwork$$Type): void
public "updateExternalEnergyStorage"(): void
public "drawDebug"(): void
public "isEnergyOutput"(arg0: $Direction$$Type): boolean
public "isEnergyInput"(arg0: $Direction$$Type): boolean
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "invalidateNodeCache"(): void
public "invalidateLocalNodes"(): void
public "getLocalNode"(arg0: integer): $LocalNode
public "getWireNode"(arg0: integer): $IWireNode
public "ignoreCapSide"(): boolean
public "getCapacity"(): integer
public "tick"(): void
public "getMode"(): $ConnectorMode
public "setNode"(arg0: integer, arg1: integer, arg2: $BlockPos$$Type, arg3: $WireType$$Type): void
public "remove"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "read"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "removeNode"(arg0: integer, arg1: boolean): void
public "firstTick"(): void
public "getPos"(): $BlockPos
public "getNodeCount"(): integer
public "getNodePos"(arg0: integer): $BlockPos
public "hasConnection"(arg0: integer): boolean
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public "getAvailableNode"(): integer
public "getAvailableNode"(arg0: $Vec3$$Type): integer
public "hasAnyConnection"(): boolean
public "isNodeInput"(arg0: integer): boolean
public "isNodeOutput"(arg0: integer): boolean
public "dropWires"(arg0: $Level$$Type, arg1: boolean): void
public "dropWires"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: boolean): void
public "getNodeOffset"(arg0: integer): $Vec3
public "getConnectorType"(): $ConnectorType
public "getMaxWireLength"(): integer
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public "convertOldNbt"(arg0: $CompoundTag$$Type): void
public "validateLocalNodes"(arg0: ($LocalNode$$Type)[]): boolean
public "handleWireCache"(arg0: $Level$$Type, arg1: $Set$$Type<($LocalNode$$Type)>): void
public "awakeNetwork"(arg0: $Level$$Type): boolean
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public "isNetworkValid"(arg0: integer): boolean
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public "dropWire"(arg0: $Level$$Type, arg1: $LocalNode$$Type): void
public "hasConnectionTo"(arg0: $BlockPos$$Type): boolean
public "disconnectWires"(): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public "getConnectionTo"(arg0: $BlockPos$$Type): $LocalNode
public "getOtherNodeIndex"(arg0: integer): integer
public "isNodeIndeciesConnected"(arg0: integer, arg1: integer): boolean
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public "getNodeType"(arg0: integer): $WireType
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public "removeNode"(arg0: $LocalNode$$Type, arg1: boolean): void
public "removeNode"(arg0: integer): void
public "removeNode"(arg0: $LocalNode$$Type): void
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "maxIn"(): integer
get "maxOut"(): integer
get "capacity"(): integer
get "mode"(): $ConnectorMode
get "pos"(): $BlockPos
get "nodeCount"(): integer
get "availableNode"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConnectorBlockEntity$$Type = ($AbstractConnectorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractConnectorBlockEntity$$Original = $AbstractConnectorBlockEntity;}
declare module "com.mrh0.createaddition.blocks.connector.ConnectorType" {
import {$Enum} from "java.lang.Enum"

export class $ConnectorType extends $Enum<($ConnectorType)> {
static readonly "Small": $ConnectorType
static readonly "Large": $ConnectorType

public static "values"(): ($ConnectorType)[]
public static "valueOf"(arg0: StringJS): $ConnectorType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectorType$$Type = (("small") | ("large"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectorType$$Original = $ConnectorType;}
declare module "com.mrh0.createaddition.blocks.digital_adapter.DigitalAdapterBlock" {
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
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$DigitalAdapterBlockEntity, $DigitalAdapterBlockEntity$$Type} from "com.mrh0.createaddition.blocks.digital_adapter.DigitalAdapterBlockEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $DigitalAdapterBlock extends $Block implements $IBE$$Interface<($DigitalAdapterBlockEntity)>, $IWrenchable$$Interface {
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

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityType"(): $BlockEntityType<($DigitalAdapterBlockEntity)>
public "getBlockEntityClass"(): $Class<($DigitalAdapterBlockEntity)>
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($DigitalAdapterBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($DigitalAdapterBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($DigitalAdapterBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($DigitalAdapterBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $DigitalAdapterBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($DigitalAdapterBlockEntity)>
get "blockEntityClass"(): $Class<($DigitalAdapterBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitalAdapterBlock$$Type = ($DigitalAdapterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DigitalAdapterBlock$$Original = $DigitalAdapterBlock;}
declare module "com.mrh0.createaddition.blocks.tesla_coil.TeslaCoilBlockEntity" {
import {$AbstractElectricBlockEntity} from "com.mrh0.createaddition.energy.AbstractElectricBlockEntity"
import {$BeltProcessingBehaviour} from "com.simibubi.create.content.kinetics.belt.behaviour.BeltProcessingBehaviour"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$ChargingRecipe} from "com.mrh0.createaddition.recipe.charging.ChargingRecipe"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ObservePacketPayload$$Type} from "com.mrh0.createaddition.network.ObservePacketPayload"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$IObserveBlockEntity$$Interface} from "com.mrh0.createaddition.network.IObserveBlockEntity"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TeslaCoilBlockEntity extends $AbstractElectricBlockEntity implements $IHaveGoggleInformation$$Interface, $IObserveBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "processingBehaviour": $BeltProcessingBehaviour

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "onObserved"(arg0: $ServerPlayer$$Type, arg1: $ObservePacketPayload$$Type): void
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "tickAudio"(): void
public "isEnergyOutput"(arg0: $Direction$$Type): boolean
public "isEnergyInput"(arg0: $Direction$$Type): boolean
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "isPoweredState"(): boolean
public "getConsumption"(): integer
public "getCapacity"(): integer
public "tick"(): void
public "find"(arg0: $RecipeWrapper$$Type, arg1: $Level$$Type): $Optional<($RecipeHolder<($ChargingRecipe)>)>
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "maxIn"(): integer
get "maxOut"(): integer
get "poweredState"(): boolean
get "consumption"(): integer
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlockEntity$$Type = ($TeslaCoilBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeslaCoilBlockEntity$$Original = $TeslaCoilBlockEntity;}
declare module "com.mrh0.createaddition.blocks.digital_adapter.DigitalAdapterDisplaySource" {
import {$DisplaySource} from "com.simibubi.create.api.behaviour.display.DisplaySource"
import {$DisplayTargetStats$$Type} from "com.simibubi.create.content.redstone.displayLink.target.DisplayTargetStats"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List} from "java.util.List"
import {$DisplayLinkContext$$Type} from "com.simibubi.create.content.redstone.displayLink.DisplayLinkContext"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$SimpleRegistry$Multi} from "com.simibubi.create.api.registry.SimpleRegistry$Multi"

export class $DigitalAdapterDisplaySource extends $DisplaySource {
static readonly "BY_BLOCK_ENTITY": $SimpleRegistry$Multi<($BlockEntityType<(never)>), ($DisplaySource)>
static readonly "WHITESPACE": $MutableComponent
static readonly "EMPTY": $List<($MutableComponent)>
static readonly "EMPTY_LINE": $MutableComponent
static readonly "BY_BLOCK": $SimpleRegistry$Multi<($Block), ($DisplaySource)>

constructor()

public "provideText"(arg0: $DisplayLinkContext$$Type, arg1: $DisplayTargetStats$$Type): $List<($MutableComponent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DigitalAdapterDisplaySource$$Type = ($DigitalAdapterDisplaySource);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DigitalAdapterDisplaySource$$Original = $DigitalAdapterDisplaySource;}
declare module "com.mrh0.createaddition.blocks.tesla_coil.TeslaCoilBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper} from "net.createmod.catnip.math.VoxelShaper"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
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
import {$TeslaCoilBlockEntity, $TeslaCoilBlockEntity$$Type} from "com.mrh0.createaddition.blocks.tesla_coil.TeslaCoilBlockEntity"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TeslaCoilBlock extends $Block implements $IBE$$Interface<($TeslaCoilBlockEntity)>, $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "TESLA_COIL_SHAPE": $VoxelShaper
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "setPowered"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($TeslaCoilBlockEntity)>
public "getBlockEntityClass"(): $Class<($TeslaCoilBlockEntity)>
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($TeslaCoilBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($TeslaCoilBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($TeslaCoilBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TeslaCoilBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($TeslaCoilBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $TeslaCoilBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($TeslaCoilBlockEntity)>
get "blockEntityClass"(): $Class<($TeslaCoilBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlock$$Type = ($TeslaCoilBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeslaCoilBlock$$Original = $TeslaCoilBlock;}
declare module "com.mrh0.createaddition.blocks.electric_motor.ElectricMotorBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$VoxelShaper} from "net.createmod.catnip.math.VoxelShaper"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$ElectricMotorBlockEntity, $ElectricMotorBlockEntity$$Type} from "com.mrh0.createaddition.blocks.electric_motor.ElectricMotorBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ElectricMotorBlock extends $DirectionalKineticBlock implements $IBE$$Interface<($ElectricMotorBlockEntity)> {
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
static readonly "FACING": $DirectionProperty
static readonly "ELECTRIC_MOTOR_SHAPE": $VoxelShaper

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "setPowered"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($ElectricMotorBlockEntity)>
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "hideStressImpact"(): boolean
public "getBlockEntityClass"(): $Class<($ElectricMotorBlockEntity)>
public "tick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($ElectricMotorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($ElectricMotorBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ElectricMotorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ElectricMotorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ElectricMotorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($ElectricMotorBlockEntity)>
get "blockEntityClass"(): $Class<($ElectricMotorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricMotorBlock$$Type = ($ElectricMotorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricMotorBlock$$Original = $ElectricMotorBlock;}
declare module "com.mrh0.createaddition.blocks.connector.base.ConnectorMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ConnectorMode extends $Enum<($ConnectorMode)> implements $StringRepresentable$$Interface {
static readonly "Pull": $ConnectorMode
static readonly "Passive": $ConnectorMode
static readonly "Push": $ConnectorMode
static readonly "None": $ConnectorMode

public "getNext"(): $ConnectorMode
public static "values"(): ($ConnectorMode)[]
public static "test"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type): $ConnectorMode
public static "valueOf"(arg0: StringJS): $ConnectorMode
public "isActive"(): boolean
public "getSerializedName"(): StringJS
public "getTooltip"(): $MutableComponent
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "next"(): $ConnectorMode
get "active"(): boolean
get "serializedName"(): StringJS
get "tooltip"(): $MutableComponent
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectorMode$$Type = (("push") | ("pull") | ("none") | ("passive"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectorMode$$Original = $ConnectorMode;}
declare module "com.mrh0.createaddition.blocks.barbed_wire.BarbedWireBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$IShearable$$Interface} from "net.neoforged.neoforge.common.IShearable"
import {$DataGenContext$$Type} from "com.tterrag.registrate.providers.DataGenContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$RegistrateBlockstateProvider$$Type} from "com.tterrag.registrate.providers.RegistrateBlockstateProvider"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $BarbedWireBlock extends $Block implements $IShearable$$Interface, $SimpleWaterloggedBlock$$Interface {
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
static readonly "VERTICAL": $BooleanProperty
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "HORIZONTAL_FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public static "makeBlockState"(arg0: $DataGenContext$$Type<($Block$$Type), ($BarbedWireBlock$$Type)>, arg1: $RegistrateBlockstateProvider$$Type): void
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "onSheared"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): $List<($ItemStack)>
public "isShearable"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type): boolean
public "handler$cik000$apothic_enchanting$apoth_handleShearFortune"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $CallbackInfoReturnable$$Type): void
public "handler$cik000$apothic_enchanting$apoth_handleShearEnchantments"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $CallbackInfoReturnable$$Type): void
public "spawnShearedDrop"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
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
export type $BarbedWireBlock$$Type = ($BarbedWireBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BarbedWireBlock$$Original = $BarbedWireBlock;}
declare module "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
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
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractConnectorBlockEntity} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ConnectorMode} from "com.mrh0.createaddition.blocks.connector.base.ConnectorMode"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$ConnectorVariant} from "com.mrh0.createaddition.blocks.connector.base.ConnectorVariant"
import {$TransformableBlock$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlock"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AbstractConnectorBlock<BE extends $AbstractConnectorBlockEntity> extends $Block implements $IBE$$Interface<(BE)>, $IWrenchable$$Interface, $TransformableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($ConnectorMode)>
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $EnumProperty<($ConnectorVariant)>
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
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "transform"(arg0: $BlockState$$Type, arg1: $StructureTransform$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $Rotation$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(BE)>
public "getBlockEntityType"(): $BlockEntityType<(BE)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<(BE)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(BE), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<(BE), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntityClass"(): $Class<(BE)>
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): BE
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<(BE)>
get "blockEntityClass"(): $Class<(BE)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractConnectorBlock$$Type<BE> = ($AbstractConnectorBlock<(BE)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractConnectorBlock$$Original<BE> = $AbstractConnectorBlock<(BE)>;}
declare module "com.mrh0.createaddition.blocks.liquid_blaze_burner.LiquidBlazeBurnerBlockEntity$FuelType" {
import {$Enum} from "java.lang.Enum"

export class $LiquidBlazeBurnerBlockEntity$FuelType extends $Enum<($LiquidBlazeBurnerBlockEntity$FuelType)> {
static readonly "NONE": $LiquidBlazeBurnerBlockEntity$FuelType
static readonly "SPECIAL": $LiquidBlazeBurnerBlockEntity$FuelType
static readonly "NORMAL": $LiquidBlazeBurnerBlockEntity$FuelType

public static "values"(): ($LiquidBlazeBurnerBlockEntity$FuelType)[]
public static "valueOf"(arg0: StringJS): $LiquidBlazeBurnerBlockEntity$FuelType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LiquidBlazeBurnerBlockEntity$FuelType$$Type = (("none") | ("normal") | ("special"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LiquidBlazeBurnerBlockEntity$FuelType$$Original = $LiquidBlazeBurnerBlockEntity$FuelType;}
declare module "com.mrh0.createaddition.blocks.connector.SmallConnectorBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$RegisterCapabilitiesEvent$$Type} from "net.neoforged.neoforge.capabilities.RegisterCapabilitiesEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WireType, $WireType$$Type} from "com.mrh0.createaddition.energy.WireType"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$WireConnectResult} from "com.mrh0.createaddition.energy.WireConnectResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IWireNode, $IWireNode$$Type} from "com.mrh0.createaddition.energy.IWireNode"
import {$ConnectorType} from "com.mrh0.createaddition.blocks.connector.ConnectorType"
import {$AbstractConnectorBlockEntity$InterfaceEnergyHandler} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity$InterfaceEnergyHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractConnectorBlockEntity} from "com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity"
import {$LocalNode$$Type} from "com.mrh0.createaddition.energy.LocalNode"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SmallConnectorBlockEntity extends $AbstractConnectorBlockEntity {
static readonly "OFFSET_NORTH": $Vec3
static readonly "OFFSET_DOWN": $Vec3
 "internal": $AbstractConnectorBlockEntity$InterfaceEnergyHandler
static readonly "OFFSET_WEST": $Vec3
static readonly "OFFSET_EAST": $Vec3
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "OFFSET_UP": $Vec3
static readonly "OFFSET_SOUTH": $Vec3

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getNodeCount"(): integer
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getMaxIn"(): integer
public "getMaxOut"(): integer
public "getNodeOffset"(arg0: integer): $Vec3
public "getConnectorType"(): $ConnectorType
public "getMaxWireLength"(): integer
public static "registerCapabilities"(arg0: $RegisterCapabilitiesEvent$$Type): void
public static "getTypeOfConnection"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireType
public static "getWireNodeFrom"(arg0: integer, arg1: $IWireNode$$Type, arg2: ($LocalNode$$Type)[], arg3: ($IWireNode$$Type)[], arg4: $Level$$Type): $IWireNode
public static "getWireNode"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $IWireNode
public static "dropWire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ItemStack$$Type): void
public static "getNbtNode"(arg0: $CompoundTag$$Type, arg1: integer): $CompoundTag
public static "readNodeBlockPos"(arg0: $CompoundTag$$Type, arg1: integer, arg2: $BlockPos$$Type): $BlockPos
public static "readNodeWireType"(arg0: $CompoundTag$$Type, arg1: integer): $WireType
public static "readNodeOtherIndex"(arg0: $CompoundTag$$Type, arg1: integer): integer
public static "connect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $BlockPos$$Type, arg4: integer, arg5: $WireType$$Type): $WireConnectResult
public static "disconnect"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type): $WireConnectResult
get "nodeCount"(): integer
get "maxIn"(): integer
get "maxOut"(): integer
get "connectorType"(): $ConnectorType
get "maxWireLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallConnectorBlockEntity$$Type = ($SmallConnectorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallConnectorBlockEntity$$Original = $SmallConnectorBlockEntity;}
