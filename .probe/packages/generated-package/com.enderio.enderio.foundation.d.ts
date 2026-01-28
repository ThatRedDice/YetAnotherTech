declare module "com.enderio.enderio.foundation.block.ProgressMachineBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.MachineBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"
import {$MachineBlock} from "com.enderio.enderio.foundation.block.MachineBlock"

export class $ProgressMachineBlock<T extends $MachineBlockEntity> extends $MachineBlock<(T)> {
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
static readonly "FACING": $DirectionProperty

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgressMachineBlock$$Type<T> = ($ProgressMachineBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgressMachineBlock$$Original<T> = $ProgressMachineBlock<(T)>;}
declare module "com.enderio.enderio.foundation.item.CreativeTabIconItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ICustomCreativeTabEntries$$Interface} from "com.enderio.core.common.item.ICustomCreativeTabEntries"
import {$CreativeModeTab$Output$$Type} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export class $CreativeTabIconItem extends $Item implements $ICustomCreativeTabEntries$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "shouldAddDefaultItem"(): boolean
public "addAdditionalCreativeTabEntries"(arg0: $CreativeModeTab$ItemDisplayParameters$$Type, arg1: $CreativeModeTab$Output$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeTabIconItem$$Type = ($CreativeTabIconItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeTabIconItem$$Original = $CreativeTabIconItem;}
declare module "com.enderio.enderio.foundation.io.fluid.MachineFluidTank" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$IFluidTank$$Interface} from "net.neoforged.neoforge.fluids.IFluidTank"
import {$MachineFluidHandler$$Type} from "com.enderio.enderio.foundation.io.fluid.MachineFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $MachineFluidTank implements $IFluidTank$$Interface {
constructor(arg0: integer, arg1: $MachineFluidHandler$$Type)

public "getFluid"(): $FluidStack
public "isFluidValid"(arg0: $FluidStack$$Type): boolean
public "getFluidAmount"(): integer
public "setFluid"(arg0: $FluidStack$$Type): void
public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "getCapacity"(): integer
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
get "fluid"(): $FluidStack
get "fluidAmount"(): integer
set "fluid"(value: $FluidStack$$Type)
get "empty"(): boolean
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFluidTank$$Type = ($MachineFluidTank);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineFluidTank$$Original = $MachineFluidTank;}
declare module "com.enderio.enderio.foundation.io.fluid.MachineTankLayout" {
import {$MachineTankLayout$Builder} from "com.enderio.enderio.foundation.io.fluid.MachineTankLayout$Builder"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $MachineTankLayout {
public "canExtract"(arg0: integer): boolean
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "canInsert"(arg0: integer): boolean
public "getTankCount"(): integer
public static "builder"(): $MachineTankLayout$Builder
get "tankCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTankLayout$$Type = ($MachineTankLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineTankLayout$$Original = $MachineTankLayout;}
declare module "com.enderio.enderio.foundation.inventory.MachineInventory" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IOConfigurable$$Type} from "com.enderio.enderio.api.io.IOConfigurable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MultiSlotAccess$$Type} from "com.enderio.enderio.foundation.inventory.MultiSlotAccess"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$ItemContainerContents, $ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"
import {$MachineInventoryLayout, $MachineInventoryLayout$$Type} from "com.enderio.enderio.foundation.inventory.MachineInventoryLayout"
import {$MachineState$$Type} from "com.enderio.enderio.foundation.state.MachineState"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $MachineInventory extends $ItemStackHandler {
constructor(arg0: $IOConfigurable$$Type, arg1: $MachineInventoryLayout$$Type)

public "copyFromItem"(arg0: $ItemContainerContents$$Type): void
public "toItemContents"(): $ItemContainerContents
public "updateMachineState"(arg0: $MachineState$$Type, arg1: boolean): void
public "getForSide"(arg0: $Direction$$Type): $IItemHandler
public "addSlotChangedCallback"(arg0: $IntConsumer$$Type): void
public "snapshot"(arg0: $MultiSlotAccess$$Type): $MachineInventory
public "layout"(): $MachineInventoryLayout
public "getLayout"(): $MachineInventoryLayout
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventory$$Type = ($MachineInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineInventory$$Original = $MachineInventory;}
declare module "com.enderio.enderio.foundation.inventory.MultiSlotAccess" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$MachineInventory$$Type} from "com.enderio.enderio.foundation.inventory.MachineInventory"
import {$SingleSlotAccess, $SingleSlotAccess$$Type} from "com.enderio.enderio.foundation.inventory.SingleSlotAccess"

export class $MultiSlotAccess {
constructor()

public "getItemStacks"(arg0: $MachineInventory$$Type): $List<($ItemStack)>
public "getAccesses"(): $List<($SingleSlotAccess)>
public "size"(): integer
public "get"(arg0: integer): $SingleSlotAccess
public static "wrap"(arg0: $SingleSlotAccess$$Type): $MultiSlotAccess
public "contains"(arg0: integer): boolean
get "accesses"(): $List<($SingleSlotAccess)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiSlotAccess$$Type = ($MultiSlotAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiSlotAccess$$Original = $MultiSlotAccess;}
declare module "com.enderio.enderio.foundation.io.fluid.MachineFluidHandler" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IOConfigurable, $IOConfigurable$$Type} from "com.enderio.enderio.api.io.IOConfigurable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineTankLayout, $MachineTankLayout$$Type} from "com.enderio.enderio.foundation.io.fluid.MachineTankLayout"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IFluidHandler, $IFluidHandler$$Interface} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$MachineFluidTank} from "com.enderio.enderio.foundation.io.fluid.MachineFluidTank"

export class $MachineFluidHandler implements $IFluidHandler$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
static readonly "TANK_INDEX": StringJS
static readonly "TANK_CONTENTS": StringJS

constructor(arg0: $IOConfigurable$$Type, arg1: $MachineTankLayout$$Type)

public "canExtract"(arg0: integer): boolean
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "canInsert"(arg0: integer): boolean
public "getForSide"(arg0: $Direction$$Type): $IFluidHandler
public "setFluidInTank"(arg0: integer, arg1: $FluidStack$$Type): void
public "addSlotChangedCallback"(arg0: $IntConsumer$$Type): void
public "fill"(arg0: integer, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): integer
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "getLayout"(): $MachineTankLayout
public "getConfig"(): $IOConfigurable
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
/**
 * 
 * @deprecated
 */
public "getTank"(arg0: integer): $MachineFluidTank
get "tanks"(): integer
get "layout"(): $MachineTankLayout
get "config"(): $IOConfigurable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineFluidHandler$$Type = ($MachineFluidHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineFluidHandler$$Original = $MachineFluidHandler;}
declare module "com.enderio.enderio.foundation.io.energy.IMachineEnergyStorage" {
import {$IOConfigurable} from "com.enderio.enderio.api.io.IOConfigurable"
import {$IEnergyStorage$$Interface} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$EnergyIOMode} from "com.enderio.enderio.api.io.energy.EnergyIOMode"

export interface $IMachineEnergyStorage$$Interface extends $IEnergyStorage$$Interface {
get "IOMode"(): $EnergyIOMode
get "maxEnergyUse"(): integer
set "energyStored"(value: integer)
get "config"(): $IOConfigurable
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}

export class $IMachineEnergyStorage implements $IMachineEnergyStorage$$Interface {
 "getIOMode"(): $EnergyIOMode
 "addEnergy"(arg0: integer, arg1: boolean): integer
 "addEnergy"(arg0: integer): integer
 "takeEnergy"(arg0: integer): integer
 "getMaxEnergyUse"(): integer
 "setEnergyStored"(arg0: integer): void
 "consumeEnergy"(arg0: integer, arg1: boolean): integer
 "getConfig"(): $IOConfigurable
 "canExtract"(): boolean
 "extractEnergy"(arg0: integer, arg1: boolean): integer
 "receiveEnergy"(arg0: integer, arg1: boolean): integer
 "canReceive"(): boolean
 "getEnergyStored"(): integer
 "getMaxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachineEnergyStorage$$Type = ($IMachineEnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMachineEnergyStorage$$Original = $IMachineEnergyStorage;}
declare module "com.enderio.enderio.foundation.block.MachineBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$MachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.MachineBlockEntity"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"
import {$EIOEntityBlock} from "com.enderio.enderio.foundation.block.EIOEntityBlock"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MachineBlock<T extends $MachineBlockEntity> extends $EIOEntityBlock<(T)> {
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

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<(T)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "setPlacedBy"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $LivingEntity$$Type, arg4: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineBlock$$Type<T> = ($MachineBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineBlock$$Original<T> = $MachineBlock<(T)>;}
declare module "com.enderio.enderio.foundation.block.entity.Wrenchable" {
import {$ItemInteractionResult, $ItemInteractionResult$$Type} from "net.minecraft.world.ItemInteractionResult"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $Wrenchable$$Interface {

(arg0: $UseOnContext): $ItemInteractionResult$$Type
}

export class $Wrenchable implements $Wrenchable$$Interface {
 "onWrenched"(arg0: $UseOnContext$$Type): $ItemInteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Wrenchable$$Type = ((arg0: $UseOnContext) => $ItemInteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Wrenchable$$Original = $Wrenchable;}
declare module "com.enderio.enderio.foundation.block.entity.MachineInventoryHolder" {
import {$MachineInventory} from "com.enderio.enderio.foundation.inventory.MachineInventory"

export interface $MachineInventoryHolder$$Interface {
get "inventory"(): $MachineInventory
}

export class $MachineInventoryHolder implements $MachineInventoryHolder$$Interface {
 "hasInventory"(): boolean
 "getInventory"(): $MachineInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryHolder$$Type = ($MachineInventoryHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineInventoryHolder$$Original = $MachineInventoryHolder;}
declare module "com.enderio.enderio.foundation.block.legacy.LegacyMachineBlock" {
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$LegacyMachineBlockEntity, $LegacyMachineBlockEntity$$Type} from "com.enderio.enderio.foundation.block.entity.legacy.LegacyMachineBlockEntity"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockBehaviour$Properties$$Type} from "net.minecraft.world.level.block.state.BlockBehaviour$Properties"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$RenderShape} from "net.minecraft.world.level.block.RenderShape"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$DirectionProperty} from "net.minecraft.world.level.block.state.properties.DirectionProperty"

/**
 * 
 * @deprecated
 */
export class $LegacyMachineBlock extends $BaseEntityBlock {
static readonly "UPDATE_IMMEDIATE": integer
 "item": $Item
static readonly "CODEC": $MapCodec<($Block)>
static readonly "UPDATE_NEIGHBORS": integer
static readonly "INDESTRUCTIBLE": float
static readonly "BLOCK_ENTITY_TYPE_CODEC": $Codec<($Supplier<($BlockEntityType<($LegacyMachineBlockEntity)>)>)>
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

constructor(arg0: $Supplier$$Type<($BlockEntityType$$Type<($LegacyMachineBlockEntity$$Type)>)>, arg1: $BlockBehaviour$Properties$$Type)

public "getStateForPlacement"(arg0: $BlockPlaceContext$$Type): $BlockState
public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "getRenderShape"(arg0: $BlockState$$Type): $RenderShape
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "getLightEmission"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LegacyMachineBlock$$Type = ($LegacyMachineBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LegacyMachineBlock$$Original = $LegacyMachineBlock;}
declare module "com.enderio.enderio.foundation.block.entity.MachineInstallable" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $MachineInstallable$$Interface {

(arg0: $ItemStack, arg1: $UseOnContext): $InteractionResult$$Type
}

export class $MachineInstallable implements $MachineInstallable$$Interface {
 "tryItemInstall"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInstallable$$Type = ((arg0: $ItemStack, arg1: $UseOnContext) => $InteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineInstallable$$Original = $MachineInstallable;}
declare module "com.enderio.enderio.foundation.block.entity.legacy.LegacyMachineBlockEntity" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$MachineInventoryHolder$$Interface} from "com.enderio.enderio.foundation.block.entity.MachineInventoryHolder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Set} from "java.util.Set"
import {$Wrenchable$$Interface} from "com.enderio.enderio.foundation.block.entity.Wrenchable"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$MachineInventoryLayout} from "com.enderio.enderio.foundation.inventory.MachineInventoryLayout"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$NetworkDataSlot$CodecType} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$IOConfigurable, $IOConfigurable$$Interface} from "com.enderio.enderio.api.io.IOConfigurable"
import {$SideConfig} from "com.enderio.enderio.api.io.SideConfig"
import {$MachineInventory} from "com.enderio.enderio.foundation.inventory.MachineInventory"
import {$IOConfig} from "com.enderio.enderio.foundation.io.IOConfig"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnderBlockEntity} from "com.enderio.core.common.blockentity.EnderBlockEntity"
import {$ModelProperty} from "net.neoforged.neoforge.client.model.data.ModelProperty"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$IOMode, $IOMode$$Type} from "com.enderio.enderio.api.io.IOMode"
import {$MachineState, $MachineState$$Type} from "com.enderio.enderio.foundation.state.MachineState"

