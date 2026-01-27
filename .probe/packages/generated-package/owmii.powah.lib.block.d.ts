declare module "owmii.powah.lib.block.IBlock" {
import {$EntityBlock$$Interface} from "net.minecraft.world.level.block.EntityBlock"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$IVariant, $IVariant$$Type} from "owmii.powah.lib.registry.IVariant"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IVariantEntry$$Interface} from "owmii.powah.lib.registry.IVariantEntry"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemBlock} from "owmii.powah.lib.item.ItemBlock"

export interface $IBlock$$Interface<V extends $IVariant<(object)>, B extends $Block> extends $IVariantEntry$$Interface<(V), (B)>, $EntityBlock$$Interface {

(): V
get "variant"(): V
}

export class $IBlock<V extends $IVariant<(object)>, B extends $Block> implements $IBlock$$Interface {
 "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
 "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
 "getBlockItem"(arg0: $Item$Properties$$Type, arg1: $ResourceKey$$Type<($CreativeModeTab)>): $ItemBlock
 "getVariant"(): V
 "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlock$$Type<V, B> = (() => V);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlock$$Original<V, B> = $IBlock<(V), (B)>;}
declare module "owmii.powah.lib.block.AbstractBlock" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Mirror$$Type} from "net.minecraft.world.level.block.Mirror"
import {$IVariant, $IVariant$$Type} from "owmii.powah.lib.registry.IVariant"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IVariantEntry$$Interface} from "owmii.powah.lib.registry.IVariantEntry"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainer} from "owmii.powah.lib.logistics.inventory.AbstractContainer"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$CollisionContext$$Type} from "net.minecraft.world.phys.shapes.CollisionContext"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$GameEventListener} from "net.minecraft.world.level.gameevent.GameEventListener"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$ItemBlock} from "owmii.powah.lib.item.ItemBlock"
import {$IBlock$$Interface} from "owmii.powah.lib.block.IBlock"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$AbstractTileEntity, $AbstractTileEntity$$Type} from "owmii.powah.lib.block.AbstractTileEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Rotation$$Type} from "net.minecraft.world.level.block.Rotation"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$FluidState} from "net.minecraft.world.level.material.FluidState"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $AbstractBlock<V extends $IVariant<(object)>, B extends $AbstractBlock<(object), (object)>> extends $Block implements $IVariantEntry$$Interface<(V), (B)>, $IBlock$$Interface<(V), (B)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SEMI_FULL_SHAPE": $VoxelShape
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
constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: V)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "updateShape"(arg0: $BlockState$$Type, arg1: $Direction$$Type, arg2: $BlockState$$Type, arg3: $LevelAccessor$$Type, arg4: $BlockPos$$Type, arg5: $BlockPos$$Type): $BlockState
public "playerDestroy"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $BlockEntity$$Type, arg5: $ItemStack$$Type): void
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public "onPlace"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "useShapeForLightOcclusion"(arg0: $BlockState$$Type): boolean
public "propagatesSkylightDown"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): boolean
public "getContainer"<T extends $AbstractTileEntity<(object), (object)>>(arg0: integer, arg1: $Inventory$$Type, arg2: $AbstractTileEntity$$Type, arg3: $BlockHitResult$$Type): $AbstractContainer
public "getVariant"(): V
public "getShape"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $CollisionContext$$Type): $VoxelShape
public static "box"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): $VoxelShape
public "rotate"(arg0: $BlockState$$Type, arg1: $Rotation$$Type): $BlockState
public "getDisplayName"(arg0: $ItemStack$$Type): $Component
public "mirror"(arg0: $BlockState$$Type, arg1: $Mirror$$Type): $BlockState
public "getFluidState"(arg0: $BlockState$$Type): $FluidState
public "getCloneItemStack"(arg0: $BlockState$$Type, arg1: $HitResult$$Type, arg2: $BlockGetter$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type): $ItemStack
public "getCloneItemStack"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $ItemStack
public "onRemove"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: boolean): void
public "triggerEvent"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getBlockItem"(arg0: $Item$Properties$$Type, arg1: $ResourceKey$$Type<($CreativeModeTab)>): $ItemBlock
public "getListener"<T extends $BlockEntity>(arg0: $ServerLevel$$Type, arg1: T): $GameEventListener
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "variant"(): V
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractBlock$$Type<V, B> = ($AbstractBlock<(V), (B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractBlock$$Original<V, B> = $AbstractBlock<(V), (B)>;}
declare module "owmii.powah.lib.block.IInventoryHolder" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Inventory} from "owmii.powah.lib.logistics.inventory.Inventory"

export interface $IInventoryHolder$$Interface {
get "inventory"(): $Inventory
}

