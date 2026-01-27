declare module "com.tom.createores.block.entity.ExcavatingBlockEntityImpl" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ExcavatingRecipe, $ExcavatingRecipe$$Type} from "com.tom.createores.recipe.ExcavatingRecipe"
import {$ExcavatingBlockEntity} from "com.tom.createores.block.entity.ExcavatingBlockEntity"
import {$IOBlockType$$Type} from "com.tom.createores.util.IOBlockType"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ExcavatingBlockEntityImpl<R extends $ExcavatingRecipe> extends $ExcavatingBlockEntity<(R)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: R): void
public "getCaps"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $IOBlockType$$Type): T
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingBlockEntityImpl$$Type<R> = ($ExcavatingBlockEntityImpl<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExcavatingBlockEntityImpl$$Original<R> = $ExcavatingBlockEntityImpl<(R)>;}
declare module "com.tom.createores.block.KineticInputBlock" {
import {$KineticBlock} from "com.simibubi.create.content.kinetics.base.KineticBlock"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$IRotate$SpeedLevel} from "com.simibubi.create.content.kinetics.base.IRotate$SpeedLevel"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$KineticInputBlockEntity, $KineticInputBlockEntity$$Type} from "com.tom.createores.block.entity.KineticInputBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$MultiblockPart$MultiblockGhostPart$$Interface} from "com.tom.createores.block.MultiblockPart$MultiblockGhostPart"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $KineticInputBlock extends $KineticBlock implements $MultiblockPart$MultiblockGhostPart$$Interface, $IBE$$Interface<($KineticInputBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($KineticInputBlock)>
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
static readonly "SHAFT_FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($KineticInputBlockEntity)>
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getMinimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
public "getBlockEntityClass"(): $Class<($KineticInputBlockEntity)>
public "getParentDir"(arg0: $BlockState$$Type): $Direction
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "destroyParent"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): void
public static "makeCtx"(arg0: $UseOnContext$$Type, arg1: $BlockPos$$Type): $UseOnContext
public "pickBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "hasParent"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($KineticInputBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($KineticInputBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($KineticInputBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($KineticInputBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $KineticInputBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticInputBlockEntity)>
get "minimumRequiredSpeedLevel"(): $IRotate$SpeedLevel
get "blockEntityClass"(): $Class<($KineticInputBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticInputBlock$$Type = ($KineticInputBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticInputBlock$$Original = $KineticInputBlock;}
declare module "com.tom.createores.block.MultiblockPart$MultiblockMainPart" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$MultiblockPart$$Interface} from "com.tom.createores.block.MultiblockPart"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MultiblockPart$MultiblockMainPart$MultiblockPartType, $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Type} from "com.tom.createores.block.MultiblockPart$MultiblockMainPart$MultiblockPartType"

export interface $MultiblockPart$MultiblockMainPart$$Interface extends $MultiblockPart$$Interface {
get "multiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
}

export class $MultiblockPart$MultiblockMainPart implements $MultiblockPart$MultiblockMainPart$$Interface {
 "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
 "getMultiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
 "getBlockRotation"(arg0: $Direction$$Type, arg1: $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Type): $Direction
 "getPartTypeAt"(arg0: $Direction$$Type, arg1: integer, arg2: integer, arg3: integer): $MultiblockPart$MultiblockMainPart$MultiblockPartType
 "getGhostDirection"(arg0: $Direction$$Type, arg1: integer, arg2: integer, arg3: integer): $Direction
 "getSize"(arg0: $Direction$$Type): $Vec3i
 "getStart"(arg0: $Direction$$Type): $Vec3i
static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
 "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
 "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
 "pickBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPart$MultiblockMainPart$$Type = ($MultiblockPart$MultiblockMainPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockPart$MultiblockMainPart$$Original = $MultiblockPart$MultiblockMainPart;}
declare module "com.tom.createores.block.SampleDrillBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
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
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$SampleDrillBlockEntity, $SampleDrillBlockEntity$$Type} from "com.tom.createores.block.entity.SampleDrillBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SampleDrillBlock extends $Block implements $IBE$$Interface<($SampleDrillBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SampleDrillBlock)>
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

