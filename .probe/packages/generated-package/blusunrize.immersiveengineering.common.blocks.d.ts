declare module "blusunrize.immersiveengineering.common.blocks.cloth.CushionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CushionBlock extends $IEBaseBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public "fallOn"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CushionBlock$$Type = ($CushionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CushionBlock$$Original = $CushionBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockEntityDrop" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$IEBlockInterfaces$IPlacementInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlacementInteraction"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$IBlockEntityDrop$$Interface extends $IEBlockInterfaces$IPlacementInteraction$$Interface {
}

export class $IEBlockInterfaces$IBlockEntityDrop implements $IEBlockInterfaces$IBlockEntityDrop$$Interface {
 "getBlockEntityDrop"(arg0: $LootContext$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
 "getPickBlock"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $HitResult$$Type): $ItemStack
 "onBEPlaced"(arg0: $BlockPlaceContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IBlockEntityDrop$$Type = ($IEBlockInterfaces$IBlockEntityDrop);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IBlockEntityDrop$$Original = $IEBlockInterfaces$IBlockEntityDrop;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.PostBlock$HorizontalOffset" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $PostBlock$HorizontalOffset extends $Enum<($PostBlock$HorizontalOffset)> implements $StringRepresentable$$Interface {
static readonly "NORTH": $PostBlock$HorizontalOffset
static readonly "WEST": $PostBlock$HorizontalOffset
static readonly "SOUTH": $PostBlock$HorizontalOffset
static readonly "NONE": $PostBlock$HorizontalOffset
static readonly "EAST": $PostBlock$HorizontalOffset

public static "get"(arg0: $Direction$$Type): $PostBlock$HorizontalOffset
public static "values"(): ($PostBlock$HorizontalOffset)[]
public static "valueOf"(arg0: StringJS): $PostBlock$HorizontalOffset
public "getOffset"(): $Vec3i
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "offset"(): $Vec3i
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostBlock$HorizontalOffset$$Type = (("none") | ("north") | ("south") | ("east") | ("west"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostBlock$HorizontalOffset$$Original = $PostBlock$HorizontalOffset;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ConnectorBlock<T extends $BlockEntity> extends $IEEntityBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>)
constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $BiFunction$$Type<($BlockPos), ($BlockState), (T)>)

public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConnectorBlock$$Type<T> = ($ConnectorBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConnectorBlock$$Original<T> = $ConnectorBlock<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISelectionBounds" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"

export interface $IEBlockInterfaces$ISelectionBounds$$Interface {

(arg0: $CollisionContext): $VoxelShape$$Type
}

export class $IEBlockInterfaces$ISelectionBounds implements $IEBlockInterfaces$ISelectionBounds$$Interface {
 "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$ISelectionBounds$$Type = ((arg0: $CollisionContext) => $VoxelShape$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$ISelectionBounds$$Original = $IEBlockInterfaces$ISelectionBounds;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.VerticalFacingBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $VerticalFacingBlock extends $IEBaseBlock {
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
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalFacingBlock$$Type = ($VerticalFacingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VerticalFacingBlock$$Original = $VerticalFacingBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.SawdustBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SawdustBlock extends $IEBaseBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "canBeReplaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getFireSpreadSpeed"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SawdustBlock$$Type = ($SawdustBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SawdustBlock$$Original = $SawdustBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IMirrorAble" {
import {$IEBlockInterfaces$BlockstateProvider$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$BlockstateProvider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$IMirrorAble$$Interface extends $IEBlockInterfaces$BlockstateProvider$$Interface {
set "mirrored"(value: boolean)
get "isMirrored"(): boolean
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}

export class $IEBlockInterfaces$IMirrorAble implements $IEBlockInterfaces$IMirrorAble$$Interface {
 "setMirrored"(arg0: boolean): void
 "getIsMirrored"(): boolean
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IMirrorAble$$Type = ($IEBlockInterfaces$IMirrorAble);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IMirrorAble$$Original = $IEBlockInterfaces$IMirrorAble;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.HatchBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HatchBlock extends $IEBaseBlock {
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
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HatchBlock$$Type = ($HatchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HatchBlock$$Original = $HatchBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IDirectionalBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IDirectionalBE"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$IEBlockInterfaces$BlockstateProvider$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$BlockstateProvider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export interface $IEBlockInterfaces$IStateBasedDirectional$$Interface extends $IEBlockInterfaces$IDirectionalBE$$Interface, $IEBlockInterfaces$BlockstateProvider$$Interface {
set "facing"(value: $Direction$$Type)
get "facingProperty"(): $Property<($Direction)>
get "facing"(): $Direction
get "facingLimitation"(): $PlacementLimitation
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}

export class $IEBlockInterfaces$IStateBasedDirectional implements $IEBlockInterfaces$IStateBasedDirectional$$Interface {
 "setFacing"(arg0: $Direction$$Type): void
 "getFacingProperty"(): $Property<($Direction)>
 "getFacing"(): $Direction
 "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
 "getFacingLimitation"(): $PlacementLimitation
 "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
 "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
 "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IStateBasedDirectional$$Type = ($IEBlockInterfaces$IStateBasedDirectional);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IStateBasedDirectional$$Original = $IEBlockInterfaces$IStateBasedDirectional;}
declare module "blusunrize.immersiveengineering.common.blocks.cloth.StripCurtainBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IEBlockInterfaces$IColouredBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IColouredBE"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IEBlockInterfaces$IRedstoneOutput$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IRedstoneOutput"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$Color4} from "blusunrize.immersiveengineering.api.utils.Color4"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockEntityDrop$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockEntityDrop"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IScrewdriverInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IScrewdriverInteraction"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$IEBlockInterfaces$IAdvancedDirectionalBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IAdvancedDirectionalBE"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $StripCurtainBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IEBlockInterfaces$IRedstoneOutput$$Interface, $IEBlockInterfaces$IScrewdriverInteraction$$Interface, $IEBlockInterfaces$IAdvancedDirectionalBE$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IColouredBE$$Interface, $IEBlockInterfaces$IBlockEntityDrop$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface {
 "colour": $Color4
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "canConnectRedstone"(arg0: $Direction$$Type): boolean
public "tickServer"(): void
public "onEntityCollision"(arg0: $Level$$Type, arg1: $Entity$$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getBlockEntityDrop"(arg0: $LootContext$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
public "onBEPlaced"(arg0: $BlockPlaceContext$$Type): void
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): $ItemInteractionResult
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "isCeilingAttached"(): boolean
public "setCeilingAttached"(arg0: boolean): void
public "onDirectionalPlacement"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: $LivingEntity$$Type): void
public "getRenderColour"(arg0: integer): integer
public "getWeakRSOutput"(arg0: $Direction$$Type): integer
public "getStrongRSOutput"(arg0: $Direction$$Type): integer
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "overrideVoltmeterRead"(): ($Pair<($DyeColor), (byte)>)[]
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "getPickBlock"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $HitResult$$Type): $ItemStack
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "ceilingAttached"(): boolean
set "ceilingAttached"(value: boolean)
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StripCurtainBlockEntity$$Type = ($StripCurtainBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StripCurtainBlockEntity$$Original = $StripCurtainBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.MultiblockBEType$BEWithTypeConstructor" {
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $MultiblockBEType$BEWithTypeConstructor$$Interface<T extends $BlockEntity> {

(arg0: $BlockEntityType<(T)>, arg1: $BlockPos, arg2: $BlockState): T
}

export class $MultiblockBEType$BEWithTypeConstructor<T extends $BlockEntity> implements $MultiblockBEType$BEWithTypeConstructor$$Interface {
 "create"(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBEType$BEWithTypeConstructor$$Type<T> = ((arg0: $BlockEntityType<(T)>, arg1: $BlockPos, arg2: $BlockState) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockBEType$BEWithTypeConstructor$$Original<T> = $MultiblockBEType$BEWithTypeConstructor<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.BreakerSwitchBlockEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TargetingInfo$$Type} from "blusunrize.immersiveengineering.api.TargetingInfo"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEBlockInterfaces$IRedstoneOutput$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IRedstoneOutput"
import {$ImmersiveConnectableBlockEntity} from "blusunrize.immersiveengineering.common.blocks.generic.ImmersiveConnectableBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IScrewdriverInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IScrewdriverInteraction"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Connection, $Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBlockInterfaces$IAdvancedDirectionalBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IAdvancedDirectionalBE"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEBlockInterfaces$IHammerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IImmersiveConnectable$$Type} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IPlayerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction"
import {$IEBlockInterfaces$IActiveState$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IActiveState"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $BreakerSwitchBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IBlockBounds$$Interface, $IEBlockInterfaces$IAdvancedDirectionalBE$$Interface, $IEBlockInterfaces$IActiveState$$Interface, $IEBlockInterfaces$IHammerInteraction$$Interface, $IEBlockInterfaces$IScrewdriverInteraction$$Interface, $IEBlockInterfaces$IPlayerInteraction$$Interface, $IEBlockInterfaces$IRedstoneOutput$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface {
 "wires": integer
 "rotation": integer
static readonly "LEFT_INDEX": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "inverted": boolean
static readonly "RIGHT_INDEX": integer

constructor(arg0: $BlockEntityType$$Type<($BreakerSwitchBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "canConnectRedstone"(arg0: $Direction$$Type): boolean
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): $ItemInteractionResult
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getInternalConnections"(): $Iterable<($Connection)>
public "getTargetedPoint"(arg0: $TargetingInfo$$Type, arg1: $Vec3i$$Type): $ConnectionPoint
public "connectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $IImmersiveConnectable$$Type, arg3: $ConnectionPoint$$Type): void
public "onDirectionalPlacement"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: $LivingEntity$$Type): void
public "getWeakRSOutput"(arg0: $Direction$$Type): integer
public "getStrongRSOutput"(arg0: $Direction$$Type): integer
public "notifyNeighbours"(): void
public "removeCable"(arg0: $Connection$$Type, arg1: $ConnectionPoint$$Type): void
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getIsActive"(): boolean
public "setActive"(arg0: boolean): void
public "overrideVoltmeterRead"(): ($Pair<($DyeColor), (byte)>)[]
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "internalConnections"(): $Iterable<($Connection)>
get "isActive"(): boolean
set "active"(value: boolean)
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreakerSwitchBlockEntity$$Type = ($BreakerSwitchBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BreakerSwitchBlockEntity$$Original = $BreakerSwitchBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.cloth.StripCurtainBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$StripCurtainBlockEntity} from "blusunrize.immersiveengineering.common.blocks.cloth.StripCurtainBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $StripCurtainBlock extends $IEEntityBlock<($StripCurtainBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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
static "CEILING_ATTACHED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static "FACING": $EnumProperty<($Direction)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StripCurtainBlock$$Type = ($StripCurtainBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StripCurtainBlock$$Original = $StripCurtainBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IESignBlocks$Wall" {
import {$WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$WallSignBlock} from "net.minecraft.world.level.block.WallSignBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IESignBlocks$Wall extends $WallSignBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallSignBlock)>
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

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IESignBlocks$Wall$$Type = ($IESignBlocks$Wall);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IESignBlocks$Wall$$Original = $IESignBlocks$Wall;}
declare module "blusunrize.immersiveengineering.common.blocks.BlockItemIE" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$List$$Type} from "java.util.List"
import {$RecipeType$$Type} from "net.minecraft.world.item.crafting.RecipeType"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipComponent} from "net.minecraft.world.inventory.tooltip.TooltipComponent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $BlockItemIE extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)
constructor(arg0: $Block$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canFitInsideContainerItems"(): boolean
public "getBurnTime"(arg0: $ItemStack$$Type, arg1: $RecipeType$$Type<(never)>): integer
public "setBurnTime"(arg0: integer): $BlockItemIE
public "getTooltipImage"(arg0: $ItemStack$$Type): $Optional<($TooltipComponent)>
public "getDescriptionId"(): StringJS
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "burnTime"(value: integer)
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockItemIE$$Type = ($BlockItemIE);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockItemIE$$Original = $BlockItemIE;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.EnergyMeterBlock" {
import {$EnergyMeterBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.EnergyMeterBlockEntity"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $EnergyMeterBlock extends $ConnectorBlock<($EnergyMeterBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "DUMMY": $Property<(boolean)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $Property<($Direction)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyMeterBlock$$Type = ($EnergyMeterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyMeterBlock$$Original = $EnergyMeterBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IColouredBE" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEBlockInterfaces$IColouredBE$$Interface {

(arg0: integer): integer
}

export class $IEBlockInterfaces$IColouredBE implements $IEBlockInterfaces$IColouredBE$$Interface {
 "getRenderColour"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IColouredBE$$Type = ((arg0: integer) => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IColouredBE$$Original = $IEBlockInterfaces$IColouredBE;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.BlastFurnacePreheaterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlastFurnacePreheaterBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.BlastFurnacePreheaterBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlastFurnacePreheaterBlock extends $IEEntityBlock<($BlastFurnacePreheaterBlockEntity)> {
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

public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnacePreheaterBlock$$Type = ($BlastFurnacePreheaterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastFurnacePreheaterBlock$$Original = $BlastFurnacePreheaterBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.AnyFacingEntityBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $AnyFacingEntityBlock<T extends $BlockEntity> extends $IEEntityBlock<(T)> {
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

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnyFacingEntityBlock$$Type<T> = ($AnyFacingEntityBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnyFacingEntityBlock$$Original<T> = $AnyFacingEntityBlock<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.BlockIESlab" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SlabBlock} from "net.minecraft.world.level.block.SlabBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$SlabType} from "net.minecraft.world.level.block.state.properties.SlabType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IIEBlock$$Interface} from "blusunrize.immersiveengineering.common.blocks.IIEBlock"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockBehaviour$StatePredicate} from "net.minecraft.world.level.block.state.BlockBehaviour$StatePredicate"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockIESlab<T extends $Block> extends $SlabBlock implements $IIEBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SlabBlock)>
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
static readonly "TYPE": $EnumProperty<($SlabType)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<(T)>)

public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
public static "isNormalCube"(arg0: $Supplier$$Type<($Block$$Type)>): $BlockBehaviour$StatePredicate
public static "causesSuffocation"(arg0: $Supplier$$Type<($Block$$Type)>): $BlockBehaviour$StatePredicate
public "hasFlavour"(): boolean
public "getNameForFlavour"(): StringJS
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "nameForFlavour"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockIESlab$$Type<T> = ($BlockIESlab<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockIESlab$$Original<T> = $BlockIESlab<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.CraftingTableBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CraftingTableBlockEntity} from "blusunrize.immersiveengineering.common.blocks.wooden.CraftingTableBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CraftingTableBlock extends $IEEntityBlock<($CraftingTableBlockEntity)> {
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingTableBlock$$Type = ($CraftingTableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingTableBlock$$Original = $CraftingTableBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE" {
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IETickableBase$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IETickableBase"

export interface $IEServerTickableBE$$Interface extends $IETickableBase$$Interface {

(): void
}

export class $IEServerTickableBE implements $IEServerTickableBE$$Interface {
 "tickServer"(): void
static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
 "canTickAny"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEServerTickableBE$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEServerTickableBE$$Original = $IEServerTickableBE;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$BlockstateProvider" {
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$BlockstateProvider$$Interface {
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}

export class $IEBlockInterfaces$BlockstateProvider implements $IEBlockInterfaces$BlockstateProvider$$Interface {
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$BlockstateProvider$$Type = ($IEBlockInterfaces$BlockstateProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$BlockstateProvider$$Original = $IEBlockInterfaces$BlockstateProvider;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TurretBlockEntity$TurretConfig" {
import {$List, $List$$Type} from "java.util.List"
import {$DualCodec} from "malte0811.dualcodecs.DualCodec"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $TurretBlockEntity$TurretConfig extends $Record {
static readonly "CODECS": $DualCodec<($ByteBuf), ($TurretBlockEntity$TurretConfig)>
static readonly "DEFAULT": $TurretBlockEntity$TurretConfig

constructor(targetList: $List$$Type<(StringJS)>, whitelist: boolean, attackAnimals: boolean, attackPlayers: boolean, attackNeutrals: boolean, redstoneControlInverted: boolean)

public "addToList"(arg0: StringJS): $TurretBlockEntity$TurretConfig
public "attackAnimals"(): boolean
public "attackNeutrals"(): boolean
public "redstoneControlInverted"(): boolean
public "withTargetList"(arg0: $List$$Type<(StringJS)>): $TurretBlockEntity$TurretConfig
public "withWhitelist"(arg0: boolean): $TurretBlockEntity$TurretConfig
public "withAttackAnimals"(arg0: boolean): $TurretBlockEntity$TurretConfig
public "withAttackPlayers"(arg0: boolean): $TurretBlockEntity$TurretConfig
public "withAttackNeutrals"(arg0: boolean): $TurretBlockEntity$TurretConfig
public "attackPlayers"(): boolean
public "targetList"(): $List<(StringJS)>
public "whitelist"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurretBlockEntity$TurretConfig$$Type = ({"redstoneControlInverted"?: boolean, "attackAnimals"?: boolean, "attackNeutrals"?: boolean, "attackPlayers"?: boolean, "whitelist"?: boolean, "targetList"?: $List$$Type<(StringJS)>}) | ([redstoneControlInverted?: boolean, attackAnimals?: boolean, attackNeutrals?: boolean, attackPlayers?: boolean, whitelist?: boolean, targetList?: $List$$Type<(StringJS)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurretBlockEntity$TurretConfig$$Original = $TurretBlockEntity$TurretConfig;}
declare module "blusunrize.immersiveengineering.common.blocks.cloth.ShaderBannerBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$CapabilityShader$ShaderWrapper_Direct} from "blusunrize.immersiveengineering.api.shader.CapabilityShader$ShaderWrapper_Direct"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ShaderBannerBlockEntity extends $IEBaseBlockEntity {
 "shader": $CapabilityShader$ShaderWrapper_Direct
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($ShaderBannerBlockEntity$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBannerBlockEntity$$Type = ($ShaderBannerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderBannerBlockEntity$$Original = $ShaderBannerBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IEBlockInterfaces$ICollisionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISelectionBounds"

export interface $IEBlockInterfaces$IBlockBounds$$Interface extends $IEBlockInterfaces$ISelectionBounds$$Interface, $IEBlockInterfaces$ICollisionBounds$$Interface {

(arg0: $CollisionContext): $VoxelShape$$Type
}

export class $IEBlockInterfaces$IBlockBounds implements $IEBlockInterfaces$IBlockBounds$$Interface {
 "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
 "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
 "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IBlockBounds$$Type = ((arg0: $CollisionContext) => $VoxelShape$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IBlockBounds$$Original = $IEBlockInterfaces$IBlockBounds;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ICollisionBounds" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext, $CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"

export interface $IEBlockInterfaces$ICollisionBounds$$Interface {

(arg0: $CollisionContext): $VoxelShape$$Type
}

export class $IEBlockInterfaces$ICollisionBounds implements $IEBlockInterfaces$ICollisionBounds$$Interface {
 "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$ICollisionBounds$$Type = ((arg0: $CollisionContext) => $VoxelShape$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$ICollisionBounds$$Original = $IEBlockInterfaces$ICollisionBounds;}
declare module "blusunrize.immersiveengineering.common.blocks.cloth.BlockItemBalloon" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$BlockItemIE} from "blusunrize.immersiveengineering.common.blocks.BlockItemIE"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $BlockItemBalloon extends $BlockItemIE {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getName"(arg0: $ItemStack$$Type): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
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
export type $BlockItemBalloon$$Type = ($BlockItemBalloon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockItemBalloon$$Original = $BlockItemBalloon;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.EnergyMeterBlockEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TargetingInfo$$Type} from "blusunrize.immersiveengineering.api.TargetingInfo"
import {$DoubleList} from "it.unimi.dsi.fastutil.doubles.DoubleList"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ImmersiveConnectableBlockEntity} from "blusunrize.immersiveengineering.common.blocks.generic.ImmersiveConnectableBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IHasDummyBlocks$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IGeneralMultiblock} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock"
import {$Connection} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$Collection} from "java.util.Collection"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBlockInterfaces$IComparatorOverride$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IComparatorOverride"
import {$EnergyTransferHandler$EnergyConnector$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.EnergyTransferHandler$EnergyConnector"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IImmersiveConnectable$$Type} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IPlayerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $EnergyMeterBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEServerTickableBE$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IHasDummyBlocks$$Interface, $IEBlockInterfaces$IPlayerInteraction$$Interface, $IEBlockInterfaces$IComparatorOverride$$Interface, $EnergyTransferHandler$EnergyConnector$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface, $IModelOffsetProvider$$Interface {
readonly "lastPackets": $DoubleList
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($EnergyMeterBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "canConnect"(): boolean
public "isSource"(arg0: $ConnectionPoint$$Type): boolean
public "tickServer"(): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "getIgnored"(arg0: $IImmersiveConnectable$$Type): $Set<($BlockPos)>
public "getConnectionMaster"(arg0: $WireType$$Type, arg1: $TargetingInfo$$Type): $BlockPos
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getInternalConnections"(): $Iterable<($Connection)>
public "getTargetedPoint"(arg0: $TargetingInfo$$Type, arg1: $Vec3i$$Type): $ConnectionPoint
public "connectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $IImmersiveConnectable$$Type, arg3: $ConnectionPoint$$Type): void
public "isSink"(arg0: $ConnectionPoint$$Type): boolean
public "getAveragePower"(): integer
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "getComparatorInputOverride"(): integer
public "onLoad"(): void
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "extractEnergy"(arg0: integer): void
public "getRequestedEnergy"(): integer
public "insertEnergy"(arg0: integer): void
public "getAvailableEnergy"(): integer
public "onEnergyPassedThrough"(arg0: double): void
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
public "isDummy"(): boolean
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "internalConnections"(): $Iterable<($Connection)>
get "averagePower"(): integer
get "comparatorInputOverride"(): integer
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "requestedEnergy"(): integer
get "availableEnergy"(): integer
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
get "dummy"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyMeterBlockEntity$$Type = ($EnergyMeterBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyMeterBlockEntity$$Original = $EnergyMeterBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TransformerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$TransformerBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.TransformerBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TransformerBlock extends $ConnectorBlock<($TransformerBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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
public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerBlock$$Type = ($TransformerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformerBlock$$Original = $TransformerBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.WarningSignBlock$WarningSignIcon" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $WarningSignBlock$WarningSignIcon extends $Enum<($WarningSignBlock$WarningSignIcon)> implements $StringRepresentable$$Interface {
static readonly "ATTENTION": $WarningSignBlock$WarningSignIcon
static readonly "ARROW_DOUBLE_UP": $WarningSignBlock$WarningSignIcon
static readonly "ARROW_RIGHT": $WarningSignBlock$WarningSignIcon
static readonly "WARDEN": $WarningSignBlock$WarningSignIcon
static readonly "SHRIEKER": $WarningSignBlock$WarningSignIcon
static readonly "ARROW_UP": $WarningSignBlock$WarningSignIcon
static readonly "HOT": $WarningSignBlock$WarningSignIcon
static readonly "ARROW_LEFT": $WarningSignBlock$WarningSignIcon
static readonly "EAR_DEFENDERS": $WarningSignBlock$WarningSignIcon
static readonly "VILLAGER": $WarningSignBlock$WarningSignIcon
static readonly "MAGNET": $WarningSignBlock$WarningSignIcon
static readonly "ARROW_DOUBLE_RIGHT": $WarningSignBlock$WarningSignIcon
static readonly "ARROW_DOUBLE_LEFT": $WarningSignBlock$WarningSignIcon
static readonly "ARROW_DOUBLE_DOWN": $WarningSignBlock$WarningSignIcon
static readonly "CREEPER": $WarningSignBlock$WarningSignIcon
static readonly "FIRE": $WarningSignBlock$WarningSignIcon
static readonly "FALLING": $WarningSignBlock$WarningSignIcon
static readonly "ARROW_DOWN": $WarningSignBlock$WarningSignIcon
static readonly "CAT": $WarningSignBlock$WarningSignIcon
static readonly "SOUND": $WarningSignBlock$WarningSignIcon
static readonly "COLD": $WarningSignBlock$WarningSignIcon
static readonly "TURRET": $WarningSignBlock$WarningSignIcon
static readonly "ELECTRIC": $WarningSignBlock$WarningSignIcon

public "hasBanner"(): boolean
public static "values"(): ($WarningSignBlock$WarningSignIcon)[]
public static "valueOf"(arg0: StringJS): $WarningSignBlock$WarningSignIcon
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
export type $WarningSignBlock$WarningSignIcon$$Type = (("attention") | ("magnet") | ("cold") | ("electric") | ("hot") | ("fire") | ("falling") | ("sound") | ("ear_defenders") | ("cat") | ("villager") | ("turret") | ("creeper") | ("shrieker") | ("warden") | ("arrow_up") | ("arrow_down") | ("arrow_left") | ("arrow_right") | ("arrow_double_up") | ("arrow_double_down") | ("arrow_double_left") | ("arrow_double_right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WarningSignBlock$WarningSignIcon$$Original = $WarningSignBlock$WarningSignIcon;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IConfigurableSides" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IEEnums$IOSideConfig} from "blusunrize.immersiveengineering.api.IEEnums$IOSideConfig"

export interface $IEBlockInterfaces$IConfigurableSides$$Interface {
}

export class $IEBlockInterfaces$IConfigurableSides implements $IEBlockInterfaces$IConfigurableSides$$Interface {
 "toggleSide"(arg0: $Direction$$Type, arg1: $Player$$Type): boolean
 "getSideConfig"(arg0: $Direction$$Type): $IEEnums$IOSideConfig
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IConfigurableSides$$Type = ($IEBlockInterfaces$IConfigurableSides);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IConfigurableSides$$Original = $IEBlockInterfaces$IConfigurableSides;}
declare module "blusunrize.immersiveengineering.common.blocks.CrateItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$BlockItemIE} from "blusunrize.immersiveengineering.common.blocks.BlockItemIE"
import {$LivingEvent$LivingVisibilityEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingEvent$LivingVisibilityEvent"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingChangeTargetEvent$$Type} from "net.neoforged.neoforge.event.entity.living.LivingChangeTargetEvent"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$EquipmentSlot} from "net.minecraft.world.entity.EquipmentSlot"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $CrateItem extends $BlockItemIE {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static "incognitoPlayers": $Set<(integer)>
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type)

public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public static "adjustVisibility"(arg0: $LivingEvent$LivingVisibilityEvent$$Type): void
public static "preventTargeting"(arg0: $LivingChangeTargetEvent$$Type): void
public "getEquipmentSlot"(arg0: $ItemStack$$Type): $EquipmentSlot
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
export type $CrateItem$$Type = ($CrateItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrateItem$$Original = $CrateItem;}
declare module "blusunrize.immersiveengineering.common.blocks.IETrapDoorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$TrapDoorBlock} from "net.minecraft.world.level.block.TrapDoorBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IETrapDoorBlock extends $TrapDoorBlock {
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

constructor(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setLockedByRedstone"(): $IETrapDoorBlock
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "lockedByRedstone"(): $IETrapDoorBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IETrapDoorBlock$$Type = ($IETrapDoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IETrapDoorBlock$$Original = $IETrapDoorBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.PipeValveBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEBlockCapabilityCaches$IEBlockCapabilityCache} from "blusunrize.immersiveengineering.common.util.IEBlockCapabilityCaches$IEBlockCapabilityCache"
import {$Map} from "java.util.Map"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IFluidPipe$$Interface} from "blusunrize.immersiveengineering.api.fluid.IFluidPipe"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $PipeValveBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface, $IFluidPipe$$Interface {
readonly "blockFluidHandlers": $Map<($Direction), ($IEBlockCapabilityCaches$IEBlockCapabilityCache<($IFluidHandler)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canOutputPressurized"(arg0: boolean): boolean
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($PipeValveBlockEntity$$Type)>): void
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public static "getTransferableAmount"(arg0: boolean): integer
public "stripPressureTag"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeValveBlockEntity$$Type = ($PipeValveBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PipeValveBlockEntity$$Original = $PipeValveBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.PlacementLimitation" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Enum} from "java.lang.Enum"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $PlacementLimitation extends $Enum<($PlacementLimitation)> {
static readonly "VERTICAL": $PlacementLimitation
static readonly "SIDE_CLICKED": $PlacementLimitation
static readonly "PISTON_INVERTED": $PlacementLimitation
static readonly "HORIZONTAL_QUADRANT": $PlacementLimitation
static readonly "PISTON_LIKE_NO_DOWN": $PlacementLimitation
static readonly "HORIZONTAL_PREFER_SIDE": $PlacementLimitation
static readonly "HORIZONTAL": $PlacementLimitation
static readonly "PISTON_LIKE": $PlacementLimitation
static readonly "SIDE_CLICKED_INVERTED": $PlacementLimitation
static readonly "PISTON_INVERTED_NO_DOWN": $PlacementLimitation
static readonly "HORIZONTAL_AXIS": $PlacementLimitation
static readonly "FIXED_DOWN": $PlacementLimitation

public "getDirectionForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getDirectionForPlacement"(arg0: $Direction$$Type, arg1: $LivingEntity$$Type, arg2: $Vec3$$Type): $Direction
public static "values"(): ($PlacementLimitation)[]
public static "valueOf"(arg0: StringJS): $PlacementLimitation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacementLimitation$$Type = (("side_clicked") | ("side_clicked_inverted") | ("piston_like") | ("piston_like_no_down") | ("piston_inverted") | ("piston_inverted_no_down") | ("horizontal") | ("vertical") | ("horizontal_axis") | ("horizontal_quadrant") | ("horizontal_prefer_side") | ("fixed_down"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacementLimitation$$Original = $PlacementLimitation;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks" {
import {$IEBlockInterfaces$IGeneralMultiblock, $IEBlockInterfaces$IGeneralMultiblock$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$IHasDummyBlocks$$Interface extends $IEBlockInterfaces$IGeneralMultiblock$$Interface {
get "dummy"(): boolean
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}

export class $IEBlockInterfaces$IHasDummyBlocks implements $IEBlockInterfaces$IHasDummyBlocks$$Interface {
 "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
 "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
 "isDummy"(): boolean
 "master"(): $IEBlockInterfaces$IGeneralMultiblock
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IHasDummyBlocks$$Type = ($IEBlockInterfaces$IHasDummyBlocks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IHasDummyBlocks$$Original = $IEBlockInterfaces$IHasDummyBlocks;}
declare module "blusunrize.immersiveengineering.common.blocks.ticking.IETickableBase" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IETickableBase$$Interface {
}

export class $IETickableBase implements $IETickableBase$$Interface {
 "canTickAny"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IETickableBase$$Type = ($IETickableBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IETickableBase$$Original = $IETickableBase;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TeslaCoilBlockEntity" {
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$MutableEnergyStorage} from "blusunrize.immersiveengineering.api.energy.MutableEnergyStorage"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEClientTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEClientTickableBE"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IHasDummyBlocks$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IGeneralMultiblock} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock"
import {$IEBlockInterfaces$IScrewdriverInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IScrewdriverInteraction"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$TeslaCoilBlockEntity$LightningAnimation} from "blusunrize.immersiveengineering.common.blocks.metal.TeslaCoilBlockEntity$LightningAnimation"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $TeslaCoilBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IEClientTickableBE$$Interface, $IEBlockInterfaces$IHasDummyBlocks$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface, $IEBlockInterfaces$IScrewdriverInteraction$$Interface, $IModelOffsetProvider$$Interface {
 "energyStorage": $MutableEnergyStorage
 "renderBB": $AABB
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "redstoneControlInverted": boolean
readonly "effectMap": $List<($TeslaCoilBlockEntity$LightningAnimation)>
 "lowPower": boolean

constructor(arg0: $BlockEntityType$$Type<($TeslaCoilBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tickClient"(): void
public "tickServer"(): void
public "canRun"(arg0: integer): boolean
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "receiveMessageFromServer"(arg0: $CompoundTag$$Type): void
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): $ItemInteractionResult
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
public "initFreeStreamer"(arg0: double, arg1: double, arg2: double): void
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($TeslaCoilBlockEntity$$Type)>): void
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "canTickAny"(): boolean
public "isDummy"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "dummy"(): boolean
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
declare module "blusunrize.immersiveengineering.common.blocks.wooden.BlueprintShelfBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$AnyFacingEntityBlock} from "blusunrize.immersiveengineering.common.blocks.generic.AnyFacingEntityBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlueprintShelfBlockEntity} from "blusunrize.immersiveengineering.common.blocks.wooden.BlueprintShelfBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlueprintShelfBlock extends $AnyFacingEntityBlock<($BlueprintShelfBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLUEPRINT_SLOT_FILLED": ($BooleanProperty)[]
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

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintShelfBlock$$Type = ($BlueprintShelfBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlueprintShelfBlock$$Original = $BlueprintShelfBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.FakeLightBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PathComputationType$$Type} from "net.minecraft.world.level.pathfinder.PathComputationType"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$FakeLightBlock$FakeLightBlockEntity} from "blusunrize.immersiveengineering.common.blocks.FakeLightBlock$FakeLightBlockEntity"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FakeLightBlock extends $IEEntityBlock<($FakeLightBlock$FakeLightBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public "isPathfindable"(arg0: $BlockState$$Type, arg1: $PathComputationType$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "isAir"(arg0: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeLightBlock$$Type = ($FakeLightBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FakeLightBlock$$Original = $FakeLightBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IESignBlocks$WallHanging" {
import {$WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$WallHangingSignBlock} from "net.minecraft.world.level.block.WallHangingSignBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IESignBlocks$WallHanging extends $WallHangingSignBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($WallHangingSignBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SHAPE_NORTHSOUTH": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "PLANK_EASTWEST": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "PLANK_NORTHSOUTH": $VoxelShape
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "SHAPE_EASTWEST": $VoxelShape

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IESignBlocks$WallHanging$$Type = ($IESignBlocks$WallHanging);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IESignBlocks$WallHanging$$Original = $IESignBlocks$WallHanging;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TeslaCoilBlockEntity$LightningAnimation" {
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$List} from "java.util.List"
import {$LivingEntity, $LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $TeslaCoilBlockEntity$LightningAnimation {
 "targetPos": $Vec3
 "targetEntity": $LivingEntity
 "subPoints": $List<($Vec3)>
 "startPos": $Vec3

constructor(arg0: $Vec3$$Type, arg1: $LivingEntity$$Type)
constructor(arg0: $Vec3$$Type, arg1: $Vec3$$Type)

public "tick"(): boolean
public "shoudlRecalculateLightning"(): boolean
public "createLightning"(arg0: $RandomSource$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TeslaCoilBlockEntity$LightningAnimation$$Type = ($TeslaCoilBlockEntity$LightningAnimation);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TeslaCoilBlockEntity$LightningAnimation$$Original = $TeslaCoilBlockEntity$LightningAnimation;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IActiveState" {
import {$IEBlockInterfaces$BlockstateProvider$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$BlockstateProvider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$IActiveState$$Interface extends $IEBlockInterfaces$BlockstateProvider$$Interface {
get "isActive"(): boolean
set "active"(value: boolean)
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}

export class $IEBlockInterfaces$IActiveState implements $IEBlockInterfaces$IActiveState$$Interface {
 "getIsActive"(): boolean
 "setActive"(arg0: boolean): void
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IActiveState$$Type = ($IEBlockInterfaces$IActiveState);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IActiveState$$Original = $IEBlockInterfaces$IActiveState;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBaseBlock$IELadderBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IEBaseBlock$IELadderBlock extends $IEBaseBlock {
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

public "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
public static "applyLadderLogic"(arg0: $Entity$$Type): void
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBaseBlock$IELadderBlock$$Type = ($IEBaseBlock$IELadderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBaseBlock$IELadderBlock$$Original = $IEBaseBlock$IELadderBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.PostTransformerBlockEntity" {
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$AbstractTransformerBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.AbstractTransformerBlockEntity"
import {$TargetingInfo$$Type} from "blusunrize.immersiveengineering.api.TargetingInfo"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ConnectionPoint} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PostTransformerBlockEntity extends $AbstractTransformerBlockEntity implements $IEBlockInterfaces$IBlockBounds$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getFacingLimitation"(): $PlacementLimitation
public "getTargetedPoint"(arg0: $TargetingInfo$$Type, arg1: $Vec3i$$Type): $ConnectionPoint
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
get "facingLimitation"(): $PlacementLimitation
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostTransformerBlockEntity$$Type = ($PostTransformerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostTransformerBlockEntity$$Original = $PostTransformerBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.CraftingTableBlockEntity" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEMenuTypes$ArgContainer} from "blusunrize.immersiveengineering.common.register.IEMenuTypes$ArgContainer"
import {$IEBlockInterfaces$IInteractionObjectIE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IInteractionObjectIE"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IDropInventory$$Interface} from "blusunrize.immersiveengineering.common.util.inventory.IDropInventory"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $CraftingTableBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IInteractionObjectIE$$Interface<($CraftingTableBlockEntity)>, $IDropInventory$$Interface {
static readonly "GRID_SIZE": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "STORAGE_SIZE": integer

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getGuiMaster"(): $CraftingTableBlockEntity
public "canUseGui"(arg0: $Player$$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getCraftingInventory"(): $NonNullList<($ItemStack)>
public "getContainerType"(): $IEMenuTypes$ArgContainer<($CraftingTableBlockEntity), (never)>
public "getDisplayName"(): $Component
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($CraftingTableBlockEntity$$Type)>): void
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "isValid"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "guiMaster"(): $CraftingTableBlockEntity
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "droppedItems"(): $Stream<($ItemStack)>
get "craftingInventory"(): $NonNullList<($ItemStack)>
get "containerType"(): $IEMenuTypes$ArgContainer<($CraftingTableBlockEntity), (never)>
get "displayName"(): $Component
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingTableBlockEntity$$Type = ($CraftingTableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingTableBlockEntity$$Original = $CraftingTableBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.PipeValveBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$PipeValveBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.PipeValveBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PipeValveBlock extends $IEEntityBlock<($PipeValveBlockEntity)> {
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

/**
 * 
 * @deprecated
 */
public "getBlockSupportShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
/**
 * 
 * @deprecated
 */
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeValveBlock$$Type = ($PipeValveBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PipeValveBlock$$Original = $PipeValveBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISpawnInterdiction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEBlockInterfaces$ISpawnInterdiction$$Interface {

(): double
get "interdictionRangeSquared"(): double
}

export class $IEBlockInterfaces$ISpawnInterdiction implements $IEBlockInterfaces$ISpawnInterdiction$$Interface {
 "getInterdictionRangeSquared"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$ISpawnInterdiction$$Type = (() => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$ISpawnInterdiction$$Original = $IEBlockInterfaces$ISpawnInterdiction;}
declare module "blusunrize.immersiveengineering.common.blocks.CrateBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$WoodenCrateBlockEntity} from "blusunrize.immersiveengineering.common.blocks.wooden.WoodenCrateBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CrateBlock extends $IEEntityBlock<($WoodenCrateBlockEntity)> {
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

public "attack"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrateBlock$$Type = ($CrateBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrateBlock$$Original = $CrateBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TransformerHVBlockEntity" {
import {$TransformerBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.TransformerBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TransformerHVBlockEntity extends $TransformerBlockEntity {
 "dummy": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getHigherWiretype"(): StringJS
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
get "higherWiretype"(): StringJS
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerHVBlockEntity$$Type = ($TransformerHVBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformerHVBlockEntity$$Original = $TransformerHVBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IEBlockInterfaces$BlockstateProvider$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$BlockstateProvider"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IEBaseBlockEntity extends $BlockEntity implements $IEBlockInterfaces$BlockstateProvider$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "handleUpdateTag"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "onChunkUnloaded"(): void
public "onEntityCollision"(arg0: $Level$$Type, arg1: $Entity$$Type): void
public "markContainingBlockForUpdate"(arg0: $BlockState$$Type): void
public "receiveMessageFromClient"(arg0: $CompoundTag$$Type): void
public "getLevelNonnull"(): $Level
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "markBlockForUpdate"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "setRemovedIE"(): void
public "setOverrideState"(arg0: $BlockState$$Type): void
public "receiveMessageFromServer"(arg0: $CompoundTag$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
public "onLoad"(): void
public "getBlockState"(): $BlockState
public "setChanged"(): void
public "setRemoved"(): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
public "setBlockState"(arg0: $BlockState$$Type): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "levelNonnull"(): $Level
get "removedIE"(): void
set "overrideState"(value: $BlockState$$Type)
set "level"(value: $Level$$Type)
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
get "blockState"(): $BlockState
get "changed"(): void
get "removed"(): void
set "blockState"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBaseBlockEntity$$Type = ($IEBaseBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBaseBlockEntity$$Original = $IEBaseBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.PostBlock" {
import {$PostBlock$HorizontalOffset} from "blusunrize.immersiveengineering.common.blocks.generic.PostBlock$HorizontalOffset"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPostBlock$$Interface} from "blusunrize.immersiveengineering.api.IPostBlock"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PostBlock extends $IEBaseBlock implements $IPostBlock$$Interface, $IModelOffsetProvider$$Interface {
static readonly "HORIZONTAL_OFFSET": $EnumProperty<($PostBlock$HorizontalOffset)>
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "POST_SLAVE": $IntegerProperty
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

public "isLadder"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $LivingEntity$$Type): boolean
public "onIEBlockPlacedBy"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "canConnectTransformer"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): boolean
public static "hasConnection"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostBlock$$Type = ($PostBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostBlock$$Original = $PostBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.CagelampBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockOverlayText$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockOverlayText"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CagelampBlock extends $IEBaseBlock implements $IEBlockInterfaces$IBlockOverlayText$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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
public "onIEBlockPlacedBy"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "getOverlayText"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $HitResult$$Type, arg3: boolean): ($Component)[]
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "updateActiveState"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CagelampBlock$$Type = ($CagelampBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CagelampBlock$$Original = $CagelampBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.BlastFurnacePreheaterBlockEntity" {
import {$IEBlockInterfaces$IGeneralMultiblock} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$MutableEnergyStorage} from "blusunrize.immersiveengineering.api.energy.MutableEnergyStorage"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEClientTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEClientTickableBE"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IHasDummyBlocks$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$IEBlockInterfaces$ISoundBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISoundBE"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlastFurnacePreheaterBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IHasDummyBlocks$$Interface, $IModelOffsetProvider$$Interface, $IEClientTickableBE$$Interface, $IEBlockInterfaces$ISoundBE$$Interface {
 "dummy": integer
readonly "energyStorage": $MutableEnergyStorage
static readonly "ANGLE_PER_TICK": float
 "active": boolean
 "angle": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($BlastFurnacePreheaterBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tickClient"(): void
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
public "shouldPlaySound"(arg0: StringJS): boolean
public "doSpeedup"(): integer
public "turnOff"(): void
public "isDummy"(): boolean
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($BlastFurnacePreheaterBlockEntity$$Type)>): void
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getSoundRadiusSq"(): float
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "canTickAny"(): boolean
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "soundRadiusSq"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnacePreheaterBlockEntity$$Type = ($BlastFurnacePreheaterBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastFurnacePreheaterBlockEntity$$Original = $BlastFurnacePreheaterBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.WoodenCrateBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IIEInventory$$Interface} from "blusunrize.immersiveengineering.common.util.inventory.IIEInventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LockCode} from "net.minecraft.world.LockCode"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockOverlayText$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockOverlayText"
import {$Stream} from "java.util.stream.Stream"
import {$IEBlockInterfaces$IBlockEntityDrop$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockEntityDrop"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$RandomizableContainerBlockEntity} from "net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$LootTable$$Type} from "net.minecraft.world.level.storage.loot.LootTable"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$IEBlockInterfaces$IComparatorOverride$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IComparatorOverride"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$IEBlockInterfaces$IPlayerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $WoodenCrateBlockEntity extends $RandomizableContainerBlockEntity implements $IIEInventory$$Interface, $IEBlockInterfaces$IBlockEntityDrop$$Interface, $IEBlockInterfaces$IComparatorOverride$$Interface, $IEBlockInterfaces$IPlayerInteraction$$Interface, $IEBlockInterfaces$IBlockOverlayText$$Interface {
static readonly "HITS_TO_SEAL": integer
static readonly "CONTAINER_SIZE": integer
 "name": $Component
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "lockKey": $LockCode

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "canOpen"(arg0: $Player$$Type): boolean
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "isStackValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getInventoryCap"(): $IItemHandler
public "getOverlayText"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $HitResult$$Type, arg3: boolean): ($Component)[]
public "getBlockEntityDrop"(arg0: $LootContext$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
public "onBEPlaced"(arg0: $BlockPlaceContext$$Type): void
public "onBEPlaced"(arg0: $ItemStack$$Type): void
public "doGraphicalUpdates"(): void
public "getComparatorInputOverride"(): integer
public "isSealed"(): boolean
public "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
public "getInventory"(): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public "getContainerSize"(): integer
public "setCustomName"(arg0: $Component$$Type): void
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($WoodenCrateBlockEntity$$Type)>): void
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getComparatedSize"(): integer
public "getPickBlock"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $HitResult$$Type): $ItemStack
public static "setBlockEntityLootTable"(arg0: $BlockGetter$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $ResourceKey$$Type<($LootTable)>): void
public "getLevel"(): $Level
public "getBlockPos"(): $BlockPos
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "setChanged"(): void
public static "tryClear"(arg0: any): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "inventoryCap"(): $IItemHandler
get "comparatorInputOverride"(): integer
get "sealed"(): boolean
get "inventory"(): $NonNullList<($ItemStack)>
get "containerSize"(): integer
set "customName"(value: $Component$$Type)
get "droppedItems"(): $Stream<($ItemStack)>
get "comparatedSize"(): integer
get "level"(): $Level
get "blockPos"(): $BlockPos
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodenCrateBlockEntity$$Type = ($WoodenCrateBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodenCrateBlockEntity$$Original = $WoodenCrateBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.WatermillBlockEntity" {
import {$IEBlockInterfaces$IGeneralMultiblock} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$IEClientTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEClientTickableBE"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IHasDummyBlocks$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$ISoundBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISoundBE"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $WatermillBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IEClientTickableBE$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IHasDummyBlocks$$Interface, $IEBlockInterfaces$ISoundBE$$Interface {
 "offset": (integer)[]
 "renderAABB": $AABB
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($WatermillBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "handleUpdate"(arg0: $Direction$$Type): void
public "tickClient"(): void
public "tickServer"(): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "onNeighborBlockChange"(arg0: $BlockPos$$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "setShouldUpdate"(): void
public "getIFScaledTorque"(): double
public "getTorque"(arg0: boolean, arg1: boolean): $Vec3
public "shouldPlaySound"(arg0: StringJS): boolean
public "isDummy"(): boolean
public "onLoad"(): void
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public "isBlocked"(): boolean
public "getRotation"(): double
public "getSpeed"(): double
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "getSoundRadiusSq"(): float
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "shouldUpdate"(): void
get "IFScaledTorque"(): double
get "dummy"(): boolean
get "blocked"(): boolean
get "rotation"(): double
get "speed"(): double
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "soundRadiusSq"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatermillBlockEntity$$Type = ($WatermillBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatermillBlockEntity$$Original = $WatermillBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FloodlightBlockEntity" {
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ImmersiveConnectableBlockEntity} from "blusunrize.immersiveengineering.common.blocks.generic.ImmersiveConnectableBlockEntity"
import {$ComputerControllable$$Interface} from "blusunrize.immersiveengineering.common.util.compat.computers.generic.ComputerControllable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IScrewdriverInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IScrewdriverInteraction"
import {$ArrayList$$Type} from "java.util.ArrayList"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBlockInterfaces$IAdvancedDirectionalBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IAdvancedDirectionalBE"
import {$EnergyTransferHandler$EnergyConnector$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.EnergyTransferHandler$EnergyConnector"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEBlockInterfaces$ISpawnInterdiction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISpawnInterdiction"
import {$ComputerControlState} from "blusunrize.immersiveengineering.api.utils.ComputerControlState"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEBlockInterfaces$IHammerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IActiveState$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IActiveState"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $FloodlightBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEServerTickableBE$$Interface, $IEBlockInterfaces$IAdvancedDirectionalBE$$Interface, $IEBlockInterfaces$IHammerInteraction$$Interface, $IEBlockInterfaces$IScrewdriverInteraction$$Interface, $IEBlockInterfaces$ISpawnInterdiction$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface, $IEBlockInterfaces$IActiveState$$Interface, $EnergyTransferHandler$EnergyConnector$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $ComputerControllable$$Interface {
 "lightsToBeRemoved": $List<($BlockPos)>
 "rotX": float
 "energyStorage": integer
 "turnCooldown": integer
readonly "maximumStorage": integer
 "rotY": float
 "facing": $Direction
static readonly "ATTACHMENTS_NBT_KEY": StringJS
readonly "computerControl": $ComputerControlState
 "lightsToBePlaced": $List<($BlockPos)>
 "redstoneControlInverted": boolean
 "fakeLights": $List<($BlockPos)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isSource"(arg0: $ConnectionPoint$$Type): boolean
public "tickServer"(): void
public "onChunkUnloaded"(): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "setRemovedIE"(): void
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): $ItemInteractionResult
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "onDirectionalPlacement"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: $LivingEntity$$Type): void
public "isSink"(arg0: $ConnectionPoint$$Type): boolean
public "getRequestedEnergy"(): integer
public "insertEnergy"(arg0: integer): void
public "getAllComputerControlStates"(): $Stream<($ComputerControlState)>
public "getInterdictionRangeSquared"(): double
public "updateFakeLights"(arg0: boolean, arg1: boolean): void
public "placeLightAlongVector"(arg0: $Vec3$$Type, arg1: integer, arg2: $ArrayList$$Type<($BlockPos$$Type)>): void
public "turnY"(arg0: boolean, arg1: boolean): void
public "turnX"(arg0: boolean, arg1: boolean): void
public "canComputerTurn"(): boolean
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "onLoad"(): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getIsActive"(): boolean
public "setActive"(arg0: boolean): void
public "extractEnergy"(arg0: integer): void
public "getAvailableEnergy"(): integer
public "onEnergyPassedThrough"(arg0: double): void
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
get "removedIE"(): void
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "requestedEnergy"(): integer
get "allComputerControlStates"(): $Stream<($ComputerControlState)>
get "interdictionRangeSquared"(): double
get "isActive"(): boolean
set "active"(value: boolean)
get "availableEnergy"(): integer
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloodlightBlockEntity$$Type = ($FloodlightBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloodlightBlockEntity$$Original = $FloodlightBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.cloth.BalloonBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Projectile$$Type} from "net.minecraft.world.entity.projectile.Projectile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BalloonBlockEntity} from "blusunrize.immersiveengineering.common.blocks.cloth.BalloonBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BalloonBlock extends $IEEntityBlock<($BalloonBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

/**
 * 
 * @deprecated
 */
public "onProjectileHit"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockHitResult$$Type, arg3: $Projectile$$Type): void
public "fallOn"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type, arg4: float): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalloonBlock$$Type = ($BalloonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BalloonBlock$$Original = $BalloonBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TransformerBlockItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$BlockItemIE} from "blusunrize.immersiveengineering.common.blocks.BlockItemIE"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $TransformerBlockItem extends $BlockItemIE {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type)

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
export type $TransformerBlockItem$$Type = ($TransformerBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformerBlockItem$$Original = $TransformerBlockItem;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerBlockInteraction" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$IHammerBlockInteraction$$Interface {

(arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $UseOnContext): $InteractionResult$$Type
}

export class $IEBlockInterfaces$IHammerBlockInteraction implements $IEBlockInterfaces$IHammerBlockInteraction$$Interface {
 "useHammer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IHammerBlockInteraction$$Type = ((arg0: $BlockState, arg1: $Level, arg2: $BlockPos, arg3: $Player, arg4: $UseOnContext) => $InteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IHammerBlockInteraction$$Original = $IEBlockInterfaces$IHammerBlockInteraction;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IRedstoneOutput" {
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$Direction$$Type} from "net.minecraft.core.Direction"

export interface $IEBlockInterfaces$IRedstoneOutput$$Interface {
}

export class $IEBlockInterfaces$IRedstoneOutput implements $IEBlockInterfaces$IRedstoneOutput$$Interface {
 "canConnectRedstone"(arg0: $Direction$$Type): boolean
 "overrideVoltmeterRead"(): ($Pair<($DyeColor), (byte)>)[]
 "getWeakRSOutput"(arg0: $Direction$$Type): integer
 "getStrongRSOutput"(arg0: $Direction$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IRedstoneOutput$$Type = ($IEBlockInterfaces$IRedstoneOutput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IRedstoneOutput$$Original = $IEBlockInterfaces$IRedstoneOutput;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.CatwalkBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction} from "net.minecraft.core.Direction"
import {$EnumMap} from "java.util.EnumMap"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IEBlockInterfaces$IColouredBlock$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IColouredBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$IEBlockInterfaces$IHammerBlockInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerBlockInteraction"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CatwalkBlock extends $IEBaseBlock implements $IEBlockInterfaces$IColouredBlock$$Interface, $IEBlockInterfaces$IHammerBlockInteraction$$Interface {
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
static readonly "RAILING_PROPERTIES": $EnumMap<($Direction), ($BooleanProperty)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: boolean)

public "useHammer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $UseOnContext$$Type): $InteractionResult
public "getRenderColour"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "hasCustomBlockColours"(): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CatwalkBlock$$Type = ($CatwalkBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CatwalkBlock$$Original = $CatwalkBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IAdvancedDirectionalBE" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IDirectionalBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IDirectionalBE"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"

export interface $IEBlockInterfaces$IAdvancedDirectionalBE$$Interface extends $IEBlockInterfaces$IDirectionalBE$$Interface {
set "facing"(value: $Direction$$Type)
get "facingLimitation"(): $PlacementLimitation
get "facing"(): $Direction
}

export class $IEBlockInterfaces$IAdvancedDirectionalBE implements $IEBlockInterfaces$IAdvancedDirectionalBE$$Interface {
 "onDirectionalPlacement"(arg0: $Direction$$Type, arg1: float, arg2: float, arg3: float, arg4: $LivingEntity$$Type): void
 "setFacing"(arg0: $Direction$$Type): void
 "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
 "getFacingLimitation"(): $PlacementLimitation
 "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
 "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
 "getFacing"(): $Direction
 "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IAdvancedDirectionalBE$$Type = ($IEBlockInterfaces$IAdvancedDirectionalBE);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IAdvancedDirectionalBE$$Original = $IEBlockInterfaces$IAdvancedDirectionalBE;}
declare module "blusunrize.immersiveengineering.common.blocks.IESignBlocks$Standing" {
import {$WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$StandingSignBlock} from "net.minecraft.world.level.block.StandingSignBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IESignBlocks$Standing extends $StandingSignBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($StandingSignBlock)>
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

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IESignBlocks$Standing$$Type = ($IESignBlocks$Standing);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IESignBlocks$Standing$$Original = $IESignBlocks$Standing;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.ItemBatcherBlockEntity$BatchMode" {
import {$Enum} from "java.lang.Enum"

export class $ItemBatcherBlockEntity$BatchMode extends $Enum<($ItemBatcherBlockEntity$BatchMode)> {
static readonly "ALL": $ItemBatcherBlockEntity$BatchMode
static readonly "SINGLE": $ItemBatcherBlockEntity$BatchMode

public static "values"(): ($ItemBatcherBlockEntity$BatchMode)[]
public static "valueOf"(arg0: StringJS): $ItemBatcherBlockEntity$BatchMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBatcherBlockEntity$BatchMode$$Type = (("single") | ("all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBatcherBlockEntity$BatchMode$$Original = $ItemBatcherBlockEntity$BatchMode;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.LanternBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockOverlayText$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockOverlayText"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $LanternBlock extends $IEBaseBlock implements $IEBlockInterfaces$IBlockOverlayText$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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
static readonly "FACING": $Property<($Direction)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getOverlayText"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $HitResult$$Type, arg3: boolean): ($Component)[]
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LanternBlock$$Type = ($LanternBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LanternBlock$$Original = $LanternBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.WindmillBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$WindmillBlockEntity} from "blusunrize.immersiveengineering.common.blocks.wooden.WindmillBlockEntity"

export class $WindmillBlock extends $IEEntityBlock<($WindmillBlockEntity)> {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindmillBlock$$Type = ($WindmillBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindmillBlock$$Original = $WindmillBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IComparatorOverride" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEBlockInterfaces$IComparatorOverride$$Interface {

(): integer
get "comparatorInputOverride"(): integer
}

export class $IEBlockInterfaces$IComparatorOverride implements $IEBlockInterfaces$IComparatorOverride$$Interface {
 "getComparatorInputOverride"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IComparatorOverride$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IComparatorOverride$$Original = $IEBlockInterfaces$IComparatorOverride;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.BasicConnectorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IEBlocks$BlockEntry} from "blusunrize.immersiveengineering.common.register.IEBlocks$BlockEntry"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BasicConnectorBlock<T extends $BlockEntity> extends $ConnectorBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>)

public static "forPower"(arg0: StringJS, arg1: boolean): $IEBlocks$BlockEntry<($BasicConnectorBlock<(never)>)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicConnectorBlock$$Type<T> = ($BasicConnectorBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicConnectorBlock$$Original<T> = $BasicConnectorBlock<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FeedthroughBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FeedthroughBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.FeedthroughBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FeedthroughBlock extends $ConnectorBlock<($FeedthroughBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedthroughBlock$$Type = ($FeedthroughBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeedthroughBlock$$Original = $FeedthroughBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.stone.SlagGravelBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
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

export class $SlagGravelBlock extends $FallingBlock {
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

public "isRandomlyTicking"(arg0: $BlockState$$Type): boolean
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlagGravelBlock$$Type = ($SlagGravelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlagGravelBlock$$Original = $SlagGravelBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISoundBE" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEBlockInterfaces$ISoundBE$$Interface {

(arg0: StringJS): boolean
get "soundRadiusSq"(): float
}

export class $IEBlockInterfaces$ISoundBE implements $IEBlockInterfaces$ISoundBE$$Interface {
 "getSoundRadiusSq"(): float
 "shouldPlaySound"(arg0: StringJS): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$ISoundBE$$Type = ((arg0: StringJS) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$ISoundBE$$Original = $IEBlockInterfaces$ISoundBE;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.CatwalkStairsBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$EnumMap} from "java.util.EnumMap"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$CatwalkBlock} from "blusunrize.immersiveengineering.common.blocks.generic.CatwalkBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CatwalkStairsBlock extends $CatwalkBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "RAILING_LEFT": $BooleanProperty
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
static "RAILING_RIGHT": $BooleanProperty
static readonly "RAILING_PROPERTIES": $EnumMap<($Direction), ($BooleanProperty)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: boolean)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useHammer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CatwalkStairsBlock$$Type = ($CatwalkStairsBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CatwalkStairsBlock$$Original = $CatwalkStairsBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.HorizontalFacingBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $HorizontalFacingBlock extends $IEBaseBlock {
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
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalFacingBlock$$Type = ($HorizontalFacingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HorizontalFacingBlock$$Original = $HorizontalFacingBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IIEBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IIEBlock$$Interface {
get "nameForFlavour"(): StringJS
}

export class $IIEBlock implements $IIEBlock$$Interface {
 "hasFlavour"(): boolean
 "getNameForFlavour"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIEBlock$$Type = ($IIEBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIEBlock$$Original = $IIEBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.MetalLadderBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MetalLadderBlock$CoverType$$Type} from "blusunrize.immersiveengineering.common.blocks.metal.MetalLadderBlock$CoverType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LadderBlock} from "net.minecraft.world.level.block.LadderBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IEBlockInterfaces$IHammerBlockInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerBlockInteraction"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $MetalLadderBlock extends $LadderBlock implements $IEBlockInterfaces$IHammerBlockInteraction$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($LadderBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
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

constructor(arg0: $MetalLadderBlock$CoverType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useHammer"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $UseOnContext$$Type): $InteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "moreculling$shouldAttemptToCull"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "moreculling$canCull"(): boolean
public "moreculling$setCanCull"(arg0: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalLadderBlock$$Type = ($MetalLadderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetalLadderBlock$$Original = $MetalLadderBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.ElectricLanternBlockEntity" {
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ImmersiveConnectableBlockEntity} from "blusunrize.immersiveengineering.common.blocks.generic.ImmersiveConnectableBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$EnergyTransferHandler$EnergyConnector$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.EnergyTransferHandler$EnergyConnector"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEBlockInterfaces$ISpawnInterdiction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISpawnInterdiction"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEBlockInterfaces$IHammerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IActiveState$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IActiveState"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ElectricLanternBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$ISpawnInterdiction$$Interface, $IEServerTickableBE$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IHammerInteraction$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface, $IEBlockInterfaces$IActiveState$$Interface, $EnergyTransferHandler$EnergyConnector$$Interface {
 "energyStorage": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isSource"(arg0: $ConnectionPoint$$Type): boolean
public "tickServer"(): void
public "onChunkUnloaded"(): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "setRemovedIE"(): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "isSink"(arg0: $ConnectionPoint$$Type): boolean
public "getRequestedEnergy"(): integer
public "insertEnergy"(arg0: integer): void
public "getInterdictionRangeSquared"(): double
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "onLoad"(): void
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getIsActive"(): boolean
public "setActive"(arg0: boolean): void
public "extractEnergy"(arg0: integer): void
public "getAvailableEnergy"(): integer
public "onEnergyPassedThrough"(arg0: double): void
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
get "removedIE"(): void
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "requestedEnergy"(): integer
get "interdictionRangeSquared"(): double
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "isActive"(): boolean
set "active"(value: boolean)
get "availableEnergy"(): integer
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricLanternBlockEntity$$Type = ($ElectricLanternBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricLanternBlockEntity$$Original = $ElectricLanternBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.RazorWireBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$RazorWireBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.RazorWireBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $RazorWireBlock extends $ConnectorBlock<($RazorWireBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RazorWireBlock$$Type = ($RazorWireBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RazorWireBlock$$Original = $RazorWireBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IColouredBlock" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$IColouredBlock$$Interface {
}

export class $IEBlockInterfaces$IColouredBlock implements $IEBlockInterfaces$IColouredBlock$$Interface {
 "getRenderColour"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
 "hasCustomBlockColours"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IColouredBlock$$Type = ($IEBlockInterfaces$IColouredBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IColouredBlock$$Original = $IEBlockInterfaces$IColouredBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FluidPipeBlockEntity$ConnectionStyle" {
import {$Enum} from "java.lang.Enum"

export class $FluidPipeBlockEntity$ConnectionStyle extends $Enum<($FluidPipeBlockEntity$ConnectionStyle)> {
static readonly "PLAIN": $FluidPipeBlockEntity$ConnectionStyle
static readonly "FLANGE": $FluidPipeBlockEntity$ConnectionStyle
static readonly "NO_CONNECTION": $FluidPipeBlockEntity$ConnectionStyle

public static "values"(): ($FluidPipeBlockEntity$ConnectionStyle)[]
public static "valueOf"(arg0: StringJS): $FluidPipeBlockEntity$ConnectionStyle
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeBlockEntity$ConnectionStyle$$Type = (("no_connection") | ("plain") | ("flange"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPipeBlockEntity$ConnectionStyle$$Original = $FluidPipeBlockEntity$ConnectionStyle;}
declare module "blusunrize.immersiveengineering.common.blocks.FakeLightBlock$FakeLightBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEBlockInterfaces$ISpawnInterdiction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISpawnInterdiction"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FakeLightBlock$FakeLightBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$ISpawnInterdiction$$Interface {
 "firstTick": boolean
 "floodlightCoords": $BlockPos
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "onChunkUnloaded"(): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "setRemovedIE"(): void
public "getInterdictionRangeSquared"(): double
public "setFloodlightCoords"(arg0: $BlockPos$$Type): void
public "onLoad"(): void
get "removedIE"(): void
get "interdictionRangeSquared"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FakeLightBlock$FakeLightBlockEntity$$Type = ($FakeLightBlock$FakeLightBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FakeLightBlock$FakeLightBlockEntity$$Original = $FakeLightBlock$FakeLightBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TransformerHVBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$TransformerHVBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.TransformerHVBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TransformerHVBlock extends $ConnectorBlock<($TransformerHVBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerHVBlock$$Type = ($TransformerHVBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformerHVBlock$$Original = $TransformerHVBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.ChuteBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$IEBlockInterfaces$ICollisionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISelectionBounds"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEBlockInterfaces$IHammerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ChuteBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IHammerInteraction$$Interface, $IEBlockInterfaces$ISelectionBounds$$Interface, $IEBlockInterfaces$ICollisionBounds$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "onEntityCollision"(arg0: $Level$$Type, arg1: $Entity$$Type): void
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "isInwardConveyor"(arg0: $Direction$$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "isDiagonal"(): boolean
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($ChuteBlockEntity$$Type)>): void
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "diagonal"(): boolean
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChuteBlockEntity$$Type = ($ChuteBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChuteBlockEntity$$Original = $ChuteBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.WindowBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WindowBlock extends $IEBaseBlock {
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
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindowBlock$$Type = ($WindowBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindowBlock$$Original = $WindowBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEWallBlock" {
import {$WallSide} from "net.minecraft.world.level.block.state.properties.WallSide"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IIEBlock$$Interface} from "blusunrize.immersiveengineering.common.blocks.IIEBlock"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$WallBlock} from "net.minecraft.world.level.block.WallBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $IEWallBlock extends $WallBlock implements $IIEBlock$$Interface {
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

constructor<T extends $Block>(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<(T)>)

public "hasFlavour"(): boolean
public "getNameForFlavour"(): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "nameForFlavour"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEWallBlock$$Type = ($IEWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEWallBlock$$Original = $IEWallBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FluidPipeBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$FluidPipeBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.FluidPipeBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPipeBlock extends $IEEntityBlock<($FluidPipeBlockEntity)> {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeBlock$$Type = ($FluidPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPipeBlock$$Original = $FluidPipeBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FluidPipeBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IEBlockInterfaces$IColouredBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IColouredBE"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IEBlockInterfaces$ICollisionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISelectionBounds"
import {$IEBlockInterfaces$IAdditionalDrops$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IAdditionalDrops"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Object2BooleanMap} from "it.unimi.dsi.fastutil.objects.Object2BooleanMap"
import {$IFluidPipe$$Interface} from "blusunrize.immersiveengineering.api.fluid.IFluidPipe"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set} from "java.util.Set"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FluidPipeBlockEntity$ConnectionStyle} from "blusunrize.immersiveengineering.common.blocks.metal.FluidPipeBlockEntity$ConnectionStyle"
import {$LevelEvent$Unload$$Type} from "net.neoforged.neoforge.event.level.LevelEvent$Unload"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ArrayList} from "java.util.ArrayList"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Predicate} from "java.util.function.Predicate"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FluidPipeBlockEntity$DirectionalFluidOutput} from "blusunrize.immersiveengineering.common.blocks.metal.FluidPipeBlockEntity$DirectionalFluidOutput"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEBlockInterfaces$IHammerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IEBlockInterfaces$IPlayerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$IEBlockInterfaces$IPlacementInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlacementInteraction"

export class $FluidPipeBlockEntity extends $IEBaseBlockEntity implements $IFluidPipe$$Interface, $IEBlockInterfaces$IColouredBE$$Interface, $IEBlockInterfaces$IPlayerInteraction$$Interface, $IEBlockInterfaces$IHammerInteraction$$Interface, $IEBlockInterfaces$IPlacementInteraction$$Interface, $IEBlockInterfaces$ISelectionBounds$$Interface, $IEBlockInterfaces$ICollisionBounds$$Interface, $IEBlockInterfaces$IAdditionalDrops$$Interface {
static "climbablePipeCovers": $ArrayList<($Predicate<($Block)>)>
 "cover": $Block
 "sideConfig": $Object2BooleanMap<($Direction)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static "validPipeCovers": $ArrayList<($Predicate<($Block)>)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "onChunkUnloaded"(): void
public "onEntityCollision"(arg0: $Level$$Type, arg1: $Entity$$Type): void
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "dropCover"(arg0: $Player$$Type): void
public "toggleSide"(arg0: $Direction$$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "onBEPlaced"(arg0: $BlockPlaceContext$$Type): void
public "setRemovedIE"(): void
public "onNeighborBlockChange"(arg0: $BlockPos$$Type): void
public static "initCovers"(): void
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "getExtraDrops"(arg0: $Player$$Type, arg1: $BlockState$$Type): $Collection<($ItemStack)>
public "getRenderColour"(arg0: integer): integer
public "updateConnectionByte"(arg0: $Direction$$Type): boolean
public static "getConnectedFluidHandlers"(arg0: $BlockPos$$Type, arg1: $Level$$Type): $Set<($FluidPipeBlockEntity$DirectionalFluidOutput)>
public "getAvailableConnectionByte"(): byte
public "getConnectionStyle"(arg0: $Direction$$Type): $FluidPipeBlockEntity$ConnectionStyle
public "hasOutputConnection"(arg0: $Direction$$Type): boolean
public static "onWorldUnload"(arg0: $LevelEvent$Unload$$Type): void
public "onLoad"(): void
public "setSide"(arg0: $Direction$$Type, arg1: boolean, arg2: boolean): void
public "setSide"(arg0: $Direction$$Type, arg1: boolean): void
public "getColor"(): $DyeColor
public "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($FluidPipeBlockEntity$$Type)>): void
public static "getTransferableAmount"(arg0: boolean): integer
public "stripPressureTag"(): boolean
public "canOutputPressurized"(arg0: boolean): boolean
get "removedIE"(): void
get "availableConnectionByte"(): byte
get "color"(): $DyeColor
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeBlockEntity$$Type = ($FluidPipeBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPipeBlockEntity$$Original = $FluidPipeBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.WatermillBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$WatermillBlockEntity} from "blusunrize.immersiveengineering.common.blocks.wooden.WatermillBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WatermillBlock extends $IEEntityBlock<($WatermillBlockEntity)> {
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

public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WatermillBlock$$Type = ($WatermillBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WatermillBlock$$Original = $WatermillBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.stone.PartialConcreteBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PartialConcreteBlock extends $IEBaseBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: integer)

public static "makeProperties"(): $BlockBehaviour$Properties
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartialConcreteBlock$$Type = ($PartialConcreteBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartialConcreteBlock$$Original = $PartialConcreteBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.ChuteBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ChuteBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.ChuteBlockEntity"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ChuteBlock extends $IEEntityBlock<($ChuteBlockEntity)> {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChuteBlock$$Type = ($ChuteBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChuteBlock$$Original = $ChuteBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.SampleDrillBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$SampleDrillBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.SampleDrillBlockEntity"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SampleDrillBlock extends $IEEntityBlock<($SampleDrillBlockEntity)> {
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

public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
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
declare module "blusunrize.immersiveengineering.common.blocks.metal.FloodlightBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$FloodlightBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.FloodlightBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FloodlightBlock extends $ConnectorBlock<($FloodlightBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FloodlightBlock$$Type = ($FloodlightBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FloodlightBlock$$Original = $FloodlightBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.WallmountBlock$Orientation" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $WallmountBlock$Orientation extends $Enum<($WallmountBlock$Orientation)> implements $StringRepresentable$$Interface {
static readonly "SIDE_UP": $WallmountBlock$Orientation
static readonly "VERT_UP": $WallmountBlock$Orientation
static readonly "SIDE_DOWN": $WallmountBlock$Orientation
static readonly "VERT_DOWN": $WallmountBlock$Orientation

public "attachedToSide"(): boolean
public "getDual"(): $WallmountBlock$Orientation
public "touchesTop"(): boolean
public "modelSuffix"(): StringJS
public "toString"(): StringJS
public static "values"(): ($WallmountBlock$Orientation)[]
public static "valueOf"(arg0: StringJS): $WallmountBlock$Orientation
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "dual"(): $WallmountBlock$Orientation
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallmountBlock$Orientation$$Type = (("side_up") | ("side_down") | ("vert_down") | ("vert_up"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WallmountBlock$Orientation$$Original = $WallmountBlock$Orientation;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IEBlockInterfaces$IPlayerInteraction$$Interface {

(arg0: $Direction, arg1: $Player, arg2: $InteractionHand, arg3: $ItemStack, arg4: float, arg5: float, arg6: float): $ItemInteractionResult$$Type
}

export class $IEBlockInterfaces$IPlayerInteraction implements $IEBlockInterfaces$IPlayerInteraction$$Interface {
 "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IPlayerInteraction$$Type = ((arg0: $Direction, arg1: $Player, arg2: $InteractionHand, arg3: $ItemStack, arg4: float, arg5: float, arg6: float) => $ItemInteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IPlayerInteraction$$Original = $IEBlockInterfaces$IPlayerInteraction;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.BreakerSwitchBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BreakerSwitchBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.BreakerSwitchBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BreakerSwitchBlock<T extends $BreakerSwitchBlockEntity> extends $ConnectorBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BreakerSwitchBlock$$Type<T> = ($BreakerSwitchBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BreakerSwitchBlock$$Original<T> = $BreakerSwitchBlock<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.MultiblockBEType" {
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$DeferredHolder} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$BiFunction, $BiFunction$$Interface} from "java.util.function.BiFunction"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DeferredRegister$$Type} from "net.neoforged.neoforge.registries.DeferredRegister"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MultiblockBEType$BEWithTypeConstructor$$Type} from "blusunrize.immersiveengineering.common.blocks.MultiblockBEType$BEWithTypeConstructor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MultiblockBEType<T extends $BlockEntity> implements $BiFunction$$Interface<($BlockPos), ($BlockState), (T)> {
constructor(arg0: StringJS, arg1: $DeferredRegister$$Type<($BlockEntityType$$Type<(never)>)>, arg2: $MultiblockBEType$BEWithTypeConstructor$$Type<(T)>, arg3: $Supplier$$Type<($Block$$Type)>, arg4: $Predicate$$Type<($BlockState)>)

public "dummyHolder"(): $DeferredHolder<($BlockEntityType<(never)>), ($BlockEntityType<(T)>)>
public "masterHolder"(): $DeferredHolder<($BlockEntityType<(never)>), ($BlockEntityType<(T)>)>
public static "makeType"<T extends $BlockEntity>(arg0: $MultiblockBEType$BEWithTypeConstructor$$Type<(T)>, arg1: $Supplier$$Type<($Block$$Type)>): $Supplier<($BlockEntityType<(T)>)>
public "apply"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): T
public "apply"(arg0: any, arg1: any): any
public "dummy"(): $BlockEntityType<(T)>
public "master"(): $BlockEntityType<(T)>
public "andThen"<V>(arg0: $Function$$Type<($BlockPos), (V)>): $BiFunction<($BlockPos), ($BlockState), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockBEType$$Type<T> = ($MultiblockBEType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockBEType$$Original<T> = $MultiblockBEType<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.IEEntityBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IEBlockInterfaces$IColouredBlock$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IColouredBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $IEEntityBlock<T extends $BlockEntity> extends $IEBaseBlock implements $IEBlockInterfaces$IColouredBlock$$Interface, $EntityBlock$$Interface {
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

constructor(arg0: $BiFunction$$Type<($BlockPos), ($BlockState), (T)>, arg1: $BlockBehaviour$Properties$$Type)
constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type, arg2: boolean)
constructor(arg0: $BiFunction$$Type<($BlockPos), ($BlockState), (T)>, arg1: $BlockBehaviour$Properties$$Type, arg2: boolean)
constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getTicker"<T2 extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T2)>): $BlockEntityTicker<(T2)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onIEBlockPlacedBy"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "setHasColours"(): $IEEntityBlock
public "getRenderColour"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: integer): integer
public "hasCustomBlockColours"(): boolean
public static "areAllReplaceable"(arg0: $BlockPos$$Type, arg1: $BlockPos$$Type, arg2: $BlockPlaceContext$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "triggerEvent"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): boolean
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getInteractionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $VoxelShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "hasColours"(): $IEEntityBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEEntityBlock$$Type<T> = ($IEEntityBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEEntityBlock$$Original<T> = $IEEntityBlock<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.WarningSignBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$WarningSignBlock$WarningSignIcon$$Type} from "blusunrize.immersiveengineering.common.blocks.metal.WarningSignBlock$WarningSignIcon"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WarningSignBlock extends $IEBaseBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

constructor(arg0: $WarningSignBlock$WarningSignIcon$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WarningSignBlock$$Type = ($WarningSignBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WarningSignBlock$$Original = $WarningSignBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.StructuralArmBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$IEBlockInterfaces$ICollisionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISelectionBounds"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $StructuralArmBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$ICollisionBounds$$Interface, $IEBlockInterfaces$ISelectionBounds$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isOnCeiling"(): boolean
public "setFacing"(arg0: $Direction$$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "onNeighborBlockChange"(arg0: $BlockPos$$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "getSlopePosition"(): integer
public "getFacing"(): $Direction
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getTotalLength"(): integer
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
get "onCeiling"(): boolean
set "facing"(value: $Direction$$Type)
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "slopePosition"(): integer
get "facing"(): $Direction
get "totalLength"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructuralArmBlockEntity$$Type = ($StructuralArmBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructuralArmBlockEntity$$Original = $StructuralArmBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.plant.HempBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$DoubleBlockHalf} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BonemealableBlock$$Interface} from "net.minecraft.world.level.block.BonemealableBlock"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CropBlock} from "net.minecraft.world.level.block.CropBlock"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HempBlock extends $CropBlock implements $BonemealableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CropBlock)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "HALF": $EnumProperty<($DoubleBlockHalf)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "isRandomlyTicking"(arg0: $BlockState$$Type): boolean
public "randomTick"(arg0: $BlockState$$Type, arg1: $ServerLevel$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "isValidBonemealTarget"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): boolean
public "growCrops"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "getMaxAge"(): integer
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "isBonemealSuccess"(arg0: $Level$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): boolean
public "performBonemeal"(arg0: $ServerLevel$$Type, arg1: $RandomSource$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "maxAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HempBlock$$Type = ($HempBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HempBlock$$Original = $HempBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.PostTransformerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$PostTransformerBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.PostTransformerBlockEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PostTransformerBlock extends $ConnectorBlock<($PostTransformerBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public "asItem"(): $Item
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public static "isAttacheablePost"(arg0: $BlockPos$$Type, arg1: $BlockGetter$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PostTransformerBlock$$Type = ($PostTransformerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PostTransformerBlock$$Original = $PostTransformerBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.ItemBatcherBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEMenuTypes$ArgContainer} from "blusunrize.immersiveengineering.common.register.IEMenuTypes$ArgContainer"
import {$IEBlockInterfaces$IInteractionObjectIE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IInteractionObjectIE"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IIEInventory$$Interface} from "blusunrize.immersiveengineering.common.util.inventory.IIEInventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$ItemBatcherBlockEntity$BatchMode} from "blusunrize.immersiveengineering.common.blocks.wooden.ItemBatcherBlockEntity$BatchMode"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ItemBatcherBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IIEInventory$$Interface, $IEBlockInterfaces$IInteractionObjectIE$$Interface<($ItemBatcherBlockEntity)>, $IEBlockInterfaces$IStateBasedDirectional$$Interface {
static readonly "NUM_SLOTS": integer
 "redstoneColors": $NonNullList<($DyeColor)>
 "batchMode": $ItemBatcherBlockEntity$BatchMode
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tickServer"(): void
public "isStackValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "receiveMessageFromClient"(arg0: $CompoundTag$$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getGuiMaster"(): $BlockEntity
public "doGraphicalUpdates"(): void
public "canUseGui"(arg0: $Player$$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getContainerType"(): $IEMenuTypes$ArgContainer<($ItemBatcherBlockEntity), (never)>
public "getFilters"(): $NonNullList<($ItemStack)>
public "getInventory"(): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($ItemBatcherBlockEntity$$Type)>): void
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getComparatedSize"(): integer
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getDisplayName"(): $Component
public "isValid"(): boolean
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "guiMaster"(): $BlockEntity
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "containerType"(): $IEMenuTypes$ArgContainer<($ItemBatcherBlockEntity), (never)>
get "filters"(): $NonNullList<($ItemStack)>
get "inventory"(): $NonNullList<($ItemStack)>
get "droppedItems"(): $Stream<($ItemStack)>
get "comparatedSize"(): integer
get "displayName"(): $Component
get "valid"(): boolean
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBatcherBlockEntity$$Type = ($ItemBatcherBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBatcherBlockEntity$$Original = $ItemBatcherBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.WindmillBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEClientTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEClientTickableBE"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$ISoundBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISoundBE"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IPlayerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$IEBlockInterfaces$IPlacementInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlacementInteraction"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $WindmillBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IEClientTickableBE$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IPlacementInteraction$$Interface, $IEBlockInterfaces$IPlayerInteraction$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface, $IEBlockInterfaces$ISoundBE$$Interface {
 "sails": integer
 "renderAABB": $AABB
 "rotation": float
 "turnSpeed": float
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tickClient"(): void
public "tickServer"(): void
public "getActualTurnSpeed"(): double
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "onBEPlaced"(arg0: $BlockPlaceContext$$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "shouldPlaySound"(arg0: StringJS): boolean
public "computeTurnSpeed"(): float
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "onLoad"(): void
public "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getSoundRadiusSq"(): float
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
get "actualTurnSpeed"(): double
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "soundRadiusSq"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WindmillBlockEntity$$Type = ($WindmillBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WindmillBlockEntity$$Original = $WindmillBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.ticking.IEClientTickableBE" {
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IETickableBase$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IETickableBase"

export interface $IEClientTickableBE$$Interface extends $IETickableBase$$Interface {

(): void
}

export class $IEClientTickableBE implements $IEClientTickableBE$$Interface {
 "tickClient"(): void
static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
 "canTickAny"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEClientTickableBE$$Type = (() => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEClientTickableBE$$Original = $IEClientTickableBE;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.ClocheBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEMenuTypes$ArgContainer} from "blusunrize.immersiveengineering.common.register.IEMenuTypes$ArgContainer"
import {$MutableEnergyStorage} from "blusunrize.immersiveengineering.api.energy.MutableEnergyStorage"
import {$IEBlockInterfaces$IInteractionObjectIE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IInteractionObjectIE"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IIEInventory$$Interface} from "blusunrize.immersiveengineering.common.util.inventory.IIEInventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEClientTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEClientTickableBE"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IHasDummyBlocks$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$ClocheRecipe} from "blusunrize.immersiveengineering.api.crafting.ClocheRecipe"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IGeneralMultiblock} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ClocheBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IEClientTickableBE$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IHasDummyBlocks$$Interface, $IIEInventory$$Interface, $IEBlockInterfaces$IInteractionObjectIE$$Interface<($ClocheBlockEntity)>, $IModelOffsetProvider$$Interface {
static readonly "TANK_CAPACITY": integer
 "energyStorage": $MutableEnergyStorage
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "SLOT_FERTILIZER": integer
 "renderActive": boolean
static readonly "SLOT_SOIL": integer
readonly "cachedRecipe": $Supplier<($ClocheRecipe)>
 "dummy": integer
static readonly "NUM_SLOTS": integer
static readonly "ENERGY_CAPACITY": integer
 "renderBB": $AABB
 "fertilizerAmount": integer
 "fertilizerMod": float
static readonly "SLOT_SEED": integer
readonly "tank": $FluidTank
 "renderGrowth": float

constructor(arg0: $BlockEntityType$$Type<($ClocheBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "setFacing"(arg0: $Direction$$Type): void
public "tickClient"(): void
public "tickServer"(): void
public "isStackValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "canTickAny"(): boolean
public "receiveMessageFromServer"(arg0: $CompoundTag$$Type): void
public "getGuiMaster"(): $ClocheBlockEntity
public "doGraphicalUpdates"(): void
public "canUseGui"(arg0: $Player$$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
public "getGuiProgress"(): float
public "getContainerType"(): $IEMenuTypes$ArgContainer<($ClocheBlockEntity), (never)>
public "isDummy"(): boolean
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public "getInventory"(): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($ClocheBlockEntity$$Type)>): void
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getFacing"(): $Direction
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getComparatedSize"(): integer
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getDisplayName"(): $Component
public "isValid"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
set "facing"(value: $Direction$$Type)
get "guiMaster"(): $ClocheBlockEntity
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "guiProgress"(): float
get "containerType"(): $IEMenuTypes$ArgContainer<($ClocheBlockEntity), (never)>
get "inventory"(): $NonNullList<($ItemStack)>
get "facing"(): $Direction
get "droppedItems"(): $Stream<($ItemStack)>
get "comparatedSize"(): integer
get "displayName"(): $Component
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheBlockEntity$$Type = ($ClocheBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClocheBlockEntity$$Original = $ClocheBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.plant.PottedHempBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$FlowerPotBlock} from "net.minecraft.world.level.block.FlowerPotBlock"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $PottedHempBlock extends $FlowerPotBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FlowerPotBlock)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "AABB_SIZE": float
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
static readonly "POTTED_BY_CONTENT": $Map<($Block), ($Block)>
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PottedHempBlock$$Type = ($PottedHempBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PottedHempBlock$$Original = $PottedHempBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.ItemBatcherBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ItemBatcherBlockEntity} from "blusunrize.immersiveengineering.common.blocks.wooden.ItemBatcherBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemBatcherBlock extends $IEEntityBlock<($ItemBatcherBlockEntity)> {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBatcherBlock$$Type = ($ItemBatcherBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBatcherBlock$$Original = $ItemBatcherBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FurnaceHeaterBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$MutableEnergyStorage} from "blusunrize.immersiveengineering.api.energy.MutableEnergyStorage"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$IEBlockInterfaces$IHammerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IActiveState$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IActiveState"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $FurnaceHeaterBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IEBlockInterfaces$IActiveState$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IHammerInteraction$$Interface {
 "energyStorage": $MutableEnergyStorage
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "tickServer"(): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($FurnaceHeaterBlockEntity$$Type)>): void
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getIsActive"(): boolean
public "setActive"(arg0: boolean): void
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "isActive"(): boolean
set "active"(value: boolean)
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceHeaterBlockEntity$$Type = ($FurnaceHeaterBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FurnaceHeaterBlockEntity$$Original = $FurnaceHeaterBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TurretBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IEMenuTypes$ArgContainer} from "blusunrize.immersiveengineering.common.register.IEMenuTypes$ArgContainer"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$TurretBlockEntity$TurretConfig} from "blusunrize.immersiveengineering.common.blocks.metal.TurretBlockEntity$TurretConfig"
import {$MutableEnergyStorage} from "blusunrize.immersiveengineering.api.energy.MutableEnergyStorage"
import {$IEBlockInterfaces$IInteractionObjectIE$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IInteractionObjectIE"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IIEInventory$$Interface} from "blusunrize.immersiveengineering.common.util.inventory.IIEInventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEClientTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEClientTickableBE"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IHasDummyBlocks$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$IEBlockInterfaces$IEntityProof$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IEntityProof"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Stream} from "java.util.stream.Stream"
import {$IEBlockInterfaces$IBlockEntityDrop$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockEntityDrop"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IScrewdriverInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IScrewdriverInteraction"
import {$IEBlockInterfaces$IGeneralMultiblock} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $TurretBlockEntity<T extends $TurretBlockEntity<(object)>> extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IEClientTickableBE$$Interface, $IIEInventory$$Interface, $IEBlockInterfaces$IHasDummyBlocks$$Interface, $IEBlockInterfaces$IBlockEntityDrop$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface, $IEBlockInterfaces$IInteractionObjectIE$$Interface<(T)>, $IEBlockInterfaces$IEntityProof$$Interface, $IEBlockInterfaces$IScrewdriverInteraction$$Interface, $IModelOffsetProvider$$Interface {
 "owner": StringJS
 "rotationPitch": float
 "rotationYaw": float
static readonly "ENERGY_CAPACITY": integer
 "energyStorage": $MutableEnergyStorage
 "renderBB": $AABB
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "config": $TurretBlockEntity$TurretConfig

constructor(arg0: $BlockEntityType$$Type<(T)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "canEntityDestroy"(arg0: $Entity$$Type): boolean
public "tickClient"(): void
public "tickServer"(): void
public "isValidTarget"(arg0: $LivingEntity$$Type, arg1: boolean): boolean
public "isStackValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getBlockEntityDrop"(arg0: $LootContext$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
public "onBEPlaced"(arg0: $BlockPlaceContext$$Type): void
public "tickCommon"(): void
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): $ItemInteractionResult
public "getGuiMaster"(): $BlockEntity
public "resetTarget"(): void
public "doGraphicalUpdates"(): void
public "canUseGui"(arg0: $Player$$Type): boolean
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "setDummy"(arg0: boolean): void
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "isDummy"(): boolean
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public "getInventory"(): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getComparatedSize"(): integer
public "getPickBlock"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $HitResult$$Type): $ItemStack
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getContainerType"(): $IEMenuTypes$ArgContainer<(T), (never)>
public "getDisplayName"(): $Component
public "isValid"(): boolean
public "canTickAny"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "guiMaster"(): $BlockEntity
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
set "dummy"(value: boolean)
get "dummy"(): boolean
get "inventory"(): $NonNullList<($ItemStack)>
get "droppedItems"(): $Stream<($ItemStack)>
get "comparatedSize"(): integer
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "containerType"(): $IEMenuTypes$ArgContainer<(T), (never)>
get "displayName"(): $Component
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurretBlockEntity$$Type<T> = ($TurretBlockEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurretBlockEntity$$Original<T> = $TurretBlockEntity<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar" {
import {$BlockCapability, $BlockCapability$$Type} from "net.neoforged.neoforge.capabilities.BlockCapability"
import {$ICapabilityProvider, $ICapabilityProvider$$Type} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Function$$Type} from "java.util.function.Function"

export interface $BlockCapabilityRegistration$BECapabilityRegistrar$$Interface<BE> {

(arg0: $BlockCapability<(T), (C)>, arg1: $ICapabilityProvider<(BE), (C), (T)>): void
}

export class $BlockCapabilityRegistration$BECapabilityRegistrar<BE> implements $BlockCapabilityRegistration$BECapabilityRegistrar$$Interface {
 "registerAllContexts"<T>(arg0: $BlockCapability$$Type<(T), (never)>, arg1: $Function$$Type<(BE), (T)>): void
 "registerOnContext"<C, T>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $Function$$Type<(BE), (T)>, arg2: C): void
 "register"<C, T>(arg0: $BlockCapability$$Type<(T), (C)>, arg1: $ICapabilityProvider$$Type<(BE), (C), (T)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<BE> = ((arg0: $BlockCapability<(T), (C)>, arg1: $ICapabilityProvider<(BE), (C), (T)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockCapabilityRegistration$BECapabilityRegistrar$$Original<BE> = $BlockCapabilityRegistration$BECapabilityRegistrar<(BE)>;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.StructuralArmBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$StructuralArmBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.StructuralArmBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $StructuralArmBlock extends $IEEntityBlock<($StructuralArmBlockEntity)> {
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
static readonly "FACING": $Property<($Direction)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructuralArmBlock$$Type = ($StructuralArmBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructuralArmBlock$$Original = $StructuralArmBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IScrewdriverInteraction" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IEBlockInterfaces$IScrewdriverInteraction$$Interface {

(arg0: $Direction, arg1: $Player, arg2: $InteractionHand, arg3: $Vec3): $ItemInteractionResult$$Type
}

export class $IEBlockInterfaces$IScrewdriverInteraction implements $IEBlockInterfaces$IScrewdriverInteraction$$Interface {
 "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): $ItemInteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IScrewdriverInteraction$$Type = ((arg0: $Direction, arg1: $Player, arg2: $InteractionHand, arg3: $Vec3) => $ItemInteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IScrewdriverInteraction$$Original = $IEBlockInterfaces$IScrewdriverInteraction;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FluidPumpBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FluidPumpBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.FluidPumpBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPumpBlock extends $IEEntityBlock<($FluidPumpBlockEntity)> {
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

public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPumpBlock$$Type = ($FluidPumpBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPumpBlock$$Original = $FluidPumpBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FeedthroughBlockEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$WireType, $WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$TargetingInfo$$Type} from "blusunrize.immersiveengineering.api.TargetingInfo"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ImmersiveConnectableBlockEntity} from "blusunrize.immersiveengineering.common.blocks.generic.ImmersiveConnectableBlockEntity"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockEntityDrop$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockEntityDrop"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$Connection} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$Collection} from "java.util.Collection"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IImmersiveConnectable$$Type} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $FeedthroughBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IBlockEntityDrop$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface {
 "reference": $WireType
 "currentlyDisassembling": boolean
 "offset": integer
static readonly "MIDDLE_STATE": StringJS
 "stateForMiddle": $BlockState
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "WIRE": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getBlockEntityDrop"(arg0: $LootContext$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
public "onBEPlaced"(arg0: $BlockPlaceContext$$Type): void
public "getPickBlock"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $HitResult$$Type): $ItemStack
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "getPositivePoint"(): $ConnectionPoint
public "getNegativePoint"(): $ConnectionPoint
public static "getIndexForOffset"(arg0: integer): integer
public "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "getIgnored"(arg0: $IImmersiveConnectable$$Type): $Set<($BlockPos)>
public "getConnectionMaster"(arg0: $WireType$$Type, arg1: $TargetingInfo$$Type): $BlockPos
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getInternalConnections"(): $Iterable<($Connection)>
public "getTargetedPoint"(arg0: $TargetingInfo$$Type, arg1: $Vec3i$$Type): $ConnectionPoint
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "positivePoint"(): $ConnectionPoint
get "negativePoint"(): $ConnectionPoint
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "internalConnections"(): $Iterable<($Connection)>
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FeedthroughBlockEntity$$Type = ($FeedthroughBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FeedthroughBlockEntity$$Original = $FeedthroughBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.RazorWireBlockEntity" {
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ImmersiveConnectableBlockEntity} from "blusunrize.immersiveengineering.common.blocks.generic.ImmersiveConnectableBlockEntity"
import {$IEBlockInterfaces$ICollisionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISelectionBounds"
import {$EnergyTransferHandler$EnergyConnector$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.EnergyTransferHandler$EnergyConnector"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $RazorWireBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$ICollisionBounds$$Interface, $EnergyTransferHandler$EnergyConnector$$Interface, $IEBlockInterfaces$ISelectionBounds$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public static "applyDamage"(arg0: $LivingEntity$$Type): void
public "isSource"(arg0: $ConnectionPoint$$Type): boolean
public "onEntityCollision"(arg0: $Level$$Type, arg1: $Entity$$Type): void
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "renderWall"(arg0: boolean): boolean
public "isStacked"(): boolean
public "isSink"(arg0: $ConnectionPoint$$Type): boolean
public "getRequestedEnergy"(): integer
public "insertEnergy"(arg0: integer): void
public "isOnGround"(): boolean
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "extractEnergy"(arg0: integer): void
public "getAvailableEnergy"(): integer
public "onEnergyPassedThrough"(arg0: double): void
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "stacked"(): boolean
get "requestedEnergy"(): integer
get "onGround"(): boolean
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "availableEnergy"(): integer
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RazorWireBlockEntity$$Type = ($RazorWireBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RazorWireBlockEntity$$Original = $RazorWireBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.ElectricLanternBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$ElectricLanternBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.ElectricLanternBlockEntity"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConnectorBlock} from "blusunrize.immersiveengineering.common.blocks.generic.ConnectorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ElectricLanternBlock extends $ConnectorBlock<($ElectricLanternBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DEFAULT_FACING_PROP": $EnumProperty<($Direction)>
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElectricLanternBlock$$Type = ($ElectricLanternBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElectricLanternBlock$$Original = $ElectricLanternBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.SampleDrillBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$MutableEnergyStorage} from "blusunrize.immersiveengineering.api.energy.MutableEnergyStorage"
import {$MineralWorldInfo$$Type} from "blusunrize.immersiveengineering.api.excavator.MineralWorldInfo"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEClientTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEClientTickableBE"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IHasDummyBlocks$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IGeneralMultiblock} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock"
import {$CoresampleItem$VeinSample} from "blusunrize.immersiveengineering.common.items.CoresampleItem$VeinSample"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IEBlockInterfaces$IPlayerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $SampleDrillBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IEClientTickableBE$$Interface, $IEBlockInterfaces$IHasDummyBlocks$$Interface, $IEBlockInterfaces$IPlayerInteraction$$Interface, $IModelOffsetProvider$$Interface {
 "dummy": integer
 "process": integer
 "isRunning": boolean
 "renderAABB": $AABB
 "energyStorage": $MutableEnergyStorage
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "sample": $ItemStack

constructor(arg0: $BlockEntityType$$Type<($SampleDrillBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tickClient"(): void
public "tickServer"(): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "canTickAny"(): boolean
public "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
public "createCoreSample"(arg0: $MineralWorldInfo$$Type): $ItemStack
public "getSampleProgress"(): float
public "isSamplingFinished"(): boolean
public "getVein"(): $List<($CoresampleItem$VeinSample)>
public "isDummy"(): boolean
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($SampleDrillBlockEntity$$Type)>): void
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
get "sampleProgress"(): float
get "samplingFinished"(): boolean
get "vein"(): $List<($CoresampleItem$VeinSample)>
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
declare module "blusunrize.immersiveengineering.common.blocks.IEBaseBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item} from "net.minecraft.world.item.Item"
import {$IIEBlock$$Interface} from "blusunrize.immersiveengineering.common.blocks.IIEBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $IEBaseBlock extends $Block implements $IIEBlock$$Interface, $SimpleWaterloggedBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: boolean)
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getShadeBrightness"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): float
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "onIEBlockPlacedBy"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "hasFlavour"(): boolean
public "getNameForFlavour"(): StringJS
public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public "fitsIntoContainer"(): boolean
public "setHasFlavour"(arg0: boolean): $IEBaseBlock
public "setLightOpacity"(arg0: integer): $IEBaseBlock
public static "applyLocationalWaterlogging"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): $BlockState
public "setHidden"(arg0: boolean): $IEBaseBlock
public "isHidden"(): boolean
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "triggerEvent"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): boolean
public "getLightBlock"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$$Type): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "nameForFlavour"(): StringJS
set "lightOpacity"(value: integer)
set "hidden"(value: boolean)
get "hidden"(): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBaseBlock$$Type = ($IEBaseBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBaseBlock$$Original = $IEBaseBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.ConveyorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ConveyorBeltBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.ConveyorBeltBlockEntity"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$ConveyorHandler$IConveyorBlock$$Interface} from "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$IConveyorBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IConveyorType, $IConveyorType$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorType"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ConveyorBlock extends $IEEntityBlock<($ConveyorBeltBlockEntity<(never)>)> implements $ConveyorHandler$IConveyorBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

constructor(arg0: $IConveyorType$$Type<(never)>, arg1: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public static "getCover"(arg0: $ItemStack$$Type): $Block
public "onIEBlockPlacedBy"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public static "makeCovered"(arg0: $ItemLike$$Type, arg1: $Block$$Type): $ItemStack
public "getType"(): $IConveyorType<(never)>
public "fillCreativeTab"(arg0: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $IConveyorType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorBlock$$Type = ($ConveyorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorBlock$$Original = $ConveyorBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockOverlayText" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$IBlockOverlayText$$Interface {

(arg0: $BlockState, arg1: $Player, arg2: $HitResult, arg3: boolean): ($Component$$Type)[]
}

export class $IEBlockInterfaces$IBlockOverlayText implements $IEBlockInterfaces$IBlockOverlayText$$Interface {
 "getOverlayText"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $HitResult$$Type, arg3: boolean): ($Component)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IBlockOverlayText$$Type = ((arg0: $BlockState, arg1: $Player, arg2: $HitResult, arg3: boolean) => ($Component$$Type)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IBlockOverlayText$$Original = $IEBlockInterfaces$IBlockOverlayText;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.ClocheBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$ClocheBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.ClocheBlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ClocheBlock extends $IEEntityBlock<($ClocheBlockEntity)> {
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

public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClocheBlock$$Type = ($ClocheBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClocheBlock$$Original = $ClocheBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FurnaceHeaterBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$FurnaceHeaterBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.FurnaceHeaterBlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FurnaceHeaterBlock extends $IEEntityBlock<($FurnaceHeaterBlockEntity)> {
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

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceHeaterBlock$$Type = ($FurnaceHeaterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FurnaceHeaterBlock$$Original = $FurnaceHeaterBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.HorizontalFacingEntityBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $HorizontalFacingEntityBlock<T extends $BlockEntity> extends $IEEntityBlock<(T)> {
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

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HorizontalFacingEntityBlock$$Type<T> = ($HorizontalFacingEntityBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HorizontalFacingEntityBlock$$Original<T> = $HorizontalFacingEntityBlock<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TurretBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MultiblockBEType$$Type} from "blusunrize.immersiveengineering.common.blocks.MultiblockBEType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$TurretBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.TurretBlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TurretBlock<T extends $TurretBlockEntity<(object)>> extends $IEEntityBlock<(T)> {
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

constructor(arg0: $MultiblockBEType$$Type<(T)>, arg1: $BlockBehaviour$Properties$$Type)

public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurretBlock$$Type<T> = ($TurretBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurretBlock$$Original<T> = $TurretBlock<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.TurntableBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEBlockInterfaces$IHammerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$Rotation, $Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $TurntableBlockEntity extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IHammerInteraction$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "onNeighborBlockChange"(arg0: $BlockPos$$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "verticalTransitionRotationMap"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "getRotationFromSide"(arg0: $Direction$$Type): $Rotation
public "rotateRotationMap"(arg0: $Rotation$$Type): void
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurntableBlockEntity$$Type = ($TurntableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurntableBlockEntity$$Original = $TurntableBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $IEBlockInterfaces$IHammerInteraction$$Interface {

(arg0: $Direction, arg1: $Player, arg2: $InteractionHand, arg3: $Vec3): boolean
}

export class $IEBlockInterfaces$IHammerInteraction implements $IEBlockInterfaces$IHammerInteraction$$Interface {
 "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IHammerInteraction$$Type = ((arg0: $Direction, arg1: $Player, arg2: $InteractionHand, arg3: $Vec3) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IHammerInteraction$$Original = $IEBlockInterfaces$IHammerInteraction;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IInteractionObjectIE" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IEMenuTypes$ArgContainer} from "blusunrize.immersiveengineering.common.register.IEMenuTypes$ArgContainer"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IEBlockInterfaces$IInteractionObjectIE$$Interface<T extends $BlockEntity> extends $MenuProvider$$Interface {
get "guiMaster"(): T
get "containerType"(): $IEMenuTypes$ArgContainer<(T), (never)>
get "displayName"(): $Component
get "valid"(): boolean
}

export class $IEBlockInterfaces$IInteractionObjectIE<T extends $BlockEntity> implements $IEBlockInterfaces$IInteractionObjectIE$$Interface {
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
 "getGuiMaster"(): T
 "canUseGui"(arg0: $Player$$Type): boolean
 "getContainerType"(): $IEMenuTypes$ArgContainer<(T), (never)>
 "getDisplayName"(): $Component
 "isValid"(): boolean
 "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
 "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IInteractionObjectIE$$Type<T> = ($IEBlockInterfaces$IInteractionObjectIE<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IInteractionObjectIE$$Original<T> = $IEBlockInterfaces$IInteractionObjectIE<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.BlueprintShelfBlockEntity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IIEInventory$$Interface} from "blusunrize.immersiveengineering.common.util.inventory.IIEInventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockOverlayText$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockOverlayText"
import {$Stream} from "java.util.stream.Stream"
import {$IEBlockInterfaces$IBlockEntityDrop$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockEntityDrop"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$LootContext$$Type} from "net.minecraft.world.level.storage.loot.LootContext"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IPlayerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $BlueprintShelfBlockEntity extends $IEBaseBlockEntity implements $IIEInventory$$Interface, $IEBlockInterfaces$IBlockEntityDrop$$Interface, $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$IPlayerInteraction$$Interface, $IEBlockInterfaces$IBlockOverlayText$$Interface {
static readonly "NUM_SLOTS": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isStackValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getOverlayText"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $HitResult$$Type, arg3: boolean): ($Component)[]
public "getBlockEntityDrop"(arg0: $LootContext$$Type, arg1: $Consumer$$Type<($ItemStack)>): void
public "onBEPlaced"(arg0: $BlockPlaceContext$$Type): void
public "doGraphicalUpdates"(): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
public "getInventory"(): $NonNullList<($ItemStack)>
public "getSlotLimit"(arg0: integer): integer
public "getDroppedItems"(): $Stream<($ItemStack)>
public "getComparatedSize"(): integer
public "getPickBlock"(arg0: $Player$$Type, arg1: $BlockState$$Type, arg2: $HitResult$$Type): $ItemStack
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "inventory"(): $NonNullList<($ItemStack)>
get "droppedItems"(): $Stream<($ItemStack)>
get "comparatedSize"(): integer
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlueprintShelfBlockEntity$$Type = ($BlueprintShelfBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlueprintShelfBlockEntity$$Original = $BlueprintShelfBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.WallmountBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$WallmountBlock$Orientation} from "blusunrize.immersiveengineering.common.blocks.generic.WallmountBlock$Orientation"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IEBaseBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WallmountBlock extends $IEBaseBlock {
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
static readonly "ORIENTATION": $EnumProperty<($WallmountBlock$Orientation)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Level$$Type, arg4: $BlockPos$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallmountBlock$$Type = ($WallmountBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WallmountBlock$$Original = $WallmountBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlacementInteraction" {
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export interface $IEBlockInterfaces$IPlacementInteraction$$Interface {

(arg0: $BlockPlaceContext): void
}

export class $IEBlockInterfaces$IPlacementInteraction implements $IEBlockInterfaces$IPlacementInteraction$$Interface {
 "onBEPlaced"(arg0: $BlockPlaceContext$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IPlacementInteraction$$Type = ((arg0: $BlockPlaceContext) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IPlacementInteraction$$Original = $IEBlockInterfaces$IPlacementInteraction;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock" {
import {$IEBlockInterfaces$BlockstateProvider$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$BlockstateProvider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$IGeneralMultiblock$$Interface extends $IEBlockInterfaces$BlockstateProvider$$Interface {
get "dummy"(): boolean
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}

export class $IEBlockInterfaces$IGeneralMultiblock implements $IEBlockInterfaces$IGeneralMultiblock$$Interface {
 "isDummy"(): boolean
 "master"(): $IEBlockInterfaces$IGeneralMultiblock
 "getState"(): $BlockState
 "setState"(arg0: $BlockState$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IGeneralMultiblock$$Type = ($IEBlockInterfaces$IGeneralMultiblock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IGeneralMultiblock$$Original = $IEBlockInterfaces$IGeneralMultiblock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IDirectionalBE" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"

export interface $IEBlockInterfaces$IDirectionalBE$$Interface {
set "facing"(value: $Direction$$Type)
get "facingLimitation"(): $PlacementLimitation
get "facing"(): $Direction
}

export class $IEBlockInterfaces$IDirectionalBE implements $IEBlockInterfaces$IDirectionalBE$$Interface {
 "setFacing"(arg0: $Direction$$Type): void
 "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
 "getFacingLimitation"(): $PlacementLimitation
 "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
 "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
 "getFacing"(): $Direction
 "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IDirectionalBE$$Type = ($IEBlockInterfaces$IDirectionalBE);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IDirectionalBE$$Original = $IEBlockInterfaces$IDirectionalBE;}
declare module "blusunrize.immersiveengineering.common.blocks.cloth.ShaderBannerWallBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ShaderBannerBlock} from "blusunrize.immersiveengineering.common.blocks.cloth.ShaderBannerBlock"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ShaderBannerWallBlock extends $ShaderBannerBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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
static readonly "FACING": $Property<($Direction)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBannerWallBlock$$Type = ($ShaderBannerWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderBannerWallBlock$$Original = $ShaderBannerWallBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.multiblocks.logic.NonMirrorableWithActiveBlock" {
import {$MultiblockRegistration$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.MultiblockRegistration"
import {$MultiblockPartBlock} from "blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockPartBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IMultiblockState} from "blusunrize.immersiveengineering.api.multiblocks.blocks.logic.IMultiblockState"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$TemplateMultiblock$$Type} from "blusunrize.immersiveengineering.api.multiblocks.TemplateMultiblock"
import {$IMultiblockLevel$$Type} from "blusunrize.immersiveengineering.api.multiblocks.blocks.env.IMultiblockLevel"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $NonMirrorableWithActiveBlock<S extends $IMultiblockState> extends $MultiblockPartBlock<(S)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "ACTIVE": $Property<(boolean)>
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $MultiblockRegistration$$Type<(S)>)

public static "setActive"(arg0: $IMultiblockLevel$$Type, arg1: $TemplateMultiblock$$Type, arg2: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonMirrorableWithActiveBlock$$Type<S> = ($NonMirrorableWithActiveBlock<(S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonMirrorableWithActiveBlock$$Original<S> = $NonMirrorableWithActiveBlock<(S)>;}
declare module "blusunrize.immersiveengineering.common.blocks.IEDoorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DoubleBlockHalf} from "net.minecraft.world.level.block.state.properties.DoubleBlockHalf"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DoorHingeSide} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$DoorBlock} from "net.minecraft.world.level.block.DoorBlock"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $IEDoorBlock extends $DoorBlock {
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

constructor(arg0: $BlockSetType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canEntityDestroy"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): boolean
public "setLockedByRedstone"(): $IEDoorBlock
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "moreculling$shouldAttemptToCull"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type): boolean
public "moreculling$canCull"(): boolean
public "moreculling$setCanCull"(arg0: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "lockedByRedstone"(): $IEDoorBlock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEDoorBlock$$Type = ($IEDoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEDoorBlock$$Original = $IEDoorBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TeslaCoilBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$TeslaCoilBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.TeslaCoilBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TeslaCoilBlock extends $IEEntityBlock<($TeslaCoilBlockEntity)> {
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

public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
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
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IAdditionalDrops" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Collection, $Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IEBlockInterfaces$IAdditionalDrops$$Interface {

(arg0: $Player, arg1: $BlockState): $Collection$$Type<($ItemStack$$Type)>
}

export class $IEBlockInterfaces$IAdditionalDrops implements $IEBlockInterfaces$IAdditionalDrops$$Interface {
 "getExtraDrops"(arg0: $Player$$Type, arg1: $BlockState$$Type): $Collection<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IAdditionalDrops$$Type = ((arg0: $Player, arg1: $BlockState) => $Collection$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IAdditionalDrops$$Original = $IEBlockInterfaces$IAdditionalDrops;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FluidPipeBlockEntity$DirectionalFluidOutput" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IFluidHandler, $IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Record} from "java.lang.Record"

export class $FluidPipeBlockEntity$DirectionalFluidOutput extends $Record {
constructor(output: $IFluidHandler$$Type, direction: $Direction$$Type, containingTile: $BlockEntity$$Type, pos: $BlockPos$$Type)

public "containingTile"(): $BlockEntity
public "output"(): $IFluidHandler
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "pos"(): $BlockPos
public "direction"(): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeBlockEntity$DirectionalFluidOutput$$Type = ({"direction"?: $Direction$$Type, "output"?: $IFluidHandler$$Type, "containingTile"?: $BlockEntity$$Type, "pos"?: $BlockPos$$Type}) | ([direction?: $Direction$$Type, output?: $IFluidHandler$$Type, containingTile?: $BlockEntity$$Type, pos?: $BlockPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPipeBlockEntity$DirectionalFluidOutput$$Original = $FluidPipeBlockEntity$DirectionalFluidOutput;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.GunpowderBarrelBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TntBlock} from "net.minecraft.world.level.block.TntBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GunpowderBarrelBlock extends $TntBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($TntBlock)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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
static readonly "UNSTABLE": $BooleanProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "wasExploded"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): void
public "getFlammability"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "onCaughtFire"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $LivingEntity$$Type): void
public "onBlockExploded"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Explosion$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GunpowderBarrelBlock$$Type = ($GunpowderBarrelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GunpowderBarrelBlock$$Original = $GunpowderBarrelBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.AbstractTransformerBlockEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Connection, $Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ImmersiveConnectableBlockEntity, $ImmersiveConnectableBlockEntity$$Type} from "blusunrize.immersiveengineering.common.blocks.generic.ImmersiveConnectableBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnergyTransferHandler$LimitingEnergyConnector$$Interface} from "blusunrize.immersiveengineering.api.wires.localhandlers.EnergyTransferHandler$LimitingEnergyConnector"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IImmersiveConnectable$$Type} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractTransformerBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional$$Interface, $EnergyTransferHandler$LimitingEnergyConnector$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<($ImmersiveConnectableBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "canConnect"(): boolean
public "isSource"(arg0: $ConnectionPoint$$Type): boolean
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getInternalConnections"(): $Iterable<($Connection)>
public "connectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $IImmersiveConnectable$$Type, arg3: $ConnectionPoint$$Type): void
public "isSink"(arg0: $ConnectionPoint$$Type): boolean
public "getHigherWiretype"(): StringJS
public "getPowerLimit"(): double
public "removeCable"(arg0: $Connection$$Type, arg1: $ConnectionPoint$$Type): void
public "setFacing"(arg0: $Direction$$Type): void
public "getFacing"(): $Direction
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
public "extractEnergy"(arg0: integer): void
public "getRequestedEnergy"(): integer
public "insertEnergy"(arg0: integer): void
public "getAvailableEnergy"(): integer
public "onEnergyPassedThrough"(arg0: double): void
get "facingProperty"(): $Property<($Direction)>
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "internalConnections"(): $Iterable<($Connection)>
get "higherWiretype"(): StringJS
get "powerLimit"(): double
set "facing"(value: $Direction$$Type)
get "facing"(): $Direction
get "facingLimitation"(): $PlacementLimitation
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
get "requestedEnergy"(): integer
get "availableEnergy"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTransformerBlockEntity$$Type = ($AbstractTransformerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTransformerBlockEntity$$Original = $AbstractTransformerBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.MetalLadderBlock$CoverType" {
import {$Enum} from "java.lang.Enum"

export class $MetalLadderBlock$CoverType extends $Enum<($MetalLadderBlock$CoverType)> {
static readonly "STEEL": $MetalLadderBlock$CoverType
static readonly "ALU": $MetalLadderBlock$CoverType
static readonly "NONE": $MetalLadderBlock$CoverType

public static "values"(): ($MetalLadderBlock$CoverType)[]
public static "valueOf"(arg0: StringJS): $MetalLadderBlock$CoverType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalLadderBlock$CoverType$$Type = (("none") | ("alu") | ("steel"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetalLadderBlock$CoverType$$Original = $MetalLadderBlock$CoverType;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.FluidPumpBlockEntity" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IEEnums$IOSideConfig} from "blusunrize.immersiveengineering.api.IEEnums$IOSideConfig"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IHasDummyBlocks$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IFluidPipe$$Interface} from "blusunrize.immersiveengineering.api.fluid.IFluidPipe"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockOverlayText$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockOverlayText"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IScrewdriverInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IScrewdriverInteraction"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Map} from "java.util.Map"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$IEBlockInterfaces$IConfigurableSides$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IConfigurableSides"

export class $FluidPumpBlockEntity extends $IEBaseBlockEntity implements $IEServerTickableBE$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface, $IEBlockInterfaces$IHasDummyBlocks$$Interface, $IEBlockInterfaces$IConfigurableSides$$Interface, $IEBlockInterfaces$IScrewdriverInteraction$$Interface, $IFluidPipe$$Interface, $IEBlockInterfaces$IBlockOverlayText$$Interface {
 "sideConfig": $Map<($Direction), ($IEEnums$IOSideConfig)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "redstoneControlInverted": boolean

constructor(arg0: $BlockEntityType$$Type<($FluidPumpBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tickServer"(): void
public "toggleSide"(arg0: $Direction$$Type, arg1: $Player$$Type): boolean
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getOverlayText"(arg0: $BlockState$$Type, arg1: $Player$$Type, arg2: $HitResult$$Type, arg3: boolean): ($Component)[]
public "screwdriverUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): $ItemInteractionResult
public "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "setDummy"(arg0: boolean): void
public "canOutputPressurized"(arg0: boolean): boolean
public "outputFluid"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "prepareAreaCheck"(): void
public "checkAreaTick"(): void
public "getSideConfig"(arg0: $Direction$$Type): $IEEnums$IOSideConfig
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "isDummy"(): boolean
public "master"(): $FluidPumpBlockEntity
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($FluidPumpBlockEntity$$Type)>): void
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public static "getTransferableAmount"(arg0: boolean): integer
public "stripPressureTag"(): boolean
public "canTickAny"(): boolean
set "dummy"(value: boolean)
get "dummy"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPumpBlockEntity$$Type = ($FluidPumpBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPumpBlockEntity$$Original = $FluidPumpBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.ScaffoldingBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IEBaseBlock$IELadderBlock} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlock$IELadderBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ScaffoldingBlock extends $IEBaseBlock$IELadderBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "CHECK_SHAPE": $VoxelShape
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

public "skipRendering"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScaffoldingBlock$$Type = ($ScaffoldingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScaffoldingBlock$$Original = $ScaffoldingBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEStairsBlock" {
import {$StairsShape} from "net.minecraft.world.level.block.state.properties.StairsShape"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$StairBlock} from "net.minecraft.world.level.block.StairBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Half} from "net.minecraft.world.level.block.state.properties.Half"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$IIEBlock$$Interface} from "blusunrize.immersiveengineering.common.blocks.IIEBlock"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $IEStairsBlock extends $StairBlock implements $IIEBlock$$Interface {
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

constructor<T extends $Block>(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<(T)>)

public "hasFlavour"(): boolean
public "getNameForFlavour"(): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "nameForFlavour"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEStairsBlock$$Type = ($IEStairsBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEStairsBlock$$Original = $IEStairsBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.TurntableBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$TurntableBlockEntity} from "blusunrize.immersiveengineering.common.blocks.wooden.TurntableBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TurntableBlock extends $IEEntityBlock<($TurntableBlockEntity)> {
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

public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TurntableBlock$$Type = ($TurntableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TurntableBlock$$Original = $TurntableBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IEntityProof" {
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IEBlockInterfaces$IEntityProof$$Interface {

(arg0: $Entity): boolean
}

export class $IEBlockInterfaces$IEntityProof implements $IEBlockInterfaces$IEntityProof$$Interface {
 "canEntityDestroy"(arg0: $Entity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockInterfaces$IEntityProof$$Type = ((arg0: $Entity) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockInterfaces$IEntityProof$$Original = $IEBlockInterfaces$IEntityProof;}
declare module "blusunrize.immersiveengineering.common.blocks.cloth.ShaderBannerStandingBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ShaderBannerBlock} from "blusunrize.immersiveengineering.common.blocks.cloth.ShaderBannerBlock"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ShaderBannerStandingBlock extends $ShaderBannerBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBannerStandingBlock$$Type = ($ShaderBannerStandingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderBannerStandingBlock$$Original = $ShaderBannerStandingBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.ConveyorBeltBlockEntity" {
import {$ConveyorHandler$IConveyorBlockEntity$$Interface} from "blusunrize.immersiveengineering.api.tool.conveyor.ConveyorHandler$IConveyorBlockEntity"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IEBlockInterfaces$ICollisionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ICollisionBounds"
import {$IEBlockInterfaces$ISelectionBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$ISelectionBounds"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$IEBlockInterfaces$IStateBasedDirectional$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IStateBasedDirectional"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$NewRegistryEvent$$Type} from "net.neoforged.neoforge.registries.NewRegistryEvent"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Map} from "java.util.Map"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IConveyorType, $IConveyorType$$Type} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorType"
import {$IEBlockInterfaces$IHammerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction"
import {$IEServerTickableBE$$Interface} from "blusunrize.immersiveengineering.common.blocks.ticking.IEServerTickableBE"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IConveyorBelt} from "blusunrize.immersiveengineering.api.tool.conveyor.IConveyorBelt"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IEBlockInterfaces$IPlayerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $ConveyorBeltBlockEntity<T extends $IConveyorBelt> extends $IEBaseBlockEntity implements $IEBlockInterfaces$IStateBasedDirectional$$Interface, $IEBlockInterfaces$ICollisionBounds$$Interface, $IEBlockInterfaces$ISelectionBounds$$Interface, $IEBlockInterfaces$IHammerInteraction$$Interface, $IEBlockInterfaces$IPlayerInteraction$$Interface, $ConveyorHandler$IConveyorBlockEntity$$Interface<(T)>, $IEServerTickableBE$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "BE_TYPES": $Map<($IConveyorType<(never)>), ($Supplier<($BlockEntityType<(never)>)>)>

constructor(arg0: $IConveyorType$$Type<(T)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "tickServer"(): void
public "onEntityCollision"(arg0: $Level$$Type, arg1: $Entity$$Type): void
public "getConveyorInstance"(): T
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "isRSPowered"(): boolean
public "afterRotation"(arg0: $Direction$$Type, arg1: $Direction$$Type): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getFacingProperty"(): $Property<($Direction)>
public "getFacingLimitation"(): $PlacementLimitation
public "canHammerRotate"(arg0: $Direction$$Type, arg1: $Vec3$$Type, arg2: $LivingEntity$$Type): boolean
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public static "registerConveyorBEsAndBlocks"(arg0: $NewRegistryEvent$$Type): void
public "getFacing"(): $Direction
public "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($ConveyorBeltBlockEntity$$Type<(never)>)>): void
public "setFacing"(arg0: $Direction$$Type): void
public "sigOutputDirections"(): ($Direction)[]
public static "makeTicker"<T extends $BlockEntity>(): $BlockEntityTicker<(T)>
public "mirrorFacingOnPlacement"(arg0: $LivingEntity$$Type): boolean
public "getFacingForPlacement"(arg0: $BlockPlaceContext$$Type): $Direction
public "canTickAny"(): boolean
get "conveyorInstance"(): T
get "RSPowered"(): boolean
get "facingProperty"(): $Property<($Direction)>
get "facingLimitation"(): $PlacementLimitation
get "facing"(): $Direction
set "facing"(value: $Direction$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorBeltBlockEntity$$Type<T> = ($ConveyorBeltBlockEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorBeltBlockEntity$$Original<T> = $ConveyorBeltBlockEntity<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.wooden.DeskBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $DeskBlock<T extends $BlockEntity> extends $IEEntityBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "DUMMY": $Property<(boolean)>
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $Property<($Direction)>

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public static "placeDummies"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockPlaceContext$$Type): void
public "canIEBlockBePlaced"(arg0: $BlockState$$Type, arg1: $BlockPlaceContext$$Type): boolean
public static "getDeskDummyOffset"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockPlaceContext$$Type): $Direction
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeskBlock$$Type<T> = ($DeskBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeskBlock$$Original<T> = $DeskBlock<(T)>;}
declare module "blusunrize.immersiveengineering.common.blocks.metal.TransformerBlockEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$AbstractTransformerBlockEntity} from "blusunrize.immersiveengineering.common.blocks.metal.AbstractTransformerBlockEntity"
import {$TargetingInfo$$Type} from "blusunrize.immersiveengineering.api.TargetingInfo"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$IEBlockInterfaces$IHasDummyBlocks$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHasDummyBlocks"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Set} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$IEBlockInterfaces$IGeneralMultiblock} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IGeneralMultiblock"
import {$IEBlockInterfaces$IMirrorAble$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IMirrorAble"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Connection} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$Collection} from "java.util.Collection"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$PlacementLimitation} from "blusunrize.immersiveengineering.common.blocks.PlacementLimitation"
import {$IImmersiveConnectable$$Type} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$IModelOffsetProvider$$Interface} from "blusunrize.immersiveengineering.api.client.IModelOffsetProvider"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"

export class $TransformerBlockEntity extends $AbstractTransformerBlockEntity implements $IEBlockInterfaces$IMirrorAble$$Interface, $IEBlockInterfaces$IHasDummyBlocks$$Interface, $IModelOffsetProvider$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface {
 "dummy": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<($TransformerBlockEntity$$Type)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "getFacingLimitation"(): $PlacementLimitation
public "placeDummies"(arg0: $BlockPlaceContext$$Type, arg1: $BlockState$$Type): void
public "breakDummies"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): void
public "getModelOffset"(arg0: $BlockState$$Type, arg1: $Vec3i$$Type): $BlockPos
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "getIgnored"(arg0: $IImmersiveConnectable$$Type): $Set<($BlockPos)>
public "getConnectionMaster"(arg0: $WireType$$Type, arg1: $TargetingInfo$$Type): $BlockPos
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getInternalConnections"(): $Iterable<($Connection)>
public "getTargetedPoint"(arg0: $TargetingInfo$$Type, arg1: $Vec3i$$Type): $ConnectionPoint
public "connectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $IImmersiveConnectable$$Type, arg3: $ConnectionPoint$$Type): void
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "isDummy"(): boolean
public "master"(): $IEBlockInterfaces$IGeneralMultiblock
public "setMirrored"(arg0: boolean): void
public "getIsMirrored"(): boolean
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getState"(): $BlockState
public "setState"(arg0: $BlockState$$Type): void
get "facingLimitation"(): $PlacementLimitation
get "connectionPoints"(): $Collection<($ConnectionPoint)>
get "internalConnections"(): $Iterable<($Connection)>
set "mirrored"(value: boolean)
get "isMirrored"(): boolean
get "state"(): $BlockState
set "state"(value: $BlockState$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformerBlockEntity$$Type = ($TransformerBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformerBlockEntity$$Original = $TransformerBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.cloth.ShaderBannerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties, $BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IEEntityBlock} from "blusunrize.immersiveengineering.common.blocks.IEEntityBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Supplier} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ShaderBannerBlockEntity} from "blusunrize.immersiveengineering.common.blocks.cloth.ShaderBannerBlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ShaderBannerBlock extends $IEEntityBlock<($ShaderBannerBlockEntity)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "PROPERTIES": $Supplier<($BlockBehaviour$Properties)>
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

public "asItem"(): $Item
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShaderBannerBlock$$Type = ($ShaderBannerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShaderBannerBlock$$Original = $ShaderBannerBlock;}
declare module "blusunrize.immersiveengineering.common.blocks.generic.ImmersiveConnectableBlockEntity" {
import {$Iterable} from "java.lang.Iterable"
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection} from "java.util.Collection"
import {$Connection, $Connection$$Type} from "blusunrize.immersiveengineering.api.wires.Connection"
import {$TargetingInfo$$Type} from "blusunrize.immersiveengineering.api.TargetingInfo"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IEBaseBlockEntity} from "blusunrize.immersiveengineering.common.blocks.IEBaseBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IImmersiveConnectable$$Type, $IImmersiveConnectable$$Interface} from "blusunrize.immersiveengineering.api.wires.IImmersiveConnectable"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ConnectionPoint, $ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$Set} from "java.util.Set"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ImmersiveConnectableBlockEntity extends $IEBaseBlockEntity implements $IImmersiveConnectable$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "canConnect"(): boolean
public "onChunkUnloaded"(): void
public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "setRemovedIE"(): void
public "getConnectionMaster"(arg0: $WireType$$Type, arg1: $TargetingInfo$$Type): $BlockPos
public "getConnectionPoints"(): $Collection<($ConnectionPoint)>
public "getTargetedPoint"(arg0: $TargetingInfo$$Type, arg1: $Vec3i$$Type): $ConnectionPoint
public "connectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $IImmersiveConnectable$$Type, arg3: $ConnectionPoint$$Type): void
public "removeCable"(arg0: $Connection$$Type, arg1: $ConnectionPoint$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "getPosition"(): $BlockPos
public "onLoad"(): void
public "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "getIgnored"(arg0: $IImmersiveConnectable$$Type): $Set<($BlockPos)>
public "getInternalConnections"(): $Iterable<($Connection)>
public "isProxy"(): boolean
public "getRequestedHandlers"(): $Collection<($ResourceLocation)>
get "removedIE"(): void
get "connectionPoints"(): $Collection<($ConnectionPoint)>
set "level"(value: $Level$$Type)
get "position"(): $BlockPos
get "internalConnections"(): $Iterable<($Connection)>
get "proxy"(): boolean
get "requestedHandlers"(): $Collection<($ResourceLocation)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ImmersiveConnectableBlockEntity$$Type = ($ImmersiveConnectableBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ImmersiveConnectableBlockEntity$$Original = $ImmersiveConnectableBlockEntity;}
declare module "blusunrize.immersiveengineering.common.blocks.IESignBlocks$Hanging" {
import {$WoodType$$Type} from "net.minecraft.world.level.block.state.properties.WoodType"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$CeilingHangingSignBlock} from "net.minecraft.world.level.block.CeilingHangingSignBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IESignBlocks$Hanging extends $CeilingHangingSignBlock {
static readonly "ROTATION": $IntegerProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CeilingHangingSignBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $WoodType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IESignBlocks$Hanging$$Type = ($IESignBlocks$Hanging);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IESignBlocks$Hanging$$Original = $IESignBlocks$Hanging;}
declare module "blusunrize.immersiveengineering.common.blocks.cloth.BalloonBlockEntity" {
import {$WireType$$Type} from "blusunrize.immersiveengineering.api.wires.WireType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockCapabilityRegistration$BECapabilityRegistrar$$Type} from "blusunrize.immersiveengineering.common.blocks.BlockCapabilityRegistration$BECapabilityRegistrar"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ImmersiveConnectableBlockEntity} from "blusunrize.immersiveengineering.common.blocks.generic.ImmersiveConnectableBlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IEBlockInterfaces$IHammerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IHammerInteraction"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$ConnectionPoint$$Type} from "blusunrize.immersiveengineering.api.wires.ConnectionPoint"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$CapabilityShader$ShaderWrapper} from "blusunrize.immersiveengineering.api.shader.CapabilityShader$ShaderWrapper"
import {$IEBlockInterfaces$IPlayerInteraction$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IPlayerInteraction"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IEBlockInterfaces$IBlockBounds$$Interface} from "blusunrize.immersiveengineering.common.blocks.IEBlockInterfaces$IBlockBounds"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BalloonBlockEntity extends $ImmersiveConnectableBlockEntity implements $IEBlockInterfaces$IPlayerInteraction$$Interface, $IEBlockInterfaces$IHammerInteraction$$Interface, $IEBlockInterfaces$IBlockBounds$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "style": integer
 "colour0": $DyeColor
 "colour1": $DyeColor

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "writeCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "readCustomNBT"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: $HolderLookup$Provider$$Type): void
public "hammerUseSide"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $Vec3$$Type): boolean
public "getConnectionOffset"(arg0: $ConnectionPoint$$Type, arg1: $ConnectionPoint$$Type, arg2: $WireType$$Type): $Vec3
public "canConnectCable"(arg0: $WireType$$Type, arg1: $ConnectionPoint$$Type, arg2: $Vec3i$$Type): boolean
public "getBlockBounds"(arg0: $CollisionContext$$Type): $VoxelShape
public "getShader"(): $CapabilityShader$ShaderWrapper
public "interact"(arg0: $Direction$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type, arg3: $ItemStack$$Type, arg4: float, arg5: float, arg6: float): $ItemInteractionResult
public "triggerEvent"(arg0: integer, arg1: integer): boolean
public static "registerCapabilities"(arg0: $BlockCapabilityRegistration$BECapabilityRegistrar$$Type<($BalloonBlockEntity$$Type)>): void
public "getSelectionShape"(arg0: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $CollisionContext$$Type): $VoxelShape
get "shader"(): $CapabilityShader$ShaderWrapper
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BalloonBlockEntity$$Type = ($BalloonBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BalloonBlockEntity$$Original = $BalloonBlockEntity;}
