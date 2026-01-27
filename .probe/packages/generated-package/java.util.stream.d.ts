declare module "java.util.stream.BaseStream" {
import {$Iterator} from "java.util.Iterator"
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$Spliterator} from "java.util.Spliterator"
import {$Runnable$$Type} from "java.lang.Runnable"

export interface $BaseStream$$Interface<T, S extends $BaseStream<(object), (object)>> extends $AutoCloseable$$Interface {
}

export class $BaseStream<T, S extends $BaseStream<(object), (object)>> implements $BaseStream$$Interface {
 "onClose"(arg0: $Runnable$$Type): S
 "isParallel"(): boolean
 "sequential"(): S
 "unordered"(): S
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "close"(): void
 "parallel"(): S
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseStream$$Type<T, S> = ($BaseStream<(T), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseStream$$Original<T, S> = $BaseStream<(T), (S)>;}
declare module "java.util.stream.Stream$Builder" {
import {$Stream} from "java.util.stream.Stream"
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

export interface $Stream$Builder$$Interface<T> extends $Consumer$$Interface<(T)> {
}

export class $Stream$Builder<T> implements $Stream$Builder$$Interface {
 "add"(arg0: T): $Stream$Builder<(T)>
 "accept"(arg0: T): void
 "build"(): $Stream<(T)>
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stream$Builder$$Type<T> = ($Stream$Builder<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stream$Builder$$Original<T> = $Stream$Builder<(T)>;}
declare module "java.util.stream.LongStream" {
import {$LongPredicate$$Type} from "java.util.function.LongPredicate"
import {$Iterator} from "java.util.Iterator"
import {$LongStream$LongMapMultiConsumer$$Type} from "java.util.stream.LongStream$LongMapMultiConsumer"
import {$BaseStream$$Interface} from "java.util.stream.BaseStream"
import {$IntStream} from "java.util.stream.IntStream"
import {$Spliterator} from "java.util.Spliterator"
import {$OptionalDouble} from "java.util.OptionalDouble"
import {$OptionalLong} from "java.util.OptionalLong"
import {$LongFunction$$Type} from "java.util.function.LongFunction"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$LongToIntFunction$$Type} from "java.util.function.LongToIntFunction"
import {$LongUnaryOperator$$Type} from "java.util.function.LongUnaryOperator"
import {$LongSupplier$$Type} from "java.util.function.LongSupplier"
import {$LongToDoubleFunction$$Type} from "java.util.function.LongToDoubleFunction"
import {$LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$LongBinaryOperator$$Type} from "java.util.function.LongBinaryOperator"
import {$LongSummaryStatistics} from "java.util.LongSummaryStatistics"
import {$DoubleStream} from "java.util.stream.DoubleStream"
import {$Stream} from "java.util.stream.Stream"
import {$ObjLongConsumer$$Type} from "java.util.function.ObjLongConsumer"
import {$LongStream$Builder} from "java.util.stream.LongStream$Builder"

export interface $LongStream$$Interface extends $BaseStream$$Interface<(long), ($LongStream)> {
}

export class $LongStream implements $LongStream$$Interface {
 "findFirst"(): $OptionalLong
 "allMatch"(arg0: $LongPredicate$$Type): boolean
 "noneMatch"(arg0: $LongPredicate$$Type): boolean
 "dropWhile"(arg0: $LongPredicate$$Type): $LongStream
 "mapToInt"(arg0: $LongToIntFunction$$Type): $IntStream
 "mapToDouble"(arg0: $LongToDoubleFunction$$Type): $DoubleStream
 "mapMulti"(arg0: $LongStream$LongMapMultiConsumer$$Type): $LongStream
 "takeWhile"(arg0: $LongPredicate$$Type): $LongStream
 "forEachOrdered"(arg0: $LongConsumer$$Type): void
 "sequential"(): $LongStream
 "average"(): $OptionalDouble
 "summaryStatistics"(): $LongSummaryStatistics
 "asDoubleStream"(): $DoubleStream
static "rangeClosed"(arg0: long, arg1: long): $LongStream
 "mapToObj"<U>(arg0: $LongFunction$$Type<(U)>): $Stream<(U)>
 "min"(): $OptionalLong
 "max"(): $OptionalLong
 "toArray"(): (long)[]
 "iterator"(): $Iterator
 "map"(arg0: $LongUnaryOperator$$Type): $LongStream
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $ObjLongConsumer$$Type<(R)>, arg2: $BiConsumer$$Type<(R), (R)>): R
static "of"(...arg0: (long)[]): $LongStream
static "of"(arg0: long): $LongStream
 "count"(): long
static "builder"(): $LongStream$Builder
static "concat"(arg0: $LongStream$$Type, arg1: $LongStream$$Type): $LongStream
 "limit"(arg0: long): $LongStream
 "spliterator"(): $Spliterator
 "filter"(arg0: $LongPredicate$$Type): $LongStream
static "empty"(): $LongStream
 "anyMatch"(arg0: $LongPredicate$$Type): boolean
 "flatMap"(arg0: $LongFunction$$Type<($LongStream$$Type)>): $LongStream
 "forEach"(arg0: $LongConsumer$$Type): void
 "findAny"(): $OptionalLong
 "peek"(arg0: $LongConsumer$$Type): $LongStream
 "skip"(arg0: long): $LongStream
 "sum"(): long
 "reduce"(arg0: long, arg1: $LongBinaryOperator$$Type): long
 "reduce"(arg0: $LongBinaryOperator$$Type): $OptionalLong
static "range"(arg0: long, arg1: long): $LongStream
 "parallel"(): $LongStream
static "iterate"(arg0: long, arg1: $LongUnaryOperator$$Type): $LongStream
static "iterate"(arg0: long, arg1: $LongPredicate$$Type, arg2: $LongUnaryOperator$$Type): $LongStream
 "sorted"(): $LongStream
static "generate"(arg0: $LongSupplier$$Type): $LongStream
 "distinct"(): $LongStream
 "boxed"(): $Stream<(long)>
 "onClose"(arg0: $Runnable$$Type): $LongStream
 "isParallel"(): boolean
 "unordered"(): $LongStream
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongStream$$Type = ($LongStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongStream$$Original = $LongStream;}
declare module "java.util.stream.IntStream$IntMapMultiConsumer" {
import {$IntConsumer, $IntConsumer$$Type} from "java.util.function.IntConsumer"

export interface $IntStream$IntMapMultiConsumer$$Interface {

(arg0: integer, arg1: $IntConsumer): void
}

export class $IntStream$IntMapMultiConsumer implements $IntStream$IntMapMultiConsumer$$Interface {
 "accept"(arg0: integer, arg1: $IntConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$IntMapMultiConsumer$$Type = ((arg0: integer, arg1: $IntConsumer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntStream$IntMapMultiConsumer$$Original = $IntStream$IntMapMultiConsumer;}
declare module "java.util.stream.LongStream$LongMapMultiConsumer" {
import {$LongConsumer, $LongConsumer$$Type} from "java.util.function.LongConsumer"

export interface $LongStream$LongMapMultiConsumer$$Interface {

(arg0: long, arg1: $LongConsumer): void
}

export class $LongStream$LongMapMultiConsumer implements $LongStream$LongMapMultiConsumer$$Interface {
 "accept"(arg0: long, arg1: $LongConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongStream$LongMapMultiConsumer$$Type = ((arg0: long, arg1: $LongConsumer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongStream$LongMapMultiConsumer$$Original = $LongStream$LongMapMultiConsumer;}
declare module "java.util.stream.Collector$Characteristics" {
import {$Enum} from "java.lang.Enum"

export class $Collector$Characteristics extends $Enum<($Collector$Characteristics)> {
static readonly "IDENTITY_FINISH": $Collector$Characteristics
static readonly "UNORDERED": $Collector$Characteristics
static readonly "CONCURRENT": $Collector$Characteristics

public static "values"(): ($Collector$Characteristics)[]
public static "valueOf"(arg0: StringJS): $Collector$Characteristics
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collector$Characteristics$$Type = (("concurrent") | ("unordered") | ("identity_finish"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Collector$Characteristics$$Original = $Collector$Characteristics;}
declare module "java.util.stream.LongStream$Builder" {
import {$LongConsumer, $LongConsumer$$Type, $LongConsumer$$Interface} from "java.util.function.LongConsumer"
import {$LongStream} from "java.util.stream.LongStream"

export interface $LongStream$Builder$$Interface extends $LongConsumer$$Interface {
}

export class $LongStream$Builder implements $LongStream$Builder$$Interface {
 "add"(arg0: long): $LongStream$Builder
 "accept"(arg0: long): void
 "build"(): $LongStream
 "andThen"(arg0: $LongConsumer$$Type): $LongConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LongStream$Builder$$Type = ($LongStream$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LongStream$Builder$$Original = $LongStream$Builder;}
declare module "java.util.stream.IntStream$Builder" {
import {$IntStream} from "java.util.stream.IntStream"
import {$IntConsumer, $IntConsumer$$Type, $IntConsumer$$Interface} from "java.util.function.IntConsumer"

export interface $IntStream$Builder$$Interface extends $IntConsumer$$Interface {
}

export class $IntStream$Builder implements $IntStream$Builder$$Interface {
 "add"(arg0: integer): $IntStream$Builder
 "accept"(arg0: integer): void
 "build"(): $IntStream
 "andThen"(arg0: $IntConsumer$$Type): $IntConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$Builder$$Type = ($IntStream$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntStream$Builder$$Original = $IntStream$Builder;}
declare module "java.util.stream.IntStream" {
import {$Iterator} from "java.util.Iterator"
import {$BaseStream, $BaseStream$$Interface} from "java.util.stream.BaseStream"
import {$OptionalDouble} from "java.util.OptionalDouble"
import {$LongStream} from "java.util.stream.LongStream"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$IntPredicate$$Type} from "java.util.function.IntPredicate"
import {$IntBinaryOperator$$Type} from "java.util.function.IntBinaryOperator"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"
import {$IntStream$Builder} from "java.util.stream.IntStream$Builder"
import {$IntUnaryOperator$$Type} from "java.util.function.IntUnaryOperator"
import {$IntToLongFunction$$Type} from "java.util.function.IntToLongFunction"
import {$IntStream$IntMapMultiConsumer$$Type} from "java.util.stream.IntStream$IntMapMultiConsumer"
import {$OptionalInt} from "java.util.OptionalInt"
import {$Spliterator$OfInt} from "java.util.Spliterator$OfInt"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IntSummaryStatistics} from "java.util.IntSummaryStatistics"
import {$ObjIntConsumer$$Type} from "java.util.function.ObjIntConsumer"
import {$IntToDoubleFunction$$Type} from "java.util.function.IntToDoubleFunction"
import {$DoubleStream} from "java.util.stream.DoubleStream"
import {$Stream} from "java.util.stream.Stream"

export interface $IntStream$$Interface extends $BaseStream$$Interface<(integer), ($IntStream)> {
}

export class $IntStream implements $IntStream$$Interface {
 "findFirst"(): $OptionalInt
 "allMatch"(arg0: $IntPredicate$$Type): boolean
 "noneMatch"(arg0: $IntPredicate$$Type): boolean
 "dropWhile"(arg0: $IntPredicate$$Type): $IntStream
 "mapToLong"(arg0: $IntToLongFunction$$Type): $LongStream
 "mapToDouble"(arg0: $IntToDoubleFunction$$Type): $DoubleStream
 "mapMulti"(arg0: $IntStream$IntMapMultiConsumer$$Type): $IntStream
 "takeWhile"(arg0: $IntPredicate$$Type): $IntStream
 "forEachOrdered"(arg0: $IntConsumer$$Type): void
 "sequential"(): $BaseStream
 "average"(): $OptionalDouble
 "summaryStatistics"(): $IntSummaryStatistics
 "asLongStream"(): $LongStream
 "asDoubleStream"(): $DoubleStream
static "rangeClosed"(arg0: integer, arg1: integer): $IntStream
 "mapToObj"<U>(arg0: $IntFunction$$Type<(U)>): $Stream<(U)>
 "min"(): $OptionalInt
 "max"(): $OptionalInt
 "toArray"(): (integer)[]
 "iterator"(): $Iterator
 "map"(arg0: $IntUnaryOperator$$Type): $IntStream
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $ObjIntConsumer$$Type<(R)>, arg2: $BiConsumer$$Type<(R), (R)>): R
static "of"(arg0: integer): $IntStream
static "of"(...arg0: (integer)[]): $IntStream
 "count"(): long
static "builder"(): $IntStream$Builder
static "concat"(arg0: $IntStream$$Type, arg1: $IntStream$$Type): $IntStream
 "limit"(arg0: long): $IntStream
 "spliterator"(): $Spliterator$OfInt
 "filter"(arg0: $IntPredicate$$Type): $IntStream
static "empty"(): $IntStream
 "anyMatch"(arg0: $IntPredicate$$Type): boolean
 "flatMap"(arg0: $IntFunction$$Type<($IntStream$$Type)>): $IntStream
 "forEach"(arg0: $IntConsumer$$Type): void
 "findAny"(): $OptionalInt
 "peek"(arg0: $IntConsumer$$Type): $IntStream
 "skip"(arg0: long): $IntStream
 "sum"(): integer
 "reduce"(arg0: integer, arg1: $IntBinaryOperator$$Type): integer
 "reduce"(arg0: $IntBinaryOperator$$Type): $OptionalInt
static "range"(arg0: integer, arg1: integer): $IntStream
 "parallel"(): $IntStream
static "iterate"(arg0: integer, arg1: $IntUnaryOperator$$Type): $IntStream
static "iterate"(arg0: integer, arg1: $IntPredicate$$Type, arg2: $IntUnaryOperator$$Type): $IntStream
 "sorted"(): $IntStream
static "generate"(arg0: $IntSupplier$$Type): $IntStream
 "distinct"(): $IntStream
 "boxed"(): $Stream<(integer)>
 "onClose"(arg0: $Runnable$$Type): $IntStream
 "isParallel"(): boolean
 "unordered"(): $IntStream
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IntStream$$Type = ($IntStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IntStream$$Original = $IntStream;}
declare module "java.util.stream.DoubleStream" {
import {$DoubleStream$Builder} from "java.util.stream.DoubleStream$Builder"
import {$Iterator} from "java.util.Iterator"
import {$DoubleUnaryOperator$$Type} from "java.util.function.DoubleUnaryOperator"
import {$DoubleStream$DoubleMapMultiConsumer$$Type} from "java.util.stream.DoubleStream$DoubleMapMultiConsumer"
import {$BaseStream, $BaseStream$$Interface} from "java.util.stream.BaseStream"
import {$IntStream} from "java.util.stream.IntStream"
import {$OptionalDouble} from "java.util.OptionalDouble"
import {$LongStream} from "java.util.stream.LongStream"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$DoubleBinaryOperator$$Type} from "java.util.function.DoubleBinaryOperator"
import {$DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$DoubleSupplier$$Type} from "java.util.function.DoubleSupplier"
import {$DoubleToIntFunction$$Type} from "java.util.function.DoubleToIntFunction"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$ObjDoubleConsumer$$Type} from "java.util.function.ObjDoubleConsumer"
import {$DoubleFunction$$Type} from "java.util.function.DoubleFunction"
import {$DoubleSummaryStatistics} from "java.util.DoubleSummaryStatistics"
import {$Spliterator$OfDouble} from "java.util.Spliterator$OfDouble"
import {$Stream} from "java.util.stream.Stream"
import {$DoublePredicate$$Type} from "java.util.function.DoublePredicate"
import {$DoubleToLongFunction$$Type} from "java.util.function.DoubleToLongFunction"

export interface $DoubleStream$$Interface extends $BaseStream$$Interface<(double), ($DoubleStream)> {
}

export class $DoubleStream implements $DoubleStream$$Interface {
 "findFirst"(): $OptionalDouble
 "allMatch"(arg0: $DoublePredicate$$Type): boolean
 "noneMatch"(arg0: $DoublePredicate$$Type): boolean
 "dropWhile"(arg0: $DoublePredicate$$Type): $DoubleStream
 "mapToInt"(arg0: $DoubleToIntFunction$$Type): $IntStream
 "mapToLong"(arg0: $DoubleToLongFunction$$Type): $LongStream
 "mapMulti"(arg0: $DoubleStream$DoubleMapMultiConsumer$$Type): $DoubleStream
 "takeWhile"(arg0: $DoublePredicate$$Type): $DoubleStream
 "forEachOrdered"(arg0: $DoubleConsumer$$Type): void
 "sequential"(): $BaseStream
 "average"(): $OptionalDouble
 "summaryStatistics"(): $DoubleSummaryStatistics
 "mapToObj"<U>(arg0: $DoubleFunction$$Type<(U)>): $Stream<(U)>
 "min"(): $OptionalDouble
 "max"(): $OptionalDouble
 "toArray"(): (double)[]
 "iterator"(): $Iterator
 "map"(arg0: $DoubleUnaryOperator$$Type): $DoubleStream
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $ObjDoubleConsumer$$Type<(R)>, arg2: $BiConsumer$$Type<(R), (R)>): R
static "of"(arg0: double): $DoubleStream
static "of"(...arg0: (double)[]): $DoubleStream
 "count"(): long
static "builder"(): $DoubleStream$Builder
static "concat"(arg0: $DoubleStream$$Type, arg1: $DoubleStream$$Type): $DoubleStream
 "limit"(arg0: long): $DoubleStream
 "spliterator"(): $Spliterator$OfDouble
 "filter"(arg0: $DoublePredicate$$Type): $DoubleStream
static "empty"(): $DoubleStream
 "anyMatch"(arg0: $DoublePredicate$$Type): boolean
 "flatMap"(arg0: $DoubleFunction$$Type<($DoubleStream$$Type)>): $DoubleStream
 "forEach"(arg0: $DoubleConsumer$$Type): void
 "findAny"(): $OptionalDouble
 "peek"(arg0: $DoubleConsumer$$Type): $DoubleStream
 "skip"(arg0: long): $DoubleStream
 "sum"(): double
 "reduce"(arg0: $DoubleBinaryOperator$$Type): $OptionalDouble
 "reduce"(arg0: double, arg1: $DoubleBinaryOperator$$Type): double
 "parallel"(): $BaseStream
static "iterate"(arg0: double, arg1: $DoubleUnaryOperator$$Type): $DoubleStream
static "iterate"(arg0: double, arg1: $DoublePredicate$$Type, arg2: $DoubleUnaryOperator$$Type): $DoubleStream
 "sorted"(): $DoubleStream
static "generate"(arg0: $DoubleSupplier$$Type): $DoubleStream
 "distinct"(): $DoubleStream
 "boxed"(): $Stream<(double)>
 "onClose"(arg0: $Runnable$$Type): $DoubleStream
 "isParallel"(): boolean
 "unordered"(): $DoubleStream
 "close"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleStream$$Type = ($DoubleStream);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleStream$$Original = $DoubleStream;}
declare module "java.util.stream.DoubleStream$Builder" {
import {$DoubleConsumer, $DoubleConsumer$$Type, $DoubleConsumer$$Interface} from "java.util.function.DoubleConsumer"
import {$DoubleStream} from "java.util.stream.DoubleStream"

export interface $DoubleStream$Builder$$Interface extends $DoubleConsumer$$Interface {
}

export class $DoubleStream$Builder implements $DoubleStream$Builder$$Interface {
 "add"(arg0: double): $DoubleStream$Builder
 "accept"(arg0: double): void
 "build"(): $DoubleStream
 "andThen"(arg0: $DoubleConsumer$$Type): $DoubleConsumer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleStream$Builder$$Type = ($DoubleStream$Builder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleStream$Builder$$Original = $DoubleStream$Builder;}
declare module "java.util.stream.Stream" {
import {$Optional} from "java.util.Optional"
import {$ToDoubleFunction$$Type} from "java.util.function.ToDoubleFunction"
import {$BaseStream$$Interface} from "java.util.stream.BaseStream"
import {$Spliterator} from "java.util.Spliterator"
import {$List} from "java.util.List"
import {$Stream$Builder} from "java.util.stream.Stream$Builder"
import {$BinaryOperator$$Type} from "java.util.function.BinaryOperator"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$IntFunction$$Type} from "java.util.function.IntFunction"
import {$ToLongFunction$$Type} from "java.util.function.ToLongFunction"
import {$LongConsumer$$Type} from "java.util.function.LongConsumer"
import {$Function$$Type} from "java.util.function.Function"
import {$IntConsumer$$Type} from "java.util.function.IntConsumer"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Collector$$Type} from "java.util.stream.Collector"
import {$UnaryOperator$$Type} from "java.util.function.UnaryOperator"
import {$Iterator} from "java.util.Iterator"
import {$Comparator$$Type} from "java.util.Comparator"
import {$IntStream, $IntStream$$Type} from "java.util.stream.IntStream"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$LongStream, $LongStream$$Type} from "java.util.stream.LongStream"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$ToIntFunction$$Type} from "java.util.function.ToIntFunction"
import {$DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$DoubleStream, $DoubleStream$$Type} from "java.util.stream.DoubleStream"

export interface $Stream$$Interface<T> extends $BaseStream$$Interface<(T), ($Stream<(T)>)> {
}

export class $Stream<T> implements $Stream$$Interface {
 "findFirst"(): $Optional<(T)>
 "allMatch"(arg0: $Predicate$$Type<(T)>): boolean
 "noneMatch"(arg0: $Predicate$$Type<(T)>): boolean
 "dropWhile"(arg0: $Predicate$$Type<(T)>): $Stream<(T)>
 "flatMapToInt"(arg0: $Function$$Type<(T), ($IntStream$$Type)>): $IntStream
 "flatMapToLong"(arg0: $Function$$Type<(T), ($LongStream$$Type)>): $LongStream
 "flatMapToDouble"(arg0: $Function$$Type<(T), ($DoubleStream$$Type)>): $DoubleStream
 "mapToInt"(arg0: $ToIntFunction$$Type<(T)>): $IntStream
 "mapToLong"(arg0: $ToLongFunction$$Type<(T)>): $LongStream
 "mapToDouble"(arg0: $ToDoubleFunction$$Type<(T)>): $DoubleStream
 "mapMulti"<R>(arg0: $BiConsumer$$Type<(T), ($Consumer<(R)>)>): $Stream<(R)>
 "mapMultiToInt"(arg0: $BiConsumer$$Type<(T), ($IntConsumer)>): $IntStream
 "mapMultiToLong"(arg0: $BiConsumer$$Type<(T), ($LongConsumer)>): $LongStream
 "mapMultiToDouble"(arg0: $BiConsumer$$Type<(T), ($DoubleConsumer)>): $DoubleStream
 "takeWhile"(arg0: $Predicate$$Type<(T)>): $Stream<(T)>
 "forEachOrdered"(arg0: $Consumer$$Type<(T)>): void
 "min"(arg0: $Comparator$$Type<(T)>): $Optional<(T)>
 "max"(arg0: $Comparator$$Type<(T)>): $Optional<(T)>
 "toArray"<A>(arg0: $IntFunction$$Type<((A)[])>): (A)[]
 "toArray"(): (any)[]
 "map"<R>(arg0: $Function$$Type<(T), (R)>): $Stream<(R)>
 "collect"<R>(arg0: $Supplier$$Type<(R)>, arg1: $BiConsumer$$Type<(R), (T)>, arg2: $BiConsumer$$Type<(R), (R)>): R
 "collect"<R, A>(arg0: $Collector$$Type<(T), (A), (R)>): R
 "toList"(): $List<(T)>
static "of"<T>(arg0: T): $Stream<(T)>
static "of"<T>(...arg0: (T)[]): $Stream<(T)>
 "count"(): long
static "builder"<T>(): $Stream$Builder<(T)>
static "concat"<T>(arg0: $Stream$$Type<(T)>, arg1: $Stream$$Type<(T)>): $Stream<(T)>
 "limit"(arg0: long): $Stream<(T)>
 "filter"(arg0: $Predicate$$Type<(T)>): $Stream<(T)>
static "empty"<T>(): $Stream<(T)>
 "anyMatch"(arg0: $Predicate$$Type<(T)>): boolean
 "flatMap"<R>(arg0: $Function$$Type<(T), ($Stream$$Type<(R)>)>): $Stream<(R)>
 "forEach"(arg0: $Consumer$$Type<(T)>): void
 "findAny"(): $Optional<(T)>
 "peek"(arg0: $Consumer$$Type<(T)>): $Stream<(T)>
 "skip"(arg0: long): $Stream<(T)>
 "reduce"<U>(arg0: U, arg1: $BiFunction$$Type<(U), (T), (U)>, arg2: $BinaryOperator$$Type<(U)>): U
 "reduce"(arg0: $BinaryOperator$$Type<(T)>): $Optional<(T)>
 "reduce"(arg0: T, arg1: $BinaryOperator$$Type<(T)>): T
static "iterate"<T>(arg0: T, arg1: $UnaryOperator$$Type<(T)>): $Stream<(T)>
static "iterate"<T>(arg0: T, arg1: $Predicate$$Type<(T)>, arg2: $UnaryOperator$$Type<(T)>): $Stream<(T)>
 "sorted"(): $Stream<(T)>
 "sorted"(arg0: $Comparator$$Type<(T)>): $Stream<(T)>
static "generate"<T>(arg0: $Supplier$$Type<(T)>): $Stream<(T)>
 "distinct"(): $Stream<(T)>
static "ofNullable"<T>(arg0: T): $Stream<(T)>
 "onClose"(arg0: $Runnable$$Type): $Stream<(T)>
 "isParallel"(): boolean
 "sequential"(): $Stream<(T)>
 "unordered"(): $Stream<(T)>
 "iterator"(): $Iterator<(T)>
 "spliterator"(): $Spliterator<(T)>
 "close"(): void
 "parallel"(): $Stream<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stream$$Type<T> = ($Stream<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stream$$Original<T> = $Stream<(T)>;}
declare module "java.util.stream.DoubleStream$DoubleMapMultiConsumer" {
import {$DoubleConsumer, $DoubleConsumer$$Type} from "java.util.function.DoubleConsumer"

export interface $DoubleStream$DoubleMapMultiConsumer$$Interface {

(arg0: double, arg1: $DoubleConsumer): void
}

export class $DoubleStream$DoubleMapMultiConsumer implements $DoubleStream$DoubleMapMultiConsumer$$Interface {
 "accept"(arg0: double, arg1: $DoubleConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DoubleStream$DoubleMapMultiConsumer$$Type = ((arg0: double, arg1: $DoubleConsumer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DoubleStream$DoubleMapMultiConsumer$$Original = $DoubleStream$DoubleMapMultiConsumer;}
declare module "java.util.stream.Collector" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$Collector$Characteristics, $Collector$Characteristics$$Type} from "java.util.stream.Collector$Characteristics"
import {$BiConsumer, $BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Set} from "java.util.Set"
import {$BinaryOperator, $BinaryOperator$$Type} from "java.util.function.BinaryOperator"

export interface $Collector$$Interface<T, A, R> {
}

export class $Collector<T, A, R> implements $Collector$$Interface {
 "accumulator"(): $BiConsumer<(A), (T)>
 "finisher"(): $Function<(A), (R)>
static "of"<T, A, R>(arg0: $Supplier$$Type<(A)>, arg1: $BiConsumer$$Type<(A), (T)>, arg2: $BinaryOperator$$Type<(A)>, arg3: $Function$$Type<(A), (R)>, ...arg4: ($Collector$Characteristics$$Type)[]): $Collector<(T), (A), (R)>
static "of"<T, R>(arg0: $Supplier$$Type<(R)>, arg1: $BiConsumer$$Type<(R), (T)>, arg2: $BinaryOperator$$Type<(R)>, ...arg3: ($Collector$Characteristics$$Type)[]): $Collector<(T), (R), (R)>
 "characteristics"(): $Set<($Collector$Characteristics)>
 "combiner"(): $BinaryOperator<(A)>
 "supplier"(): $Supplier<(A)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Collector$$Type<T, A, R> = ($Collector<(T), (A), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Collector$$Original<T, A, R> = $Collector<(T), (A), (R)>;}
