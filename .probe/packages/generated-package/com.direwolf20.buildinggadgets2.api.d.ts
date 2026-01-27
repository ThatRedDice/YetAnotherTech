declare module "com.direwolf20.buildinggadgets2.api.gadgets.GadgetTarget" {
import {$Enum} from "java.lang.Enum"

export class $GadgetTarget extends $Enum<($GadgetTarget)> {
static readonly "DESTRUCTION": $GadgetTarget
static readonly "COPYPASTE": $GadgetTarget
static readonly "BUILDING": $GadgetTarget
static readonly "EXCHANGING": $GadgetTarget
static readonly "CUTPASTE": $GadgetTarget

public static "values"(): ($GadgetTarget)[]
public static "valueOf"(arg0: StringJS): $GadgetTarget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GadgetTarget$$Type = (("building") | ("exchanging") | ("destruction") | ("copypaste") | ("cutpaste"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GadgetTarget$$Original = $GadgetTarget;}
