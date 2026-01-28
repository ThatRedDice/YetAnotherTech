declare module "appeng.api.networking.energy.IEnergySource" {
import {$PowerMultiplier, $PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$Actionable, $Actionable$$Type} from "appeng.api.config.Actionable"

export interface $IEnergySource$$Interface {

(arg0: double, arg1: $Actionable, arg2: $PowerMultiplier): double
}

export class $IEnergySource implements $IEnergySource$$Interface {
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
static "empty"(): $IEnergySource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergySource$$Type = ((arg0: double, arg1: $Actionable, arg2: $PowerMultiplier) => double);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergySource$$Original = $IEnergySource;}
declare module "appeng.api.networking.energy.IEnergyService" {
import {$IEnergySource, $IEnergySource$$Interface} from "appeng.api.networking.energy.IEnergySource"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IGridService$$Interface} from "appeng.api.networking.IGridService"
import {$Actionable$$Type} from "appeng.api.config.Actionable"

export interface $IEnergyService$$Interface extends $IGridService$$Interface, $IEnergySource$$Interface {
get "idlePowerUsage"(): double
get "avgPowerUsage"(): double
get "avgPowerInjection"(): double
get "networkPowered"(): boolean
get "maxStoredPower"(): double
get "channelPowerUsage"(): double
get "storedPower"(): double
}

export class $IEnergyService implements $IEnergyService$$Interface {
 "getIdlePowerUsage"(): double
 "getAvgPowerUsage"(): double
 "getAvgPowerInjection"(): double
 "isNetworkPowered"(): boolean
 "injectPower"(arg0: double, arg1: $Actionable$$Type): double
 "getMaxStoredPower"(): double
 "getEnergyDemand"(arg0: double): double
 "getChannelPowerUsage"(): double
 "getStoredPower"(): double
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
static "empty"(): $IEnergySource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyService$$Type = ($IEnergyService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyService$$Original = $IEnergyService;}
declare module "appeng.api.networking.energy.IAEPowerStorage" {
import {$IEnergySource, $IEnergySource$$Interface} from "appeng.api.networking.energy.IEnergySource"
import {$PowerMultiplier$$Type} from "appeng.api.config.PowerMultiplier"
import {$IGridNodeService$$Interface} from "appeng.api.networking.IGridNodeService"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AccessRestriction} from "appeng.api.config.AccessRestriction"

export interface $IAEPowerStorage$$Interface extends $IEnergySource$$Interface, $IGridNodeService$$Interface {
get "AEPublicPowerStorage"(): boolean
get "AECurrentPower"(): double
get "AEMaxPower"(): double
get "powerFlow"(): $AccessRestriction
get "priority"(): integer
}

export class $IAEPowerStorage implements $IAEPowerStorage$$Interface {
 "isAEPublicPowerStorage"(): boolean
 "getAECurrentPower"(): double
 "injectAEPower"(arg0: double, arg1: $Actionable$$Type): double
 "getAEMaxPower"(): double
 "getPowerFlow"(): $AccessRestriction
 "getPriority"(): integer
 "extractAEPower"(arg0: double, arg1: $Actionable$$Type, arg2: $PowerMultiplier$$Type): double
static "empty"(): $IEnergySource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAEPowerStorage$$Type = ($IAEPowerStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAEPowerStorage$$Original = $IAEPowerStorage;}
