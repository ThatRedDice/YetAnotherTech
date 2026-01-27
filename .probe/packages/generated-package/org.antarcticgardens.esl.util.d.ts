declare module "org.antarcticgardens.esl.util.ItemHolder" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"

export interface $ItemHolder$$Interface {
set "item"(value: $Item$$Type)
set "components"(value: $DataComponentPatch$$Type)
set "amount"(value: long)
get "item"(): $Item
get "components"(): $DataComponentPatch
get "amount"(): long
}

export class $ItemHolder implements $ItemHolder$$Interface {
 "fromItemStack"(arg0: $ItemStack$$Type): void
 "setItem"(arg0: $Item$$Type): void
 "setComponents"(arg0: $DataComponentPatch$$Type): void
 "setAmount"(arg0: long): void
 "toItemStack"(): $ItemStack
 "getItem"(): $Item
 "getComponents"(): $DataComponentPatch
 "getAmount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemHolder$$Type = ($ItemHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemHolder$$Original = $ItemHolder;}