/**
 * 
 * @deprecated
 */
export class $LegacyMachineBlockEntity extends $EnderBlockEntity implements $MenuProvider$$Interface, $Wrenchable$$Interface, $IOConfigurable$$Interface, $MachineInventoryHolder$$Interface {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($LegacyMachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "REDSTONE_CONTROL_DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($RedstoneControl)>
static readonly "DATA": StringJS
static readonly "IO_CONFIG_PROPERTY": $ModelProperty<($IOConfigurable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($LegacyMachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "serverTick"(): void
public "loadAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "saveAdditional"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "canAct"(): boolean
public "onBlockEntityUsed"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $BlockHitResult$$Type): $ItemInteractionResult
public "getInventoryLayout"(): $MachineInventoryLayout
public "supportsRedstoneControl"(): boolean
public "createInventoryLayout"(): $MachineInventoryLayout
public "getDefaultIOConfig"(): $IOConfig
public "updateMachineState"(arg0: $MachineState$$Type, arg1: boolean): void
public "isRedstoneBlocked"(): boolean
public "isIOConfigMutable"(): boolean
public "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
public "shouldRenderIOConfigOverlay"(): boolean
public "getIOMode"(arg0: $Direction$$Type): $IOMode
public "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
public "getMachineStates"(): $Set<($MachineState)>
public "getRedstoneControl"(): $RedstoneControl
public "setRedstoneControl"(arg0: $RedstoneControl$$Type): void
public "canOpenMenu"(): boolean
public "canActSlow"(): boolean
public "onWrenched"(arg0: $UseOnContext$$Type): $ItemInteractionResult
public "hasInventory"(): boolean
public "getDisplayName"(): $Component
public "onLoad"(): void
public "getInventory"(): $MachineInventory
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "neighborChanged"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public "getLightEmission"(): integer
public "getModelData"(): $ModelData
public "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
public "getNextIOMode"(arg0: $Direction$$Type): $IOMode
public "cycleIOMode"(arg0: $Direction$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "inventoryLayout"(): $MachineInventoryLayout
get "defaultIOConfig"(): $IOConfig
get "redstoneBlocked"(): boolean
get "IOConfigMutable"(): boolean
get "machineStates"(): $Set<($MachineState)>
get "redstoneControl"(): $RedstoneControl
set "redstoneControl"(value: $RedstoneControl$$Type)
get "displayName"(): $Component
get "inventory"(): $MachineInventory
get "lightEmission"(): integer
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LegacyMachineBlockEntity$$Type = ($LegacyMachineBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LegacyMachineBlockEntity$$Original = $LegacyMachineBlockEntity;}
declare module "com.enderio.enderio.foundation.recipe.FluidRecipeInput" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$RecipeInput, $RecipeInput$$Interface} from "net.minecraft.world.item.crafting.RecipeInput"
import {$List} from "java.util.List"
import {$SlotFilter$$Type} from "dev.latvian.mods.kubejs.util.SlotFilter"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"

export interface $FluidRecipeInput$$Interface extends $RecipeInput$$Interface {
get "empty"(): boolean
}

export class $FluidRecipeInput implements $FluidRecipeInput$$Interface {
 "getFluid"(arg0: integer): $FluidStack
 "getItem"(arg0: integer): $ItemStack
 "size"(): integer
 "isEmpty"(): boolean
 "findAll"(): $List<($ItemStack)>
 "findAll"(filter: $SlotFilter$$Type): $List<($ItemStack)>
 "find"(filter: $SlotFilter$$Type, skip: integer): $ItemStack
 "find"(filter: $SlotFilter$$Type): $ItemStack
 "self"(): $RecipeInput
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidRecipeInput$$Type = ($FluidRecipeInput);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidRecipeInput$$Original = $FluidRecipeInput;}
declare module "com.enderio.enderio.foundation.attachment.FluidTankUser" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Direction} from "net.minecraft.core.Direction"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$MachineFluidHandler} from "com.enderio.enderio.foundation.io.fluid.MachineFluidHandler"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$MachineTankLayout} from "com.enderio.enderio.foundation.io.fluid.MachineTankLayout"

