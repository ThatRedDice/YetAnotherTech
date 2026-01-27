declare module "dan200.computercraft.api.lua.LuaTable" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$Collection} from "java.util.Collection"
import {$Map, $Map$$Type, $Map$$Interface} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Function$$Type} from "java.util.function.Function"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$Map$Entry, $Map$Entry$$Type} from "java.util.Map$Entry"

export interface $LuaTable$$Interface<K, V> extends $Map$$Interface<(K), (V)> {
[index: string | number]: V
get "empty"(): boolean
}

export class $LuaTable<K, V> implements $LuaTable$$Interface {
 "optString"(arg0: StringJS): $Optional<(StringJS)>
 "optString"(arg0: integer): $Optional<(StringJS)>
 "optTable"(arg0: integer): $Optional<($Map<(never), (never)>)>
 "optTable"(arg0: StringJS): $Optional<($Map<(never), (never)>)>
 "optBoolean"(arg0: StringJS): $Optional<(boolean)>
 "optBoolean"(arg0: integer): $Optional<(boolean)>
 "optInt"(arg0: integer): $Optional<(integer)>
 "optInt"(arg0: StringJS): $Optional<(integer)>
 "getTable"(arg0: integer): $Map<(never), (never)>
 "getTable"(arg0: StringJS): $Map<(never), (never)>
 "optDouble"(arg0: integer): $Optional<(double)>
 "optDouble"(arg0: StringJS): $Optional<(double)>
 "optLong"(arg0: StringJS): $Optional<(long)>
 "optLong"(arg0: integer): $Optional<(long)>
 "optFiniteDouble"(arg0: integer): $Optional<(double)>
 "optFiniteDouble"(arg0: StringJS): $Optional<(double)>
 "getFiniteDouble"(arg0: StringJS): double
 "getFiniteDouble"(arg0: integer): double
 "remove"(arg0: any): V
 "put"(arg0: K, arg1: V): V
 "length"(): integer
 "getBoolean"(arg0: StringJS): boolean
 "getBoolean"(arg0: integer): boolean
 "getInt"(arg0: integer): integer
 "getInt"(arg0: StringJS): integer
 "getLong"(arg0: StringJS): long
 "getLong"(arg0: integer): long
 "getDouble"(arg0: StringJS): double
 "getDouble"(arg0: integer): double
 "clear"(): void
 "putAll"(arg0: $Map$$Type<(K), (V)>): void
 "getString"(arg0: StringJS): StringJS
 "getString"(arg0: integer): StringJS
 "remove"(arg0: any, arg1: any): boolean
 "size"(): integer
 "get"(arg0: any): V
 "equals"(arg0: any): boolean
 "values"(): $Collection<(V)>
 "hashCode"(): integer
static "copyOf"<K, V>(arg0: $Map$$Type<(K), (V)>): $Map<(K), (V)>
 "isEmpty"(): boolean
 "replace"(arg0: K, arg1: V, arg2: V): boolean
 "replace"(arg0: K, arg1: V): V
 "replaceAll"(arg0: $BiFunction$$Type<(K), (V), (V)>): void
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V): $Map<(K), (V)>
static "of"<K, V>(): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V, arg18: K, arg19: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V, arg16: K, arg17: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V, arg14: K, arg15: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V, arg12: K, arg13: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V, arg10: K, arg11: V): $Map<(K), (V)>
static "of"<K, V>(arg0: K, arg1: V, arg2: K, arg3: V, arg4: K, arg5: V, arg6: K, arg7: V, arg8: K, arg9: V): $Map<(K), (V)>
 "merge"(arg0: K, arg1: V, arg2: $BiFunction$$Type<(V), (V), (V)>): V
 "entrySet"(): $Set<($Map$Entry<(K), (V)>)>
 "putIfAbsent"(arg0: K, arg1: V): V
 "compute"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "entry"<K, V>(arg0: K, arg1: V): $Map$Entry<(K), (V)>
 "forEach"(arg0: $BiConsumer$$Type<(K), (V)>): void
 "containsKey"(arg0: any): boolean
 "computeIfAbsent"(arg0: K, arg1: $Function$$Type<(K), (V)>): V
 "keySet"(): $Set<(K)>
 "containsValue"(arg0: any): boolean
 "getOrDefault"(arg0: any, arg1: V): V
 "computeIfPresent"(arg0: K, arg1: $BiFunction$$Type<(K), (V), (V)>): V
