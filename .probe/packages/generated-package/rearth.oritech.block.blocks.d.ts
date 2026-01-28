declare module "rearth.oritech.block.blocks.accelerator.AcceleratorPassthroughBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AcceleratorPassthroughBlock extends $HorizontalDirectionalBlock {
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
public "wasExploded"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcceleratorPassthroughBlock$$Type = ($AcceleratorPassthroughBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AcceleratorPassthroughBlock$$Original = $AcceleratorPassthroughBlock;}
declare module "rearth.oritech.block.blocks.pipes.item.ItemPipeBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$GenericPipeBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TriFunction} from "org.apache.commons.lang3.function.TriFunction"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ItemPipeBlock extends $GenericPipeBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static "ITEM_PIPE_DATA": $HashMap<($ResourceLocation), ($GenericPipeInterfaceEntity$PipeNetworkData)>
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPipeBlock$$Type = ($ItemPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPipeBlock$$Original = $ItemPipeBlock;}
declare module "rearth.oritech.block.blocks.arcane.WitheredCropBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CropBlock} from "net.minecraft.world.level.block.CropBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WitheredCropBlock extends $CropBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CropBlock)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "MAX_AGE": integer
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
static readonly "AGE": $IntegerProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitheredCropBlock$$Type = ($WitheredCropBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WitheredCropBlock$$Original = $WitheredCropBlock;}
declare module "rearth.oritech.block.blocks.arcane.EnchantmentCatalystBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $EnchantmentCatalystBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentCatalystBlock$$Type = ($EnchantmentCatalystBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentCatalystBlock$$Original = $EnchantmentCatalystBlock;}
declare module "rearth.oritech.block.blocks.pipes.item.ItemPipeBlock$TransparentItemPipe" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemPipeBlock} from "rearth.oritech.block.blocks.pipes.item.ItemPipeBlock"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemPipeBlock$TransparentItemPipe extends $ItemPipeBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static "ITEM_PIPE_DATA": $HashMap<($ResourceLocation), ($GenericPipeInterfaceEntity$PipeNetworkData)>
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPipeBlock$TransparentItemPipe$$Type = ($ItemPipeBlock$TransparentItemPipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPipeBlock$TransparentItemPipe$$Original = $ItemPipeBlock$TransparentItemPipe;}
declare module "rearth.oritech.block.blocks.interaction.PipeBoosterBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $PipeBoosterBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
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
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PipeBoosterBlock$$Type = ($PipeBoosterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PipeBoosterBlock$$Original = $PipeBoosterBlock;}
declare module "rearth.oritech.block.blocks.pipes.energy.EnergyPipeDuctBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$GenericPipeDuctBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeDuctBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyPipeDuctBlock extends $GenericPipeDuctBlock {
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

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPipeDuctBlock$$Type = ($EnergyPipeDuctBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyPipeDuctBlock$$Original = $EnergyPipeDuctBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorControllerBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorControllerBlock extends $BaseReactorBlock implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "validForWalls"(): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorControllerBlock$$Type = ($ReactorControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorControllerBlock$$Original = $ReactorControllerBlock;}
declare module "rearth.oritech.block.blocks.pipes.energy.EnergyPipeConnectionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GenericPipeConnectionBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeConnectionBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Direction} from "net.minecraft.core.Direction"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TriFunction} from "org.apache.commons.lang3.function.TriFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyPipeConnectionBlock extends $GenericPipeConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public "isCompatibleTarget"(arg0: $Block$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPipeConnectionBlock$$Type = ($EnergyPipeConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyPipeConnectionBlock$$Original = $EnergyPipeConnectionBlock;}
declare module "rearth.oritech.block.blocks.pipes.GenericPipeBlock" {
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
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$AbstractPipeBlock} from "rearth.oritech.block.blocks.pipes.AbstractPipeBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Wrench$Wrenchable$$Interface} from "rearth.oritech.item.tools.Wrench$Wrenchable"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GenericPipeBlock extends $AbstractPipeBlock implements $Wrench$Wrenchable$$Interface, $SimpleWaterloggedBlock$$Interface {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public static "createShapes"(arg0: $VoxelShape$$Type, arg1: $VoxelShape$$Type, arg2: $VoxelShape$$Type, arg3: $VoxelShape$$Type, arg4: $VoxelShape$$Type, arg5: $VoxelShape$$Type, arg6: $VoxelShape$$Type): ($VoxelShape)[]
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "directionToProperty"(arg0: $Direction$$Type): $IntegerProperty
public "updateNeighbors"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "shouldConnect"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockPos$$Type, arg3: $Level$$Type, arg4: boolean): boolean
public "isConnectingInDirection"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockPos$$Type, arg3: $Level$$Type, arg4: boolean): boolean
public "getNorthProperty"(): $IntegerProperty
public "getEastProperty"(): $IntegerProperty
public "getSouthProperty"(): $IntegerProperty
public "getWestProperty"(): $IntegerProperty
public "getUpProperty"(): $IntegerProperty
public "getDownProperty"(): $IntegerProperty
public "addConnectionStates"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): $BlockState
public "addConnectionStates"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: boolean): $BlockState
public "onWrenchUse"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type): $InteractionResult
public "addStraightState"(arg0: $BlockState$$Type): $BlockState
public "onWrenchUseNeighbor"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type, arg5: $Direction$$Type, arg6: $Player$$Type, arg7: $InteractionHand$$Type): $InteractionResult
public "directionToPropertyValue"(arg0: $BlockState$$Type, arg1: $Direction$$Type): integer
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getPickupSound"(): $Optional<($SoundEvent)>
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "northProperty"(): $IntegerProperty
get "eastProperty"(): $IntegerProperty
get "southProperty"(): $IntegerProperty
get "westProperty"(): $IntegerProperty
get "upProperty"(): $IntegerProperty
get "downProperty"(): $IntegerProperty
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericPipeBlock$$Type = ($GenericPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericPipeBlock$$Original = $GenericPipeBlock;}
declare module "rearth.oritech.block.blocks.decorative.TechDoorBlockHinge" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TechDoorBlockHinge extends $HorizontalDirectionalBlock {
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

public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TechDoorBlockHinge$$Type = ($TechDoorBlockHinge);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TechDoorBlockHinge$$Original = $TechDoorBlockHinge;}
declare module "rearth.oritech.block.blocks.reactor.ReactorAbsorberPortBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorAbsorberPortBlock extends $BaseReactorBlock implements $EntityBlock$$Interface {
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

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "validForWalls"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorAbsorberPortBlock$$Type = ($ReactorAbsorberPortBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorAbsorberPortBlock$$Original = $ReactorAbsorberPortBlock;}
declare module "rearth.oritech.block.blocks.generators.SteamEngineBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SteamEngineBlock extends $MultiblockMachine {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getBlockEntityType"(): $Class<($BlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamEngineBlock$$Type = ($SteamEngineBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SteamEngineBlock$$Original = $SteamEngineBlock;}
declare module "rearth.oritech.block.blocks.addons.RedstoneAddonBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$MachineAddonBlock} from "rearth.oritech.block.blocks.addons.MachineAddonBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MachineAddonBlock$AddonSettings$$Type} from "rearth.oritech.block.blocks.addons.MachineAddonBlock$AddonSettings"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RedstoneAddonBlock extends $MachineAddonBlock {
static "MACHINE_CAPACITOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_SILK_TOUCH_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_BURST_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "ADDON_USED": $BooleanProperty
static readonly "USE_ACCURATE_OUTLINES": boolean
static "MACHINE_EFFICIENCY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_COMBI_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static "MACHINE_PROCESSING_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "MACHINE_REDSTONE_ADDON_SHAPE": (($VoxelShape)[])[]
static "STEAM_BOILER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "MACHINE_INVENTORY_PROXY_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "QUARRY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_YIELD_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_HUNTER_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_ACCEPTOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_FLUID_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static "MACHINE_SPEED_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "CROP_FILTER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static "MACHINE_ULTIMATE_ADDON_SHAPE": (($VoxelShape)[])[]

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $MachineAddonBlock$AddonSettings$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getBlockEntityType"(): $Class<($BlockEntity)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneAddonBlock$$Type = ($RedstoneAddonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneAddonBlock$$Original = $RedstoneAddonBlock;}
declare module "rearth.oritech.block.blocks.pipes.item.ItemPipeConnectionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ExtractablePipeConnectionBlock} from "rearth.oritech.block.blocks.pipes.ExtractablePipeConnectionBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Direction} from "net.minecraft.core.Direction"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TriFunction} from "org.apache.commons.lang3.function.TriFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemPipeConnectionBlock extends $ExtractablePipeConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static "HAS_MOTOR": $BooleanProperty
static readonly "EXTRACT": integer
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPipeConnectionBlock$$Type = ($ItemPipeConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPipeConnectionBlock$$Original = $ItemPipeConnectionBlock;}
declare module "rearth.oritech.block.blocks.decorative.MetalBeamBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MetalBeamBlock extends $Block {
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
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalBeamBlock$$Type = ($MetalBeamBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetalBeamBlock$$Original = $MetalBeamBlock;}
declare module "rearth.oritech.block.blocks.pipes.fluid.FluidPipeConnectionBlock$FramedFluidPipeConnectionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$FluidPipeConnectionBlock} from "rearth.oritech.block.blocks.pipes.fluid.FluidPipeConnectionBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPipeConnectionBlock$FramedFluidPipeConnectionBlock extends $FluidPipeConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "EXTRACT": integer
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeConnectionBlock$FramedFluidPipeConnectionBlock$$Type = ($FluidPipeConnectionBlock$FramedFluidPipeConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPipeConnectionBlock$FramedFluidPipeConnectionBlock$$Original = $FluidPipeConnectionBlock$FramedFluidPipeConnectionBlock;}
declare module "rearth.oritech.block.blocks.interaction.LaserArmBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$LaserArmEntityBehavior, $LaserArmEntityBehavior$$Type} from "rearth.oritech.block.behavior.LaserArmEntityBehavior"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$LaserArmBlockBehavior, $LaserArmBlockBehavior$$Type} from "rearth.oritech.block.behavior.LaserArmBlockBehavior"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Map} from "java.util.Map"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $LaserArmBlock extends $Block implements $EntityBlock$$Interface {
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
static readonly "BLOCK_BEHAVIORS": $Map<($Block), ($LaserArmBlockBehavior)>
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "ENTITY_BEHAVIORS": $Map<($EntityType<(never)>), ($LaserArmEntityBehavior)>

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "getBehaviorForBlock"(arg0: $Block$$Type): $LaserArmBlockBehavior
public static "getBehaviorForEntity"(arg0: $EntityType$$Type<(never)>): $LaserArmEntityBehavior
public static "registerEntityBehavior"(arg0: $EntityType$$Type<(never)>, arg1: $LaserArmEntityBehavior$$Type): void
public static "registerBlockBehavior"(arg0: $Block$$Type, arg1: $LaserArmBlockBehavior$$Type): void
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserArmBlock$$Type = ($LaserArmBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LaserArmBlock$$Original = $LaserArmBlock;}
declare module "rearth.oritech.block.blocks.augmenter.AugmentApplicationBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Tuple} from "net.minecraft.util.Tuple"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AugmentApplicationBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "lastTeleportedPlayer": $Tuple<(long), ($Player)>
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentApplicationBlock$$Type = ($AugmentApplicationBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AugmentApplicationBlock$$Original = $AugmentApplicationBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorAbsorberBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorAbsorberBlock extends $BaseReactorBlock {
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

public "requiredStackCeiling"(): $Block
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorAbsorberBlock$$Type = ($ReactorAbsorberBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorAbsorberBlock$$Original = $ReactorAbsorberBlock;}
declare module "rearth.oritech.block.blocks.interaction.PlacerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FrameInteractionBlock} from "rearth.oritech.block.base.block.FrameInteractionBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlacerBlock extends $FrameInteractionBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "HAS_FRAME": $BooleanProperty
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
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlacerBlock$$Type = ($PlacerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlacerBlock$$Original = $PlacerBlock;}
declare module "rearth.oritech.block.blocks.pipes.item.ItemFilterBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ItemFilterBlock extends $Block implements $EntityBlock$$Interface {
static readonly "TARGET_DIR": $DirectionProperty
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilterBlock$$Type = ($ItemFilterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFilterBlock$$Original = $ItemFilterBlock;}
declare module "rearth.oritech.block.blocks.addons.InventoryProxyAddonBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$MachineAddonBlock} from "rearth.oritech.block.blocks.addons.MachineAddonBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MachineAddonBlock$AddonSettings$$Type} from "rearth.oritech.block.blocks.addons.MachineAddonBlock$AddonSettings"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InventoryProxyAddonBlock extends $MachineAddonBlock {
static "MACHINE_CAPACITOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_SILK_TOUCH_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_BURST_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "ADDON_USED": $BooleanProperty
static readonly "USE_ACCURATE_OUTLINES": boolean
static "MACHINE_EFFICIENCY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_COMBI_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static "MACHINE_PROCESSING_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "MACHINE_REDSTONE_ADDON_SHAPE": (($VoxelShape)[])[]
static "STEAM_BOILER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "MACHINE_INVENTORY_PROXY_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "QUARRY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_YIELD_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_HUNTER_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_ACCEPTOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_FLUID_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static "MACHINE_SPEED_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "CROP_FILTER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static "MACHINE_ULTIMATE_ADDON_SHAPE": (($VoxelShape)[])[]

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $MachineAddonBlock$AddonSettings$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "getBlockEntityType"(): $Class<($BlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryProxyAddonBlock$$Type = ($InventoryProxyAddonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryProxyAddonBlock$$Original = $InventoryProxyAddonBlock;}
declare module "rearth.oritech.block.blocks.interaction.FertilizerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FrameInteractionBlock} from "rearth.oritech.block.base.block.FrameInteractionBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FertilizerBlock extends $FrameInteractionBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "HAS_FRAME": $BooleanProperty
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
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizerBlock$$Type = ($FertilizerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FertilizerBlock$$Original = $FertilizerBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorFuelPortBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorFuelPortBlock extends $BaseReactorBlock implements $EntityBlock$$Interface {
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

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "validForWalls"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorFuelPortBlock$$Type = ($ReactorFuelPortBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorFuelPortBlock$$Original = $ReactorFuelPortBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorHeatPipeBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorHeatPipeBlock extends $BaseReactorBlock {
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
export type $ReactorHeatPipeBlock$$Type = ($ReactorHeatPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorHeatPipeBlock$$Original = $ReactorHeatPipeBlock;}
declare module "rearth.oritech.block.blocks.storage.SmallFluidTank" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SmallFluidTank extends $Block implements $EntityBlock$$Interface {
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "getBasePickStack"(arg0: boolean): $ItemStack
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallFluidTank$$Type = ($SmallFluidTank);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallFluidTank$$Original = $SmallFluidTank;}
declare module "rearth.oritech.block.blocks.decorative.TechDoorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TechDoorBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "CLOSED_SHAPE_EAST": $VoxelShape
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "CLOSED_SHAPE_SOUTH": $VoxelShape
static readonly "UPDATE_INVISIBLE": integer
static readonly "CLOSED_SHAPE_WEST": $VoxelShape
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
static readonly "OPENED": $BooleanProperty
static readonly "CLOSED_SHAPE_NORTH": $VoxelShape

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "getClosedShape"(arg0: $Direction$$Type): $VoxelShape
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TechDoorBlock$$Type = ($TechDoorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TechDoorBlock$$Original = $TechDoorBlock;}
declare module "rearth.oritech.block.blocks.reactor.BaseReactorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BaseReactorBlock extends $Block {
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

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "validForWalls"(): boolean
public "requiredStackCeiling"(): $Block
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseReactorBlock$$Type = ($BaseReactorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseReactorBlock$$Original = $BaseReactorBlock;}
declare module "rearth.oritech.block.blocks.pipes.item.ItemPipeConnectionBlock$TransparentItemPipeConnectionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ItemPipeConnectionBlock} from "rearth.oritech.block.blocks.pipes.item.ItemPipeConnectionBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemPipeConnectionBlock$TransparentItemPipeConnectionBlock extends $ItemPipeConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static "HAS_MOTOR": $BooleanProperty
static readonly "EXTRACT": integer
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPipeConnectionBlock$TransparentItemPipeConnectionBlock$$Type = ($ItemPipeConnectionBlock$TransparentItemPipeConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPipeConnectionBlock$TransparentItemPipeConnectionBlock$$Original = $ItemPipeConnectionBlock$TransparentItemPipeConnectionBlock;}
declare module "rearth.oritech.block.blocks.addons.MachineAddonBlock$AddonSettings" {
import {$VoxelShape, $VoxelShape$$Type} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Record} from "java.lang.Record"

export class $MachineAddonBlock$AddonSettings extends $Record {
constructor(extender: boolean, speedMultiplier: float, efficiencyMultiplier: float, addedCapacity: long, addedInsert: long, acceptEnergy: boolean, needsSupport: boolean, chamberCount: integer, burstTicks: integer, boundingShape: (($VoxelShape$$Type)[])[])

public "extender"(): boolean
public "speedMultiplier"(): float
public "burstTicks"(): integer
public "efficiencyMultiplier"(): float
public "addedCapacity"(): long
public "addedInsert"(): long
public "chamberCount"(): integer
public "needsSupport"(): boolean
public "boundingShape"(): (($VoxelShape)[])[]
public "acceptEnergy"(): boolean
public static "getDefaultSettings"(): $MachineAddonBlock$AddonSettings
public "withSpeedMultiplier"(arg0: float): $MachineAddonBlock$AddonSettings
public "withEfficiencyMultiplier"(arg0: float): $MachineAddonBlock$AddonSettings
public "withBoundingShape"(arg0: (($VoxelShape$$Type)[])[]): $MachineAddonBlock$AddonSettings
public "withChambers"(arg0: integer): $MachineAddonBlock$AddonSettings
public "withAddedCapacity"(arg0: long): $MachineAddonBlock$AddonSettings
public "withAddedInsert"(arg0: long): $MachineAddonBlock$AddonSettings
public "withAcceptEnergy"(arg0: boolean): $MachineAddonBlock$AddonSettings
public "withExtender"(arg0: boolean): $MachineAddonBlock$AddonSettings
public "withNeedsSupport"(arg0: boolean): $MachineAddonBlock$AddonSettings
public "withBurstTicks"(arg0: integer): $MachineAddonBlock$AddonSettings
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static get "defaultSettings"(): $MachineAddonBlock$AddonSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAddonBlock$AddonSettings$$Type = ({"burstTicks"?: integer, "speedMultiplier"?: float, "addedInsert"?: long, "needsSupport"?: boolean, "efficiencyMultiplier"?: float, "acceptEnergy"?: boolean, "addedCapacity"?: long, "boundingShape"?: (($VoxelShape$$Type)[])[], "chamberCount"?: integer, "extender"?: boolean}) | ([burstTicks?: integer, speedMultiplier?: float, addedInsert?: long, needsSupport?: boolean, efficiencyMultiplier?: float, acceptEnergy?: boolean, addedCapacity?: long, boundingShape?: (($VoxelShape$$Type)[])[], chamberCount?: integer, extender?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineAddonBlock$AddonSettings$$Original = $MachineAddonBlock$AddonSettings;}
declare module "rearth.oritech.block.blocks.pipes.energy.EnergyPipeBlock$FramedEnergyPipeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$EnergyPipeBlock} from "rearth.oritech.block.blocks.pipes.energy.EnergyPipeBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyPipeBlock$FramedEnergyPipeBlock extends $EnergyPipeBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static "ENERGY_PIPE_DATA": $HashMap<($ResourceLocation), ($GenericPipeInterfaceEntity$PipeNetworkData)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPipeBlock$FramedEnergyPipeBlock$$Type = ($EnergyPipeBlock$FramedEnergyPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyPipeBlock$FramedEnergyPipeBlock$$Original = $EnergyPipeBlock$FramedEnergyPipeBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorRedstonePortBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorRedstonePortBlock extends $BaseReactorBlock {
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
static readonly "PORT_MODE": $IntegerProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "validForWalls"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorRedstonePortBlock$$Type = ($ReactorRedstonePortBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorRedstonePortBlock$$Original = $ReactorRedstonePortBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorEnergyPortBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $ReactorEnergyPortBlock extends $BaseReactorBlock implements $EntityBlock$$Interface {
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
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "validForWalls"(): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorEnergyPortBlock$$Type = ($ReactorEnergyPortBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorEnergyPortBlock$$Original = $ReactorEnergyPortBlock;}
declare module "rearth.oritech.block.blocks.pipes.ExtractablePipeConnectionBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GenericPipeConnectionBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeConnectionBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ExtractablePipeConnectionBlock extends $GenericPipeConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "EXTRACT": integer
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "isExtractable"(arg0: $BlockState$$Type): boolean
public "isSideExtractable"(arg0: $BlockState$$Type, arg1: $Direction$$Type): boolean
public "getNorthProperty"(): $IntegerProperty
public "getEastProperty"(): $IntegerProperty
public "getSouthProperty"(): $IntegerProperty
public "getWestProperty"(): $IntegerProperty
public "getUpProperty"(): $IntegerProperty
public "getDownProperty"(): $IntegerProperty
public "addConnectionStates"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): $BlockState
public "addConnectionStates"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: boolean): $BlockState
public "hasExtractingSide"(arg0: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "northProperty"(): $IntegerProperty
get "eastProperty"(): $IntegerProperty
get "southProperty"(): $IntegerProperty
get "westProperty"(): $IntegerProperty
get "upProperty"(): $IntegerProperty
get "downProperty"(): $IntegerProperty
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExtractablePipeConnectionBlock$$Type = ($ExtractablePipeConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExtractablePipeConnectionBlock$$Original = $ExtractablePipeConnectionBlock;}
declare module "rearth.oritech.block.blocks.pipes.fluid.FluidPipeBlock$FramedFluidPipeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$FluidPipeBlock} from "rearth.oritech.block.blocks.pipes.fluid.FluidPipeBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPipeBlock$FramedFluidPipeBlock extends $FluidPipeBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static "FLUID_PIPE_DATA": $HashMap<($ResourceLocation), ($GenericPipeInterfaceEntity$PipeNetworkData)>
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeBlock$FramedFluidPipeBlock$$Type = ($FluidPipeBlock$FramedFluidPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPipeBlock$FramedFluidPipeBlock$$Original = $FluidPipeBlock$FramedFluidPipeBlock;}
declare module "rearth.oritech.block.blocks.processing.AtomicForgeBlock" {
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
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AtomicForgeBlock extends $MultiblockMachine implements $EntityBlock$$Interface {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AtomicForgeBlock$$Type = ($AtomicForgeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AtomicForgeBlock$$Original = $AtomicForgeBlock;}
declare module "rearth.oritech.block.blocks.pipes.energy.SuperConductorConnectionBlock$FramedSuperConductorConnectionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$SuperConductorConnectionBlock} from "rearth.oritech.block.blocks.pipes.energy.SuperConductorConnectionBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SuperConductorConnectionBlock$FramedSuperConductorConnectionBlock extends $SuperConductorConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperConductorConnectionBlock$FramedSuperConductorConnectionBlock$$Type = ($SuperConductorConnectionBlock$FramedSuperConductorConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuperConductorConnectionBlock$FramedSuperConductorConnectionBlock$$Original = $SuperConductorConnectionBlock$FramedSuperConductorConnectionBlock;}
declare module "rearth.oritech.block.blocks.storage.SmallStorageBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SmallStorageBlock extends $Block implements $EntityBlock$$Interface {
static readonly "TARGET_DIR": $DirectionProperty
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmallStorageBlock$$Type = ($SmallStorageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmallStorageBlock$$Original = $SmallStorageBlock;}
declare module "rearth.oritech.block.blocks.pipes.GenericPipeConnectionBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$GenericPipeBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $GenericPipeConnectionBlock extends $GenericPipeBlock implements $EntityBlock$$Interface {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericPipeConnectionBlock$$Type = ($GenericPipeConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericPipeConnectionBlock$$Original = $GenericPipeConnectionBlock;}
declare module "rearth.oritech.block.blocks.processing.PoweredFurnaceBlock" {
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
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PoweredFurnaceBlock extends $MultiblockMachine implements $EntityBlock$$Interface {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredFurnaceBlock$$Type = ($PoweredFurnaceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoweredFurnaceBlock$$Original = $PoweredFurnaceBlock;}
declare module "rearth.oritech.block.blocks.arcane.EnchanterBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $EnchanterBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchanterBlock$$Type = ($EnchanterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchanterBlock$$Original = $EnchanterBlock;}
declare module "rearth.oritech.block.blocks.addons.CombiAddonBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MachineAddonBlock} from "rearth.oritech.block.blocks.addons.MachineAddonBlock"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ArrayList} from "java.util.ArrayList"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$ShrinkerBlockEntity$ShrunkAddonData$$Type} from "rearth.oritech.block.entity.interaction.ShrinkerBlockEntity$ShrunkAddonData"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MachineAddonBlock$AddonSettings$$Type} from "rearth.oritech.block.blocks.addons.MachineAddonBlock$AddonSettings"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CombiAddonBlock extends $MachineAddonBlock {
static "MACHINE_CAPACITOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_SILK_TOUCH_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_BURST_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "ADDON_USED": $BooleanProperty
static readonly "USE_ACCURATE_OUTLINES": boolean
static "MACHINE_EFFICIENCY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_COMBI_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static "MACHINE_PROCESSING_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "MACHINE_REDSTONE_ADDON_SHAPE": (($VoxelShape)[])[]
static "STEAM_BOILER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "MACHINE_INVENTORY_PROXY_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "QUARRY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_YIELD_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_HUNTER_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_ACCEPTOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_FLUID_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static "MACHINE_SPEED_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "CROP_FILTER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static "MACHINE_ULTIMATE_ADDON_SHAPE": (($VoxelShape)[])[]

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $MachineAddonBlock$AddonSettings$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getBlockEntityType"(): $Class<($BlockEntity)>
public static "getShrinkTooltip"(arg0: $ShrinkerBlockEntity$ShrunkAddonData$$Type): $ArrayList<($Component)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CombiAddonBlock$$Type = ($CombiAddonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CombiAddonBlock$$Original = $CombiAddonBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorHeatVentBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorHeatVentBlock extends $BaseReactorBlock {
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

public "validForWalls"(): boolean
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
declare module "rearth.oritech.block.blocks.storage.CreativeStorageBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CreativeStorageBlock extends $Block implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeStorageBlock$$Type = ($CreativeStorageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeStorageBlock$$Original = $CreativeStorageBlock;}
declare module "rearth.oritech.block.blocks.storage.CreativeFluidTank" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$SmallFluidTank} from "rearth.oritech.block.blocks.storage.SmallFluidTank"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CreativeFluidTank extends $SmallFluidTank {
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
static readonly "LIT": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeFluidTank$$Type = ($CreativeFluidTank);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeFluidTank$$Original = $CreativeFluidTank;}
declare module "rearth.oritech.block.blocks.decorative.TechLever" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LeverBlock} from "net.minecraft.world.level.block.LeverBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TechLever extends $LeverBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TechLever$$Type = ($TechLever);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TechLever$$Original = $TechLever;}
declare module "rearth.oritech.block.blocks.arcane.SpawnerControllerBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $SpawnerControllerBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
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

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "stepOn"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Entity$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerControllerBlock$$Type = ($SpawnerControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerControllerBlock$$Original = $SpawnerControllerBlock;}
declare module "rearth.oritech.block.blocks.processing.CoolerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $CoolerBlock extends $MultiblockMachine implements $EntityBlock$$Interface {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getBlockEntityType"(): $Class<($BlockEntity)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CoolerBlock$$Type = ($CoolerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CoolerBlock$$Original = $CoolerBlock;}
declare module "rearth.oritech.block.blocks.pipes.fluid.FluidPipeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GenericPipeBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Direction} from "net.minecraft.core.Direction"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TriFunction} from "org.apache.commons.lang3.function.TriFunction"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPipeBlock extends $GenericPipeBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static "FLUID_PIPE_DATA": $HashMap<($ResourceLocation), ($GenericPipeInterfaceEntity$PipeNetworkData)>
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
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
declare module "rearth.oritech.block.blocks.interaction.PumpBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PumpBlock extends $Block implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PumpBlock$$Type = ($PumpBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PumpBlock$$Original = $PumpBlock;}
declare module "rearth.oritech.block.blocks.processing.RefineryBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RefineryBlock extends $MultiblockMachine implements $EntityBlock$$Interface {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getBlockEntityType"(): $Class<($BlockEntity)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryBlock$$Type = ($RefineryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefineryBlock$$Original = $RefineryBlock;}
declare module "rearth.oritech.block.blocks.arcane.SpawnerCageBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SpawnerCageBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
static "DOWN": $BooleanProperty
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static "UP": $BooleanProperty
static "SOUTH": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static "EAST": $BooleanProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpawnerCageBlock$$Type = ($SpawnerCageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpawnerCageBlock$$Original = $SpawnerCageBlock;}
declare module "rearth.oritech.block.blocks.accelerator.BlackHoleBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlackHoleBlock extends $Block implements $EntityBlock$$Interface {
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

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlackHoleBlock$$Type = ($BlackHoleBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlackHoleBlock$$Original = $BlackHoleBlock;}
declare module "rearth.oritech.block.blocks.processing.RefineryModuleBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RefineryModuleBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryModuleBlock$$Type = ($RefineryModuleBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefineryModuleBlock$$Original = $RefineryModuleBlock;}
declare module "rearth.oritech.block.blocks.pipes.energy.SuperConductorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$GenericPipeBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TriFunction} from "org.apache.commons.lang3.function.TriFunction"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $SuperConductorBlock extends $GenericPipeBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static "SUPERCONDUCTOR_DATA": $HashMap<($ResourceLocation), ($GenericPipeInterfaceEntity$PipeNetworkData)>
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public "isCompatibleTarget"(arg0: $Block$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperConductorBlock$$Type = ($SuperConductorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuperConductorBlock$$Original = $SuperConductorBlock;}
declare module "rearth.oritech.block.blocks.reactor.NukeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Explosion$$Type} from "net.minecraft.world.level.Explosion"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $NukeBlock extends $Block {
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

public "wasExploded"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Explosion$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NukeBlock$$Type = ($NukeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NukeBlock$$Original = $NukeBlock;}
declare module "rearth.oritech.block.blocks.pipes.item.ItemPipeDuctBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$GenericPipeDuctBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeDuctBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemPipeDuctBlock extends $GenericPipeDuctBlock {
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

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPipeDuctBlock$$Type = ($ItemPipeDuctBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPipeDuctBlock$$Original = $ItemPipeDuctBlock;}
declare module "rearth.oritech.block.blocks.processing.FragmentForge" {
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
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FragmentForge extends $MultiblockMachine implements $EntityBlock$$Interface {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FragmentForge$$Type = ($FragmentForge);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FragmentForge$$Original = $FragmentForge;}
declare module "rearth.oritech.block.blocks.interaction.ChargerBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ChargerBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChargerBlock$$Type = ($ChargerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChargerBlock$$Original = $ChargerBlock;}
declare module "rearth.oritech.block.blocks.interaction.DronePortBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $DronePortBlock extends $Block implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DronePortBlock$$Type = ($DronePortBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DronePortBlock$$Original = $DronePortBlock;}
declare module "rearth.oritech.block.blocks.augmenter.AugmentResearchStationBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AugmentResearchStationBlock extends $DirectionalBlock implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AugmentResearchStationBlock$$Type = ($AugmentResearchStationBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AugmentResearchStationBlock$$Original = $AugmentResearchStationBlock;}
declare module "rearth.oritech.block.blocks.addons.MachineAddonBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FaceAttachedHorizontalDirectionalBlock} from "net.minecraft.world.level.block.FaceAttachedHorizontalDirectionalBlock"
import {$List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$MachineAddonBlock$AddonSettings, $MachineAddonBlock$AddonSettings$$Type} from "rearth.oritech.block.blocks.addons.MachineAddonBlock$AddonSettings"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $MachineAddonBlock extends $FaceAttachedHorizontalDirectionalBlock implements $EntityBlock$$Interface {
static "MACHINE_CAPACITOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_SILK_TOUCH_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_BURST_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "ADDON_USED": $BooleanProperty
static readonly "USE_ACCURATE_OUTLINES": boolean
static "MACHINE_EFFICIENCY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_COMBI_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static "MACHINE_PROCESSING_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "MACHINE_REDSTONE_ADDON_SHAPE": (($VoxelShape)[])[]
static "STEAM_BOILER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "MACHINE_INVENTORY_PROXY_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "QUARRY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_YIELD_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_HUNTER_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_ACCEPTOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_FLUID_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static "MACHINE_SPEED_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "CROP_FILTER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static "MACHINE_ULTIMATE_ADDON_SHAPE": (($VoxelShape)[])[]

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $MachineAddonBlock$AddonSettings$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityType"(): $Class<($BlockEntity)>
public "getAddonSettings"(): $MachineAddonBlock$AddonSettings
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
get "addonSettings"(): $MachineAddonBlock$AddonSettings
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAddonBlock$$Type = ($MachineAddonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineAddonBlock$$Original = $MachineAddonBlock;}
declare module "rearth.oritech.block.blocks.pipes.item.ItemPipeConnectionBlock$FramedItemPipeConnectionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemPipeConnectionBlock} from "rearth.oritech.block.blocks.pipes.item.ItemPipeConnectionBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemPipeConnectionBlock$FramedItemPipeConnectionBlock extends $ItemPipeConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static "HAS_MOTOR": $BooleanProperty
static readonly "EXTRACT": integer
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPipeConnectionBlock$FramedItemPipeConnectionBlock$$Type = ($ItemPipeConnectionBlock$FramedItemPipeConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPipeConnectionBlock$FramedItemPipeConnectionBlock$$Original = $ItemPipeConnectionBlock$FramedItemPipeConnectionBlock;}
declare module "rearth.oritech.block.blocks.accelerator.AcceleratorRingBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AcceleratorPassthroughBlock} from "rearth.oritech.block.blocks.accelerator.AcceleratorPassthroughBlock"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AcceleratorRingBlock extends $AcceleratorPassthroughBlock {
static readonly "REDSTONE_STATE": $IntegerProperty
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
static readonly "BENT": $IntegerProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcceleratorRingBlock$$Type = ($AcceleratorRingBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AcceleratorRingBlock$$Original = $AcceleratorRingBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorWallBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorWallBlock extends $BaseReactorBlock {
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

public "validForWalls"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReactorWallBlock$$Type = ($ReactorWallBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorWallBlock$$Original = $ReactorWallBlock;}
declare module "rearth.oritech.block.blocks.accelerator.AcceleratorMotorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AcceleratorPassthroughBlock} from "rearth.oritech.block.blocks.accelerator.AcceleratorPassthroughBlock"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AcceleratorMotorBlock extends $AcceleratorPassthroughBlock implements $EntityBlock$$Interface {
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

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcceleratorMotorBlock$$Type = ($AcceleratorMotorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AcceleratorMotorBlock$$Original = $AcceleratorMotorBlock;}
declare module "rearth.oritech.block.blocks.pipes.AbstractPipeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TriFunction, $TriFunction$$Type} from "org.apache.commons.lang3.function.TriFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractPipeBlock extends $Block {
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
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateNeighbors"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "shouldConnect"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockPos$$Type, arg3: $Level$$Type, arg4: boolean): boolean
public "isConnectingInDirection"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockPos$$Type, arg3: $Level$$Type, arg4: boolean): boolean
public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "hasMachineInDirection"(arg0: $Direction$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $TriFunction$$Type<($Level), ($BlockPos), ($Direction), (boolean)>): boolean
public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public "hasNeighboringMachine"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: boolean): boolean
public "addConnectionStates"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): $BlockState
public "addConnectionStates"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: boolean): $BlockState
public "isValidConnectionTarget"(arg0: $Block$$Type, arg1: $Level$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type): boolean
public "addStraightState"(arg0: $BlockState$$Type): $BlockState
public "addFluidState"(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $Level$$Type): $BlockState
public "isValidInterfaceTarget"(arg0: $Block$$Type, arg1: $Level$$Type, arg2: $Direction$$Type, arg3: $BlockPos$$Type): boolean
public "isCompatibleTarget"(arg0: $Block$$Type): boolean
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractPipeBlock$$Type = ($AbstractPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractPipeBlock$$Original = $AbstractPipeBlock;}
declare module "rearth.oritech.block.blocks.processing.MachineCoreBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $MachineCoreBlock extends $Block implements $EntityBlock$$Interface {
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
static readonly "USED": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: float)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "getControllerPos"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): $BlockPos
public "getCoreQuality"(): float
public static "getControllerEntity"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type): $BlockEntity
public "destroy"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): void
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "coreQuality"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineCoreBlock$$Type = ($MachineCoreBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineCoreBlock$$Original = $MachineCoreBlock;}
declare module "rearth.oritech.block.blocks.generators.LavaGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $LavaGeneratorBlock extends $MultiblockMachine {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LavaGeneratorBlock$$Type = ($LavaGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LavaGeneratorBlock$$Original = $LavaGeneratorBlock;}
declare module "rearth.oritech.block.blocks.interaction.MachineFrameBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MachineFrameBlock extends $Block {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "DOWN": $BooleanProperty
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "WEST": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "NORTH": $BooleanProperty
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "SOUTH": $BooleanProperty
static readonly "UP": $BooleanProperty
static readonly "UPDATE_CLIENTS": integer
static readonly "EAST": $BooleanProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFrameBlock$$Type = ($MachineFrameBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineFrameBlock$$Original = $MachineFrameBlock;}
declare module "rearth.oritech.block.blocks.pipes.item.ItemPipeBlock$FramedItemPipeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemPipeBlock} from "rearth.oritech.block.blocks.pipes.item.ItemPipeBlock"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemPipeBlock$FramedItemPipeBlock extends $ItemPipeBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static "ITEM_PIPE_DATA": $HashMap<($ResourceLocation), ($GenericPipeInterfaceEntity$PipeNetworkData)>
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPipeBlock$FramedItemPipeBlock$$Type = ($ItemPipeBlock$FramedItemPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPipeBlock$FramedItemPipeBlock$$Original = $ItemPipeBlock$FramedItemPipeBlock;}
declare module "rearth.oritech.block.blocks.pipes.fluid.FluidPipeConnectionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ExtractablePipeConnectionBlock} from "rearth.oritech.block.blocks.pipes.ExtractablePipeConnectionBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Direction} from "net.minecraft.core.Direction"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TriFunction} from "org.apache.commons.lang3.function.TriFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPipeConnectionBlock extends $ExtractablePipeConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "EXTRACT": integer
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeConnectionBlock$$Type = ($FluidPipeConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPipeConnectionBlock$$Original = $FluidPipeConnectionBlock;}
declare module "rearth.oritech.block.blocks.decorative.WallMountedLight" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$FaceAttachedHorizontalDirectionalBlock} from "net.minecraft.world.level.block.FaceAttachedHorizontalDirectionalBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WallMountedLight extends $FaceAttachedHorizontalDirectionalBlock {
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
static readonly "FACE": $EnumProperty<($AttachFace)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: integer)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WallMountedLight$$Type = ($WallMountedLight);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WallMountedLight$$Original = $WallMountedLight;}
declare module "rearth.oritech.block.blocks.processing.PulverizerBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$UpgradableMachineBlock} from "rearth.oritech.block.base.block.UpgradableMachineBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PulverizerBlock extends $UpgradableMachineBlock implements $EntityBlock$$Interface {
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

public "getBlockEntityType"(): $Class<($BlockEntity)>
public "stepOn"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Entity$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PulverizerBlock$$Type = ($PulverizerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PulverizerBlock$$Original = $PulverizerBlock;}
declare module "rearth.oritech.block.blocks.interaction.DeepDrillBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $DeepDrillBlock extends $Block implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeepDrillBlock$$Type = ($DeepDrillBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeepDrillBlock$$Original = $DeepDrillBlock;}
declare module "rearth.oritech.block.blocks.generators.BasicGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$UpgradableMachineBlock} from "rearth.oritech.block.base.block.UpgradableMachineBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BasicGeneratorBlock extends $UpgradableMachineBlock {
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

public "getBlockEntityType"(): $Class<($BlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicGeneratorBlock$$Type = ($BasicGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicGeneratorBlock$$Original = $BasicGeneratorBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorRodBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorRodBlock extends $BaseReactorBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: integer, arg2: integer)

public "getRodCount"(): integer
public "getInternalPulseCount"(): integer
public "requiredStackCeiling"(): $Block
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rodCount"(): integer
get "internalPulseCount"(): integer
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
declare module "rearth.oritech.block.blocks.interaction.PowerPoleBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $PowerPoleBlock extends $Block implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PowerPoleBlock$$Type = ($PowerPoleBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PowerPoleBlock$$Original = $PowerPoleBlock;}
declare module "rearth.oritech.block.blocks.accelerator.AcceleratorControllerBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AcceleratorControllerBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcceleratorControllerBlock$$Type = ($AcceleratorControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AcceleratorControllerBlock$$Original = $AcceleratorControllerBlock;}
declare module "rearth.oritech.block.blocks.pipes.energy.SuperConductorDuctBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$GenericPipeDuctBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeDuctBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SuperConductorDuctBlock extends $GenericPipeDuctBlock {
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

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperConductorDuctBlock$$Type = ($SuperConductorDuctBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuperConductorDuctBlock$$Original = $SuperConductorDuctBlock;}
declare module "rearth.oritech.block.blocks.processing.FoundryBlock" {
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
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FoundryBlock extends $MultiblockMachine implements $EntityBlock$$Interface {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FoundryBlock$$Type = ($FoundryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FoundryBlock$$Original = $FoundryBlock;}
declare module "rearth.oritech.block.blocks.interaction.TreefellerBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $TreefellerBlock extends $HorizontalDirectionalBlock implements $EntityBlock$$Interface {
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TreefellerBlock$$Type = ($TreefellerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TreefellerBlock$$Original = $TreefellerBlock;}
declare module "rearth.oritech.block.blocks.storage.LargeStorageBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SmallStorageBlock} from "rearth.oritech.block.blocks.storage.SmallStorageBlock"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LargeStorageBlock extends $SmallStorageBlock {
static readonly "TARGET_DIR": $DirectionProperty
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
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getCloneItemStack"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LargeStorageBlock$$Type = ($LargeStorageBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LargeStorageBlock$$Original = $LargeStorageBlock;}
declare module "rearth.oritech.block.blocks.reactor.ReactorReflectorBlock" {
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BaseReactorBlock} from "rearth.oritech.block.blocks.reactor.BaseReactorBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ReactorReflectorBlock extends $BaseReactorBlock {
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
export type $ReactorReflectorBlock$$Type = ($ReactorReflectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReactorReflectorBlock$$Original = $ReactorReflectorBlock;}
declare module "rearth.oritech.block.blocks.generators.FuelGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FuelGeneratorBlock extends $MultiblockMachine {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getBlockEntityType"(): $Class<($BlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelGeneratorBlock$$Type = ($FuelGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelGeneratorBlock$$Original = $FuelGeneratorBlock;}
declare module "rearth.oritech.block.blocks.pipes.energy.SuperConductorBlock$FramedSuperConductorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SuperConductorBlock} from "rearth.oritech.block.blocks.pipes.energy.SuperConductorBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SuperConductorBlock$FramedSuperConductorBlock extends $SuperConductorBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static "SUPERCONDUCTOR_DATA": $HashMap<($ResourceLocation), ($GenericPipeInterfaceEntity$PipeNetworkData)>
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperConductorBlock$FramedSuperConductorBlock$$Type = ($SuperConductorBlock$FramedSuperConductorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuperConductorBlock$FramedSuperConductorBlock$$Original = $SuperConductorBlock$FramedSuperConductorBlock;}
declare module "rearth.oritech.block.blocks.pipes.GenericPipeDuctBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractPipeBlock} from "rearth.oritech.block.blocks.pipes.AbstractPipeBlock"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TriFunction} from "org.apache.commons.lang3.function.TriFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Wrench$Wrenchable$$Interface} from "rearth.oritech.item.tools.Wrench$Wrenchable"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GenericPipeDuctBlock extends $AbstractPipeBlock implements $Wrench$Wrenchable$$Interface {
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

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "updateNeighbors"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: boolean): void
public "shouldConnect"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockPos$$Type, arg3: $Level$$Type, arg4: boolean): boolean
public "isConnectingInDirection"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockPos$$Type, arg3: $Level$$Type, arg4: boolean): boolean
public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "addConnectionStates"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: boolean): $BlockState
public "addConnectionStates"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): $BlockState
public "onWrenchUse"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type): $InteractionResult
public "addStraightState"(arg0: $BlockState$$Type): $BlockState
public "onWrenchUseNeighbor"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $BlockPos$$Type, arg5: $Direction$$Type, arg6: $Player$$Type, arg7: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GenericPipeDuctBlock$$Type = ($GenericPipeDuctBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GenericPipeDuctBlock$$Original = $GenericPipeDuctBlock;}
declare module "rearth.oritech.block.blocks.addons.SteamBoilerAddonBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$MachineAddonBlock} from "rearth.oritech.block.blocks.addons.MachineAddonBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MachineAddonBlock$AddonSettings$$Type} from "rearth.oritech.block.blocks.addons.MachineAddonBlock$AddonSettings"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SteamBoilerAddonBlock extends $MachineAddonBlock {
static "MACHINE_CAPACITOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_SILK_TOUCH_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_BURST_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "ADDON_USED": $BooleanProperty
static readonly "USE_ACCURATE_OUTLINES": boolean
static "MACHINE_EFFICIENCY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_COMBI_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static "MACHINE_PROCESSING_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static "MACHINE_REDSTONE_ADDON_SHAPE": (($VoxelShape)[])[]
static "STEAM_BOILER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static "MACHINE_INVENTORY_PROXY_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "QUARRY_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_YIELD_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_HUNTER_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_ACCEPTOR_ADDON_SHAPE": (($VoxelShape)[])[]
static "MACHINE_FLUID_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static "MACHINE_SPEED_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "CROP_FILTER_ADDON_SHAPE": (($VoxelShape)[])[]
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty
static readonly "FACE": $EnumProperty<($AttachFace)>
static "MACHINE_ULTIMATE_ADDON_SHAPE": (($VoxelShape)[])[]

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $MachineAddonBlock$AddonSettings$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SteamBoilerAddonBlock$$Type = ($SteamBoilerAddonBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SteamBoilerAddonBlock$$Original = $SteamBoilerAddonBlock;}
declare module "rearth.oritech.block.blocks.pipes.energy.EnergyPipeConnectionBlock$FramedEnergyPipeConnectionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnergyPipeConnectionBlock} from "rearth.oritech.block.blocks.pipes.energy.EnergyPipeConnectionBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnergyPipeConnectionBlock$FramedEnergyPipeConnectionBlock extends $EnergyPipeConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPipeConnectionBlock$FramedEnergyPipeConnectionBlock$$Type = ($EnergyPipeConnectionBlock$FramedEnergyPipeConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyPipeConnectionBlock$FramedEnergyPipeConnectionBlock$$Original = $EnergyPipeConnectionBlock$FramedEnergyPipeConnectionBlock;}
declare module "rearth.oritech.block.blocks.processing.CentrifugeBlock" {
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
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CentrifugeBlock extends $MultiblockMachine implements $EntityBlock$$Interface {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CentrifugeBlock$$Type = ($CentrifugeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CentrifugeBlock$$Original = $CentrifugeBlock;}
declare module "rearth.oritech.block.blocks.decorative.MetalGirderBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HorizontalDirectionalBlock} from "net.minecraft.world.level.block.HorizontalDirectionalBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MetalGirderBlock extends $HorizontalDirectionalBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "HEADING": $BooleanProperty
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
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetalGirderBlock$$Type = ($MetalGirderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetalGirderBlock$$Original = $MetalGirderBlock;}
declare module "rearth.oritech.block.blocks.pipes.energy.SuperConductorConnectionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GenericPipeConnectionBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeConnectionBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Direction} from "net.minecraft.core.Direction"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TriFunction} from "org.apache.commons.lang3.function.TriFunction"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SuperConductorConnectionBlock extends $GenericPipeConnectionBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public "isCompatibleTarget"(arg0: $Block$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperConductorConnectionBlock$$Type = ($SuperConductorConnectionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuperConductorConnectionBlock$$Original = $SuperConductorConnectionBlock;}
declare module "rearth.oritech.block.blocks.reactor.NuclearExplosionBlock" {
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
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $NuclearExplosionBlock extends $Block implements $EntityBlock$$Interface {
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

public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NuclearExplosionBlock$$Type = ($NuclearExplosionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NuclearExplosionBlock$$Original = $NuclearExplosionBlock;}
declare module "rearth.oritech.block.blocks.decorative.TechRedstoneButton" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockSetType, $BlockSetType$$Type} from "net.minecraft.world.level.block.state.properties.BlockSetType"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ButtonBlock} from "net.minecraft.world.level.block.ButtonBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$AttachFace} from "net.minecraft.world.level.block.state.properties.AttachFace"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TechRedstoneButton extends $ButtonBlock {
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

constructor(arg0: $BlockSetType$$Type, arg1: integer, arg2: $BlockBehaviour$Properties$$Type)

public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TechRedstoneButton$$Type = ($TechRedstoneButton);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TechRedstoneButton$$Original = $TechRedstoneButton;}
declare module "rearth.oritech.block.blocks.pipes.fluid.FluidPipeDuctBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$GenericPipeDuctBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeDuctBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPipeDuctBlock extends $GenericPipeDuctBlock {
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

public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPipeDuctBlock$$Type = ($FluidPipeDuctBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPipeDuctBlock$$Original = $FluidPipeDuctBlock;}
declare module "rearth.oritech.block.blocks.accelerator.AcceleratorSensorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AcceleratorPassthroughBlock} from "rearth.oritech.block.blocks.accelerator.AcceleratorPassthroughBlock"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $AcceleratorSensorBlock extends $AcceleratorPassthroughBlock implements $EntityBlock$$Interface {
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

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AcceleratorSensorBlock$$Type = ($AcceleratorSensorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AcceleratorSensorBlock$$Original = $AcceleratorSensorBlock;}
declare module "rearth.oritech.block.blocks.processing.AssemblerBlock" {
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
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AssemblerBlock extends $MultiblockMachine implements $EntityBlock$$Interface {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblerBlock$$Type = ($AssemblerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblerBlock$$Original = $AssemblerBlock;}
declare module "rearth.oritech.block.blocks.generators.BigSolarPanelBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PassiveGeneratorBlock} from "rearth.oritech.block.base.block.PassiveGeneratorBlock"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BigSolarPanelBlock extends $PassiveGeneratorBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
readonly "productionRate": integer
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

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "playerWillDestroy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): $BlockState
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigSolarPanelBlock$$Type = ($BigSolarPanelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BigSolarPanelBlock$$Original = $BigSolarPanelBlock;}
declare module "rearth.oritech.block.blocks.storage.UnstableContainerBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $UnstableContainerBlock extends $Block implements $EntityBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "SETUP_DONE": $BooleanProperty
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UnstableContainerBlock$$Type = ($UnstableContainerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UnstableContainerBlock$$Original = $UnstableContainerBlock;}
declare module "rearth.oritech.block.blocks.pipes.energy.EnergyPipeBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$GenericPipeInterfaceEntity$PipeNetworkData} from "rearth.oritech.block.entity.pipes.GenericPipeInterfaceEntity$PipeNetworkData"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$GenericPipeBlock} from "rearth.oritech.block.blocks.pipes.GenericPipeBlock"
import {$IntegerProperty} from "net.minecraft.world.level.block.state.properties.IntegerProperty"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TriFunction} from "org.apache.commons.lang3.function.TriFunction"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $EnergyPipeBlock extends $GenericPipeBlock {
static readonly "DOWN": $IntegerProperty
static readonly "EXTRA_THICK_SHAPES": ($VoxelShape)[]
static readonly "WEST": $IntegerProperty
static readonly "STRAIGHT": $BooleanProperty
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "UPDATE_LIMIT": integer
static readonly "UPDATE_ALL": integer
static readonly "NORTH": $IntegerProperty
static "NO_CONNECTION": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "SOUTH": $IntegerProperty
static readonly "UP": $IntegerProperty
static readonly "EAST": $IntegerProperty
static readonly "THIN_SHAPES": ($VoxelShape)[]
static readonly "UPDATE_IMMEDIATE": integer
static readonly "THICK_SHAPES": ($VoxelShape)[]
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static "CONNECTION": integer
static "ENERGY_PIPE_DATA": $HashMap<($ResourceLocation), ($GenericPipeInterfaceEntity$PipeNetworkData)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "apiValidationFunction"(): $TriFunction<($Level), ($BlockPos), ($Direction), (boolean)>
public "getConnectionBlock"(): $BlockState
public "getNormalBlock"(): $BlockState
public "getPipeTypeName"(): StringJS
public "connectToOwnBlockType"(arg0: $Block$$Type): boolean
public "getNetworkData"(arg0: $Level$$Type): $GenericPipeInterfaceEntity$PipeNetworkData
public "isCompatibleTarget"(arg0: $Block$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "connectionBlock"(): $BlockState
get "normalBlock"(): $BlockState
get "pipeTypeName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyPipeBlock$$Type = ($EnergyPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyPipeBlock$$Original = $EnergyPipeBlock;}
declare module "rearth.oritech.block.blocks.interaction.DestroyerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$MultiblockFrameInteractionBlock} from "rearth.oritech.block.base.block.MultiblockFrameInteractionBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DestroyerBlock extends $MultiblockFrameInteractionBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "HAS_FRAME": $BooleanProperty
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
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DestroyerBlock$$Type = ($DestroyerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DestroyerBlock$$Original = $DestroyerBlock;}
declare module "rearth.oritech.block.blocks.accelerator.ParticleCollectorBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$DirectionalBlock} from "net.minecraft.world.level.block.DirectionalBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ParticleCollectorBlock extends $DirectionalBlock implements $EntityBlock$$Interface {
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
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParticleCollectorBlock$$Type = ($ParticleCollectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParticleCollectorBlock$$Original = $ParticleCollectorBlock;}
declare module "rearth.oritech.block.blocks.interaction.ShrinkerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ShrinkerBlock extends $MultiblockMachine {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShrinkerBlock$$Type = ($ShrinkerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShrinkerBlock$$Original = $ShrinkerBlock;}
declare module "rearth.oritech.block.blocks.generators.BioGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$MultiblockMachine} from "rearth.oritech.block.base.block.MultiblockMachine"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Class} from "java.lang.Class"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BioGeneratorBlock extends $MultiblockMachine {
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
static readonly "ASSEMBLED": $BooleanProperty
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING": $DirectionProperty

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $Class<($BlockEntity)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $Class<($BlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BioGeneratorBlock$$Type = ($BioGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BioGeneratorBlock$$Original = $BioGeneratorBlock;}
