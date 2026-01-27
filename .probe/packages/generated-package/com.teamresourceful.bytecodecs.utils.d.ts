declare module "com.teamresourceful.bytecodecs.utils.Either" {
import {$Optional} from "java.util.Optional"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $Either$$Interface<L, R> {

(arg0: $Function<(L), (T)>, arg1: $Function<(R), (T)>): T
}

export class $Either<L, R> implements $Either$$Interface {
 "ifLeftOrElse"(arg0: $Consumer$$Type<(L)>, arg1: $Runnable$$Type): $Either<(L), (R)>
 "ifRightOrElse"(arg0: $Consumer$$Type<(R)>, arg1: $Runnable$$Type): $Either<(L), (R)>
 "rightOr"(arg0: R): R
 "leftOr"(arg0: L): L
static "ofLeft"<L, R>(arg0: L): $Either<(L), (R)>
 "leftOrThrow"(): L
static "ofRight"<L, R>(arg0: R): $Either<(L), (R)>
 "rightOrThrow"(): R
 "isRight"(): boolean
static "value"<T>(arg0: $Either$$Type<(T), (T)>): T
 "map"<T>(arg0: $Function$$Type<(L), (T)>, arg1: $Function$$Type<(R), (T)>): T
 "left"(): $Optional<(L)>
 "right"(): $Optional<(R)>
 "isLeft"(): boolean
 "ifLeft"(arg0: $Consumer$$Type<(L)>): $Either<(L), (R)>
 "ifRight"(arg0: $Consumer$$Type<(R)>): $Either<(L), (R)>
 "mapEither"<F, S>(arg0: $Function$$Type<(L), (F)>, arg1: $Function$$Type<(R), (S)>): $Either<(F), (S)>
 "mapLeft"<T>(arg0: $Function$$Type<(L), (T)>): $Either<(T), (R)>
 "mapRight"<T>(arg0: $Function$$Type<(R), (T)>): $Either<(L), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Either$$Type<L, R> = ((arg0: $Function<(L), (T)>, arg1: $Function<(R), (T)>) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Either$$Original<L, R> = $Either<(L), (R)>;}
