declare module "org.antarcticgardens.cna.content.heat.stirling.StirlingEngineBlockEntity" {
import {$GeneratingKineticBlockEntity} from "com.simibubi.create.content.kinetics.base.GeneratingKineticBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HeatBlockEntity$$Type, $HeatBlockEntity$$Interface} from "org.antarcticgardens.cna.content.heat.HeatBlockEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StirlingEngineBlockEntity extends $GeneratingKineticBlockEntity implements $HeatBlockEntity$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
 "reActivateSource": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "speed": float
 "network": long

constructor(typeIn: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "canConnect"(from: $Direction$$Type): boolean
public "addHeat"(amount: float): void
public "setHeat"(amount: float): void
public "addToGoggleTooltip"(tooltip: $List$$Type<($Component$$Type)>, isPlayerSneaking: boolean): boolean
public "getTierHeat"(): float
public "getHeatTiers"(): (float)[]
public "getGeneratedSpeed"(): float
public "calculateAddedStressCapacity"(): float
public "tick"(): void
public "getHeat"(): float
public static "transferAround"<T extends $BlockEntity>(self: T): void
public static "handleOverheat"<T extends $BlockEntity>(self: T): void
public static "handleOverheat"<T extends $BlockEntity>(self: T, onOverHeat: $Runnable$$Type): void
public static "trySync"<T extends $BlockEntity>(self: T): void
public static "addToolTips"<T extends $BlockEntity>(self: T, tooltip: $List$$Type<($Component$$Type)>): void
public "canAdd"(from: $Direction$$Type): boolean
public "maxHeat"(): float
public "getHeatTierMultiplier"(): double
public static "average"<T extends $BlockEntity>(self: T, totalToAverage: float, totalBlocks: integer, setters: ($HeatBlockEntity$$Type)[]): void
set "heat"(value: float)
get "tierHeat"(): float
get "heatTiers"(): (float)[]
get "generatedSpeed"(): float
get "heat"(): float
get "heatTierMultiplier"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StirlingEngineBlockEntity$$Type = ($StirlingEngineBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StirlingEngineBlockEntity$$Original = $StirlingEngineBlockEntity;}
declare module "org.antarcticgardens.cna.content.heat.plate.SolarHeatingPlateBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityEntry$$Type} from "com.tterrag.registrate.util.entry.BlockEntityEntry"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SolarHeatingPlateBlock extends $Block implements $EntityBlock$$Interface, $IWrenchable$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type, entry: $BlockEntityEntry$$Type<(never)>, strength: integer)

public static "createBasic"(properties: $BlockBehaviour$Properties$$Type): $SolarHeatingPlateBlock
public static "createAdvanced"(properties: $BlockBehaviour$Properties$$Type): $SolarHeatingPlateBlock
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
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
export type $SolarHeatingPlateBlock$$Type = ($SolarHeatingPlateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SolarHeatingPlateBlock$$Original = $SolarHeatingPlateBlock;}
declare module "org.antarcticgardens.cna.content.nuclear.CoriumBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$FallingBlock} from "net.minecraft.world.level.block.FallingBlock"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CoriumBlock extends $FallingBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CoriumBlock)>
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "randomTick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoriumBlock$$Type = ($CoriumBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoriumBlock$$Original = $CoriumBlock;}
declare module "org.antarcticgardens.cna.content.electricity.connector.ElectricalConnectorBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ElectricalConnectorBlockEntity, $ElectricalConnectorBlockEntity$$Type} from "org.antarcticgardens.cna.content.electricity.connector.ElectricalConnectorBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ElectricalConnectorMode} from "org.antarcticgardens.cna.content.electricity.connector.ElectricalConnectorMode"
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
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ElectricalConnectorBlock extends $DirectionalBlock implements $IBE$$Interface<($ElectricalConnectorBlockEntity)>, $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ElectricalConnectorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "MODE": $EnumProperty<($ElectricalConnectorMode)>
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$$Type, p_153213_: $BlockState$$Type, p_153214_: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($ElectricalConnectorBlockEntity)>
public "getBlockEntityClass"(): $Class<($ElectricalConnectorBlockEntity)>
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, movedByPiston: boolean): void
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, neighborPos: $BlockPos$$Type, movedByPiston: boolean): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($ElectricalConnectorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($ElectricalConnectorBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ElectricalConnectorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ElectricalConnectorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ElectricalConnectorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($ElectricalConnectorBlockEntity)>
get "blockEntityClass"(): $Class<($ElectricalConnectorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricalConnectorBlock$$Type = ($ElectricalConnectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricalConnectorBlock$$Original = $ElectricalConnectorBlock;}
declare module "org.antarcticgardens.cna.content.electricity.network.NetworkPathManager" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $NetworkPathManager {
constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NetworkPathManager$$Type = ($NetworkPathManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NetworkPathManager$$Original = $NetworkPathManager;}
declare module "org.antarcticgardens.cna.content.electricity.connector.ElectricalConnectorMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ElectricalConnectorMode extends $Enum<($ElectricalConnectorMode)> implements $StringRepresentable$$Interface {
static readonly "PULL": $ElectricalConnectorMode
readonly "pull": boolean
static readonly "INERT": $ElectricalConnectorMode

public static "values"(): ($ElectricalConnectorMode)[]
public static "valueOf"(name: StringJS): $ElectricalConnectorMode
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
export type $ElectricalConnectorMode$$Type = (("inert") | ("pull"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricalConnectorMode$$Original = $ElectricalConnectorMode;}
declare module "org.antarcticgardens.cna.content.energising.recipe.EnergisingRecipeParams" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ProcessingRecipeParams} from "com.simibubi.create.content.processing.recipe.ProcessingRecipeParams"

export class $EnergisingRecipeParams extends $ProcessingRecipeParams {
static "CODEC": $MapCodec<($EnergisingRecipeParams)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($EnergisingRecipeParams)>

constructor()

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergisingRecipeParams$$Type = ($EnergisingRecipeParams);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergisingRecipeParams$$Original = $EnergisingRecipeParams;}
declare module "org.antarcticgardens.cna.content.nuclear.reactor.rod.ReactorRodBlock" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ReactorBlock} from "org.antarcticgardens.cna.content.nuclear.reactor.ReactorBlock"

export class $ReactorRodBlock extends $ReactorBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ACTIVE": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "propagatesSkylightDown"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getShadeBrightness"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "getDrops"(state: $BlockState$$Type, params: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getVisualShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $CollisionContext$$Type): $VoxelShape
public "destroy"(level: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorRodBlock$$Type = ($ReactorRodBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorRodBlock$$Original = $ReactorRodBlock;}
declare module "org.antarcticgardens.cna.content.heat.HeatBlockEntity" {
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $HeatBlockEntity$$Interface {
set "heat"(value: float)
get "tierHeat"(): float
get "heatTiers"(): (float)[]
get "heatTierMultiplier"(): double
get "heat"(): float
}

export class $HeatBlockEntity implements $HeatBlockEntity$$Interface {
 "canConnect"(from: $Direction$$Type): boolean
static "transferAround"<T extends $BlockEntity>(self: T): void
static "handleOverheat"<T extends $BlockEntity>(self: T): void
static "handleOverheat"<T extends $BlockEntity>(self: T, onOverHeat: $Runnable$$Type): void
static "trySync"<T extends $BlockEntity>(self: T): void
 "addHeat"(arg0: float): void
 "setHeat"(arg0: float): void
static "addToolTips"<T extends $BlockEntity>(self: T, tooltip: $List$$Type<($Component$$Type)>): void
 "canAdd"(from: $Direction$$Type): boolean
 "maxHeat"(): float
 "getTierHeat"(): float
 "getHeatTiers"(): (float)[]
 "getHeatTierMultiplier"(): double
static "average"<T extends $BlockEntity>(self: T, totalToAverage: float, totalBlocks: integer, setters: ($HeatBlockEntity$$Type)[]): void
 "getHeat"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatBlockEntity$$Type = ($HeatBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatBlockEntity$$Original = $HeatBlockEntity;}
declare module "org.antarcticgardens.cna.content.electricity.generation.brushes.CarbonBrushesBlock" {
import {$CarbonBrushesBlockEntity, $CarbonBrushesBlockEntity$$Type} from "org.antarcticgardens.cna.content.electricity.generation.brushes.CarbonBrushesBlockEntity"
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
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CarbonBrushesBlock extends $DirectionalKineticBlock implements $IBE$$Interface<($CarbonBrushesBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(world: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, face: $Direction$$Type): boolean
public "getRotationAxis"(state: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($CarbonBrushesBlockEntity)>
public "getBlockEntityClass"(): $Class<($CarbonBrushesBlockEntity)>
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CarbonBrushesBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CarbonBrushesBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CarbonBrushesBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CarbonBrushesBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CarbonBrushesBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CarbonBrushesBlockEntity)>
get "blockEntityClass"(): $Class<($CarbonBrushesBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarbonBrushesBlock$$Type = ($CarbonBrushesBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarbonBrushesBlock$$Original = $CarbonBrushesBlock;}
declare module "org.antarcticgardens.cna.content.electricity.generation.brushes.CarbonBrushesItem" {
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CarbonBrushesItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "initializeClient"(consumer: $Consumer$$Type<($IClientItemExtensions)>): void
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
export type $CarbonBrushesItem$$Type = ($CarbonBrushesItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarbonBrushesItem$$Original = $CarbonBrushesItem;}
declare module "org.antarcticgardens.cna.content.nuclear.reactor.vent.ReactorHeatVentBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$ReactorBlock} from "org.antarcticgardens.cna.content.nuclear.reactor.ReactorBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorHeatVentBlock extends $ReactorBlock implements $EntityBlock$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorHeatVentBlock$$Type = ($ReactorHeatVentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorHeatVentBlock$$Original = $ReactorHeatVentBlock;}
declare module "org.antarcticgardens.cna.content.motor.extension.MotorExtensionBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IMotorExtensionVariant$$Type} from "org.antarcticgardens.cna.content.motor.extension.variants.IMotorExtensionVariant"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
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
import {$BlockEntityEntry$$Type} from "com.tterrag.registrate.util.entry.BlockEntityEntry"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$MotorExtensionBlockEntity, $MotorExtensionBlockEntity$$Type} from "org.antarcticgardens.cna.content.motor.extension.MotorExtensionBlockEntity"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MotorExtensionBlock extends $Block implements $IBE$$Interface<($MotorExtensionBlockEntity)>, $IWrenchable$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type, entry: $BlockEntityEntry$$Type<($MotorExtensionBlockEntity$$Type)>, variant: $IMotorExtensionVariant$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getBlockEntityType"(): $BlockEntityType<($MotorExtensionBlockEntity)>
public "getBlockEntityClass"(): $Class<($MotorExtensionBlockEntity)>
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $CollisionContext$$Type): $VoxelShape
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($MotorExtensionBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($MotorExtensionBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MotorExtensionBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MotorExtensionBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MotorExtensionBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($MotorExtensionBlockEntity)>
get "blockEntityClass"(): $Class<($MotorExtensionBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorExtensionBlock$$Type = ($MotorExtensionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MotorExtensionBlock$$Original = $MotorExtensionBlock;}
declare module "org.antarcticgardens.cna.content.electricity.wire.WireType" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Enum} from "java.lang.Enum"

export class $WireType extends $Enum<($WireType)> {
static readonly "OVERCHARGED_GOLD": $WireType
static readonly "OVERCHARGED_DIAMOND": $WireType
static readonly "OVERCHARGED_IRON": $WireType
static readonly "COPPER": $WireType

public "getDroppedItem"(): $ItemStack
public "getConductivity"(): long
public "getTextureLocation"(): $ResourceLocation
public static "values"(): ($WireType)[]
public static "valueOf"(name: StringJS): $WireType
get "droppedItem"(): $ItemStack
get "conductivity"(): long
get "textureLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WireType$$Type = (("copper") | ("overcharged_iron") | ("overcharged_gold") | ("overcharged_diamond"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WireType$$Original = $WireType;}
declare module "org.antarcticgardens.cna.content.electricity.generation.brushes.CarbonBrushesBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $CarbonBrushesBlockEntity extends $KineticBlockEntity implements $IHaveGoggleInformation$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(type: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "addToGoggleTooltip"(tooltip: $List$$Type<($Component$$Type)>, isPlayerSneaking: boolean): boolean
public "lazyTick"(): void
public "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CarbonBrushesBlockEntity$$Type = ($CarbonBrushesBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CarbonBrushesBlockEntity$$Original = $CarbonBrushesBlockEntity;}
declare module "org.antarcticgardens.cna.content.motor.extension.variants.IMotorExtensionVariant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMotorExtensionVariant$$Interface {
get "extraCapacity"(): long
get "scrollStep"(): integer
get "multiplier"(): float
}

export class $IMotorExtensionVariant implements $IMotorExtensionVariant$$Interface {
 "getExtraCapacity"(): long
 "getScrollStep"(): integer
 "getMultiplier"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMotorExtensionVariant$$Type = ($IMotorExtensionVariant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMotorExtensionVariant$$Original = $IMotorExtensionVariant;}
declare module "org.antarcticgardens.cna.content.electricity.generation.coil.GeneratorCoilBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $GeneratorCoilBlockEntity extends $KineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
readonly "magnetPositions": $List<($BlockPos)>
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(typeIn: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "addToGoggleTooltip"(tooltip: $List$$Type<($Component$$Type)>, isPlayerSneaking: boolean): boolean
public "calculateStressApplied"(): float
public "takeGeneratedEnergy"(): integer
public "lazyTick"(): void
public "tick"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorCoilBlockEntity$$Type = ($GeneratorCoilBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratorCoilBlockEntity$$Original = $GeneratorCoilBlockEntity;}
declare module "org.antarcticgardens.cna.content.heat.stirling.StirlingEngineItem" {
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $StirlingEngineItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "initializeClient"(consumer: $Consumer$$Type<($IClientItemExtensions)>): void
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
export type $StirlingEngineItem$$Type = ($StirlingEngineItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StirlingEngineItem$$Original = $StirlingEngineItem;}
declare module "org.antarcticgardens.cna.content.nuclear.SolidCoriumBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SolidCoriumBlock extends $Block {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "randomTick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "animateTick"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SolidCoriumBlock$$Type = ($SolidCoriumBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SolidCoriumBlock$$Original = $SolidCoriumBlock;}
declare module "org.antarcticgardens.cna.content.heat.pipe.HeatPipeBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $HeatPipeBlock extends $Block implements $EntityBlock$$Interface, $IWrenchable$$Interface {
static "DOWN": $BooleanProperty
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static "NORTH": $BooleanProperty
static "massPipe": integer
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
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "onPlace"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, movedByPiston: boolean): void
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "updateState"(state: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type): $BlockState
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, neighborPos: $BlockPos$$Type, movedByPiston: boolean): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
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
export type $HeatPipeBlock$$Type = ($HeatPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatPipeBlock$$Original = $HeatPipeBlock;}
declare module "org.antarcticgardens.cna.content.energising.EnergiserBlockEntity" {
import {$SimpleEnergyStorage} from "org.antarcticgardens.esl.energy.SimpleEnergyStorage"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"

export class $EnergiserBlockEntity extends $KineticBlockEntity {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "lastCharged": long
 "networkDirty": boolean
 "tier": integer
 "size": float
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(type: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "addToGoggleTooltip"(tooltip: $List$$Type<($Component$$Type)>, isPlayerSneaking: boolean): boolean
public "calculateStressApplied"(): float
public "addBehaviours"(behaviours: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "getEnergyStorage"(): $SimpleEnergyStorage
get "energyStorage"(): $SimpleEnergyStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergiserBlockEntity$$Type = ($EnergiserBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergiserBlockEntity$$Original = $EnergiserBlockEntity;}
declare module "org.antarcticgardens.cna.content.heat.stirling.StirlingEngineBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$StirlingEngineBlockEntity, $StirlingEngineBlockEntity$$Type} from "org.antarcticgardens.cna.content.heat.stirling.StirlingEngineBlockEntity"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityEntry$$Type} from "com.tterrag.registrate.util.entry.BlockEntityEntry"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RotatedPillarKineticBlock} from "com.simibubi.create.content.kinetics.base.RotatedPillarKineticBlock"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $StirlingEngineBlock extends $RotatedPillarKineticBlock implements $IBE$$Interface<($StirlingEngineBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$$Type, entry: $BlockEntityEntry$$Type<($StirlingEngineBlockEntity$$Type)>)

public "hasShaftTowards"(world: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, face: $Direction$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getRotationAxis"(state: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($StirlingEngineBlockEntity)>
public "getBlockEntityClass"(): $Class<($StirlingEngineBlockEntity)>
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($StirlingEngineBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($StirlingEngineBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($StirlingEngineBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($StirlingEngineBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $StirlingEngineBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($StirlingEngineBlockEntity)>
get "blockEntityClass"(): $Class<($StirlingEngineBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StirlingEngineBlock$$Type = ($StirlingEngineBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StirlingEngineBlock$$Original = $StirlingEngineBlock;}
declare module "org.antarcticgardens.cna.content.energising.EnergisingBlockItem" {
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AssemblyOperatorBlockItem} from "com.simibubi.create.content.processing.AssemblyOperatorBlockItem"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $EnergisingBlockItem extends $AssemblyOperatorBlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, builder: $Item$Properties$$Type)

public "initializeClient"(consumer: $Consumer$$Type<($IClientItemExtensions)>): void
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
export type $EnergisingBlockItem$$Type = ($EnergisingBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergisingBlockItem$$Original = $EnergisingBlockItem;}
declare module "org.antarcticgardens.cna.content.heat.pump.HeatPumpBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $HeatPumpBlock extends $Block implements $EntityBlock$$Interface, $IWrenchable$$Interface {
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
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, world: $LevelAccessor$$Type, pos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "onPlace"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, oldState: $BlockState$$Type, movedByPiston: boolean): void
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, neighborBlock: $Block$$Type, neighborPos: $BlockPos$$Type, movedByPiston: boolean): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
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
export type $HeatPumpBlock$$Type = ($HeatPumpBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatPumpBlock$$Original = $HeatPumpBlock;}
declare module "org.antarcticgardens.cna.content.motor.MotorScrollValueBehaviour" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity, $SmartBlockEntity$$Type} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ValueSettingsBoard} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBoard"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$BehaviourType} from "com.simibubi.create.foundation.blockEntity.behaviour.BehaviourType"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$ScrollValueBehaviour} from "com.simibubi.create.foundation.blockEntity.behaviour.scrollValue.ScrollValueBehaviour"
import {$ValueSettingsBehaviour$ValueSettings, $ValueSettingsBehaviour$ValueSettings$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueSettingsBehaviour$ValueSettings"
import {$ValueBoxTransform$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.ValueBoxTransform"

export class $MotorScrollValueBehaviour extends $ScrollValueBehaviour {
 "blockEntity": $SmartBlockEntity
 "label": $Component
static readonly "TYPE": $BehaviourType<($ScrollValueBehaviour)>
 "value": integer

constructor(label: $Component$$Type, be: $SmartBlockEntity$$Type, slot: $ValueBoxTransform$$Type)

public "betweenValidated"(min: integer, max: integer): void
public "getValueSettings"(): $ValueSettingsBehaviour$ValueSettings
public "createBoard"(player: $Player$$Type, hitResult: $BlockHitResult$$Type): $ValueSettingsBoard
public "setValueSettings"(player: $Player$$Type, valueSetting: $ValueSettingsBehaviour$ValueSettings$$Type, ctrlHeld: boolean): void
public "getClipboardKey"(): StringJS
public "formatSettings"(settings: $ValueSettingsBehaviour$ValueSettings$$Type): $MutableComponent
get "valueSettings"(): $ValueSettingsBehaviour$ValueSettings
get "clipboardKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorScrollValueBehaviour$$Type = ($MotorScrollValueBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MotorScrollValueBehaviour$$Original = $MotorScrollValueBehaviour;}
declare module "org.antarcticgardens.cna.content.electricity.wire.ElectricWireItem" {
import {$WireType, $WireType$$Type} from "org.antarcticgardens.cna.content.electricity.wire.WireType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $ElectricWireItem extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(properties: $Item$Properties$$Type, wireType: $WireType$$Type)

public static "newCopperWire"(properties: $Item$Properties$$Type): $ElectricWireItem
public static "newIronWire"(properties: $Item$Properties$$Type): $ElectricWireItem
public static "newGoldenWire"(properties: $Item$Properties$$Type): $ElectricWireItem
public static "newDiamondWire"(properties: $Item$Properties$$Type): $ElectricWireItem
public "getBoundConnector"(stack: $ItemStack$$Type): $BlockPos
public "getWireType"(): $WireType
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "useOn"(context: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(stack: $ItemStack$$Type, level: $Level$$Type, entity: $Entity$$Type, slotId: integer, isSelected: boolean): void
public "use"(level: $Level$$Type, player: $Player$$Type, usedHand: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "wireType"(): $WireType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricWireItem$$Type = ($ElectricWireItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricWireItem$$Original = $ElectricWireItem;}
declare module "org.antarcticgardens.cna.content.motor.variants.IMotorVariant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMotorVariant$$Interface {
get "maxCapacity"(): long
get "stress"(): float
get "speed"(): float
}

export class $IMotorVariant implements $IMotorVariant$$Interface {
 "getMaxCapacity"(): long
 "getStress"(): float
 "getSpeed"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMotorVariant$$Type = ($IMotorVariant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMotorVariant$$Original = $IMotorVariant;}
declare module "org.antarcticgardens.cna.content.energising.recipe.EnergisingRecipe$Serializer" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$EnergisingRecipeParams, $EnergisingRecipeParams$$Type} from "org.antarcticgardens.cna.content.energising.recipe.EnergisingRecipeParams"
import {$ProcessingRecipe$Factory, $ProcessingRecipe$Factory$$Type} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe$Factory"
import {$EnergisingRecipe} from "org.antarcticgardens.cna.content.energising.recipe.EnergisingRecipe"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$RecipeSerializer, $RecipeSerializer$$Type, $RecipeSerializer$$Interface} from "net.minecraft.world.item.crafting.RecipeSerializer"

export class $EnergisingRecipe$Serializer<R extends $EnergisingRecipe> implements $RecipeSerializer$$Interface<(R)> {
constructor(factory: $ProcessingRecipe$Factory$$Type<($EnergisingRecipeParams), (R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "factory"(): $ProcessingRecipe$Factory<($EnergisingRecipeParams), (R)>
public "codec"(): $MapCodec<(R)>
public static "register"<S extends $RecipeSerializer<(object)>, T extends $Recipe<(object)>>(arg0: StringJS, arg1: S): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergisingRecipe$Serializer$$Type<R> = ($EnergisingRecipe$Serializer<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergisingRecipe$Serializer$$Original<R> = $EnergisingRecipe$Serializer<(R)>;}
declare module "org.antarcticgardens.cna.content.motor.MotorBlockEntity" {
import {$GeneratingKineticBlockEntity} from "com.simibubi.create.content.kinetics.base.GeneratingKineticBlockEntity"
import {$List$$Type} from "java.util.List"
import {$MotorScrollValueBehaviour} from "org.antarcticgardens.cna.content.motor.MotorScrollValueBehaviour"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockEntityBuilder$BlockEntityFactory} from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IMotorVariant$$Type} from "org.antarcticgardens.cna.content.motor.variants.IMotorVariant"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MotorBlockEntity extends $GeneratingKineticBlockEntity implements $IHaveGoggleInformation$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "powered": boolean
 "needsPower": boolean
 "speedBehavior": $MotorScrollValueBehaviour
 "updateSpeed": boolean
 "reActivateSource": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg: $BlockEntityType$$Type<(never)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, variant: $IMotorVariant$$Type)

public "updateGeneratedRotation"(): void
public "addToGoggleTooltip"(tooltip: $List$$Type<($Component$$Type)>, isPlayerSneaking: boolean): boolean
public "calculateStressApplied"(): float
public "getGeneratedSpeed"(): float
public "calculateAddedStressCapacity"(): float
public "getDefaultSpeed"(): integer
public "addBehaviours"(behaviours: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "tick"(): void
public "initialize"(): void
public static "create"(variant: $IMotorVariant$$Type): $BlockEntityBuilder$BlockEntityFactory<($MotorBlockEntity)>
get "generatedSpeed"(): float
get "defaultSpeed"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorBlockEntity$$Type = ($MotorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MotorBlockEntity$$Original = $MotorBlockEntity;}
declare module "org.antarcticgardens.cna.content.heat.heater.HeaterBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlazeBurnerBlock$HeatLevel} from "com.simibubi.create.content.processing.burner.BlazeBurnerBlock$HeatLevel"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HeaterBlock extends $Block implements $EntityBlock$$Interface, $IWrenchable$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "STRENGTH": $EnumProperty<($BlazeBurnerBlock$HeatLevel)>
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
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
export type $HeaterBlock$$Type = ($HeaterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeaterBlock$$Original = $HeaterBlock;}
declare module "org.antarcticgardens.cna.content.motor.MotorBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$IRotate$SpeedLevel} from "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel"
import {$List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DirectionalKineticBlock} from "com.simibubi.create.content.kinetics.base.DirectionalKineticBlock"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MotorBlockEntity, $MotorBlockEntity$$Type} from "org.antarcticgardens.cna.content.motor.MotorBlockEntity"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$IRotate$$Interface} from "com.simibubi.create.content.kinetics.base.IRotate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntityEntry$$Type} from "com.tterrag.registrate.util.entry.BlockEntityEntry"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$IMotorVariant$$Type} from "org.antarcticgardens.cna.content.motor.variants.IMotorVariant"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $MotorBlock extends $DirectionalKineticBlock implements $IRotate$$Interface, $IBE$$Interface<($MotorBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$$Type, entry: $BlockEntityEntry$$Type<($MotorBlockEntity$$Type)>, variant: $IMotorVariant$$Type)

public "hasShaftTowards"(world: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, face: $Direction$$Type): boolean
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "getPreferredFacing"(context: $BlockPlaceContext$$Type): $Direction
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getRotationAxis"(blockState: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($MotorBlockEntity)>
public "getBlockEntityClass"(): $Class<($MotorBlockEntity)>
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg: $BlockState$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $CollisionContext$$Type): $VoxelShape
public "destroy"(arg: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "neighborChanged"(arg: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Block$$Type, arg5: $BlockPos$$Type, bl: boolean): void
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($MotorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($MotorBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MotorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MotorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MotorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "blockEntityType"(): $BlockEntityType<($MotorBlockEntity)>
get "blockEntityClass"(): $Class<($MotorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorBlock$$Type = ($MotorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MotorBlock$$Original = $MotorBlock;}
declare module "org.antarcticgardens.cna.content.electricity.generation.magnet.IMagneticBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMagneticBlock$$Interface {

(): float
get "strength"(): float
}

export class $IMagneticBlock implements $IMagneticBlock$$Interface {
 "getStrength"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMagneticBlock$$Type = (() => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMagneticBlock$$Original = $IMagneticBlock;}
declare module "org.antarcticgardens.cna.content.energising.recipe.EnergisingRecipe" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$List$$Type} from "java.util.List"
import {$IAssemblyRecipe$$Interface} from "com.simibubi.create.content.processing.sequenced.IAssemblyRecipe"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EnergisingRecipeParams, $EnergisingRecipeParams$$Type} from "org.antarcticgardens.cna.content.energising.recipe.EnergisingRecipeParams"
import {$SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$RecipeWrapper, $RecipeWrapper$$Type} from "net.neoforged.neoforge.items.wrapper.RecipeWrapper"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IRecipeTypeInfo$$Type} from "com.simibubi.create.foundation.recipe.IRecipeTypeInfo"
import {$SequencedAssemblySubCategory} from "com.simibubi.create.compat.jei.category.sequencedAssembly.SequencedAssemblySubCategory"
import {$ProcessingRecipe} from "com.simibubi.create.content.processing.recipe.ProcessingRecipe"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$Supplier} from "java.util.function.Supplier"
import {$Set$$Type} from "java.util.Set"

export class $EnergisingRecipe extends $ProcessingRecipe<($RecipeWrapper), ($EnergisingRecipeParams)> implements $IAssemblyRecipe$$Interface {
constructor(typeInfo: $IRecipeTypeInfo$$Type, params: $EnergisingRecipeParams$$Type)
constructor(params: $EnergisingRecipeParams$$Type)

public "getEnergyNeeded"(): integer
public "addRequiredMachines"(list: $Set$$Type<($ItemLike$$Type)>): void
public "addAssemblyIngredients"(list: $List$$Type<($Ingredient$$Type)>): void
public "getJEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
public "getDescriptionForAssembly"(): $Component
public static "load"(): void
public "test"(stack: $ItemStack$$Type): boolean
public "matches"(input: $RecipeWrapper$$Type, level: $Level$$Type): boolean
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "supportsAssembly"(): boolean
public "addAssemblyFluidIngredients"(arg0: $List$$Type<($SizedFluidIngredient$$Type)>): void
get "energyNeeded"(): integer
get "JEISubCategory"(): $Supplier<($Supplier<($SequencedAssemblySubCategory)>)>
get "descriptionForAssembly"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergisingRecipe$$Type = ($EnergisingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergisingRecipe$$Original = $EnergisingRecipe;}
declare module "org.antarcticgardens.cna.content.electricity.generation.coil.GeneratorCoilBlock" {
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
import {$GeneratorCoilBlockEntity, $GeneratorCoilBlockEntity$$Type} from "org.antarcticgardens.cna.content.electricity.generation.coil.GeneratorCoilBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
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
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GeneratorCoilBlock extends $RotatedPillarKineticBlock implements $IBE$$Interface<($GeneratorCoilBlockEntity)> {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "hasShaftTowards"(world: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, face: $Direction$$Type): boolean
public "getRotationAxis"(state: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($GeneratorCoilBlockEntity)>
public "getBlockEntityClass"(): $Class<($GeneratorCoilBlockEntity)>
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($GeneratorCoilBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($GeneratorCoilBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($GeneratorCoilBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($GeneratorCoilBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $GeneratorCoilBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($GeneratorCoilBlockEntity)>
get "blockEntityClass"(): $Class<($GeneratorCoilBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorCoilBlock$$Type = ($GeneratorCoilBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratorCoilBlock$$Original = $GeneratorCoilBlock;}
declare module "org.antarcticgardens.cna.content.nuclear.reactor.ReactorTransparentBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ReactorBlock} from "org.antarcticgardens.cna.content.nuclear.reactor.ReactorBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorTransparentBlock extends $ReactorBlock {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "propagatesSkylightDown"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): boolean
public "getShadeBrightness"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "skipRendering"(state: $BlockState$$Type, adjacentBlockState: $BlockState$$Type, side: $Direction$$Type): boolean
public "getVisualShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorTransparentBlock$$Type = ($ReactorTransparentBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorTransparentBlock$$Original = $ReactorTransparentBlock;}
declare module "org.antarcticgardens.cna.content.electricity.connector.ElectricalConnectorBlockEntity" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$WireType, $WireType$$Type} from "org.antarcticgardens.cna.content.electricity.wire.WireType"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$ElectricalNetwork, $ElectricalNetwork$$Type} from "org.antarcticgardens.cna.content.electricity.network.ElectricalNetwork"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ElectricalConnectorBlockEntity extends $BlockEntity implements $IHaveGoggleInformation$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(type: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, blockState: $BlockState$$Type)

public "getNetwork"(): $ElectricalNetwork
public "addToGoggleTooltip"(tooltip: $List$$Type<($Component$$Type)>, isPlayerSneaking: boolean): boolean
public "setNetwork"(network: $ElectricalNetwork$$Type): void
public "getConnectorPositions"(): $Map<($BlockPos), ($WireType)>
public "getSupportingBlockPos"(): $BlockPos
public "getConnectedConnectors"(): $Map<($ElectricalConnectorBlockEntity), ($WireType)>
public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "getUpdateTag"(registries: $HolderLookup$Provider$$Type): $CompoundTag
public "isConnected"(pos: $BlockPos$$Type): boolean
public "connect"(entity: $ElectricalConnectorBlockEntity$$Type, wireType: $WireType$$Type): void
public "disconnect"(entity: $ElectricalConnectorBlockEntity$$Type): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "network"(): $ElectricalNetwork
set "network"(value: $ElectricalNetwork$$Type)
get "connectorPositions"(): $Map<($BlockPos), ($WireType)>
get "supportingBlockPos"(): $BlockPos
get "connectedConnectors"(): $Map<($ElectricalConnectorBlockEntity), ($WireType)>
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricalConnectorBlockEntity$$Type = ($ElectricalConnectorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricalConnectorBlockEntity$$Original = $ElectricalConnectorBlockEntity;}
declare module "org.antarcticgardens.cna.content.electricity.generation.magnet.ImplementedMagnetBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$NonNullFunction} from "com.tterrag.registrate.util.nullness.NonNullFunction"
import {$IMagneticBlock$$Interface} from "org.antarcticgardens.cna.content.electricity.generation.magnet.IMagneticBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ImplementedMagnetBlock extends $Block implements $IMagneticBlock$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type, strength: integer)

public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public static "simple"(level: integer): $NonNullFunction<($BlockBehaviour$Properties), ($ImplementedMagnetBlock)>
public "getStrength"(): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "strength"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImplementedMagnetBlock$$Type = ($ImplementedMagnetBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImplementedMagnetBlock$$Original = $ImplementedMagnetBlock;}
declare module "org.antarcticgardens.cna.content.electricity.network.ElectricalNetwork" {
import {$List} from "java.util.List"
import {$NetworkPathManager} from "org.antarcticgardens.cna.content.electricity.network.NetworkPathManager"
import {$TransactionContext$$Type} from "org.antarcticgardens.esl.transaction.TransactionContext"
import {$Level} from "net.minecraft.world.level.Level"
import {$ElectricalConnectorBlockEntity, $ElectricalConnectorBlockEntity$$Type} from "org.antarcticgardens.cna.content.electricity.connector.ElectricalConnectorBlockEntity"

export class $ElectricalNetwork {
constructor(base: $ElectricalConnectorBlockEntity$$Type)

public "updateConsumersAndSources"(): void
public "getWorld"(): $Level
public "getNodes"(): $List<($ElectricalConnectorBlockEntity)>
public "getPathManager"(): $NetworkPathManager
public "insert"(from: $ElectricalConnectorBlockEntity$$Type, amount: long, txn: $TransactionContext$$Type): long
public "destroy"(): void
public "addNode"(node: $ElectricalConnectorBlockEntity$$Type): void
get "world"(): $Level
get "nodes"(): $List<($ElectricalConnectorBlockEntity)>
get "pathManager"(): $NetworkPathManager
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricalNetwork$$Type = ($ElectricalNetwork);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricalNetwork$$Original = $ElectricalNetwork;}
declare module "org.antarcticgardens.cna.content.nuclear.reactor.fuelacceptor.ReactorFuelAcceptorBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$ReactorBlock} from "org.antarcticgardens.cna.content.nuclear.reactor.ReactorBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorFuelAcceptorBlock extends $ReactorBlock implements $EntityBlock$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorFuelAcceptorBlock$$Type = ($ReactorFuelAcceptorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorFuelAcceptorBlock$$Original = $ReactorFuelAcceptorBlock;}
declare module "org.antarcticgardens.cna.content.nuclear.reactor.ReactorBlock" {
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

export class $ReactorBlock extends $Block implements $IWrenchable$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, movedByPiston: boolean): void
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
export type $ReactorBlock$$Type = ($ReactorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorBlock$$Original = $ReactorBlock;}
declare module "org.antarcticgardens.cna.content.motor.extension.MotorExtensionBlockEntity" {
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$IMotorExtensionVariant, $IMotorExtensionVariant$$Type} from "org.antarcticgardens.cna.content.motor.extension.variants.IMotorExtensionVariant"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntityBuilder$BlockEntityFactory} from "com.tterrag.registrate.builders.BlockEntityBuilder$BlockEntityFactory"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MotorExtensionBlockEntity extends $SmartBlockEntity {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg: $BlockEntityType$$Type<(never)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, variant: $IMotorExtensionVariant$$Type)

public "addBehaviours"(behaviours: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "tick"(): void
public "getMultiplier"(): float
public "getVariant"(): $IMotorExtensionVariant
public static "create"(variant: $IMotorExtensionVariant$$Type): $BlockEntityBuilder$BlockEntityFactory<($MotorExtensionBlockEntity)>
get "multiplier"(): float
get "variant"(): $IMotorExtensionVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MotorExtensionBlockEntity$$Type = ($MotorExtensionBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MotorExtensionBlockEntity$$Original = $MotorExtensionBlockEntity;}
declare module "org.antarcticgardens.cna.content.energising.EnergiserBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$EnergiserBlockEntity, $EnergiserBlockEntity$$Type} from "org.antarcticgardens.cna.content.energising.EnergiserBlockEntity"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$HorizontalKineticBlock} from "com.simibubi.create.content.kinetics.base.HorizontalKineticBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
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

export class $EnergiserBlock extends $HorizontalKineticBlock implements $IBE$$Interface<($EnergiserBlockEntity)> {
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
static readonly "HORIZONTAL_FACING": $Property<($Direction)>

constructor(properties: $BlockBehaviour$Properties$$Type, tier: integer)

public static "newBasic"(properties: $BlockBehaviour$Properties$$Type): $EnergiserBlock
public static "newAdvanced"(properties: $BlockBehaviour$Properties$$Type): $EnergiserBlock
public static "newReinforced"(properties: $BlockBehaviour$Properties$$Type): $EnergiserBlock
public "hasShaftTowards"(world: $LevelReader$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, face: $Direction$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(stack: $ItemStack$$Type, context: $Item$TooltipContext$$Type, tooltipComponents: $List$$Type<($Component$$Type)>, tooltipFlag: $TooltipFlag$$Type): void
public "getRotationAxis"(state: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($EnergiserBlockEntity)>
public "getBlockEntityClass"(): $Class<($EnergiserBlockEntity)>
public "getShape"(state: $BlockState$$Type, worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "getCapacity"(tier: integer): long
public static "getStrength"(tier: integer): integer
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($EnergiserBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($EnergiserBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($EnergiserBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($EnergiserBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $EnergiserBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($EnergiserBlockEntity)>
get "blockEntityClass"(): $Class<($EnergiserBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergiserBlock$$Type = ($EnergiserBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergiserBlock$$Original = $EnergiserBlock;}
declare module "org.antarcticgardens.cna.content.motor.MotorBlockItem" {
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $MotorBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(block: $Block$$Type, properties: $Item$Properties$$Type)

public "initializeClient"(consumer: $Consumer$$Type<($IClientItemExtensions)>): void
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
export type $MotorBlockItem$$Type = ($MotorBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MotorBlockItem$$Original = $MotorBlockItem;}
