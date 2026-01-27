declare module "com.almostreliable.kubeio.event.ConduitRegistryEvent" {
import {$KubeEvent$$Interface} from "dev.latvian.mods.kubejs.event.KubeEvent"
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export class $ConduitRegistryEvent implements $KubeEvent$$Interface {
constructor()

public "registerEnergyConduit"(arg0: StringJS, arg1: $Component$$Type, arg2: integer): void
public "registerFluidConduit"(arg0: StringJS, arg1: $Component$$Type, arg2: integer, arg3: boolean, arg4: boolean): void
public "registerChemicalConduit"(arg0: StringJS, arg1: $Component$$Type, arg2: integer, arg3: boolean): void
public "registerMeConduit"(arg0: StringJS, arg1: $Component$$Type, arg2: StringJS, arg3: boolean): void
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `success` denotes a `true` outcome.
 */
public "success"(value: any): any
/**
 * Stops the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(): any
/**
 * Stops the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `exit` denotes a `default` outcome.
 */
public "exit"(value: any): any
/**
 * Cancels the event with the given exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(value: any): any
/**
 * Cancels the event with default exit value. Execution will be stopped **immediately**.
 * 
 * `cancel` denotes a `false` outcome.
 */
public "cancel"(): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConduitRegistryEvent$$Type = ($ConduitRegistryEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConduitRegistryEvent$$Original = $ConduitRegistryEvent;}
