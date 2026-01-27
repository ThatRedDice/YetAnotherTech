declare module "dev.architectury.utils.value.IntValue" {
import {$Value$$Interface} from "dev.architectury.utils.value.Value"
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$IntConsumer as $IntConsumer$0, $IntConsumer$$Type as $IntConsumer$0$$Type, $IntConsumer$$Interface as $IntConsumer$0$$Interface} from "it.unimi.dsi.fastutil.ints.IntConsumer"
import {$IntSupplier$$Interface} from "java.util.function.IntSupplier"
import {$Consumer, $Consumer$$Type} from "java.util.function.Consumer"

export interface $IntValue$$Interface extends $Value$$Interface<(integer)>, $IntSupplier$$Interface, $IntConsumer$0$$Interface {
get "asInt"(): integer
}

export class $IntValue implements $IntValue$$Interface {
 "get"(): integer
 "getAsInt"(): integer
/**
 * 
 * @deprecated
 */
 "accept"(arg0: any): void
/**
 * 
 * @deprecated
 */
 "accept"(arg0: integer): void
 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
/**
 * 
 * @deprecated
 */
 "andThen"(arg0: $Consumer$$Type<(integer)>): $Consumer<(integer)>
 "andThen"(arg0: $IntConsumer$0$$Type): $IntConsumer$0
 "accept"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntValue$$Type = ($IntValue);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntValue$$Original = $IntValue;}
declare module "dev.architectury.utils.value.Value" {
import {$Supplier$$Interface} from "java.util.function.Supplier"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

export interface $Value$$Interface<T> extends $Supplier$$Interface<(T)>, $Consumer$$Interface<(T)> {
}

export class $Value<T> implements $Value$$Interface {
 "get"(): T
 "accept"(arg0: T): void
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Value$$Type<T> = ($Value<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Value$$Original<T> = $Value<(T)>;}
