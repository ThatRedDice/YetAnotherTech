declare module "owmii.powah.lib.logistics.inventory.AbstractContainer" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$FriendlyByteBuf$$Type} from "net.minecraft.network.FriendlyByteBuf"
import {$List, $List$$Type} from "java.util.List"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Level} from "net.minecraft.world.level.Level"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $AbstractContainer extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "DUMMY": $AbstractContainerMenu
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
readonly "world": $Level
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $FriendlyByteBuf$$Type)
constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type)

public "initializeContents"(arg0: integer, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainer$$Type = ($AbstractContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainer$$Original = $AbstractContainer;}
declare module "owmii.powah.lib.logistics.energy.Energy" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Energy$Item, $Energy$Item$$Type} from "owmii.powah.lib.logistics.energy.Energy$Item"

export class $Energy {
static readonly "MIN": long
static readonly "MAX": long
static readonly "EMPTY": $Energy

constructor(arg0: $Energy$$Type)
constructor(arg0: long, arg1: long, arg2: long)

public "canExtract"(): boolean
public static "getEnergy"(arg0: $ItemStack$$Type): $Optional<($Energy)>
public "extractEnergy"(arg0: long, arg1: boolean): long
public "receiveEnergy"(arg0: long, arg1: boolean): long
public "canReceive"(): boolean
public static "receive"(arg0: $ItemStack$$Type, arg1: long, arg2: boolean): long
public "getTransfer"(): long
public "toComparatorPower"(): integer
public "hasEnergy"(): boolean
public "getStored"(): long
public static "getStored"(arg0: $ItemStack$$Type): long
public "getMaxExtract"(): long
public "getMaxReceive"(): long
public "setStored"(arg0: long): $Energy
public static "chargeable"(arg0: $ItemStack$$Type): boolean
public "setTransfer"(arg0: long): $Energy
public "setMaxExtract"(arg0: long): $Energy
public "produce"(arg0: long): long
public "setCapacity"(arg0: long): $Energy
public "getPercent"(): long
public static "ifPresent"(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($Energy$Item)>): void
public "consume"(arg0: long): long
public "isFull"(): boolean
public static "get"(arg0: $ItemStack$$Type): $Optional<($Energy$Item)>
public "clone"(arg0: $Energy$$Type): boolean
public static "extract"(arg0: $ItemStack$$Type, arg1: long, arg2: boolean): long
public "isEmpty"(): boolean
public static "from"(arg0: $Energy$$Type): $Energy
public "write"(arg0: StringJS, arg1: boolean, arg2: boolean): $CompoundTag
public "write"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: boolean): $CompoundTag
public "write"(arg0: boolean, arg1: boolean): $CompoundTag
public "write"(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: boolean, arg3: boolean): $CompoundTag
public "read"(arg0: $CompoundTag$$Type, arg1: boolean, arg2: boolean): $Energy
public "read"(arg0: $CompoundTag$$Type, arg1: StringJS, arg2: boolean, arg3: boolean): $Energy
public static "isPresent"(arg0: $ItemStack$$Type): boolean
public static "create"(arg0: long, arg1: long, arg2: long): $Energy
public static "create"(arg0: long): $Energy
public static "create"(arg0: long, arg1: long): $Energy
public "setAll"(arg0: long): $Energy
public "getCapacity"(): long
public "getEmpty"(): long
public "subSized"(): float
public "getEnergyStored"(): long
public "getMaxEnergyStored"(): long
public "addCapacity"(arg0: long): void
public "removeCapacity"(arg0: long): void
public "setMaxReceive"(arg0: long): $Energy
public "setMaxTransfer"(): $Energy
get "transfer"(): long
get "stored"(): long
get "maxExtract"(): long
get "maxReceive"(): long
set "stored"(value: long)
set "transfer"(value: long)
set "maxExtract"(value: long)
set "capacity"(value: long)
get "percent"(): long
get "full"(): boolean
get "empty"(): boolean
set "all"(value: long)
get "capacity"(): long
get "empty"(): long
get "energyStored"(): long
get "maxEnergyStored"(): long
set "maxReceive"(value: long)
get "maxTransfer"(): $Energy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Energy$$Type = ($Energy);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Energy$$Original = $Energy;}
declare module "owmii.powah.lib.logistics.energy.SideConfig" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Transfer, $Transfer$$Type} from "owmii.powah.lib.logistics.Transfer"
import {$AbstractEnergyStorage$$Type} from "owmii.powah.lib.block.AbstractEnergyStorage"

