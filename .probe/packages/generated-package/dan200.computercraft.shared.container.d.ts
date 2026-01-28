declare module "dan200.computercraft.shared.container.BasicContainer" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $BasicContainer$$Interface extends $Container$$Interface {
get "items"(): $List<($ItemStack)>
get "empty"(): boolean
get "containerSize"(): integer
get "maxStackSize"(): integer
get "changed"(): void
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $BasicContainer implements $BasicContainer$$Interface {
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "clearContent"(): void
 "getItems"(): $List<($ItemStack)>
static "defaultSetItems"(arg0: $List$$Type<($ItemStack$$Type)>, arg1: $List$$Type<($ItemStack$$Type)>): void
 "getItem"(arg0: integer): $ItemStack
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "setChanged"(): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "stillValid"(arg0: $Player$$Type): boolean
static "tryClear"(arg0: any): void
 "self"(): $Container
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "getBlock"(level: $Level$$Type): $LevelBlock
 "setChanged"(): void
 "asContainer"(): $Container
 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasicContainer$$Type = ($BasicContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasicContainer$$Original = $BasicContainer;}
