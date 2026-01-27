declare module "mcjty.lib.compat.theoneprobe.TOPDriver" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TOPDriver$$Interface {
}

export class $TOPDriver implements $TOPDriver$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TOPDriver$$Type = ($TOPDriver);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TOPDriver$$Original = $TOPDriver;}
declare module "mcjty.lib.compat.theoneprobe.TOPInfoProvider" {
import {$TOPDriver, $TOPDriver$$Type} from "mcjty.lib.compat.theoneprobe.TOPDriver"

export interface $TOPInfoProvider$$Interface {

(): $TOPDriver$$Type
get "probeDriver"(): $TOPDriver
}

export class $TOPInfoProvider implements $TOPInfoProvider$$Interface {
 "getProbeDriver"(): $TOPDriver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TOPInfoProvider$$Type = (() => $TOPDriver$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TOPInfoProvider$$Original = $TOPInfoProvider;}
