declare module "com.copycatsplus.copycats.content.copycat.sliding_door.CopycatSlidingDoorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$DoubleBlockHalf} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$DoorHingeSide} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Supplier} from "java.util.function.Supplier"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$SlidingDoorBlock} from "com.simibubi.create.content.decoration.slidingDoor.SlidingDoorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$DoorBlock} from "net.minecraft.world.level.block.DoorBlock"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CopycatSlidingDoorBlockEntity} from "com.copycatsplus.copycats.content.copycat.sliding_door.CopycatSlidingDoorBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatSlidingDoorBlock extends $SlidingDoorBlock implements $ICopycatBlock$$Interface {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "VISIBLE": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "TRAIN_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static "CT": $BooleanProperty
static readonly "STONE_SET_TYPE": $Supplier<($BlockSetType)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "GLASS_SET_TYPE": $Supplier<($BlockSetType)>

constructor(properties: $BlockBehaviour$Properties$$Type, type: $BlockSetType$$Type, folds: boolean)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public static "metal"(properties: $BlockBehaviour$Properties$$Type, folds: boolean): $CopycatSlidingDoorBlock
public "getBlockEntityType"(): $BlockEntityType<($CopycatSlidingDoorBlockEntity)>
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "moreculling$shouldAttemptToCull"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "moreculling$canCull"(): boolean
public "moreculling$setCanCull"(arg0: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CopycatSlidingDoorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlidingDoorBlock$$Type = ($CopycatSlidingDoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatSlidingDoorBlock$$Original = $CopycatSlidingDoorBlock;}
declare module "com.copycatsplus.copycats.content.copycat.sliding_door.CopycatSlidingDoorBlockEntity" {
import {$LerpedFloat} from "net.createmod.catnip.animation.LerpedFloat"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"
import {$ICopycatBlockEntity$$Type, $ICopycatBlockEntity$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$SlidingDoorBlockEntity} from "com.simibubi.create.content.decoration.slidingDoor.SlidingDoorBlockEntity"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ICopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CopycatSlidingDoorBlockEntity extends $SlidingDoorBlockEntity implements $ICopycatBlockEntity$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(typeIn: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getConsumedItem"(): $ItemStack
public "isCTEnabled"(): boolean
public "setMaterialInternal"(material: $BlockState$$Type): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
public "setCTEnabledInternal"(value: boolean): void
public "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
public "writeSafe"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "shouldRenderSpecial"(state: $BlockState$$Type): boolean
public "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
public "write"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "onLoad"(): void
public "animation"(): $LerpedFloat
public "getModelData"(): $ModelData
public "getMaterial"(): $BlockState
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "hasCustomMaterial"(): boolean
public "setMaterial"(blockState: $BlockState$$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public "notifyUpdate"(): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "getBlock"(): $ICopycatBlock
public "getLevel"(): $Level
public "setLevel"(arg0: $Level$$Type): void
public "init"(): void
public static "write"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "write"(tag: $CompoundTag$$Type, stack: $ItemStack$$Type, material: $BlockState$$Type, registries: $HolderLookup$Provider$$Type, enableCT: boolean): void
public static "read"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "accept"(other: $BlockEntity$$Type): void
public "getBlockPos"(): $BlockPos
public "getBlockState"(): $BlockState
public "setBlockState"(arg0: $BlockState$$Type): void
get "consumedItem"(): $ItemStack
get "CTEnabled"(): boolean
set "materialInternal"(value: $BlockState$$Type)
set "consumedItemInternal"(value: $ItemStack$$Type)
set "CTEnabledInternal"(value: boolean)
get "modelData"(): $ModelData
get "material"(): $BlockState
set "consumedItem"(value: $ItemStack$$Type)
set "material"(value: $BlockState$$Type)
set "CTEnabled"(value: boolean)
get "block"(): $ICopycatBlock
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
export type $CopycatSlidingDoorBlockEntity$$Type = ($CopycatSlidingDoorBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatSlidingDoorBlockEntity$$Original = $CopycatSlidingDoorBlockEntity;}
declare module "com.copycatsplus.copycats.content.copycat.trapdoor.CopycatTrapdoorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
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
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$TrapDoorBlock} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatTrapdoorBlock extends $TrapDoorBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TrapDoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(type: $BlockSetType$$Type, properties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatTrapdoorBlock$$Type = ($CopycatTrapdoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatTrapdoorBlock$$Original = $CopycatTrapdoorBlock;}
declare module "com.copycatsplus.copycats.content.copycat.beam.CopycatBeamBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatBeamBlock extends $CCWaterloggedCopycatBlock implements $IStateType$$Interface {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
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
declare module "com.copycatsplus.copycats.content.copycat.fence_gate.CopycatFenceGateBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
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
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
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
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$FenceGateBlock} from "net.minecraft.world.level.block.FenceGateBlock"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatFenceGateBlock extends $FenceGateBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "collisionExtendsVertically"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, collidingEntity: $Entity$$Type): boolean
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
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
declare module "com.copycatsplus.copycats.content.copycat.stacked_half_layer.CopycatStackedHalfLayerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatStackedHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement$$Interface {
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
static readonly "FACING": $EnumProperty<($Direction)>

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, context: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "defaultProperty"(): StringJS
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "storageProperties"(): $Set<(StringJS)>
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "getColorIndex"(property: StringJS): integer
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getCopycatBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ICopycatBlockEntity
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatStackedHalfLayerBlock$$Type = ($CopycatStackedHalfLayerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatStackedHalfLayerBlock$$Original = $CopycatStackedHalfLayerBlock;}
declare module "com.copycatsplus.copycats.content.copycat.pressure_plate.CopycatPressurePlateBlock" {
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
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
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
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$PressurePlateBlock} from "net.minecraft.world.level.block.PressurePlateBlock"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatPressurePlateBlock extends $PressurePlateBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($PressurePlateBlock)>
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

constructor(type: $BlockSetType$$Type, properties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatPressurePlateBlock$$Type = ($CopycatPressurePlateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatPressurePlateBlock$$Original = $CopycatPressurePlateBlock;}
declare module "com.copycatsplus.copycats.content.copycat.stairs.CopycatStairsBlock$FaceShape" {
import {$Direction$AxisDirection$$Type} from "net.minecraft.core.Direction$AxisDirection"
import {$Direction$$Type} from "net.minecraft.core.Direction"

export class $CopycatStairsBlock$FaceShape {
 "topNegative": boolean
 "bottomNegative": boolean
 "topPositive": boolean
 "bottomPositive": boolean

constructor()

public "countBlocks"(): integer
public "fillAll"(): $CopycatStairsBlock$FaceShape
public "fillTop"(direction: $Direction$AxisDirection$$Type): $CopycatStairsBlock$FaceShape
public "fillTop"(): $CopycatStairsBlock$FaceShape
public "fillRow"(top: boolean, direction: $Direction$AxisDirection$$Type): $CopycatStairsBlock$FaceShape
public "fillRow"(top: boolean): $CopycatStairsBlock$FaceShape
public "fillBottom"(direction: $Direction$AxisDirection$$Type): $CopycatStairsBlock$FaceShape
public "fillBottom"(): $CopycatStairsBlock$FaceShape
public "fillRight"(relativeTo: $Direction$$Type): $CopycatStairsBlock$FaceShape
public "fillLeft"(relativeTo: $Direction$$Type): $CopycatStairsBlock$FaceShape
public "fillPositive"(): $CopycatStairsBlock$FaceShape
public "fillNegative"(): $CopycatStairsBlock$FaceShape
public "canConnect"(): boolean
public "isFull"(): boolean
public "fillColumn"(direction: $Direction$AxisDirection$$Type): $CopycatStairsBlock$FaceShape
public "equals"(obj: any): boolean
public "set"(bottomNegative: boolean, bottomPositive: boolean, topNegative: boolean, topPositive: boolean): $CopycatStairsBlock$FaceShape
public "rotate"(angle: integer): $CopycatStairsBlock$FaceShape
public "rotate"(angle: float): $CopycatStairsBlock$FaceShape
get "full"(): boolean
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
declare module "com.copycatsplus.copycats.content.copycat.slice.CopycatSliceBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatSliceBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement$$Interface, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSliceBlock$$Type = ($CopycatSliceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatSliceBlock$$Original = $CopycatSliceBlock;}
declare module "com.copycatsplus.copycats.content.copycat.cogwheel.CopycatCogWheelBlockEntity" {
import {$BracketedKineticBlockEntity} from "com.simibubi.create.content.kinetics.simpleRelays.BracketedKineticBlockEntity"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IMultiStateCopycatBlockEntity$$Type, $IMultiStateCopycatBlockEntity$$Interface} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IMultiStateCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$MaterialItemStorage, $MaterialItemStorage$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$SequencedGearshiftBlockEntity$SequenceContext} from "com.simibubi.create.content.kinetics.transmission.sequencer.SequencedGearshiftBlockEntity$SequenceContext"
import {$HolderGetter} from "net.minecraft.core.HolderGetter"
import {$ICopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CopycatCogWheelBlockEntity extends $BracketedKineticBlockEntity implements $IMultiStateCopycatBlockEntity$$Interface {
 "sequenceContext": $SequencedGearshiftBlockEntity$SequenceContext
 "networkDirty": boolean
 "updateSpeed": boolean
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "source": $BlockPos
 "preventSpeedUpdate": integer
 "network": long

constructor(type: $BlockEntityType$$Type<(never)>, pos: $BlockPos$$Type, state: $BlockState$$Type)

public "getRequiredItems"(state: $BlockState$$Type): $ItemRequirement
public "writeSafe"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "getMaterialItemStorage"(): $MaterialItemStorage
public "setMaterialItemStorageInternal"(storage: $MaterialItemStorage$$Type): void
public "transform"(blockEntity: $BlockEntity$$Type, transform: $StructureTransform$$Type): void
public "write"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "read"(tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "onLoad"(): void
public "getModelData"(): $ModelData
public "setConsumedItem"(property: StringJS, itemStack: $ItemStack$$Type): void
public "getConsumedItem"(): $ItemStack
public "hasCustomMaterial"(): boolean
public "setMaterial"(property: StringJS, blockState: $BlockState$$Type): void
public "cycleMaterial"(property: StringJS): boolean
public "isCTEnabled"(): boolean
public "setMaterialInternal"(material: $BlockState$$Type): void
public "setConsumedItemInternal"(consumedItem: $ItemStack$$Type): void
public "setCTEnabledInternal"(value: boolean): void
public static "writeSafe"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
public "setEnableCT"(property: StringJS, value: boolean): void
public "getBlock"(): $IMultiStateCopycatBlock
public "init"(): void
public static "write"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public static "read"(self: $IMultiStateCopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type, clientPacket: boolean): void
public "getMaterial"(): $BlockState
public "setConsumedItem"(stack: $ItemStack$$Type): void
public "setMaterial"(blockState: $BlockState$$Type): void
public "cycleMaterial"(): boolean
public "setCTEnabled"(value: boolean): void
public "notifyUpdate"(): void
public "blockHolderGetter"(): $HolderGetter<($Block)>
public static "writeSafe"(self: $ICopycatBlockEntity$$Type, tag: $CompoundTag$$Type, registries: $HolderLookup$Provider$$Type): void
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
get "block"(): $IMultiStateCopycatBlock
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
export type $CopycatCogWheelBlockEntity$$Type = ($CopycatCogWheelBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatCogWheelBlockEntity$$Original = $CopycatCogWheelBlockEntity;}
declare module "com.copycatsplus.copycats.content.copycat.vertical_slope.CopycatVerticalSlopeBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatVerticalSlopeBlock extends $CCWaterloggedCopycatBlock implements $IStateType$$Interface, $ICustomCTBlocking$$Interface {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalSlopeBlock$$Type = ($CopycatVerticalSlopeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatVerticalSlopeBlock$$Original = $CopycatVerticalSlopeBlock;}
declare module "com.copycatsplus.copycats.content.copycat.pane.CopycatPaneBlock" {
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
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$ConnectedGlassPaneBlock} from "com.simibubi.create.content.decoration.palettes.ConnectedGlassPaneBlock"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$Map} from "java.util.Map"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$IronBarsBlock} from "net.minecraft.world.level.block.IronBarsBlock"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatPaneBlock extends $ConnectedGlassPaneBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface, $ICustomCTBlocking$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($IronBarsBlock)>
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public static "propertyForDirection"(direction: $Direction$$Type): $BooleanProperty
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatPaneBlock$$Type = ($CopycatPaneBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatPaneBlock$$Original = $CopycatPaneBlock;}
declare module "com.copycatsplus.copycats.content.copycat.board.CopycatBoxItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
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

constructor(builder: $Item$Properties$$Type)

public "registerBlocks"(map: $Map$$Type<($Block$$Type), ($Item$$Type)>, self: $Item$$Type): void
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
declare module "com.copycatsplus.copycats.content.copycat.shaft.CopycatShaftBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ShaftBlock} from "com.simibubi.create.content.kinetics.simpleRelays.ShaftBlock"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatShaftBlock extends $ShaftBlock implements $ICopycatBlock$$Interface, $ICustomCTBlocking$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatShaftBlock$$Type = ($CopycatShaftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatShaftBlock$$Original = $CopycatShaftBlock;}
declare module "com.copycatsplus.copycats.content.copycat.vertical_stairs.CopycatVerticalStairBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ICustomCTBlocking$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CopycatStairsBlock$FaceShape} from "com.copycatsplus.copycats.content.copycat.stairs.CopycatStairsBlock$FaceShape"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CCBlockStateProperties$VerticalStairShape} from "com.copycatsplus.copycats.CCBlockStateProperties$VerticalStairShape"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$CCBlockStateProperties$Side} from "com.copycatsplus.copycats.CCBlockStateProperties$Side"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatVerticalStairBlock extends $CCWaterloggedCopycatBlock implements $ICustomCTBlocking$$Interface, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "SIDE": $EnumProperty<($CCBlockStateProperties$Side)>
static readonly "UPDATE_LIMIT": integer
static readonly "SHAPE": $EnumProperty<($CCBlockStateProperties$VerticalStairShape)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "getFaceShape"(state: $BlockState$$Type, face: $Direction$$Type): $CopycatStairsBlock$FaceShape
public "useShapeForLightOcclusion"(pState: $BlockState$$Type): boolean
public static "isStairs"(state: $BlockState$$Type): boolean
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalStairBlock$$Type = ($CopycatVerticalStairBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatVerticalStairBlock$$Original = $CopycatVerticalStairBlock;}
declare module "com.copycatsplus.copycats.content.copycat.button.CopycatButtonBlock" {
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
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$ButtonBlock} from "net.minecraft.world.level.block.ButtonBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatButtonBlock extends $ButtonBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
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

constructor(type: $BlockSetType$$Type, ticksToStayPressed: integer, properties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatButtonBlock$$Type = ($CopycatButtonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatButtonBlock$$Original = $CopycatButtonBlock;}
declare module "com.copycatsplus.copycats.content.copycat.board.CopycatCatwalkItem" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
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

constructor(builder: $Item$Properties$$Type)

public "registerBlocks"(map: $Map$$Type<($Block$$Type), ($Item$$Type)>, self: $Item$$Type): void
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
declare module "com.copycatsplus.copycats.content.copycat.vertical_slice.CopycatVerticalSliceBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatVerticalSliceBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement$$Interface, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalSliceBlock$$Type = ($CopycatVerticalSliceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatVerticalSliceBlock$$Original = $CopycatVerticalSliceBlock;}
declare module "com.copycatsplus.copycats.content.copycat.ghost_block.CopycatGhostBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CCCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlock"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatGhostBlock extends $CCCopycatBlock implements $IStateType$$Interface {
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

public "canConnectTexturesToward"(blockAndTintGetter: $BlockAndTintGetter$$Type, blockPos: $BlockPos$$Type, blockPos1: $BlockPos$$Type, blockState: $BlockState$$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatGhostBlock$$Type = ($CopycatGhostBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatGhostBlock$$Original = $CopycatGhostBlock;}
declare module "com.copycatsplus.copycats.content.copycat.slab.CopycatSlabBlock$FaceShape" {
import {$Enum} from "java.lang.Enum"
import {$SlabType$$Type} from "net.minecraft.world.level.block.state.properties.SlabType"

export class $CopycatSlabBlock$FaceShape extends $Enum<($CopycatSlabBlock$FaceShape)> {
static readonly "TOP": $CopycatSlabBlock$FaceShape
static readonly "BOTTOM": $CopycatSlabBlock$FaceShape
static readonly "NONE": $CopycatSlabBlock$FaceShape
static readonly "FULL": $CopycatSlabBlock$FaceShape

public static "forSlabSide"(type: $SlabType$$Type): $CopycatSlabBlock$FaceShape
public static "fullOrNone"(value: boolean): $CopycatSlabBlock$FaceShape
public "hasContact"(): boolean
public static "canConnect"(shape1: $CopycatSlabBlock$FaceShape$$Type, shape2: $CopycatSlabBlock$FaceShape$$Type): boolean
public static "values"(): ($CopycatSlabBlock$FaceShape)[]
public static "valueOf"(name: StringJS): $CopycatSlabBlock$FaceShape
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
declare module "com.copycatsplus.copycats.content.copycat.fence.CopycatFenceBlock" {
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
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$FenceBlock} from "net.minecraft.world.level.block.FenceBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$Map} from "java.util.Map"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatFenceBlock extends $FenceBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public static "byDirection"(direction: $Direction$$Type): $BooleanProperty
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "collisionExtendsVertically"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, collidingEntity: $Entity$$Type): boolean
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
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
declare module "com.copycatsplus.copycats.content.copycat.board.CopycatBoardBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$Optional} from "java.util.Optional"
import {$IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ICustomCTBlocking$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map} from "java.util.Map"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatBoardBlock extends $WaterloggedMultiStateCopycatBlock implements $ICustomCTBlocking$$Interface, $SpecialBlockItemRequirement$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public static "byDirection"(direction: $Direction$$Type): $BooleanProperty
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(property: StringJS, reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public "getPropertyFromRender"(renderingProperty: StringJS, state: $BlockState$$Type, level: $BlockGetter$$Type, vector: $Vec3i$$Type, blockPos: $BlockPos$$Type): StringJS
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "defaultProperty"(): StringJS
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "storageProperties"(): $Set<(StringJS)>
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public static "directionToProperty"(direction: $Direction$$Type): StringJS
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "getColorIndex"(property: StringJS): integer
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getCopycatBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ICopycatBlockEntity
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
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
declare module "com.copycatsplus.copycats.content.copycat.block.CopycatBlockBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CCCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlock"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatBlockBlock extends $CCCopycatBlock implements $IStateType$$Interface {
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

public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
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
declare module "com.copycatsplus.copycats.content.copycat.vertical_step.CopycatVerticalStepBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatVerticalStepBlock extends $CCWaterloggedCopycatBlock implements $IStateType$$Interface {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
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
declare module "com.copycatsplus.copycats.content.copycat.ladder.CopycatLadderBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$LadderBlock} from "net.minecraft.world.level.block.LadderBlock"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatLadderBlock extends $LadderBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static "RAILS": $BooleanProperty
static readonly "CODEC": $MapCodec<($LadderBlock)>
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
static readonly "FACING": $DirectionProperty
static "STEPS": $BooleanProperty

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(blockAndTintGetter: $BlockAndTintGetter$$Type, blockPos: $BlockPos$$Type, blockPos1: $BlockPos$$Type, blockState: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getStateForPlacement"(pContext: $BlockPlaceContext$$Type): $BlockState
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getOcclusionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): $VoxelShape
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "moreculling$shouldAttemptToCull"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "moreculling$canCull"(): boolean
public "moreculling$setCanCull"(arg0: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatLadderBlock$$Type = ($CopycatLadderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatLadderBlock$$Original = $CopycatLadderBlock;}
declare module "com.copycatsplus.copycats.content.copycat.fluid_pipe.CopycatFluidPipeBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$FluidPipeBlock} from "com.simibubi.create.content.fluids.pipes.FluidPipeBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map} from "java.util.Map"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$FluidPipeBlockEntity} from "com.simibubi.create.content.fluids.pipes.FluidPipeBlockEntity"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatFluidPipeBlock extends $FluidPipeBlock implements $ICopycatBlock$$Interface {
static readonly "DOWN": $BooleanProperty
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "EAST": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FluidPipeBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "PROPERTY_BY_DIRECTION": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getBlockEntityType"(): $BlockEntityType<($FluidPipeBlockEntity)>
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "rotate"(pState: $BlockState$$Type, pRotation: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($FluidPipeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFluidPipeBlock$$Type = ($CopycatFluidPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatFluidPipeBlock$$Original = $CopycatFluidPipeBlock;}
declare module "com.copycatsplus.copycats.content.copycat.flat_pane.CopycatFlatPaneBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatFlatPaneBlock extends $CCWaterloggedCopycatBlock implements $IStateType$$Interface, $ICustomCTBlocking$$Interface {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, fromState: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatFlatPaneBlock$$Type = ($CopycatFlatPaneBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatFlatPaneBlock$$Original = $CopycatFlatPaneBlock;}
declare module "com.copycatsplus.copycats.content.copycat.slope_layer.CopycatSlopeLayerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatSlopeLayerBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement$$Interface, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "getShadeBrightness"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlopeLayerBlock$$Type = ($CopycatSlopeLayerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatSlopeLayerBlock$$Original = $CopycatSlopeLayerBlock;}
declare module "com.copycatsplus.copycats.content.copycat.slab.CopycatSlabBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$SlabType} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$CopycatSlabBlock$FaceShape} from "com.copycatsplus.copycats.content.copycat.slab.CopycatSlabBlock$FaceShape"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CopycatTransformableState, $CopycatTransformableState$$Type} from "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage$MaterialItem"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatSlabBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement$$Interface {
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public static "getApparentDirection"(state: $BlockState$$Type): $Direction
public static "setApparentDirection"(state: $BlockState$$Type, direction: $Direction$$Type): $BlockState
public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "getFaceShape"(state: $BlockState$$Type, face: $Direction$$Type): $CopycatSlabBlock$FaceShape
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "defaultProperty"(): StringJS
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public static "toTransformableState"(state: $BlockState$$Type): $CopycatTransformableState<(void)>
public "storageProperties"(): $Set<(StringJS)>
public static "toTransformableStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type): $CopycatTransformableState<($MaterialItemStorage$MaterialItem)>
public static "fromTransformableState"(state: $BlockState$$Type, transformableState: $CopycatTransformableState$$Type<(void)>): $BlockState
public static "fromTransformableStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transformableState: $CopycatTransformableState$$Type<($MaterialItemStorage$MaterialItem$$Type)>): void
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getColorIndex"(property: StringJS): integer
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getCopycatBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ICopycatBlockEntity
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
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
declare module "com.copycatsplus.copycats.content.copycat.byte_panel.CopycatBytePanelBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Vector2i} from "org.joml.Vector2i"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatBytePanelBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement$$Interface {
static "TOP_LEFT": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "BOTTOM_RIGHT": $BooleanProperty
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
static "TOP_RIGHT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static "FACING": $DirectionProperty
static "BOTTOM_LEFT": $BooleanProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public static "getVertical"(facing: $Direction$$Type): $Direction
public "canBeReplaced"(state: $BlockState$$Type, context: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "defaultProperty"(): StringJS
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "storageProperties"(): $Set<(StringJS)>
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public static "fromProperty"(property: StringJS): $BooleanProperty
public static "getHorizontal"(facing: $Direction$$Type): $Direction
public static "getVector"(property: StringJS): $Vector2i
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public static "getProperty"(horizontal: integer, vertical: integer): StringJS
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "getColorIndex"(property: StringJS): integer
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getCopycatBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ICopycatBlockEntity
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatBytePanelBlock$$Type = ($CopycatBytePanelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatBytePanelBlock$$Original = $CopycatBytePanelBlock;}
declare module "com.copycatsplus.copycats.content.copycat.bytes.CopycatByteBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$List} from "java.util.List"
import {$IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Map} from "java.util.Map"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty, $BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$CopycatByteBlock$Byte, $CopycatByteBlock$Byte$$Type} from "com.copycatsplus.copycats.content.copycat.bytes.CopycatByteBlock$Byte"

export class $CopycatByteBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement$$Interface {
static "TOP_NW": $BooleanProperty
static "TOP_SE": $BooleanProperty
static "BOTTOM_NE": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "allBytes": $List<($CopycatByteBlock$Byte)>
static "TOP_NE": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "byteMap": $Map<(StringJS), ($CopycatByteBlock$Byte)>
static "BOTTOM_NW": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "BOTTOM_SE": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "TOP_SW": $BooleanProperty
static readonly "INSTANT": float
static "BOTTOM_SW": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "defaultProperty"(): StringJS
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "storageProperties"(): $Set<(StringJS)>
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public static "byByte"(bite: $CopycatByteBlock$Byte$$Type): $BooleanProperty
public static "byByte"(x: boolean, y: boolean, z: boolean): $BooleanProperty
public static "bite"(x: boolean, y: boolean, z: boolean): $CopycatByteBlock$Byte
public static "getByteFromVec"(vec: $Vec3$$Type, pos: $BlockPos$$Type): $CopycatByteBlock$Byte
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "getColorIndex"(property: StringJS): integer
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getCopycatBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ICopycatBlockEntity
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatByteBlock$$Type = ($CopycatByteBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatByteBlock$$Original = $CopycatByteBlock;}
declare module "com.copycatsplus.copycats.content.copycat.slope.CopycatSlopeBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatSlopeBlock extends $CCWaterloggedCopycatBlock implements $IStateType$$Interface, $ICustomCTBlocking$$Interface {
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
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatSlopeBlock$$Type = ($CopycatSlopeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatSlopeBlock$$Original = $CopycatSlopeBlock;}
declare module "com.copycatsplus.copycats.content.copycat.vertical_half_layer.CopycatVerticalHalfLayerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatVerticalHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement$$Interface {
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
static readonly "FACING": $EnumProperty<($Direction)>

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(state: $BlockState$$Type, context: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "defaultProperty"(): StringJS
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "storageProperties"(): $Set<(StringJS)>
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "getColorIndex"(property: StringJS): integer
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getCopycatBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ICopycatBlockEntity
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatVerticalHalfLayerBlock$$Type = ($CopycatVerticalHalfLayerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatVerticalHalfLayerBlock$$Original = $CopycatVerticalHalfLayerBlock;}
declare module "com.copycatsplus.copycats.content.copycat.fluid_pipe.CopycatGlassFluidPipeBlock" {
import {$RotatedPillarBlock} from "net.minecraft.world.level.block.RotatedPillarBlock"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$StraightPipeBlockEntity} from "com.simibubi.create.content.fluids.pipes.StraightPipeBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$GlassFluidPipeBlock} from "com.simibubi.create.content.fluids.pipes.GlassFluidPipeBlock"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatGlassFluidPipeBlock extends $GlassFluidPipeBlock implements $ICopycatBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($RotatedPillarBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "ALT": $BooleanProperty
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

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getBlockEntityType"(): $BlockEntityType<($StraightPipeBlockEntity)>
public "toRegularPipe"(world: $LevelAccessor$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockState
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "stateType"(): $StateType
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getAxisOf"(arg0: $BlockState$$Type): $Direction$Axis
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($StraightPipeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatGlassFluidPipeBlock$$Type = ($CopycatGlassFluidPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatGlassFluidPipeBlock$$Original = $CopycatGlassFluidPipeBlock;}
declare module "com.copycatsplus.copycats.content.copycat.half_panel.CopycatHalfPanelBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatHalfPanelBlock extends $CCWaterloggedCopycatBlock implements $IStateType$$Interface {
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
static readonly "OFFSET": $DirectionProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public static "getOffsetFacing"(facing: $Direction$$Type, offset: $Direction$$Type): $Direction
public static "getOffsetAxis"(facing: $Direction$$Type, offset: $Direction$$Type): $Direction$Axis
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHalfPanelBlock$$Type = ($CopycatHalfPanelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatHalfPanelBlock$$Original = $CopycatHalfPanelBlock;}
declare module "com.copycatsplus.copycats.content.copycat.stairs.CopycatStairsBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CopycatStairsBlock$FaceShape} from "com.copycatsplus.copycats.content.copycat.stairs.CopycatStairsBlock$FaceShape"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$StairsShape} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$StairBlock} from "net.minecraft.world.level.block.StairBlock"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ICustomCTBlocking$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICustomCTBlocking"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatStairsBlock extends $StairBlock implements $ICopycatBlock$$Interface, $ICustomCTBlocking$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public static "getFaceShape"(state: $BlockState$$Type, face: $Direction$$Type): $CopycatStairsBlock$FaceShape
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "isCTBlocked"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, blockingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "blockCTTowards"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, ctPos: $BlockPos$$Type, connectingPos: $BlockPos$$Type, face: $Direction$$Type): $Optional<(boolean)>
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
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
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
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
declare module "com.copycatsplus.copycats.content.copycat.pressure_plate.CopycatWeightedPressurePlate" {
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
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
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
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$WeightedPressurePlateBlock} from "net.minecraft.world.level.block.WeightedPressurePlateBlock"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatWeightedPressurePlate extends $WeightedPressurePlateBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WeightedPressurePlateBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POWER": $IntegerProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
readonly "maxWeight": integer
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

constructor(maxWeight: integer, type: $BlockSetType$$Type, pProperties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatWeightedPressurePlate$$Type = ($CopycatWeightedPressurePlate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatWeightedPressurePlate$$Original = $CopycatWeightedPressurePlate;}
declare module "com.copycatsplus.copycats.content.copycat.door.CopycatDoorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$DoubleBlockHalf} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$DoorHingeSide} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
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
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$DoorBlock} from "net.minecraft.world.level.block.DoorBlock"
import {$BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatDoorBlock extends $DoorBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DoorBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static "CT": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(type: $BlockSetType$$Type, properties: $BlockBehaviour$Properties$$Type)

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(p_153212_: $Level$$Type, p_153213_: $BlockState$$Type, p_153214_: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "moreculling$shouldAttemptToCull"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "moreculling$canCull"(): boolean
public "moreculling$setCanCull"(arg0: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatDoorBlock$$Type = ($CopycatDoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatDoorBlock$$Original = $CopycatDoorBlock;}
declare module "com.copycatsplus.copycats.content.copycat.layer.CopycatLayerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatLayerBlock extends $CCWaterloggedCopycatBlock implements $SpecialBlockItemRequirement$$Interface, $IStateType$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
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

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "getShadeBrightness"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): float
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatLayerBlock$$Type = ($CopycatLayerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatLayerBlock$$Original = $CopycatLayerBlock;}
declare module "com.copycatsplus.copycats.content.copycat.cogwheel.CopycatCogWheelBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IBlockExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IBlockExtension"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$SoundType} from "net.minecraft.world.level.block.SoundType"
import {$IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$IMultiStateCopycatBlock$$Type, $IMultiStateCopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$CopycatCogWheelBlockEntity} from "com.copycatsplus.copycats.content.copycat.cogwheel.CopycatCogWheelBlockEntity"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$CogWheelBlock} from "com.simibubi.create.content.kinetics.simpleRelays.CogWheelBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$PushReaction} from "net.minecraft.world.level.material.PushReaction"

export class $CopycatCogWheelBlock extends $CogWheelBlock implements $IMultiStateCopycatBlock$$Interface, $IBlockExtension$$Interface {
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

public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(property: StringJS, reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "getAcceptedBlockState"(property: StringJS, pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(worldIn: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "playerWillDestroy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, player: $Player$$Type): $BlockState
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "getAppearance"(state: $BlockState$$Type, renderView: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, sourceState: $BlockState$$Type, sourcePos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public static "large"(properties: $BlockBehaviour$Properties$$Type): $CopycatCogWheelBlock
public "getBlockEntityType"(): $BlockEntityType<($CopycatCogWheelBlockEntity)>
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "defaultProperty"(): StringJS
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public "storageProperties"(): $Set<(StringJS)>
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public static "small"(properties: $BlockBehaviour$Properties$$Type): $CopycatCogWheelBlock
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "getColorIndex"(property: StringJS): integer
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "fallOn"(pLevel: $Level$$Type, state: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getCopycatBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ICopycatBlockEntity
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "stateType"(): $StateType
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "canOcclude"(property: StringJS, level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hit: $BlockHitResult$$Type, targetingSolid: boolean): StringJS
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, hitVec: $Vec3$$Type, face: $Direction$$Type, targetingSolid: boolean): StringJS
public static "wrappedColor"(): $BlockColor
public "getPropertyFromRender"(renderingProperty: StringJS, state: $BlockState$$Type, level: $BlockGetter$$Type, vector: $Vec3i$$Type, blockPos: $BlockPos$$Type): StringJS
public "fillEmptyParts"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, material: $BlockState$$Type): void
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public "getPistonPushReaction"(arg0: $BlockState$$Type): $PushReaction
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CopycatCogWheelBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCogWheelBlock$$Type = ($CopycatCogWheelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatCogWheelBlock$$Original = $CopycatCogWheelBlock;}
declare module "com.copycatsplus.copycats.content.copycat.half_layer.CopycatHalfLayerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IMultiStateCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlockEntity"
import {$IMultiStateCopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.IMultiStateCopycatBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i, $Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WaterloggedMultiStateCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.multistate.WaterloggedMultiStateCopycatBlock"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CopycatTransformableState, $CopycatTransformableState$$Type} from "com.copycatsplus.copycats.foundation.copycat.CopycatTransformableState"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$MaterialItemStorage$MaterialItem, $MaterialItemStorage$MaterialItem$$Type} from "com.copycatsplus.copycats.foundation.copycat.multistate.MaterialItemStorage$MaterialItem"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty$$Type} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatHalfLayerBlock extends $WaterloggedMultiStateCopycatBlock implements $SpecialBlockItemRequirement$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "POSITIVE_LAYERS": $IntegerProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NEGATIVE_LAYERS": $IntegerProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "isPathfindable"(pState: $BlockState$$Type, pType: $PathComputationType$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "getPropertyFromInteraction"(state: $BlockState$$Type, level: $BlockGetter$$Type, hitLocation: $Vec3i$$Type, blockPos: $BlockPos$$Type, facing: $Direction$$Type, unscaledHit: $Vec3$$Type): StringJS
public "getPartialFaceShape"(level: $BlockGetter$$Type, state: $BlockState$$Type, property: StringJS, face: $Direction$$Type): $VoxelShape
public "defaultProperty"(): StringJS
public "vectorScale"(state: $BlockState$$Type): $Vec3i
public "getVectorFromProperty"(state: $BlockState$$Type, property: StringJS): $Vec3i
public "partExists"(state: $BlockState$$Type, property: StringJS): boolean
public static "toTransformableState"(state: $BlockState$$Type): $CopycatTransformableState<(integer)>
public "storageProperties"(): $Set<(StringJS)>
public static "toTransformableStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type): $CopycatTransformableState<($MaterialItemStorage$MaterialItem)>
public static "fromTransformableState"(state: $BlockState$$Type, transformableState: $CopycatTransformableState$$Type<(integer)>): $BlockState
public static "fromTransformableStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transformableState: $CopycatTransformableState$$Type<($MaterialItemStorage$MaterialItem$$Type)>): void
public "transformStorage"(state: $BlockState$$Type, be: $IMultiStateCopycatBlockEntity$$Type, transform: $StructureTransform$$Type): void
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "getColorIndex"(property: StringJS): integer
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public "getCopycatBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ICopycatBlockEntity
public static "getAppearance"(block: $IMultiStateCopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "getRequiredItemsForParts"(state: $BlockState$$Type, ...property: ($BooleanProperty$$Type)[]): $ItemRequirement
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type, property: StringJS): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatHalfLayerBlock$$Type = ($CopycatHalfLayerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatHalfLayerBlock$$Original = $CopycatHalfLayerBlock;}
declare module "com.copycatsplus.copycats.content.copycat.wall.CopycatWallBlock" {
import {$WallSide} from "net.minecraft.world.level.block.state.properties.WallSide"
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
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$WallBlock} from "net.minecraft.world.level.block.WallBlock"
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$ICopycatBlock$OnRemoveHandler$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock$OnRemoveHandler"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$ICopycatBlockEntity} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlockEntity"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ICopycatBlock$$Type, $ICopycatBlock$$Interface} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$StateType} from "com.copycatsplus.copycats.foundation.copycat.StateType"
import {$CCCopycatBlockEntity, $CCCopycatBlockEntity$$Type} from "com.copycatsplus.copycats.foundation.copycat.CCCopycatBlockEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CopycatWallBlock extends $WallBlock implements $ICopycatBlock$$Interface, $IBE$$Interface<($CCCopycatBlockEntity)>, $IStateType$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public static "byDirection"(direction: $Direction$$Type): $EnumProperty<($WallSide)>
public "isIgnoredConnectivitySide"(reader: $BlockAndTintGetter$$Type, state: $BlockState$$Type, face: $Direction$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, toState: $BlockState$$Type): boolean
public "canConnectTexturesToward"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, state: $BlockState$$Type): boolean
public "isAcceptedRegardless"(material: $BlockState$$Type): boolean
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getExplosionResistance"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, explosion: $Explosion$$Type): float
public "setPlacedBy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlacer: $LivingEntity$$Type, pStack: $ItemStack$$Type): void
public "playerWillDestroy"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type): $BlockState
public "canHarvestBlock"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "getEnchantPowerBonus"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): float
public "canEntityDestroy"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "getAppearance"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public "useWithoutItem"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public "getDestroyProgress"(pState: $BlockState$$Type, pPlayer: $Player$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type): float
public "getTicker"<S extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, type: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "getBlockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
public "getBlockEntityClass"(): $Class<($CCCopycatBlockEntity)>
public "rotate"(pState: $BlockState$$Type, pRot: $Rotation$$Type): $BlockState
public "mirror"(pState: $BlockState$$Type, pMirror: $Mirror$$Type): $BlockState
public "useItemOn"(stack: $ItemStack$$Type, state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hand: $InteractionHand$$Type, hitResult: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(state: $BlockState$$Type, target: $HitResult$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $ItemStack
public "addLandingEffects"(state1: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, state2: $BlockState$$Type, entity: $LivingEntity$$Type, numberOfParticles: integer): boolean
public "getSoundType"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): $SoundType
public "getFriction"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): float
public "collisionExtendsVertically"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, collidingEntity: $Entity$$Type): boolean
public "fallOn"(pLevel: $Level$$Type, pState: $BlockState$$Type, pPos: $BlockPos$$Type, pEntity: $Entity$$Type, p_152430_: float): void
public "addRunningEffects"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): boolean
public "onRemove"(pState: $BlockState$$Type, pLevel: $Level$$Type, pPos: $BlockPos$$Type, pNewState: $BlockState$$Type, pIsMoving: boolean): void
public "getLightEmission"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type): integer
public "getAcceptedBlockState"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, item: $ItemStack$$Type, face: $Direction$$Type): $BlockState
public "prepareMaterial"(pLevel: $Level$$Type, pPos: $BlockPos$$Type, pState: $BlockState$$Type, pPlayer: $Player$$Type, pHand: $InteractionHand$$Type, pHit: $BlockHitResult$$Type, material: $BlockState$$Type): $BlockState
public "getCopycatBlockEntity"(worldIn: $BlockGetter$$Type, pos: $BlockPos$$Type): $ICopycatBlockEntity
public "canToggleCT"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "isCTEnabled"(state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type): boolean
public "toggleCT"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type, hitResult: $BlockHitResult$$Type): $InteractionResult
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public "checkConnection"(reader: $BlockAndTintGetter$$Type, fromPos: $BlockPos$$Type, toPos: $BlockPos$$Type, fromState: $BlockState$$Type): boolean
public "canOcclude"(level: $BlockGetter$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): boolean
public "shapeCanOccludeNeighbor"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborPos: $BlockPos$$Type, dir: $Direction$$Type): $Optional<(boolean)>
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public "onWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public "onRemove"(state: $BlockState$$Type, world: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean, handler: $ICopycatBlock$OnRemoveHandler$$Type): void
public static "getMaterial"(reader: $BlockGetter$$Type, targetPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CCCopycatBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CCCopycatBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CCCopycatBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CCCopycatBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "stateType"(): $StateType
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getRotatedBlockState"(arg0: $BlockState$$Type, arg1: $Direction$$Type): $BlockState
public "updateAfterWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $BlockState
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($CCCopycatBlockEntity)>
get "blockEntityClass"(): $Class<($CCCopycatBlockEntity)>
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
declare module "com.copycatsplus.copycats.content.copycat.bytes.CopycatByteBlock$Byte" {
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Record} from "java.lang.Record"

export class $CopycatByteBlock$Byte extends $Record {
constructor(x: boolean, y: boolean, z: boolean)

public "relative"(direction: $Direction$$Type): $CopycatByteBlock$Byte
public "get"(axis: $Direction$Axis$$Type): boolean
public "equals"(obj: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): boolean
public "set"(axis: $Direction$Axis$$Type, value: boolean): $CopycatByteBlock$Byte
public "copy"(): $CopycatByteBlock$Byte
public "z"(): boolean
public "y"(): boolean
public "mirror"(mirror: $Mirror$$Type): $CopycatByteBlock$Byte
public "rotateX"(rotation: $Rotation$$Type): $CopycatByteBlock$Byte
public "rotateY"(rotation: $Rotation$$Type): $CopycatByteBlock$Byte
public "rotateZ"(rotation: $Rotation$$Type): $CopycatByteBlock$Byte
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatByteBlock$Byte$$Type = ({"x"?: boolean, "y"?: boolean, "z"?: boolean}) | ([x?: boolean, y?: boolean, z?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatByteBlock$Byte$$Original = $CopycatByteBlock$Byte;}
declare module "com.copycatsplus.copycats.content.copycat.corner_slice.CopycatCornerSliceBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$ItemRequirement} from "com.simibubi.create.content.schematics.requirement.ItemRequirement"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SpecialBlockItemRequirement$$Interface} from "com.simibubi.create.api.schematic.requirement.SpecialBlockItemRequirement"
import {$ICopycatBlock$$Type} from "com.copycatsplus.copycats.foundation.copycat.ICopycatBlock"
import {$BlockColor} from "net.minecraft.client.color.block.BlockColor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$CCWaterloggedCopycatBlock} from "com.copycatsplus.copycats.foundation.copycat.CCWaterloggedCopycatBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty, $IntegerProperty$$Type} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$StructureTransform$$Type} from "com.simibubi.create.content.contraptions.StructureTransform"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IStateType$$Interface} from "com.copycatsplus.copycats.foundation.copycat.IStateType"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CopycatCornerSliceBlock extends $CCWaterloggedCopycatBlock implements $IStateType$$Interface, $SpecialBlockItemRequirement$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "LAYERS": $IntegerProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($Half)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(pProperties: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(pState: $BlockState$$Type, pUseContext: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "hidesNeighborFace"(level: $BlockGetter$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, neighborState: $BlockState$$Type, dir: $Direction$$Type): boolean
public "supportsExternalFaceHiding"(state: $BlockState$$Type): boolean
public "getRequiredItems"(state: $BlockState$$Type, blockEntity: $BlockEntity$$Type): $ItemRequirement
public "onSneakWrenched"(state: $BlockState$$Type, context: $UseOnContext$$Type): $InteractionResult
public "getShape"(pState: $BlockState$$Type, pLevel: $BlockGetter$$Type, pPos: $BlockPos$$Type, pContext: $CollisionContext$$Type): $VoxelShape
public "transform"(state: $BlockState$$Type, transform: $StructureTransform$$Type): $BlockState
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "getRequiredItemsForLayer"(state: $BlockState$$Type, property: $IntegerProperty$$Type): $ItemRequirement
public static "getAppearance"(block: $ICopycatBlock$$Type, state: $BlockState$$Type, level: $BlockAndTintGetter$$Type, pos: $BlockPos$$Type, side: $Direction$$Type, queryState: $BlockState$$Type, queryPos: $BlockPos$$Type): $BlockState
public static "wrappedColor"(): $BlockColor
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CopycatCornerSliceBlock$$Type = ($CopycatCornerSliceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CopycatCornerSliceBlock$$Original = $CopycatCornerSliceBlock;}
