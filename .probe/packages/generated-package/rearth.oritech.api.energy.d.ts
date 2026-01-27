declare module "rearth.oritech.api.energy.containers.DynamicEnergyStorage" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$SyncType$$Type} from "rearth.oritech.api.networking.SyncType"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$UpdatableField$$Interface} from "rearth.oritech.api.networking.UpdatableField"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $DynamicEnergyStorage extends $EnergyApi$EnergyStorage implements $UpdatableField$$Interface<($DynamicEnergyStorage), (long)> {
 "amount": long
 "maxExtract": long
static readonly "PACKET_CODEC": $StreamCodec<($ByteBuf), ($DynamicEnergyStorage)>
 "maxInsert": long
 "capacity": long

constructor(arg0: long, arg1: long, arg2: long, arg3: long)
constructor(arg0: long, arg1: long, arg2: long, arg3: $Runnable$$Type, arg4: boolean)
constructor(arg0: long, arg1: long, arg2: long, arg3: $Runnable$$Type)

public "setAmount"(arg0: long): void
public "getMaxExtract"(): long
public "useDeltaOnly"(arg0: $SyncType$$Type): boolean
public "getDeltaData"(): any
public "getDeltaCodec"(): $StreamCodec<($ByteBuf), (long)>
public "getFullCodec"(): $StreamCodec<($ByteBuf), ($DynamicEnergyStorage)>
public "handleDeltaUpdate"(arg0: long): void
public "handleDeltaUpdate"(arg0: any): void
public "handleFullUpdate"(arg0: any): void
public "handleFullUpdate"(arg0: $DynamicEnergyStorage$$Type): void
public "insertIgnoringLimit"(arg0: long, arg1: boolean): long
public "setMaxInsert"(arg0: long): void
public "getFullData"(): $DynamicEnergyStorage
public "getMaxInsert"(): long
public "setMaxExtract"(arg0: long): void
public "getCapacity"(): long
public "setCapacity"(arg0: long): void
public "update"(): void
public "extract"(arg0: long, arg1: boolean): long
public "insert"(arg0: long, arg1: boolean): long
public "getAmount"(): long
get "deltaData"(): any
get "deltaCodec"(): $StreamCodec<($ByteBuf), (long)>
get "fullCodec"(): $StreamCodec<($ByteBuf), ($DynamicEnergyStorage)>
get "fullData"(): $DynamicEnergyStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DynamicEnergyStorage$$Type = ($DynamicEnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DynamicEnergyStorage$$Original = $DynamicEnergyStorage;}
declare module "rearth.oritech.api.energy.EnergyApi$ItemProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EnergyApi$EnergyStorage, $EnergyApi$EnergyStorage$$Type} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"

export interface $EnergyApi$ItemProvider$$Interface {

(arg0: $ItemStack): $EnergyApi$EnergyStorage$$Type
}

export class $EnergyApi$ItemProvider implements $EnergyApi$ItemProvider$$Interface {
 "getEnergyStorage"(arg0: $ItemStack$$Type): $EnergyApi$EnergyStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyApi$ItemProvider$$Type = ((arg0: $ItemStack) => $EnergyApi$EnergyStorage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyApi$ItemProvider$$Original = $EnergyApi$ItemProvider;}
declare module "rearth.oritech.api.energy.EnergyApi$BlockProvider" {
import {$EnergyApi$EnergyStorage, $EnergyApi$EnergyStorage$$Type} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"

export interface $EnergyApi$BlockProvider$$Interface {

(arg0: $Direction): $EnergyApi$EnergyStorage$$Type
}

export class $EnergyApi$BlockProvider implements $EnergyApi$BlockProvider$$Interface {
 "getEnergyStorage"(arg0: $Direction$$Type): $EnergyApi$EnergyStorage
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyApi$BlockProvider$$Type = ((arg0: $Direction) => $EnergyApi$EnergyStorage$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyApi$BlockProvider$$Original = $EnergyApi$BlockProvider;}
declare module "rearth.oritech.api.energy.EnergyApi$EnergyStorage" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export class $EnergyApi$EnergyStorage {
constructor()

public "setAmount"(arg0: long): void
public "supportsExtraction"(): boolean
public "supportsInsertion"(): boolean
public "getCapacity"(): long
public "update"(): void
public "extract"(arg0: long, arg1: boolean): long
public "insert"(arg0: long, arg1: boolean): long
public "getAmount"(): long
set "amount"(value: long)
get "capacity"(): long
get "amount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyApi$EnergyStorage$$Type = ($EnergyApi$EnergyStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyApi$EnergyStorage$$Original = $EnergyApi$EnergyStorage;}
