declare module "com.buuz135.functionalstorage.block.FluidDrawerBlock$FluidDrawerItem" {
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$Map} from "java.util.Map"
import {$FluidDrawerBlock$$Type} from "com.buuz135.functionalstorage.block.FluidDrawerBlock"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $FluidDrawerBlock$FluidDrawerItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $FluidDrawerBlock$$Type, arg1: $Item$Properties$$Type, arg2: $TitaniumTab$$Type)

public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
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
export type $FluidDrawerBlock$FluidDrawerItem$$Type = ($FluidDrawerBlock$FluidDrawerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidDrawerBlock$FluidDrawerItem$$Original = $FluidDrawerBlock$FluidDrawerItem;}
declare module "com.buuz135.functionalstorage.block.tile.DrawerProperties" {
import {$SizeProvider, $SizeProvider$$Type} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Record} from "java.lang.Record"

export class $DrawerProperties extends $Record {
constructor(baseSize: integer, upgradeComponent: $Supplier$$Type<($DataComponentType$$Type<($SizeProvider$$Type)>)>)

public "upgradeComponent"(): $Supplier<($DataComponentType<($SizeProvider)>)>
public "baseSize"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerProperties$$Type = ({"upgradeComponent"?: $Supplier$$Type<($DataComponentType$$Type<($SizeProvider$$Type)>)>, "baseSize"?: integer}) | ([upgradeComponent?: $Supplier$$Type<($DataComponentType$$Type<($SizeProvider$$Type)>)>, baseSize?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawerProperties$$Original = $DrawerProperties;}
declare module "com.buuz135.functionalstorage.block.DrawerBlock$DrawerItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$DrawerBlock$$Type} from "com.buuz135.functionalstorage.block.DrawerBlock"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $DrawerBlock$DrawerItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DrawerBlock$$Type, arg1: $Item$Properties$$Type, arg2: $TitaniumTab$$Type)

public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
public "initCapabilities"(arg0: $ItemStack$$Type): $IItemHandler
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
export type $DrawerBlock$DrawerItem$$Type = ($DrawerBlock$DrawerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawerBlock$DrawerItem$$Original = $DrawerBlock$DrawerItem;}
declare module "com.buuz135.functionalstorage.block.FramedFluidDrawerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$FluidDrawerTile} from "com.buuz135.functionalstorage.block.tile.FluidDrawerTile"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$FramedBlock$$Interface} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$FluidDrawerBlock} from "com.buuz135.functionalstorage.block.FluidDrawerBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedFluidDrawerBlock extends $FluidDrawerBlock implements $FramedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
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

constructor(arg0: $FunctionalStorage$DrawerType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedFluidDrawerBlock$$Type = ($FramedFluidDrawerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedFluidDrawerBlock$$Original = $FramedFluidDrawerBlock;}
declare module "com.buuz135.functionalstorage.block.ControllerExtensionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$StorageControllerExtensionBlock} from "com.buuz135.functionalstorage.block.StorageControllerExtensionBlock"
import {$ControllerExtensionTile} from "com.buuz135.functionalstorage.block.tile.ControllerExtensionTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $ControllerExtensionBlock extends $StorageControllerExtensionBlock<($ControllerExtensionTile)> {
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

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
public "getLootTable"(arg0: any): $LootTable$Builder
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerExtensionBlock$$Type = ($ControllerExtensionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllerExtensionBlock$$Original = $ControllerExtensionBlock;}
declare module "com.buuz135.functionalstorage.block.tile.StorageControllerExtensionTile" {
import {$ConfigurationToolItem$ConfigurationAction$$Type} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageControllerExtensionTile<T extends $StorageControllerExtensionTile<(object)>> extends $ItemControllableDrawerTile<(T)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(T)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "getStorage"(): $IItemHandler
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "toggleLocking"(): void
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): void
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getUpdatePacket"(): $Packet
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerExtensionTile$$Type<T> = ($StorageControllerExtensionTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageControllerExtensionTile$$Original<T> = $StorageControllerExtensionTile<(T)>;}
declare module "com.buuz135.functionalstorage.block.tile.SimpleCompactingDrawerTile" {
import {$ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$CompactingInventoryHandler} from "com.buuz135.functionalstorage.inventory.CompactingInventoryHandler"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $SimpleCompactingDrawerTile extends $ItemControllableDrawerTile<($SimpleCompactingDrawerTile)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
 "handler": $CompactingInventoryHandler
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<($SimpleCompactingDrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($SimpleCompactingDrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $SimpleCompactingDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type): void
public "getStorage"(): $IItemHandler
public "initClient"(): void
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getHandler"(): $CompactingInventoryHandler
public "getSelf"(): $ActiveTile
public "getUpdatePacket"(): $Packet
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "self"(): $ActiveTile
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCompactingDrawerTile$$Type = ($SimpleCompactingDrawerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCompactingDrawerTile$$Original = $SimpleCompactingDrawerTile;}
declare module "com.buuz135.functionalstorage.block.SimpleCompactingDrawerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Collection} from "java.util.Collection"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$Drawer} from "com.buuz135.functionalstorage.block.Drawer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleCompactingDrawerTile} from "com.buuz135.functionalstorage.block.tile.SimpleCompactingDrawerTile"

export class $SimpleCompactingDrawerBlock extends $Drawer<($SimpleCompactingDrawerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
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

constructor(arg0: StringJS, arg1: $BlockBehaviour$Properties$$Type)

public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleCompactingDrawerBlock$$Type = ($SimpleCompactingDrawerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleCompactingDrawerBlock$$Original = $SimpleCompactingDrawerBlock;}
declare module "com.buuz135.functionalstorage.block.tile.ArmoryCabinetTile" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$ArmoryCabinetInventoryHandler} from "com.buuz135.functionalstorage.inventory.ArmoryCabinetInventoryHandler"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ClientboundBlockEntityDataPacket, $ClientboundBlockEntityDataPacket$$Type} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Connection$$Type} from "net.minecraft.network.Connection"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArmoryCabinetTile extends $ActiveTile<($ArmoryCabinetTile)> {
 "handler": $ArmoryCabinetInventoryHandler
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<($ArmoryCabinetTile$$Type)>, arg1: $BlockEntityType$$Type<(never)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getStorage"(): $IItemHandler
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onDataPacket"(arg0: $Connection$$Type, arg1: $ClientboundBlockEntityDataPacket$$Type, arg2: $HolderLookup$Provider$$Type): void
public "isEverythingEmpty"(): boolean
public "getSelf"(): $ActiveTile
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "storage"(): $IItemHandler
get "everythingEmpty"(): boolean
get "self"(): $ActiveTile
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ArmoryCabinetTile$$Type = ($ArmoryCabinetTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmoryCabinetTile$$Original = $ArmoryCabinetTile;}
declare module "com.buuz135.functionalstorage.block.FramedDrawerControllerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StorageControllerBlock} from "com.buuz135.functionalstorage.block.StorageControllerBlock"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$FramedBlock$$Interface} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FramedDrawerControllerTile} from "com.buuz135.functionalstorage.block.tile.FramedDrawerControllerTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedDrawerControllerBlock extends $StorageControllerBlock<($FramedDrawerControllerTile)> implements $FramedBlock$$Interface {
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

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerControllerBlock$$Type = ($FramedDrawerControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedDrawerControllerBlock$$Original = $FramedDrawerControllerBlock;}
declare module "com.buuz135.functionalstorage.block.FramedBlock" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $FramedBlock$$Interface {
}

export class $FramedBlock implements $FramedBlock$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedBlock$$Type = ($FramedBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedBlock$$Original = $FramedBlock;}
declare module "com.buuz135.functionalstorage.block.StorageControllerExtensionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$StorageControllerExtensionTile} from "com.buuz135.functionalstorage.block.tile.StorageControllerExtensionTile"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$RotatableBlock} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class$$Type} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageControllerExtensionBlock<T extends $StorageControllerExtensionTile<(object)>> extends $RotatableBlock<(T)> {
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
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerExtensionBlock$$Type<T> = ($StorageControllerExtensionBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageControllerExtensionBlock$$Original<T> = $StorageControllerExtensionBlock<(T)>;}
declare module "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile$DrawerOptions" {
import {$ConfigurationToolItem$ConfigurationAction, $ConfigurationToolItem$ConfigurationAction$$Type} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$HashMap} from "java.util.HashMap"

export class $ControllableDrawerTile$DrawerOptions implements $INBTSerializable$$Interface<($CompoundTag)> {
 "advancedOptions": $HashMap<($ConfigurationToolItem$ConfigurationAction), (integer)>
 "options": $HashMap<($ConfigurationToolItem$ConfigurationAction), (boolean)>

constructor()

public "setAdvancedValue"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type, arg1: integer): void
public "getAdvancedValue"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): integer
public "isActive"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): boolean
public "setActive"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type, arg1: boolean): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllableDrawerTile$DrawerOptions$$Type = ($ControllableDrawerTile$DrawerOptions);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllableDrawerTile$DrawerOptions$$Original = $ControllableDrawerTile$DrawerOptions;}
declare module "com.buuz135.functionalstorage.block.FramedControllerExtensionBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$FramedBlock$$Interface} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$StorageControllerExtensionBlock} from "com.buuz135.functionalstorage.block.StorageControllerExtensionBlock"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$FramedControllerExtensionTile} from "com.buuz135.functionalstorage.block.tile.FramedControllerExtensionTile"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedControllerExtensionBlock extends $StorageControllerExtensionBlock<($FramedControllerExtensionTile)> implements $FramedBlock$$Interface {
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

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedControllerExtensionBlock$$Type = ($FramedControllerExtensionBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedControllerExtensionBlock$$Original = $FramedControllerExtensionBlock;}
declare module "com.buuz135.functionalstorage.block.tile.FramedControllerExtensionTile" {
import {$StorageControllerExtensionTile} from "com.buuz135.functionalstorage.block.tile.StorageControllerExtensionTile"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$FramedTile$$Interface} from "com.buuz135.functionalstorage.block.tile.FramedTile"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$FramedDrawerModelData, $FramedDrawerModelData$$Type} from "com.buuz135.functionalstorage.client.model.FramedDrawerModelData"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedControllerExtensionTile extends $StorageControllerExtensionTile<($FramedControllerExtensionTile)> implements $FramedTile$$Interface {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<($FramedControllerExtensionTile$$Type)>, arg1: $BlockEntityType$$Type<($FramedControllerExtensionTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getFramedDrawerModelData"(): $FramedDrawerModelData
public "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$$Type): void
public "getSelf"(): $FramedControllerExtensionTile
public "getModelData"(): $ModelData
public "getUpdatePacket"(): $Packet
get "framedDrawerModelData"(): $FramedDrawerModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$$Type)
get "self"(): $FramedControllerExtensionTile
get "modelData"(): $ModelData
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedControllerExtensionTile$$Type = ($FramedControllerExtensionTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedControllerExtensionTile$$Original = $FramedControllerExtensionTile;}
declare module "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile" {
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$DrawerProperties$$Type} from "com.buuz135.functionalstorage.block.tile.DrawerProperties"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$InventoryComponent} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemControllableDrawerTile<T extends $ItemControllableDrawerTile<(object)>> extends $ControllableDrawerTile<(T)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(T)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $DrawerProperties$$Type)

