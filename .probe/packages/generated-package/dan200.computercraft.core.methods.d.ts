declare module "dan200.computercraft.core.methods.PeripheralMethod" {
import {$ILuaContext, $ILuaContext$$Type} from "dan200.computercraft.api.lua.ILuaContext"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$IArguments, $IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"

export interface $PeripheralMethod$$Interface {

(arg0: any, arg1: $ILuaContext, arg2: $IComputerAccess, arg3: $IArguments): $MethodResult$$Type
}

export class $PeripheralMethod implements $PeripheralMethod$$Interface {
 "apply"(arg0: any, arg1: $ILuaContext$$Type, arg2: $IComputerAccess$$Type, arg3: $IArguments$$Type): $MethodResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralMethod$$Type = ((arg0: any, arg1: $ILuaContext, arg2: $IComputerAccess, arg3: $IArguments) => $MethodResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PeripheralMethod$$Original = $PeripheralMethod;}
