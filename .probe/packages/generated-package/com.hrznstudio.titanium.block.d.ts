declare module "com.hrznstudio.titanium.block.tile.ActiveTile" {
import {$BasicTile} from "com.hrznstudio.titanium.block.tile.BasicTile"
import {$MultiInventoryComponent} from "com.hrznstudio.titanium.component.inventory.MultiInventoryComponent"
import {$List} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$FluidTankComponent$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent"
import {$MultiFilterComponent} from "com.hrznstudio.titanium.component.filter.MultiFilterComponent"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IButtonHandler$$Interface} from "com.hrznstudio.titanium.network.IButtonHandler"
import {$IFacingComponent} from "com.hrznstudio.titanium.component.sideness.IFacingComponent"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$MultiButtonComponent} from "com.hrznstudio.titanium.component.button.MultiButtonComponent"
import {$ContainerLevelAccess} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$InventoryComponent$$Type} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ITickableBlockEntity$$Interface} from "com.hrznstudio.titanium.block.tile.ITickableBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IAssetProvider} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$MultiTankComponent} from "com.hrznstudio.titanium.component.fluid.MultiTankComponent"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IHasAssetProvider$$Interface} from "com.hrznstudio.titanium.client.screen.asset.IHasAssetProvider"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$IFacingComponentHarness$$Interface} from "com.hrznstudio.titanium.component.sideness.IFacingComponentHarness"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IFilter$$Type} from "com.hrznstudio.titanium.api.filter.IFilter"
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$ButtonComponent$$Type} from "com.hrznstudio.titanium.component.button.ButtonComponent"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$IComponentBundle$$Type} from "com.hrznstudio.titanium.component.IComponentBundle"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IContainerAddonProvider$$Interface} from "com.hrznstudio.titanium.container.addon.IContainerAddonProvider"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$ProgressBarComponent$$Type} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"

export class $ActiveTile<T extends $ActiveTile<(object)>> extends $BasicTile<(T)> implements $IScreenAddonProvider$$Interface, $ITickableBlockEntity$$Interface<(T)>, $MenuProvider$$Interface, $IButtonHandler$$Interface, $IFacingComponentHarness$$Interface, $IContainerAddonProvider$$Interface, $IHasAssetProvider$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(never)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getMultiInventoryComponent"(): $MultiInventoryComponent<(T)>
public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $ItemInteractionResult
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "openGui"(arg0: $Player$$Type): void
public "getFacingDirection"(): $Direction
public "getWorldPosCallable"(): $ContainerLevelAccess
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "canInteract"(): boolean
public "initClient"(): void
public "getAssetProvider"(): $IAssetProvider
public "addGuiAddonFactory"(arg0: $IFactory$$Type<($IScreenAddon$$Type)>): void
public "getFacingHandlerWorkTime"(): integer
public "getFacingHandlerWorkAmount"(): integer
public "markComponentDirty"(): void
public "addTank"(arg0: $FluidTankComponent$$Type<(T)>): void
public "addBundle"(arg0: $IComponentBundle$$Type): void
public "addContainerAddonFactory"(arg0: $IFactory$$Type<($IContainerAddon$$Type)>): void
public "getMultiButtonComponent"(): $MultiButtonComponent
public "getHandlerFromName"(arg0: StringJS): $IFacingComponent
public "getComponentWorld"(): $Level
public "markComponentForUpdate"(arg0: boolean): void
public "getMultiTankComponent"(): $MultiTankComponent<(T)>
public "getMultiFilterComponent"(): $MultiFilterComponent
public "addButton"(arg0: $ButtonComponent$$Type): void
public "onNeighborChanged"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
public "addInventory"(arg0: $InventoryComponent$$Type<(T)>): void
public "getDisplayName"(): $Component
public "addFilter"(arg0: $IFilter$$Type<(never)>): void
public "addProgressBar"(arg0: $ProgressBarComponent$$Type<(T)>): void
public "getSelf"(): T
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "getUpdatePacket"(): $Packet
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "multiInventoryComponent"(): $MultiInventoryComponent<(T)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
get "facingDirection"(): $Direction
get "worldPosCallable"(): $ContainerLevelAccess
get "assetProvider"(): $IAssetProvider
get "facingHandlerWorkTime"(): integer
get "facingHandlerWorkAmount"(): integer
get "multiButtonComponent"(): $MultiButtonComponent
get "componentWorld"(): $Level
get "multiTankComponent"(): $MultiTankComponent<(T)>
get "multiFilterComponent"(): $MultiFilterComponent
get "displayName"(): $Component
get "self"(): T
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActiveTile$$Type<T> = ($ActiveTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ActiveTile$$Original<T> = $ActiveTile<(T)>;}
declare module "com.hrznstudio.titanium.block.redstone.RedstoneManager" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$IEnumValues, $IEnumValues$$Type} from "com.hrznstudio.titanium.api.IEnumValues"