export class $IInventoryHolder implements $IInventoryHolder$$Interface {
 "onSlotChanged"(arg0: integer): void
 "canExtract"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "canInsert"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getStack"(arg0: integer): $ItemStack
 "grow"(arg0: integer, arg1: integer): $ItemStack
 "shrink"(arg0: integer, arg1: integer): $ItemStack
 "shrink"(arg0: (integer)[], arg1: integer): void
 "getInventory"(): $Inventory
 "getSlotLimit"(arg0: integer): integer
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryHolder$$Type = ($IInventoryHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInventoryHolder$$Original = $IInventoryHolder;}
declare module "owmii.powah.lib.block.AbstractTickableTile" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IVariant, $IVariant$$Type} from "owmii.powah.lib.registry.IVariant"
import {$AbstractBlock} from "owmii.powah.lib.block.AbstractBlock"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractTileEntity} from "owmii.powah.lib.block.AbstractTileEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractTickableTile<V extends $IVariant<(object)>, B extends $AbstractBlock<(object), (object)>> extends $AbstractTileEntity<(V), (B)> {
 "ticks": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)
constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: V)

public "tick"(): void
public "sync"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTickableTile$$Type<V, B> = ($AbstractTickableTile<(V), (B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTickableTile$$Original<V, B> = $AbstractTickableTile<(V), (B)>;}
declare module "owmii.powah.lib.block.AbstractGeneratorBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Tier$$Type} from "owmii.powah.block.Tier"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$Transfer} from "owmii.powah.lib.logistics.Transfer"
import {$AbstractEnergyBlock} from "owmii.powah.lib.block.AbstractEnergyBlock"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$Item} from "net.minecraft.world.item.Item"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$GeneratorConfig} from "owmii.powah.config.v2.types.GeneratorConfig"
import {$Energy$Item$$Type} from "owmii.powah.lib.logistics.energy.Energy$Item"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractGeneratorBlock<B extends $AbstractGeneratorBlock<(object)>> extends $AbstractEnergyBlock<($GeneratorConfig), (B)> {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SEMI_FULL_SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Tier$$Type)
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "getTransferType"(): $Transfer
public "additionalEnergyInfo"(arg0: $ItemStack$$Type, arg1: $Energy$Item$$Type, arg2: $List$$Type<($Component$$Type)>): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "transferType"(): $Transfer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractGeneratorBlock$$Type<B> = ($AbstractGeneratorBlock<(B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractGeneratorBlock$$Original<B> = $AbstractGeneratorBlock<(B)>;}
declare module "owmii.powah.lib.block.IBlockEntity" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IBlockEntity$$Interface {
}

export class $IBlockEntity implements $IBlockEntity$$Interface {
 "onPlaced"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
 "onRemoved"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: boolean): void
 "onAdded"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBlockEntity$$Type = ($IBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBlockEntity$$Original = $IBlockEntity;}
declare module "owmii.powah.lib.block.AbstractTileEntity" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Tank} from "owmii.powah.lib.logistics.fluid.Tank"
import {$IVariant, $IVariant$$Type} from "owmii.powah.lib.registry.IVariant"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Inventory} from "owmii.powah.lib.logistics.inventory.Inventory"
import {$IRedstoneInteract$$Interface} from "owmii.powah.lib.logistics.IRedstoneInteract"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Redstone, $Redstone$$Type} from "owmii.powah.lib.logistics.Redstone"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$IBlockEntity$$Interface} from "owmii.powah.lib.block.IBlockEntity"
import {$AbstractBlock} from "owmii.powah.lib.block.AbstractBlock"
import {$ClientboundBlockEntityDataPacket} from "net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractTileEntity<V extends $IVariant<(object)>, B extends $AbstractBlock<(object), (object)>> extends $BlockEntity implements $IBlockEntity$$Interface, $IRedstoneInteract$$Interface {
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: V)
constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getUpdatePacket"(): $ClientboundBlockEntityDataPacket
public "getUpdateTag"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "onPlaced"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $LivingEntity$$Type, arg3: $ItemStack$$Type): void
public "storeToStack"(arg0: $ItemStack$$Type): $ItemStack
public "checkRedstone"(): boolean
public "readStorable"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeStorable"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "isRemote"(): boolean
public "getRedstoneMode"(): $Redstone
public "setRedstoneMode"(arg0: $Redstone$$Type): void
public "keepStorable"(): boolean
public "setContainerOpen"(arg0: boolean): void
public "onRemoved"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: boolean): void
public "getVariant"(): V
public "getBlock"(): B
public "sync"(): void
public "getInventory"(): $Inventory
public "getTank"(): $Tank
public "onAdded"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: boolean): void
public "nextRedstoneMode"(): void
get "updatePacket"(): $ClientboundBlockEntityDataPacket
get "remote"(): boolean
get "redstoneMode"(): $Redstone
set "redstoneMode"(value: $Redstone$$Type)
set "containerOpen"(value: boolean)
get "variant"(): V
get "block"(): B
get "inventory"(): $Inventory
get "tank"(): $Tank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractTileEntity$$Type<V, B> = ($AbstractTileEntity<(V), (B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractTileEntity$$Original<V, B> = $AbstractTileEntity<(V), (B)>;}
declare module "owmii.powah.lib.block.AbstractEnergyStorage" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Tier, $Tier$$Type} from "owmii.powah.block.Tier"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IEnergyConfig} from "owmii.powah.config.IEnergyConfig"
import {$IRedstoneInteract$$Interface} from "owmii.powah.lib.logistics.IRedstoneInteract"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Transfer} from "owmii.powah.lib.logistics.Transfer"
import {$AbstractEnergyBlock} from "owmii.powah.lib.block.AbstractEnergyBlock"
import {$Energy} from "owmii.powah.lib.logistics.energy.Energy"
import {$Redstone, $Redstone$$Type} from "owmii.powah.lib.logistics.Redstone"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$SideConfig} from "owmii.powah.lib.logistics.energy.SideConfig"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractTickableTile} from "owmii.powah.lib.block.AbstractTickableTile"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $AbstractEnergyStorage<C extends $IEnergyConfig<(object)>, B extends $AbstractEnergyBlock<(object), (object)>> extends $AbstractTickableTile<($Tier), (B)> implements $IRedstoneInteract$$Interface {
 "ticks": integer
static readonly "ATTACHMENTS_NBT_KEY": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Tier$$Type)
constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "getEnergy"(): $Energy
public "extractEnergy"(arg0: long, arg1: boolean, arg2: $Direction$$Type): long
public "receiveEnergy"(arg0: long, arg1: boolean, arg2: $Direction$$Type): long
public "getTransferType"(): $Transfer
public "canExtractEnergy"(arg0: $Direction$$Type): boolean
public "canReceiveEnergy"(arg0: $Direction$$Type): boolean
public "keepEnergy"(): boolean
public "readSync"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "readStorable"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeSync"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "writeStorable"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "getSideConfig"(): $SideConfig
public "isEnergyPresent"(arg0: $Direction$$Type): boolean
public "onAdded"(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockState$$Type, arg3: boolean): void
public "getExternalStorage"(arg0: $Direction$$Type): $IEnergyStorage
public "getRedstoneMode"(): $Redstone
public "setRedstoneMode"(arg0: $Redstone$$Type): void
get "energy"(): $Energy
get "transferType"(): $Transfer
get "sideConfig"(): $SideConfig
get "redstoneMode"(): $Redstone
set "redstoneMode"(value: $Redstone$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEnergyStorage$$Type<C, B> = ($AbstractEnergyStorage<(C), (B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractEnergyStorage$$Original<C, B> = $AbstractEnergyStorage<(C), (B)>;}
declare module "owmii.powah.lib.block.AbstractEnergyBlock" {
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Tier, $Tier$$Type} from "owmii.powah.block.Tier"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$IConfigHolder$$Interface} from "owmii.powah.config.IConfigHolder"
import {$IEnergyConfig} from "owmii.powah.config.IEnergyConfig"
import {$Transfer} from "owmii.powah.lib.logistics.Transfer"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$EnergyBlockItem} from "owmii.powah.lib.item.EnergyBlockItem"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$IEnergyItemProvider$$Interface} from "owmii.powah.lib.item.IEnergyItemProvider"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$VoxelShape} from "net.minecraft.world.phys.shapes.VoxelShape"
import {$AbstractBlock} from "owmii.powah.lib.block.AbstractBlock"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Energy$Item$$Type} from "owmii.powah.lib.logistics.energy.Energy$Item"