public "getTitleColor"(): integer
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "getStorage"(): $IItemHandler
public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "initClient"(): void
public "getStorageSlotAmount"(): integer
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "isInventoryEmpty"(): boolean
public "onClicked"(arg0: $Player$$Type, arg1: integer): void
public "getUpdatePacket"(): $Packet
get "titleColor"(): integer
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "inventoryEmpty"(): boolean
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemControllableDrawerTile$$Type<T> = ($ItemControllableDrawerTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemControllableDrawerTile$$Original<T> = $ItemControllableDrawerTile<(T)>;}
declare module "com.buuz135.functionalstorage.block.CompactingDrawerBlock$CompactingDrawerItem" {
import {$IClientItemExtensions$$Type} from "net.neoforged.neoforge.client.extensions.common.IClientItemExtensions"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $CompactingDrawerBlock$CompactingDrawerItem extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Block$$Type, arg1: $Item$Properties$$Type, arg2: integer)

public "initializeClient"(arg0: $Consumer$$Type<($IClientItemExtensions)>): void
public "initCapabilities"(arg0: $ItemStack$$Type): $IItemHandler
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
export type $CompactingDrawerBlock$CompactingDrawerItem$$Type = ($CompactingDrawerBlock$CompactingDrawerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompactingDrawerBlock$CompactingDrawerItem$$Original = $CompactingDrawerBlock$CompactingDrawerItem;}
declare module "com.buuz135.functionalstorage.block.tile.DrawerControllerTile" {
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$ControllerInventoryHandler} from "com.buuz135.functionalstorage.inventory.ControllerInventoryHandler"
import {$StorageControllerTile} from "com.buuz135.functionalstorage.block.tile.StorageControllerTile"
import {$ControllerFluidHandler} from "com.buuz135.functionalstorage.fluid.ControllerFluidHandler"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DrawerControllerTile extends $StorageControllerTile<($DrawerControllerTile)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "fluidHandler": $ControllerFluidHandler
 "inventoryHandler": $ControllerInventoryHandler