export interface $FluidTankUser$$Interface {
get "tankLayout"(): $MachineTankLayout
get "fluidHandler"(): $MachineFluidHandler
}

export class $FluidTankUser implements $FluidTankUser$$Interface {
static readonly "FLUID_HANDLER_PROVIDER": $ICapabilityProvider<($BlockEntity), ($Direction), ($IFluidHandler)>

 "saveTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "getTankLayout"(): $MachineTankLayout
 "loadTank"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "createFluidHandler"(): $MachineFluidHandler
 "getFluidHandler"(): $MachineFluidHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTankUser$$Type = ($FluidTankUser);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTankUser$$Original = $FluidTankUser;}
declare module "com.enderio.enderio.foundation.particle.RangeParticleType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$RangeParticleData} from "com.enderio.enderio.foundation.particle.RangeParticleData"
import {$MapCodec} from "com.mojang.serialization.MapCodec"

export class $RangeParticleType extends $ParticleType<($RangeParticleData)> {
constructor()

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($RangeParticleData)>
public "codec"(): $MapCodec<($RangeParticleData)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeParticleType$$Type = ($RangeParticleType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RangeParticleType$$Original = $RangeParticleType;}
declare module "com.enderio.enderio.foundation.inventory.MachineInventoryLayout$Builder$SlotBuilder" {
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $MachineInventoryLayout$Builder$SlotBuilder {
public "stackLimit"(arg0: integer): $MachineInventoryLayout$Builder$SlotBuilder
public "guiInsert"(): $MachineInventoryLayout$Builder$SlotBuilder
public "guiExtract"(): $MachineInventoryLayout$Builder$SlotBuilder
public "extract"(): $MachineInventoryLayout$Builder$SlotBuilder
public "insert"(): $MachineInventoryLayout$Builder$SlotBuilder
public "filter"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder$SlotBuilder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryLayout$Builder$SlotBuilder$$Type = ($MachineInventoryLayout$Builder$SlotBuilder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineInventoryLayout$Builder$SlotBuilder$$Original = $MachineInventoryLayout$Builder$SlotBuilder;}
declare module "com.enderio.enderio.foundation.attachment.RangedActor" {
import {$ActionRange, $ActionRange$$Type} from "com.enderio.enderio.foundation.attachment.ActionRange"

export interface $RangedActor$$Interface {
get "maxRange"(): integer
get "actionRange"(): $ActionRange
set "actionRange"(value: $ActionRange$$Type)
get "rangeVisible"(): boolean
set "rangeVisible"(value: boolean)
get "range"(): integer
}

export class $RangedActor implements $RangedActor$$Interface {
 "getMaxRange"(): integer
 "getActionRange"(): $ActionRange
 "setActionRange"(arg0: $ActionRange$$Type): void
 "isRangeVisible"(): boolean
 "setRangeVisible"(arg0: boolean): void
 "increaseRange"(): void
 "decreaseRange"(): void
 "getRange"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangedActor$$Type = ($RangedActor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RangedActor$$Original = $RangedActor;}
declare module "com.enderio.enderio.foundation.io.IOConfig" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$NetworkDataSlot$CodecType} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function$$Type} from "java.util.function.Function"
import {$IOMode, $IOMode$$Type} from "com.enderio.enderio.api.io.IOMode"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$Record} from "java.lang.Record"

export class $IOConfig extends $Record {
static readonly "CODEC": $Codec<($IOConfig)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($IOConfig)>
static readonly "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($IOConfig)>

constructor(modes: $Map$$Type<($Direction$$Type), ($IOMode$$Type)>)

public static "parseOptional"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): $IOConfig
public "withMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOConfig
public "modes"(): $Map<($Direction), ($IOMode)>
public "getMode"(arg0: $Direction$$Type): $IOMode
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "copyOf"(arg0: $IOConfig$$Type): $IOConfig
public static "of"(arg0: $IOMode$$Type): $IOConfig
public static "of"(arg0: $Function$$Type<($Direction), ($IOMode$$Type)>): $IOConfig
public static "empty"(): $IOConfig
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $Optional<($IOConfig)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IOConfig$$Type = ({"modes"?: $Map$$Type<($Direction$$Type), ($IOMode$$Type)>}) | ([modes?: $Map$$Type<($Direction$$Type), ($IOMode$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IOConfig$$Original = $IOConfig;}
declare module "com.enderio.enderio.foundation.state.MachineState" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$NetworkDataSlot$CodecType} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$MutableComponent, $MutableComponent$$Type} from "net.minecraft.network.chat.MutableComponent"
import {$Set} from "java.util.Set"
import {$MachineStateType, $MachineStateType$$Type} from "com.enderio.enderio.foundation.state.MachineStateType"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $MachineState extends $Record {
static readonly "NOT_SOULBOUND": $MachineState
static readonly "CODEC": $Codec<($MachineState)>
static readonly "ACTIVE": $MachineState
static readonly "REDSTONE": $MachineState
static readonly "EMPTY_INPUT": $MachineState
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MachineState)>
static readonly "NO_SOURCE": $MachineState
static readonly "IDLE": $MachineState
static readonly "EMPTY_TANK": $MachineState
static readonly "NO_POWER": $MachineState
static readonly "FULL_OUTPUT": $MachineState
static readonly "FULL_TANK": $MachineState
static readonly "FULL_POWER": $MachineState
static readonly "NO_CAPACITOR": $MachineState
static readonly "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($Set<($MachineState)>)>

constructor(type: $MachineStateType$$Type, component: $MutableComponent$$Type)

public "type"(): $MachineStateType
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "component"(): $MutableComponent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineState$$Type = ({"component"?: $MutableComponent$$Type, "type"?: $MachineStateType$$Type}) | ([component?: $MutableComponent$$Type, type?: $MachineStateType$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineState$$Original = $MachineState;}
declare module "com.enderio.enderio.foundation.block.entity.PoweredMachineBlockEntity" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Direction} from "net.minecraft.core.Direction"
import {$SideConfig} from "com.enderio.enderio.api.io.SideConfig"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$MachineInstallable$$Interface} from "com.enderio.enderio.foundation.block.entity.MachineInstallable"
import {$CapacitorData} from "com.enderio.enderio.api.capacitor.CapacitorData"
import {$MachineBlockEntity} from "com.enderio.enderio.foundation.block.entity.MachineBlockEntity"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$CapacitorScalable$$Type} from "com.enderio.enderio.api.capacitor.CapacitorScalable"
import {$PoweredMachineEnergyStorage} from "com.enderio.enderio.foundation.energy.PoweredMachineEnergyStorage"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$CapacitorSupport, $CapacitorSupport$$Type} from "com.enderio.enderio.foundation.block.entity.flags.CapacitorSupport"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SoulBindable} from "com.enderio.enderio.api.soul.binding.SoulBindable"
import {$EnergyIOMode, $EnergyIOMode$$Type} from "com.enderio.enderio.api.io.energy.EnergyIOMode"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PoweredMachineBlockEntity extends $MachineBlockEntity implements $MachineInstallable$$Interface {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($SoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "ENERGY_STORAGE_PROVIDER": $ICapabilityProvider<($PoweredMachineBlockEntity), ($Direction), ($IEnergyStorage)>
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean, arg4: $CapacitorSupport$$Type, arg5: $EnergyIOMode$$Type, arg6: $CapacitorScalable$$Type, arg7: $CapacitorScalable$$Type)

public "hasEnergy"(): boolean
public "getEnergyStorage"(): $PoweredMachineEnergyStorage
public "tryItemInstall"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "getMaxEnergyUse"(): integer
public "requiresCapacitor"(): boolean
public "isCapacitorInstalled"(): boolean
public "supportsCapacitor"(): boolean
public "getCapacitorItem"(): $ItemStack
public "energyIOMode"(): $EnergyIOMode
public "getCapacitorData"(): $CapacitorData
public "capacitorSupport"(): $CapacitorSupport
public "clientSetEnergyStored"(arg0: integer): void
public "getCapacitorSlotIndex"(): integer
public "setLevel"(arg0: $Level$$Type): void
public "onLoad"(): void
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "setChanged"(): void
public "getMaxEnergyStored"(): integer
get "energyStorage"(): $PoweredMachineEnergyStorage
get "maxEnergyUse"(): integer
get "capacitorInstalled"(): boolean
get "capacitorItem"(): $ItemStack
get "capacitorData"(): $CapacitorData
get "capacitorSlotIndex"(): integer
set "level"(value: $Level$$Type)
get "changed"(): void
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredMachineBlockEntity$$Type = ($PoweredMachineBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoweredMachineBlockEntity$$Original = $PoweredMachineBlockEntity;}
declare module "com.enderio.enderio.foundation.block.entity.MachineBlockEntity" {
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$MachineInventoryHolder$$Interface} from "com.enderio.enderio.foundation.block.entity.MachineInventoryHolder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Set, $Set$$Type} from "java.util.Set"
import {$Wrenchable$$Interface} from "com.enderio.enderio.foundation.block.entity.Wrenchable"
import {$ModelData} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$RedstoneControl, $RedstoneControl$$Type} from "com.enderio.enderio.api.io.RedstoneControl"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IOConfigurable$$Interface} from "com.enderio.enderio.api.io.IOConfigurable"
import {$SideConfig} from "com.enderio.enderio.api.io.SideConfig"
import {$MachineInventory} from "com.enderio.enderio.foundation.inventory.MachineInventory"
import {$IOConfig} from "com.enderio.enderio.foundation.io.IOConfig"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"
import {$ClientGamePacketListener} from "net.minecraft.network.protocol.game.ClientGamePacketListener"
import {$EIOBlockEntity} from "com.enderio.enderio.foundation.block.EIOBlockEntity"
import {$ItemInteractionResult} from "net.minecraft.world.ItemInteractionResult"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$ICapabilityProvider} from "net.neoforged.neoforge.capabilities.ICapabilityProvider"
import {$Packet} from "net.minecraft.network.protocol.Packet"
import {$IOMode, $IOMode$$Type} from "com.enderio.enderio.api.io.IOMode"
import {$SoulBindable} from "com.enderio.enderio.api.soul.binding.SoulBindable"
import {$MachineState, $MachineState$$Type} from "com.enderio.enderio.foundation.state.MachineState"

