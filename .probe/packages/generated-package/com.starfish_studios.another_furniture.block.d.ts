declare module "com.starfish_studios.another_furniture.block.properties.VerticalConnectionType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $VerticalConnectionType extends $Enum<($VerticalConnectionType)> implements $StringRepresentable$$Interface {
static readonly "SINGLE": $VerticalConnectionType
static readonly "TOP": $VerticalConnectionType
static readonly "BOTTOM": $VerticalConnectionType
static readonly "MIDDLE": $VerticalConnectionType

public "isConnectedUp"(): boolean
public "isConnectedDown"(): boolean
public "toString"(): StringJS
public static "values"(): ($VerticalConnectionType)[]
public static "valueOf"(name: StringJS): $VerticalConnectionType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "connectedUp"(): boolean
get "connectedDown"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VerticalConnectionType$$Type = (("single") | ("bottom") | ("middle") | ("top"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VerticalConnectionType$$Original = $VerticalConnectionType;}
declare module "com.starfish_studios.another_furniture.block.CurtainBlock" {
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
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$HorizontalConnectionType} from "com.starfish_studios.another_furniture.block.properties.HorizontalConnectionType"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CurtainBlock extends $Block implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "VERTICAL_CONNECTION_TYPE": $DirectionProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "HORIZONTAL_CONNECTION_TYPE": $EnumProperty<($HorizontalConnectionType)>
static readonly "UPDATE_INVISIBLE": integer
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "setPlacedBy"(level: $Level$$Type, pos: $BlockPos$$Type, state: $BlockState$$Type, placer: $LivingEntity$$Type, stack: $ItemStack$$Type): void
public "toggleFromTop"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): void
public "toggleVertical"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, open: boolean): void
public "toggleHorizontal"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, open: boolean, facing: $Direction$$Type, dir: $Direction$$Type): void
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getCollisionShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CurtainBlock$$Type = ($CurtainBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CurtainBlock$$Original = $CurtainBlock;}
declare module "com.starfish_studios.another_furniture.block.DrawerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DrawerBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($DrawerBlock)>
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
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getAnalogOutputSignal"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "codec"(): $MapCodec<($DrawerBlock)>
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerBlock$$Type = ($DrawerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawerBlock$$Original = $DrawerBlock;}
declare module "com.starfish_studios.another_furniture.block.LampBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $LampBlock extends $Block implements $SimpleWaterloggedBlock$$Interface {
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
static readonly "BASE": $BooleanProperty
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public static "getLampConnectorByColor"(color: $DyeColor$$Type): $Block
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getColor"(): $DyeColor
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "color"(): $DyeColor
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LampBlock$$Type = ($LampBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LampBlock$$Original = $LampBlock;}
declare module "com.starfish_studios.another_furniture.block.properties.SofaType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $SofaType extends $Enum<($SofaType)> implements $StringRepresentable$$Interface {
static readonly "INNER_LEFT": $SofaType
static readonly "INNER_RIGHT": $SofaType
static readonly "SINGLE": $SofaType
static readonly "LEFT": $SofaType
static readonly "OUTER_LEFT": $SofaType
static readonly "OUTER_RIGHT": $SofaType
static readonly "RIGHT": $SofaType
static readonly "MIDDLE": $SofaType

