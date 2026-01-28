declare module "java.util.random.RandomGenerator" {
import {$IntStream} from "java.util.stream.IntStream"
import {$LongStream} from "java.util.stream.LongStream"
import {$DoubleStream} from "java.util.stream.DoubleStream"

export interface $RandomGenerator$$Interface {

(): long
get "deprecated"(): boolean
public static get "default"(): $RandomGenerator
}

export class $RandomGenerator implements $RandomGenerator$$Interface {
 "ints"(arg0: long): $IntStream
 "ints"(): $IntStream
 "ints"(arg0: long, arg1: integer, arg2: integer): $IntStream
 "ints"(arg0: integer, arg1: integer): $IntStream
 "doubles"(arg0: long, arg1: double, arg2: double): $DoubleStream
 "doubles"(arg0: long): $DoubleStream
 "doubles"(arg0: double, arg1: double): $DoubleStream
 "doubles"(): $DoubleStream
 "nextFloat"(arg0: float): float
 "nextFloat"(): float
 "nextFloat"(arg0: float, arg1: float): float
 "nextGaussian"(arg0: double, arg1: double): double
 "nextGaussian"(): double
 "longs"(): $LongStream
 "longs"(arg0: long, arg1: long, arg2: long): $LongStream
 "longs"(arg0: long): $LongStream
 "longs"(arg0: long, arg1: long): $LongStream
 "nextBytes"(arg0: (byte)[]): void
 "isDeprecated"(): boolean
 "nextExponential"(): double
static "getDefault"(): $RandomGenerator
static "of"(arg0: StringJS): $RandomGenerator
 "nextDouble"(arg0: double, arg1: double): double
 "nextDouble"(arg0: double): double
 "nextDouble"(): double
 "nextInt"(): integer
 "nextInt"(arg0: integer, arg1: integer): integer
 "nextInt"(arg0: integer): integer
 "nextLong"(arg0: long, arg1: long): long
 "nextLong"(arg0: long): long
 "nextLong"(): long
 "nextBoolean"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RandomGenerator$$Type = (() => long);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RandomGenerator$$Original = $RandomGenerator;}
