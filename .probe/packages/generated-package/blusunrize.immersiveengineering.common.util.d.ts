declare module "blusunrize.immersiveengineering.common.util.compat.computers.generic.ComputerControllable" {
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"
import {$ComputerControlState, $ComputerControlState$$Type} from "blusunrize.immersiveengineering.api.utils.ComputerControlState"

export interface $ComputerControllable$$Interface {

(): $Stream$$Type<($ComputerControlState$$Type)>
get "allComputerControlStates"(): $Stream<($ComputerControlState)>
}

export class $ComputerControllable implements $ComputerControllable$$Interface {
 "getAllComputerControlStates"(): $Stream<($ComputerControlState)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerControllable$$Type = (() => $Stream$$Type<($ComputerControlState$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerControllable$$Original = $ComputerControllable;}
declare module "blusunrize.immersiveengineering.common.util.IEBlockCapabilityCaches$IEBlockCapabilityCache" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IEBlockCapabilityCaches$IEBlockCapabilityCache$$Interface<T> {

(): T
get "capability"(): T
}

export class $IEBlockCapabilityCaches$IEBlockCapabilityCache<T> implements $IEBlockCapabilityCaches$IEBlockCapabilityCache$$Interface {
 "getCapability"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEBlockCapabilityCaches$IEBlockCapabilityCache$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEBlockCapabilityCaches$IEBlockCapabilityCache$$Original<T> = $IEBlockCapabilityCaches$IEBlockCapabilityCache<(T)>;}
declare module "blusunrize.immersiveengineering.common.util.inventory.IIEInventory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IDropInventory$$Interface} from "blusunrize.immersiveengineering.common.util.inventory.IDropInventory"
import {$Stream} from "java.util.stream.Stream"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export interface $IIEInventory$$Interface extends $IDropInventory$$Interface {
get "droppedItems"(): $Stream<($ItemStack)>
get "comparatedSize"(): integer
get "inventory"(): $NonNullList<($ItemStack)>
}

export class $IIEInventory implements $IIEInventory$$Interface {
 "isStackValid"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "doGraphicalUpdates"(): void
 "getDroppedItems"(): $Stream<($ItemStack)>
 "getComparatedSize"(): integer
 "getInventory"(): $NonNullList<($ItemStack)>
 "getSlotLimit"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IIEInventory$$Type = ($IIEInventory);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IIEInventory$$Original = $IIEInventory;}
declare module "blusunrize.immersiveengineering.common.util.ItemGetterList" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Function$$Type} from "java.util.function.Function"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $ItemGetterList {
constructor(arg0: $Function$$Type<($LivingEntity), ($ItemStack$$Type)>)

public "addGetter"(arg0: $Function$$Type<($LivingEntity), ($ItemStack$$Type)>): void
public "getFrom"(arg0: $LivingEntity$$Type): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemGetterList$$Type = ($ItemGetterList);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemGetterList$$Original = $ItemGetterList;}
declare module "blusunrize.immersiveengineering.common.util.inventory.IDropInventory" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Stream, $Stream$$Type} from "java.util.stream.Stream"

export interface $IDropInventory$$Interface {

(): $Stream$$Type<($ItemStack$$Type)>
get "droppedItems"(): $Stream<($ItemStack)>
}

export class $IDropInventory implements $IDropInventory$$Interface {
 "getDroppedItems"(): $Stream<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDropInventory$$Type = (() => $Stream$$Type<($ItemStack$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDropInventory$$Original = $IDropInventory;}
