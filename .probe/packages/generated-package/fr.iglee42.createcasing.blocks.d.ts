declare module "fr.iglee42.createcasing.blocks.customs.CustomRollerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RollerBlockEntity} from "com.simibubi.create.content.contraptions.actors.roller.RollerBlockEntity"
import {$RollerBlock} from "com.simibubi.create.content.contraptions.actors.roller.RollerBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomRollerBlock extends $RollerBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CustomRollerBlock)>
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

public "getBlockEntityType"(): $BlockEntityType<($RollerBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($RollerBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomRollerBlock$$Type = ($CustomRollerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomRollerBlock$$Original = $CustomRollerBlock;}
declare module "fr.iglee42.createcasing.blocks.publics.PublicChainConveyorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ChainConveyorBlockEntity} from "com.simibubi.create.content.kinetics.chainConveyor.ChainConveyorBlockEntity"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ChainConveyorBlock} from "com.simibubi.create.content.kinetics.chainConveyor.ChainConveyorBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PublicChainConveyorBlock extends $ChainConveyorBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($ChainConveyorBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($ChainConveyorBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PublicChainConveyorBlock$$Type = ($PublicChainConveyorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PublicChainConveyorBlock$$Original = $PublicChainConveyorBlock;}
declare module "fr.iglee42.createcasing.blocks.shafts.BrassShaftBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$CustomShaftBlock} from "fr.iglee42.createcasing.blocks.shafts.CustomShaftBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BrassShaftBlock extends $CustomShaftBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrassShaftBlock$$Type = ($BrassShaftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrassShaftBlock$$Original = $BrassShaftBlock;}
declare module "fr.iglee42.createcasing.blocks.cogwheels.WoodenCogwheelBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CogWheelBlock} from "com.simibubi.create.content.kinetics.simpleRelays.CogWheelBlock"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WoodenCogwheelBlock extends $CogWheelBlock {
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

public static "large"(arg0: $BlockBehaviour$Properties$$Type): $WoodenCogwheelBlock
public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public static "small"(arg0: $BlockBehaviour$Properties$$Type): $WoodenCogwheelBlock
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodenCogwheelBlock$$Type = ($WoodenCogwheelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodenCogwheelBlock$$Original = $WoodenCogwheelBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomEncasedFanBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$EncasedFanBlock} from "com.simibubi.create.content.kinetics.fan.EncasedFanBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$EncasedFanBlockEntity} from "com.simibubi.create.content.kinetics.fan.EncasedFanBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomEncasedFanBlock extends $EncasedFanBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($EncasedFanBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($EncasedFanBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomEncasedFanBlock$$Type = ($CustomEncasedFanBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomEncasedFanBlock$$Original = $CustomEncasedFanBlock;}
declare module "fr.iglee42.createcasing.blocks.publics.PublicEncasedCogwheelBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SimpleKineticBlockEntity} from "com.simibubi.create.content.kinetics.simpleRelays.SimpleKineticBlockEntity"
import {$EncasedCogwheelBlock} from "com.simibubi.create.content.kinetics.simpleRelays.encased.EncasedCogwheelBlock"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PublicEncasedCogwheelBlock extends $EncasedCogwheelBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "TOP_SHAFT": $BooleanProperty
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
static readonly "BOTTOM_SHAFT": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: boolean, arg2: $Supplier$$Type<($Block$$Type)>)

public "getBlockEntityType"(): $BlockEntityType<($SimpleKineticBlockEntity)>
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SimpleKineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PublicEncasedCogwheelBlock$$Type = ($PublicEncasedCogwheelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PublicEncasedCogwheelBlock$$Original = $PublicEncasedCogwheelBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomGearboxBlock" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$GearboxBlockEntity} from "com.simibubi.create.content.kinetics.gearbox.GearboxBlockEntity"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$GearboxBlock} from "com.simibubi.create.content.kinetics.gearbox.GearboxBlock"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $CustomGearboxBlock extends $GearboxBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($BlockItem$$Type)>)

public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getBlockEntityType"(): $BlockEntityType<($GearboxBlockEntity)>
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($GearboxBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomGearboxBlock$$Type = ($CustomGearboxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomGearboxBlock$$Original = $CustomGearboxBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomPressBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$MechanicalPressBlock} from "com.simibubi.create.content.kinetics.press.MechanicalPressBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MechanicalPressBlockEntity} from "com.simibubi.create.content.kinetics.press.MechanicalPressBlockEntity"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $CustomPressBlock extends $MechanicalPressBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getBlockEntityType"(): $BlockEntityType<($MechanicalPressBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($MechanicalPressBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomPressBlock$$Type = ($CustomPressBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomPressBlock$$Original = $CustomPressBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomDepotBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DepotBlockEntity} from "com.simibubi.create.content.logistics.depot.DepotBlockEntity"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$DepotBlock} from "com.simibubi.create.content.logistics.depot.DepotBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomDepotBlock extends $DepotBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($DepotBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($DepotBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDepotBlock$$Type = ($CustomDepotBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomDepotBlock$$Original = $CustomDepotBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomSawBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SawBlockEntity} from "com.simibubi.create.content.kinetics.saw.SawBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$SawBlock} from "com.simibubi.create.content.kinetics.saw.SawBlock"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomSawBlock extends $SawBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "FLIPPED": $BooleanProperty
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "AXIS_ALONG_FIRST_COORDINATE": $BooleanProperty
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

public "getBlockEntityType"(): $BlockEntityType<($SawBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($SawBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomSawBlock$$Type = ($CustomSawBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomSawBlock$$Original = $CustomSawBlock;}
declare module "fr.iglee42.createcasing.blocks.shafts.GlassShaftBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CustomShaftBlock} from "fr.iglee42.createcasing.blocks.shafts.CustomShaftBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GlassShaftBlock extends $CustomShaftBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GlassShaftBlock$$Type = ($GlassShaftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GlassShaftBlock$$Original = $GlassShaftBlock;}
declare module "fr.iglee42.createcasing.blocks.CreativeCogwheelBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
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
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$ICogWheel$$Interface} from "com.simibubi.create.content.kinetics.simpleRelays.ICogWheel"
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
import {$CreativeCogwheelBlockEntity, $CreativeCogwheelBlockEntity$$Type} from "fr.iglee42.createcasing.blockEntities.CreativeCogwheelBlockEntity"

export class $CreativeCogwheelBlock extends $RotatedPillarKineticBlock implements $IBE$$Interface<($CreativeCogwheelBlockEntity)>, $ICogWheel$$Interface {
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
public "hideStressImpact"(): boolean
public "isSmallCog"(): boolean
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($CreativeCogwheelBlockEntity)>
public "getBlockEntityClass"(): $Class<($CreativeCogwheelBlockEntity)>
public "isDedicatedCogWheel"(): boolean
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($CreativeCogwheelBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($CreativeCogwheelBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CreativeCogwheelBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($CreativeCogwheelBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $CreativeCogwheelBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public "isLargeCog"(): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "smallCog"(): boolean
get "blockEntityType"(): $BlockEntityType<($CreativeCogwheelBlockEntity)>
get "blockEntityClass"(): $Class<($CreativeCogwheelBlockEntity)>
get "dedicatedCogWheel"(): boolean
get "largeCog"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeCogwheelBlock$$Type = ($CreativeCogwheelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeCogwheelBlock$$Original = $CreativeCogwheelBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomGearshiftBlock" {
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

export class $CustomGearshiftBlock extends $GearshiftBlock {
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
export type $CustomGearshiftBlock$$Type = ($CustomGearshiftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomGearshiftBlock$$Original = $CustomGearshiftBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomDrillBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$DrillBlockEntity} from "com.simibubi.create.content.kinetics.drill.DrillBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DrillBlock} from "com.simibubi.create.content.kinetics.drill.DrillBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomDrillBlock extends $DrillBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($DrillBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($DrillBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDrillBlock$$Type = ($CustomDrillBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomDrillBlock$$Original = $CustomDrillBlock;}
declare module "fr.iglee42.createcasing.blocks.shafts.CustomShaftBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ShaftBlock} from "com.simibubi.create.content.kinetics.simpleRelays.ShaftBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomShaftBlock extends $ShaftBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomShaftBlock$$Type = ($CustomShaftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomShaftBlock$$Original = $CustomShaftBlock;}
declare module "fr.iglee42.createcasing.blocks.ConfigurableGearboxBlock" {
import {$IBE$$Interface} from "com.simibubi.create.foundation.block.IBE"
import {$KineticBlock} from "com.simibubi.create.content.kinetics.base.KineticBlock"
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
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$GearboxBlockEntity, $GearboxBlockEntity$$Type} from "com.simibubi.create.content.kinetics.gearbox.GearboxBlockEntity"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
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

export class $ConfigurableGearboxBlock extends $KineticBlock implements $IBE$$Interface<($GearboxBlockEntity)> {
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

public "hasShaftTowards"(arg0: $LevelReader$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Direction$$Type): boolean
public static "getPropertyByDirection"(arg0: $Direction$$Type): $BooleanProperty
public "getRotationAxis"(arg0: $BlockState$$Type): $Direction$Axis
public "getBlockEntityType"(): $BlockEntityType<($GearboxBlockEntity)>
public "getBlockEntityClass"(): $Class<($GearboxBlockEntity)>
public "onWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getTicker"<S extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(S)>): $BlockEntityTicker<(S)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockEntityOptional"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<($GearboxBlockEntity)>
public "withBlockEntityDo"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Consumer$$Type<($GearboxBlockEntity)>): void
public "onBlockEntityUse"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($GearboxBlockEntity), ($InteractionResult$$Type)>): $InteractionResult
public "onBlockEntityUseItemOn"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type, arg2: $Function$$Type<($GearboxBlockEntity), ($ItemInteractionResult$$Type)>): $ItemInteractionResult
public "getBlockEntity"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $GearboxBlockEntity
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($GearboxBlockEntity)>
get "blockEntityClass"(): $Class<($GearboxBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurableGearboxBlock$$Type = ($ConfigurableGearboxBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurableGearboxBlock$$Original = $ConfigurableGearboxBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.EncasedCustomCogwheelBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$SimpleKineticBlockEntity} from "com.simibubi.create.content.kinetics.simpleRelays.SimpleKineticBlockEntity"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$EncasedCogwheelBlock} from "com.simibubi.create.content.kinetics.simpleRelays.encased.EncasedCogwheelBlock"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $EncasedCustomCogwheelBlock extends $EncasedCogwheelBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "TOP_SHAFT": $BooleanProperty
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
static readonly "BOTTOM_SHAFT": $BooleanProperty
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: boolean, arg2: $Supplier$$Type<($Block$$Type)>, arg3: $Supplier$$Type<($Block$$Type)>)

public "getCogwheel"(): $Supplier<($Block)>
public "getBlockEntityType"(): $BlockEntityType<($SimpleKineticBlockEntity)>
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "cogwheel"(): $Supplier<($Block)>
get "blockEntityType"(): $BlockEntityType<($SimpleKineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncasedCustomCogwheelBlock$$Type = ($EncasedCustomCogwheelBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EncasedCustomCogwheelBlock$$Original = $EncasedCustomCogwheelBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomChainGearshiftBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$CustomChainDriveBlock} from "fr.iglee42.createcasing.blocks.customs.CustomChainDriveBlock"
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
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $CustomChainGearshiftBlock extends $CustomChainDriveBlock {
static readonly "UPDATE_IMMEDIATE": integer
static readonly "CONNECTED_ALONG_FIRST_COORDINATE": $BooleanProperty
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
static readonly "PART": $Property<($ChainDriveBlock$Part)>
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "AXIS": $EnumProperty<($Direction$Axis)>

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: StringJS)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomChainGearshiftBlock$$Type = ($CustomChainGearshiftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomChainGearshiftBlock$$Original = $CustomChainGearshiftBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomDeployerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$DeployerBlock} from "com.simibubi.create.content.kinetics.deployer.DeployerBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$DeployerBlockEntity} from "com.simibubi.create.content.kinetics.deployer.DeployerBlockEntity"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomDeployerBlock extends $DeployerBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static readonly "AXIS_ALONG_FIRST_COORDINATE": $BooleanProperty
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

public "getBlockEntityType"(): $BlockEntityType<($DeployerBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($DeployerBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomDeployerBlock$$Type = ($CustomDeployerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomDeployerBlock$$Original = $CustomDeployerBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomChainDriveBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
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
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ChainDriveBlock} from "com.simibubi.create.content.kinetics.chainDrive.ChainDriveBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export class $CustomChainDriveBlock extends $ChainDriveBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: StringJS)

public static "areCustomBlocksConnected"(arg0: $BlockState$$Type, arg1: $BlockState$$Type, arg2: $Direction$$Type): boolean
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public "getType"(): StringJS
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
get "type"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomChainDriveBlock$$Type = ($CustomChainDriveBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomChainDriveBlock$$Original = $CustomChainDriveBlock;}
declare module "fr.iglee42.createcasing.blocks.publics.PublicEncasedPipeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Map} from "java.util.Map"
import {$Direction} from "net.minecraft.core.Direction"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$FluidPipeBlockEntity} from "com.simibubi.create.content.fluids.pipes.FluidPipeBlockEntity"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$EncasedPipeBlock} from "com.simibubi.create.content.fluids.pipes.EncasedPipeBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PublicEncasedPipeBlock extends $EncasedPipeBlock {
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
static readonly "FACING_TO_PROPERTY_MAP": $Map<($Direction), ($BooleanProperty)>
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>)

public "getBlockEntityType"(): $BlockEntityType<($FluidPipeBlockEntity)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($FluidPipeBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PublicEncasedPipeBlock$$Type = ($PublicEncasedPipeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PublicEncasedPipeBlock$$Original = $PublicEncasedPipeBlock;}
declare module "fr.iglee42.createcasing.blocks.publics.PublicEncasedShaftBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$EncasedShaftBlock} from "com.simibubi.create.content.kinetics.simpleRelays.encased.EncasedShaftBlock"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PublicEncasedShaftBlock extends $EncasedShaftBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PublicEncasedShaftBlock$$Type = ($PublicEncasedShaftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PublicEncasedShaftBlock$$Original = $PublicEncasedShaftBlock;}
declare module "fr.iglee42.createcasing.blocks.shafts.EncasedCustomShaftBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$EncasedShaftBlock} from "com.simibubi.create.content.kinetics.simpleRelays.encased.EncasedShaftBlock"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EncasedCustomShaftBlock extends $EncasedShaftBlock {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Supplier$$Type<($Block$$Type)>, arg2: $Supplier$$Type<($Block$$Type)>)

public "getShaft"(): $Supplier<($Block)>
public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public "onSneakWrenched"(arg0: $BlockState$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "shaft"(): $Supplier<($Block)>
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EncasedCustomShaftBlock$$Type = ($EncasedCustomShaftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EncasedCustomShaftBlock$$Original = $EncasedCustomShaftBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomMixerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MechanicalMixerBlockEntity} from "com.simibubi.create.content.kinetics.mixer.MechanicalMixerBlockEntity"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MechanicalMixerBlock} from "com.simibubi.create.content.kinetics.mixer.MechanicalMixerBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomMixerBlock extends $MechanicalMixerBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($MechanicalMixerBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "isSmallCog"(arg0: $Block$$Type): boolean
public static "isSmallCog"(arg0: $BlockState$$Type): boolean
public static "isLargeCog"(arg0: $Block$$Type): boolean
public static "isLargeCog"(arg0: $BlockState$$Type): boolean
public static "isDedicatedCogWheel"(arg0: $Block$$Type): boolean
public static "isDedicatedCogItem"(arg0: $ItemStack$$Type): boolean
public static "isSmallCogItem"(arg0: $ItemStack$$Type): boolean
public static "isLargeCogItem"(arg0: $ItemStack$$Type): boolean
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($MechanicalMixerBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomMixerBlock$$Type = ($CustomMixerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomMixerBlock$$Original = $CustomMixerBlock;}
declare module "fr.iglee42.createcasing.blocks.shafts.WoodenShaftBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$CustomShaftBlock} from "fr.iglee42.createcasing.blocks.shafts.CustomShaftBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$KineticBlockEntity} from "com.simibubi.create.content.kinetics.base.KineticBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Direction$Axis} from "net.minecraft.core.Direction$Axis"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WoodenShaftBlock extends $CustomShaftBlock {
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

public "getBlockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($KineticBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WoodenShaftBlock$$Type = ($WoodenShaftBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WoodenShaftBlock$$Original = $WoodenShaftBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomClutchBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
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

export class $CustomClutchBlock extends $ClutchBlock {
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
export type $CustomClutchBlock$$Type = ($CustomClutchBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomClutchBlock$$Original = $CustomClutchBlock;}
declare module "fr.iglee42.createcasing.blocks.customs.CustomHarvesterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HarvesterBlock} from "com.simibubi.create.content.contraptions.actors.harvester.HarvesterBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$HarvesterBlockEntity} from "com.simibubi.create.content.contraptions.actors.harvester.HarvesterBlockEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CustomHarvesterBlock extends $HarvesterBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($CustomHarvesterBlock)>
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

public "getBlockEntityType"(): $BlockEntityType<($HarvesterBlockEntity)>
public static "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): void
public static "playRotateSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "playRemoveSound"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public static "withWater"(arg0: $LevelAccessor$$Type, arg1: $BlockState$$Type, arg2: $BlockPos$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "blockEntityType"(): $BlockEntityType<($HarvesterBlockEntity)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CustomHarvesterBlock$$Type = ($CustomHarvesterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CustomHarvesterBlock$$Original = $CustomHarvesterBlock;}
