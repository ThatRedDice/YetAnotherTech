declare module "com.buuz135.industrial.block.generator.mycelial.IMycelialGeneratorType$Input" {
import {$Enum} from "java.lang.Enum"

export class $IMycelialGeneratorType$Input extends $Enum<($IMycelialGeneratorType$Input)> {
static readonly "SLOT": $IMycelialGeneratorType$Input
static readonly "TANK": $IMycelialGeneratorType$Input

public static "values"(): ($IMycelialGeneratorType$Input)[]
public static "valueOf"(arg0: StringJS): $IMycelialGeneratorType$Input
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMycelialGeneratorType$Input$$Type = (("slot") | ("tank"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMycelialGeneratorType$Input$$Original = $IMycelialGeneratorType$Input;}
declare module "com.buuz135.industrial.block.core.tile.DissolutionChamberTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable} from "java.lang.Runnable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DissolutionChamberTile extends $IndustrialProcessingTile<($DissolutionChamberTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "getMaxProgress"(): integer
public "canIncrease"(): boolean
public static "getSlotPos"(arg0: integer): $Pair<(integer), (integer)>
public "setLevel"(arg0: $Level$$Type): void
public "getSelf"(): $DissolutionChamberTile
public "onFinish"(): $Runnable
public "setChanged"(): void
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
set "level"(value: $Level$$Type)
get "self"(): $DissolutionChamberTile
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DissolutionChamberTile$$Type = ($DissolutionChamberTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DissolutionChamberTile$$Original = $DissolutionChamberTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.AnimalBabySeparatorTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AnimalBabySeparatorTile extends $IndustrialAreaWorkingTile<($AnimalBabySeparatorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "initClient"(): void
public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $AnimalBabySeparatorTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $AnimalBabySeparatorTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalBabySeparatorTile$$Type = ($AnimalBabySeparatorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalBabySeparatorTile$$Original = $AnimalBabySeparatorTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.AnimalBabySeparatorBlock" {
import {$AnimalBabySeparatorTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.AnimalBabySeparatorTile"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $AnimalBabySeparatorBlock extends $IndustrialBlock<($AnimalBabySeparatorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalBabySeparatorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalBabySeparatorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalBabySeparatorBlock$$Type = ($AnimalBabySeparatorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalBabySeparatorBlock$$Original = $AnimalBabySeparatorBlock;}
declare module "com.buuz135.industrial.block.transportstorage.TransporterBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TransporterTile} from "com.buuz135.industrial.block.transportstorage.tile.TransporterTile"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BasicTileBlock} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $TransporterBlock extends $BasicTileBlock<($TransporterTile)> implements $SimpleWaterloggedBlock$$Interface {
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

constructor()

public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($TransporterTile)>
public "getDynamicDrops"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getFacingUpgradeHit"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): $Pair<($Direction), (boolean)>
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getLootTable"(arg0: any): $LootTable$Builder
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "hasIndividualRenderVoxelShape"(): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($TransporterTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterBlock$$Type = ($TransporterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransporterBlock$$Original = $TransporterBlock;}
declare module "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$RangeManager$RangeType$$Type} from "com.buuz135.industrial.block.tile.RangeManager$RangeType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockWithTile$$Type} from "com.hrznstudio.titanium.module.BlockWithTile"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IndustrialAreaWorkingTile<T extends $IndustrialAreaWorkingTile<(object)>> extends $IndustrialWorkingTile<(T)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockWithTile$$Type, arg1: $RangeManager$RangeType$$Type, arg2: boolean, arg3: integer, arg4: $BlockPos$$Type, arg5: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "canAcceptAugment"(arg0: $ItemStack$$Type): boolean
public "isSpawnParticles"(): boolean
public "getWorkingArea"(): $VoxelShape
public "increasePointer"(): void
public "isShowingArea"(): boolean
public "getPointedBlockPos"(): $BlockPos
public "isLoaded"(arg0: $BlockPos$$Type): boolean
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "spawnParticles"(): boolean
get "workingArea"(): $VoxelShape
get "showingArea"(): boolean
get "pointedBlockPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialAreaWorkingTile$$Type<T> = ($IndustrialAreaWorkingTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndustrialAreaWorkingTile$$Original<T> = $IndustrialAreaWorkingTile<(T)>;}
declare module "com.buuz135.industrial.block.resourceproduction.OreLaserBaseBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$OreLaserBaseTile} from "com.buuz135.industrial.block.resourceproduction.tile.OreLaserBaseTile"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $OreLaserBaseBlock extends $IndustrialBlock<($OreLaserBaseTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($OreLaserBaseTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($OreLaserBaseTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreLaserBaseBlock$$Type = ($OreLaserBaseBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OreLaserBaseBlock$$Original = $OreLaserBaseBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.MaterialStoneWorkFactoryBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$MaterialStoneWorkFactoryTile} from "com.buuz135.industrial.block.resourceproduction.tile.MaterialStoneWorkFactoryTile"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MaterialStoneWorkFactoryBlock extends $IndustrialBlock<($MaterialStoneWorkFactoryTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MaterialStoneWorkFactoryTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MaterialStoneWorkFactoryTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialStoneWorkFactoryBlock$$Type = ($MaterialStoneWorkFactoryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialStoneWorkFactoryBlock$$Original = $MaterialStoneWorkFactoryBlock;}
declare module "com.buuz135.industrial.block.misc.MobDetectorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MobDetectorTile} from "com.buuz135.industrial.block.misc.tile.MobDetectorTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MobDetectorBlock extends $IndustrialBlock<($MobDetectorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobDetectorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobDetectorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDetectorBlock$$Type = ($MobDetectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobDetectorBlock$$Original = $MobDetectorBlock;}
declare module "com.buuz135.industrial.block.core.LatexProcessingUnitBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LatexProcessingUnitTile} from "com.buuz135.industrial.block.core.tile.LatexProcessingUnitTile"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $LatexProcessingUnitBlock extends $IndustrialBlock<($LatexProcessingUnitTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($LatexProcessingUnitTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($LatexProcessingUnitTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LatexProcessingUnitBlock$$Type = ($LatexProcessingUnitBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LatexProcessingUnitBlock$$Original = $LatexProcessingUnitBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.PlantGathererTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlantGathererTile extends $IndustrialAreaWorkingTile<($PlantGathererTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $ActiveTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantGathererTile$$Type = ($PlantGathererTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlantGathererTile$$Original = $PlantGathererTile;}
declare module "com.buuz135.industrial.block.resourceproduction.SporesRecreatorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$SporesRecreatorTile} from "com.buuz135.industrial.block.resourceproduction.tile.SporesRecreatorTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SporesRecreatorBlock extends $IndustrialBlock<($SporesRecreatorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SporesRecreatorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SporesRecreatorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporesRecreatorBlock$$Type = ($SporesRecreatorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SporesRecreatorBlock$$Original = $SporesRecreatorBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.FluidCollectorTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidCollectorTile extends $IndustrialAreaWorkingTile<($FluidCollectorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $FluidCollectorTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $FluidCollectorTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCollectorTile$$Type = ($FluidCollectorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidCollectorTile$$Original = $FluidCollectorTile;}
declare module "com.buuz135.industrial.block.transportstorage.tile.TransporterTile" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SidedInventoryComponent} from "com.hrznstudio.titanium.component.inventory.SidedInventoryComponent"
import {$Map} from "java.util.Map"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IBlockContainer$$Interface} from "com.buuz135.industrial.api.IBlockContainer"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$TransporterTypeFactory, $TransporterTypeFactory$$Type} from "com.buuz135.industrial.api.transporter.TransporterTypeFactory"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$InventoryComponent} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$IAugmentType$$Type} from "com.hrznstudio.titanium.api.augment.IAugmentType"
import {$TransporterType} from "com.buuz135.industrial.api.transporter.TransporterType"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $TransporterTile extends $ActiveTile<($TransporterTile)> implements $IBlockContainer$$Interface<($TransporterTypeFactory)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "hasUpgrade"(arg0: $Direction$$Type): boolean
public "canAcceptAugment"(arg0: $ItemStack$$Type): boolean
public "getAugmentInventory"(): $SidedInventoryComponent<($TransporterTile)>
public "removeUpgrade"(arg0: $Direction$$Type, arg1: boolean): void
public "openGui"(arg0: $Player$$Type, arg1: $Direction$$Type): void
public "addUpgrade"(arg0: $Direction$$Type, arg1: any): void
public "addUpgrade"(arg0: $Direction$$Type, arg1: $TransporterTypeFactory$$Type): void
public "getTransporterTypeMap"(): $Map<($Direction), ($TransporterType)>
public "getBlockWorld"(): $Level
public "getEntityFilter"(): $List<(integer)>
public "requestSync"(): void
public "requestFluidSync"(): void
public "hasAugmentInstalled"(arg0: $IAugmentType$$Type): boolean
public "getInstalledAugments"(arg0: $IAugmentType$$Type): $List<($ItemStack)>
public "getInstalledAugments"(): $List<($ItemStack)>
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $TransporterTile$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "initClient"(): void
public "getAugmentFactory"(): $IFactory<($InventoryComponent<($TransporterTile)>)>
public "getAugmentBackground"(): $IFactory<($IScreenAddon)>
public "getSelf"(): $ActiveTile
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $TransporterTile$$Type): void
public "getBlockPosition"(): $BlockPos
public "getModelData"(): $ModelData
get "augmentInventory"(): $SidedInventoryComponent<($TransporterTile)>
get "transporterTypeMap"(): $Map<($Direction), ($TransporterType)>
get "blockWorld"(): $Level
get "entityFilter"(): $List<(integer)>
get "installedAugments"(): $List<($ItemStack)>
get "augmentFactory"(): $IFactory<($InventoryComponent<($TransporterTile)>)>
get "augmentBackground"(): $IFactory<($IScreenAddon)>
get "self"(): $ActiveTile
get "blockPosition"(): $BlockPos
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransporterTile$$Type = ($TransporterTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransporterTile$$Original = $TransporterTile;}
declare module "com.buuz135.industrial.block.transportstorage.ConveyorBlock$EnumType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ConveyorBlock$EnumType extends $Enum<($ConveyorBlock$EnumType)> implements $StringRepresentable$$Interface {
static readonly "UP_FAST": $ConveyorBlock$EnumType
static readonly "DOWN": $ConveyorBlock$EnumType
static readonly "FLAT_FAST": $ConveyorBlock$EnumType
static readonly "DOWN_FAST": $ConveyorBlock$EnumType
static readonly "FLAT": $ConveyorBlock$EnumType
static readonly "UP": $ConveyorBlock$EnumType

public "getVertical"(arg0: $Direction$$Type): $ConveyorBlock$EnumType
public "isFast"(): boolean
public "getFast"(): $ConveyorBlock$EnumType
public "isVertical"(): boolean
public static "getFromName"(arg0: StringJS): $ConveyorBlock$EnumType
public "getName"(): StringJS
public "toString"(): StringJS
public static "values"(): ($ConveyorBlock$EnumType)[]
public static "valueOf"(arg0: StringJS): $ConveyorBlock$EnumType
public "isUp"(): boolean
public "getTexture"(): StringJS
public "getModel"(): StringJS
public "isDown"(): boolean
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "fast"(): boolean
get "fast"(): $ConveyorBlock$EnumType
get "vertical"(): boolean
get "name"(): StringJS
get "up"(): boolean
get "texture"(): StringJS
get "model"(): StringJS
get "down"(): boolean
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorBlock$EnumType$$Type = (("flat") | ("up") | ("down") | ("flat_fast") | ("up_fast") | ("down_fast"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorBlock$EnumType$$Original = $ConveyorBlock$EnumType;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.SewageComposterTile" {
import {$SidedFluidTankComponent} from "com.hrznstudio.titanium.component.fluid.SidedFluidTankComponent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$SidedInventoryComponent} from "com.hrznstudio.titanium.component.inventory.SidedInventoryComponent"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SewageComposterTile extends $IndustrialProcessingTile<($SewageComposterTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "fertilizerOutput": $SidedInventoryComponent<($SewageComposterTile)>
 "sewage": $SidedFluidTankComponent<($SewageComposterTile)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "canIncrease"(): boolean
public "getSelf"(): $SewageComposterTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $SewageComposterTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SewageComposterTile$$Type = ($SewageComposterTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SewageComposterTile$$Original = $SewageComposterTile;}
declare module "com.buuz135.industrial.block.resourceproduction.SludgeRefinerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$SludgeRefinerTile} from "com.buuz135.industrial.block.resourceproduction.tile.SludgeRefinerTile"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SludgeRefinerBlock extends $IndustrialBlock<($SludgeRefinerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SludgeRefinerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SludgeRefinerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SludgeRefinerBlock$$Type = ($SludgeRefinerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SludgeRefinerBlock$$Original = $SludgeRefinerBlock;}
declare module "com.buuz135.industrial.block.misc.tile.InfinityChargerTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IndustrialMachineTile} from "com.buuz135.industrial.block.tile.IndustrialMachineTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InfinityChargerTile extends $IndustrialMachineTile<($InfinityChargerTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $InfinityChargerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "getSelf"(): $InfinityChargerTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "self"(): $InfinityChargerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityChargerTile$$Type = ($InfinityChargerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityChargerTile$$Original = $InfinityChargerTile;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.LaserDrillTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LaserDrillTile extends $IndustrialAreaWorkingTile<($LaserDrillTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "isValidTarget"(arg0: $BlockPos$$Type): boolean
public "initClient"(): void
public "getMaxProgress"(): integer
public "getWorkingArea"(): $VoxelShape
public "work"(): $IndustrialWorkingTile$WorkAction
public "getTarget"(): $BlockPos
public "getSelf"(): $LaserDrillTile
public "findTarget"(): void
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "workingArea"(): $VoxelShape
get "target"(): $BlockPos
get "self"(): $LaserDrillTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserDrillTile$$Type = ($LaserDrillTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LaserDrillTile$$Original = $LaserDrillTile;}
declare module "com.buuz135.industrial.block.generator.tile.PitifulGeneratorTile" {
import {$IndustrialGeneratorTile} from "com.buuz135.industrial.block.tile.IndustrialGeneratorTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ProgressBarComponent} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PitifulGeneratorTile extends $IndustrialGeneratorTile<($PitifulGeneratorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "consumeFuel"(): integer
public "canStart"(): boolean
public "getProgressBar"(): $ProgressBarComponent<($PitifulGeneratorTile)>
public "getEnergyCapacity"(): integer
public "isSmart"(): boolean
public "getExtractingEnergy"(): integer
public "getEnergyProducedEveryTick"(): integer
public "getSelf"(): $PitifulGeneratorTile
get "progressBar"(): $ProgressBarComponent<($PitifulGeneratorTile)>
get "energyCapacity"(): integer
get "smart"(): boolean
get "extractingEnergy"(): integer
get "energyProducedEveryTick"(): integer
get "self"(): $PitifulGeneratorTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PitifulGeneratorTile$$Type = ($PitifulGeneratorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PitifulGeneratorTile$$Original = $PitifulGeneratorTile;}
declare module "com.buuz135.industrial.block.tile.RangeManager" {
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$RangeManager$RangeType, $RangeManager$RangeType$$Type} from "com.buuz135.industrial.block.tile.RangeManager$RangeType"

export class $RangeManager {
constructor(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $RangeManager$RangeType$$Type)

public "getBox"(): $AABB
public "get"(arg0: integer): $VoxelShape
public "getType"(): $RangeManager$RangeType
public "getDirection"(): $Direction
public "getCurrent"(): $BlockPos
get "box"(): $AABB
get "type"(): $RangeManager$RangeType
get "direction"(): $Direction
get "current"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeManager$$Type = ($RangeManager);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RangeManager$$Original = $RangeManager;}
declare module "com.buuz135.industrial.block.transportstorage.tile.ConveyorTile" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ConveyorUpgrade} from "com.buuz135.industrial.api.conveyor.ConveyorUpgrade"
import {$IBlockContainer$$Interface} from "com.buuz135.industrial.api.IBlockContainer"
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$ConveyorUpgradeFactory, $ConveyorUpgradeFactory$$Type} from "com.buuz135.industrial.api.conveyor.ConveyorUpgradeFactory"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$ConveyorBlock$EnumType, $ConveyorBlock$EnumType$$Type} from "com.buuz135.industrial.block.transportstorage.ConveyorBlock$EnumType"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$AABB} from "net.minecraft.world.phys.AABB"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ConveyorTile extends $ActiveTile<($ConveyorTile)> implements $IBlockContainer$$Interface<($ConveyorUpgradeFactory)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "hasUpgrade"(arg0: $Direction$$Type): boolean
public "getConveyorType"(): $ConveyorBlock$EnumType
public "getUpgradeMap"(): $Map<($Direction), ($ConveyorUpgrade)>
public "setFacing"(arg0: $Direction$$Type): void
public "removeUpgrade"(arg0: $Direction$$Type, arg1: boolean): void
public "setSticky"(arg0: boolean): void
public "openGui"(arg0: $Player$$Type, arg1: $Direction$$Type): void
public "addUpgrade"(arg0: $Direction$$Type, arg1: $ConveyorUpgradeFactory$$Type): void
public "addUpgrade"(arg0: $Direction$$Type, arg1: any): void
public "handleEntityMovement"(arg0: $Entity$$Type): void
public "getBlockWorld"(): $Level
public "getEntityFilter"(): $List<(integer)>
public "requestSync"(): void
public "requestFluidSync"(): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ConveyorTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "isSticky"(): boolean
public "getFacing"(): $Direction
public "getCollisionBoxes"(): $List<($AABB)>
public "markForUpdate"(): void
public "setType"(arg0: $ConveyorBlock$EnumType$$Type): void
public "setColor"(arg0: integer): void
public "setColor"(arg0: $DyeColor$$Type): void
public "getSelf"(): $ActiveTile
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ConveyorTile$$Type): void
public "getColor"(): integer
public "getTank"(): $FluidTank
public "getBlockPosition"(): $BlockPos
public "getModelData"(): $ModelData
public "getPower"(): integer
get "conveyorType"(): $ConveyorBlock$EnumType
get "upgradeMap"(): $Map<($Direction), ($ConveyorUpgrade)>
set "facing"(value: $Direction$$Type)
set "sticky"(value: boolean)
get "blockWorld"(): $Level
get "entityFilter"(): $List<(integer)>
get "sticky"(): boolean
get "facing"(): $Direction
get "collisionBoxes"(): $List<($AABB)>
set "type"(value: $ConveyorBlock$EnumType$$Type)
set "color"(value: integer)
set "color"(value: $DyeColor$$Type)
get "self"(): $ActiveTile
get "color"(): integer
get "tank"(): $FluidTank
get "blockPosition"(): $BlockPos
get "modelData"(): $ModelData
get "power"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConveyorTile$$Type = ($ConveyorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorTile$$Original = $ConveyorTile;}
declare module "com.buuz135.industrial.block.generator.mycelial.IMycelialGeneratorType" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BiPredicate} from "java.util.function.BiPredicate"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Predicate} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MycelialGeneratorRecipe} from "com.buuz135.industrial.plugin.jei.generator.MycelialGeneratorRecipe"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"
import {$INBTSerializable$$Type} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$ShapedRecipeBuilder, $ShapedRecipeBuilder$$Type} from "net.minecraft.data.recipes.ShapedRecipeBuilder"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$IMycelialGeneratorType$Input} from "com.buuz135.industrial.block.generator.mycelial.IMycelialGeneratorType$Input"
import {$Item} from "net.minecraft.world.item.Item"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export interface $IMycelialGeneratorType$$Interface {
get "slotSize"(): integer
get "slotInputPredicates"(): $List<($BiPredicate<($ItemStack), (integer)>)>
get "tankInputPredicates"(): $List<($Predicate<($FluidStack)>)>
get "inputColors"(): ($DyeColor)[]
get "display"(): $Item
get "inputs"(): ($IMycelialGeneratorType$Input)[]
get "name"(): StringJS
}

export class $IMycelialGeneratorType implements $IMycelialGeneratorType$$Interface {
static readonly "TYPES": $List<($IMycelialGeneratorType)>

 "getSlotSize"(): integer
 "addIngredients"(arg0: $ShapedRecipeBuilder$$Type): $ShapedRecipeBuilder
 "canStart"(arg0: ($INBTSerializable$$Type<($CompoundTag$$Type)>)[]): boolean
 "getSlotInputPredicates"(): $List<($BiPredicate<($ItemStack), (integer)>)>
 "getTankInputPredicates"(): $List<($Predicate<($FluidStack)>)>
 "getTimeAndPowerGeneration"(arg0: ($INBTSerializable$$Type<($CompoundTag$$Type)>)[]): $Pair<(integer), (integer)>
 "getInputColors"(): ($DyeColor)[]
 "getDisplay"(): $Item
 "onTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getRecipes"(arg0: $RegistryAccess$$Type): $List<($MycelialGeneratorRecipe)>
 "getInputs"(): ($IMycelialGeneratorType$Input)[]
 "getName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMycelialGeneratorType$$Type = ($IMycelialGeneratorType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMycelialGeneratorType$$Original = $IMycelialGeneratorType;}
declare module "com.buuz135.industrial.block.transportstorage.TransporterBlock$Item" {
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Item} from "net.minecraft.world.item.Item"
import {$ISpecialCreativeTabItem$$Interface} from "com.hrznstudio.titanium.api.ISpecialCreativeTabItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$IndustrialBlockItem} from "com.buuz135.industrial.block.IndustrialBlockItem"

export class $TransporterBlock$Item extends $IndustrialBlockItem implements $ISpecialCreativeTabItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $TitaniumTab$$Type)

public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
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
export type $TransporterBlock$Item$$Type = ($TransporterBlock$Item);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransporterBlock$Item$$Original = $TransporterBlock$Item;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.WitherBuilderTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemStackHandler$$Type} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $WitherBuilderTile extends $IndustrialAreaWorkingTile<($WitherBuilderTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "getWorkingArea"(): $VoxelShape
public "getDefaultOrFind"(arg0: integer, arg1: $ItemStackHandler$$Type, arg2: $ItemStack$$Type): $ItemStack
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $ActiveTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "workingArea"(): $VoxelShape
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherBuilderTile$$Type = ($WitherBuilderTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WitherBuilderTile$$Original = $WitherBuilderTile;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.FluidLaserBaseTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$IndustrialMachineTile} from "com.buuz135.industrial.block.tile.IndustrialMachineTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ProgressBarComponent} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"
import {$ILaserBase$$Interface} from "com.buuz135.industrial.block.resourceproduction.tile.ILaserBase"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidLaserBaseTile extends $IndustrialMachineTile<($FluidLaserBaseTile)> implements $ILaserBase$$Interface<($FluidLaserBaseTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "canAcceptAugment"(arg0: $ItemStack$$Type): boolean
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "initClient"(): void
public "getBar"(): $ProgressBarComponent<($FluidLaserBaseTile)>
public "getSelf"(): $FluidLaserBaseTile
public "setChanged"(): void
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "bar"(): $ProgressBarComponent<($FluidLaserBaseTile)>
get "self"(): $FluidLaserBaseTile
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLaserBaseTile$$Type = ($FluidLaserBaseTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidLaserBaseTile$$Original = $FluidLaserBaseTile;}
declare module "com.buuz135.industrial.block.misc.StasisChamberBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$StasisChamberTile} from "com.buuz135.industrial.block.misc.tile.StasisChamberTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $StasisChamberBlock extends $IndustrialBlock<($StasisChamberTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($StasisChamberTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($StasisChamberTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StasisChamberBlock$$Type = ($StasisChamberBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StasisChamberBlock$$Original = $StasisChamberBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.FermentationStationBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$FermentationStationTile} from "com.buuz135.industrial.block.resourceproduction.tile.FermentationStationTile"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FermentationStationBlock extends $IndustrialBlock<($FermentationStationTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FermentationStationTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FermentationStationTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentationStationBlock$$Type = ($FermentationStationBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FermentationStationBlock$$Original = $FermentationStationBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.FluidPlacerTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPlacerTile extends $IndustrialAreaWorkingTile<($FluidPlacerTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $FluidPlacerTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $FluidPlacerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlacerTile$$Type = ($FluidPlacerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPlacerTile$$Original = $FluidPlacerTile;}
declare module "com.buuz135.industrial.block.core.PinkSlimeBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$SlimeBlock} from "net.minecraft.world.level.block.SlimeBlock"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IBlockLootTableProvider$$Interface} from "com.hrznstudio.titanium.datagenerator.loot.block.IBlockLootTableProvider"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $PinkSlimeBlock extends $SlimeBlock implements $IBlockLootTableProvider$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($SlimeBlock)>
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

public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "getLootTable"(arg0: any): $LootTable$Builder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PinkSlimeBlock$$Type = ($PinkSlimeBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PinkSlimeBlock$$Original = $PinkSlimeBlock;}
declare module "com.buuz135.industrial.block.tool.InfinityBackpackBlock" {
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RotatableBlock} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$InfinityBackpackTile} from "com.buuz135.industrial.block.tool.tile.InfinityBackpackTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $InfinityBackpackBlock extends $RotatableBlock<($InfinityBackpackTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "UPDATE_MOVE_BY_PISTON": integer
static "NORTH_SHAPE": $VoxelShape
static readonly "UPDATE_LIMIT": integer
static readonly "BLOCK_STATE_REGISTRY": $IdMapper<($BlockState)>
static readonly "UPDATE_ALL": integer
static readonly "UPDATE_ALL_IMMEDIATE": integer
static "SOUTH_SHAPE": $VoxelShape
static "WEST_SHAPE": $VoxelShape
static "EAST_SHAPE": $VoxelShape
static readonly "UPDATE_KNOWN_SHAPE": integer
static readonly "UPDATE_SUPPRESS_DROPS": integer
static readonly "INSTANT": float
static readonly "UPDATE_CLIENTS": integer
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
public "getDynamicDrops"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getRotationType"(): $RotatableBlock$RotationType
public "asItem"(): $Item
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "getLootTable"(arg0: any): $LootTable$Builder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityBackpackBlock$$Type = ($InfinityBackpackBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityBackpackBlock$$Original = $InfinityBackpackBlock;}
declare module "com.buuz135.industrial.block.tile.IndustrialGeneratorTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BlockWithTile$$Type} from "com.hrznstudio.titanium.module.BlockWithTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$GeneratorTile} from "com.hrznstudio.titanium.block.tile.GeneratorTile"

export class $IndustrialGeneratorTile<T extends $IndustrialGeneratorTile<(object)>> extends $GeneratorTile<(T)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockWithTile$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $ItemInteractionResult
public "initClient"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialGeneratorTile$$Type<T> = ($IndustrialGeneratorTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndustrialGeneratorTile$$Original<T> = $IndustrialGeneratorTile<(T)>;}
declare module "com.buuz135.industrial.block.resourceproduction.FluidCollectorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$FluidCollectorTile} from "com.buuz135.industrial.block.resourceproduction.tile.FluidCollectorTile"

export class $FluidCollectorBlock extends $IndustrialBlock<($FluidCollectorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidCollectorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidCollectorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidCollectorBlock$$Type = ($FluidCollectorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidCollectorBlock$$Original = $FluidCollectorBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.BlockBreakerTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockBreakerTile extends $IndustrialAreaWorkingTile<($BlockBreakerTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $BlockBreakerTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $BlockBreakerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBreakerTile$$Type = ($BlockBreakerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBreakerTile$$Original = $BlockBreakerTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.AnimalFeederTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AnimalFeederTile extends $IndustrialAreaWorkingTile<($AnimalFeederTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $AnimalFeederTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $AnimalFeederTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalFeederTile$$Type = ($AnimalFeederTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalFeederTile$$Original = $AnimalFeederTile;}
declare module "com.buuz135.industrial.block.resourceproduction.FluidLaserBaseBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$FluidLaserBaseTile} from "com.buuz135.industrial.block.resourceproduction.tile.FluidLaserBaseTile"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidLaserBaseBlock extends $IndustrialBlock<($FluidLaserBaseTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidLaserBaseTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidLaserBaseTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidLaserBaseBlock$$Type = ($FluidLaserBaseBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidLaserBaseBlock$$Original = $FluidLaserBaseBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.WaterCondensatorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$WaterCondensatorTile} from "com.buuz135.industrial.block.resourceproduction.tile.WaterCondensatorTile"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $WaterCondensatorBlock extends $IndustrialBlock<($WaterCondensatorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WaterCondensatorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WaterCondensatorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterCondensatorBlock$$Type = ($WaterCondensatorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaterCondensatorBlock$$Original = $WaterCondensatorBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.AnimalRancherBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$AnimalRancherTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.AnimalRancherTile"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $AnimalRancherBlock extends $IndustrialBlock<($AnimalRancherTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalRancherTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalRancherTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalRancherBlock$$Type = ($AnimalRancherBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalRancherBlock$$Original = $AnimalRancherBlock;}
declare module "com.buuz135.industrial.block.misc.tile.MobDetectorTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MobDetectorTile extends $IndustrialAreaWorkingTile<($MobDetectorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getRedstoneSignal"(): integer
public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $ActiveTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "redstoneSignal"(): integer
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDetectorTile$$Type = ($MobDetectorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobDetectorTile$$Original = $MobDetectorTile;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.OreLaserBaseTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$IndustrialMachineTile} from "com.buuz135.industrial.block.tile.IndustrialMachineTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ProgressBarComponent} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"
import {$ILaserBase$$Interface} from "com.buuz135.industrial.block.resourceproduction.tile.ILaserBase"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $OreLaserBaseTile extends $IndustrialMachineTile<($OreLaserBaseTile)> implements $ILaserBase$$Interface<($OreLaserBaseTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "canAcceptAugment"(arg0: $ItemStack$$Type): boolean
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "initClient"(): void
public "getBar"(): $ProgressBarComponent<($OreLaserBaseTile)>
public "getSelf"(): $ActiveTile
public "setChanged"(): void
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "bar"(): $ProgressBarComponent<($OreLaserBaseTile)>
get "self"(): $ActiveTile
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OreLaserBaseTile$$Type = ($OreLaserBaseTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OreLaserBaseTile$$Original = $OreLaserBaseTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.SewageComposterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$SewageComposterTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.SewageComposterTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SewageComposterBlock extends $IndustrialBlock<($SewageComposterTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SewageComposterTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SewageComposterTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SewageComposterBlock$$Type = ($SewageComposterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SewageComposterBlock$$Original = $SewageComposterBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.MobCrusherBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$MobCrusherTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.MobCrusherTile"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MobCrusherBlock extends $IndustrialBlock<($MobCrusherTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobCrusherTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobCrusherTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobCrusherBlock$$Type = ($MobCrusherBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobCrusherBlock$$Original = $MobCrusherBlock;}
declare module "com.buuz135.industrial.block.MachineFrameBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BasicBlock} from "com.hrznstudio.titanium.block.BasicBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MachineFrameBlock extends $BasicBlock {
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

constructor(arg0: $Rarity$$Type, arg1: $TitaniumTab$$Type)

public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "getLootTable"(arg0: any): $LootTable$Builder
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
declare module "com.buuz135.industrial.block.resourceproduction.tile.MaterialStoneWorkFactoryTile$StoneWorkAction" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level} from "net.minecraft.world.level.Level"

export class $MaterialStoneWorkFactoryTile$StoneWorkAction {
public "getWork"(): $BiFunction<($Level), ($ItemStack), ($ItemStack)>
public "getShrinkAmount"(): integer
public "getIcon"(): $ItemStack
public "getAction"(): StringJS
get "work"(): $BiFunction<($Level), ($ItemStack), ($ItemStack)>
get "shrinkAmount"(): integer
get "icon"(): $ItemStack
get "action"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialStoneWorkFactoryTile$StoneWorkAction$$Type = ($MaterialStoneWorkFactoryTile$StoneWorkAction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialStoneWorkFactoryTile$StoneWorkAction$$Original = $MaterialStoneWorkFactoryTile$StoneWorkAction;}
declare module "com.buuz135.industrial.block.core.FluidExtractorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FluidExtractorTile} from "com.buuz135.industrial.block.core.tile.FluidExtractorTile"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidExtractorBlock extends $IndustrialBlock<($FluidExtractorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidExtractorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidExtractorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidExtractorBlock$$Type = ($FluidExtractorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidExtractorBlock$$Original = $FluidExtractorBlock;}
declare module "com.buuz135.industrial.block.generator.tile.BiofuelGeneratorTile" {
import {$IndustrialGeneratorTile} from "com.buuz135.industrial.block.tile.IndustrialGeneratorTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ProgressBarComponent} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BiofuelGeneratorTile extends $IndustrialGeneratorTile<($BiofuelGeneratorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "consumeFuel"(): integer
public "canStart"(): boolean
public "getProgressBar"(): $ProgressBarComponent
public "getEnergyCapacity"(): integer
public "getExtractingEnergy"(): integer
public "getEnergyProducedEveryTick"(): integer
public "getSelf"(): $BiofuelGeneratorTile
get "progressBar"(): $ProgressBarComponent
get "energyCapacity"(): integer
get "extractingEnergy"(): integer
get "energyProducedEveryTick"(): integer
get "self"(): $BiofuelGeneratorTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiofuelGeneratorTile$$Type = ($BiofuelGeneratorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiofuelGeneratorTile$$Original = $BiofuelGeneratorTile;}
declare module "com.buuz135.industrial.block.resourceproduction.MarineFisherBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$MarineFisherTile} from "com.buuz135.industrial.block.resourceproduction.tile.MarineFisherTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MarineFisherBlock extends $IndustrialBlock<($MarineFisherTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MarineFisherTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MarineFisherTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarineFisherBlock$$Type = ($MarineFisherBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MarineFisherBlock$$Original = $MarineFisherBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.SewerTile" {
import {$SidedFluidTankComponent} from "com.hrznstudio.titanium.component.fluid.SidedFluidTankComponent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SewerTile extends $IndustrialAreaWorkingTile<($SewerTile)> {
 "essence": $SidedFluidTankComponent<($SewerTile)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "sewage": $SidedFluidTankComponent<($SewerTile)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $SewerTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $SewerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SewerTile$$Type = ($SewerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SewerTile$$Original = $SewerTile;}
declare module "com.buuz135.industrial.block.misc.tile.EnchantmentSorterTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantmentSorterTile extends $IndustrialProcessingTile<($EnchantmentSorterTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "canIncrease"(): boolean
public "getSelf"(): $EnchantmentSorterTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $EnchantmentSorterTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentSorterTile$$Type = ($EnchantmentSorterTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentSorterTile$$Original = $EnchantmentSorterTile;}
declare module "com.buuz135.industrial.block.misc.tile.StasisChamberTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StasisChamberTile extends $IndustrialAreaWorkingTile<($StasisChamberTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "getWorkingArea"(): $VoxelShape
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $StasisChamberTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "workingArea"(): $VoxelShape
get "self"(): $StasisChamberTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StasisChamberTile$$Type = ($StasisChamberTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StasisChamberTile$$Original = $StasisChamberTile;}
declare module "com.buuz135.industrial.block.tile.IndustrialWorkingTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IAssetProvider} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$List} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockWithTile$$Type} from "com.hrznstudio.titanium.module.BlockWithTile"
import {$IndustrialMachineTile} from "com.buuz135.industrial.block.tile.IndustrialMachineTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IndustrialWorkingTile<T extends $IndustrialWorkingTile<(object)>> extends $IndustrialMachineTile<(T)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockWithTile$$Type, arg1: integer, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "canAcceptAugment"(arg0: $ItemStack$$Type): boolean
public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $ItemInteractionResult
public "hasEnergy"(arg0: integer): boolean
public "getAssetProvider"(): $IAssetProvider
public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "assetProvider"(): $IAssetProvider
get "maxProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialWorkingTile$$Type<T> = ($IndustrialWorkingTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndustrialWorkingTile$$Original<T> = $IndustrialWorkingTile<(T)>;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.AnimalFeederBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$AnimalFeederTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.AnimalFeederTile"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $AnimalFeederBlock extends $IndustrialBlock<($AnimalFeederTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalFeederTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($AnimalFeederTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalFeederBlock$$Type = ($AnimalFeederBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalFeederBlock$$Original = $AnimalFeederBlock;}
declare module "com.buuz135.industrial.block.tile.IndustrialMachineTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IAssetProvider} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$IMachineSettings$$Interface} from "com.buuz135.industrial.api.IMachineSettings"
import {$List} from "java.util.List"
import {$IRedstoneReader$$Interface} from "com.hrznstudio.titanium.api.redstone.IRedstoneReader"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MachineTile} from "com.hrznstudio.titanium.block.tile.MachineTile"
import {$RedstoneAction} from "com.hrznstudio.titanium.block.redstone.RedstoneAction"
import {$IRedstoneState} from "com.hrznstudio.titanium.api.redstone.IRedstoneState"
import {$FluidTankComponent$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockWithTile$$Type} from "com.hrznstudio.titanium.module.BlockWithTile"
import {$RedstoneManager} from "com.hrznstudio.titanium.block.redstone.RedstoneManager"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IndustrialMachineTile<T extends $IndustrialMachineTile<(object)>> extends $MachineTile<(T)> implements $IRedstoneReader$$Interface, $IMachineSettings$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockWithTile$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "canAcceptAugment"(arg0: $ItemStack$$Type): boolean
public "setUuid"(arg0: StringJS): void
public "addTank"(arg0: $FluidTankComponent$$Type<(T)>): void
public "initClient"(): void
public "onNeighborChanged"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
public "getAssetProvider"(): $IAssetProvider
public "getRedstoneManager"(): $RedstoneManager<($RedstoneAction)>
public "getEnvironmentValue"(arg0: boolean, arg1: $Direction$$Type): $IRedstoneState
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "getUuid"(): StringJS
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
set "uuid"(value: StringJS)
get "assetProvider"(): $IAssetProvider
get "redstoneManager"(): $RedstoneManager<($RedstoneAction)>
get "uuid"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialMachineTile$$Type<T> = ($IndustrialMachineTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndustrialMachineTile$$Original<T> = $IndustrialMachineTile<(T)>;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.PlantGathererBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$PlantGathererTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.PlantGathererTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $PlantGathererBlock extends $IndustrialBlock<($PlantGathererTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantGathererTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantGathererTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantGathererBlock$$Type = ($PlantGathererBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlantGathererBlock$$Original = $PlantGathererBlock;}
declare module "com.buuz135.industrial.block.misc.tile.EnchantmentExtractorTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantmentExtractorTile extends $IndustrialProcessingTile<($EnchantmentExtractorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "getMaxProgress"(): integer
public "canIncrease"(): boolean
public "getSelf"(): $ActiveTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentExtractorTile$$Type = ($EnchantmentExtractorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentExtractorTile$$Original = $EnchantmentExtractorTile;}
declare module "com.buuz135.industrial.block.IndustrialBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BasicTile} from "com.hrznstudio.titanium.block.tile.BasicTile"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$RotatableBlock} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class$$Type} from "java.lang.Class"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IndustrialBlock<T extends $BasicTile<(object)>> extends $RotatableBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor(arg0: StringJS, arg1: $BlockBehaviour$Properties$$Type, arg2: $Class$$Type<(T)>, arg3: $TitaniumTab$$Type)

public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialBlock$$Type<T> = ($IndustrialBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndustrialBlock$$Original<T> = $IndustrialBlock<(T)>;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.FermentationStationTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable} from "java.lang.Runnable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FermentationStationTile extends $IndustrialProcessingTile<($FermentationStationTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FermentationStationTile$$Type): void
public "getMaxProgress"(): integer
public "canIncrease"(): boolean
public "getSelf"(): $ActiveTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FermentationStationTile$$Type = ($FermentationStationTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FermentationStationTile$$Original = $FermentationStationTile;}
declare module "com.buuz135.industrial.block.core.tile.FluidExtractorTile$FluidExtractionProgress" {
import {$Level$$Type} from "net.minecraft.world.level.Level"

export class $FluidExtractorTile$FluidExtractionProgress {
constructor(arg0: $Level$$Type)

public "getBreakID"(): integer
public "getProgress"(): integer
public "setProgress"(arg0: integer): void
get "breakID"(): integer
get "progress"(): integer
set "progress"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidExtractorTile$FluidExtractionProgress$$Type = ($FluidExtractorTile$FluidExtractionProgress);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidExtractorTile$FluidExtractionProgress$$Original = $FluidExtractorTile$FluidExtractionProgress;}
declare module "com.buuz135.industrial.block.resourceproduction.ResourcefulFurnaceBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourcefulFurnaceTile} from "com.buuz135.industrial.block.resourceproduction.tile.ResourcefulFurnaceTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ResourcefulFurnaceBlock extends $IndustrialBlock<($ResourcefulFurnaceTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($ResourcefulFurnaceTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($ResourcefulFurnaceTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcefulFurnaceBlock$$Type = ($ResourcefulFurnaceBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourcefulFurnaceBlock$$Original = $ResourcefulFurnaceBlock;}
declare module "com.buuz135.industrial.block.misc.EnchantmentFactoryBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$EnchantmentFactoryTile} from "com.buuz135.industrial.block.misc.tile.EnchantmentFactoryTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantmentFactoryBlock extends $IndustrialBlock<($EnchantmentFactoryTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentFactoryTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentFactoryTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentFactoryBlock$$Type = ($EnchantmentFactoryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentFactoryBlock$$Original = $EnchantmentFactoryBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.SlaughterFactoryBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$SlaughterFactoryTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.SlaughterFactoryTile"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SlaughterFactoryBlock extends $IndustrialBlock<($SlaughterFactoryTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SlaughterFactoryTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SlaughterFactoryTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlaughterFactoryBlock$$Type = ($SlaughterFactoryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlaughterFactoryBlock$$Original = $SlaughterFactoryBlock;}
declare module "com.buuz135.industrial.block.misc.InfinityChargerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$InfinityChargerTile} from "com.buuz135.industrial.block.misc.tile.InfinityChargerTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $InfinityChargerBlock extends $IndustrialBlock<($InfinityChargerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($InfinityChargerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($InfinityChargerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityChargerBlock$$Type = ($InfinityChargerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityChargerBlock$$Original = $InfinityChargerBlock;}
declare module "com.buuz135.industrial.block.generator.tile.BioReactorTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BioReactorTile extends $IndustrialWorkingTile<($BioReactorTile)> {
static "VALID": ($TagKey<($Item)>)[]
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $ActiveTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BioReactorTile$$Type = ($BioReactorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BioReactorTile$$Original = $BioReactorTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.PlantSowerTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlantSowerTile extends $IndustrialAreaWorkingTile<($PlantSowerTile)> {
static "COLORS": ($DyeColor)[]
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $PlantSowerTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $PlantSowerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantSowerTile$$Type = ($PlantSowerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlantSowerTile$$Original = $PlantSowerTile;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.FluidSievingMachineTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidSievingMachineTile extends $IndustrialProcessingTile<($FluidSievingMachineTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "canIncrease"(): boolean
public "getSelf"(): $FluidSievingMachineTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $FluidSievingMachineTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSievingMachineTile$$Type = ($FluidSievingMachineTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidSievingMachineTile$$Original = $FluidSievingMachineTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.MobDuplicatorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MobDuplicatorTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.MobDuplicatorTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MobDuplicatorBlock extends $IndustrialBlock<($MobDuplicatorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobDuplicatorTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MobDuplicatorTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDuplicatorBlock$$Type = ($MobDuplicatorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobDuplicatorBlock$$Original = $MobDuplicatorBlock;}
declare module "com.buuz135.industrial.block.tile.RangeManager$RangeType" {
import {$BiFunction} from "java.util.function.BiFunction"
import {$Enum} from "java.lang.Enum"
import {$Direction} from "net.minecraft.core.Direction"
import {$RangeManager} from "com.buuz135.industrial.block.tile.RangeManager"
import {$AABB} from "net.minecraft.world.phys.AABB"

export class $RangeManager$RangeType extends $Enum<($RangeManager$RangeType)> {
static readonly "TOP_UP": $RangeManager$RangeType
static readonly "BEHIND": $RangeManager$RangeType
static readonly "TOP": $RangeManager$RangeType
static readonly "FRONT": $RangeManager$RangeType
static readonly "BOTTOM": $RangeManager$RangeType

public "getOffsetCreation"(): $BiFunction<($Direction), ($AABB), ($AABB)>
public "getOffsetRange"(): $BiFunction<($RangeManager), (integer), ($AABB)>
public static "values"(): ($RangeManager$RangeType)[]
public static "valueOf"(arg0: StringJS): $RangeManager$RangeType
get "offsetCreation"(): $BiFunction<($Direction), ($AABB), ($AABB)>
get "offsetRange"(): $BiFunction<($RangeManager), (integer), ($AABB)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeManager$RangeType$$Type = (("front") | ("behind") | ("top") | ("top_up") | ("bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RangeManager$RangeType$$Original = $RangeManager$RangeType;}
declare module "com.buuz135.industrial.block.generator.MycelialReactorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$MycelialReactorTile} from "com.buuz135.industrial.block.generator.tile.MycelialReactorTile"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MycelialReactorBlock extends $IndustrialBlock<($MycelialReactorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MycelialReactorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "useWithoutItem"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $BlockHitResult$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MycelialReactorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialReactorBlock$$Type = ($MycelialReactorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MycelialReactorBlock$$Original = $MycelialReactorBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.LaserDrillBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LaserDrillTile} from "com.buuz135.industrial.block.resourceproduction.tile.LaserDrillTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LaserDrillBlock extends $IndustrialBlock<($LaserDrillTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($LaserDrillTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "animateTick"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $RandomSource$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($LaserDrillTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserDrillBlock$$Type = ($LaserDrillBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LaserDrillBlock$$Original = $LaserDrillBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.PlantFertilizerTile" {
import {$SidedInventoryComponent} from "com.hrznstudio.titanium.component.inventory.SidedInventoryComponent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlantFertilizerTile extends $IndustrialAreaWorkingTile<($PlantFertilizerTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "fertilizer": $SidedInventoryComponent<($PlantFertilizerTile)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $PlantFertilizerTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $PlantFertilizerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantFertilizerTile$$Type = ($PlantFertilizerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlantFertilizerTile$$Original = $PlantFertilizerTile;}
declare module "com.buuz135.industrial.block.misc.EnchantmentApplicatorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$EnchantmentApplicatorTile} from "com.buuz135.industrial.block.misc.tile.EnchantmentApplicatorTile"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantmentApplicatorBlock extends $IndustrialBlock<($EnchantmentApplicatorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentApplicatorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentApplicatorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentApplicatorBlock$$Type = ($EnchantmentApplicatorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentApplicatorBlock$$Original = $EnchantmentApplicatorBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.MobDuplicatorTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MobDuplicatorTile extends $IndustrialAreaWorkingTile<($MobDuplicatorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "getMaxProgress"(): integer
public "getWorkingArea"(): $VoxelShape
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $MobDuplicatorTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "workingArea"(): $VoxelShape
get "self"(): $MobDuplicatorTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobDuplicatorTile$$Type = ($MobDuplicatorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobDuplicatorTile$$Original = $MobDuplicatorTile;}
declare module "com.buuz135.industrial.block.misc.tile.EnchantmentApplicatorTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Runnable} from "java.lang.Runnable"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantmentApplicatorTile extends $IndustrialProcessingTile<($EnchantmentApplicatorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "initClient"(): void
public static "drainAmount"(arg0: integer, arg1: $IFluidHandler$$Type): integer
public "getMaxProgress"(): integer
public "updateRepairOutput"(): $Pair<($ItemStack), (integer)>
public static "getMatchingAmount"(arg0: $IFluidHandler$$Type): integer
public static "getEssenceConsumed"(arg0: integer): integer
public "canIncrease"(): boolean
public "getSelf"(): $EnchantmentApplicatorTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $EnchantmentApplicatorTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentApplicatorTile$$Type = ($EnchantmentApplicatorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentApplicatorTile$$Original = $EnchantmentApplicatorTile;}
declare module "com.buuz135.industrial.block.transportstorage.ConveyorBlock$ConveyorItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ConveyorBlock$ConveyorItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

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
export type $ConveyorBlock$ConveyorItem$$Type = ($ConveyorBlock$ConveyorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConveyorBlock$ConveyorItem$$Original = $ConveyorBlock$ConveyorItem;}
declare module "com.buuz135.industrial.block.resourceproduction.FluidSievingMachineBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FluidSievingMachineTile} from "com.buuz135.industrial.block.resourceproduction.tile.FluidSievingMachineTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidSievingMachineBlock extends $IndustrialBlock<($FluidSievingMachineTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidSievingMachineTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidSievingMachineTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidSievingMachineBlock$$Type = ($FluidSievingMachineBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidSievingMachineBlock$$Original = $FluidSievingMachineBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.PlantFertilizerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PlantFertilizerTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.PlantFertilizerTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $PlantFertilizerBlock extends $IndustrialBlock<($PlantFertilizerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantFertilizerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantFertilizerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantFertilizerBlock$$Type = ($PlantFertilizerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlantFertilizerBlock$$Original = $PlantFertilizerBlock;}
declare module "com.buuz135.industrial.block.generator.PitifulGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PitifulGeneratorTile} from "com.buuz135.industrial.block.generator.tile.PitifulGeneratorTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $PitifulGeneratorBlock extends $IndustrialBlock<($PitifulGeneratorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PitifulGeneratorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PitifulGeneratorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PitifulGeneratorBlock$$Type = ($PitifulGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PitifulGeneratorBlock$$Original = $PitifulGeneratorBlock;}
declare module "com.buuz135.industrial.block.transportstorage.ConveyorBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$SimpleWaterloggedBlock$$Interface} from "net.minecraft.world.level.block.SimpleWaterloggedBlock"
import {$ConveyorBlock$ConveyorItem} from "com.buuz135.industrial.block.transportstorage.ConveyorBlock$ConveyorItem"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BasicTileBlock} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ConveyorTile} from "com.buuz135.industrial.block.transportstorage.tile.ConveyorTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ConveyorBlock$EnumType} from "com.buuz135.industrial.block.transportstorage.ConveyorBlock$EnumType"
import {$EnumProperty} from "net.minecraft.world.level.block.state.properties.EnumProperty"
import {$IRecipeProvider$$Interface} from "com.hrznstudio.titanium.api.IRecipeProvider"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$FluidState, $FluidState$$Type} from "net.minecraft.world.level.material.FluidState"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $ConveyorBlock extends $BasicTileBlock<($ConveyorTile)> implements $SimpleWaterloggedBlock$$Interface, $IRecipeProvider$$Interface {
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
static readonly "FACING": $DirectionProperty
static readonly "TYPE": $EnumProperty<($ConveyorBlock$EnumType)>

constructor(arg0: $TitaniumTab$$Type)

public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($ConveyorTile)>
public "hasCustomBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getFacingUpgradeHit"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): $Direction
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "isPossibleToRespawnInThis"(arg0: $BlockState$$Type): boolean
public "getStateAtViewpoint"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Vec3$$Type): $BlockState
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getItem"(): $ConveyorBlock$ConveyorItem
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "useItemOn"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $InteractionHand$$Type, arg6: $BlockHitResult$$Type): $ItemInteractionResult
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "entityInside"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Entity$$Type): void
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public "getDirectSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "hasIndividualRenderVoxelShape"(): boolean
public "getPickupSound"(): $Optional<($SoundEvent)>
public "placeLiquid"(arg0: $LevelAccessor$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $FluidState$$Type): boolean
public "canPlaceLiquid"(arg0: $Player$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $Fluid$$Type): boolean
public "pickupBlock"(arg0: $Player$$Type, arg1: $LevelAccessor$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type): $ItemStack
public "getPickupSound"(arg0: $BlockState$$Type): $Optional<($SoundEvent)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($ConveyorTile)>
get "pickupSound"(): $Optional<($SoundEvent)>
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
declare module "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction" {
import {$IndustrialWorkingTile$$Type} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile"

export class $IndustrialWorkingTile$WorkAction {
constructor(arg0: $IndustrialWorkingTile$$Type, arg1: float, arg2: integer)

public "getEnergyConsumed"(): integer
public "getWorkAmount"(): float
get "energyConsumed"(): integer
get "workAmount"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialWorkingTile$WorkAction$$Type = ($IndustrialWorkingTile$WorkAction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndustrialWorkingTile$WorkAction$$Original = $IndustrialWorkingTile$WorkAction;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.WitherBuilderBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$WitherBuilderTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.WitherBuilderTile"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $WitherBuilderBlock extends $IndustrialBlock<($WitherBuilderTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WitherBuilderTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WitherBuilderTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitherBuilderBlock$$Type = ($WitherBuilderBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WitherBuilderBlock$$Original = $WitherBuilderBlock;}
declare module "com.buuz135.industrial.block.generator.BiofuelGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$BiofuelGeneratorTile} from "com.buuz135.industrial.block.generator.tile.BiofuelGeneratorTile"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BiofuelGeneratorBlock extends $IndustrialBlock<($BiofuelGeneratorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BiofuelGeneratorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BiofuelGeneratorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BiofuelGeneratorBlock$$Type = ($BiofuelGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BiofuelGeneratorBlock$$Original = $BiofuelGeneratorBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.BlockPlacerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockPlacerTile} from "com.buuz135.industrial.block.resourceproduction.tile.BlockPlacerTile"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockPlacerBlock extends $IndustrialBlock<($BlockPlacerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlockPlacerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlockPlacerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerBlock$$Type = ($BlockPlacerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPlacerBlock$$Original = $BlockPlacerBlock;}
declare module "com.buuz135.industrial.block.misc.EnchantmentExtractorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$EnchantmentExtractorTile} from "com.buuz135.industrial.block.misc.tile.EnchantmentExtractorTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantmentExtractorBlock extends $IndustrialBlock<($EnchantmentExtractorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentExtractorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentExtractorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentExtractorBlock$$Type = ($EnchantmentExtractorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentExtractorBlock$$Original = $EnchantmentExtractorBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.DyeMixerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$DyeMixerTile} from "com.buuz135.industrial.block.resourceproduction.tile.DyeMixerTile"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $DyeMixerBlock extends $IndustrialBlock<($DyeMixerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DyeMixerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DyeMixerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeMixerBlock$$Type = ($DyeMixerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyeMixerBlock$$Original = $DyeMixerBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.MaterialStoneWorkFactoryTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$MaterialStoneWorkFactoryTile$StoneWorkAction} from "com.buuz135.industrial.block.resourceproduction.tile.MaterialStoneWorkFactoryTile$StoneWorkAction"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Runnable} from "java.lang.Runnable"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StoneWorkGenerateRecipe} from "com.buuz135.industrial.recipe.StoneWorkGenerateRecipe"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MaterialStoneWorkFactoryTile extends $IndustrialProcessingTile<($MaterialStoneWorkFactoryTile)> {
static "ACTION_RECIPES": ($MaterialStoneWorkFactoryTile$StoneWorkAction)[]
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static "DEFAULT": $ResourceLocation

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "getRecipe"(): $Optional<($StoneWorkGenerateRecipe)>
public "getNextRecipe"(arg0: boolean): $ResourceLocation
public "getMaxProgress"(): integer
public "canIncrease"(): boolean
public "getSelf"(): $ActiveTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "recipe"(): $Optional<($StoneWorkGenerateRecipe)>
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MaterialStoneWorkFactoryTile$$Type = ($MaterialStoneWorkFactoryTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MaterialStoneWorkFactoryTile$$Original = $MaterialStoneWorkFactoryTile;}
declare module "com.buuz135.industrial.block.core.DissolutionChamberBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DissolutionChamberTile} from "com.buuz135.industrial.block.core.tile.DissolutionChamberTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $DissolutionChamberBlock extends $IndustrialBlock<($DissolutionChamberTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DissolutionChamberTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DissolutionChamberTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DissolutionChamberBlock$$Type = ($DissolutionChamberBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DissolutionChamberBlock$$Original = $DissolutionChamberBlock;}
declare module "com.buuz135.industrial.block.misc.EnchantmentSorterBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$EnchantmentSorterTile} from "com.buuz135.industrial.block.misc.tile.EnchantmentSorterTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantmentSorterBlock extends $IndustrialBlock<($EnchantmentSorterTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentSorterTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnchantmentSorterTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentSorterBlock$$Type = ($EnchantmentSorterBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentSorterBlock$$Original = $EnchantmentSorterBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.SewerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$SewerTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.SewerTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SewerBlock extends $IndustrialBlock<($SewerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SewerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SewerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SewerBlock$$Type = ($SewerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SewerBlock$$Original = $SewerBlock;}
declare module "com.buuz135.industrial.block.generator.MycelialGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IMycelialGeneratorType, $IMycelialGeneratorType$$Type} from "com.buuz135.industrial.block.generator.mycelial.IMycelialGeneratorType"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$MycelialGeneratorTile} from "com.buuz135.industrial.block.generator.tile.MycelialGeneratorTile"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MycelialGeneratorBlock extends $IndustrialBlock<($MycelialGeneratorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor(arg0: $IMycelialGeneratorType$$Type)

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MycelialGeneratorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getType"(): $IMycelialGeneratorType
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MycelialGeneratorTile)>
get "rotationType"(): $RotatableBlock$RotationType
get "type"(): $IMycelialGeneratorType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialGeneratorBlock$$Type = ($MycelialGeneratorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MycelialGeneratorBlock$$Original = $MycelialGeneratorBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.MobCrusherTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MobCrusherTile extends $IndustrialAreaWorkingTile<($MobCrusherTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "getMaxProgress"(): integer
public "getWorkingArea"(): $VoxelShape
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $MobCrusherTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "workingArea"(): $VoxelShape
get "self"(): $MobCrusherTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobCrusherTile$$Type = ($MobCrusherTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobCrusherTile$$Original = $MobCrusherTile;}
declare module "com.buuz135.industrial.block.tool.tile.InfinityBackpackTile" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BasicTile} from "com.hrznstudio.titanium.block.tile.BasicTile"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IButtonHandler$$Interface} from "com.hrznstudio.titanium.network.IButtonHandler"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$MenuProvider, $MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ContainerLevelAccess} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ITickableBlockEntity$$Interface} from "com.hrznstudio.titanium.block.tile.ITickableBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $InfinityBackpackTile extends $BasicTile<($InfinityBackpackTile)> implements $MenuProvider$$Interface, $IScreenAddonProvider$$Interface, $IButtonHandler$$Interface, $ITickableBlockEntity$$Interface<($InfinityBackpackTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getBackpack"(): $ItemStack
public "setBackpack"(arg0: $ItemStack$$Type): void
public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $ItemInteractionResult
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getWorldPosCallable"(): $ContainerLevelAccess
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $InfinityBackpackTile$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getStackMenuProvider"(): $MenuProvider
public "getDisplayName"(): $Component
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $InfinityBackpackTile$$Type): void
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "backpack"(): $ItemStack
set "backpack"(value: $ItemStack$$Type)
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "worldPosCallable"(): $ContainerLevelAccess
get "stackMenuProvider"(): $MenuProvider
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityBackpackTile$$Type = ($InfinityBackpackTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityBackpackTile$$Original = $InfinityBackpackTile;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.ResourcefulFurnaceTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ResourcefulFurnaceTile extends $IndustrialProcessingTile<($ResourcefulFurnaceTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "canIncrease"(): boolean
public "onLoad"(): void
public "getSelf"(): $ResourcefulFurnaceTile
public "onFinish"(): $Runnable
public "setChanged"(): void
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "self"(): $ResourcefulFurnaceTile
get "changed"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResourcefulFurnaceTile$$Type = ($ResourcefulFurnaceTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResourcefulFurnaceTile$$Original = $ResourcefulFurnaceTile;}
declare module "com.buuz135.industrial.block.resourceproduction.PotionBrewerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$PotionBrewerTile} from "com.buuz135.industrial.block.resourceproduction.tile.PotionBrewerTile"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $PotionBrewerBlock extends $IndustrialBlock<($PotionBrewerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PotionBrewerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PotionBrewerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewerBlock$$Type = ($PotionBrewerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewerBlock$$Original = $PotionBrewerBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.WaterCondensatorTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$IndustrialWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WaterCondensatorTile extends $IndustrialWorkingTile<($WaterCondensatorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $ActiveTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WaterCondensatorTile$$Type = ($WaterCondensatorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WaterCondensatorTile$$Original = $WaterCondensatorTile;}
declare module "com.buuz135.industrial.block.core.tile.FluidExtractorTile" {
import {$FluidExtractorTile$FluidExtractionProgress} from "com.buuz135.industrial.block.core.tile.FluidExtractorTile$FluidExtractionProgress"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FluidExtractorRecipe} from "com.buuz135.industrial.recipe.FluidExtractorRecipe"
import {$ChunkPos} from "net.minecraft.world.level.ChunkPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$HashMap} from "java.util.HashMap"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$DimensionType} from "net.minecraft.world.level.dimension.DimensionType"

export class $FluidExtractorTile extends $IndustrialAreaWorkingTile<($FluidExtractorTile)> {
static "EXTRACTION": $HashMap<($DimensionType), ($HashMap<($ChunkPos), ($HashMap<($BlockPos), ($FluidExtractorTile$FluidExtractionProgress)>)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "findRecipe"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $FluidExtractorRecipe
public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $FluidExtractorTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $FluidExtractorTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidExtractorTile$$Type = ($FluidExtractorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidExtractorTile$$Original = $FluidExtractorTile;}
declare module "com.buuz135.industrial.block.generator.BioReactorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BioReactorTile} from "com.buuz135.industrial.block.generator.tile.BioReactorTile"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BioReactorBlock extends $IndustrialBlock<($BioReactorTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BioReactorTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BioReactorTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BioReactorBlock$$Type = ($BioReactorBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BioReactorBlock$$Original = $BioReactorBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.HydroponicBedBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$HydroponicBedTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.HydroponicBedTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$TriState} from "net.neoforged.neoforge.common.util.TriState"

export class $HydroponicBedBlock extends $IndustrialBlock<($HydroponicBedTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($HydroponicBedTile)>
public "canSustainPlant"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $BlockState$$Type): $TriState
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($HydroponicBedTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HydroponicBedBlock$$Type = ($HydroponicBedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HydroponicBedBlock$$Original = $HydroponicBedBlock;}
declare module "com.buuz135.industrial.block.MachineFrameBlock$MachineFrameItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Item} from "net.minecraft.world.item.Item"
import {$Rarity$$Type} from "net.minecraft.world.item.Rarity"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $MachineFrameBlock$MachineFrameItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Rarity$$Type, arg2: $TitaniumTab$$Type)

public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
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
export type $MachineFrameBlock$MachineFrameItem$$Type = ($MachineFrameBlock$MachineFrameItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineFrameBlock$MachineFrameItem$$Original = $MachineFrameBlock$MachineFrameItem;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.PotionBrewerTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ProgressBarComponent$BarDirection} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent$BarDirection"

export class $PotionBrewerTile extends $IndustrialProcessingTile<($PotionBrewerTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "getBarDirection"(): $ProgressBarComponent$BarDirection
public "canIncrease"(): boolean
public "getSelf"(): $PotionBrewerTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "barDirection"(): $ProgressBarComponent$BarDirection
get "self"(): $PotionBrewerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PotionBrewerTile$$Type = ($PotionBrewerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PotionBrewerTile$$Original = $PotionBrewerTile;}
declare module "com.buuz135.industrial.block.core.tile.LatexProcessingUnitTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LatexProcessingUnitTile extends $IndustrialProcessingTile<($LatexProcessingUnitTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "canIncrease"(): boolean
public "getSelf"(): $LatexProcessingUnitTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "self"(): $LatexProcessingUnitTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LatexProcessingUnitTile$$Type = ($LatexProcessingUnitTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LatexProcessingUnitTile$$Original = $LatexProcessingUnitTile;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.WashingFactoryTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $WashingFactoryTile extends $IndustrialProcessingTile<($WashingFactoryTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "canIncrease"(): boolean
public "getSelf"(): $ActiveTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WashingFactoryTile$$Type = ($WashingFactoryTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WashingFactoryTile$$Original = $WashingFactoryTile;}
declare module "com.buuz135.industrial.block.tile.IndustrialProcessingTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Runnable} from "java.lang.Runnable"
import {$ProgressBarComponent$BarDirection} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent$BarDirection"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockWithTile$$Type} from "com.hrznstudio.titanium.module.BlockWithTile"
import {$IndustrialMachineTile} from "com.buuz135.industrial.block.tile.IndustrialMachineTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ProgressBarComponent} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $IndustrialProcessingTile<T extends $IndustrialProcessingTile<(object)>> extends $IndustrialMachineTile<(T)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockWithTile$$Type, arg1: integer, arg2: integer, arg3: $BlockPos$$Type, arg4: $BlockState$$Type)

public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $ItemInteractionResult
public "getProgressBar"(): $ProgressBarComponent<(T)>
public "getMaxProgress"(): integer
public "getBarDirection"(): $ProgressBarComponent$BarDirection
public "canIncrease"(): boolean
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "progressBar"(): $ProgressBarComponent<(T)>
get "maxProgress"(): integer
get "barDirection"(): $ProgressBarComponent$BarDirection
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IndustrialProcessingTile$$Type<T> = ($IndustrialProcessingTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndustrialProcessingTile$$Original<T> = $IndustrialProcessingTile<(T)>;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.DyeMixerTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DyeMixerTile extends $IndustrialProcessingTile<($DyeMixerTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "initClient"(): void
public "canIncrease"(): boolean
public "getSelf"(): $DyeMixerTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "self"(): $DyeMixerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DyeMixerTile$$Type = ($DyeMixerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DyeMixerTile$$Original = $DyeMixerTile;}
declare module "com.buuz135.industrial.block.generator.tile.MycelialGeneratorTile" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IMycelialGeneratorType$$Type} from "com.buuz135.industrial.block.generator.mycelial.IMycelialGeneratorType"
import {$ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$GeneratorTile$$Type} from "com.hrznstudio.titanium.block.tile.GeneratorTile"
import {$IndustrialGeneratorTile} from "com.buuz135.industrial.block.tile.IndustrialGeneratorTile"
import {$BlockWithTile$$Type} from "com.hrznstudio.titanium.module.BlockWithTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ProgressBarComponent} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MycelialGeneratorTile extends $IndustrialGeneratorTile<($MycelialGeneratorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockWithTile$$Type, arg1: $IMycelialGeneratorType$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "consumeFuel"(): integer
public "canStart"(): boolean
public "getProgressBar"(): $ProgressBarComponent<($MycelialGeneratorTile)>
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $GeneratorTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $MycelialGeneratorTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "initClient"(): void
public "getEnergyCapacity"(): integer
public "isSmart"(): boolean
public "getExtractingEnergy"(): integer
public "getEnergyProducedEveryTick"(): integer
public "setOwner"(arg0: StringJS): void
public "getOwner"(): StringJS
public "getSelf"(): $MycelialGeneratorTile
get "progressBar"(): $ProgressBarComponent<($MycelialGeneratorTile)>
get "energyCapacity"(): integer
get "smart"(): boolean
get "extractingEnergy"(): integer
get "energyProducedEveryTick"(): integer
set "owner"(value: StringJS)
get "owner"(): StringJS
get "self"(): $MycelialGeneratorTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialGeneratorTile$$Type = ($MycelialGeneratorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MycelialGeneratorTile$$Original = $MycelialGeneratorTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.HydroponicBedTile" {
import {$SidedFluidTankComponent} from "com.hrznstudio.titanium.component.fluid.SidedFluidTankComponent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$PlantRecollectable$$Type} from "com.buuz135.industrial.api.plant.PlantRecollectable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ProgressBarComponent$$Type} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"
import {$IndustrialWorkingTile, $IndustrialWorkingTile$$Type} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HydroponicBedTile extends $IndustrialWorkingTile<($HydroponicBedTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $HydroponicBedTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "getMaxProgress"(): integer
public static "tryToHarvestAndReplant"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $IItemHandler$$Type, arg4: $ProgressBarComponent$$Type<(never)>, arg5: $IndustrialWorkingTile$$Type, arg6: $Supplier$$Type<($PlantRecollectable$$Type)>, arg7: $ItemStack$$Type): boolean
public "getWater"(): $SidedFluidTankComponent<($HydroponicBedTile)>
public "getEther"(): $SidedFluidTankComponent<($HydroponicBedTile)>
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $ActiveTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "water"(): $SidedFluidTankComponent<($HydroponicBedTile)>
get "ether"(): $SidedFluidTankComponent<($HydroponicBedTile)>
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HydroponicBedTile$$Type = ($HydroponicBedTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HydroponicBedTile$$Original = $HydroponicBedTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.SimulatedHydroponicBedTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$IndustrialWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SimulatedHydroponicBedTile extends $IndustrialWorkingTile<($SimulatedHydroponicBedTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $SimulatedHydroponicBedTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $SimulatedHydroponicBedTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulatedHydroponicBedTile$$Type = ($SimulatedHydroponicBedTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimulatedHydroponicBedTile$$Original = $SimulatedHydroponicBedTile;}
declare module "com.buuz135.industrial.block.resourceproduction.FluidPlacerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$FluidPlacerTile} from "com.buuz135.industrial.block.resourceproduction.tile.FluidPlacerTile"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidPlacerBlock extends $IndustrialBlock<($FluidPlacerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidPlacerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidPlacerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidPlacerBlock$$Type = ($FluidPlacerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidPlacerBlock$$Original = $FluidPlacerBlock;}
declare module "com.buuz135.industrial.block.generator.tile.MycelialReactorTile" {
import {$List} from "java.util.List"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$IndustrialGeneratorTile} from "com.buuz135.industrial.block.tile.IndustrialGeneratorTile"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ProgressBarComponent} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$HashMap} from "java.util.HashMap"
import {$GeneratorTile$$Type} from "com.hrznstudio.titanium.block.tile.GeneratorTile"

export class $MycelialReactorTile extends $IndustrialGeneratorTile<($MycelialReactorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "REACTOR_POSITIONS": $HashMap<($Level), ($List<($BlockPos)>)>

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "consumeFuel"(): integer
public "canStart"(): boolean
public "getProgressBar"(): $ProgressBarComponent<($MycelialReactorTile)>
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $MycelialReactorTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $GeneratorTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "getEnergyCapacity"(): integer
public "setCanWork"(arg0: boolean): void
public "getBar"(): $ProgressBarComponent<($MycelialReactorTile)>
public "getExtractingEnergy"(): integer
public "getEnergyProducedEveryTick"(): integer
public "setOwner"(arg0: StringJS): void
public "getOwner"(): StringJS
public "getSelf"(): $ActiveTile
get "progressBar"(): $ProgressBarComponent<($MycelialReactorTile)>
get "energyCapacity"(): integer
set "canWork"(value: boolean)
get "bar"(): $ProgressBarComponent<($MycelialReactorTile)>
get "extractingEnergy"(): integer
get "energyProducedEveryTick"(): integer
set "owner"(value: StringJS)
get "owner"(): StringJS
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MycelialReactorTile$$Type = ($MycelialReactorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MycelialReactorTile$$Original = $MycelialReactorTile;}
declare module "com.buuz135.industrial.block.resourceproduction.MechanicalDirtBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$MechanicalDirtTile} from "com.buuz135.industrial.block.resourceproduction.tile.MechanicalDirtTile"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $MechanicalDirtBlock extends $IndustrialBlock<($MechanicalDirtTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MechanicalDirtTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($MechanicalDirtTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MechanicalDirtBlock$$Type = ($MechanicalDirtBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MechanicalDirtBlock$$Original = $MechanicalDirtBlock;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.SlaughterFactoryTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SlaughterFactoryTile extends $IndustrialAreaWorkingTile<($SlaughterFactoryTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "getWorkingArea"(): $VoxelShape
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $SlaughterFactoryTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "workingArea"(): $VoxelShape
get "self"(): $SlaughterFactoryTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlaughterFactoryTile$$Type = ($SlaughterFactoryTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlaughterFactoryTile$$Original = $SlaughterFactoryTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.tile.AnimalRancherTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AnimalRancherTile extends $IndustrialAreaWorkingTile<($AnimalRancherTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $ActiveTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnimalRancherTile$$Type = ($AnimalRancherTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnimalRancherTile$$Original = $AnimalRancherTile;}
declare module "com.buuz135.industrial.block.IndustrialBlockItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $IndustrialBlockItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $TitaniumTab$$Type)

public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
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
export type $IndustrialBlockItem$$Type = ($IndustrialBlockItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IndustrialBlockItem$$Original = $IndustrialBlockItem;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.MarineFisherTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MarineFisherTile extends $IndustrialAreaWorkingTile<($MarineFisherTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "getWorkingArea"(): $VoxelShape
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $MarineFisherTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "workingArea"(): $VoxelShape
get "self"(): $MarineFisherTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MarineFisherTile$$Type = ($MarineFisherTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MarineFisherTile$$Original = $MarineFisherTile;}
declare module "com.buuz135.industrial.block.resourceproduction.BlockBreakerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$BlockBreakerTile} from "com.buuz135.industrial.block.resourceproduction.tile.BlockBreakerTile"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockBreakerBlock extends $IndustrialBlock<($BlockBreakerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlockBreakerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($BlockBreakerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockBreakerBlock$$Type = ($BlockBreakerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockBreakerBlock$$Original = $BlockBreakerBlock;}
declare module "com.buuz135.industrial.block.misc.tile.EnchantmentFactoryTile" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnchantmentFactoryTile extends $IndustrialProcessingTile<($EnchantmentFactoryTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "loadSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "saveSettings"(arg0: $Player$$Type, arg1: $CompoundTag$$Type): void
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "initClient"(): void
public "getMaxProgress"(): integer
public "canIncrease"(): boolean
public "getSelf"(): $ActiveTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentFactoryTile$$Type = ($EnchantmentFactoryTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentFactoryTile$$Original = $EnchantmentFactoryTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.SimulatedHydroponicBedBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$SimulatedHydroponicBedTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.SimulatedHydroponicBedTile"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $SimulatedHydroponicBedBlock extends $IndustrialBlock<($SimulatedHydroponicBedTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimulatedHydroponicBedTile)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimulatedHydroponicBedTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimulatedHydroponicBedBlock$$Type = ($SimulatedHydroponicBedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimulatedHydroponicBedBlock$$Original = $SimulatedHydroponicBedBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.MechanicalDirtTile" {
import {$SidedFluidTankComponent} from "com.hrznstudio.titanium.component.fluid.SidedFluidTankComponent"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IndustrialWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MechanicalDirtTile extends $IndustrialWorkingTile<($MechanicalDirtTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $MechanicalDirtTile$$Type): void
public "getMaxProgress"(): integer
public "getMeat"(): $SidedFluidTankComponent<($MechanicalDirtTile)>
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $MechanicalDirtTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "meat"(): $SidedFluidTankComponent<($MechanicalDirtTile)>
get "self"(): $MechanicalDirtTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MechanicalDirtTile$$Type = ($MechanicalDirtTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MechanicalDirtTile$$Original = $MechanicalDirtTile;}
declare module "com.buuz135.industrial.block.agriculturehusbandry.PlantSowerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$PlantSowerTile} from "com.buuz135.industrial.block.agriculturehusbandry.tile.PlantSowerTile"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $PlantSowerBlock extends $IndustrialBlock<($PlantSowerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantSowerTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($PlantSowerTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlantSowerBlock$$Type = ($PlantSowerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlantSowerBlock$$Original = $PlantSowerBlock;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.BlockPlacerTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IndustrialAreaWorkingTile} from "com.buuz135.industrial.block.tile.IndustrialAreaWorkingTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IndustrialWorkingTile$WorkAction} from "com.buuz135.industrial.block.tile.IndustrialWorkingTile$WorkAction"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockPlacerTile extends $IndustrialAreaWorkingTile<($BlockPlacerTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "getMaxProgress"(): integer
public "work"(): $IndustrialWorkingTile$WorkAction
public "getSelf"(): $BlockPlacerTile
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "maxProgress"(): integer
get "self"(): $BlockPlacerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockPlacerTile$$Type = ($BlockPlacerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockPlacerTile$$Original = $BlockPlacerTile;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.SludgeRefinerTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$List} from "java.util.List"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SludgeRefinerTile extends $IndustrialProcessingTile<($SludgeRefinerTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "canIncrease"(): boolean
public "getSelf"(): $SludgeRefinerTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "self"(): $SludgeRefinerTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SludgeRefinerTile$$Type = ($SludgeRefinerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SludgeRefinerTile$$Original = $SludgeRefinerTile;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.ILaserBase" {
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$ProgressBarComponent, $ProgressBarComponent$$Type} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"

export interface $ILaserBase$$Interface<T extends $ActiveTile<(object)>> {

(): $ProgressBarComponent$$Type<(T)>
get "bar"(): $ProgressBarComponent<(T)>
}

export class $ILaserBase<T extends $ActiveTile<(object)>> implements $ILaserBase$$Interface {
 "getBar"(): $ProgressBarComponent<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILaserBase$$Type<T> = (() => $ProgressBarComponent$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILaserBase$$Original<T> = $ILaserBase<(T)>;}
declare module "com.buuz135.industrial.block.resourceproduction.tile.SporesRecreatorTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IndustrialProcessingTile} from "com.buuz135.industrial.block.tile.IndustrialProcessingTile"
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Runnable} from "java.lang.Runnable"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SporesRecreatorTile extends $IndustrialProcessingTile<($SporesRecreatorTile)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockPos$$Type, arg1: $BlockState$$Type)

public "canIncrease"(): boolean
public "getSelf"(): $ActiveTile
public "onFinish"(): $Runnable
public static "readInventory"(arg0: $RegistryAccess$$Type, arg1: $CompoundTag$$Type): $List<($ItemStack)>
public static "writeInventory"(arg0: $RegistryAccess$$Type, arg1: $InventoryComponent$$Type): $CompoundTag
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SporesRecreatorTile$$Type = ($SporesRecreatorTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SporesRecreatorTile$$Original = $SporesRecreatorTile;}
declare module "com.buuz135.industrial.block.resourceproduction.WashingFactoryBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IndustrialBlock} from "com.buuz135.industrial.block.IndustrialBlock"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$WashingFactoryTile} from "com.buuz135.industrial.block.resourceproduction.tile.WashingFactoryTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $WashingFactoryBlock extends $IndustrialBlock<($WashingFactoryTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_ALL": $DirectionProperty
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
static readonly "FACING_HORIZONTAL": $DirectionProperty

constructor()

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WashingFactoryTile)>
public "getRotationType"(): $RotatableBlock$RotationType
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($WashingFactoryTile)>
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WashingFactoryBlock$$Type = ($WashingFactoryBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WashingFactoryBlock$$Original = $WashingFactoryBlock;}
