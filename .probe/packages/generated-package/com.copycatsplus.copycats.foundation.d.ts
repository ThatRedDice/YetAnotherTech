declare module "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IWrenchable$$Interface} from "com.simibubi.create.content.equipment.wrench.IWrenchable"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$TransformableBlock$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlock"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $ICopycatBlock$$Interface extends $IWrenchable$$Interface, $IStateType$$Interface, $TransformableBlock$$Interface {
}

export class $ICopycatBlock implements $ICopycatBlock$$Interface {
 "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
 "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
 "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
 "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
 "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
 "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
 "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
 "isAcceptedRegardless"(material: $BlockState$$Type): boolean
 "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
 "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
 "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
static "wrappedColor"(): $BlockColor
 "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
 "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
 "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
 "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
 "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "stateType"(): $StateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlock$$Type = ($ICopycatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICopycatBlock$$Original = $ICopycatBlock;}
declare module "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking" {
import {$Optional} from "java.util.Optional"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ICustomCTBlocking$$Interface {
}

export class $ICustomCTBlocking implements $ICustomCTBlocking$$Interface {
 "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
 "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomCTBlocking$$Type = ($ICustomCTBlocking);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICustomCTBlocking$$Original = $ICustomCTBlocking;}
declare module "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity$$Type, $ICopycatBlockEntity$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ICopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CCCopycatBlockEntity extends $SmartBlockEntity implements $ICopycatBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(type: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "blockHolderGetter"(): $HolderGetter<($Block)>
public "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
public "addBehaviours"(behaviours: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "writeSafe"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "getConsumedItem"(): $ItemStack
public "isCTEnabled"(): boolean
public "setMaterialInternal"(material: $BlockState$$Type): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "getLevel"(): $Level
public "setLevel"(level: $Level$$Type): void
public "write"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "onLoad"(): void
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "setBlockState"(blockState: $BlockState$$Type): void
public "getMaterial"(): $BlockState
public "getModelData"(): $ModelData
public "notifyUpdate"(): void
public static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "hasCustomMaterial"(): boolean
public "setMaterial"(blockState: $BlockState$$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public "getBlock"(): $ICopycatBlock
public "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
public "init"(): void
public static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
public static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "accept"(other: $BlockEntity$$Type): void
get "consumedItem"(): $ItemStack
get "CTEnabled"(): boolean
set "materialInternal"(value: $BlockState$$Type)
set "consumedItemInternal"(value: $ItemStack$$Type)
set "CTEnabledInternal"(value: boolean)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "blockState"(value: $BlockState$$Type)
get "material"(): $BlockState
get "modelData"(): $ModelData
set "consumedItem"(value: $ItemStack$$Type)
set "material"(value: $BlockState$$Type)
set "CTEnabled"(value: boolean)
get "block"(): $ICopycatBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCCopycatBlockEntity$$Type = ($CCCopycatBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CCCopycatBlockEntity$$Original = $CCCopycatBlockEntity;}
declare module "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState" {
import {$List} from "java.util.List"
import {$CopycatTransformableState$Part} from "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState$Part"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CopycatTransformableState<T> {
 "parts": $List<($CopycatTransformableState$Part<(T)>)>

constructor()

public "untransform"(transform: $StructureTransform$$Type): $CopycatTransformableState<(T)>
public "addPart"(x: integer, y: integer, z: integer): $CopycatTransformableState$Part<(T)>
public "transform"(transform: $StructureTransform$$Type): $CopycatTransformableState<(T)>
public static "create"<T>(consumer: $Consumer$$Type<($CopycatTransformableState<(T)>)>): $CopycatTransformableState<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTransformableState$$Type<T> = ($CopycatTransformableState<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatTransformableState$$Original<T> = $CopycatTransformableState<(T)>;}
declare module "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState$Part" {
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"

export class $CopycatTransformableState$Part<T> {
 "data": T
 "vector": $Vec3i

constructor(x: integer, y: integer, z: integer)

public "getFacing"(): $Direction
public "isRight"(facing: $Direction$$Type): boolean
public "untransform"(transform: $StructureTransform$$Type): $CopycatTransformableState$Part<(T)>
public "setData"(data: T): $CopycatTransformableState$Part<(T)>
public "getData"(): T
public "transform"(transform: $StructureTransform$$Type): $CopycatTransformableState$Part<(T)>
public "isTop"(): boolean
public "rotateY"(facing: $Direction$$Type, origin: $Direction$$Type): $CopycatTransformableState$Part<(T)>
public "rotateY"(facing: $Direction$$Type): $CopycatTransformableState$Part<(T)>
public "getHorizontalFacing"(): $Direction
get "facing"(): $Direction
get "top"(): boolean
get "horizontalFacing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTransformableState$Part$$Type<T> = ($CopycatTransformableState$Part<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatTransformableState$Part$$Original<T> = $CopycatTransformableState$Part<(T)>;}
declare module "com.copycatsplus.copycats.foundation.copycat.IStateType" {
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"

/**
 * 
 * @deprecated
 */
export interface $IStateType$$Interface {
}

export class $IStateType implements $IStateType$$Interface {
 "stateType"(): $StateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStateType$$Type = ($IStateType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStateType$$Original = $IStateType;}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.MultiStateCopycatBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$MultiStateCopycatBlockEntity, $MultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MultiStateCopycatBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IBlockExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Set} from "java.util.Set"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$IMultiStateCopycatBlock$$Type, $IMultiStateCopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MultiStateCopycatBlock extends $Block implements $IMultiStateCopycatBlock$$Interface, $IBE$$Interface<($MultiStateCopycatBlockEntity)>, $IBlockExtension$$Interface {
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

public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "getAppearance"(state: $BlockState$$Type, renderView: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, sourceState: $BlockState$$Type, sourcePos: $BlockPos$$Type): $BlockState
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$$Type, p_153213_: $BlockState$$Type, p_153214_: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($MultiStateCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($MultiStateCopycatBlockEntity)>
public "transform"(arg0: $BlockState$$Type, arg1: $StructureTransform$$Type): $BlockState
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, state: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "canOcclude"(property: StringJS, level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "canConnectTexturesToward"(property: StringJS, reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "getAcceptedBlockState"(property: StringJS, pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $IMultiStateCopycatBlockEntity
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "stateType"(): $StateType
public "getPartialFaceShape"(arg0: $BlockGetter$$Type, arg1: $BlockState$$Type, arg2: StringJS, arg3: $Direction$$Type): $VoxelShape
public "defaultProperty"(): StringJS
public "vectorScale"(arg0: $BlockState$$Type): $Vec3i
public "getVectorFromProperty"(arg0: $BlockState$$Type, arg1: StringJS): $Vec3i
public "partExists"(arg0: $BlockState$$Type, arg1: StringJS): boolean
public "storageProperties"(): $Set<(StringJS)>
public "transformStorage"(arg0: $BlockState$$Type, arg1: $IMultiStateCopycatBlockEntity$$Type, arg2: $StructureTransform$$Type): void
public "getPropertyFromRender"(renderingProperty: StringJS, state: $BlockState$$Type, level: $BlockGetter$$Type, vector: $Vec3i$$Type, blockPos: $BlockPos$$Type): StringJS
public "fillEmptyParts"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, material: $BlockState$$Type): void
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public "getPropertyFromInteraction"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $Vec3i$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type, arg5: $Vec3$$Type): StringJS
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hit: $BlockHitResult$$Type, targetingSolid: boolean): StringJS
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hitVec: $Vec3$$Type, face: $Direction$$Type, targetingSolid: boolean): StringJS
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getColorIndex"(arg0: StringJS): integer
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($MultiStateCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($MultiStateCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MultiStateCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($MultiStateCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $MultiStateCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($MultiStateCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($MultiStateCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiStateCopycatBlock$$Type = ($MultiStateCopycatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiStateCopycatBlock$$Original = $MultiStateCopycatBlock;}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$MaterialItemStorage, $MaterialItemStorage$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"
import {$ICopycatBlockEntity$$Type, $ICopycatBlockEntity$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ICopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IMultiStateCopycatBlockEntity$$Interface extends $ICopycatBlockEntity$$Interface {
get "consumedItem"(): $ItemStack
get "CTEnabled"(): boolean
set "materialInternal"(value: $BlockState$$Type)
set "consumedItemInternal"(value: $ItemStack$$Type)
set "CTEnabledInternal"(value: boolean)
get "materialItemStorage"(): $MaterialItemStorage
set "materialItemStorageInternal"(value: $MaterialItemStorage$$Type)
get "block"(): $ICopycatBlock
get "material"(): $BlockState
set "consumedItem"(value: $ItemStack$$Type)
set "material"(value: $BlockState$$Type)
set "CTEnabled"(value: boolean)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "blockState"(value: $BlockState$$Type)
}

export class $IMultiStateCopycatBlockEntity implements $IMultiStateCopycatBlockEntity$$Interface {
 "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
static "writeSafe"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
 "setConsumedItem"(property: StringJS, itemStack: $ItemStack$$Type): void
 "getConsumedItem"(): $ItemStack
 "hasCustomMaterial"(): boolean
 "setMaterial"(property: StringJS, blockState: $BlockState$$Type): void
 "cycleMaterial"(property: StringJS): boolean
 "isCTEnabled"(): boolean
 "setMaterialInternal"(material: $BlockState$$Type): void
 "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
 "setCTEnabledInternal"(value: boolean): void
 "getMaterialItemStorage"(): $MaterialItemStorage
 "setEnableCT"(property: StringJS, value: boolean): void
 "setMaterialItemStorageInternal"(arg0: $MaterialItemStorage$$Type): void
 "getBlock"(): $ICopycatBlock
 "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
 "init"(): void
static "write"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
static "read"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
 "getMaterial"(): $BlockState
 "notifyUpdate"(): void
 "blockHolderGetter"(): $HolderGetter<($Block)>
static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
 "setConsumedItem"(stack: $ItemStack$$Type): void
 "setMaterial"(blockState: $BlockState$$Type): void
 "cycleMaterial"(): boolean
 "setCTEnabled"(value: boolean): void
 "getLevel"(): $Level
 "setLevel"(arg0: $Level$$Type): void
static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
 "accept"(other: $BlockEntity$$Type): void
 "onLoad"(): void
 "getBlockPos"(): $BlockPos
 "getBlockState"(): $BlockState
 "setBlockState"(arg0: $BlockState$$Type): void
 "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateCopycatBlockEntity$$Type = ($IMultiStateCopycatBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiStateCopycatBlockEntity$$Original = $IMultiStateCopycatBlockEntity;}
declare module "com.copycatsplus.copycats.foundation.copycat.StateType" {
import {$Enum} from "java.lang.Enum"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"

/**
 * 
 * @deprecated
 */
export class $StateType extends $Enum<($StateType)> {
static readonly "SINGULAR": $StateType
static readonly "MULTI": $StateType

public static "getTypeFromBlock"(block: $Block$$Type): $StateType
public static "values"(): ($StateType)[]
public static "valueOf"(name: StringJS): $StateType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StateType$$Type = (("singular") | ("multi"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StateType$$Original = $StateType;}
declare module "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$TransformableBlockEntity$$Interface} from "com.simibubi.create.api.contraption.transformable.TransformableBlockEntity"
import {$IMergeableBE$$Interface} from "com.simibubi.create.foundation.blockEntity.IMergeableBE"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$SpecialBlockEntityItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockEntityItemRequirement"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ICopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$PartialSafeNBT$$Interface} from "com.simibubi.create.api.schematic.nbt.PartialSafeNBT"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ICopycatBlockEntity$$Interface extends $SpecialBlockEntityItemRequirement$$Interface, $TransformableBlockEntity$$Interface, $PartialSafeNBT$$Interface, $IMergeableBE$$Interface {
set "consumedItem"(value: $ItemStack$$Type)
get "consumedItem"(): $ItemStack
set "material"(value: $BlockState$$Type)
get "CTEnabled"(): boolean
set "CTEnabled"(value: boolean)
set "materialInternal"(value: $BlockState$$Type)
set "consumedItemInternal"(value: $ItemStack$$Type)
set "CTEnabledInternal"(value: boolean)
get "block"(): $ICopycatBlock
get "level"(): $Level
set "level"(value: $Level$$Type)
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "blockState"(value: $BlockState$$Type)
get "material"(): $BlockState
}

export class $ICopycatBlockEntity implements $ICopycatBlockEntity$$Interface {
 "notifyUpdate"(): void
 "blockHolderGetter"(): $HolderGetter<($Block)>
 "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
 "setConsumedItem"(stack: $ItemStack$$Type): void
 "getConsumedItem"(): $ItemStack
 "hasCustomMaterial"(): boolean
 "setMaterial"(blockState: $BlockState$$Type): void
 "cycleMaterial"(): boolean
 "isCTEnabled"(): boolean
 "setCTEnabled"(value: boolean): void
 "setMaterialInternal"(arg0: $BlockState$$Type): void
 "setConsumedItemInternal"(arg0: $ItemStack$$Type): void
 "setCTEnabledInternal"(arg0: boolean): void
 "getBlock"(): $ICopycatBlock
 "getLevel"(): $Level
 "setLevel"(arg0: $Level$$Type): void
 "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
 "init"(): void
static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
 "accept"(other: $BlockEntity$$Type): void
 "onLoad"(): void
 "getBlockPos"(): $BlockPos
 "getBlockState"(): $BlockState
 "setBlockState"(arg0: $BlockState$$Type): void
 "getMaterial"(): $BlockState
 "writeSafe"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlockEntity$$Type = ($ICopycatBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICopycatBlockEntity$$Original = $ICopycatBlockEntity;}
declare module "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler" {
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ICopycatBlock$OnRemoveHandler$$Interface {

(arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $BlockState, arg4: boolean): void
}

export class $ICopycatBlock$OnRemoveHandler implements $ICopycatBlock$OnRemoveHandler$$Interface {
 "handle"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICopycatBlock$OnRemoveHandler$$Type = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $BlockState, arg4: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICopycatBlock$OnRemoveHandler$$Original = $ICopycatBlock$OnRemoveHandler;}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IMultiStateCopycatBlockEntity, $IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export interface $IMultiStateCopycatBlock$$Interface extends $ICopycatBlock$$Interface, $IStateType$$Interface {
}

export class $IMultiStateCopycatBlock implements $IMultiStateCopycatBlock$$Interface {
 "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
 "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
 "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
 "canOcclude"(property: StringJS, level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
 "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
 "canConnectTexturesToward"(property: StringJS, reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
 "getAcceptedBlockState"(property: StringJS, pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
 "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $IMultiStateCopycatBlockEntity
 "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
 "stateType"(): $StateType
 "getPartialFaceShape"(arg0: $BlockGetter$$Type, arg1: $BlockState$$Type, arg2: StringJS, arg3: $Direction$$Type): $VoxelShape
 "defaultProperty"(): StringJS
 "vectorScale"(arg0: $BlockState$$Type): $Vec3i
 "getVectorFromProperty"(arg0: $BlockState$$Type, arg1: StringJS): $Vec3i
 "partExists"(arg0: $BlockState$$Type, arg1: StringJS): boolean
 "storageProperties"(): $Set<(StringJS)>
 "transformStorage"(arg0: $BlockState$$Type, arg1: $IMultiStateCopycatBlockEntity$$Type, arg2: $StructureTransform$$Type): void
 "getPropertyFromRender"(renderingProperty: StringJS, state: $BlockState$$Type, level: $BlockGetter$$Type, vector: $Vec3i$$Type, blockPos: $BlockPos$$Type): StringJS
 "fillEmptyParts"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, material: $BlockState$$Type): void
static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
 "getPropertyFromInteraction"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $Vec3i$$Type, arg3: $BlockPos$$Type, arg4: $Direction$$Type, arg5: $Vec3$$Type): StringJS
 "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hit: $BlockHitResult$$Type, targetingSolid: boolean): StringJS
 "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hitVec: $Vec3$$Type, face: $Direction$$Type, targetingSolid: boolean): StringJS
static "wrappedColor"(): $BlockColor
 "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "getColorIndex"(arg0: StringJS): integer
 "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
 "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
 "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
 "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
 "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
 "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
 "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
 "isAcceptedRegardless"(material: $BlockState$$Type): boolean
 "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
 "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
 "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
 "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
 "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
 "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
 "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
 "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMultiStateCopycatBlock$$Type = ($IMultiStateCopycatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMultiStateCopycatBlock$$Original = $IMultiStateCopycatBlock;}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage$MaterialItem" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MaterialItemStorage$MaterialItem {
constructor(material: $BlockState$$Type, consumedItem: $ItemStack$$Type, enableCT: boolean)
constructor(material: $BlockState$$Type, consumedItem: $ItemStack$$Type)

public "material"(): $BlockState
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "hasCustomMaterial"(): boolean
public "setMaterial"(material: $BlockState$$Type): void
public "consumedItem"(): $ItemStack
public "enableCT"(): boolean
public "setEnableCT"(enableCT: boolean): void
public "serializeSafe"(registries: $HolderLookup$Provider$$Type): $CompoundTag
public static "deserialize"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): $MaterialItemStorage$MaterialItem
public "serialize"(registries: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItemStorage$MaterialItem$$Type = ($MaterialItemStorage$MaterialItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialItemStorage$MaterialItem$$Original = $MaterialItemStorage$MaterialItem;}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.MultiStateCopycatBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IMultiStateCopycatBlockEntity$$Type, $IMultiStateCopycatBlockEntity$$Interface} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$MaterialItemStorage, $MaterialItemStorage$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"
import {$SmartBlockEntity} from "com.simibubi.create.foundation.blockEntity.SmartBlockEntity"
import {$ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockEntityBehaviour$$Type} from "com.simibubi.create.foundation.blockEntity.behaviour.BlockEntityBehaviour"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ICopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiStateCopycatBlockEntity extends $SmartBlockEntity implements $IMultiStateCopycatBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(type: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
public "addBehaviours"(behaviours: $List$$Type<($BlockEntityBehaviour$$Type)>): void
public "writeSafe"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "getMaterialItemStorage"(): $MaterialItemStorage
public "setMaterialItemStorageInternal"(storage: $MaterialItemStorage$$Type): void
public "migrateData"(copycatBlockEntity: $ICopycatBlockEntity$$Type): void
public "write"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "onLoad"(): void
public "getModelData"(): $ModelData
public static "writeSafe"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setConsumedItem"(property: StringJS, itemStack: $ItemStack$$Type): void
public "getConsumedItem"(): $ItemStack
public "hasCustomMaterial"(): boolean
public "setMaterial"(property: StringJS, blockState: $BlockState$$Type): void
public "cycleMaterial"(property: StringJS): boolean
public "isCTEnabled"(): boolean
public "setMaterialInternal"(material: $BlockState$$Type): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "setEnableCT"(property: StringJS, value: boolean): void
public "getBlock"(): $ICopycatBlock
public "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
public "init"(): void
public static "write"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "read"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "getMaterial"(): $BlockState
public "notifyUpdate"(): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "setMaterial"(blockState: $BlockState$$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public "getLevel"(): $Level
public "setLevel"(arg0: $Level$$Type): void
public static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
public static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "accept"(other: $BlockEntity$$Type): void
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "setBlockState"(arg0: $BlockState$$Type): void
get "materialItemStorage"(): $MaterialItemStorage
set "materialItemStorageInternal"(value: $MaterialItemStorage$$Type)
get "modelData"(): $ModelData
get "consumedItem"(): $ItemStack
get "CTEnabled"(): boolean
set "materialInternal"(value: $BlockState$$Type)
set "consumedItemInternal"(value: $ItemStack$$Type)
set "CTEnabledInternal"(value: boolean)
get "block"(): $ICopycatBlock
get "material"(): $BlockState
set "consumedItem"(value: $ItemStack$$Type)
set "material"(value: $BlockState$$Type)
set "CTEnabled"(value: boolean)
get "level"(): $Level
set "level"(value: $Level$$Type)
get "blockPos"(): $BlockPos
get "blockState"(): $BlockState
set "blockState"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiStateCopycatBlockEntity$$Type = ($MultiStateCopycatBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiStateCopycatBlockEntity$$Original = $MultiStateCopycatBlockEntity;}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Function$$Type} from "java.util.function.Function"
import {$List} from "java.util.List"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage$MaterialItem"
import {$Set, $Set$$Type} from "java.util.Set"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MaterialItemStorage {
public "hasCustomMaterial"(property: StringJS): boolean
public "remapStorage"(keyMapper: $Function$$Type<(StringJS), (StringJS)>): void
public "getAllProperties"(): $Set<(StringJS)>
public "storeMaterialItem"(property: StringJS, materialItem: $MaterialItemStorage$MaterialItem$$Type): void
public "getMaterialItem"(property: StringJS): $MaterialItemStorage$MaterialItem
public "getAllMaterialItems"(): $Set<($MaterialItemStorage$MaterialItem)>
public "getAllMaterials"(): $Set<($BlockState)>
public "getAllConsumedItems"(): $List<($ItemStack)>
public "getMaterialMap"(): $Map<(StringJS), ($BlockState)>
public "serializeSafe"(registries: $HolderLookup$Provider$$Type): $CompoundTag
public static "create"(properties: $Set$$Type<(StringJS)>): $MaterialItemStorage
public "deserialize"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): boolean
public "serialize"(registries: $HolderLookup$Provider$$Type): $CompoundTag
get "allProperties"(): $Set<(StringJS)>
get "allMaterialItems"(): $Set<($MaterialItemStorage$MaterialItem)>
get "allMaterials"(): $Set<($BlockState)>
get "allConsumedItems"(): $List<($ItemStack)>
get "materialMap"(): $Map<(StringJS), ($BlockState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialItemStorage$$Type = ($MaterialItemStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialItemStorage$$Original = $MaterialItemStorage;}
declare module "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CCCopycatBlock extends $Block implements $IBE$$Interface<($CCCopycatBlockEntity)>, $ICopycatBlock$$Interface {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "transform"(arg0: $BlockState$$Type, arg1: $StructureTransform$$Type): $BlockState
public "rotate"(state: $BlockState$$Type, rot: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public static "getMaterial"(level: $BlockGetter$$Type, pos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "stateType"(): $StateType
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCCopycatBlock$$Type = ($CCCopycatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CCCopycatBlock$$Original = $CCCopycatBlock;}
declare module "com.copycatsplus.copycats.foundation.copycat.CopycatBaseBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $CopycatBaseBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "BASE_TYPE_COUNT": integer
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
static readonly "BASE_TYPE": $IntegerProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBaseBlock$$Type = ($CopycatBaseBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatBaseBlock$$Original = $CopycatBaseBlock;}
declare module "com.copycatsplus.copycats.foundation.copycat.WrappedCopycatBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$CopycatBlock} from "com.simibubi.create.content.decoration.copycat.CopycatBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock, $ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WrappedCopycatBlock extends $CopycatBlock {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "setWrapped"(wrapped: $ICopycatBlock$$Type): void
public "getWrapped"(): $ICopycatBlock
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "wrapped"(value: $ICopycatBlock$$Type)
get "wrapped"(): $ICopycatBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WrappedCopycatBlock$$Type = ($WrappedCopycatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WrappedCopycatBlock$$Original = $WrappedCopycatBlock;}
declare module "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$MultiStateCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.multistate.MultiStateCopycatBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $WaterloggedMultiStateCopycatBlock extends $MultiStateCopycatBlock implements $ProperWaterloggedBlock$$Interface {
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

public "getStateForPlacement"(pContext: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(pState: $BlockState$$Type, pDirection: $Direction$$Type, pNeighborState: $BlockState$$Type, pLevel: $LevelAccessor$$Type, pCurrentPos: $BlockPos$$Type, pNeighborPos: $BlockPos$$Type): $BlockState
public "getFluidState"(pState: $BlockState$$Type): $FluidState
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "wrappedColor"(): $BlockColor
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterloggedMultiStateCopycatBlock$$Type = ($WaterloggedMultiStateCopycatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaterloggedMultiStateCopycatBlock$$Original = $WaterloggedMultiStateCopycatBlock;}
declare module "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CCCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ProperWaterloggedBlock$$Interface} from "com.simibubi.create.foundation.block.ProperWaterloggedBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CCWaterloggedCopycatBlock extends $CCCopycatBlock implements $ProperWaterloggedBlock$$Interface {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(pContext: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(pState: $BlockState$$Type, pDirection: $Direction$$Type, pNeighborState: $BlockState$$Type, pLevel: $LevelAccessor$$Type, pCurrentPos: $BlockPos$$Type, pNeighborPos: $BlockPos$$Type): $BlockState
public "getFluidState"(pState: $BlockState$$Type): $FluidState
public "withWater"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "updateWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): void
public "fluidState"(arg0: $BlockState$$Type): $FluidState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CCWaterloggedCopycatBlock$$Type = ($CCWaterloggedCopycatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CCWaterloggedCopycatBlock$$Original = $CCWaterloggedCopycatBlock;}