export class $MachineBlockEntity extends $EIOBlockEntity implements $MenuProvider$$Interface, $Wrenchable$$Interface, $IOConfigurable$$Interface, $MachineInventoryHolder$$Interface {
static readonly "ITEM_HANDLER_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($IItemHandler)>
static readonly "DATA": StringJS
static readonly "SOUL_BINDABLE": $ICapabilityProvider<($MachineBlockEntity), (void), ($SoulBindable)>
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS
static readonly "SIDE_CONFIG_PROVIDER": $ICapabilityProvider<($MachineBlockEntity), ($Direction), ($SideConfig)>

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: boolean)

public "getUpdatePacket"(): $Packet<($ClientGamePacketListener)>
public "serverTick"(): void
public "canAct"(arg0: integer): boolean
public "canAct"(): boolean
public "setMachineOwner"(arg0: $UUID$$Type): void
public "supportsRedstoneControl"(): boolean
public "getDefaultIOConfig"(): $IOConfig
public "isIOConfigMutable"(): boolean
public "getIOConfig"(): $IOConfig
public "supportsIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): boolean
public "shouldRenderIOConfigOverlay"(): boolean
public "getMachineOwner"(): $UUID
public "getIOMode"(arg0: $Direction$$Type): $IOMode
public "setIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): void
public "getMachineOwnerOrRandom"(): $UUID
public "getMachineStates"(): $Set<($MachineState)>
public "clientSetMachineStates"(arg0: $Set$$Type<($MachineState$$Type)>): void
public "getRedstoneControl"(): $RedstoneControl
public "setRedstoneControl"(arg0: $RedstoneControl$$Type): void
public "onWrenched"(arg0: $UseOnContext$$Type): $ItemInteractionResult
public "hasInventory"(): boolean
public "getDisplayName"(): $Component
public "isActive"(): boolean
public "getInventory"(): $MachineInventory
public "removeComponentsFromTag"(arg0: $CompoundTag$$Type): void
public "getModelData"(): $ModelData
public "getNextIOMode"(arg0: $Direction$$Type, arg1: $IOMode$$Type): $IOMode
public "getNextIOMode"(arg0: $Direction$$Type): $IOMode
public "cycleIOMode"(arg0: $Direction$$Type): void
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
get "updatePacket"(): $Packet<($ClientGamePacketListener)>
set "machineOwner"(value: $UUID$$Type)
get "defaultIOConfig"(): $IOConfig
get "IOConfigMutable"(): boolean
get "IOConfig"(): $IOConfig
get "machineOwner"(): $UUID
get "machineOwnerOrRandom"(): $UUID
get "machineStates"(): $Set<($MachineState)>
get "redstoneControl"(): $RedstoneControl
set "redstoneControl"(value: $RedstoneControl$$Type)
get "displayName"(): $Component
get "active"(): boolean
get "inventory"(): $MachineInventory
get "modelData"(): $ModelData
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineBlockEntity$$Type = ($MachineBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineBlockEntity$$Original = $MachineBlockEntity;}
declare module "com.enderio.enderio.foundation.inventory.MachineInventoryLayout" {
import {$MachineInventoryLayout$Builder} from "com.enderio.enderio.foundation.inventory.MachineInventoryLayout$Builder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $MachineInventoryLayout {
public "canExtract"(arg0: integer): boolean
public "getStackLimit"(arg0: integer): integer
public "canInsert"(arg0: integer): boolean
public "getSlotCount"(): integer
public "getCapacitorSlot"(): integer
public "supportsCapacitor"(): boolean
public "guiCanInsert"(arg0: integer): boolean
public "guiCanExtract"(arg0: integer): boolean
public static "builder"(): $MachineInventoryLayout$Builder
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
get "slotCount"(): integer
get "capacitorSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryLayout$$Type = ($MachineInventoryLayout);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineInventoryLayout$$Original = $MachineInventoryLayout;}
declare module "com.enderio.enderio.foundation.io.fluid.FluidItemInteractive" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidTankUser$$Type} from "com.enderio.enderio.foundation.attachment.FluidTankUser"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TankAccess$$Type} from "com.enderio.enderio.foundation.io.fluid.TankAccess"