static "ofEntries"<K, V>(...arg0: ($Map$Entry$$Type<(K), (V)>)[]): $Map<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTable$$Type<K, V> = ($LuaTable<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LuaTable$$Original<K, V> = $LuaTable<(K), (V)>;}
declare module "dan200.computercraft.api.lua.MethodResult" {
import {$ILuaCallback, $ILuaCallback$$Type} from "dan200.computercraft.api.lua.ILuaCallback"

export class $MethodResult {
public "getResult"(): (any)[]
public "getErrorAdjust"(): integer
public static "pullEventRaw"(arg0: StringJS, arg1: $ILuaCallback$$Type): $MethodResult
public "adjustError"(arg0: integer): $MethodResult
public static "of"(...arg0: (any)[]): $MethodResult
public static "of"(): $MethodResult
public static "of"(arg0: any): $MethodResult
public static "yield"(arg0: (any)[], arg1: $ILuaCallback$$Type): $MethodResult
public "getCallback"(): $ILuaCallback
public static "pullEvent"(arg0: StringJS, arg1: $ILuaCallback$$Type): $MethodResult
get "result"(): (any)[]
get "errorAdjust"(): integer
get "callback"(): $ILuaCallback
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MethodResult$$Type = ($MethodResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MethodResult$$Original = $MethodResult;}
declare module "dan200.computercraft.api.lua.LuaTask" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $LuaTask$$Interface {

(): (any)[]
}

export class $LuaTask implements $LuaTask$$Interface {
 "execute"(): (any)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LuaTask$$Type = (() => (any)[]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LuaTask$$Original = $LuaTask;}
declare module "dan200.computercraft.api.lua.IArguments" {
import {$LuaTable} from "dan200.computercraft.api.lua.LuaTable"
import {$Map, $Map$$Type} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Enum} from "java.lang.Enum"
import {$Class$$Type} from "java.lang.Class"
import {$ByteBuffer} from "java.nio.ByteBuffer"

export interface $IArguments$$Interface {
get "all"(): (any)[]
}

export class $IArguments implements $IArguments$$Interface {
 "optString"(arg0: integer, arg1: StringJS): StringJS
 "optString"(arg0: integer): $Optional<(StringJS)>
 "optTable"(arg0: integer): $Optional<($Map<(never), (never)>)>
 "optTable"(arg0: integer, arg1: $Map$$Type<(any), (any)>): $Map<(never), (never)>
 "optBoolean"(arg0: integer): $Optional<(boolean)>
 "optBoolean"(arg0: integer, arg1: boolean): boolean
 "optInt"(arg0: integer): $Optional<(integer)>
 "optInt"(arg0: integer, arg1: integer): integer
 "getAll"(): (any)[]
 "getTable"(arg0: integer): $Map<(never), (never)>
 "optDouble"(arg0: integer, arg1: double): double
 "optDouble"(arg0: integer): $Optional<(double)>
 "optLong"(arg0: integer, arg1: long): long
 "optLong"(arg0: integer): $Optional<(long)>
 "optEnum"<T extends $Enum<(object)>>(arg0: integer, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getStringCoerced"(arg0: integer): StringJS
 "optFiniteDouble"(arg0: integer, arg1: double): double
 "optFiniteDouble"(arg0: integer): $Optional<(double)>
 "getFiniteDouble"(arg0: integer): double
 "getTableUnsafe"(arg0: integer): $LuaTable<(never), (never)>
 "optBytes"(arg0: integer): $Optional<($ByteBuffer)>
 "optTableUnsafe"(arg0: integer): $Optional<($LuaTable<(never), (never)>)>
 "getBytesCoerced"(arg0: integer): $ByteBuffer
 "get"(arg0: integer): any
 "getBoolean"(arg0: integer): boolean
 "getInt"(arg0: integer): integer
 "getLong"(arg0: integer): long
 "getDouble"(arg0: integer): double
 "getBytes"(arg0: integer): $ByteBuffer
 "count"(): integer
 "getType"(arg0: integer): StringJS
 "getString"(arg0: integer): StringJS
 "drop"(arg0: integer): $IArguments
 "getEnum"<T extends $Enum<(object)>>(arg0: integer, arg1: $Class$$Type<(T)>): T
 "escapes"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IArguments$$Type = ($IArguments);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IArguments$$Original = $IArguments;}
declare module "dan200.computercraft.api.lua.ILuaContext" {
import {$LuaTask, $LuaTask$$Type} from "dan200.computercraft.api.lua.LuaTask"
import {$MethodResult} from "dan200.computercraft.api.lua.MethodResult"

export interface $ILuaContext$$Interface {

(arg0: $LuaTask): long
}

export class $ILuaContext implements $ILuaContext$$Interface {
 "issueMainThreadTask"(arg0: $LuaTask$$Type): long
 "executeMainThreadTask"(arg0: $LuaTask$$Type): $MethodResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaContext$$Type = ((arg0: $LuaTask) => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILuaContext$$Original = $ILuaContext;}
declare module "dan200.computercraft.api.lua.ILuaCallback" {
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"

export interface $ILuaCallback$$Interface {

(arg0: (any)[]): $MethodResult$$Type
}

export class $ILuaCallback implements $ILuaCallback$$Interface {
 "resume"(arg0: (any)[]): $MethodResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ILuaCallback$$Type = ((arg0: (any)[]) => $MethodResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ILuaCallback$$Original = $ILuaCallback;}
