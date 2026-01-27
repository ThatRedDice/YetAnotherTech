declare module "com.supermartijn642.core.util.TriFunction" {
import {$Function$$Type} from "java.util.function.Function"

export interface $TriFunction$$Interface<R, S, T, U> {

(r: R, s: S, t: T): U
}

export class $TriFunction<R, S, T, U> implements $TriFunction$$Interface {
 "apply"(r: R, s: S, t: T): U
 "andThen"<V>(after: $Function$$Type<(U), (V)>): $TriFunction<(R), (S), (T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TriFunction$$Type<R, S, T, U> = ((r: R, s: S, t: T) => U);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TriFunction$$Original<R, S, T, U> = $TriFunction<(R), (S), (T), (U)>;}