export interface $FluidItemInteractive$$Interface {
}

export class $FluidItemInteractive implements $FluidItemInteractive$$Interface {
 "handleFluidItemInteraction"(arg0: $Player$$Type, arg1: $InteractionHand$$Type, arg2: $ItemStack$$Type, arg3: $FluidTankUser$$Type, arg4: $TankAccess$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidItemInteractive$$Type = ($FluidItemInteractive);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidItemInteractive$$Original = $FluidItemInteractive;}
declare module "com.enderio.enderio.foundation.particle.RangeParticleData" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ParticleType} from "net.minecraft.core.particles.ParticleType"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$ParticleOptions$$Interface} from "net.minecraft.core.particles.ParticleOptions"
import {$Record} from "java.lang.Record"

export class $RangeParticleData extends $Record implements $ParticleOptions$$Interface {
static readonly "CODEC": $MapCodec<($RangeParticleData)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($RangeParticleData)>

constructor(range: integer, color: StringJS)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getType"(): $ParticleType<(never)>
public "color"(): StringJS
public "range"(): integer
get "type"(): $ParticleType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeParticleData$$Type = ({"range"?: integer, "color"?: StringJS}) | ([range?: integer, color?: StringJS]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RangeParticleData$$Original = $RangeParticleData;}
declare module "com.enderio.enderio.foundation.MachineRecipe" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$List} from "java.util.List"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Recipe$$Interface} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeInput, $RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$OutputStack} from "com.enderio.core.common.recipes.OutputStack"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$RegistryAccess$$Type} from "net.minecraft.core.RegistryAccess"

