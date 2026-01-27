declare module "owmii.powah.api.energy.IEnergyConnector" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEnergyConnector$$Interface {
}

export class $IEnergyConnector implements $IEnergyConnector$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyConnector$$Type = ($IEnergyConnector);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyConnector$$Original = $IEnergyConnector;}
declare module "owmii.powah.api.energy.endernetwork.IEnderExtender" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IEnderExtender$$Interface {
}

export class $IEnderExtender implements $IEnderExtender$$Interface {
 "getExtendedCapacity"(arg0: $ItemStack$$Type): long
 "getExtendedEnergy"(arg0: $ItemStack$$Type): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnderExtender$$Type = ($IEnderExtender);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnderExtender$$Original = $IEnderExtender;}
