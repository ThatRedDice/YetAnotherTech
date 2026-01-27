declare module "com.enderio.core.client.item.AdvancedTooltipProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export interface $AdvancedTooltipProvider$$Interface {
}

export class $AdvancedTooltipProvider implements $AdvancedTooltipProvider$$Interface {
 "addCommonTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addDetailedTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
 "addBasicTooltips"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AdvancedTooltipProvider$$Type = ($AdvancedTooltipProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AdvancedTooltipProvider$$Original = $AdvancedTooltipProvider;}
