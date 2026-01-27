declare module "mcjty.lib.api.ITabExpander" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"

export interface $ITabExpander$$Interface {

(): $List$$Type<($ItemStack$$Type)>
get "itemsForTab"(): $List<($ItemStack)>
}

export class $ITabExpander implements $ITabExpander$$Interface {
 "getItemsForTab"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITabExpander$$Type = (() => $List$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITabExpander$$Original = $ITabExpander;}
