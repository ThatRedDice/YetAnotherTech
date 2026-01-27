declare module "dan200.computercraft.core.computer.ComputerSide" {
import {$Enum} from "java.lang.Enum"
import {$List} from "java.util.List"

export class $ComputerSide extends $Enum<($ComputerSide)> {
static readonly "NAMES": $List<(StringJS)>
static readonly "TOP": $ComputerSide
static readonly "LEFT": $ComputerSide
static readonly "BACK": $ComputerSide
static readonly "FRONT": $ComputerSide
static readonly "RIGHT": $ComputerSide
static readonly "COUNT": integer
static readonly "BOTTOM": $ComputerSide

public static "valueOfInsensitive"(arg0: StringJS): $ComputerSide
public "getName"(): StringJS
public static "values"(): ($ComputerSide)[]
public static "valueOf"(arg0: integer): $ComputerSide
public static "valueOf"(arg0: StringJS): $ComputerSide
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerSide$$Type = (("bottom") | ("top") | ("back") | ("front") | ("right") | ("left"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerSide$$Original = $ComputerSide;}
declare module "dan200.computercraft.core.computer.ComputerEnvironment" {
import {$WritableMount} from "dan200.computercraft.api.filesystem.WritableMount"
import {$MetricsObserver} from "dan200.computercraft.core.metrics.MetricsObserver"

export interface $ComputerEnvironment$$Interface {
get "metrics"(): $MetricsObserver
get "day"(): integer
get "timeOfDay"(): double
}

export class $ComputerEnvironment implements $ComputerEnvironment$$Interface {
 "getMetrics"(): $MetricsObserver
 "createRootMount"(): $WritableMount
 "getDay"(): integer
 "getTimeOfDay"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComputerEnvironment$$Type = ($ComputerEnvironment);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComputerEnvironment$$Original = $ComputerEnvironment;}
