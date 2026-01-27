declare module "dev.architectury.event.EventResult" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"

export class $EventResult {
public static "interruptFalse"(): $EventResult
public "interruptsFurtherEvaluation"(): boolean
public "asMinecraft"(): $InteractionResult
public static "interruptTrue"(): $EventResult
public static "interruptDefault"(): $EventResult
public static "pass"(): $EventResult
public "isFalse"(): boolean
public static "interrupt"(value: boolean): $EventResult
public "value"(): boolean
public "isEmpty"(): boolean
public "isPresent"(): boolean
public "isTrue"(): boolean
get "false"(): boolean
get "empty"(): boolean
get "present"(): boolean
get "true"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EventResult$$Type = ($EventResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EventResult$$Original = $EventResult;}
