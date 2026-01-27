declare module "com.buuz135.functionalstorage.inventory.BigInventoryHandler$BigStack" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $BigInventoryHandler$BigStack {
constructor(arg0: $ItemStack$$Type, arg1: integer)

public "setAmount"(arg0: integer): void
public "getStack"(): $ItemStack
public "setStack"(arg0: $ItemStack$$Type): void
public "getAmount"(): integer
set "amount"(value: integer)
get "stack"(): $ItemStack
set "stack"(value: $ItemStack$$Type)
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigInventoryHandler$BigStack$$Type = ($BigInventoryHandler$BigStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BigInventoryHandler$BigStack$$Original = $BigInventoryHandler$BigStack;}
declare module "com.buuz135.functionalstorage.inventory.ILockable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ILockable$$Interface {

(): boolean
get "locked"(): boolean
}

export class $ILockable implements $ILockable$$Interface {
 "isLocked"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILockable$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILockable$$Original = $ILockable;}
declare module "com.buuz135.functionalstorage.inventory.CompactingInventoryHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$CompactingUtil$$Type} from "com.buuz135.functionalstorage.util.CompactingUtil"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"
import {$ILockable$$Interface} from "com.buuz135.functionalstorage.inventory.ILockable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$CompactingUtil$Result, $CompactingUtil$Result$$Type} from "com.buuz135.functionalstorage.util.CompactingUtil$Result"

export class $CompactingInventoryHandler implements $IItemHandler$$Interface, $INBTSerializable$$Interface<($CompoundTag)>, $ILockable$$Interface {
static readonly "STACK": StringJS
static readonly "AMOUNT": StringJS
static readonly "PARENT": StringJS
static readonly "BIG_ITEMS": StringJS

constructor(arg0: integer)

public "setupWithRearrangedResults"(arg0: $List$$Type<($CompactingUtil$Result$$Type)>): void
public "isSetup"(): boolean
public "getSlotLimitBase"(arg0: integer): integer
public "getResultList"(): $List<($CompactingUtil$Result)>
public "getTotalAmount"(): double
public "getMultiplier"(): float
public "reset"(): void
public "getParent"(): $ItemStack
public "setup"(arg0: $CompactingUtil$$Type): void
public "isVoid"(): boolean
public "onChange"(): void
public "getSlots"(): integer
public "isCreative"(): boolean
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
public "getAmount"(): integer
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
public "isLocked"(): boolean
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
set "upWithRearrangedResults"(value: $List$$Type<($CompactingUtil$Result$$Type)>)
get "resultList"(): $List<($CompactingUtil$Result)>
get "totalAmount"(): double
get "multiplier"(): float
get "parent"(): $ItemStack
set "up"(value: $CompactingUtil$$Type)
get "void"(): boolean
get "slots"(): integer
get "creative"(): boolean
get "amount"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "locked"(): boolean
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
export type $CompactingInventoryHandler$$Type = ($CompactingInventoryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompactingInventoryHandler$$Original = $CompactingInventoryHandler;}
declare module "com.buuz135.functionalstorage.inventory.BigInventoryHandler" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"
import {$ILockable$$Interface} from "com.buuz135.functionalstorage.inventory.ILockable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$BigInventoryHandler$BigStack} from "com.buuz135.functionalstorage.inventory.BigInventoryHandler$BigStack"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FunctionalStorage$DrawerType$$Type} from "com.buuz135.functionalstorage.FunctionalStorage$DrawerType"

export class $BigInventoryHandler implements $IItemHandler$$Interface, $INBTSerializable$$Interface<($CompoundTag)>, $ILockable$$Interface {
static "STACK": StringJS
static "AMOUNT": StringJS
static "BIG_ITEMS": StringJS

constructor(arg0: $FunctionalStorage$DrawerType$$Type)

public "getTotalAmount"(): double
public "getMultiplier"(): float
public "isVoid"(): boolean
public "isLocked"(): boolean
public "onChange"(): void
public "getSlots"(): integer
public "isCreative"(): boolean
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getStoredStacks"(): $List<($BigInventoryHandler$BigStack)>
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
get "totalAmount"(): double
get "multiplier"(): float
get "void"(): boolean
get "locked"(): boolean
get "slots"(): integer
get "creative"(): boolean
get "storedStacks"(): $List<($BigInventoryHandler$BigStack)>
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
export type $BigInventoryHandler$$Type = ($BigInventoryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BigInventoryHandler$$Original = $BigInventoryHandler;}
declare module "com.buuz135.functionalstorage.inventory.ArmoryCabinetInventoryHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$List} from "java.util.List"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ArmoryCabinetInventoryHandler implements $IItemHandler$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
 "stackList": $List<($ItemStack)>

constructor()

public "onChange"(): void
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
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
export type $ArmoryCabinetInventoryHandler$$Type = ($ArmoryCabinetInventoryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ArmoryCabinetInventoryHandler$$Original = $ArmoryCabinetInventoryHandler;}
declare module "com.buuz135.functionalstorage.inventory.ControllerInventoryHandler" {
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$ConnectedDrawers} from "com.buuz135.functionalstorage.util.ConnectedDrawers"
import {$List} from "java.util.List"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IItemHandler, $IItemHandler$$Interface} from "net.neoforged.neoforge.items.IItemHandler"

export class $ControllerInventoryHandler implements $IItemHandler$$Interface {
constructor()

public "getDrawers"(): $ConnectedDrawers
public "invalidateSlots"(): void
public "getSlots"(): integer
public "getStackInSlot"(arg0: integer): $ItemStack
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
public "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
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
get "drawers"(): $ConnectedDrawers
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
export type $ControllerInventoryHandler$$Type = ($ControllerInventoryHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllerInventoryHandler$$Original = $ControllerInventoryHandler;}
