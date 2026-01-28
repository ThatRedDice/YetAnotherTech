declare module "dev.architectury.utils.Env" {
import {$Enum} from "java.lang.Enum"
import {$Dist} from "net.neoforged.api.distmarker.Dist"

export class $Env extends $Enum<($Env)> {
static readonly "SERVER": $Env
static readonly "CLIENT": $Env

public "toPlatform"(): $Dist
public static "fromPlatform"(type: any): $Env
public static "values"(): ($Env)[]
public static "valueOf"(name: StringJS): $Env
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Env$$Type = (("client") | ("server"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Env$$Original = $Env;}
declare module "dev.architectury.utils.OptionalSupplier" {
import {$Optional} from "java.util.Optional"
import {$Supplier$$Type, $Supplier$$Interface} from "java.util.function.Supplier"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Stream} from "java.util.stream.Stream"
import {$Consumer$$Type} from "java.util.function.Consumer"

export interface $OptionalSupplier$$Interface<T> extends $Supplier$$Interface<(T)> {
get "present"(): boolean
get "orNull"(): T
}

export class $OptionalSupplier<T> implements $OptionalSupplier$$Interface {
 "toOptional"(): $Optional<(T)>
 "ifPresent"(action: $Consumer$$Type<(T)>): void
 "stream"(): $Stream<(T)>
 "isPresent"(): boolean
 "orElse"(other: T): T
 "ifPresentOrElse"(action: $Consumer$$Type<(T)>, emptyAction: $Runnable$$Type): void
 "orElseGet"(supplier: $Supplier$$Type<(T)>): T
 "getOrNull"(): T
 "get"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OptionalSupplier$$Type<T> = ($OptionalSupplier<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OptionalSupplier$$Original<T> = $OptionalSupplier<(T)>;}
