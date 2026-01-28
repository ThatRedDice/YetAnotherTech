declare module "dan200.computercraft.core.metrics.Metric$Counter" {
import {$Metric} from "dan200.computercraft.core.metrics.Metric"

export class $Metric$Counter extends $Metric {
constructor(arg0: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metric$Counter$$Type = ($Metric$Counter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Metric$Counter$$Original = $Metric$Counter;}
declare module "dan200.computercraft.core.metrics.Metric" {
import {$Map} from "java.util.Map"

export class $Metric {
public static "formatDefault"(arg0: long): StringJS
public static "formatTime"(arg0: long): StringJS
public static "formatBytes"(arg0: long): StringJS
public static "metrics"(): $Map<(StringJS), ($Metric)>
public "name"(): StringJS
public "toString"(): StringJS
public "format"(arg0: long): StringJS
public "id"(): integer
public "unit"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metric$$Type = ($Metric);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Metric$$Original = $Metric;}
declare module "dan200.computercraft.core.metrics.MetricsObserver" {
import {$Metric$Counter$$Type} from "dan200.computercraft.core.metrics.Metric$Counter"
import {$Metric$Event$$Type} from "dan200.computercraft.core.metrics.Metric$Event"

export interface $MetricsObserver$$Interface {
}

export class $MetricsObserver implements $MetricsObserver$$Interface {
 "observe"(arg0: $Metric$Counter$$Type): void
 "observe"(arg0: $Metric$Event$$Type, arg1: long): void
static "discard"(): $MetricsObserver
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MetricsObserver$$Type = ($MetricsObserver);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MetricsObserver$$Original = $MetricsObserver;}
declare module "dan200.computercraft.core.metrics.Metric$Event" {
import {$LongFunction$$Type} from "java.util.function.LongFunction"
import {$Metric} from "dan200.computercraft.core.metrics.Metric"

export class $Metric$Event extends $Metric {
constructor(arg0: StringJS, arg1: StringJS, arg2: $LongFunction$$Type<(StringJS)>)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Metric$Event$$Type = ($Metric$Event);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Metric$Event$$Original = $Metric$Event;}
