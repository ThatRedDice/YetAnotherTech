declare module "com.blamejared.searchables.mixin.AccessEditBox" {
import {$Predicate} from "java.util.function.Predicate"
import {$Consumer} from "java.util.function.Consumer"

export interface $AccessEditBox$$Interface {
}

export class $AccessEditBox implements $AccessEditBox$$Interface {
 "searchables$getFilter"(): $Predicate<(StringJS)>
 "searchables$getResponder"(): $Consumer<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AccessEditBox$$Type = ($AccessEditBox);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AccessEditBox$$Original = $AccessEditBox;}