public "getBlockEntityType"(): $BlockEntityType<($SampleDrillBlockEntity)>
public "getBlockEntityClass"(): $Class<($SampleDrillBlockEntity)>
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($SampleDrillBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($SampleDrillBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SampleDrillBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($SampleDrillBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $SampleDrillBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SampleDrillBlockEntity)>
get "blockEntityClass"(): $Class<($SampleDrillBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleDrillBlock$$Type = ($SampleDrillBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SampleDrillBlock$$Original = $SampleDrillBlock;}
declare module "com.tom.createores.block.entity.IOBlockEntity" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IOBlockEntity extends $BlockEntity implements $IHaveGoggleInformation$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getCapability"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $Direction$$Type): T
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOBlockEntity$$Type = ($IOBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOBlockEntity$$Original = $IOBlockEntity;}
declare module "com.tom.createores.block.MultiblockController" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$MultiblockPart$MultiblockMainPart$$Interface} from "com.tom.createores.block.MultiblockPart$MultiblockMainPart"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MultiblockPart$MultiblockMainPart$MultiblockPartType, $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Type} from "com.tom.createores.block.MultiblockPart$MultiblockMainPart$MultiblockPartType"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MultiblockController extends $Block implements $MultiblockPart$MultiblockMainPart$$Interface {
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
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "pickBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getMultiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
public "getBlockRotation"(arg0: $Direction$$Type, arg1: $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Type): $Direction
public "getPartTypeAt"(arg0: $Direction$$Type, arg1: integer, arg2: integer, arg3: integer): $MultiblockPart$MultiblockMainPart$MultiblockPartType
public "getGhostDirection"(arg0: $Direction$$Type, arg1: integer, arg2: integer, arg3: integer): $Direction
public "getSize"(arg0: $Direction$$Type): $Vec3i
public "getStart"(arg0: $Direction$$Type): $Vec3i
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "multiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockController$$Type = ($MultiblockController);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockController$$Original = $MultiblockController;}
declare module "com.tom.createores.block.entity.IDrill" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $IDrill$$Interface {
get "YOffset"(): float
get "facing"(): $Direction
get "below"(): $BlockPos
get "drill"(): $ItemStack
get "drillOffset"(): float
get "prevRotation"(): float
get "rotation"(): float
}

export class $IDrill implements $IDrill$$Interface {
 "shouldRenderShaft"(): boolean
 "getYOffset"(): float
 "getFacing"(): $Direction
 "getBelow"(): $BlockPos
 "getDrill"(): $ItemStack
 "shouldRenderRubble"(): boolean
 "getDrillOffset"(): float
 "getPrevRotation"(): float
 "getRotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrill$$Type = ($IDrill);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrill$$Original = $IDrill;}
declare module "com.tom.createores.block.entity.SampleDrillBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveHoveringInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveHoveringInformation"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$IDrill$$Interface} from "com.tom.createores.block.entity.IDrill"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SampleDrillBlockEntity extends $SmartBlockEntity implements $IHaveGoggleInformation$$Interface, $IHaveHoveringInformation$$Interface, $IDrill$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "DRILL_TIME": integer

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "shouldRenderShaft"(): boolean
public "getYOffset"(): float
public "clicked"(arg0: $Player$$Type): void
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "lazyTick"(): void
public "getFacing"(): $Direction
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getBelow"(): $BlockPos
public "getDrill"(): $ItemStack
public "clickedWithItem"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): boolean
public "setDrilling"(arg0: boolean): void
public "setAirTankLevel"(arg0: float): void
public "shouldRenderRubble"(): boolean
public "getDrillOffset"(): float
public "getPrevRotation"(): float
public "tick"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getRotation"(): float
public "setProgress"(arg0: integer): void
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "addToTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "YOffset"(): float
get "facing"(): $Direction
get "below"(): $BlockPos
get "drill"(): $ItemStack
set "drilling"(value: boolean)
set "airTankLevel"(value: float)
get "drillOffset"(): float
get "prevRotation"(): float
get "rotation"(): float
set "progress"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SampleDrillBlockEntity$$Type = ($SampleDrillBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SampleDrillBlockEntity$$Original = $SampleDrillBlockEntity;}
declare module "com.tom.createores.block.MultiblockBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$MultiblockBlockEntity, $MultiblockBlockEntity$$Type} from "com.tom.createores.block.entity.MultiblockBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$MultiblockPart$MultiblockGhostPart$$Interface} from "com.tom.createores.block.MultiblockPart$MultiblockGhostPart"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MultiblockBlock extends $Block implements $MultiblockPart$MultiblockGhostPart$$Interface, $IBE$$Interface<($MultiblockBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($MultiblockBlock)>
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

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getBlockEntityType"(): $BlockEntityType<($MultiblockBlockEntity)>
public "getBlockEntityClass"(): $Class<($MultiblockBlockEntity)>
public "getParentDir"(arg0: $BlockState$$Type): $Direction
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "destroyParent"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): void
public static "makeCtx"(arg0: $UseOnContext$$Type, arg1: $BlockPos$$Type): $UseOnContext
public "pickBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "hasParent"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($MultiblockBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($MultiblockBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MultiblockBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MultiblockBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MultiblockBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($MultiblockBlockEntity)>
get "blockEntityClass"(): $Class<($MultiblockBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlock$$Type = ($MultiblockBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockBlock$$Original = $MultiblockBlock;}
declare module "com.tom.createores.block.IOBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$IOBlockEntity, $IOBlockEntity$$Type} from "com.tom.createores.block.entity.IOBlockEntity"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IOBlockType} from "com.tom.createores.util.IOBlockType"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$MultiblockPart$MultiblockGhostPart$$Interface} from "com.tom.createores.block.MultiblockPart$MultiblockGhostPart"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $IOBlock extends $BaseEntityBlock implements $MultiblockPart$MultiblockGhostPart$$Interface, $IBE$$Interface<($IOBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($IOBlock)>
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
static readonly "TYPE": $EnumProperty<($IOBlockType)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "getVisualShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getBlockEntityType"(): $BlockEntityType<($IOBlockEntity)>
public "getBlockEntityClass"(): $Class<($IOBlockEntity)>
public "getParentDir"(arg0: $BlockState$$Type): $Direction
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "destroyParent"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): void
public static "makeCtx"(arg0: $UseOnContext$$Type, arg1: $BlockPos$$Type): $UseOnContext
public "pickBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "hasParent"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($IOBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($IOBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($IOBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($IOBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $IOBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($IOBlockEntity)>
get "blockEntityClass"(): $Class<($IOBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOBlock$$Type = ($IOBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOBlock$$Original = $IOBlock;}
declare module "com.tom.createores.block.ExtractorBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$ExtractorBlockEntity, $ExtractorBlockEntity$$Type} from "com.tom.createores.block.entity.ExtractorBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MultiblockPart$MultiblockMainPart$MultiblockPartType, $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Type} from "com.tom.createores.block.MultiblockPart$MultiblockMainPart$MultiblockPartType"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$MultiblockController} from "com.tom.createores.block.MultiblockController"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ExtractorBlock extends $MultiblockController implements $IBE$$Interface<($ExtractorBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ExtractorBlock)>
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

