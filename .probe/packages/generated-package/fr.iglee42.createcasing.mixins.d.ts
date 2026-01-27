declare module "fr.iglee42.createcasing.mixins.create.DeployerBlockEntityAccessor" {
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"

export interface $DeployerBlockEntityAccessor$$Interface {
get "invHandler"(): $IItemHandlerModifiable
}

export class $DeployerBlockEntityAccessor implements $DeployerBlockEntityAccessor$$Interface {
 "getInvHandler"(): $IItemHandlerModifiable
 "invokeInitHandler"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DeployerBlockEntityAccessor$$Type = ($DeployerBlockEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DeployerBlockEntityAccessor$$Original = $DeployerBlockEntityAccessor;}
