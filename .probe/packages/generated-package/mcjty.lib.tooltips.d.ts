declare module "mcjty.lib.tooltips.ITooltipSettings" {
import {$ManualEntry} from "mcjty.lib.gui.ManualEntry"

export interface $ITooltipSettings$$Interface {
get "maxWidth"(): integer
get "manualEntry"(): $ManualEntry
}

export class $ITooltipSettings implements $ITooltipSettings$$Interface {
 "getMaxWidth"(): integer
 "getManualEntry"(): $ManualEntry
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipSettings$$Type = ($ITooltipSettings);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITooltipSettings$$Original = $ITooltipSettings;}
declare module "mcjty.lib.tooltips.ITooltipExtras" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Pair, $Pair$$Type} from "org.apache.commons.lang3.tuple.Pair"

export interface $ITooltipExtras$$Interface {

(arg0: $ItemStack): $List$$Type<($Pair$$Type<($ItemStack$$Type), (integer)>)>
}

export class $ITooltipExtras implements $ITooltipExtras$$Interface {
static readonly "NOERROR": integer
static readonly "NOAMOUNT": integer

 "getItems"(arg0: $ItemStack$$Type): $List<($Pair<($ItemStack), (integer)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITooltipExtras$$Type = ((arg0: $ItemStack) => $List$$Type<($Pair$$Type<($ItemStack$$Type), (integer)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITooltipExtras$$Original = $ITooltipExtras;}