public "getBlockEntityType"(): $BlockEntityType<($ExtractorBlockEntity)>
public "getBlockEntityClass"(): $Class<($ExtractorBlockEntity)>
public "getMultiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
public "getBlockRotation"(arg0: $Direction$$Type, arg1: $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Type): $Direction
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "getStart"(arg0: $Direction$$Type): $Vec3i
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($ExtractorBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($ExtractorBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ExtractorBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($ExtractorBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ExtractorBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($ExtractorBlockEntity)>
get "blockEntityClass"(): $Class<($ExtractorBlockEntity)>
get "multiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractorBlock$$Type = ($ExtractorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtractorBlock$$Original = $ExtractorBlock;}
declare module "com.tom.createores.block.DrillBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$MultiblockPart$MultiblockMainPart$MultiblockPartType, $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Type} from "com.tom.createores.block.MultiblockPart$MultiblockMainPart$MultiblockPartType"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$DrillBlockEntity, $DrillBlockEntity$$Type} from "com.tom.createores.block.entity.DrillBlockEntity"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$MultiblockController} from "com.tom.createores.block.MultiblockController"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $DrillBlock extends $MultiblockController implements $IBE$$Interface<($DrillBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DrillBlock)>
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

public "getBlockEntityType"(): $BlockEntityType<($DrillBlockEntity)>
public "getBlockEntityClass"(): $Class<($DrillBlockEntity)>
public "getMultiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
public "getBlockRotation"(arg0: $Direction$$Type, arg1: $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Type): $Direction
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "getStart"(arg0: $Direction$$Type): $Vec3i
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($DrillBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($DrillBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($DrillBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($DrillBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $DrillBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($DrillBlockEntity)>
get "blockEntityClass"(): $Class<($DrillBlockEntity)>
get "multiblockLayout"(): ((($MultiblockPart$MultiblockMainPart$MultiblockPartType)[])[])[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBlock$$Type = ($DrillBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillBlock$$Original = $DrillBlock;}
declare module "com.tom.createores.block.entity.MultiblockBlockEntity" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$List$$Type} from "java.util.List"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiblockBlockEntity extends $BlockEntity implements $IHaveGoggleInformation$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBlockEntity$$Type = ($MultiblockBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockBlockEntity$$Original = $MultiblockBlockEntity;}
declare module "com.tom.createores.block.entity.ExtractorBlockEntity" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IOBlockType$$Type} from "com.tom.createores.util.IOBlockType"
import {$ExtractorRecipe} from "com.tom.createores.recipe.ExtractorRecipe"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ExcavatingBlockEntityImpl} from "com.tom.createores.block.entity.ExcavatingBlockEntityImpl"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ExtractorBlockEntity extends $ExcavatingBlockEntityImpl<($ExtractorRecipe)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "getCaps"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $IOBlockType$$Type): T
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractorBlockEntity$$Type = ($ExtractorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtractorBlockEntity$$Original = $ExtractorBlockEntity;}
declare module "com.tom.createores.block.entity.MultiblockCapHandler" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IHaveGoggleInformation$$Interface} from "com.simibubi.create.api.equipment.goggles.IHaveGoggleInformation"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IOBlockType$$Type} from "com.tom.createores.util.IOBlockType"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$MultiblockCapHandler$Kinetic$$Type} from "com.tom.createores.block.entity.MultiblockCapHandler$Kinetic"

export interface $MultiblockCapHandler$$Interface extends $IHaveGoggleInformation$$Interface {
}

export class $MultiblockCapHandler implements $MultiblockCapHandler$$Interface {
 "getCaps"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $IOBlockType$$Type): T
 "dropInv"(): void
 "addKinetic"(arg0: $MultiblockCapHandler$Kinetic$$Type): void
 "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
 "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
 "getIcon"(arg0: boolean): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockCapHandler$$Type = ($MultiblockCapHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockCapHandler$$Original = $MultiblockCapHandler;}
declare module "com.tom.createores.block.entity.ExcavatingBlockEntity" {
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ExcavatingRecipe, $ExcavatingRecipe$$Type} from "com.tom.createores.recipe.ExcavatingRecipe"
import {$IOBlockType$$Type} from "com.tom.createores.util.IOBlockType"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$MultiblockCapHandler$Kinetic$$Type} from "com.tom.createores.block.entity.MultiblockCapHandler$Kinetic"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IDrill$$Interface} from "com.tom.createores.block.entity.IDrill"
import {$MultiblockCapHandler$$Interface} from "com.tom.createores.block.entity.MultiblockCapHandler"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $ExcavatingBlockEntity<R extends $ExcavatingRecipe> extends $SmartBlockEntity implements $MultiblockCapHandler$$Interface, $IDrill$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

