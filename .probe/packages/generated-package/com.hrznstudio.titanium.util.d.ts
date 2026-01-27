declare module "com.hrznstudio.titanium.util.FacingUtil$Sideness" {
import {$Enum} from "java.lang.Enum"

export class $FacingUtil$Sideness extends $Enum<($FacingUtil$Sideness)> {
static readonly "LEFT": $FacingUtil$Sideness
static readonly "TOP": $FacingUtil$Sideness
static readonly "FRONT": $FacingUtil$Sideness
static readonly "BACK": $FacingUtil$Sideness
static readonly "RIGHT": $FacingUtil$Sideness
static readonly "BOTTOM": $FacingUtil$Sideness

public static "values"(): ($FacingUtil$Sideness)[]
public static "valueOf"(arg0: StringJS): $FacingUtil$Sideness
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FacingUtil$Sideness$$Type = (("front") | ("back") | ("left") | ("right") | ("top") | ("bottom"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FacingUtil$Sideness$$Original = $FacingUtil$Sideness;}
