declare module "com.blakebr0.cucumber.util.TriFunction" {
import {$Function$$Type} from "java.util.function.Function"

export interface $TriFunction$$Interface<A, B, C, R> {

(arg0: A, arg1: B, arg2: C): R
}

export class $TriFunction<A, B, C, R> implements $TriFunction$$Interface {
 "apply"(arg0: A, arg1: B, arg2: C): R
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $TriFunction<(A), (B), (C), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$$Type<A, B, C, R> = ((arg0: A, arg1: B, arg2: C) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriFunction$$Original<A, B, C, R> = $TriFunction<(A), (B), (C), (R)>;}
