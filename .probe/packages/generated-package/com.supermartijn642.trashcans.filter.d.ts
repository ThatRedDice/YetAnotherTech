declare module "com.supermartijn642.trashcans.filter.ItemFilter" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $ItemFilter {
constructor()

public "getRepresentingItem"(): $ItemStack
public "matches"(stack: any): boolean
public "write"(provider: $HolderLookup$Provider$$Type): $Tag
public "getId"(): StringJS
public "isValid"(): boolean
get "representingItem"(): $ItemStack
get "id"(): StringJS
get "valid"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemFilter$$Type = ($ItemFilter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemFilter$$Original = $ItemFilter;}
