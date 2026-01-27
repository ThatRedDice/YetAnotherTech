declare module "net.neoforged.fml.event.IModBusEvent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export interface $IModBusEvent$$Interface {
}

export class $IModBusEvent implements $IModBusEvent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IModBusEvent$$Type = ($IModBusEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IModBusEvent$$Original = $IModBusEvent;}
declare module "net.neoforged.fml.event.lifecycle.FMLCommonSetupEvent" {
import {$DeferredWorkQueue$$Type} from "net.neoforged.fml.DeferredWorkQueue"
import {$ParallelDispatchEvent} from "net.neoforged.fml.event.lifecycle.ParallelDispatchEvent"
import {$ModContainer$$Type} from "net.neoforged.fml.ModContainer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $FMLCommonSetupEvent extends $ParallelDispatchEvent {
constructor(arg0: $ModContainer$$Type, arg1: $DeferredWorkQueue$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FMLCommonSetupEvent$$Type = ($FMLCommonSetupEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FMLCommonSetupEvent$$Original = $FMLCommonSetupEvent;}
declare module "net.neoforged.fml.event.lifecycle.ModLifecycleEvent" {
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Event} from "net.neoforged.bus.api.Event"
import {$InterModComms$IMCMessage} from "net.neoforged.fml.InterModComms$IMCMessage"
import {$Stream} from "java.util.stream.Stream"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$ModContainer$$Type} from "net.neoforged.fml.ModContainer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ModLifecycleEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $ModContainer$$Type)

public "toString"(): StringJS
public "description"(): StringJS
public "getIMCStream"(): $Stream<($InterModComms$IMCMessage)>
public "getIMCStream"(arg0: $Predicate$$Type<(StringJS)>): $Stream<($InterModComms$IMCMessage)>
get "IMCStream"(): $Stream<($InterModComms$IMCMessage)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ModLifecycleEvent$$Type = ($ModLifecycleEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ModLifecycleEvent$$Original = $ModLifecycleEvent;}
declare module "net.neoforged.fml.event.lifecycle.ParallelDispatchEvent" {
import {$DeferredWorkQueue$$Type} from "net.neoforged.fml.DeferredWorkQueue"
import {$CompletableFuture} from "java.util.concurrent.CompletableFuture"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ModLifecycleEvent} from "net.neoforged.fml.event.lifecycle.ModLifecycleEvent"
import {$ModContainer$$Type} from "net.neoforged.fml.ModContainer"

/**
 * This class is not allowed By KubeJS!
 * You should not load the class, or KubeJS will throw an error.
 * Loading the class using require() will not throw an error, but the class will be undefined.
 */
export class $ParallelDispatchEvent extends $ModLifecycleEvent {
constructor(arg0: $ModContainer$$Type, arg1: $DeferredWorkQueue$$Type)

public "enqueueWork"(arg0: $Runnable$$Type): $CompletableFuture<(void)>
public "enqueueWork"<T>(arg0: $Supplier$$Type<(T)>): $CompletableFuture<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ParallelDispatchEvent$$Type = ($ParallelDispatchEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ParallelDispatchEvent$$Original = $ParallelDispatchEvent;}
