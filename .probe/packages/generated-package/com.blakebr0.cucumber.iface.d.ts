declare module "com.blakebr0.cucumber.iface.IColored" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IColored$$Interface {
}

export class $IColored implements $IColored$$Interface {
 "getColor"(arg0: integer): integer
 "getColor"(arg0: integer, arg1: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IColored$$Type = ($IColored);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IColored$$Original = $IColored;}