public "toString"(): StringJS
public static "values"(): ($SofaType)[]
public static "valueOf"(name: StringJS): $SofaType
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
export type $SofaType$$Type = (("single") | ("left") | ("middle") | ("right") | ("inner_left") | ("inner_right") | ("outer_left") | ("outer_right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SofaType$$Original = $SofaType;}
declare module "com.starfish_studios.another_furniture.block.FlowerBoxBlock" {
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$HorizontalConnectionType} from "com.starfish_studios.another_furniture.block.properties.HorizontalConnectionType"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FlowerBoxBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($FlowerBoxBlock)>
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
static readonly "TYPE": $EnumProperty<($HorizontalConnectionType)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "codec"(): $MapCodec<($FlowerBoxBlock)>
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "canSurvive"(state: $BlockState$$Type, level: $LevelReader$$Type, pos: $BlockPos$$Type): boolean
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FlowerBoxBlock$$Type = ($FlowerBoxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FlowerBoxBlock$$Original = $FlowerBoxBlock;}
declare module "com.starfish_studios.another_furniture.block.SofaBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SeatBlock} from "com.starfish_studios.another_furniture.block.SeatBlock"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$SofaType} from "com.starfish_studios.another_furniture.block.properties.SofaType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SofaBlock extends $SeatBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "SINGLE": $VoxelShape
static readonly "SEAT_BACK_SINGLE": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "MIDDLE_SOUTH": $VoxelShape
static readonly "UPDATE_INVISIBLE": integer
static readonly "RIGHT_EAST": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static readonly "SEAT_BACK_MIDDLE": $VoxelShape
static readonly "SINGLE_SOUTH": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "SINGLE_WEST": $VoxelShape
static readonly "MIDDLE": $VoxelShape
static readonly "TYPE": $EnumProperty<($SofaType)>
static readonly "LEFT_EAST": $VoxelShape
static readonly "INNER": $VoxelShape
 "item": $Item
static readonly "LEG_FR": $VoxelShape
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LEFT": $VoxelShape
static readonly "LEG_BL": $VoxelShape
static readonly "SEAT_BACK_LEFT": $VoxelShape
static readonly "LEG_FL": $VoxelShape
static readonly "MIDDLE_WEST": $VoxelShape
static readonly "ARM_L": $VoxelShape
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "ARM_R": $VoxelShape
static readonly "OUTER_WEST": $VoxelShape
static readonly "INSTANT": float
static readonly "SINGLE_EAST": $VoxelShape
static readonly "LEFT_SOUTH": $VoxelShape
static readonly "RIGHT_SOUTH": $VoxelShape
static readonly "MIDDLE_EAST": $VoxelShape
static readonly "SEAT_BASE": $VoxelShape
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "INNER_SOUTH": $VoxelShape
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "SEAT_BACK_RIGHT": $VoxelShape
static readonly "LEFT_WEST": $VoxelShape
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "RIGHT": $VoxelShape
static readonly "OUTER": $VoxelShape
static readonly "INNER_EAST": $VoxelShape
static readonly "INNER_WEST": $VoxelShape
static readonly "LEG_BR": $VoxelShape
static readonly "UPDATE_IMMEDIATE": integer
static readonly "OUTER_SOUTH": $VoxelShape
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "RIGHT_WEST": $VoxelShape
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "OUTER_EAST": $VoxelShape
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public static "canConnect"(level: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): boolean
public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public static "isDifferentOrientation"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, dir: $Direction$$Type): boolean
public "primaryDismountLocation"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): $BlockPos
public "setRiderRotation"(state: $BlockState$$Type, entity: $Entity$$Type): float
public "seatHeight"(state: $BlockState$$Type): float
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public static "getConnection"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): $SofaType
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SofaBlock$$Type = ($SofaBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SofaBlock$$Original = $SofaBlock;}
declare module "com.starfish_studios.another_furniture.block.TableBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TableBlock extends $Block implements $SimpleWaterloggedBlock$$Interface {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE": $BooleanProperty
static readonly "LEG1": $BooleanProperty
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "LEG4": $BooleanProperty
static readonly "LEG3": $BooleanProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "LEG2": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "validConnection"(state: $BlockState$$Type): boolean
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getConnections"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type): $BlockState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TableBlock$$Type = ($TableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TableBlock$$Original = $TableBlock;}
declare module "com.starfish_studios.another_furniture.block.BenchBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SeatBlock} from "com.starfish_studios.another_furniture.block.SeatBlock"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$HammerableBlock$$Interface} from "com.starfish_studios.another_furniture.util.block.HammerableBlock"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$HorizontalConnectionType} from "com.starfish_studios.another_furniture.block.properties.HorizontalConnectionType"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $BenchBlock extends $SeatBlock implements $SimpleWaterloggedBlock$$Interface, $HammerableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "CONNECTION_TYPE": $EnumProperty<($HorizontalConnectionType)>
static readonly "BACK_TYPE": $EnumProperty<($HorizontalConnectionType)>
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
static readonly "BACK": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "primaryDismountLocation"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): $BlockPos
public "setRiderRotation"(state: $BlockState$$Type, entity: $Entity$$Type): float
public "seatHeight"(state: $BlockState$$Type): float
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "tryHammerBlock"(property: $Property$$Type<(never)>, stack: $ItemStack$$Type, state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "updateAfterCycle"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type): $BlockState
public "getUseSound"(): $SoundEvent
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
get "useSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BenchBlock$$Type = ($BenchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BenchBlock$$Original = $BenchBlock;}
declare module "com.starfish_studios.another_furniture.block.ShutterBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DoorHingeSide} from "net.minecraft.world.level.block.state.properties.DoorHingeSide"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$HammerableBlock$$Interface} from "com.starfish_studios.another_furniture.util.block.HammerableBlock"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$VerticalConnectionType} from "com.starfish_studios.another_furniture.block.properties.VerticalConnectionType"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $ShutterBlock extends $Block implements $SimpleWaterloggedBlock$$Interface, $HammerableBlock$$Interface {
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $IntegerProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "HINGE": $EnumProperty<($DoorHingeSide)>
static readonly "VERTICAL": $EnumProperty<($VerticalConnectionType)>
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OPEN": $BooleanProperty
static readonly "POWERED": $BooleanProperty
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(defaultVariant: integer, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "toggleShutters"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type): $InteractionResult
public "toggleShutters"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, open: boolean): void
public static "shutterSound"(open: boolean): $SoundEvent
public "isConnected"(state: $BlockState$$Type, other: $BlockState$$Type): boolean
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getType"(state: $BlockState$$Type, above: $BlockState$$Type, below: $BlockState$$Type): $VerticalConnectionType
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "tryHammerBlock"(property: $Property$$Type<(never)>, stack: $ItemStack$$Type, state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "updateAfterCycle"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type): $BlockState
public "getUseSound"(): $SoundEvent
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
get "useSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShutterBlock$$Type = ($ShutterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShutterBlock$$Original = $ShutterBlock;}
declare module "com.starfish_studios.another_furniture.block.TallStoolBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SeatBlock} from "com.starfish_studios.another_furniture.block.SeatBlock"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $TallStoolBlock extends $SeatBlock implements $SimpleWaterloggedBlock$$Interface {
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

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "seatHeight"(state: $BlockState$$Type): float
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "updateEntityAfterFallOn"(reader: $BlockGetter$$Type, entity: $Entity$$Type): void
public "fallOn"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, dmg: float): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TallStoolBlock$$Type = ($TallStoolBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TallStoolBlock$$Original = $TallStoolBlock;}
declare module "com.starfish_studios.another_furniture.block.ChairBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SeatBlock} from "com.starfish_studios.another_furniture.block.SeatBlock"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$TuckableBlock$$Interface} from "com.starfish_studios.another_furniture.util.block.TuckableBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$HammerableBlock$$Interface} from "com.starfish_studios.another_furniture.util.block.HammerableBlock"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $ChairBlock extends $SeatBlock implements $SimpleWaterloggedBlock$$Interface, $HammerableBlock$$Interface, $TuckableBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "VARIANT": $IntegerProperty
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

