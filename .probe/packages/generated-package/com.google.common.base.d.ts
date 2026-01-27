declare module "com.google.common.base.Supplier" {
import {$Supplier$$Interface as $Supplier$0$$Interface} from "java.util.function.Supplier"

export interface $Supplier$$Interface<T> extends $Supplier$0$$Interface<(T)> {

(): T
}

export class $Supplier<T> implements $Supplier$$Interface {
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Supplier$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Supplier$$Original<T> = $Supplier<(T)>;}
declare module "com.google.common.base.Optional" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$Supplier$$Type} from "com.google.common.base.Supplier"
import {$Optional as $Optional$0, $Optional$$Type as $Optional$0$$Type} from "java.util.Optional"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Set} from "java.util.Set"
import {$Function$$Type} from "com.google.common.base.Function"

export class $Optional<T> implements $Serializable$$Interface {
public "or"(secondChoice: $Optional$$Type<(T)>): $Optional<(T)>
public "or"(supplier: $Supplier$$Type<(T)>): T
public "or"(defaultValue: T): T
public "get"(): T
public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"<T>(reference: T): $Optional<(T)>
public "transform"<V>(arg0: $Function$$Type<(T), (V)>): $Optional<(V)>
public "isPresent"(): boolean
public "asSet"(): $Set<(T)>
public static "absent"<T>(): $Optional<(T)>
public static "fromNullable"<T>(nullableReference: T): $Optional<(T)>
public static "fromJavaUtil"<T>(javaUtilOptional: (T)?): $Optional<(T)>
public static "toJavaUtil"<T>(googleOptional: $Optional$$Type<(T)>): $Optional$0<(T)>
public "toJavaUtil"(): $Optional$0<(T)>
public "orNull"(): T
public static "presentInstances"<T>(optionals: $Iterable$$Type<($Optional$$Type<(T)>)>): $Iterable<(T)>
get "present"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Optional$$Type<T> = ($Optional<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Optional$$Original<T> = $Optional<(T)>;}
declare module "com.google.common.base.Function" {
import {$Function as $Function$0, $Function$$Type as $Function$0$$Type, $Function$$Interface as $Function$0$$Interface} from "java.util.function.Function"

export interface $Function$$Interface<F, T> extends $Function$0$$Interface<(F), (T)> {
}

export class $Function<F, T> implements $Function$$Interface {
 "equals"(object: any): boolean
 "apply"(input: F): T
static "identity"<T>(): $Function$0<(F), (F)>
 "compose"<V>(arg0: $Function$0$$Type<(V), (F)>): $Function$0<(V), (F)>
 "andThen"<V>(arg0: $Function$0$$Type<(F), (V)>): $Function$0<(F), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Function$$Type<F, T> = ($Function<(F), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Function$$Original<F, T> = $Function<(F), (T)>;}
declare module "com.google.common.base.Predicate" {
import {$Predicate as $Predicate$0, $Predicate$$Type as $Predicate$0$$Type, $Predicate$$Interface as $Predicate$0$$Interface} from "java.util.function.Predicate"

export interface $Predicate$$Interface<T> extends $Predicate$0$$Interface<(T)> {
}

export class $Predicate<T> implements $Predicate$$Interface {
 "equals"(object: any): boolean
 "test"(input: T): boolean
 "apply"(input: T): boolean
 "or"(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
static "isEqual"<T>(arg0: any): $Predicate$0<(T)>
 "negate"(): $Predicate$0<(T)>
 "and"(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
static "not"<T>(arg0: $Predicate$0$$Type<(T)>): $Predicate$0<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Predicate$$Type<T> = ($Predicate<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Predicate$$Original<T> = $Predicate<(T)>;}
