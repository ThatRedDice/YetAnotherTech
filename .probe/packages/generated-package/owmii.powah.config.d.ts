declare module "owmii.powah.config.IEnergyConfig" {
import {$Enum, $Enum$$Type} from "java.lang.Enum"

export interface $IEnergyConfig$$Interface<V extends $Enum<(object)>> {
}

export class $IEnergyConfig<V extends $Enum<(object)>> implements $IEnergyConfig$$Interface {
 "getTransfer"(arg0: V): long
 "getCapacity"(arg0: V): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyConfig$$Type<V> = ($IEnergyConfig<(V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyConfig$$Original<V> = $IEnergyConfig<(V)>;}
declare module "owmii.powah.config.IConfigHolder" {
import {$Enum} from "java.lang.Enum"

export interface $IConfigHolder$$Interface<V extends $Enum<(object)>, C> {

(): C
get "config"(): C
}

export class $IConfigHolder<V extends $Enum<(object)>, C> implements $IConfigHolder$$Interface {
 "getConfig"(): C
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigHolder$$Type<V, C> = (() => C);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigHolder$$Original<V, C> = $IConfigHolder<(V), (C)>;}
