declare module "com.buuz135.functionalstorage.fluid.BigFluidHandler" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BigFluidHandler$CustomFluidTank} from "com.buuz135.functionalstorage.fluid.BigFluidHandler$CustomFluidTank"
import {$IFluidHandler$$Interface} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Tag$$Type} from "net.minecraft.nbt.Tag"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $BigFluidHandler implements $IFluidHandler$$Interface, $INBTSerializable$$Interface<($CompoundTag)> {
constructor(arg0: integer, arg1: integer)

public "isDrawerVoid"(): boolean
public "isDrawerCreative"(): boolean
public "isDrawerLocked"(): boolean
public "lockHandler"(): void
public "getTankList"(): ($BigFluidHandler$CustomFluidTank)[]
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "getFilterStack"(): ($FluidStack)[]
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "setCapacity"(arg0: integer): void
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "onChange"(): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
get "drawerVoid"(): boolean
get "drawerCreative"(): boolean
get "drawerLocked"(): boolean
get "tankList"(): ($BigFluidHandler$CustomFluidTank)[]
get "tanks"(): integer
get "filterStack"(): ($FluidStack)[]
set "capacity"(value: integer)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BigFluidHandler$$Type = ($BigFluidHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BigFluidHandler$$Original = $BigFluidHandler;}
declare module "com.buuz135.functionalstorage.fluid.ControllerFluidHandler" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$ConnectedDrawers} from "com.buuz135.functionalstorage.util.ConnectedDrawers"
import {$IFluidHandler$$Interface} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $ControllerFluidHandler implements $IFluidHandler$$Interface {
constructor()

public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "getDrawers"(): $ConnectedDrawers
public "invalidateSlots"(): void
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
get "tanks"(): integer
get "drawers"(): $ConnectedDrawers
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControllerFluidHandler$$Type = ($ControllerFluidHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControllerFluidHandler$$Original = $ControllerFluidHandler;}