export class $RedstoneManager<T extends $IEnumValues<(object)>> implements $INBTSerializable$$Interface<($CompoundTag)> {
constructor(arg0: T, arg1: boolean)

public "setAction"(arg0: T): void
public "getLastRedstoneState"(): boolean
public "shouldWork"(): boolean
public "setLastRedstoneState"(arg0: boolean): void
public "finish"(): void
public "getAction"(): T
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
set "action"(value: T)
get "lastRedstoneState"(): boolean
set "lastRedstoneState"(value: boolean)
get "action"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneManager$$Type<T> = ($RedstoneManager<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneManager$$Original<T> = $RedstoneManager<(T)>;}
declare module "com.hrznstudio.titanium.block.RotatableBlock$RotationType" {
import {$Enum} from "java.lang.Enum"
import {$RotationHandler} from "com.hrznstudio.titanium.block.RotationHandler"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $RotatableBlock$RotationType extends $Enum<($RotatableBlock$RotationType)> {
static readonly "TWENTY_FOUR_WAY": $RotatableBlock$RotationType
static readonly "SIX_WAY": $RotatableBlock$RotationType
static readonly "NONE": $RotatableBlock$RotationType
static readonly "FOUR_WAY": $RotatableBlock$RotationType

public static "values"(): ($RotatableBlock$RotationType)[]
public static "valueOf"(arg0: StringJS): $RotatableBlock$RotationType
public "getProperties"(): ($DirectionProperty)[]
public "getHandler"(): $RotationHandler
get "properties"(): ($DirectionProperty)[]
get "handler"(): $RotationHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatableBlock$RotationType$$Type = (("none") | ("four_way") | ("six_way") | ("twenty_four_way"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RotatableBlock$RotationType$$Original = $RotatableBlock$RotationType;}
declare module "com.hrznstudio.titanium.block.RotationHandler" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $RotationHandler$$Interface {

(arg0: $Block, arg1: $BlockPlaceContext): $BlockState$$Type
}

export class $RotationHandler implements $RotationHandler$$Interface {
 "getStateForPlacement"(arg0: $Block$$Type, arg1: $BlockPlaceContext$$Type): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotationHandler$$Type = ((arg0: $Block, arg1: $BlockPlaceContext) => $BlockState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RotationHandler$$Original = $RotationHandler;}
declare module "com.hrznstudio.titanium.block.tile.GeneratorTile" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ProgressBarComponent} from "com.hrznstudio.titanium.component.progress.ProgressBarComponent"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$PoweredTile} from "com.hrznstudio.titanium.block.tile.PoweredTile"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $GeneratorTile<T extends $GeneratorTile<(object)>> extends $PoweredTile<(T)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(never)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "consumeFuel"(): integer
public "canStart"(): boolean
public "getProgressBar"(): $ProgressBarComponent<(T)>
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "getEnergyCapacity"(): integer
public "isSmart"(): boolean
public "getEnergyProducedEveryTick"(): integer
public "getExtractingEnergy"(): integer
public "getUpdatePacket"(): $Packet
get "progressBar"(): $ProgressBarComponent<(T)>
get "energyCapacity"(): integer
get "smart"(): boolean
get "energyProducedEveryTick"(): integer
get "extractingEnergy"(): integer
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeneratorTile$$Type<T> = ($GeneratorTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeneratorTile$$Original<T> = $GeneratorTile<(T)>;}
declare module "com.hrznstudio.titanium.block.RotatableBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BasicTile} from "com.hrznstudio.titanium.block.tile.BasicTile"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BasicTileBlock} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class$$Type} from "java.lang.Class"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $RotatableBlock<T extends $BasicTile<(object)>> extends $BasicTileBlock<(T)> {
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

constructor(arg0: StringJS, arg1: $BlockBehaviour$Properties$$Type, arg2: $Class$$Type<(T)>)

public "getRotationType"(): $RotatableBlock$RotationType
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RotatableBlock$$Type<T> = ($RotatableBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RotatableBlock$$Original<T> = $RotatableBlock<(T)>;}
declare module "com.hrznstudio.titanium.block.BasicBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab, $TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$IRecipeProvider$$Interface} from "com.hrznstudio.titanium.api.IRecipeProvider"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IBlockLootTableProvider$$Interface} from "com.hrznstudio.titanium.datagenerator.loot.block.IBlockLootTableProvider"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BasicBlock extends $Block implements $IRecipeProvider$$Interface, $IBlockLootTableProvider$$Interface {
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

public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "setItemGroup"(arg0: $TitaniumTab$$Type): void
public "hasCustomBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getItemGroup"(): $TitaniumTab
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "getLootTable"(arg0: any): $LootTable$Builder
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "hasIndividualRenderVoxelShape"(): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
set "itemGroup"(value: $TitaniumTab$$Type)
get "itemGroup"(): $TitaniumTab
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicBlock$$Type = ($BasicBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicBlock$$Original = $BasicBlock;}
declare module "com.hrznstudio.titanium.block.tile.ITickableBlockEntity" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ITickableBlockEntity$$Interface<T extends $BlockEntity> {
}

export class $ITickableBlockEntity<T extends $BlockEntity> implements $ITickableBlockEntity$$Interface {
 "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
 "clientTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITickableBlockEntity$$Type<T> = ($ITickableBlockEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITickableBlockEntity$$Original<T> = $ITickableBlockEntity<(T)>;}
declare module "com.hrznstudio.titanium.block.tile.IScreenInfoProvider" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IScreenInfoProvider$$Interface {
get "titleColor"(): integer
}

export class $IScreenInfoProvider implements $IScreenInfoProvider$$Interface {
 "getTitleColor"(): integer
 "getTitleXPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
 "getTitleYPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenInfoProvider$$Type = ($IScreenInfoProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScreenInfoProvider$$Original = $IScreenInfoProvider;}
declare module "com.hrznstudio.titanium.block.tile.PoweredTile" {
import {$List} from "java.util.List"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Direction} from "net.minecraft.core.Direction"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$IContainerAddon} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$EnergyStorageComponent} from "com.hrznstudio.titanium.component.energy.EnergyStorageComponent"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$Set} from "java.util.Set"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PoweredTile<T extends $PoweredTile<(object)>> extends $ActiveTile<(T)> {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(never)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "getEnergyStorage"(): $EnergyStorageComponent<(T)>
public "getValidEnergyFaces"(): $Set<($Direction)>
public "setShowEnergy"(arg0: boolean): void
public "getUpdatePacket"(): $Packet
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
get "energyStorage"(): $EnergyStorageComponent<(T)>
get "validEnergyFaces"(): $Set<($Direction)>
set "showEnergy"(value: boolean)
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredTile$$Type<T> = ($PoweredTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoweredTile$$Original<T> = $PoweredTile<(T)>;}
declare module "com.hrznstudio.titanium.block.BasicTileBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$BasicTile} from "com.hrznstudio.titanium.block.tile.BasicTile"
import {$BasicBlock} from "com.hrznstudio.titanium.block.BasicBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Optional} from "java.util.Optional"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class, $Class$$Type} from "java.lang.Class"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BasicTileBlock<T extends $BasicTile<(object)>> extends $BasicBlock implements $EntityBlock$$Interface {
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Class$$Type<(T)>)

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
public "getTileClass"(): $Class<(T)>
public "getTicker"<R extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(R)>): $BlockEntityTicker<(R)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getTile"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Block$$Type, arg4: $BlockPos$$Type, arg5: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
get "tileClass"(): $Class<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTileBlock$$Type<T> = ($BasicTileBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicTileBlock$$Original<T> = $BasicTileBlock<(T)>;}
declare module "com.hrznstudio.titanium.block.redstone.RedstoneAction" {
import {$Enum} from "java.lang.Enum"
import {$IRedstoneAction$$Interface} from "com.hrznstudio.titanium.api.redstone.IRedstoneAction"
import {$List} from "java.util.List"
import {$IRedstoneState$$Type} from "com.hrznstudio.titanium.api.redstone.IRedstoneState"
import {$IEnumValues$$Interface} from "com.hrznstudio.titanium.api.IEnumValues"

export class $RedstoneAction extends $Enum<($RedstoneAction)> implements $IRedstoneAction$$Interface, $IEnumValues$$Interface<($RedstoneAction)> {
static readonly "ONCE": $RedstoneAction
static readonly "WITH_REDSTONE": $RedstoneAction
static readonly "IGNORE": $RedstoneAction
static readonly "NO_REDSTONE": $RedstoneAction

public "canRun"(arg0: $IRedstoneState$$Type): boolean
public "getValues"(): $List<($RedstoneAction)>
public "startsOnChange"(): boolean
public "getName"(): StringJS
public static "values"(): ($RedstoneAction)[]
public static "valueOf"(arg0: StringJS): $RedstoneAction
public "getValue"(arg0: StringJS): any
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RedstoneAction$$Type = (("ignore") | ("no_redstone") | ("with_redstone") | ("once"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RedstoneAction$$Original = $RedstoneAction;}
declare module "com.hrznstudio.titanium.block.tile.BasicTile" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock, $BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IScreenInfoProvider$$Interface} from "com.hrznstudio.titanium.block.tile.IScreenInfoProvider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BasicTile<T extends $BasicTile<(object)>> extends $BlockEntity implements $IScreenInfoProvider$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(never)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $ItemInteractionResult
public "getUpdatePacket"(): $Packet
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "isServer"(): boolean
public "initClient"(): void
public "handleSyncObject"(arg0: $CompoundTag$$Type): void
public "markForUpdate"(): void
public "updateNeigh"(): void
public "getBasicTileBlock"(): $BasicTileBlock<(T)>
public "syncObject"(arg0: any): void
public "onNeighborChanged"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
public "setLevel"(arg0: $Level$$Type): void
public "isClient"(): boolean
public "getTitleColor"(): integer
public "getTitleXPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
public "getTitleYPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
get "updatePacket"(): $Packet
get "server"(): boolean
get "basicTileBlock"(): $BasicTileBlock<(T)>
set "level"(value: $Level$$Type)
get "client"(): boolean
get "titleColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicTile$$Type<T> = ($BasicTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicTile$$Original<T> = $BasicTile<(T)>;}
declare module "com.hrznstudio.titanium.block.tile.MachineTile" {
import {$SidedInventoryComponent} from "com.hrznstudio.titanium.component.inventory.SidedInventoryComponent"
import {$IMachine$$Interface} from "com.hrznstudio.titanium.api.IMachine"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$InventoryComponent} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IAugmentType$$Type} from "com.hrznstudio.titanium.api.augment.IAugmentType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PoweredTile} from "com.hrznstudio.titanium.block.tile.PoweredTile"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MachineTile<T extends $MachineTile<(object)>> extends $PoweredTile<(T)> implements $IMachine$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(never)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "canAcceptAugment"(arg0: $ItemStack$$Type): boolean
public "getAugmentInventory"(): $SidedInventoryComponent<(T)>
public "onActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $ItemInteractionResult
public "hasAugmentInstalled"(arg0: $IAugmentType$$Type): boolean
public "getInstalledAugments"(): $List<($ItemStack)>
public "getInstalledAugments"(arg0: $IAugmentType$$Type): $List<($ItemStack)>
public "initClient"(): void
public "getAugmentBackground"(): $IFactory<($IScreenAddon)>
public "getAugmentFactory"(): $IFactory<($InventoryComponent<(T)>)>
public "isActive"(): boolean
public "isPaused"(): boolean
public "getUpdatePacket"(): $Packet
get "augmentInventory"(): $SidedInventoryComponent<(T)>
get "installedAugments"(): $List<($ItemStack)>
get "augmentBackground"(): $IFactory<($IScreenAddon)>
get "augmentFactory"(): $IFactory<($InventoryComponent<(T)>)>
get "active"(): boolean
get "paused"(): boolean
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTile$$Type<T> = ($MachineTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineTile$$Original<T> = $MachineTile<(T)>;}
