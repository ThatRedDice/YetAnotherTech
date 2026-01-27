declare module "java.util.concurrent.locks.Condition" {
import {$Date$$Type} from "java.util.Date"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $Condition$$Interface {
}

export class $Condition implements $Condition$$Interface {
 "await"(arg0: long, arg1: $TimeUnit$$Type): boolean
 "await"(): void
 "signal"(): void
 "signalAll"(): void
 "awaitUninterruptibly"(): void
 "awaitNanos"(arg0: long): long
 "awaitUntil"(arg0: $Date$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Condition$$Type = ($Condition);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Condition$$Original = $Condition;}
declare module "java.util.concurrent.locks.Lock" {
import {$Condition} from "java.util.concurrent.locks.Condition"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export interface $Lock$$Interface {
}

export class $Lock implements $Lock$$Interface {
 "lock"(): void
 "unlock"(): void
 "newCondition"(): $Condition
 "lockInterruptibly"(): void
 "tryLock"(): boolean
 "tryLock"(arg0: long, arg1: $TimeUnit$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Lock$$Type = ($Lock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Lock$$Original = $Lock;}
declare module "java.util.concurrent.locks.ReentrantLock" {
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Lock$$Interface} from "java.util.concurrent.locks.Lock"
import {$Thread$$Type} from "java.lang.Thread"
import {$Condition, $Condition$$Type} from "java.util.concurrent.locks.Condition"
import {$TimeUnit$$Type} from "java.util.concurrent.TimeUnit"

export class $ReentrantLock implements $Lock$$Interface, $Serializable$$Interface {
constructor()
constructor(arg0: boolean)

public "lock"(): void
public "toString"(): StringJS
public "unlock"(): void
public "newCondition"(): $Condition
public "lockInterruptibly"(): void
public "tryLock"(): boolean
public "tryLock"(arg0: long, arg1: $TimeUnit$$Type): boolean
public "getHoldCount"(): integer
public "isLocked"(): boolean
public "hasQueuedThreads"(): boolean
public "getQueueLength"(): integer
public "hasWaiters"(arg0: $Condition$$Type): boolean
public "getWaitQueueLength"(arg0: $Condition$$Type): integer
public "isHeldByCurrentThread"(): boolean
public "isFair"(): boolean
public "hasQueuedThread"(arg0: $Thread$$Type): boolean
get "holdCount"(): integer
get "locked"(): boolean
get "queueLength"(): integer
get "heldByCurrentThread"(): boolean
get "fair"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ReentrantLock$$Type = ($ReentrantLock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ReentrantLock$$Original = $ReentrantLock;}
