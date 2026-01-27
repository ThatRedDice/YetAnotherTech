declare module "rearth.oritech.api.fluid.FluidApi$FluidStorage" {
import {$List} from "java.util.List"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"

export class $FluidApi$FluidStorage {
constructor()

public "supportsExtraction"(): boolean
public "supportsInsertion"(): boolean
public "getCapacity"(): long
public "update"(): void
public "extract"(arg0: $FluidStack$$Type, arg1: boolean): long
public "insert"(arg0: $FluidStack$$Type, arg1: boolean): long
public "getContent"(): $List<($FluidStack)>
get "capacity"(): long
get "content"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidApi$FluidStorage$$Type = ($FluidApi$FluidStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidApi$FluidStorage$$Original = $FluidApi$FluidStorage;}
declare module "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage" {
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$FluidApi$FluidStorage} from "rearth.oritech.api.fluid.FluidApi$FluidStorage"

export class $FluidApi$SingleSlotStorage extends $FluidApi$FluidStorage {
constructor()

public "getStack"(): $FluidStack
public "setStack"(arg0: $FluidStack$$Type): void
get "stack"(): $FluidStack
set "stack"(value: $FluidStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidApi$SingleSlotStorage$$Type = ($FluidApi$SingleSlotStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidApi$SingleSlotStorage$$Original = $FluidApi$SingleSlotStorage;}
declare module "rearth.oritech.api.fluid.FluidApi$ItemProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidApi$SingleSlotStorage, $FluidApi$SingleSlotStorage$$Type} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"

export interface $FluidApi$ItemProvider$$Interface {

(arg0: $ItemStack): $FluidApi$SingleSlotStorage$$Type
}

export class $FluidApi$ItemProvider implements $FluidApi$ItemProvider$$Interface {
 "getFluidStorage"(arg0: $ItemStack$$Type): $FluidApi$SingleSlotStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidApi$ItemProvider$$Type = ((arg0: $ItemStack) => $FluidApi$SingleSlotStorage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidApi$ItemProvider$$Original = $FluidApi$ItemProvider;}