constructor(arg0: $BasicTileBlock$$Type<($DrawerControllerTile$$Type)>, arg1: $BlockEntityType$$Type<($DrawerControllerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getSelf"(): $DrawerControllerTile
public "getUpdatePacket"(): $Packet
get "self"(): $DrawerControllerTile
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerControllerTile$$Type = ($DrawerControllerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawerControllerTile$$Original = $DrawerControllerTile;}
declare module "com.buuz135.functionalstorage.block.tile.FramedDrawerControllerTile" {
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$ControllerInventoryHandler} from "com.buuz135.functionalstorage.inventory.ControllerInventoryHandler"
import {$StorageControllerTile} from "com.buuz135.functionalstorage.block.tile.StorageControllerTile"
import {$ControllerFluidHandler} from "com.buuz135.functionalstorage.fluid.ControllerFluidHandler"
import {$FramedTile$$Interface} from "com.buuz135.functionalstorage.block.tile.FramedTile"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$FramedDrawerModelData, $FramedDrawerModelData$$Type} from "com.buuz135.functionalstorage.client.model.FramedDrawerModelData"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedDrawerControllerTile extends $StorageControllerTile<($FramedDrawerControllerTile)> implements $FramedTile$$Interface {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "fluidHandler": $ControllerFluidHandler
 "inventoryHandler": $ControllerInventoryHandler

constructor(arg0: $BasicTileBlock$$Type<($FramedDrawerControllerTile$$Type)>, arg1: $BlockEntityType$$Type<($FramedDrawerControllerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getFramedDrawerModelData"(): $FramedDrawerModelData
public "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$$Type): void
public "getSelf"(): $FramedDrawerControllerTile
public "getModelData"(): $ModelData
public "getUpdatePacket"(): $Packet
get "framedDrawerModelData"(): $FramedDrawerModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$$Type)
get "self"(): $FramedDrawerControllerTile
get "modelData"(): $ModelData
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerControllerTile$$Type = ($FramedDrawerControllerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedDrawerControllerTile$$Original = $FramedDrawerControllerTile;}
declare module "com.buuz135.functionalstorage.block.tile.DrawerTile" {
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ItemControllableDrawerTile} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$BigInventoryHandler} from "com.buuz135.functionalstorage.inventory.BigInventoryHandler"
import {$IWoodType$$Type} from "com.buuz135.functionalstorage.util.IWoodType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $DrawerTile extends $ItemControllableDrawerTile<($DrawerTile)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
 "handler": $BigInventoryHandler
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<($DrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($DrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $FunctionalStorage$DrawerType$$Type, arg5: $IWoodType$$Type)

public "getStorage"(): $IItemHandler
public "initClient"(): void
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getDrawerType"(): $FunctionalStorage$DrawerType
public "getHandler"(): $BigInventoryHandler
public "getSelf"(): $DrawerTile
public "getUpdatePacket"(): $Packet
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "drawerType"(): $FunctionalStorage$DrawerType
get "self"(): $DrawerTile
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerTile$$Type = ($DrawerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawerTile$$Original = $DrawerTile;}
declare module "com.buuz135.functionalstorage.block.FramedSimpleCompactingDrawerBlock" {
import {$SimpleCompactingDrawerBlock} from "com.buuz135.functionalstorage.block.SimpleCompactingDrawerBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$FramedBlock$$Interface} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$SimpleCompactingDrawerTile} from "com.buuz135.functionalstorage.block.tile.SimpleCompactingDrawerTile"

export class $FramedSimpleCompactingDrawerBlock extends $SimpleCompactingDrawerBlock implements $FramedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
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

constructor(arg0: StringJS)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($SimpleCompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedSimpleCompactingDrawerBlock$$Type = ($FramedSimpleCompactingDrawerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedSimpleCompactingDrawerBlock$$Original = $FramedSimpleCompactingDrawerBlock;}
declare module "com.buuz135.functionalstorage.block.CompactingDrawerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$Collection} from "java.util.Collection"
import {$List} from "java.util.List"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$CompactingDrawerTile} from "com.buuz135.functionalstorage.block.tile.CompactingDrawerTile"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$Drawer} from "com.buuz135.functionalstorage.block.Drawer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CompactingDrawerBlock extends $Drawer<($CompactingDrawerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "CACHED_ROTATED_SHAPES": $HashMap<($Direction), ($HashMap<($Direction), ($List<($VoxelShape)>)>)>
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
static "CACHED_SHAPES": $Multimap<($Direction), ($VoxelShape)>

constructor(arg0: StringJS, arg1: $BlockBehaviour$Properties$$Type)

public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerBlock$$Type = ($CompactingDrawerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompactingDrawerBlock$$Original = $CompactingDrawerBlock;}
declare module "com.buuz135.functionalstorage.block.tile.StorageControllerTile" {
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LinkingToolItem$ActionMode$$Type} from "com.buuz135.functionalstorage.item.LinkingToolItem$ActionMode"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$InventoryComponent} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ConfigurationToolItem$ConfigurationAction$$Type} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$ConnectedDrawers} from "com.buuz135.functionalstorage.util.ConnectedDrawers"
import {$ControllableDrawerTile, $ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$ControllerInventoryHandler} from "com.buuz135.functionalstorage.inventory.ControllerInventoryHandler"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$ControllerFluidHandler} from "com.buuz135.functionalstorage.fluid.ControllerFluidHandler"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $StorageControllerTile<T extends $StorageControllerTile<(object)>> extends $ItemControllableDrawerTile<(T)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "fluidHandler": $ControllerFluidHandler
 "inventoryHandler": $ControllerInventoryHandler

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(T)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "getStorage"(): $IItemHandler
public "initClient"(): void
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double): $InteractionResult
public "addConnectedDrawers"(arg0: $LinkingToolItem$ActionMode$$Type, ...arg1: ($BlockPos$$Type)[]): boolean
public "toggleLocking"(): void
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): void
public "getUtilitySlotAmount"(): integer
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "getConnectedDrawers"(): $ConnectedDrawers
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getUpdatePacket"(): $Packet
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "utilitySlotAmount"(): integer
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "connectedDrawers"(): $ConnectedDrawers
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerTile$$Type<T> = ($StorageControllerTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageControllerTile$$Original<T> = $StorageControllerTile<(T)>;}
declare module "com.buuz135.functionalstorage.block.StorageControllerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$StorageControllerTile} from "com.buuz135.functionalstorage.block.tile.StorageControllerTile"
import {$RotatableBlock} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class$$Type} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $StorageControllerBlock<T extends $StorageControllerTile<(object)>> extends $RotatableBlock<(T)> {
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
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageControllerBlock$$Type<T> = ($StorageControllerBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageControllerBlock$$Original<T> = $StorageControllerBlock<(T)>;}
declare module "com.buuz135.functionalstorage.block.tile.FramedTile" {
import {$FramedDrawerModelData, $FramedDrawerModelData$$Type} from "com.buuz135.functionalstorage.client.model.FramedDrawerModelData"

export interface $FramedTile$$Interface {
get "framedDrawerModelData"(): $FramedDrawerModelData
set "framedDrawerModelData"(value: $FramedDrawerModelData$$Type)
}

export class $FramedTile implements $FramedTile$$Interface {
 "getFramedDrawerModelData"(): $FramedDrawerModelData
 "setFramedDrawerModelData"(arg0: $FramedDrawerModelData$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedTile$$Type = ($FramedTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedTile$$Original = $FramedTile;}
declare module "com.buuz135.functionalstorage.block.CompactingFramedDrawerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$List} from "java.util.List"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$CompactingDrawerTile} from "com.buuz135.functionalstorage.block.tile.CompactingDrawerTile"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$CompactingDrawerBlock} from "com.buuz135.functionalstorage.block.CompactingDrawerBlock"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$FramedBlock$$Interface} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $CompactingFramedDrawerBlock extends $CompactingDrawerBlock implements $FramedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "CACHED_ROTATED_SHAPES": $HashMap<($Direction), ($HashMap<($Direction), ($List<($VoxelShape)>)>)>
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
static "CACHED_SHAPES": $Multimap<($Direction), ($VoxelShape)>

constructor(arg0: StringJS)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($CompactingDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingFramedDrawerBlock$$Type = ($CompactingFramedDrawerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompactingFramedDrawerBlock$$Original = $CompactingFramedDrawerBlock;}
declare module "com.buuz135.functionalstorage.block.tile.FluidDrawerTile" {
import {$ControllableDrawerTile} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ActiveTile} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$BigFluidHandler} from "com.buuz135.functionalstorage.fluid.BigFluidHandler"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$InventoryComponent} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $FluidDrawerTile extends $ControllableDrawerTile<($FluidDrawerTile)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
 "fluidHandler": $BigFluidHandler

constructor(arg0: $BasicTileBlock$$Type<($FluidDrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($FluidDrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $FunctionalStorage$DrawerType$$Type)

public "getItemHandler"(arg0: $Direction$$Type): $IItemHandler
public "initClient"(): void
public "setLocked"(arg0: boolean): void
public "getStorageSlotAmount"(): integer
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<($FluidDrawerTile)>)>
public "isInventoryEmpty"(): boolean
public "getDrawerType"(): $FunctionalStorage$DrawerType
public "getSelf"(): $ActiveTile
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "getFluidHandler"(): $BigFluidHandler
public "onClicked"(arg0: $Player$$Type, arg1: integer): void
public "getUpdatePacket"(): $Packet
set "locked"(value: boolean)
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<($FluidDrawerTile)>)>
get "inventoryEmpty"(): boolean
get "drawerType"(): $FunctionalStorage$DrawerType
get "self"(): $ActiveTile
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerTile$$Type = ($FluidDrawerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidDrawerTile$$Original = $FluidDrawerTile;}
declare module "com.buuz135.functionalstorage.block.tile.EnderDrawerTile" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderDrawerTile extends $ItemControllableDrawerTile<($EnderDrawerTile)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<($EnderDrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($EnderDrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $EnderDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "getStorage"(): $IItemHandler
public "initClient"(): void
public "setLocked"(arg0: boolean): void
public "setFrequency"(arg0: StringJS): void
public "getStorageSlotAmount"(): integer
public "isEverythingEmpty"(): boolean
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "setLevel"(arg0: $Level$$Type): void
public "isVoid"(): boolean
public "getFrequency"(): StringJS
public "getSelf"(): $EnderDrawerTile
public "onClicked"(arg0: $Player$$Type, arg1: integer): void
public "getUpdatePacket"(): $Packet
get "storage"(): $IItemHandler
set "locked"(value: boolean)
set "frequency"(value: StringJS)
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
set "level"(value: $Level$$Type)
get "void"(): boolean
get "frequency"(): StringJS
get "self"(): $EnderDrawerTile
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDrawerTile$$Type = ($EnderDrawerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderDrawerTile$$Original = $EnderDrawerTile;}
declare module "com.buuz135.functionalstorage.block.tile.ControllerExtensionTile" {
import {$StorageControllerExtensionTile} from "com.buuz135.functionalstorage.block.tile.StorageControllerExtensionTile"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ControllerExtensionTile extends $StorageControllerExtensionTile<($ControllerExtensionTile)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<($ControllerExtensionTile$$Type)>, arg1: $BlockEntityType$$Type<($ControllerExtensionTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "getSelf"(): $ControllerExtensionTile
public "getUpdatePacket"(): $Packet
get "self"(): $ControllerExtensionTile
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerExtensionTile$$Type = ($ControllerExtensionTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllerExtensionTile$$Original = $ControllerExtensionTile;}
declare module "com.buuz135.functionalstorage.block.DrawerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$List} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection} from "java.util.Collection"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$DrawerTile} from "com.buuz135.functionalstorage.block.tile.DrawerTile"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$Drawer} from "com.buuz135.functionalstorage.block.Drawer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$IWoodType, $IWoodType$$Type} from "com.buuz135.functionalstorage.util.IWoodType"

export class $DrawerBlock extends $Drawer<($DrawerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "LOCKED": $BooleanProperty
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "CACHED_ROTATED_SHAPES": $HashMap<($Direction), ($HashMap<($Direction), ($List<($VoxelShape)>)>)>
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
static readonly "CACHED_SHAPES": $HashMap<($FunctionalStorage$DrawerType), ($Multimap<($Direction), ($VoxelShape)>)>

constructor(arg0: $IWoodType$$Type, arg1: $FunctionalStorage$DrawerType$$Type, arg2: $BlockBehaviour$Properties$$Type)

public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
public "getWoodType"(): $IWoodType
public static "getDefaultHitShapes"(arg0: $FunctionalStorage$DrawerType$$Type, arg1: $BlockState$$Type): $Collection<($VoxelShape)>
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "getType"(): $FunctionalStorage$DrawerType
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
get "woodType"(): $IWoodType
get "type"(): $FunctionalStorage$DrawerType
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
declare module "com.buuz135.functionalstorage.block.EnderDrawerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$Drawer} from "com.buuz135.functionalstorage.block.Drawer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnderDrawerTile} from "com.buuz135.functionalstorage.block.tile.EnderDrawerTile"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EnderDrawerBlock extends $Drawer<($EnderDrawerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "FREQUENCY_LOOK": $HashMap<(StringJS), ($List<($ItemStack)>)>
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

public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnderDrawerTile)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public static "getFrequencyDisplay"(arg0: StringJS): $List<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($EnderDrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnderDrawerBlock$$Type = ($EnderDrawerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnderDrawerBlock$$Original = $EnderDrawerBlock;}
declare module "com.buuz135.functionalstorage.block.tile.CompactingDrawerTile" {
import {$ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$CompactingInventoryHandler} from "com.buuz135.functionalstorage.inventory.CompactingInventoryHandler"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$ItemControllableDrawerTile, $ItemControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ItemControllableDrawerTile"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $CompactingDrawerTile extends $ItemControllableDrawerTile<($CompactingDrawerTile)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
 "handler": $CompactingInventoryHandler
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<($CompactingDrawerTile$$Type)>, arg1: $BlockEntityType$$Type<($CompactingDrawerTile$$Type)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type)

public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $CompactingDrawerTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ItemControllableDrawerTile$$Type): void
public "getStorage"(): $IItemHandler
public "initClient"(): void
public "getStorageSlotAmount"(): integer
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getHandler"(): $CompactingInventoryHandler
public "getSelf"(): $ActiveTile
public "getUpdatePacket"(): $Packet
get "storage"(): $IItemHandler
get "storageSlotAmount"(): integer
get "self"(): $ActiveTile
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompactingDrawerTile$$Type = ($CompactingDrawerTile);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompactingDrawerTile$$Original = $CompactingDrawerTile;}
declare module "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile" {
import {$ConfigurationToolItem$ConfigurationAction$$Type} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$DrawerProperties$$Type} from "com.buuz135.functionalstorage.block.tile.DrawerProperties"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ActiveTile, $ActiveTile$$Type} from "com.hrznstudio.titanium.block.tile.ActiveTile"
import {$ControllableDrawerTile$DrawerOptions} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile$DrawerOptions"
import {$BasicTileBlock$$Type} from "com.hrznstudio.titanium.block.BasicTileBlock"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$SizeProvider} from "com.buuz135.functionalstorage.item.component.SizeProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier} from "java.util.function.Supplier"
import {$InventoryComponent} from "com.hrznstudio.titanium.component.inventory.InventoryComponent"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ControllableDrawerTile<T extends $ControllableDrawerTile<(object)>> extends $ActiveTile<(T)> {
readonly "sizeUpgradeComponent": $Supplier<($DataComponentType<($SizeProvider)>)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BasicTileBlock$$Type<(T)>, arg1: $BlockEntityType$$Type<(T)>, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $DrawerProperties$$Type)

public "getTitleColor"(): integer
public "getFacingDirection"(): $Direction
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ActiveTile$$Type): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: T): void
public "serverTick"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $BlockEntity$$Type): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "initClient"(): void
public "recalculateUpgrades"(): void
public "setLocked"(arg0: boolean): void
public "setControllerPos"(arg0: $BlockPos$$Type): void
public "getControllerPos"(): $BlockPos
public "getStorageSlotAmount"(): integer
public "isEverythingEmpty"(): boolean
public "getStorageUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "onSlotActivated"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $Direction$$Type, arg3: double, arg4: double, arg5: double, arg6: integer): $InteractionResult
public "getDrawerOptions"(): $ControllableDrawerTile$DrawerOptions
public "getUtilityUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "toggleLocking"(): void
public "toggleOption"(arg0: $ConfigurationToolItem$ConfigurationAction$$Type): void
public "getStorageMultiplier"(): float
public "setNeedsUpgradeCache"(arg0: boolean): void
public "getUtilitySlotAmount"(): integer
public "getStorageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
public "isStorageUpgradeLocked"(): boolean
public "clearControllerPos"(): void
public "isVoid"(): boolean
public "isLocked"(): boolean
public "isCreative"(): boolean
public "onClicked"(arg0: $Player$$Type, arg1: integer): void
public "getUpdatePacket"(): $Packet
get "titleColor"(): integer
get "facingDirection"(): $Direction
set "locked"(value: boolean)
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $BlockPos
get "storageSlotAmount"(): integer
get "everythingEmpty"(): boolean
get "storageUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "drawerOptions"(): $ControllableDrawerTile$DrawerOptions
get "utilityUpgrades"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "storageMultiplier"(): float
set "needsUpgradeCache"(value: boolean)
get "utilitySlotAmount"(): integer
get "storageUpgradesConstructor"(): $InventoryComponent<($ControllableDrawerTile<(T)>)>
get "storageUpgradeLocked"(): boolean
get "void"(): boolean
get "locked"(): boolean
get "creative"(): boolean
get "updatePacket"(): $Packet
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllableDrawerTile$$Type<T> = ($ControllableDrawerTile<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllableDrawerTile$$Original<T> = $ControllableDrawerTile<(T)>;}
declare module "com.buuz135.functionalstorage.block.FramedDrawerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Multimap} from "com.google.common.collect.Multimap"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction} from "net.minecraft.core.Direction"
import {$DrawerTile} from "com.buuz135.functionalstorage.block.tile.DrawerTile"
import {$HashMap} from "java.util.HashMap"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$FramedBlock$$Interface} from "com.buuz135.functionalstorage.block.FramedBlock"
import {$DrawerBlock} from "com.buuz135.functionalstorage.block.DrawerBlock"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$FramedDrawerModelData} from "com.buuz135.functionalstorage.client.model.FramedDrawerModelData"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $FramedDrawerBlock extends $DrawerBlock implements $FramedBlock$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "LOCKED": $BooleanProperty
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
static readonly "FACING_ALL": $DirectionProperty
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "OCCLUSION_CACHE": $ThreadLocal<($Object2ByteLinkedOpenHashMap<($Block$BlockStatePairKey)>)>
static readonly "UPDATE_NONE": integer
static readonly "UPDATE_INVISIBLE": integer
static readonly "CACHED_ROTATED_SHAPES": $HashMap<($Direction), ($HashMap<($Direction), ($List<($VoxelShape)>)>)>
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
static readonly "CACHED_SHAPES": $HashMap<($FunctionalStorage$DrawerType), ($Multimap<($Direction), ($VoxelShape)>)>