export interface $MachineRecipe$$Interface<T extends $RecipeInput> extends $Recipe$$Interface<(T)> {
get "baseEnergyCost"(): integer
get "special"(): boolean
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "type"(): $RecipeType<(never)>
get "group"(): StringJS
}

export class $MachineRecipe<T extends $RecipeInput> implements $MachineRecipe$$Interface {
/**
 * 
 * @deprecated
 */
 "assemble"(arg0: T, arg1: $HolderLookup$Provider$$Type): $ItemStack
 "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
/**
 * 
 * @deprecated
 */
 "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
 "craft"(arg0: T, arg1: $RegistryAccess$$Type): $List<($OutputStack)>
 "getEnergyCost"(arg0: T): integer
 "getBaseEnergyCost"(): integer
 "getResultStacks"(arg0: $RegistryAccess$$Type): $List<($OutputStack)>
 "isSpecial"(): boolean
 "getRemainingItems"(arg0: T): $NonNullList<($ItemStack)>
 "getSerializer"(): $RecipeSerializer<(never)>
 "getIngredients"(): $NonNullList<($Ingredient)>
 "showNotification"(): boolean
 "getToastSymbol"(): $ItemStack
 "isIncomplete"(): boolean
 "matches"(arg0: T, arg1: $Level$$Type): boolean
 "getType"(): $RecipeType<(never)>
 "getGroup"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineRecipe$$Type<T> = ($MachineRecipe<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineRecipe$$Original<T> = $MachineRecipe<(T)>;}
declare module "com.enderio.enderio.foundation.io.fluid.TankAccess" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$FluidTankUser$$Type} from "com.enderio.enderio.foundation.attachment.FluidTankUser"
import {$MachineFluidHandler$$Type} from "com.enderio.enderio.foundation.io.fluid.MachineFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MachineFluidTank} from "com.enderio.enderio.foundation.io.fluid.MachineFluidTank"

export class $TankAccess {
constructor()

public "canExtract"(arg0: $MachineFluidHandler$$Type): boolean
public "canExtract"(arg0: $FluidTankUser$$Type): boolean
public "getFluid"(arg0: $FluidTankUser$$Type): $FluidStack
public "getFluid"(arg0: $MachineFluidHandler$$Type): $FluidStack
public "isFluidValid"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type): boolean
public "isFluidValid"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type): boolean
public "canInsert"(arg0: $MachineFluidHandler$$Type): boolean
public "canInsert"(arg0: $FluidTankUser$$Type): boolean
public "getFluidAmount"(arg0: $FluidTankUser$$Type): integer
public "getFluidAmount"(arg0: $MachineFluidHandler$$Type): integer
public "isTank"(arg0: integer): boolean
public "setFluid"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type): void
public "setFluid"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type): void
public "isEmpty"(arg0: $MachineFluidHandler$$Type): boolean
public "isEmpty"(arg0: $FluidTankUser$$Type): boolean
public "fill"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): integer
public "fill"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): integer
public "getCapacity"(arg0: $MachineFluidHandler$$Type): integer
public "getCapacity"(arg0: $FluidTankUser$$Type): integer
public "drain"(arg0: $MachineFluidHandler$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidTankUser$$Type, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidTankUser$$Type, arg1: $FluidStack$$Type, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $MachineFluidHandler$$Type, arg1: integer, arg2: $IFluidHandler$FluidAction$$Type): $FluidStack
public "getTank"(arg0: $MachineFluidHandler$$Type): $MachineFluidTank
public "getTank"(arg0: $FluidTankUser$$Type): $MachineFluidTank
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TankAccess$$Type = ($TankAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TankAccess$$Original = $TankAccess;}
declare module "com.enderio.enderio.foundation.io.fluid.MachineTankLayout$Builder" {
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$MachineTankLayout} from "com.enderio.enderio.foundation.io.fluid.MachineTankLayout"
import {$TankAccess$$Type} from "com.enderio.enderio.foundation.io.fluid.TankAccess"