public "shouldRenderShaft"(): boolean
public "getYOffset"(): float
public "addBehaviours"(arg0: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "lazyTick"(): void
public "getFacing"(): $Direction
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: R): void
public "getBelow"(): $BlockPos
public "getDrill"(): $ItemStack
public "updateRecipe"(): void
public "dropInv"(): void
public "addKinetic"(arg0: $MultiblockCapHandler$Kinetic$$Type): void
public "shouldRenderRubble"(): boolean
public "getDrillOffset"(): float
public "getPrevRotation"(): float
public "tick"(): void
public "initialize"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
public "getRotation"(): float
public "onClick"(arg0: $Player$$Type): $InteractionResult
public "onClick"(arg0: $Player$$Type, arg1: $InteractionHand$$Type): $ItemInteractionResult
public "getCaps"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $IOBlockType$$Type): T
public "containedFluidTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean, arg2: $IFluidHandler$$Type): boolean
public "getIcon"(arg0: boolean): $ItemStack
get "YOffset"(): float
get "facing"(): $Direction
get "below"(): $BlockPos
get "drill"(): $ItemStack
get "drillOffset"(): float
get "prevRotation"(): float
get "rotation"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExcavatingBlockEntity$$Type<R> = ($ExcavatingBlockEntity<(R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExcavatingBlockEntity$$Original<R> = $ExcavatingBlockEntity<(R)>;}
declare module "com.tom.createores.block.MultiblockPart$MultiblockGhostPart" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$MultiblockPart$$Interface} from "com.tom.createores.block.MultiblockPart"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $MultiblockPart$MultiblockGhostPart$$Interface extends $MultiblockPart$$Interface {

(arg0: $BlockState): $Direction$$Type
}

