declare module "org.antarcticgardens.esl.transaction.TransactionResult" {
import {$Enum} from "java.lang.Enum"

export class $TransactionResult extends $Enum<($TransactionResult)> {
static readonly "COMMITTED": $TransactionResult
static readonly "ABORTED": $TransactionResult

public static "values"(): ($TransactionResult)[]
public static "valueOf"(name: StringJS): $TransactionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionResult$$Type = (("committed") | ("aborted"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransactionResult$$Original = $TransactionResult;}
declare module "org.antarcticgardens.esl.transaction.TransactionContext$CloseCallback" {
import {$TransactionResult, $TransactionResult$$Type} from "org.antarcticgardens.esl.transaction.TransactionResult"
import {$TransactionContext, $TransactionContext$$Type} from "org.antarcticgardens.esl.transaction.TransactionContext"

export interface $TransactionContext$CloseCallback$$Interface {

(arg0: $TransactionContext, arg1: $TransactionResult): void
}

export class $TransactionContext$CloseCallback implements $TransactionContext$CloseCallback$$Interface {
 "onClose"(arg0: $TransactionContext$$Type, arg1: $TransactionResult$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$CloseCallback$$Type = ((arg0: $TransactionContext, arg1: $TransactionResult) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransactionContext$CloseCallback$$Original = $TransactionContext$CloseCallback;}
declare module "org.antarcticgardens.esl.transaction.TransactionContext$OuterCloseCallback" {
import {$TransactionResult, $TransactionResult$$Type} from "org.antarcticgardens.esl.transaction.TransactionResult"

export interface $TransactionContext$OuterCloseCallback$$Interface {

(arg0: $TransactionResult): void
}

export class $TransactionContext$OuterCloseCallback implements $TransactionContext$OuterCloseCallback$$Interface {
 "onOuterClose"(arg0: $TransactionResult$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$OuterCloseCallback$$Type = ((arg0: $TransactionResult) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransactionContext$OuterCloseCallback$$Original = $TransactionContext$OuterCloseCallback;}
declare module "org.antarcticgardens.esl.transaction.SnapshotParticipant" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $SnapshotParticipant<T> {
constructor()

public "restoreSnapshot"(arg0: T): void
public "createSnapshot"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SnapshotParticipant$$Type<T> = ($SnapshotParticipant<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SnapshotParticipant$$Original<T> = $SnapshotParticipant<(T)>;}
declare module "org.antarcticgardens.esl.transaction.Transaction" {
import {$AutoCloseable$$Interface} from "java.lang.AutoCloseable"
import {$TransactionContext$$Interface} from "org.antarcticgardens.esl.transaction.TransactionContext"
import {$TransactionContext$OuterCloseCallback$$Type} from "org.antarcticgardens.esl.transaction.TransactionContext$OuterCloseCallback"
import {$TransactionContext$CloseCallback$$Type} from "org.antarcticgardens.esl.transaction.TransactionContext$CloseCallback"

export interface $Transaction$$Interface extends $AutoCloseable$$Interface, $TransactionContext$$Interface {
get "open"(): boolean
get "nestingDepth"(): integer
}

export class $Transaction implements $Transaction$$Interface {
 "commit"(): void
 "isOpen"(): boolean
 "close"(): void
 "abort"(): void
 "openNested"(): $Transaction
 "getNestingDepth"(): integer
 "getOpenTransaction"(arg0: integer): $Transaction
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$$Type): void
 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transaction$$Type = ($Transaction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Transaction$$Original = $Transaction;}
declare module "org.antarcticgardens.esl.transaction.TransactionContext" {
import {$Transaction} from "org.antarcticgardens.esl.transaction.Transaction"
import {$TransactionContext$OuterCloseCallback$$Type} from "org.antarcticgardens.esl.transaction.TransactionContext$OuterCloseCallback"
import {$TransactionContext$CloseCallback$$Type} from "org.antarcticgardens.esl.transaction.TransactionContext$CloseCallback"

export interface $TransactionContext$$Interface {
get "nestingDepth"(): integer
}

export class $TransactionContext implements $TransactionContext$$Interface {
 "openNested"(): $Transaction
 "getNestingDepth"(): integer
 "getOpenTransaction"(arg0: integer): $Transaction
 "addCloseCallback"(arg0: $TransactionContext$CloseCallback$$Type): void
 "addOuterCloseCallback"(arg0: $TransactionContext$OuterCloseCallback$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransactionContext$$Type = ($TransactionContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransactionContext$$Original = $TransactionContext;}