export class $SideConfig {
constructor(arg0: $AbstractEnergyStorage$$Type)

public "setType"(arg0: $Direction$$Type, arg1: $Transfer$$Type): void
public "init"(): void
public "write"(arg0: $CompoundTag$$Type): $CompoundTag
public "read"(arg0: $CompoundTag$$Type): void
public "getType"(arg0: $Direction$$Type): $Transfer
public "nextType"(arg0: $Direction$$Type): void
public "nextTypeAll"(): void
public "isAllEquals"(): boolean
get "allEquals"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SideConfig$$Type = ($SideConfig);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SideConfig$$Original = $SideConfig;}
declare module "owmii.powah.lib.logistics.fluid.FluidTank" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$IFluidHandler$$Interface} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $FluidTank implements $IFluidHandler$$Interface {
constructor(arg0: integer, arg1: $Predicate$$Type<($FluidStack)>)
constructor(arg0: integer)

public "getFluid"(): $FluidStack
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "isFluidValid"(arg0: $FluidStack$$Type): boolean
public "getFluidAmount"(): integer
public "setValidator"(arg0: $Predicate$$Type<($FluidStack)>): $FluidTank
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $FluidTank
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
public "setFluid"(arg0: $FluidStack$$Type): void
public "setCapacity"(arg0: integer): $FluidTank
public "getSpace"(): integer
public "isEmpty"(): boolean
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "getCapacity"(): integer
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
get "fluid"(): $FluidStack
get "tanks"(): integer
get "fluidAmount"(): integer
set "validator"(value: $Predicate$$Type<($FluidStack)>)
set "fluid"(value: $FluidStack$$Type)
set "capacity"(value: integer)
get "space"(): integer
get "empty"(): boolean
get "capacity"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTank$$Type = ($FluidTank);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTank$$Original = $FluidTank;}
declare module "owmii.powah.lib.logistics.Redstone" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Redstone extends $Enum<($Redstone)> {
static readonly "IGNORE": $Redstone
static readonly "OFF": $Redstone
static readonly "ON": $Redstone

public "getDisplayName"(): $Component
public static "values"(): ($Redstone)[]
public static "valueOf"(arg0: StringJS): $Redstone
public "next"(): $Redstone
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Redstone$$Type = (("ignore") | ("on") | ("off"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Redstone$$Original = $Redstone;}
declare module "owmii.powah.lib.logistics.energy.Energy$Item" {
import {$Energy} from "owmii.powah.lib.logistics.energy.Energy"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IEnergyContainingItem$Info$$Type} from "owmii.powah.lib.item.IEnergyContainingItem$Info"

export class $Energy$Item extends $Energy {
static readonly "MIN": long
static readonly "MAX": long
static readonly "EMPTY": $Energy

constructor(arg0: $ItemStack$$Type, arg1: $Energy$Item$$Type)
constructor(arg0: $ItemStack$$Type, arg1: $IEnergyContainingItem$Info$$Type)
constructor(arg0: $ItemStack$$Type, arg1: long, arg2: long, arg3: long)

public "extractEnergy"(arg0: long, arg1: boolean): long
public "receiveEnergy"(arg0: long, arg1: boolean): long
public "consume"(arg0: long): long
public "createItemCapability"(): $IEnergyStorage
public "setStoredAndWrite"(arg0: long): void
set "storedAndWrite"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Energy$Item$$Type = ($Energy$Item);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Energy$Item$$Original = $Energy$Item;}
declare module "owmii.powah.lib.logistics.Transfer" {
import {$Enum} from "java.lang.Enum"
import {$Component} from "net.minecraft.network.chat.Component"

export class $Transfer extends $Enum<($Transfer)> {
readonly "canExtract": boolean
static readonly "ALL": $Transfer
readonly "canReceive": boolean
static readonly "NONE": $Transfer
static readonly "RECEIVE": $Transfer
static readonly "EXTRACT": $Transfer

public "getDisplayName"(): $Component
public static "values"(): ($Transfer)[]
public static "valueOf"(arg0: StringJS): $Transfer
public "next"(arg0: $Transfer$$Type): $Transfer
public "getDisplayName2"(): $Component
get "displayName"(): $Component
get "displayName2"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transfer$$Type = (("all") | ("extract") | ("receive") | ("none"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Transfer$$Original = $Transfer;}
declare module "owmii.powah.lib.logistics.inventory.Inventory" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$ItemStackHandler, $ItemStackHandler$$Type} from "owmii.powah.lib.logistics.inventory.ItemStackHandler"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Stacks, $Stacks$$Type} from "owmii.powah.lib.item.Stacks"
import {$IInventoryHolder$$Type} from "owmii.powah.lib.block.IInventoryHolder"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AbstractTileEntity, $AbstractTileEntity$$Type} from "owmii.powah.lib.block.AbstractTileEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $Inventory extends $ItemStackHandler {
constructor(arg0: integer)
constructor(arg0: $Stacks$$Type)
constructor(arg0: $Stacks$$Type, arg1: $IInventoryHolder$$Type)

public "canExtract"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "onContentsChanged"(arg0: integer): void
public "getNonEmptyStacks"(): $List<($ItemStack)>
public "removeNext"(): $ItemStack
public "addNext"(arg0: $ItemStack$$Type): $ItemStack
public static "createBlank"(): $Inventory
public static "createBlank"<I extends $AbstractTileEntity<(object), (object)>>(arg0: I): $Inventory
public "setTile"(arg0: $IInventoryHolder$$Type): void
public "getLastSlot"(): integer
public "extractItemFromSlot"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "fromSlotArray"(...arg0: (integer)[]): $Stacks
public "canPut"(arg0: $Stacks$$Type, ...arg1: (integer)[]): $Stacks
public "canPut"(arg0: $Stacks$$Type, arg1: $Stacks$$Type): $Stacks
public "setSlotEmpty"(arg0: integer): $ItemStack
public "setSendUpdates"(arg0: boolean): void
public "hasEmptySlot"(): boolean
public "isSlotEmpty"(arg0: integer): boolean
public static "calcRedstone"(arg0: $ItemStackHandler$$Type): integer
public "isFull"(): boolean
public "getStacks"(): $Stacks
public "clear"(): void
public "isEmpty"(): boolean
public "add"(arg0: integer): $Inventory
public "isBlank"(): boolean
public "set"(arg0: integer): $Inventory
public static "create"<I extends $AbstractTileEntity<(object), (object)>>(arg0: integer, arg1: I): $Inventory
public static "create"(arg0: integer): $Inventory
public "getFirst"(): $ItemStack
public "getLast"(): $ItemStack
public "getLast"(arg0: integer): $Stacks
public "drop"(arg0: integer, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "drop"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
public "insertItem"(arg0: $ItemStack$$Type, arg1: boolean, ...arg2: (integer)[]): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "deserializeNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
get "nonEmptyStacks"(): $List<($ItemStack)>
set "tile"(value: $IInventoryHolder$$Type)
get "lastSlot"(): integer
set "slotEmpty"(value: integer)
set "sendUpdates"(value: boolean)
get "full"(): boolean
get "stacks"(): $Stacks
get "empty"(): boolean
get "blank"(): boolean
get "first"(): $ItemStack
get "last"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Inventory$$Type = ($Inventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Inventory$$Original = $Inventory;}
declare module "owmii.powah.lib.logistics.IRedstoneInteract" {
import {$Redstone, $Redstone$$Type} from "owmii.powah.lib.logistics.Redstone"

export interface $IRedstoneInteract$$Interface {
get "redstoneMode"(): $Redstone
set "redstoneMode"(value: $Redstone$$Type)
}

export class $IRedstoneInteract implements $IRedstoneInteract$$Interface {
 "getRedstoneMode"(): $Redstone
 "setRedstoneMode"(arg0: $Redstone$$Type): void
 "nextRedstoneMode"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRedstoneInteract$$Type = ($IRedstoneInteract);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRedstoneInteract$$Original = $IRedstoneInteract;}
declare module "owmii.powah.lib.logistics.fluid.Tank" {
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidTank} from "owmii.powah.lib.logistics.fluid.FluidTank"

export class $Tank extends $FluidTank {
constructor(arg0: integer)
constructor(arg0: integer, arg1: $Predicate$$Type<($FluidStack)>)

public "onContentsChanged"(): void
public "setChange"(arg0: $Runnable$$Type): $Tank
public "setValidator"(arg0: $Predicate$$Type): $FluidTank
public "setSendUpdates"(arg0: boolean): void
public "setCapacity"(arg0: integer): $FluidTank
set "change"(value: $Runnable$$Type)
set "validator"(value: $Predicate$$Type)
set "sendUpdates"(value: boolean)
set "capacity"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Tank$$Type = ($Tank);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Tank$$Original = $Tank;}
declare module "owmii.powah.lib.logistics.inventory.ItemStackHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ItemStackHandler implements $IItemHandler$$Interface {
constructor()
constructor(arg0: integer)
constructor(arg0: $NonNullList$$Type<($ItemStack$$Type)>)

public "setSize"(arg0: integer): void
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "deserializeNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "kjs$self"(): $IItemHandler
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "getBlock"(level: $Level$$Type): $LevelBlock
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "clear"(): void
public "clear"(match: $ItemPredicate$$Type): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getWidth"(): integer
public "getHeight"(): integer
public "setChanged"(): void
public "getAllItems"(): $List<($ItemStack)>
public "asContainer"(): $Container
set "size"(value: integer)
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackHandler$$Type = ($ItemStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackHandler$$Original = $ItemStackHandler;}
