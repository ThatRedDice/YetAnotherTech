declare module "org.antarcticgardens.esl.energy.SimpleEnergyStorage" {
import {$EnergyStorage, $EnergyStorage$$Type, $EnergyStorage$$Interface} from "org.antarcticgardens.esl.energy.EnergyStorage"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$TransactionContext$$Type} from "org.antarcticgardens.esl.transaction.TransactionContext"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$SnapshotParticipant} from "org.antarcticgardens.esl.transaction.SnapshotParticipant"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ItemHolder$$Type} from "org.antarcticgardens.esl.util.ItemHolder"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $SimpleEnergyStorage extends $SnapshotParticipant<(long)> implements $EnergyStorage$$Interface {
constructor(capacity: long)

public "supportsExtraction"(): boolean
public "supportsInsertion"(): boolean
public "onFinalCommit"(callback: $Runnable$$Type): $SimpleEnergyStorage
public "setStoredEnergy"(amount: long): $SimpleEnergyStorage
public "internalInsert"(amount: long, simulated: boolean): long
public "setSupportsInsertion"(supportsInsertion: boolean): $SimpleEnergyStorage
public "setSupportsExtraction"(supportsExtraction: boolean): $SimpleEnergyStorage
public "internalExtract"(amount: long, simulated: boolean): long
public "getStoredEnergy"(): long
public "setMaxExtract"(maxExtract: long): $SimpleEnergyStorage
public "setMaxInsert"(maxInsert: long): $SimpleEnergyStorage
public "restoreSnapshot"(arg0: any): void
public "restoreSnapshot"(snapshot: long): void
public "setCapacity"(capacity: long): $SimpleEnergyStorage
public "extract"(amount: long, context: $TransactionContext$$Type): long
public "insert"(amount: long, context: $TransactionContext$$Type): long
public "getCapacity"(): long
public "createSnapshot"(): any
public static "findForBlock"(world: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): $EnergyStorage
public static "findForItem"(holder: $ItemHolder$$Type): $EnergyStorage
public static "registerForItem"(provider: $Function$$Type<($ItemHolder), ($EnergyStorage$$Type)>, item: $ItemLike$$Type): void
public static "registerForBlockEntity"<T extends $BlockEntity>(provider: $BiFunction$$Type<(T), ($Direction), ($EnergyStorage$$Type)>, blockEntityType: $BlockEntityType$$Type<(T)>): void
set "storedEnergy"(value: long)
get "storedEnergy"(): long
set "maxExtract"(value: long)
set "maxInsert"(value: long)
set "capacity"(value: long)
get "capacity"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleEnergyStorage$$Type = ($SimpleEnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleEnergyStorage$$Original = $SimpleEnergyStorage;}
declare module "org.antarcticgardens.esl.energy.EnergyStorage" {
import {$BiFunction$$Type} from "java.util.function.BiFunction"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Function$$Type} from "java.util.function.Function"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$ItemHolder$$Type} from "org.antarcticgardens.esl.util.ItemHolder"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$TransactionContext$$Type} from "org.antarcticgardens.esl.transaction.TransactionContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $EnergyStorage$$Interface {
get "storedEnergy"(): long
get "capacity"(): long
}

export class $EnergyStorage implements $EnergyStorage$$Interface {
 "supportsExtraction"(): boolean
 "supportsInsertion"(): boolean
static "findForBlock"(world: $Level$$Type, pos: $BlockPos$$Type, direction: $Direction$$Type): $EnergyStorage
static "findForItem"(holder: $ItemHolder$$Type): $EnergyStorage
static "registerForItem"(provider: $Function$$Type<($ItemHolder), ($EnergyStorage$$Type)>, item: $ItemLike$$Type): void
static "registerForBlockEntity"<T extends $BlockEntity>(provider: $BiFunction$$Type<(T), ($Direction), ($EnergyStorage$$Type)>, blockEntityType: $BlockEntityType$$Type<(T)>): void
 "getStoredEnergy"(): long
 "extract"(arg0: long, arg1: $TransactionContext$$Type): long
 "insert"(arg0: long, arg1: $TransactionContext$$Type): long
 "getCapacity"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyStorage$$Type = ($EnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyStorage$$Original = $EnergyStorage;}
