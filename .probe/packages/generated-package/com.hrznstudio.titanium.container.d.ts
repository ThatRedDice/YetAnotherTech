declare module "com.hrznstudio.titanium.container.addon.IContainerAddonProvider" {
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"
import {$IContainerAddon, $IContainerAddon$$Type} from "com.hrznstudio.titanium.container.addon.IContainerAddon"

export interface $IContainerAddonProvider$$Interface {

(): $List$$Type<($IFactory$$Type<($IContainerAddon$$Type)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
}

export class $IContainerAddonProvider implements $IContainerAddonProvider$$Interface {
 "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
 "canInteract"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerAddonProvider$$Type = (() => $List$$Type<($IFactory$$Type<($IContainerAddon$$Type)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IContainerAddonProvider$$Original = $IContainerAddonProvider;}
declare module "com.hrznstudio.titanium.container.addon.IContainerAddon" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerData} from "net.minecraft.world.inventory.ContainerData"
import {$DataSlot} from "net.minecraft.world.inventory.DataSlot"
import {$List} from "java.util.List"

export interface $IContainerAddon$$Interface {
get "intArrayReferenceHolders"(): $List<($ContainerData)>
get "intReferenceHolders"(): $List<($DataSlot)>
get "slots"(): $List<($Slot)>
}

export class $IContainerAddon implements $IContainerAddon$$Interface {
 "getIntArrayReferenceHolders"(): $List<($ContainerData)>
 "getIntReferenceHolders"(): $List<($DataSlot)>
 "getSlots"(): $List<($Slot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IContainerAddon$$Type = ($IContainerAddon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IContainerAddon$$Original = $IContainerAddon;}
