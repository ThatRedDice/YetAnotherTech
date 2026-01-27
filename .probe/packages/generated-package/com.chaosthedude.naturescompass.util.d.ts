declare module "com.chaosthedude.naturescompass.util.CompassState" {
import {$Enum} from "java.lang.Enum"

export class $CompassState extends $Enum<($CompassState)> {
static readonly "INACTIVE": $CompassState
static readonly "NOT_FOUND": $CompassState
static readonly "FOUND": $CompassState
static readonly "SEARCHING": $CompassState

public static "fromID"(arg0: integer): $CompassState
public "getID"(): integer
public static "values"(): ($CompassState)[]
public static "valueOf"(arg0: StringJS): $CompassState
get "ID"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CompassState$$Type = (("inactive") | ("searching") | ("found") | ("not_found"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CompassState$$Original = $CompassState;}