export class $MachineTankLayout$Builder {
constructor()

public "tank"(arg0: $TankAccess$$Type, arg1: integer, arg2: $Predicate$$Type<($FluidStack)>): $MachineTankLayout$Builder
public "tank"(arg0: $TankAccess$$Type, arg1: integer): $MachineTankLayout$Builder
public "tank"(arg0: $TankAccess$$Type, arg1: integer, arg2: boolean, arg3: boolean, arg4: $Predicate$$Type<($FluidStack)>): $MachineTankLayout$Builder
public "build"(): $MachineTankLayout
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineTankLayout$Builder$$Type = ($MachineTankLayout$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineTankLayout$Builder$$Original = $MachineTankLayout$Builder;}
declare module "com.enderio.enderio.foundation.block.EIOBlockEntity" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$EnderBlockEntity} from "com.enderio.core.common.blockentity.EnderBlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EIOBlockEntity extends $EnderBlockEntity {
static readonly "DATA": StringJS
static readonly "ATTACHMENTS_NBT_KEY": StringJS
static readonly "INDEX": StringJS

constructor(arg0: $BlockEntityType$$Type<(never)>, arg1: $BlockPos$$Type, arg2: $BlockState$$Type)

public "serverTick"(): void
public "onLoad"(): void
public "neighborChanged"(arg0: $Block$$Type, arg1: $BlockPos$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOBlockEntity$$Type = ($EIOBlockEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EIOBlockEntity$$Original = $EIOBlockEntity;}
declare module "com.enderio.enderio.foundation.block.EIOEntityBlock" {
import {$Object2ByteLinkedOpenHashMap} from "it.unimi.dsi.fastutil.objects.Object2ByteLinkedOpenHashMap"
import {$BaseEntityBlock} from "net.minecraft.world.level.block.BaseEntityBlock"
import {$Block$BlockStatePairKey} from "net.minecraft.world.level.block.Block$BlockStatePairKey"
import {$BlockEntityTicker} from "net.minecraft.world.level.block.entity.BlockEntityTicker"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ThreadLocal} from "java.lang.ThreadLocal"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$LevelReader$$Type} from "net.minecraft.world.level.LevelReader"
import {$EIOBlockEntity} from "com.enderio.enderio.foundation.block.EIOBlockEntity"
import {$IdMapper} from "net.minecraft.core.IdMapper"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Item} from "net.minecraft.world.item.Item"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $EIOEntityBlock<T extends $EIOBlockEntity> extends $BaseEntityBlock {
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

public "canConnectRedstone"(arg0: $BlockState$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): boolean
public "getTicker"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): $BlockEntityTicker<(T)>
public "newBlockEntity"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): $BlockEntity
public "onNeighborChange"(arg0: $BlockState$$Type, arg1: $LevelReader$$Type, arg2: $BlockPos$$Type, arg3: $BlockPos$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EIOEntityBlock$$Type<T> = ($EIOEntityBlock<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EIOEntityBlock$$Original<T> = $EIOEntityBlock<(T)>;}
declare module "com.enderio.enderio.foundation.block.entity.multienergy.CapacityTier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $CapacityTier$$Interface {

(): integer
get "storageCapacity"(): integer
}

