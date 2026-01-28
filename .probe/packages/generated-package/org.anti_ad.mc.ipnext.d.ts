declare module "org.anti_ad.mc.ipnext.mixinhelpers.IMixinItemGroup" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IMixinItemGroup$$Interface {
get "IPNPriorityIndex"(): integer
set "IPNPriorityIndex"(value: integer)
}

export class $IMixinItemGroup implements $IMixinItemGroup$$Interface {
 "getIPNPriorityIndex"(): integer
 "setIPNPriorityIndex"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinItemGroup$$Type = ($IMixinItemGroup);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinItemGroup$$Original = $IMixinItemGroup;}
declare module "org.anti_ad.mc.ipnext.mixin.IMixinKeyBinding" {
import {$InputConstants$Key} from "com.mojang.blaze3d.platform.InputConstants$Key"

export interface $IMixinKeyBinding$$Interface {
get "keyCode"(): $InputConstants$Key
get "pressed"(): boolean
get "timesPressed"(): integer
set "pressed"(value: boolean)
set "timesPressed"(value: integer)
}

export class $IMixinKeyBinding implements $IMixinKeyBinding$$Interface {
 "getKeyCode"(): $InputConstants$Key
 "getPressed"(): boolean
 "getTimesPressed"(): integer
 "setPressed"(arg0: boolean): void
 "setTimesPressed"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMixinKeyBinding$$Type = ($IMixinKeyBinding);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMixinKeyBinding$$Original = $IMixinKeyBinding;}
