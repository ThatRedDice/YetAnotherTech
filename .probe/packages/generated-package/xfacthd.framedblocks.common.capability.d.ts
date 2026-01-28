declare module "xfacthd.framedblocks.common.capability.IStorageBlockItemHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List} from "java.util.List"
import {$IItemHandlerModifiable$$Interface} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FramedStorageMenu} from "xfacthd.framedblocks.common.menu.FramedStorageMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"

export interface $IStorageBlockItemHandler$$Interface extends $IItemHandlerModifiable$$Interface {
get "slots"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "empty"(): boolean
get "width"(): integer
get "height"(): integer
get "changed"(): void
get "allItems"(): $List<($ItemStack)>
}

export class $IStorageBlockItemHandler implements $IStorageBlockItemHandler$$Interface {
 "createMenu"(arg0: integer, arg1: $Inventory$$Type): $FramedStorageMenu
 "close"(): void
 "open"(): void
 "stillValid"(arg0: $Player$$Type): boolean
 "setStackInSlot"(arg0: integer, arg1: $ItemStack$$Type): void
 "getSlots"(): integer
 "kjs$self"(): $IItemHandler
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getStackInSlot"(arg0: integer): $ItemStack
 "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
 "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
 "getSlotLimit"(arg0: integer): integer
 "isItemValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "getBlock"(level: $Level$$Type): $LevelBlock
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "clear"(): void
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getWidth"(): integer
 "getHeight"(): integer
 "setChanged"(): void
 "getAllItems"(): $List<($ItemStack)>
 "asContainer"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IStorageBlockItemHandler$$Type = ($IStorageBlockItemHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IStorageBlockItemHandler$$Original = $IStorageBlockItemHandler;}
declare module "xfacthd.framedblocks.common.capability.StorageBlockItemStackHandler" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$FramedStorageMenu} from "xfacthd.framedblocks.common.menu.FramedStorageMenu"
import {$FramedStorageBlockEntity$$Type} from "xfacthd.framedblocks.common.blockentity.special.FramedStorageBlockEntity"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"
import {$IStorageBlockItemHandler$$Interface} from "xfacthd.framedblocks.common.capability.IStorageBlockItemHandler"

export class $StorageBlockItemStackHandler extends $ItemStackHandler implements $IStorageBlockItemHandler$$Interface {
constructor(arg0: $FramedStorageBlockEntity$$Type, arg1: integer)

public "getBackingList"(): $List<($ItemStack)>
public "createMenu"(arg0: integer, arg1: $Inventory$$Type): $FramedStorageMenu
public "close"(): void
public "open"(): void
public "stillValid"(arg0: $Player$$Type): boolean
get "backingList"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageBlockItemStackHandler$$Type = ($StorageBlockItemStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageBlockItemStackHandler$$Original = $StorageBlockItemStackHandler;}