export class $CapacityTier implements $CapacityTier$$Interface {
 "getStorageCapacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacityTier$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacityTier$$Original = $CapacityTier;}
declare module "com.enderio.enderio.foundation.inventory.SingleSlotAccess" {
import {$MachineInventoryHolder$$Type} from "com.enderio.enderio.foundation.block.entity.MachineInventoryHolder"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$MultiSlotAccess} from "com.enderio.enderio.foundation.inventory.MultiSlotAccess"
import {$MachineInventory$$Type} from "com.enderio.enderio.foundation.inventory.MachineInventory"

export class $SingleSlotAccess {
constructor()

public "wrapToMulti"(): $MultiSlotAccess
public "isSlot"(arg0: integer): boolean
public "getIndex"(): integer
public "getItemStack"(arg0: $Container$$Type): $ItemStack
public "getItemStack"(arg0: $MachineInventoryHolder$$Type): $ItemStack
public "getItemStack"(arg0: $MachineInventory$$Type): $ItemStack
public "insertItem"(arg0: $MachineInventory$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "insertItem"(arg0: $MachineInventoryHolder$$Type, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "setStackInSlot"(arg0: $MachineInventory$$Type, arg1: $ItemStack$$Type): void
public "setStackInSlot"(arg0: $MachineInventoryHolder$$Type, arg1: $ItemStack$$Type): void
get "index"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SingleSlotAccess$$Type = ($SingleSlotAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SingleSlotAccess$$Original = $SingleSlotAccess;}
declare module "com.enderio.enderio.foundation.state.MachineStateType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$IntFunction} from "java.util.function.IntFunction"

export class $MachineStateType extends $Enum<($MachineStateType)> implements $StringRepresentable$$Interface {
static readonly "DISABLED": $MachineStateType
static readonly "CODEC": $Codec<($MachineStateType)>
static readonly "ACTIVE": $MachineStateType
static readonly "IDLE": $MachineStateType
static readonly "BY_ID": $IntFunction<($MachineStateType)>
static readonly "ERROR": $MachineStateType
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($MachineStateType)>

public static "values"(): ($MachineStateType)[]
public static "valueOf"(arg0: StringJS): $MachineStateType
public "getPriority"(): integer
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "priority"(): integer
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineStateType$$Type = (("active") | ("idle") | ("error") | ("disabled"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineStateType$$Original = $MachineStateType;}
declare module "com.enderio.enderio.foundation.inventory.MachineInventoryLayout$Builder" {
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$MachineInventoryLayout$Builder$SlotBuilder$$Type} from "com.enderio.enderio.foundation.inventory.MachineInventoryLayout$Builder$SlotBuilder"
import {$BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$MultiSlotAccess$$Type} from "com.enderio.enderio.foundation.inventory.MultiSlotAccess"
import {$SingleSlotAccess$$Type} from "com.enderio.enderio.foundation.inventory.SingleSlotAccess"
import {$MachineInventoryLayout} from "com.enderio.enderio.foundation.inventory.MachineInventoryLayout"

export class $MachineInventoryLayout$Builder {
constructor()

public "inputSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "inputSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "inputSlot"(): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "outputSlot"(): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "outputSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "storageSlot"(): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "storageSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "capacitor"(): $MachineInventoryLayout$Builder
public "slotAccess"(arg0: $SingleSlotAccess$$Type): $MachineInventoryLayout$Builder
public "slotAccess"(arg0: $MultiSlotAccess$$Type): $MachineInventoryLayout$Builder
public "setStackLimit"(arg0: integer): $MachineInventoryLayout$Builder
public "previewSlot"(): $MachineInventoryLayout$Builder
public "previewSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: integer, arg1: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "ghostSlot"(): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: integer): $MachineInventoryLayout$Builder
public "ghostSlot"(arg0: $BiPredicate$$Type<(integer), ($ItemStack)>): $MachineInventoryLayout$Builder
public "slot"(arg0: $UnaryOperator$$Type<($MachineInventoryLayout$Builder$SlotBuilder)>): $MachineInventoryLayout$Builder
public "build"(): $MachineInventoryLayout
set "stackLimit"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineInventoryLayout$Builder$$Type = ($MachineInventoryLayout$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineInventoryLayout$Builder$$Original = $MachineInventoryLayout$Builder;}
declare module "com.enderio.enderio.foundation.block.entity.flags.CapacitorSupport" {
import {$Enum} from "java.lang.Enum"

export class $CapacitorSupport extends $Enum<($CapacitorSupport)> {
static readonly "REQUIRED": $CapacitorSupport
static readonly "NONE": $CapacitorSupport

public static "values"(): ($CapacitorSupport)[]
public static "valueOf"(arg0: StringJS): $CapacitorSupport
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CapacitorSupport$$Type = (("none") | ("required"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CapacitorSupport$$Original = $CapacitorSupport;}
declare module "com.enderio.enderio.foundation.energy.PoweredMachineEnergyStorage" {
import {$PoweredMachineBlockEntity$$Type} from "com.enderio.enderio.foundation.block.entity.PoweredMachineBlockEntity"
import {$IOConfigurable} from "com.enderio.enderio.api.io.IOConfigurable"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IMachineEnergyStorage$$Interface} from "com.enderio.enderio.foundation.io.energy.IMachineEnergyStorage"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IEnergyStorage, $IEnergyStorage$$Interface} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IntTag, $IntTag$$Type} from "net.minecraft.nbt.IntTag"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$EnergyIOMode} from "com.enderio.enderio.api.io.energy.EnergyIOMode"

export class $PoweredMachineEnergyStorage implements $IEnergyStorage$$Interface, $INBTSerializable$$Interface<($IntTag)>, $IMachineEnergyStorage$$Interface {
constructor(arg0: $PoweredMachineBlockEntity$$Type)

public "canExtract"(): boolean
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canReceive"(): boolean
public "getSided"(arg0: $Direction$$Type): $IEnergyStorage
public "getIOMode"(): $EnergyIOMode
public "addEnergy"(arg0: integer): integer
public "addEnergy"(arg0: integer, arg1: boolean): integer
public "takeEnergy"(arg0: integer): integer
public "getMaxEnergyUse"(): integer
public "setEnergyStored"(arg0: integer): void
public "consumeEnergy"(arg0: integer): integer
public "consumeEnergy"(arg0: integer, arg1: boolean): integer
public "getConfig"(): $IOConfigurable
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $IntTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
get "IOMode"(): $EnergyIOMode
get "maxEnergyUse"(): integer
set "energyStored"(value: integer)
get "config"(): $IOConfigurable
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoweredMachineEnergyStorage$$Type = ($PoweredMachineEnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoweredMachineEnergyStorage$$Original = $PoweredMachineEnergyStorage;}
declare module "com.enderio.enderio.foundation.attachment.ActionRange" {
import {$ClientLevel$$Type} from "net.minecraft.client.multiplayer.ClientLevel"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$NetworkDataSlot$CodecType} from "com.enderio.core.common.network.NetworkDataSlot$CodecType"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$Record} from "java.lang.Record"

export class $ActionRange extends $Record {
static readonly "CODEC": $Codec<($ActionRange)>
static readonly "STREAM_CODEC": $StreamCodec<($ByteBuf), ($ActionRange)>
static "DATA_SLOT_TYPE": $NetworkDataSlot$CodecType<($ActionRange)>

constructor(range: integer, isVisible: boolean)

public "addClientParticle"(arg0: $ClientLevel$$Type, arg1: $BlockPos$$Type, arg2: StringJS): void
public "decrement"(): $ActionRange
public "visible"(): $ActionRange
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clamp"(arg0: integer, arg1: integer): $ActionRange
public "increment"(): $ActionRange
public "save"(arg0: $HolderLookup$Provider$$Type): $Tag
public static "parse"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): $ActionRange
public "range"(): integer
public "invisible"(): $ActionRange
public "isVisible"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ActionRange$$Type = ({"isVisible"?: boolean, "range"?: integer}) | ([isVisible?: boolean, range?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ActionRange$$Original = $ActionRange;}