constructor(arg0: $FunctionalStorage$DrawerType$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
public static "getDrawerModelData"(arg0: $ItemStack$$Type): $FramedDrawerModelData
public static "fill"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $ItemStack$$Type, arg3: $ItemStack$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($DrawerTile)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FramedDrawerBlock$$Type = ($FramedDrawerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FramedDrawerBlock$$Original = $FramedDrawerBlock;}
declare module "com.buuz135.functionalstorage.block.Drawer" {
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Class$$Type} from "java.lang.Class"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection} from "java.util.Collection"
import {$ControllableDrawerTile} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$RotatableBlock} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $Drawer<T extends $ControllableDrawerTile<(object)>> extends $RotatableBlock<(T)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
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

public "hasCustomBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getDynamicDrops"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getRotationType"(): $RotatableBlock$RotationType
public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $LevelReader$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCollisionShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public "getLootTable"(arg0: any): $LootTable$Builder
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "isSignalSource"(arg0: $BlockState$$Type): boolean
public "getSignal"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): integer
public "hasIndividualRenderVoxelShape"(): boolean
public "getHit"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $Player$$Type): integer
public "getBlockEntityAt"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ControllableDrawerTile<(never)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "rotationType"(): $RotatableBlock$RotationType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Drawer$$Type<T> = ($Drawer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Drawer$$Original<T> = $Drawer<(T)>;}
declare module "com.buuz135.functionalstorage.block.ArmoryCabinetBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$LootParams$Builder$$Type} from "net.minecraft.world.level.storage.loot.LootParams$Builder"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$RotatableBlock} from "com.hrznstudio.titanium.block.RotatableBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$RotatableBlock$RotationType} from "com.hrznstudio.titanium.block.RotatableBlock$RotationType"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$ArmoryCabinetTile} from "com.buuz135.functionalstorage.block.tile.ArmoryCabinetTile"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ArmoryCabinetBlock extends $RotatableBlock<($ArmoryCabinetTile)> {
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

public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
public "getDynamicDrops"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): $NonNullList<($ItemStack)>
public "getRotationType"(): $RotatableBlock$RotationType
public "getDrops"(arg0: $BlockState$$Type, arg1: $LootParams$Builder$$Type): $List<($ItemStack)>
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
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
export type $ArmoryCabinetBlock$$Type = ($ArmoryCabinetBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmoryCabinetBlock$$Original = $ArmoryCabinetBlock;}
declare module "com.buuz135.functionalstorage.block.DrawerControllerBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$StorageControllerBlock} from "com.buuz135.functionalstorage.block.StorageControllerBlock"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BasicBlockLootTables$$Type} from "com.hrznstudio.titanium.datagenerator.loot.block.BasicBlockLootTables"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$LootTable$Builder} from "net.minecraft.world.level.storage.loot.LootTable$Builder"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$DrawerControllerTile} from "com.buuz135.functionalstorage.block.tile.DrawerControllerTile"