export class $MultiblockPart$MultiblockGhostPart implements $MultiblockPart$MultiblockGhostPart$$Interface {
 "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
 "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
 "getParentDir"(arg0: $BlockState$$Type): $Direction
 "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
 "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
 "destroyParent"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): void
static "makeCtx"(arg0: $UseOnContext$$Type, arg1: $BlockPos$$Type): $UseOnContext
 "pickBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
 "hasParent"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPart$MultiblockGhostPart$$Type = ((arg0: $BlockState) => $Direction$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockPart$MultiblockGhostPart$$Original = $MultiblockPart$MultiblockGhostPart;}
declare module "com.tom.createores.block.MultiblockPart$MultiblockMainPart$MultiblockPartType" {
import {$Enum} from "java.lang.Enum"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiblockPart$MultiblockMainPart$MultiblockPartType extends $Enum<($MultiblockPart$MultiblockMainPart$MultiblockPartType)> {
static readonly "BLANK": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "FLUID_OUT": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "FLUID_IN": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "KINETIC": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "MAIN": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "ITEM_OUT": $MultiblockPart$MultiblockMainPart$MultiblockPartType
static readonly "ITEM_IN": $MultiblockPart$MultiblockMainPart$MultiblockPartType

public static "values"(): ($MultiblockPart$MultiblockMainPart$MultiblockPartType)[]
public static "valueOf"(arg0: StringJS): $MultiblockPart$MultiblockMainPart$MultiblockPartType
public "getBlockState"(arg0: $Direction$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Type = (("blank") | ("main") | ("kinetic") | ("item_in") | ("item_out") | ("fluid_in") | ("fluid_out"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockPart$MultiblockMainPart$MultiblockPartType$$Original = $MultiblockPart$MultiblockMainPart$MultiblockPartType;}
declare module "com.tom.createores.block.entity.MultiblockCapHandler$Kinetic" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MultiblockCapHandler$Kinetic$$Interface {
get "rotationSpeed"(): float
set "stress"(value: float)
}

export class $MultiblockCapHandler$Kinetic implements $MultiblockCapHandler$Kinetic$$Interface {
 "getRotationSpeed"(): float
 "setStress"(arg0: float): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockCapHandler$Kinetic$$Type = ($MultiblockCapHandler$Kinetic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockCapHandler$Kinetic$$Original = $MultiblockCapHandler$Kinetic;}
declare module "com.tom.createores.block.MultiblockPart" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$NonNullUnaryOperator} from "com.tterrag.registrate.util.nullness.NonNullUnaryOperator"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $MultiblockPart$$Interface extends $IWrenchable$$Interface {
}

export class $MultiblockPart implements $MultiblockPart$$Interface {
static "propsGhost"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
 "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
 "onActivate"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
static "props"(): $NonNullUnaryOperator<($BlockBehaviour$Properties)>
 "pickBlock"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockPart$$Type = ($MultiblockPart);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockPart$$Original = $MultiblockPart;}
declare module "com.tom.createores.block.entity.KineticInputBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MultiblockCapHandler$Kinetic$$Interface} from "com.tom.createores.block.entity.MultiblockCapHandler$Kinetic"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $KineticInputBlockEntity extends $KineticBlockEntity implements $MultiblockCapHandler$Kinetic$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getRotationSpeed"(): float
public "addToGoggleTooltip"(arg0: $List$$Type<($Component$$Type)>, arg1: boolean): boolean
public "calculateStressApplied"(): float
public "calculateAddedStressCapacity"(): float
public "setStress"(arg0: float): void
public "initialize"(): void
get "rotationSpeed"(): float
set "stress"(value: float)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $KineticInputBlockEntity$$Type = ($KineticInputBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $KineticInputBlockEntity$$Original = $KineticInputBlockEntity;}
declare module "com.tom.createores.block.entity.DrillBlockEntity" {
import {$DrillingRecipe} from "com.tom.createores.recipe.DrillingRecipe"
import {$BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IOBlockType$$Type} from "com.tom.createores.util.IOBlockType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ExcavatingBlockEntityImpl} from "com.tom.createores.block.entity.ExcavatingBlockEntityImpl"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DrillBlockEntity extends $ExcavatingBlockEntityImpl<($DrillingRecipe)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getCaps"<T>(arg0: $BlockCapability$$Type<(T), ($Direction$$Type)>, arg1: $IOBlockType$$Type): T
public "dropInv"(): void
public "write"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type, arg2: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrillBlockEntity$$Type = ($DrillBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrillBlockEntity$$Original = $DrillBlockEntity;}
