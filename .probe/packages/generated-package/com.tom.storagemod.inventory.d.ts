declare module "com.tom.storagemod.inventory.StoredItemStack" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export class $StoredItemStack {
constructor(arg0: $ItemStack$$Type, arg1: long)
constructor(arg0: $ItemStack$$Type, arg1: long, arg2: integer)
constructor(arg0: $StoredItemStack$$Type)
constructor(arg0: $ItemStack$$Type)

public "getActualStack"(): $ItemStack
public "equalItem"(arg0: $StoredItemStack$$Type): boolean
public "getQuantity"(): long
public "equalDetails"(arg0: $StoredItemStack$$Type): boolean
public "equals"(arg0: any): boolean
public "equals"(arg0: $StoredItemStack$$Type): boolean
public "hashCode"(): integer
public static "merge"(arg0: $StoredItemStack$$Type, arg1: $StoredItemStack$$Type): $StoredItemStack
public "getStack"(): $ItemStack
public "grow"(arg0: long): void
public "getDisplayName"(): StringJS
public "setCount"(arg0: long): void
public "getMaxStackSize"(): integer
get "actualStack"(): $ItemStack
get "quantity"(): long
get "stack"(): $ItemStack
get "displayName"(): StringJS
set "count"(value: long)
get "maxStackSize"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StoredItemStack$$Type = ($StoredItemStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StoredItemStack$$Original = $StoredItemStack;}
declare module "com.tom.storagemod.inventory.filter.ItemFilter" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$StoredItemStack, $StoredItemStack$$Type} from "com.tom.storagemod.inventory.StoredItemStack"
import {$ItemPredicate$$Interface} from "com.tom.storagemod.inventory.filter.ItemPredicate"

export interface $ItemFilter$$Interface extends $ItemPredicate$$Interface {

(arg0: $StoredItemStack): boolean
}

export class $ItemFilter implements $ItemFilter$$Interface {
static readonly "TRUE": $ItemFilter

 "configMatch"(arg0: $ItemStack$$Type): boolean
 "updateState"(): void
 "test"(arg0: $StoredItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$$Type = ((arg0: $StoredItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFilter$$Original = $ItemFilter;}
declare module "com.tom.storagemod.inventory.filter.ItemPredicate" {
import {$StoredItemStack, $StoredItemStack$$Type} from "com.tom.storagemod.inventory.StoredItemStack"

export interface $ItemPredicate$$Interface {

(arg0: $StoredItemStack): boolean
}

export class $ItemPredicate implements $ItemPredicate$$Interface {
 "updateState"(): void
 "test"(arg0: $StoredItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemPredicate$$Type = ((arg0: $StoredItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemPredicate$$Original = $ItemPredicate;}