export class $DrawerControllerBlock extends $StorageControllerBlock<($DrawerControllerTile)> {
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

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
public "getLootTable"(arg0: any): $LootTable$Builder
public "getLootTable"(arg0: $BasicBlockLootTables$$Type): $LootTable$Builder
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DrawerControllerBlock$$Type = ($DrawerControllerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DrawerControllerBlock$$Original = $DrawerControllerBlock;}
declare module "com.buuz135.functionalstorage.block.FluidDrawerBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityType$BlockEntitySupplier} from "net.minecraft.world.level.block.entity.BlockEntityType$BlockEntitySupplier"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$FunctionalStorage$DrawerType, $FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Collection} from "java.util.Collection"
import {$FluidDrawerTile} from "com.buuz135.functionalstorage.block.tile.FluidDrawerTile"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Drawer} from "com.buuz135.functionalstorage.block.Drawer"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

export class $FluidDrawerBlock extends $Drawer<($FluidDrawerTile)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "FACING_HORIZONTAL_CUSTOM": $DirectionProperty
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

constructor(arg0: $FunctionalStorage$DrawerType$$Type, arg1: $BlockBehaviour$Properties$$Type)

public "getBoundingBoxes"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): $List<($VoxelShape)>
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getTileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getHitShapes"(arg0: $BlockState$$Type): $Collection<($VoxelShape)>
public "getType"(): $FunctionalStorage$DrawerType
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "tileEntityFactory"(): $BlockEntityType$BlockEntitySupplier<($FluidDrawerTile)>
get "type"(): $FunctionalStorage$DrawerType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidDrawerBlock$$Type = ($FluidDrawerBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidDrawerBlock$$Original = $FluidDrawerBlock;}
