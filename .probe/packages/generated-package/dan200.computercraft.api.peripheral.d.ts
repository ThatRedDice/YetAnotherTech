declare module "dan200.computercraft.api.peripheral.IDynamicPeripheral" {
import {$ILuaContext$$Type} from "dan200.computercraft.api.lua.ILuaContext"
import {$MethodResult} from "dan200.computercraft.api.lua.MethodResult"
import {$IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$Set} from "java.util.Set"
import {$IPeripheral$$Type, $IPeripheral$$Interface} from "dan200.computercraft.api.peripheral.IPeripheral"

export interface $IDynamicPeripheral$$Interface extends $IPeripheral$$Interface {
get "methodNames"(): (StringJS)[]
get "additionalTypes"(): $Set<(StringJS)>
get "type"(): StringJS
get "target"(): any
}

export class $IDynamicPeripheral implements $IDynamicPeripheral$$Interface {
 "callMethod"(arg0: $IComputerAccess$$Type, arg1: $ILuaContext$$Type, arg2: integer, arg3: $IArguments$$Type): $MethodResult
 "getMethodNames"(): (StringJS)[]
 "getAdditionalTypes"(): $Set<(StringJS)>
 "detach"(arg0: $IComputerAccess$$Type): void
 "equals"(arg0: $IPeripheral$$Type): boolean
 "getType"(): StringJS
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDynamicPeripheral$$Type = ($IDynamicPeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDynamicPeripheral$$Original = $IDynamicPeripheral;}
declare module "dan200.computercraft.api.peripheral.IComputerAccess" {
import {$WritableMount$$Type} from "dan200.computercraft.api.filesystem.WritableMount"
import {$Mount$$Type} from "dan200.computercraft.api.filesystem.Mount"
import {$Map} from "java.util.Map"
import {$IPeripheral} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$WorkMonitor} from "dan200.computercraft.api.peripheral.WorkMonitor"

export interface $IComputerAccess$$Interface {
get "attachmentName"(): StringJS
get "availablePeripherals"(): $Map<(StringJS), ($IPeripheral)>
get "mainThreadMonitor"(): $WorkMonitor
get "ID"(): integer
}

export class $IComputerAccess implements $IComputerAccess$$Interface {
 "getAttachmentName"(): StringJS
 "queueEvent"(arg0: StringJS, ...arg1: (any)[]): void
 "mountWritable"(arg0: StringJS, arg1: $WritableMount$$Type, arg2: StringJS): StringJS
 "mountWritable"(arg0: StringJS, arg1: $WritableMount$$Type): StringJS
 "getAvailablePeripherals"(): $Map<(StringJS), ($IPeripheral)>
 "getAvailablePeripheral"(arg0: StringJS): $IPeripheral
 "getMainThreadMonitor"(): $WorkMonitor
 "getID"(): integer
 "mount"(arg0: StringJS, arg1: $Mount$$Type): StringJS
 "mount"(arg0: StringJS, arg1: $Mount$$Type, arg2: StringJS): StringJS
 "unmount"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IComputerAccess$$Type = ($IComputerAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IComputerAccess$$Original = $IComputerAccess;}
declare module "dan200.computercraft.api.peripheral.IPeripheral" {
import {$IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$Set} from "java.util.Set"

export interface $IPeripheral$$Interface {
get "additionalTypes"(): $Set<(StringJS)>
get "type"(): StringJS
get "target"(): any
}

export class $IPeripheral implements $IPeripheral$$Interface {
 "getAdditionalTypes"(): $Set<(StringJS)>
 "detach"(arg0: $IComputerAccess$$Type): void
 "equals"(arg0: $IPeripheral$$Type): boolean
 "getType"(): StringJS
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheral$$Type = ($IPeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPeripheral$$Original = $IPeripheral;}
declare module "dan200.computercraft.api.peripheral.WorkMonitor" {
import {$Runnable$$Type} from "java.lang.Runnable"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $WorkMonitor$$Interface {
}

export class $WorkMonitor implements $WorkMonitor$$Interface {
 "canWork"(): boolean
 "shouldWork"(): boolean
 "trackWork"(arg0: long, arg1: $TimeUnit$$Type): void
 "runWork"(arg0: $Runnable$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WorkMonitor$$Type = ($WorkMonitor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WorkMonitor$$Original = $WorkMonitor;}