constructor(defaultBackVariant: integer, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "isSittable"(state: $BlockState$$Type): boolean
public "primaryDismountLocation"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): $BlockPos
public "setRiderRotation"(state: $BlockState$$Type, entity: $Entity$$Type): float
public "seatHeight"(state: $BlockState$$Type): float
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "tryHammerBlock"(property: $Property$$Type<(never)>, stack: $ItemStack$$Type, state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "updateAfterCycle"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type): $BlockState
public "getUseSound"(): $SoundEvent
public static "canTuckUnderBlockInfront"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): boolean
public static "tryTuck"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public static "isBlockedFromTucking"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): boolean
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
get "useSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChairBlock$$Type = ($ChairBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChairBlock$$Original = $ChairBlock;}
declare module "com.starfish_studios.another_furniture.block.ServiceBellBlock" {
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ServiceBellBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ServiceBellBlock)>
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
static readonly "WATERLOGGED": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(level: $Level$$Type, state: $BlockState$$Type, blockEntityType: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "tick"(state: $BlockState$$Type, level: $ServerLevel$$Type, pos: $BlockPos$$Type, random: $RandomSource$$Type): void
public "getShape"(state: $BlockState$$Type, blockGetter: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "codec"(): $MapCodec<($ServiceBellBlock)>
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "press"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): void
public "getDirectSignal"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): integer
public "isSignalSource"(state: $BlockState$$Type): boolean
public "getSignal"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): integer
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServiceBellBlock$$Type = ($ServiceBellBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServiceBellBlock$$Original = $ServiceBellBlock;}
declare module "com.starfish_studios.another_furniture.block.StoolBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SeatBlock} from "com.starfish_studios.another_furniture.block.SeatBlock"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$HammerableBlock$$Interface} from "com.starfish_studios.another_furniture.util.block.HammerableBlock"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export class $StoolBlock extends $SeatBlock implements $SimpleWaterloggedBlock$$Interface, $HammerableBlock$$Interface {
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
static readonly "LOW": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "seatHeight"(state: $BlockState$$Type): float
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "updateEntityAfterFallOn"(reader: $BlockGetter$$Type, entity: $Entity$$Type): void
public "fallOn"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type, dmg: float): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "tryHammerBlock"(property: $Property$$Type<(never)>, stack: $ItemStack$$Type, state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
public "updateAfterCycle"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type): $BlockState
public "getUseSound"(): $SoundEvent
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
get "useSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoolBlock$$Type = ($StoolBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoolBlock$$Original = $StoolBlock;}
declare module "com.starfish_studios.another_furniture.block.ShelfBlock" {
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$HorizontalConnectionType} from "com.starfish_studios.another_furniture.block.properties.HorizontalConnectionType"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ShelfBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($ShelfBlock)>
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
static readonly "TYPE": $EnumProperty<($HorizontalConnectionType)>

