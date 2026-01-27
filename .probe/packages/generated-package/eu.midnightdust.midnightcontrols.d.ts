declare module "eu.midnightdust.midnightcontrols.ControlsMode" {
import {$Optional} from "java.util.Optional"
import {$Enum} from "java.lang.Enum"

export class $ControlsMode extends $Enum<($ControlsMode)> {
static readonly "CONTROLLER": $ControlsMode
static readonly "DEFAULT": $ControlsMode
static readonly "TOUCHSCREEN": $ControlsMode

public "getTranslationKey"(): StringJS
public "getName"(): StringJS
public static "values"(): ($ControlsMode)[]
public static "valueOf"(name: StringJS): $ControlsMode
public "next"(): $ControlsMode
public static "byId"(id: StringJS): $Optional<($ControlsMode)>
get "translationKey"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ControlsMode$$Type = (("default") | ("controller") | ("touchscreen"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ControlsMode$$Original = $ControlsMode;}
