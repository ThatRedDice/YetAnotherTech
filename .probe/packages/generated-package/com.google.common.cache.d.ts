declare module "com.google.common.cache.LoadingCache" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$CacheStats} from "com.google.common.cache.CacheStats"
import {$Map$$Type} from "java.util.Map"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$ConcurrentMap} from "java.util.concurrent.ConcurrentMap"
import {$Cache$$Interface} from "com.google.common.cache.Cache"
import {$Function$$Interface as $Function$0$$Interface} from "com.google.common.base.Function"
import {$ImmutableMap} from "com.google.common.collect.ImmutableMap"

export interface $LoadingCache$$Interface<K, V> extends $Cache$$Interface<(K), (V)>, $Function$0$$Interface<(K), (V)> {
}

export class $LoadingCache<K, V> implements $LoadingCache$$Interface {
 "getUnchecked"(key: K): V
 "getAll"(keys: $Iterable$$Type<(K)>): $ImmutableMap<(K), (V)>
 "refresh"(key: K): void
 "get"(key: K): V
/**
 * 
 * @deprecated
 */
 "apply"(key: K): V
 "asMap"(): $ConcurrentMap<(K), (V)>
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "getAllPresent"(keys: $Iterable$$Type<(never)>): $ImmutableMap<(K), (V)>
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "invalidate"(key: any): void
 "invalidateAll"(keys: $Iterable$$Type<(never)>): void
 "invalidateAll"(): void
 "stats"(): $CacheStats
 "equals"(object: any): boolean
static "identity"<T>(): $Function<(K), (K)>
 "compose"<V>(arg0: $Function$$Type<(V), (K)>): $Function<(V), (V)>
 "andThen"<V>(arg0: $Function$$Type<(V), (V)>): $Function<(K), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoadingCache$$Type<K, V> = ($LoadingCache<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoadingCache$$Original<K, V> = $LoadingCache<(K), (V)>;}
declare module "com.google.common.cache.CacheStats" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $CacheStats {
constructor(hitCount: long, missCount: long, loadSuccessCount: long, loadExceptionCount: long, totalLoadTime: long, evictionCount: long)

public "loadSuccessCount"(): long
public "loadExceptionCount"(): long
public "totalLoadTime"(): long
public "evictionCount"(): long
public "requestCount"(): long
public "hitRate"(): double
public "missRate"(): double
public "loadCount"(): long
public "loadExceptionRate"(): double
public "averageLoadPenalty"(): double
public "minus"(other: $CacheStats$$Type): $CacheStats
public "equals"(object: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "plus"(other: $CacheStats$$Type): $CacheStats
public "missCount"(): long
public "hitCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CacheStats$$Type = ($CacheStats);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CacheStats$$Original = $CacheStats;}
declare module "com.google.common.cache.Cache" {
import {$Iterable$$Type} from "java.lang.Iterable"
import {$CacheStats} from "com.google.common.cache.CacheStats"
import {$Map$$Type} from "java.util.Map"
import {$Callable$$Type} from "java.util.concurrent.Callable"
import {$ConcurrentMap} from "java.util.concurrent.ConcurrentMap"
import {$ImmutableMap} from "com.google.common.collect.ImmutableMap"

export interface $Cache$$Interface<K, V> {
}

export class $Cache<K, V> implements $Cache$$Interface {
 "cleanUp"(): void
 "getIfPresent"(key: any): V
 "getAllPresent"(keys: $Iterable$$Type<(never)>): $ImmutableMap<(K), (V)>
 "size"(): long
 "get"(key: K, loader: $Callable$$Type<(V)>): V
 "put"(key: K, value: V): void
 "putAll"(m: $Map$$Type<(K), (V)>): void
 "invalidate"(key: any): void
 "asMap"(): $ConcurrentMap<(K), (V)>
 "invalidateAll"(keys: $Iterable$$Type<(never)>): void
 "invalidateAll"(): void
 "stats"(): $CacheStats
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Cache$$Type<K, V> = ($Cache<(K), (V)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Cache$$Original<K, V> = $Cache<(K), (V)>;}