constructor(properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "useShapeForLightOcclusion"(state: $BlockState$$Type): boolean
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public "newBlockEntity"(pos: $BlockPos$$Type, state: $BlockState$$Type): $BlockEntity
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "rotate"(state: $BlockState$$Type, rotation: $Rotation$$Type): $BlockState
public "mirror"(state: $BlockState$$Type, mirror: $Mirror$$Type): $BlockState
public "codec"(): $MapCodec<($ShelfBlock)>
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getRenderShape"(state: $BlockState$$Type): $RenderShape
public "onRemove"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, newState: $BlockState$$Type, isMoving: boolean): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShelfBlock$$Type = ($ShelfBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShelfBlock$$Original = $ShelfBlock;}
declare module "com.starfish_studios.another_furniture.block.LampConnectorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$DyeColor, $DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $LampConnectorBlock extends $Block implements $SimpleWaterloggedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "POWERED": $BooleanProperty
static readonly "BASE": $BooleanProperty
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

constructor(color: $DyeColor$$Type, properties: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(context: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(state: $BlockState$$Type, direction: $Direction$$Type, neighborState: $BlockState$$Type, level: $LevelAccessor$$Type, currentPos: $BlockPos$$Type, neighborPos: $BlockPos$$Type): $BlockState
public static "getLampByColor"(color: $DyeColor$$Type): $Block
public "getShape"(state: $BlockState$$Type, level: $BlockGetter$$Type, pos: $BlockPos$$Type, context: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(state: $BlockState$$Type): $FluidState
public "getDescriptionId"(): StringJS
public "getColor"(): $DyeColor
public "neighborChanged"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, block: $Block$$Type, fromPos: $BlockPos$$Type, isMoving: boolean): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
get "color"(): $DyeColor
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LampConnectorBlock$$Type = ($LampConnectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LampConnectorBlock$$Original = $LampConnectorBlock;}
declare module "com.starfish_studios.another_furniture.block.properties.HorizontalConnectionType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $HorizontalConnectionType extends $Enum<($HorizontalConnectionType)> implements $StringRepresentable$$Interface {
static readonly "SINGLE": $HorizontalConnectionType
static readonly "LEFT": $HorizontalConnectionType
static readonly "RIGHT": $HorizontalConnectionType
static readonly "MIDDLE": $HorizontalConnectionType

public "toString"(): StringJS
public static "values"(): ($HorizontalConnectionType)[]
public static "valueOf"(name: StringJS): $HorizontalConnectionType
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
export type $HorizontalConnectionType$$Type = (("single") | ("left") | ("middle") | ("right"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HorizontalConnectionType$$Original = $HorizontalConnectionType;}
declare module "com.starfish_studios.another_furniture.block.SeatBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Optional} from "java.util.Optional"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$SeatEntity$$Type} from "com.starfish_studios.another_furniture.entity.SeatEntity"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SeatBlock extends $Block {
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

public "getAnalogOutputSignal"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): integer
public static "sitDown"(level: $Level$$Type, pos: $BlockPos$$Type, entity: $Entity$$Type): void
public static "canBePickedUp"(passenger: $Entity$$Type): boolean
public static "isSeatOccupied"(level: $Level$$Type, pos: $BlockPos$$Type): boolean
public "isSittable"(state: $BlockState$$Type): boolean
public "primaryDismountLocation"(level: $Level$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type): $BlockPos
public "setRiderRotation"(state: $BlockState$$Type, entity: $Entity$$Type): float
public static "isSeatBlocked"(level: $Level$$Type, pos: $BlockPos$$Type): boolean
public static "ejectSeatedExceptPlayer"(level: $Level$$Type, seatEntity: $SeatEntity$$Type): boolean
public static "getLeashed"(player: $Player$$Type): $Optional<($Entity)>
public "seatHeight"(state: $BlockState$$Type): float
public "hasAnalogOutputSignal"(state: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SeatBlock$$Type = ($SeatBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SeatBlock$$Original = $SeatBlock;}