export class $AbstractEnergyBlock<C extends $IEnergyConfig<(object)>, B extends $AbstractEnergyBlock<(object), (object)>> extends $AbstractBlock<($Tier), (B)> implements $IConfigHolder$$Interface<($Tier), (C)>, $IEnergyItemProvider$$Interface {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "SEMI_FULL_SHAPE": $VoxelShape
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

constructor(arg0: $BlockBehaviour$Properties$$Type, arg1: $Tier$$Type)
constructor(arg0: $BlockBehaviour$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "getAnalogOutputSignal"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): integer
public "getTransferType"(): $Transfer
public "addEnergyInfo"(arg0: $ItemStack$$Type, arg1: $Energy$Item$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "addEnergyTransferInfo"(arg0: $ItemStack$$Type, arg1: $Energy$Item$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "additionalEnergyInfo"(arg0: $ItemStack$$Type, arg1: $Energy$Item$$Type, arg2: $List$$Type<($Component$$Type)>): void
public "isChargeable"(arg0: $ItemStack$$Type): boolean
public "getBlockItem"(arg0: $Item$Properties$$Type, arg1: $ResourceKey$$Type<($CreativeModeTab)>): $EnergyBlockItem
public "canSurvive"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type): boolean
public "hasAnalogOutputSignal"(arg0: $BlockState$$Type): boolean
public "getConfig"(): C
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "transferType"(): $Transfer
get "config"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractEnergyBlock$$Type<C, B> = ($AbstractEnergyBlock<(C), (B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractEnergyBlock$$Original<C, B> = $AbstractEnergyBlock<(C), (B)>;}
