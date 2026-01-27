declare module "mcjty.lib.api.smartwrench.SmartWrench" {
import {$SmartWrenchMode, $SmartWrenchMode$$Type} from "mcjty.lib.api.smartwrench.SmartWrenchMode"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $SmartWrench$$Interface {

(arg0: $ItemStack): $SmartWrenchMode$$Type
}

export class $SmartWrench implements $SmartWrench$$Interface {
 "getMode"(arg0: $ItemStack$$Type): $SmartWrenchMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartWrench$$Type = ((arg0: $ItemStack) => $SmartWrenchMode$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartWrench$$Original = $SmartWrench;}
declare module "mcjty.lib.api.smartwrench.SmartWrenchMode" {
import {$Enum} from "java.lang.Enum"

export class $SmartWrenchMode extends $Enum<($SmartWrenchMode)> {
static readonly "MODE_SELECT": $SmartWrenchMode
static readonly "MODE_WRENCH": $SmartWrenchMode

public static "getMode"(arg0: StringJS): $SmartWrenchMode
public "getName"(): StringJS
public static "values"(): ($SmartWrenchMode)[]
public static "valueOf"(arg0: StringJS): $SmartWrenchMode
public "getCode"(): StringJS
get "name"(): StringJS
get "code"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmartWrenchMode$$Type = (("mode_wrench") | ("mode_select"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmartWrenchMode$$Original = $SmartWrenchMode;}
